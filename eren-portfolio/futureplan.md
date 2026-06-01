# 🚀 Portfolio Modernizasyon Planı — Framer Motion & "Dark + Neon" Redesign

> **Amaç:** Mevcut açık temalı (mavi-mor-pembe gradient) portfolyoyu; scroll yaptıkça
> canlanan, modern, "karanlık + neon vurgu + deep purple" estetiğine sahip,
> Framer Motion ile yönetilen yaratıcı ve ilgi çekici bir deneyime dönüştürmek.

**Hazırlanma Tarihi:** 2026-06-01
**Hedef Branch:** `claude/portfolio-framer-motion-p3iVg`
**Proje:** `eren-portfolio` (Next.js 15.3.6 · React 19 · Tailwind CSS v4 · TypeScript)

---

## 📊 1. Mevcut Durum Analizi (Where We Are)

| Alan | Mevcut Durum |
|------|--------------|
| **Tema** | Açık tema varsayılan; `prefers-color-scheme: dark` ile sınırlı koyu mod |
| **Renk Dili** | `blue → purple → pink` gradient (Tailwind `from-blue-500 via-purple-500 to-pink-500`) |
| **Animasyon** | CSS `@keyframes` (fadeInUp, float, glow, shimmer) + IntersectionObserver (`useScrollReveal`) |
| **Scroll Efekti** | Basit `.scroll-reveal → .revealed` opacity/translate geçişi |
| **Arka Plan** | Canvas tabanlı `MatrixBackground` (yeşil matrix yağmuru) |
| **Kütüphane** | `react-icons` var; **Framer Motion YOK** |
| **Bileşenler** | Hero, AboutMe, Skills, Experience, Education, Projects, Contact, Footer, CLI, Navbar |
| **i18n** | TR/EN dil desteği (`LanguageContext` + `translations.ts`) |

### Mevcut Bileşen Envanteri
```
src/app/
├── page.tsx                 → Ana sayfa düzeni (section sıralaması)
├── layout.tsx               → Root layout, SEO meta, fontlar
├── globals.css              → CSS değişkenleri + keyframe animasyonlar
├── Navbar.tsx               → Sticky navbar + mobil hamburger menü
├── components/
│   ├── Hero.tsx             → Karşılama + tech ikonları
│   ├── AboutMe.tsx          → Hakkımda
│   ├── Skills.tsx           → Yetenekler
│   ├── Experience.tsx       → Deneyim
│   ├── Education.tsx        → Eğitim
│   ├── Projects.tsx         → Proje kartları
│   ├── Contact.tsx          → İletişim
│   ├── Footer.tsx           → Alt bilgi
│   ├── MatrixBackground.tsx → Canvas matrix efekti
│   ├── CLI.tsx / CLIToggle  → İnteraktif terminal modu
└── hooks/
    ├── useScrollReveal.ts   → IntersectionObserver reveal
    ├── useTypewriter.ts     → Daktilo efekti
    ├── useCLI.ts            → CLI mantığı
    └── LanguageContext.tsx  → TR/EN dil yönetimi
```

---

## 🎨 2. Yeni Renk Paleti (Design Tokens)

> **Tasarım Hissi:** "Karanlık + Neon Vurgu" — teknoloji odaklı portfolyolarda yaygın,
> deep purple ile zenginleştirilmiş premium koyu mod.

### Çekirdek Palet

| Rol | Token | HEX | Kullanım |
|-----|-------|-----|----------|
| **Ana Arka Plan** | `--bg-base` | `#0A0A0A` | Sitenin geneli (derin siyah) |
| **Arka Plan (Alt)** | `--bg-elevated` | `#121212` | Hafif yükseltilmiş bölümler |
| **Yüzey / Kart** | `--surface` | `#1A1A1A` | Kartlar, paneller |
| **Yüzey (Hover)** | `--surface-hover` | `#262626` | Kart hover / aktif durum |
| **Ana Vurgu (Neon)** | `--accent` | `#10B981` | Linkler, butonlar, hareketli grafikler (emerald) |
| **Vurgu (Parlak)** | `--accent-glow` | `#00FF66` | Neon glow / parıltı efektleri |
| **Deep Purple** | `--purple` | `#7C3AED` | İkincil vurgu, gradient ortağı |
| **Deep Purple (Koyu)** | `--purple-deep` | `#4C1D95` | Gradient derinliği, gölgeler |
| **Birincil Metin** | `--text-primary` | `#FFFFFF` | Başlıklar, ana içerik |
| **İkincil Metin** | `--text-secondary` | `#A1A1AA` | Açıklamalar, etiketler |
| **Üçüncül Metin** | `--text-muted` | `#94A3B8` | Tarihler, dipnotlar (slate) |
| **Kenarlık** | `--border` | `#262626` | İnce ayraçlar |
| **Kenarlık (Vurgu)** | `--border-accent` | `rgba(16,185,129,0.3)` | Glow kenarlıklar |

### Sinyal Gradientleri
```css
/* Ana vurgu gradyanı — neon yeşil → deep purple */
--gradient-primary: linear-gradient(135deg, #10B981 0%, #7C3AED 100%);

/* Hero / başlık gradyanı — çok tonlu */
--gradient-hero: linear-gradient(135deg, #00FF66 0%, #10B981 40%, #7C3AED 100%);

/* Glow halesi (radial) */
--gradient-glow: radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%);

/* Mor sis (deep purple ambient) */
--gradient-ambient: radial-gradient(ellipse at top, rgba(124,58,237,0.12) 0%, transparent 60%);
```

### Tailwind v4 Token Tanımı (globals.css `@theme`)
```css
@theme inline {
  --color-base:        #0A0A0A;
  --color-elevated:    #121212;
  --color-surface:     #1A1A1A;
  --color-surface-hi:  #262626;
  --color-accent:      #10B981;
  --color-accent-glow: #00FF66;
  --color-purple:      #7C3AED;
  --color-purple-deep: #4C1D95;
  --color-text:        #FFFFFF;
  --color-text-sec:    #A1A1AA;
  --color-text-muted:  #94A3B8;
  --color-line:        #262626;
}
```
> ✅ Bu sayede `bg-base`, `text-accent`, `border-line`, `from-accent`, `to-purple`
> gibi sınıflar her bileşende tutarlı kullanılabilir.

---

## 🎬 3. Framer Motion Mimarisi

### 3.1 Kurulum
```bash
npm install framer-motion
# veya pnpm add framer-motion (lock dosyası pnpm)
```
> Next.js 15 App Router uyumlu. `motion` bileşenleri **client component** olmalı
> (`'use client'`). Mevcut bileşenler zaten çoğunlukla client.

### 3.2 Merkezi Animasyon Sistemi — `src/app/lib/motion.ts`
Tüm tekrar eden `variants`, `transition` ve `easing` değerlerini tek dosyada topla:

```ts
// Easing & süre standartları
export const ease = [0.22, 1, 0.36, 1] as const; // "expo-out" hissi
export const spring = { type: "spring", stiffness: 120, damping: 18 };

// Tekrar kullanılabilir variant'lar
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
export const fadeIn = { hidden:{opacity:0}, show:{opacity:1,transition:{duration:0.8}} };
export const scaleIn = { hidden:{opacity:0,scale:0.92}, show:{opacity:1,scale:1,transition:{duration:0.5,ease}} };
export const slideLeft = { hidden:{opacity:0,x:-60}, show:{opacity:1,x:0,transition:{duration:0.6,ease}} };
export const slideRight = { hidden:{opacity:0,x:60}, show:{opacity:1,x:0,transition:{duration:0.6,ease}} };

// Stagger container — alt elemanları sırayla canlandırır
export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
```

### 3.3 Yeniden Kullanılabilir Sarmalayıcılar
| Bileşen | Görev |
|---------|-------|
| `<Reveal>` | `whileInView` + `viewport={{ once:true, margin:"-80px" }}` ile scroll reveal |
| `<Stagger>` | Çocukları `staggerChildren` ile sırayla gösterir |
| `<Parallax>` | `useScroll` + `useTransform` ile derinlik/parallax |
| `<MagneticButton>` | Mouse'a manyetik çekim (hover micro-interaction) |
| `<TiltCard>` | 3D tilt (proje kartları için) |

> ♻️ **Geriye uyum:** Mevcut `useScrollReveal` + `.scroll-reveal` CSS sınıfları
> kademeli olarak `<Reveal>` ile değiştirilecek; geçiş süresince ikisi bir arada
> çalışabilir.

---

## 🌟 4. Scroll-Driven Deneyim Tasarımı

Modern trendlere uygun, scroll'a bağlı katmanlı animasyonlar:

### 4.1 Global Scroll Efektleri
- **Scroll Progress Bar:** Sayfanın üstünde neon yeşil ilerleme çubuğu (`useScroll → scaleX`).
- **Ambient Background:** Deep purple radial sis + neon yeşil glow lekeleri; scroll ile
  yavaşça yer değiştiren (parallax) blur "blob"lar.
- **Smooth Scroll:** Opsiyonel `lenis` (smooth scroll) entegrasyonu — ataletli kayma hissi.
- **Reduced Motion:** `prefers-reduced-motion` → tüm hareketler sönümlenir (erişilebilirlik).

### 4.2 Bölüm Bazlı Animasyon Senaryosu

| Bölüm | Scroll Animasyonu |
|-------|-------------------|
| **Hero** | Başlık harf-harf / kelime-kelime stagger reveal; tech ikonları yörüngede float + parallax; arka planda mor glow nefes alır; aşağı ok pulsing |
| **AboutMe** | Metin soldan slide-in; foto/kart sağdan; scroll ilerledikçe metin satırları sırayla fade-up |
| **Skills** | Yetenek rozetleri stagger ile "pop"; hover'da neon glow + manyetik tilt; skill bar'lar viewport'a girince animasyonla dolar |
| **Experience** | Dikey **timeline**; scroll ilerledikçe çizgi neon yeşil dolar; her kart alternatif sol/sağ slide-in |
| **Education** | Kartlar scaleIn + stagger; rozet/ikon spin reveal |
| **Projects** | 3D **TiltCard** grid; hover'da yükselme + neon kenarlık glow; görsel parallax; "demo" butonu manyetik |
| **Contact** | Form alanları alttan stagger; gönder butonu pulse-glow; sosyal ikonlar manyetik |
| **Footer** | Yavaş fade-in; üste dön butonu |

### 4.3 Mikro-Etkileşimler (Micro-interactions)
- **Magnetic buttons** — imleç yakınında butonun hafif kayması.
- **Hover glow** — neon yeşil/mor box-shadow geçişi.
- **Cursor-follow spotlight** — kartlarda imleci takip eden radial ışık (opsiyonel).
- **Animated underline** — nav linklerinde soldan açılan neon alt çizgi.
- **Count-up** — istatistik/sayılar viewport'a girince 0'dan animasyonla artar.

---

## 🛠️ 5. Uygulama Yol Haritası (Fazlar)

### **Faz 0 — Temel Hazırlık** ⚙️
- [ ] `framer-motion` kurulumu
- [ ] `src/app/lib/motion.ts` — merkezi variant/easing sistemi
- [ ] `globals.css` — yeni renk token'larını `@theme` içine ekle
- [ ] `prefers-reduced-motion` köprüsü (`useReducedMotion`)

### **Faz 1 — Tema Geçişi (Dark + Neon)** 🎨
- [ ] `globals.css` kök değişkenlerini koyu paletle değiştir; `<html>`'i kalıcı dark yap
- [ ] Mavi-mor-pembe gradient → neon yeşil + deep purple gradient (global find & replace stratejisi)
- [ ] `layout.tsx` `theme-color` meta → `#0A0A0A`
- [ ] Navbar, butonlar, kenarlıklar yeni palete uyarlanır
- [ ] `MatrixBackground` renk tonu emerald/neon ile uyumlanır

### **Faz 2 — Çekirdek Motion Bileşenleri** 🧩
- [ ] `<Reveal>`, `<Stagger>`, `<Parallax>` sarmalayıcıları
- [ ] `<MagneticButton>`, `<TiltCard>` mikro-etkileşim bileşenleri
- [ ] Global **ScrollProgress** çubuğu (`page.tsx`/`layout.tsx`)
- [ ] **AmbientBackground** (mor sis + neon blob parallax)

### **Faz 3 — Bölüm Bölüm Migrasyon** 📦
> Sıra (en yüksek görünürlükten başlayarak):
- [ ] **Hero** — stagger başlık + parallax ikonlar
- [ ] **Projects** — TiltCard grid + hover glow (en çok ilgi çeken bölüm)
- [ ] **Skills** — stagger rozetler + skill bar animasyonu
- [ ] **Experience** — scroll-fill timeline
- [ ] **AboutMe** — slide-in metin blokları
- [ ] **Education** — scaleIn kartlar
- [ ] **Contact** — stagger form + manyetik butonlar
- [ ] **Footer** + Navbar animated underline

### **Faz 4 — Cilalama & Performans** ✨
- [ ] `prefers-reduced-motion` her bileşende doğrulanır
- [ ] LCP/CLS kontrolü — animasyonlar layout shift yaratmamalı (`transform`/`opacity` only)
- [ ] `whileInView` + `viewport={{ once:true }}` ile gereksiz re-render önlenir
- [ ] Lazy/`dynamic import` ağır bileşenler (Matrix, CLI) için
- [ ] Mobil dokunmatik test (tilt/magnetic mobilde devre dışı)
- [ ] Lighthouse skoru (Performance ≥ 90, Accessibility ≥ 95 hedefi)

### **Faz 5 — Opsiyonel İleri Seviye** 🔮
- [ ] `lenis` smooth scroll
- [ ] Cursor-follow spotlight efekti
- [ ] Page transition animasyonları (`AnimatePresence`)
- [ ] Hero'da WebGL/shader arka plan (deep purple nebula)
- [ ] Sayfa yükleme intro animasyonu (logo reveal)

---

## ♿ 6. Erişilebilirlik & Performans İlkeleri

1. **Reduced Motion:** `useReducedMotion()` → animasyonlar kapanır, içerik anında görünür.
2. **Yalnızca GPU-dostu özellikler:** `transform` ve `opacity` (layout/paint tetiklemez).
3. **`viewport={{ once: true }}`:** Her eleman bir kez canlanır, scroll'da tekrar tetiklenmez.
4. **Kontrast:** Neon yeşil (#10B981) koyu zeminde WCAG AA; metinde yalnızca vurgu olarak.
5. **Klavye/Focus:** Tüm interaktif öğelerde görünür `focus-visible` neon ring.
6. **CLS = 0:** Animasyonlar boyut değiştirmez; `min-height` rezervasyonu.

---

## 🎯 7. Başarı Kriterleri (Definition of Done)

- ✅ Site tamamen koyu tema + neon yeşil/deep purple vurguya geçti.
- ✅ Her bölüm scroll'da Framer Motion ile canlanıyor.
- ✅ En az 5 mikro-etkileşim (magnetic, tilt, glow, underline, count-up) aktif.
- ✅ Scroll progress bar + ambient parallax arka plan çalışıyor.
- ✅ `prefers-reduced-motion` saygı görüyor; Lighthouse Performance ≥ 90.
- ✅ TR/EN dil desteği ve CLI modu bozulmadan korundu.
- ✅ Mobilde akıcı; layout shift yok.

---

## 📦 8. Eklenecek/Değişecek Dosya Özeti

| Dosya | İşlem |
|-------|-------|
| `package.json` | `framer-motion` bağımlılığı |
| `src/app/lib/motion.ts` | **YENİ** — variant/easing sistemi |
| `src/app/components/motion/Reveal.tsx` | **YENİ** |
| `src/app/components/motion/Stagger.tsx` | **YENİ** |
| `src/app/components/motion/Parallax.tsx` | **YENİ** |
| `src/app/components/motion/MagneticButton.tsx` | **YENİ** |
| `src/app/components/motion/TiltCard.tsx` | **YENİ** |
| `src/app/components/ScrollProgress.tsx` | **YENİ** |
| `src/app/components/AmbientBackground.tsx` | **YENİ** |
| `src/app/globals.css` | Renk token'ları + dark tema |
| `src/app/layout.tsx` | theme-color, dark `<html>` |
| `src/app/page.tsx` | ScrollProgress + AmbientBackground entegrasyonu |
| Tüm `components/*.tsx` | Palet + Framer Motion migrasyonu |
| `src/app/hooks/useScrollReveal.ts` | Kademeli olarak `<Reveal>` ile değiştirilecek |

---

> **Sonraki Adım:** Faz 0 ve Faz 1 ile başla — önce `framer-motion` kur, renk
> token'larını tanımla, ardından temayı koyu palete çevir. Görsel temel oturduktan
> sonra bölüm bölüm Framer Motion animasyonlarını uygula.

*Bu plan yaşayan bir belgedir; her faz tamamlandıkça güncellenmelidir.* 🌱
