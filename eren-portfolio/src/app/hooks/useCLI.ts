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
    history: [{
      command: '',
      output: `Terminal Modu Aktif 🚀

Eren OĞUZ Portfolio CLI v1.0
Yardım için /help yazın. Normal görünüme dönmek için /exit yazın.`,
      timestamp: new Date()
    }],
    currentInput: ''
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const executeCommand = useCallback((input: string) => {
    const command = input.toLowerCase().trim();
    let output: string;

    if (command === '' || !command.startsWith('/')) {
      output = 'Komutlar "/" ile başlamalıdır. Yardım için /help yazın.';
    } else {
      const cmd = command.slice(1); // Remove the '/' prefix
      
      if (cmd in COMMANDS) {
        output = COMMANDS[cmd as keyof typeof COMMANDS]();
      } else {
        output = `Bilinmeyen komut: ${command}. Yardım için /help yazın.`;
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
      setState(prev => ({
        ...prev,
        isActive: false,
        history: [],
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
    inputRef
  };
};