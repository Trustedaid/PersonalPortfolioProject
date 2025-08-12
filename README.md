# Eren OĞUZ - Portfolio Web Site

Modern ve responsive bir kişisel portfolyo websitesi. Full-stack teknolojiler kullanarak geliştirilmiş bu proje, yazılım geliştirme yetkinliklerimi ve projelerimi sergilemek için tasarlanmıştır.

## 🚀 Proje Hakkında

Bu proje, Eren OĞUZ'un kişisel portfolyosunu sergilemek için geliştirilmiş tam kapsamlı bir web sitesidir. Modern teknolojiler kullanarak hem frontend hem de backend geliştirme becerilerini gösteren bu platform:

- Interaktif ve kullanıcı dostu arayüz
- Matrix temalı görsel efektler  
- Responsive tasarım
- Multi-dil desteği (Türkçe/İngilizce)
- CLI benzeri interaktif özellikler
- Modern SEO optimizasyonları

## 🛠️ Teknoloji Stack'i

### Frontend
- **Framework**: Next.js 15
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons
- **Build Tool**: Turbopack
- **Package Manager**: pnpm

### Backend
- **Framework**: ASP.NET Core 8
- **Language**: C#
- **Database**: PostgreSQL
- **ORM**: Entity Framework Core 9.0.7
- **Documentation**: Swagger/OpenAPI
- **Database Provider**: Npgsql

### DevOps & Tools
- **Version Control**: Git
- **Database Migrations**: EF Core Migrations
- **API Testing**: Swagger UI
- **Development**: Hot Reload & Auto-restart

## 📁 Proje Yapısı

```
PortfolioProject/
├── portfolio-web-site-main/           # Next.js Frontend
│   └── eren-portfolio/
│       ├── src/
│       │   ├── app/
│       │   │   ├── components/        # React bileşenleri
│       │   │   ├── hooks/            # Custom hooks
│       │   │   └── data/             # Çeviri verileri
│       │   └── data/
│       │       └── profile.json      # Portfolyo verileri
│       ├── public/                   # Statik dosyalar
│       └── package.json
├── PortfolioApi/                     # ASP.NET Core Backend
│   └── PortfolioApi/
│       ├── Controllers/              # API Controllers
│       ├── Models/                   # Entity modelleri
│       ├── Data/                     # DbContext ve başlatıcı
│       ├── Migrations/               # EF Core migrasyonları
│       └── PortfolioApi.csproj
└── README.md
```

## 🎯 Özellikler

### Mevcut Özellikler

#### Frontend
- ✅ **Responsive Tasarım**: Mobile-first yaklaşımla tüm cihazlarda uyumlu
- ✅ **Dark Theme**: Koyu tema ile modern görünüm
- ✅ **Matrix Background**: Animasyonlu matrix efekti
- ✅ **Multi-language**: Türkçe/İngilizce dil desteği
- ✅ **CLI Interface**: Terminal benzeri interaktif komut arayüzü
- ✅ **Smooth Scrolling**: Akıcı sayfa geçişleri
- ✅ **Typewriter Effect**: Dinamik metin animasyonları
- ✅ **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- ✅ **PDF Resume**: İndirilebilir CV özelliği

#### Backend
- ✅ **RESTful API**: Profile, Skills, Projects endpoints
- ✅ **PostgreSQL Integration**: Güvenli veritabanı bağlantısı
- ✅ **Entity Framework**: Code-first yaklaşım
- ✅ **CORS Configuration**: Frontend entegrasyonu
- ✅ **Swagger Documentation**: API dokümantasyonu
- ✅ **Migration Support**: Veritabanı versiyonlama

### Portfolyo Bölümleri
- 👋 **Hero Section**: Karşılama ve genel bilgiler
- 👨‍💻 **About Me**: Kişisel hikaye ve yetkinlikler
- 🛠️ **Skills**: Teknik beceriler ve araçlar
- 💼 **Experience**: İş deneyimleri
- 🎓 **Education**: Eğitim geçmişi
- 📜 **Certificates**: Sertifikalar
- 🚀 **Projects**: Geliştirilen projeler
- 📧 **Contact**: İletişim bilgileri

## ⚡ Kurulum ve Çalıştırma

### Ön Gereksinimler
- Node.js ≥22.0.0
- npm ≥10.0.0
- .NET 8 SDK
- PostgreSQL

### Frontend Kurulumu
```bash
cd PortfolioProject/portfolio-web-site-main/eren-portfolio
pnpm install
pnpm dev
```

### Backend Kurulumu  
```bash
cd PortfolioApi/PortfolioApi
dotnet restore
dotnet ef database update
dotnet run
```

### Geliştirme Komutları

#### Frontend
```bash
pnpm dev          # Geliştirme sunucusu (Turbopack ile)
pnpm build        # Production build
pnpm start        # Production sunucusu
pnpm lint         # ESLint kontrolü
```

#### Backend
```bash
dotnet run                              # Geliştirme sunucusu
dotnet build                           # Proje derleme
dotnet ef migrations add <name>        # Yeni migration
dotnet ef database update             # Veritabanı güncelleme
```

## 🔮 Gelecek Geliştirmeler

### Planlanan Backend Geliştirmeleri

#### 🔐 Authentication & Security
- [ ] **JWT Authentication**: Güvenli kullanıcı kimlik doğrulama
- [ ] **Role-based Authorization**: Yetki tabanlı erişim kontrolü
- [ ] **OAuth Integration**: Google, GitHub, LinkedIn girişi
- [ ] **API Rate Limiting**: DDoS koruması ve istek sınırlandırma
- [ ] **Data Encryption**: Hassas verilerin şifrelenmesi

#### 📊 Analytics & Monitoring  
- [ ] **Visitor Analytics**: Ziyaretçi istatistikleri ve davranış analizi
- [ ] **Performance Monitoring**: API performans metrikleri
- [ ] **Error Tracking**: Hata logları ve bildirim sistemi
- [ ] **Health Checks**: Sistem sağlık durumu kontrolü
- [ ] **Metrics Dashboard**: Yönetici paneli

#### 💾 Advanced Data Features
- [ ] **Contact Form API**: Dinamik iletişim formu backend'i
- [ ] **Blog System**: CMS özellikli blog yazıları
- [ ] **Portfolio Management**: Admin panelden portfolyo güncelleme
- [ ] **File Upload**: Resim ve dosya yükleme sistemi
- [ ] **Caching Layer**: Redis ile performans optimizasyonu
- [ ] **Search Functionality**: Elasticsearch entegrasyonu

#### 🔄 Integration & Services
- [ ] **Email Service**: SMTP ile e-posta gönderimi
- [ ] **Notification System**: Real-time bildirimler (SignalR)
- [ ] **Third-party APIs**: GitHub, LinkedIn API entegrasyonları
- [ ] **Backup System**: Otomatik veritabanı yedekleme
- [ ] **CDN Integration**: Statik dosya optimizasyonu

### Planlanan Frontend Geliştirmeleri

#### 🎨 UI/UX Enhancements
- [ ] **Theme Customization**: Kullanıcı tema seçenekleri
- [ ] **Advanced Animations**: Framer Motion ile kompleks animasyonlar
- [ ] **Interactive Portfolio**: 3D portfolyo gösterimi
- [ ] **Dark/Light Mode Toggle**: Dinamik tema değiştirici
- [ ] **Accessibility Improvements**: WCAG 2.1 uyumluluğu

#### 📱 Progressive Web App (PWA)
- [ ] **PWA Implementation**: Offline çalışma desteği
- [ ] **Push Notifications**: Tarayıcı bildirimleri
- [ ] **App Installation**: Masaüstü uygulama yükleme
- [ ] **Background Sync**: Arka plan veri senkronizasyonu

#### 🤖 Interactive Features
- [ ] **AI Chatbot**: Portfolyo hakkında soru-cevap botu
- [ ] **Voice Commands**: Sesli navigasyon
- [ ] **Virtual Assistant**: Interaktif yardım sistemi
- [ ] **Real-time Chat**: Ziyaretçilerle canlı sohbet
- [ ] **Terminal Emulator**: Gelişmiş CLI deneyimi

#### 📊 Advanced Analytics
- [ ] **User Journey Tracking**: Kullanıcı yolculuğu analizi
- [ ] **Heatmap Integration**: Tıklama haritaları
- [ ] **A/B Testing**: Özellik testleri
- [ ] **Performance Metrics**: Core Web Vitals takibi

#### 🌐 Content Management
- [ ] **Headless CMS**: İçerik yönetim sistemi
- [ ] **Multi-language CMS**: Dinamik çeviri yönetimi
- [ ] **Blog Interface**: Interaktif blog arayüzü
- [ ] **Portfolio Builder**: Drag-drop portfolyo editörü
- [ ] **Media Gallery**: Gelişmiş medya yönetimi

### 🚀 DevOps & Deployment

#### ☁️ Cloud Infrastructure
- [ ] **Docker Containerization**: Tam konteynerizasyon
- [ ] **Kubernetes Deployment**: Orkestrasyon ve ölçeklenebilirlik
- [ ] **CI/CD Pipeline**: GitHub Actions ile otomatik dağıtım
- [ ] **Multi-environment**: Dev/Staging/Prod ortamları
- [ ] **Infrastructure as Code**: Terraform ile altyapı yönetimi

#### 📈 Scalability & Performance
- [ ] **Microservices Architecture**: Servis odaklı mimari
- [ ] **Load Balancing**: Yük dağıtımı
- [ ] **Auto Scaling**: Otomatik ölçeklendirme  
- [ ] **CDN Integration**: Global içerik dağıtımı
- [ ] **Database Sharding**: Veritabanı bölümlendirme

#### 🔍 Monitoring & Observability
- [ ] **Application Monitoring**: APM entegrasyonu
- [ ] **Log Aggregation**: Merkezi log yönetimi
- [ ] **Distributed Tracing**: İstek takibi
- [ ] **Alerting System**: Otomatik uyarı sistemi

### 🧪 Testing & Quality

#### 🔬 Testing Strategy
- [ ] **Unit Testing**: Kapsamlı birim testleri
- [ ] **Integration Testing**: API entegrasyon testleri
- [ ] **E2E Testing**: Uçtan uca test otomasyonu
- [ ] **Performance Testing**: Yük ve stres testleri
- [ ] **Security Testing**: Güvenlik açığı taraması

#### 🛡️ Code Quality
- [ ] **Code Coverage**: Test kapsama analizi
- [ ] **Static Analysis**: Kod kalite analizi
- [ ] **Automated Reviews**: Otomatik kod incelemesi
- [ ] **Dependency Updates**: Bağımlılık güncellemeleri

## 🤝 Katkıda Bulunma

Bu proje sürekli geliştirilmektedir. Katkıda bulunmak için:

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/yeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeniOzellik`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında sunulmaktadır. Detaylar için `LICENSE` dosyasına bakınız.

## 📞 İletişim

- **Email**: erenoguz.dev@gmail.com
- **LinkedIn**: [ernoguz](https://www.linkedin.com/in/ernoguz/)  
- **GitHub**: [trustedaid](https://github.com/trustedaid)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!