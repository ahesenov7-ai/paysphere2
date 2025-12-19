/**
 * PaySphere — AI-Powered Payment & Risk Intelligence
 * Multilingual, Dark/Light Theme, AI Chat, Device Detection
 */

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initLanguageSwitcher();
    initBillingToggle();
    initAudienceToggle();
    initTransactions();
    initDeviceIntel();
    initChatWidget();
    initForms();
    initRatingButtons();
    initScrollAnimations();
    initMobileMenu();
    animateRiskScore();
});

/* ===== Translations ===== */
const translations = {
    en: {
        'nav.dashboard': 'Dashboard',
        'nav.pricing': 'Pricing',
        'nav.contact': 'Contact',
        'nav.feedback': 'Feedback',
        'nav.tryDemo': 'Try Demo',
        'hero.badge': 'AI-Powered Risk Detection',
        'hero.titleStart': 'Secure Payments,',
        'hero.titleHighlight': 'Intelligent Protection',
        'hero.description': 'Real-time AI risk scoring for every transaction. Automatically verify safe payments and block fraudulent ones—with clear explanations every time.',
        'hero.startDemo': '🚀 Start Demo',
        'hero.seePricing': 'View Pricing',
        'hero.stat1': 'Accuracy',
        'hero.stat2': 'Response',
        'hero.stat3': 'Protected',
        'hero.dashTitle': 'Live Transactions',
        'hero.dashStatus': 'Processing',
        'hero.riskLabel': 'Current Risk Score',
        'dashboard.label': 'Live Demo',
        'dashboard.title': 'AI Risk Dashboard',
        'dashboard.description': 'See real-time transaction monitoring with AI-powered risk scoring and automatic verification.',
        'dashboard.txTitle': 'Recent Transactions',
        'dashboard.txSubtitle': 'AI analyzed • Auto-verified',
        'dashboard.refresh': '↻ Refresh',
        'device.title': '🔍 Device Intelligence',
        'device.subtitle': 'Your current session data',
        'device.trustTitle': 'Device Trusted',
        'device.trustText': 'No security threats detected',
        'pricing.label': 'Pricing',
        'pricing.title': 'Choose Your Plan',
        'pricing.description': 'Transparent pricing for businesses of all sizes. Start free, scale as you grow.',
        'pricing.monthly': 'Monthly',
        'pricing.yearly': 'Yearly',
        'pricing.discount': 'Save 30%',
        'pricing.b2c': 'For Individuals',
        'pricing.b2b': 'For Business',
        'pricing.popular': 'Most Popular',
        'pricing.freeName': 'Free',
        'pricing.freeTagline': 'Get started',
        'pricing.perMonth': '/month',
        'pricing.freeF1': '100 transactions/month',
        'pricing.freeF2': 'Basic risk scoring',
        'pricing.freeF3': 'Email support',
        'pricing.freeF4': '1 user',
        'pricing.startFree': 'Start Free',
        'pricing.standardName': 'Standard',
        'pricing.standardTagline': 'For growing teams',
        'pricing.billedYearly': 'Billed yearly ($240/year)',
        'pricing.standardF1': '10,000 transactions/month',
        'pricing.standardF2': 'Advanced AI scoring',
        'pricing.standardF3': 'Device intelligence',
        'pricing.standardF4': 'Priority support',
        'pricing.standardF5': '5 users',
        'pricing.getStandard': 'Get Standard',
        'pricing.premiumName': 'Premium',
        'pricing.premiumTagline': 'For enterprises',
        'pricing.billedYearlyPremium': 'Billed yearly ($828/year)',
        'pricing.premiumF1': 'Unlimited transactions',
        'pricing.premiumF2': 'Custom AI models',
        'pricing.premiumF3': 'API access',
        'pricing.premiumF4': '24/7 phone support',
        'pricing.premiumF5': 'Unlimited users',
        'pricing.premiumF6': 'SLA guarantee',
        'pricing.getPremium': 'Get Premium',
        'contact.label': 'Contact',
        'contact.title': 'Get In Touch',
        'contact.description': 'Have questions? Our team is here to help.',
        'contact.emailTitle': 'Email Us',
        'contact.salesTitle': 'Sales',
        'contact.supportTitle': 'Support',
        'contact.nameLabel': 'Name',
        'contact.emailLabel': 'Email',
        'contact.subjectLabel': 'Subject',
        'contact.messageLabel': 'Message',
        'contact.submit': 'Send Message',
        'feedback.label': 'Feedback',
        'feedback.title': 'Share Your Experience',
        'feedback.description': 'Help us improve PaySphere with your feedback.',
        'feedback.ratingLabel': 'How would you rate your experience?',
        'feedback.messageLabel': 'Your feedback',
        'feedback.submit': 'Submit Feedback',
        'footer.tagline': 'AI-Powered Payment & Risk Intelligence\nSecure transactions for modern business',
        'footer.privacy': 'Privacy',
        'footer.terms': 'Terms',
        'footer.docs': 'API Docs',
        'chat.title': 'PaySphere AI',
        'chat.subtitle': 'Risk Intelligence Assistant',
        'chat.welcome': '👋 Hi! I\'m PaySphere AI. I can help you understand risk scores, analyze transactions, and explain why payments are verified or blocked. What would you like to know?',
        'chat.placeholder': 'Ask about risk scores...',
        'chat.send': 'Send'
    },
    az: {
        'nav.dashboard': 'Panel',
        'nav.pricing': 'Qiymətlər',
        'nav.contact': 'Əlaqə',
        'nav.feedback': 'Rəy',
        'nav.tryDemo': 'Demo Sına',
        'hero.badge': 'AI Risk Aşkarlaması',
        'hero.titleStart': 'Təhlükəsiz Ödənişlər,',
        'hero.titleHighlight': 'Ağıllı Qoruma',
        'hero.description': 'Hər əməliyyat üçün real vaxt AI risk hesablaması. Təhlükəsiz ödənişləri avtomatik təsdiqlə, fırıldaqları bloklayın.',
        'hero.startDemo': '🚀 Demoya Başla',
        'hero.seePricing': 'Qiymətlərə Bax',
        'hero.stat1': 'Dəqiqlik',
        'hero.stat2': 'Cavab',
        'hero.stat3': 'Qorunan',
        'hero.dashTitle': 'Canlı Əməliyyatlar',
        'hero.dashStatus': 'İşlənir',
        'hero.riskLabel': 'Cari Risk Balı',
        'dashboard.label': 'Canlı Demo',
        'dashboard.title': 'AI Risk Paneli',
        'dashboard.description': 'AI ilə real vaxt əməliyyat monitorinqi və avtomatik təsdiqləməyə baxın.',
        'dashboard.txTitle': 'Son Əməliyyatlar',
        'dashboard.txSubtitle': 'AI analiz edildi • Avtomatik təsdiqləndi',
        'dashboard.refresh': '↻ Yenilə',
        'device.title': '🔍 Cihaz Məlumatı',
        'device.subtitle': 'Cari sessiya məlumatlarınız',
        'device.trustTitle': 'Cihaz Etibarlı',
        'device.trustText': 'Təhlükəsizlik təhdidi aşkarlanmadı',
        'pricing.label': 'Qiymətlər',
        'pricing.title': 'Planınızı Seçin',
        'pricing.description': 'Hər ölçüdə biznes üçün şəffaf qiymətlər. Pulsuz başlayın.',
        'pricing.monthly': 'Aylıq',
        'pricing.yearly': 'İllik',
        'pricing.discount': '30% Endirim',
        'pricing.b2c': 'Fərdlər üçün',
        'pricing.b2b': 'Biznes üçün',
        'pricing.popular': 'Ən Məşhur',
        'pricing.freeName': 'Pulsuz',
        'pricing.freeTagline': 'Başlanğıc',
        'pricing.perMonth': '/ay',
        'pricing.freeF1': 'Ayda 100 əməliyyat',
        'pricing.freeF2': 'Əsas risk hesablaması',
        'pricing.freeF3': 'E-poçt dəstəyi',
        'pricing.freeF4': '1 istifadəçi',
        'pricing.startFree': 'Pulsuz Başla',
        'pricing.standardName': 'Standart',
        'pricing.standardTagline': 'Böyüyən komandalar üçün',
        'pricing.billedYearly': 'İllik ödəniş ($240/il)',
        'pricing.standardF1': 'Ayda 10,000 əməliyyat',
        'pricing.standardF2': 'Qabaqcıl AI hesablaması',
        'pricing.standardF3': 'Cihaz analizi',
        'pricing.standardF4': 'Prioritet dəstək',
        'pricing.standardF5': '5 istifadəçi',
        'pricing.getStandard': 'Standart Al',
        'pricing.premiumName': 'Premium',
        'pricing.premiumTagline': 'Müəssisələr üçün',
        'pricing.billedYearlyPremium': 'İllik ödəniş ($828/il)',
        'pricing.premiumF1': 'Limitsiz əməliyyat',
        'pricing.premiumF2': 'Xüsusi AI modelləri',
        'pricing.premiumF3': 'API girişi',
        'pricing.premiumF4': '24/7 telefon dəstəyi',
        'pricing.premiumF5': 'Limitsiz istifadəçi',
        'pricing.premiumF6': 'SLA zəmanəti',
        'pricing.getPremium': 'Premium Al',
        'contact.label': 'Əlaqə',
        'contact.title': 'Bizimlə Əlaqə',
        'contact.description': 'Suallarınız var? Komandamız kömək etməyə hazırdır.',
        'contact.emailTitle': 'E-poçt',
        'contact.salesTitle': 'Satış',
        'contact.supportTitle': 'Dəstək',
        'contact.nameLabel': 'Ad',
        'contact.emailLabel': 'E-poçt',
        'contact.subjectLabel': 'Mövzu',
        'contact.messageLabel': 'Mesaj',
        'contact.submit': 'Mesaj Göndər',
        'feedback.label': 'Rəy',
        'feedback.title': 'Təcrübənizi Paylaşın',
        'feedback.description': 'PaySphere-i təkmilləşdirməyimizə kömək edin.',
        'feedback.ratingLabel': 'Təcrübənizi necə qiymətləndirirsiniz?',
        'feedback.messageLabel': 'Rəyiniz',
        'feedback.submit': 'Rəy Göndər',
        'footer.tagline': 'AI Risk Ödəniş Platforması\nMüasir biznes üçün təhlükəsiz əməliyyatlar',
        'footer.privacy': 'Məxfilik',
        'footer.terms': 'Şərtlər',
        'footer.docs': 'API Sənədləri',
        'chat.title': 'PaySphere AI',
        'chat.subtitle': 'Risk Analiz Köməkçisi',
        'chat.welcome': '👋 Salam! Mən PaySphere AI-yam. Risk balları, əməliyyat analizi və ödənişlərin niyə təsdiqlənib/bloklandığını izah edə bilərəm.',
        'chat.placeholder': 'Risk haqqında soruşun...',
        'chat.send': 'Göndər'
    },
    ru: {
        'nav.dashboard': 'Панель',
        'nav.pricing': 'Цены',
        'nav.contact': 'Контакты',
        'nav.feedback': 'Отзывы',
        'nav.tryDemo': 'Демо',
        'hero.badge': 'ИИ-Обнаружение Рисков',
        'hero.titleStart': 'Безопасные Платежи,',
        'hero.titleHighlight': 'Умная Защита',
        'hero.description': 'ИИ-оценка рисков в реальном времени для каждой транзакции. Автоматическая верификация безопасных платежей и блокировка мошенничества.',
        'hero.startDemo': '🚀 Начать Демо',
        'hero.seePricing': 'Цены',
        'hero.stat1': 'Точность',
        'hero.stat2': 'Отклик',
        'hero.stat3': 'Защищено',
        'hero.dashTitle': 'Транзакции',
        'hero.dashStatus': 'Обработка',
        'hero.riskLabel': 'Текущий Риск',
        'dashboard.label': 'Демо',
        'dashboard.title': 'ИИ Панель Рисков',
        'dashboard.description': 'Мониторинг транзакций в реальном времени с ИИ-оценкой рисков.',
        'dashboard.txTitle': 'Последние Транзакции',
        'dashboard.txSubtitle': 'ИИ анализ • Авто-верификация',
        'dashboard.refresh': '↻ Обновить',
        'device.title': '🔍 Информация об Устройстве',
        'device.subtitle': 'Данные текущей сессии',
        'device.trustTitle': 'Устройство Доверенное',
        'device.trustText': 'Угрозы не обнаружены',
        'pricing.label': 'Цены',
        'pricing.title': 'Выберите План',
        'pricing.description': 'Прозрачные цены для бизнеса любого размера.',
        'pricing.monthly': 'Месяц',
        'pricing.yearly': 'Год',
        'pricing.discount': 'Скидка 30%',
        'pricing.b2c': 'Для Частных Лиц',
        'pricing.b2b': 'Для Бизнеса',
        'pricing.popular': 'Популярный',
        'pricing.freeName': 'Бесплатный',
        'pricing.freeTagline': 'Начало',
        'pricing.perMonth': '/месяц',
        'pricing.freeF1': '100 транзакций/месяц',
        'pricing.freeF2': 'Базовая оценка рисков',
        'pricing.freeF3': 'Email поддержка',
        'pricing.freeF4': '1 пользователь',
        'pricing.startFree': 'Начать Бесплатно',
        'pricing.standardName': 'Стандарт',
        'pricing.standardTagline': 'Для растущих команд',
        'pricing.billedYearly': 'Годовая оплата ($240/год)',
        'pricing.standardF1': '10,000 транзакций/месяц',
        'pricing.standardF2': 'Продвинутый ИИ',
        'pricing.standardF3': 'Анализ устройств',
        'pricing.standardF4': 'Приоритетная поддержка',
        'pricing.standardF5': '5 пользователей',
        'pricing.getStandard': 'Выбрать Стандарт',
        'pricing.premiumName': 'Премиум',
        'pricing.premiumTagline': 'Для предприятий',
        'pricing.billedYearlyPremium': 'Годовая оплата ($828/год)',
        'pricing.premiumF1': 'Безлимитные транзакции',
        'pricing.premiumF2': 'Кастомные ИИ модели',
        'pricing.premiumF3': 'Доступ к API',
        'pricing.premiumF4': 'Поддержка 24/7',
        'pricing.premiumF5': 'Безлимит пользователей',
        'pricing.premiumF6': 'SLA гарантия',
        'pricing.getPremium': 'Выбрать Премиум',
        'contact.label': 'Контакты',
        'contact.title': 'Свяжитесь с Нами',
        'contact.description': 'Есть вопросы? Наша команда готова помочь.',
        'contact.emailTitle': 'Email',
        'contact.salesTitle': 'Продажи',
        'contact.supportTitle': 'Поддержка',
        'contact.nameLabel': 'Имя',
        'contact.emailLabel': 'Email',
        'contact.subjectLabel': 'Тема',
        'contact.messageLabel': 'Сообщение',
        'contact.submit': 'Отправить',
        'feedback.label': 'Отзывы',
        'feedback.title': 'Поделитесь Опытом',
        'feedback.description': 'Помогите улучшить PaySphere.',
        'feedback.ratingLabel': 'Как оцениваете опыт?',
        'feedback.messageLabel': 'Ваш отзыв',
        'feedback.submit': 'Отправить Отзыв',
        'footer.tagline': 'ИИ Платежная Платформа\nБезопасные транзакции для бизнеса',
        'footer.privacy': 'Конфиденциальность',
        'footer.terms': 'Условия',
        'footer.docs': 'API Документация',
        'chat.title': 'PaySphere ИИ',
        'chat.subtitle': 'Ассистент Анализа Рисков',
        'chat.welcome': '👋 Привет! Я PaySphere ИИ. Помогу разобраться с оценкой рисков и объясню, почему транзакции верифицированы или заблокированы.',
        'chat.placeholder': 'Спросите о рисках...',
        'chat.send': 'Отправить'
    },
    tr: {
        'nav.dashboard': 'Panel',
        'nav.pricing': 'Fiyatlar',
        'nav.contact': 'İletişim',
        'nav.feedback': 'Geri Bildirim',
        'nav.tryDemo': 'Demo Dene',
        'hero.badge': 'AI Risk Tespiti',
        'hero.titleStart': 'Güvenli Ödemeler,',
        'hero.titleHighlight': 'Akıllı Koruma',
        'hero.description': 'Her işlem için gerçek zamanlı AI risk puanlaması. Güvenli ödemeleri otomatik doğrula, dolandırıcılıkları engelle.',
        'hero.startDemo': '🚀 Demoya Başla',
        'hero.seePricing': 'Fiyatları Gör',
        'hero.stat1': 'Doğruluk',
        'hero.stat2': 'Yanıt',
        'hero.stat3': 'Korunan',
        'hero.dashTitle': 'Canlı İşlemler',
        'hero.dashStatus': 'İşleniyor',
        'hero.riskLabel': 'Mevcut Risk Puanı',
        'dashboard.label': 'Canlı Demo',
        'dashboard.title': 'AI Risk Paneli',
        'dashboard.description': 'AI destekli risk puanlaması ve otomatik doğrulama ile gerçek zamanlı işlem izleme.',
        'dashboard.txTitle': 'Son İşlemler',
        'dashboard.txSubtitle': 'AI analiz edildi • Otomatik doğrulandı',
        'dashboard.refresh': '↻ Yenile',
        'device.title': '🔍 Cihaz Bilgisi',
        'device.subtitle': 'Mevcut oturum verileriniz',
        'device.trustTitle': 'Cihaz Güvenilir',
        'device.trustText': 'Güvenlik tehdidi tespit edilmedi',
        'pricing.label': 'Fiyatlar',
        'pricing.title': 'Planınızı Seçin',
        'pricing.description': 'Her ölçekte işletme için şeffaf fiyatlandırma.',
        'pricing.monthly': 'Aylık',
        'pricing.yearly': 'Yıllık',
        'pricing.discount': '%30 İndirim',
        'pricing.b2c': 'Bireysel',
        'pricing.b2b': 'Kurumsal',
        'pricing.popular': 'En Popüler',
        'pricing.freeName': 'Ücretsiz',
        'pricing.freeTagline': 'Başlangıç',
        'pricing.perMonth': '/ay',
        'pricing.freeF1': 'Ayda 100 işlem',
        'pricing.freeF2': 'Temel risk puanlaması',
        'pricing.freeF3': 'E-posta desteği',
        'pricing.freeF4': '1 kullanıcı',
        'pricing.startFree': 'Ücretsiz Başla',
        'pricing.standardName': 'Standart',
        'pricing.standardTagline': 'Büyüyen ekipler için',
        'pricing.billedYearly': 'Yıllık faturalandırılır ($240/yıl)',
        'pricing.standardF1': 'Ayda 10,000 işlem',
        'pricing.standardF2': 'Gelişmiş AI puanlaması',
        'pricing.standardF3': 'Cihaz analizi',
        'pricing.standardF4': 'Öncelikli destek',
        'pricing.standardF5': '5 kullanıcı',
        'pricing.getStandard': 'Standart Al',
        'pricing.premiumName': 'Premium',
        'pricing.premiumTagline': 'Kurumlar için',
        'pricing.billedYearlyPremium': 'Yıllık faturalandırılır ($828/yıl)',
        'pricing.premiumF1': 'Sınırsız işlem',
        'pricing.premiumF2': 'Özel AI modelleri',
        'pricing.premiumF3': 'API erişimi',
        'pricing.premiumF4': '7/24 telefon desteği',
        'pricing.premiumF5': 'Sınırsız kullanıcı',
        'pricing.premiumF6': 'SLA garantisi',
        'pricing.getPremium': 'Premium Al',
        'contact.label': 'İletişim',
        'contact.title': 'Bize Ulaşın',
        'contact.description': 'Sorularınız mı var? Ekibimiz yardıma hazır.',
        'contact.emailTitle': 'E-posta',
        'contact.salesTitle': 'Satış',
        'contact.supportTitle': 'Destek',
        'contact.nameLabel': 'Ad',
        'contact.emailLabel': 'E-posta',
        'contact.subjectLabel': 'Konu',
        'contact.messageLabel': 'Mesaj',
        'contact.submit': 'Mesaj Gönder',
        'feedback.label': 'Geri Bildirim',
        'feedback.title': 'Deneyiminizi Paylaşın',
        'feedback.description': 'PaySphere\'i geliştirmemize yardımcı olun.',
        'feedback.ratingLabel': 'Deneyiminizi nasıl değerlendirirsiniz?',
        'feedback.messageLabel': 'Geri bildiriminiz',
        'feedback.submit': 'Gönder',
        'footer.tagline': 'AI Destekli Ödeme Platformu\nModern işletmeler için güvenli işlemler',
        'footer.privacy': 'Gizlilik',
        'footer.terms': 'Şartlar',
        'footer.docs': 'API Belgeleri',
        'chat.title': 'PaySphere AI',
        'chat.subtitle': 'Risk Analiz Asistanı',
        'chat.welcome': '👋 Merhaba! Ben PaySphere AI. Risk puanları, işlem analizi ve ödemelerin neden doğrulandığını/engellendiğini açıklayabilirim.',
        'chat.placeholder': 'Risk hakkında sorun...',
        'chat.send': 'Gönder'
    }
};

/* Chat responses */
const chatResponses = {
    en: {
        risk: ["Risk scores range from 0-100. Below 30 is safe, 30-70 needs review, above 70 is blocked.", "Our AI analyzes IP, device, behavior patterns, and transaction history to calculate risk in real-time."],
        verified: ["Transactions are verified when: trusted device, known IP, normal behavior, low risk score.", "The AI considers 50+ factors including location, time, amount, and historical patterns."],
        blocked: ["Transactions are blocked when: suspicious IP, unknown device, unusual behavior, high risk score.", "When blocked, users see exactly why and can appeal with additional verification."],
        device: ["We collect IP, browser, OS, device type, and location to build a trust profile.", "Trusted devices get faster approvals. New devices trigger additional verification."],
        default: ["I can explain risk scores, why transactions are verified/blocked, and how device intelligence works.", "Ask me about how PaySphere protects your payments with AI!"]
    },
    az: {
        risk: ["Risk balları 0-100 arasındadır. 30-dan aşağı təhlükəsiz, 30-70 baxış tələb edir, 70-dən yuxarı bloklanır.", "AI IP, cihaz, davranış nümunələri və əməliyyat tarixçəsini analiz edir."],
        verified: ["Əməliyyatlar etibarlı cihaz, tanış IP, normal davranış və aşağı risk balı olduqda təsdiqlənir.", "AI 50+ faktoru nəzərə alır."],
        blocked: ["Əməliyyatlar şübhəli IP, naməlum cihaz, qeyri-adi davranış olduqda bloklanır.", "Bloklandıqda istifadəçilər səbəbi görür."],
        default: ["Risk balları, təsdiq/bloklama səbəbləri və cihaz analizi haqqında izah edə bilərəm.", "PaySphere-in ödənişlərinizi necə qoruduğunu soruşun!"]
    },
    ru: {
        risk: ["Оценка риска от 0-100. Ниже 30 — безопасно, 30-70 — нужна проверка, выше 70 — блокировка.", "ИИ анализирует IP, устройство, поведение и историю транзакций."],
        verified: ["Транзакции верифицируются при: доверенном устройстве, известном IP, нормальном поведении.", "ИИ учитывает 50+ факторов."],
        blocked: ["Транзакции блокируются при: подозрительном IP, неизвестном устройстве, необычном поведении.", "При блокировке пользователи видят причину."],
        default: ["Могу объяснить оценку рисков и почему транзакции верифицируются/блокируются.", "Спросите как PaySphere защищает ваши платежи!"]
    },
    tr: {
        risk: ["Risk puanları 0-100 arasındadır. 30 altı güvenli, 30-70 inceleme gerektirir, 70 üstü engellenir.", "AI IP, cihaz, davranış kalıpları ve işlem geçmişini analiz eder."],
        verified: ["İşlemler güvenilir cihaz, bilinen IP, normal davranış ve düşük risk puanı olduğunda doğrulanır.", "AI 50+ faktörü değerlendirir."],
        blocked: ["İşlemler şüpheli IP, bilinmeyen cihaz, olağandışı davranış olduğunda engellenir.", "Engellendiğinde kullanıcılar nedenini görür."],
        default: ["Risk puanları, doğrulama/engelleme nedenleri ve cihaz analizi hakkında açıklama yapabilirim.", "PaySphere\'in ödemelerinizi nasıl koruduğunu sorun!"]
    }
};

/* Sample transactions */
const sampleTransactions = [
    { icon: '💳', name: 'Payment to Amazon', amount: '-$124.99', time: '2 min ago', risk: 8, status: 'verified', reason: 'Trusted merchant, known device' },
    { icon: '🔒', name: 'Login from New Device', amount: '-', time: '5 min ago', risk: 78, status: 'blocked', reason: 'Unknown device from new location' },
    { icon: '🌍', name: 'International Transfer', amount: '-$2,500.00', time: '12 min ago', risk: 45, status: 'pending', reason: 'Large amount to new recipient' },
    { icon: '💰', name: 'Salary Deposit', amount: '+$4,200.00', time: '1 hour ago', risk: 3, status: 'verified', reason: 'Regular employer payment' },
    { icon: '🛒', name: 'Online Store Purchase', amount: '-$89.50', time: '2 hours ago', risk: 12, status: 'verified', reason: 'Familiar shopping pattern' },
    { icon: '⚠️', name: 'Crypto Exchange', amount: '-$500.00', time: '3 hours ago', risk: 62, status: 'pending', reason: 'First crypto transaction' }
];

let currentLang = 'en';

/* ===== Theme Toggle ===== */
function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    toggle?.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        toggle.textContent = next === 'dark' ? '🌙' : '☀️';
    });
}

/* ===== Language Switcher ===== */
function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang === currentLang) return;

            currentLang = lang;
            document.documentElement.setAttribute('data-lang', lang);

            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            updatePageLanguage(lang);
        });
    });
}

function updatePageLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (t[key]) el.placeholder = t[key];
    });
}

/* ===== Billing Toggle ===== */
function initBillingToggle() {
    const toggle = document.getElementById('billing-toggle');
    if (!toggle) return;

    let isYearly = false;

    toggle.addEventListener('click', () => {
        isYearly = !isYearly;
        toggle.classList.toggle('active', isYearly);

        document.querySelectorAll('.price-value[data-monthly]').forEach(el => {
            el.textContent = isYearly ? el.dataset.yearly : el.dataset.monthly;
        });

        document.querySelectorAll('.pricing-annual-note').forEach(el => {
            el.style.display = isYearly ? 'block' : 'none';
        });
    });
}

/* ===== Audience Toggle ===== */
function initAudienceToggle() {
    const btns = document.querySelectorAll('.audience-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Could update pricing based on B2B/B2C
        });
    });
}

/* ===== Transactions Demo ===== */
function initTransactions() {
    const list = document.getElementById('transactions-list');
    const refreshBtn = document.getElementById('refresh-tx');

    function renderTransactions() {
        if (!list) return;

        list.innerHTML = sampleTransactions.map(tx => `
      <div class="tx-item">
        <div class="tx-icon">${tx.icon}</div>
        <div class="tx-details">
          <h4>${tx.name}</h4>
          <div class="tx-meta">
            <span>${tx.time}</span>
            <span>${tx.reason}</span>
          </div>
        </div>
        <div class="tx-amount ${tx.amount.startsWith('+') ? 'positive' : 'negative'}">${tx.amount}</div>
        <div class="tx-risk">
          <div class="tx-risk-score ${tx.risk < 30 ? 'low' : tx.risk < 70 ? 'medium' : 'high'}">${tx.risk}</div>
          <span class="tx-risk-label">Risk</span>
        </div>
        <span class="tx-status ${tx.status}">${tx.status === 'verified' ? '✓ Verified' : tx.status === 'blocked' ? '✕ Blocked' : '⏳ Review'}</span>
      </div>
    `).join('');
    }

    renderTransactions();

    refreshBtn?.addEventListener('click', () => {
        refreshBtn.textContent = '⏳ Loading...';
        setTimeout(() => {
            // Randomize some risk scores
            sampleTransactions.forEach(tx => {
                if (tx.status !== 'verified') {
                    tx.risk = Math.floor(Math.random() * 100);
                    tx.status = tx.risk < 30 ? 'verified' : tx.risk < 70 ? 'pending' : 'blocked';
                }
            });
            renderTransactions();
            refreshBtn.textContent = '↻ Refresh';
        }, 800);
    });
}

/* ===== Device Intelligence ===== */
function initDeviceIntel() {
    // Simulate device detection
    const ua = navigator.userAgent;

    // Get browser
    let browser = 'Unknown';
    if (ua.includes('Chrome')) browser = 'Chrome';
    else if (ua.includes('Firefox')) browser = 'Firefox';
    else if (ua.includes('Safari')) browser = 'Safari';
    else if (ua.includes('Edge')) browser = 'Edge';

    // Get OS
    let os = 'Unknown';
    if (ua.includes('Windows')) os = 'Windows';
    else if (ua.includes('Mac')) os = 'macOS';
    else if (ua.includes('Linux')) os = 'Linux';
    else if (ua.includes('Android')) os = 'Android';
    else if (ua.includes('iOS')) os = 'iOS';

    // Get device type
    let device = 'Desktop';
    if (/Mobi|Android/i.test(ua)) device = 'Mobile';
    else if (/Tablet|iPad/i.test(ua)) device = 'Tablet';

    // Update UI
    document.getElementById('device-type')?.textContent && (document.getElementById('device-type').textContent = device);
    document.getElementById('device-browser')?.textContent && (document.getElementById('device-browser').textContent = browser);
    document.getElementById('device-os')?.textContent && (document.getElementById('device-os').textContent = os);

    // Simulate IP & location
    document.getElementById('device-ip')?.textContent && (document.getElementById('device-ip').textContent = '192.168.1.' + Math.floor(Math.random() * 255));
    document.getElementById('device-location')?.textContent && (document.getElementById('device-location').textContent = 'Baku, Azerbaijan');
}

/* ===== AI Chat Widget ===== */
function initChatWidget() {
    const toggle = document.getElementById('chat-toggle');
    const window_ = document.getElementById('chat-window');
    const close = document.getElementById('chat-close');
    const input = document.getElementById('chat-input');
    const send = document.getElementById('chat-send');
    const messages = document.getElementById('chat-messages');

    let isOpen = false;

    toggle?.addEventListener('click', () => {
        isOpen = !isOpen;
        window_.classList.toggle('open', isOpen);
    });

    close?.addEventListener('click', () => {
        isOpen = false;
        window_.classList.remove('open');
    });

    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;

        addMessage('user', text);
        input.value = '';

        const typingId = showTyping();

        setTimeout(() => {
            removeTyping(typingId);
            const response = getResponse(text);
            addMessage('ai', response);
        }, 500 + Math.random() * 500);
    }

    send?.addEventListener('click', sendMessage);
    input?.addEventListener('keypress', e => {
        if (e.key === 'Enter') sendMessage();
    });

    function addMessage(type, text) {
        const msg = document.createElement('div');
        msg.className = `chat-message chat-message-${type}`;
        msg.textContent = text;
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
    }

    function showTyping() {
        const id = 'typing-' + Date.now();
        const typing = document.createElement('div');
        typing.id = id;
        typing.className = 'chat-message chat-message-ai';
        typing.innerHTML = '<span style="opacity:0.6">...</span>';
        messages.appendChild(typing);
        messages.scrollTop = messages.scrollHeight;
        return id;
    }

    function removeTyping(id) {
        document.getElementById(id)?.remove();
    }

    function getResponse(text) {
        const lower = text.toLowerCase();
        const responses = chatResponses[currentLang] || chatResponses.en;

        if (lower.includes('risk') || lower.includes('score') || lower.includes('puan') || lower.includes('риск')) {
            return responses.risk[Math.floor(Math.random() * responses.risk.length)];
        }
        if (lower.includes('verified') || lower.includes('approve') || lower.includes('doğru') || lower.includes('верифиц')) {
            return responses.verified[Math.floor(Math.random() * responses.verified.length)];
        }
        if (lower.includes('block') || lower.includes('reject') || lower.includes('engel') || lower.includes('блок')) {
            return responses.blocked[Math.floor(Math.random() * responses.blocked.length)];
        }
        if (lower.includes('device') || lower.includes('ip') || lower.includes('cihaz') || lower.includes('устройств')) {
            return responses.device?.[Math.floor(Math.random() * (responses.device?.length || 1))] || responses.default[0];
        }

        return responses.default[Math.floor(Math.random() * responses.default.length)];
    }
}

/* ===== Forms ===== */
function initForms() {
    document.getElementById('contact-form')?.addEventListener('submit', e => {
        e.preventDefault();
        alert('Message sent! We\'ll get back to you soon.');
        e.target.reset();
    });

    document.getElementById('feedback-form')?.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you for your feedback! 🎉');
        e.target.reset();
    });
}

/* ===== Rating Buttons ===== */
function initRatingButtons() {
    const group = document.getElementById('rating-group');
    if (!group) return;

    group.querySelectorAll('.rating-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            group.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

/* ===== Scroll Animations ===== */
function initScrollAnimations() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
}

/* ===== Mobile Menu ===== */
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    if (!btn) return;

    let isOpen = false;
    let mobileNav = null;

    btn.addEventListener('click', () => {
        isOpen = !isOpen;

        const spans = btn.querySelectorAll('span');
        if (isOpen) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans.forEach(s => { s.style.transform = 'none'; s.style.opacity = '1'; });
        }

        if (!mobileNav) {
            mobileNav = document.createElement('div');
            mobileNav.innerHTML = `
        <nav style="display:flex;flex-direction:column;gap:0.5rem;">
          <a href="#dashboard" style="padding:1rem;border-bottom:1px solid var(--border);color:var(--text-secondary);">Dashboard</a>
          <a href="#pricing" style="padding:1rem;border-bottom:1px solid var(--border);color:var(--text-secondary);">Pricing</a>
          <a href="#contact" style="padding:1rem;border-bottom:1px solid var(--border);color:var(--text-secondary);">Contact</a>
          <a href="#feedback" style="padding:1rem;border-bottom:1px solid var(--border);color:var(--text-secondary);">Feedback</a>
          <div class="lang-switcher" style="margin-top:1rem;justify-content:center;">
            <button class="lang-btn active" data-lang="en">EN</button>
            <button class="lang-btn" data-lang="az">AZ</button>
            <button class="lang-btn" data-lang="ru">RU</button>
            <button class="lang-btn" data-lang="tr">TR</button>
          </div>
        </nav>
      `;
            Object.assign(mobileNav.style, {
                position: 'fixed', top: '64px', left: '0', right: '0', bottom: '0',
                background: 'var(--bg-primary)', padding: '1.5rem', zIndex: '99', display: 'none'
            });
            document.body.appendChild(mobileNav);

            mobileNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileNav.style.display = 'none';
                    isOpen = false;
                    spans.forEach(s => { s.style.transform = 'none'; s.style.opacity = '1'; });
                });
            });

            mobileNav.querySelectorAll('.lang-btn').forEach(langBtn => {
                langBtn.addEventListener('click', () => {
                    const lang = langBtn.dataset.lang;
                    currentLang = lang;
                    document.documentElement.setAttribute('data-lang', lang);
                    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                    document.querySelectorAll(`.lang-btn[data-lang="${lang}"]`).forEach(b => b.classList.add('active'));
                    updatePageLanguage(lang);
                });
            });
        }

        mobileNav.style.display = isOpen ? 'block' : 'none';
    });
}

/* ===== Animate Risk Score ===== */
function animateRiskScore() {
    const scoreEl = document.getElementById('hero-risk-score');
    if (!scoreEl) return;

    let current = 12;

    setInterval(() => {
        const change = Math.floor(Math.random() * 5) - 2;
        current = Math.max(5, Math.min(25, current + change));
        scoreEl.textContent = current;
    }, 3000);
}

console.log('⚡ PaySphere initialized');
