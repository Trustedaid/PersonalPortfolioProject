'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import profileData from '@/data/profile.json';

export interface CLICommand {
  command: string;
  output: string;
  timestamp: Date;
}

export interface CLIState {
  isActive: boolean;
  history: CLICommand[];
  currentInput: string;
}

const WELCOME_MESSAGE = `Terminal Modu Aktif 🚀

Eren OĞUZ Portfolio CLI v1.0
Yardım için /help yazın. Normal görünüme dönmek için /exit yazın.`;

const createWelcomeHistory = (): CLICommand[] => [
  { command: '', output: WELCOME_MESSAGE, timestamp: new Date() },
];

const COMMANDS = {
  help: () => `Kullanılabilir komutlar:
  /help          - Bu yardım menüsünü gösterir
  /about         - Hakkımda bilgileri gösterir
  /projects      - Projelerimi listeler
  /skills        - Teknik yeteneklerimi listeler
  /experience    - İş deneyimlerimi gösterir
  /education     - Eğitim bilgilerimi gösterir
  /certificates  - Sertifikalarımı listeler
  /contact       - İletişim bilgilerimi gösterir
  /download      - Özgeçmişi indirir
  /clear         - Terminal ekranını temizler
  /exit          - CLI modundan çıkar ve normal görünüme döner
  /web           - Normal web görünümüne geç`,

  about: () => `${profileData.name}
${profileData.title}
${profileData.location}

${profileData.about}`,

  skills: () => {
    const { frontend, backend, tools } = profileData.skills;
    return `🎨 Frontend: ${frontend.join(', ')}

⚙️  Backend: ${backend.join(', ')}

🛠️  Tools & Technologies: ${tools.join(', ')}`;
  },

  experience: () => {
    return profileData.experience.map((exp, index) => 
      `${index + 1}. ${exp.role} @ ${exp.org}
   📅 ${exp.start} - ${exp.end}
   📝 ${exp.desc}
`).join('\n');
  },

  education: () => {
    return profileData.education.map((edu, index) =>
      `${index + 1}. ${edu.degree}
   🏫 ${edu.school}
   📅 ${edu.start} - ${edu.end}
   📊 GPA: ${edu.gpa}
`).join('\n');
  },

  certificates: () => {
    return profileData.certificates.map((cert, index) =>
      `${index + 1}. ${cert.title}
   🏆 ${cert.issuer}
`).join('\n');
  },

  contact: () => {
    const { email, github, linkedin } = profileData.contacts;
    return `📧 Email: ${email}
🐙 GitHub: ${github}
💼 LinkedIn: ${linkedin}`;
  },

  projects: () => {
    if (!profileData.projects || profileData.projects.length === 0) {
      return "Kayıtlı proje bulunamadı.";
    }
    return profileData.projects.map((proj, index) =>
      `${index + 1}. ${proj.title}
   Açıklama: ${proj.description}
   Teknolojiler: ${proj.technologies.join(', ')}`
    ).join('\n');
  },

  download: () => {
    // Create download link and trigger download
    const link = document.createElement('a');
    link.href = '/Eren-OGUZ_SoftwareDeveloper_Resume.pdf';
    link.download = 'Eren-OGUZ_SoftwareDeveloper_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return 'Özgeçmiş indiriliyor... Teşekkürler :)';
  },

  clear: () => 'CLEAR_COMMAND',
  exit: () => 'EXIT_COMMAND',
  web: () => 'EXIT_COMMAND'
};

export const useCLI = () => {
  const [state, setState] = useState<CLIState>({
    isActive: false,
    history: createWelcomeHistory(),
    currentInput: ''
  });

  const inputRef = useRef<HTMLInputElement>(null);

  // Yukarı/aşağı ok ile geri çağırmak için girilen komut geçmişi
  const commandLog = useRef<string[]>([]);
  const historyIndex = useRef<number>(-1);

  const executeCommand = useCallback((input: string) => {
    const trimmed = input.trim();
    const command = trimmed.toLowerCase();
    let output: string;

    // Çalıştırılan komutu geçmişe ekle (recall için)
    if (trimmed) {
      commandLog.current.push(trimmed);
      historyIndex.current = commandLog.current.length;
    }

    if (command === '' || !command.startsWith('/')) {
      output = 'Komutlar "/" ile başlamalıdır. Yardım için /help yazın.';
    } else {
      // İlk token'ı al; ekstra argümanları yok say (ör. "/help foo" -> "help")
      const cmd = command.slice(1).split(/\s+/)[0];

      if (cmd in COMMANDS) {
        output = COMMANDS[cmd as keyof typeof COMMANDS]();
      } else {
        output = `Bilinmeyen komut: /${cmd}. Yardım için /help yazın.`;
      }
    }

    if (output === 'CLEAR_COMMAND') {
      setState(prev => ({
        ...prev,
        history: [],
        currentInput: ''
      }));
      return;
    }

    if (output === 'EXIT_COMMAND') {
      // Çıkışta karşılama ekranına sıfırla; tekrar açıldığında boş kalmaz
      setState(prev => ({
        ...prev,
        isActive: false,
        history: createWelcomeHistory(),
        currentInput: ''
      }));
      return;
    }

    setState(prev => ({
      ...prev,
      history: [...prev.history, {
        command: input,
        output,
        timestamp: new Date()
      }],
      currentInput: ''
    }));
  }, []);

  const setCurrentInput = useCallback((input: string) => {
    setState(prev => ({ ...prev, currentInput: input }));
  }, []);

  // Yukarı/aşağı ok ile önceki komutları gezin
  const navigateHistory = useCallback((direction: 'up' | 'down') => {
    const log = commandLog.current;
    if (log.length === 0) return;

    if (direction === 'up') {
      historyIndex.current = Math.max(0, historyIndex.current - 1);
    } else {
      historyIndex.current = Math.min(log.length, historyIndex.current + 1);
    }

    const recalled =
      historyIndex.current >= log.length ? '' : log[historyIndex.current];
    setState(prev => ({ ...prev, currentInput: recalled }));
  }, []);

  // Focus input when needed
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [state.history]);

  return {
    state,
    executeCommand,
    setCurrentInput,
    navigateHistory,
    inputRef
  };
};