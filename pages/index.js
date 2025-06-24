<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MultitokenWorld</title>
    <meta name="description" content="Explora, aprende y construye en el mundo cripto con MultitokenWorld.">
    <link rel="icon" href="/favicon.ico"> <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'btn-blue': '#4A90E2',
                        'btn-green': '#50C878',
                        'btn-purple': '#8A2BE2',
                        'background-dark': '#0d1117',
                        'text-light': '#e2e8f0',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                }
            }
        }
    </script>
    <style>
        /* Estilos globales */
        body {
            background-color: #0d1117; /* Reemplaza --background-dark ya que no hay variables CSS aquí */
            color: #e2e8f0; /* Reemplaza --text-light */
            font-family: 'Inter', sans-serif;
        }

        .button-effect:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        /* Estilos para el scrollbar (opcional) */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #1e293b;
        }
        ::-webkit-scrollbar-thumb {
            background: #4a5568;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #6b7280;
        }
        
        /* Animaciones */
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-fade-in-down {
            animation: fadeInDown 1s ease-out forwards;
        }

        /* Estilos para íconos si se usan caracteres o SVGs */
        .star-icon {
            color: #FFD700; /* Gold color */
        }
        .check-icon {
            color: #22C55E; /* Green-500 */
        }
        
        /* Estilos para los "vistos buenos" del roadmap */
        .roadmap-status-done .check-icon {
            color: #22C55E; /* Tailwind green-500 */
        }
        .roadmap-status-soon .soon-icon {
            color: #fbbf24; /* Tailwind yellow-500 */
        }
    </style>
</head>
<body class="min-h-screen pt-20"> <nav class="fixed w-full z-50 bg-gray-900 bg-opacity-95 shadow-lg py-4">
        <div class="container mx-auto flex justify-between items-center px-6">
            <a href="#" class="flex items-center space-x-3">
                <img src="multitokenworld-logo.png" alt="MultitokenWorld Logo" class="w-12 h-12 rounded-full">
                <span class="text-2xl font-extrabold text-white hidden md:block">MultitokenWorld</span>
            </a>
            <div class="flex items-center space-x-6">
                <a href="#explorer" class="text-white hover:text-green-400 font-medium transition-colors duration-200 hidden md:inline-block">Explorar Contratos</a>
                <a href="#generator" class="text-white hover:text-green-400 font-medium transition-colors duration-200 hidden md:inline-block">Generar Token</a>
                <a href="#education" class="text-white hover:text-green-400 font-medium transition-colors duration-200 hidden md:inline-block">Educación y Recursos</a>
                <a href="#live-prices" class="text-white hover:text-green-400 font-medium transition-colors duration-200 hidden md:inline-block">Precios en Vivo</a>
                <a href="#pricing" class="text-white hover:text-green-400 font-medium transition-colors duration-200 hidden md:inline-block">Planes y Precios</a>
                
                <select id="language-select" class="bg-gray-800 text-white rounded-md p-2 focus:ring-2 focus:ring-btn-blue focus:outline-none">
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
            </div>
        </div>
    </nav>

    <main>
        <section id="hero" class="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style="background-image: url('hero-bg.jpg');">
            <div class="absolute inset-0 bg-black opacity-70"></div>
            <div class="z-10 p-8 max-w-4xl mx-auto text-white">
                <h1 class="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-down" id="hero-headline"></h1>
                <p class="text-lg md:text-xl italic text-gray-300 mb-8 max-w-2xl mx-auto" id="hero-quote"></p>
                <p class="text-xl md:text-2xl font-light mb-12 leading-relaxed" id="hero-subtitle"></p>
                <div class="flex flex-wrap justify-center gap-4" id="hero-buttons"></div>
            </div>
        </section>

        <section id="features" class="py-20 bg-gray-900 px-6">
            <div class="container mx-auto">
                <h2 class="text-4xl font-extrabold mb-16 text-center text-blue-400" id="features-title"></h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" id="features-grid"></div>
            </div>
        </section>

        <section id="explorer" class="py-20 bg-gray-900 px-6 rounded-xl shadow-2xl my-10 border border-gray-800">
            <h2 class="text-4xl font-extrabold mb-12 text-center text-green-400" id="explorer-title"></h2>
            <div class="max-w-3xl mx-auto p-8 bg-gray-800 rounded-2xl shadow-xl">
                <input type="text" id="explorer-input" class="w-full p-4 mb-6 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-btn-blue transition-all duration-300" placeholder="">
                <button id="explorer-button" class="w-full bg-btn-blue text-white font-bold py-4 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed button-effect">
                    Explore
                </button>
                <p id="explorer-error" class="text-red-400 mt-6 text-center font-medium"></p>
                <div id="explorer-results" class="mt-8 p-6 bg-gray-700 rounded-lg text-sm border border-gray-600 hidden">
                    <h3 class="font-semibold text-blue-300 mb-3 text-lg" id="explorer-results-title"></h3>
                    <pre id="explorer-pre" class="whitespace-pre-wrap break-words text-gray-200 bg-gray-800 p-4 rounded-md overflow-x-auto text-base"></pre>
                </div>
                <p id="explorer-disclaimer" class="mt-10 text-sm text-gray-400 text-center italic leading-relaxed"></p>
            </div>
        </section>

        <section id="generator" class="py-20 bg-gray-900 px-6 rounded-xl shadow-2xl my-10 border border-gray-800">
            <h2 class="text-4xl font-extrabold mb-12 text-center text-green-400" id="generator-title"></h2>
            <div class="max-w-2xl mx-auto p-8 bg-gray-800 rounded-2xl shadow-xl">
                <button id="connect-wallet-button" class="w-full bg-btn-purple text-white font-bold py-4 px-6 rounded-lg shadow-md hover:bg-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed button-effect"></button>
                <div id="token-form-container" class="space-y-6 hidden">
                    <p id="generator-message" class="text-center text-blue-300 font-semibold"></p>
                    <div>
                        <label for="tokenName" class="block text-blue-300 text-sm font-bold mb-2" id="label-token-name"></label>
                        <input type="text" id="tokenName" class="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Mi Token World">
                    </div>
                    <div>
                        <label for="tokenSymbol" class="block text-blue-300 text-sm font-bold mb-2" id="label-token-symbol"></label>
                        <input type="text" id="tokenSymbol" class="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="MTW">
                    </div>
                    <div>
                        <label for="totalSupply" class="block text-blue-300 text-sm font-bold mb-2" id="label-total-supply"></label>
                        <input type="number" id="totalSupply" class="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="1000000">
                    </div>
                    <div>
                        <label for="decimals" class="block text-blue-300 text-sm font-bold mb-2" id="label-decimals"></label>
                        <input type="number" id="decimals" class="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="18">
                    </div>
                    <button id="generate-token-button" class="w-full bg-btn-green text-white font-bold py-4 px-6 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed button-effect"></button>
                    <p id="generator-error" class="text-red-400 mt-4 text-center font-medium"></p>
                </div>
                <p id="generator-disclaimer" class="mt-10 text-sm text-gray-400 text-center italic leading-relaxed"></p>
            </div>
        </section>

        <section id="live-prices" class="py-20 bg-gray-900 px-6 rounded-xl shadow-2xl my-10 border border-gray-800">
            <h2 class="text-4xl font-extrabold mb-12 text-center text-green-400" id="prices-title"></h2>
            <div class="max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-xl">
                <p id="prices-loading" class="text-center text-blue-300 text-lg"></p>
                <p id="prices-error" class="text-center text-red-400 text-lg"></p>
                <div id="prices-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"></div>
                <p id="prices-disclaimer" class="mt-10 text-sm text-gray-400 text-center italic leading-relaxed"></p>
            </div>
        </section>

        <section id="education" class="py-20 bg-gray-900 px-6 rounded-xl shadow-2xl my-10 border border-gray-800">
            <h2 class="text-4xl font-extrabold mb-12 text-center text-green-400" id="education-title"></h2>
            <div class="max-w-5xl mx-auto space-y-12">
                <p id="education-intro" class="text-center text-lg text-gray-300 mb-8 leading-relaxed"></p>

                <div class="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
                    <h3 class="text-3xl font-bold text-blue-400 mb-6 text-center" id="wallets-title"></h3>
                    <p class="text-md text-gray-300 mb-8 text-center leading-relaxed" id="wallets-intro"></p>
                    <div id="wallets-grid" class="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
                    <p id="disclaimer-wallets" class="mt-8 text-sm text-gray-400 text-center italic leading-relaxed"></p>
                </div>

                <div class="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
                    <h3 class="text-3xl font-bold text-green-400 mb-6 text-center" id="exchange-title"></h3>
                    <p class="text-md text-gray-300 mb-8 text-center leading-relaxed" id="exchange-intro"></p>
                    <div id="exchanges-grid" class="grid grid-cols-1 md:grid-cols-1 gap-8"></div>
                    <p id="disclaimer-exchanges" class="mt-8 text-sm text-red-400 text-center font-bold leading-relaxed"></p>
                    <p id="affiliate-disclosure" class="mt-4 text-xs text-gray-500 text-center italic"></p>
                </div>
            </div>
        </section>

        <section id="pricing" class="py-20 bg-gray-950 px-6">
            <div class="container mx-auto">
                <h2 class="text-4xl font-extrabold mb-6 text-center text-purple-400" id="pricing-title"></h2>
                <p class="text-lg text-gray-300 mb-16 text-center max-w-2xl mx-auto leading-relaxed" id="pricing-subtitle"></p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto" id="pricing-plans-grid"></div>
            </div>
        </section>

        <section id="contribute" class="py-20 bg-gray-900 px-6 rounded-xl shadow-2xl my-10 border border-gray-800">
            <div class="container mx-auto max-w-3xl text-center">
                <h2 class="text-4xl font-extrabold mb-6 text-blue-400" id="contribute-title"></h2>
                <p class="text-lg text-gray-300 mb-8 leading-relaxed" id="contribute-subtitle"></p>
                <p class="text-md text-gray-400 mb-6" id="contribute-text"></p>
                <div class="bg-gray-800 p-6 rounded-lg shadow-inner inline-block">
                    <p class="text-xl font-mono text-green-300 break-all" id="contribute-address"></p>
                </div>
                <p class="text-md text-gray-400 mt-6" id="contribute-suggested"></p>
            </div>
        </section>

        <section id="testimonials" class="py-20 bg-gray-950 px-6">
            <div class="container mx-auto">
                <h2 class="text-4xl font-extrabold mb-16 text-center text-purple-400" id="testimonials-title"></h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto" id="testimonials-grid"></div>
            </div>
        </section>

        <section id="roadmap" class="py-20 bg-gray-900 px-6 rounded-xl shadow-2xl my-10 border border-gray-800">
            <div class="container mx-auto max-w-3xl text-center">
                <h2 class="text-4xl font-extrabold mb-12 text-green-400" id="roadmap-title"></h2>
                <ul id="roadmap-list" class="space-y-4 text-left inline-block"></ul>
            </div>
        </section>

        <section id="contact" class="py-20 bg-gray-950 px-6">
            <div class="container mx-auto max-w-4xl text-center">
                <h2 class="text-4xl font-extrabold mb-6 text-blue-400" id="contact-title"></h2>
                <p class="text-lg text-gray-300 mb-8 leading-relaxed" id="contact-text"></p>
                <a id="contact-email-link" class="text-xl md:text-2xl font-bold text-green-400 hover:text-green-300 transition-colors duration-200"></a>
                <div class="mt-12">
                    <h3 class="text-2xl font-semibold text-white mb-6" id="social-media-title"></h3>
                    <div id="social-media-links" class="flex justify-center space-x-8"></div>
                </div>
            </div>
        </section>
    </main>

    <footer class="bg-gray-800 text-gray-400 py-10 px-6 mt-20">
        <div class="container mx-auto text-center text-sm md:text-md">
            <p class="mb-4" id="footer-text"></p>
            <div class="flex justify-center space-x-6 mb-4">
                <a href="#privacy" class="hover:text-white transition-colors duration-200" id="privacy-policy-link"></a>
                <a href="#terms" class="hover:text-white transition-colors duration-200" id="terms-of-service-link"></a>
            </div>
            <p class="mt-8 text-xs">Developed with ❤️ by MultitokenWorld Team</p>
        </div>
    </footer>

    <script>
        // --- Contenido Multilingüe (igual que antes) ---
        const content = {
            es: {
                headline: "MultitokenWorld",
                quote: "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks",
                subtitle: "Explora, aprende y construye en el mundo cripto. Contratos, tokens, historia, educación y herramientas para todos.",
                buttons: [
                    { text: "Explorar Contratos", href: "#explorer", bgColorClass: "bg-btn-blue" },
                    { text: "Generar Token", href: "#generator", bgColorClass: "bg-btn-green" },
                    { text: "Glosario Cripto", href: "#glossary", bgColorClass: "bg-btn-purple" },
                    { text: "Educación y Recursos", href: "#education", bgColorClass: "bg-btn-blue" },
                    { text: "Precios en Vivo", href: "#live-prices", bgColorClass: "bg-btn-green" },
                    { text: "Planes y Precios", href: "#pricing", bgColorClass: "bg-btn-purple" },
                    { text: "Aportes Voluntarios", href: "#contribute", bgColorClass: "bg-btn-blue" },
                    { text: "Publicidad", href: "#advertising", bgColorClass: "bg-btn-green" },
                ],
                featuresTitle: "¿Qué puedes hacer aquí?",
                features: [
                    { title: "📜 Explorar contratos", text: "Visualiza contratos en blockchain y su historia. Aprende cómo funcionan y qué hacen." },
                    { title: "🔧 Generar tokens", text: "Crea tu propio token ERC-20 fácilmente sin saber programar. 100% descentralizado." },
                    { title: "🎓 Educación Web3", text: "Aprende desde cero sobre wallets, claves, Bitcoin, Satoshi Nakamoto, y más." },
                    { title: "📊 Precios en Vivo", text: "Visualiza valores actualizados de tokens y criptomonedas, con gráficos y fuentes oficiales." },
                    { title: "🧠 Glosario Cripto", text: "Consulta definiciones clave del ecosistema blockchain y enlaces confiables." },
                    { title: "📬 Contacto y Publicidad", text: "¿Quieres promocionar tu proyecto? Escríbenos: contacto@multitokenworld.com" }
                ],
                pricingTitle: "Planes y Precios",
                pricingSubtitle: "Elige el plan que mejor se adapte a tus necesidades. Prueba nuestras herramientas gratuitas o accede a funciones avanzadas con nuestros planes premium.",
                pricingPlans: [
                    {
                        name: "Plan Gratuito",
                        price: "CAD $0",
                        frequency: "/mes",
                        features: [
                            "10 escaneos de contratos/mes",
                            "Generador de tokens (funcionalidad limitada)",
                            "Acceso al glosario y educación básica",
                            "Precios cripto en vivo",
                            "Soporte comunitario"
                        ],
                        buttonText: "Comenzar Gratis",
                        buttonLink: "#generator",
                        buttonColorClass: "bg-btn-blue"
                    },
                    {
                        name: "Plan Premium Básico",
                        price: "CAD $9.99",
                        frequency: "/mes",
                        features: [
                            "50 escaneos de contratos/mes",
                            "Generador de tokens avanzado",
                            "Acceso ilimitado a educación y recursos",
                            "Precios en vivo y análisis básico",
                            "Soporte por email"
                        ],
                        buttonText: "Suscribirse Ahora",
                        buttonLink: "#contact",
                        buttonColorClass: "bg-btn-green"
                    },
                    {
                        name: "Plan Premium Pro",
                        price: "CAD $29.99",
                        frequency: "/mes",
                        features: [
                            "Escaneos de contratos ilimitados",
                            "Generador de tokens personalizado",
                            "Todos los recursos educativos y premium",
                            "Análisis avanzado y alertas de precios",
                            "Soporte prioritario 24/7",
                            "Acceso Beta a nuevas herramientas"
                        ],
                        buttonText: "Obtener Pro",
                        buttonLink: "#contact",
                        buttonColorClass: "bg-btn-purple"
                    }
                ],
                contributeTitle: "Aportes Voluntarios",
                contributeSubtitle: "Tu apoyo ayuda a mantener y mejorar MultitokenWorld. Considera hacer un aporte voluntario.",
                contributeText: "Puedes apoyar nuestro trabajo enviando un aporte a la siguiente dirección de billetera Ethereum. ¡Cada contribución, grande o pequeña, es muy apreciada!",
                contributeAddress: "0xEjemploDeTuDireccionDeBilleteraEthereumAqui", // ¡CAMBIAR POR TU DIRECCIÓN REAL!
                contributeSuggested: "Montos Sugeridos: 0.01 ETH, 0.05 ETH, 0.1 ETH (o lo que desees)",
                testimonialsTitle: "Lo que dicen nuestros usuarios",
                testimonials: [
                    { quote: "MultitokenWorld es una herramienta fantástica. Me ayudó a entender contratos que antes me parecían imposibles. ¡Totalmente recomendable!", name: "Ana P., Entusiasta Cripto", stars: 5 },
                    { quote: "Pude crear mi propio token ERC-20 en minutos sin escribir una línea de código. La educación es invaluable.", name: "Carlos G., Desarrollador Novato", stars: 5 },
                    { quote: "Los precios en vivo son muy útiles, y el glosario es mi recurso favorito. Es una plataforma muy completa.", name: "Sofía M., Inversora", stars: 4 },
                ],
                roadmap: "Roadmap 2025",
                steps: [
                    "Historia Bitcoin",
                    "Explorador de contratos",
                    "Glosario cripto",
                    "Verificación de contratos",
                    "Publicidad con cripto",
                    "Dashboard interactivo con TradingView",
                    "Wiki educativa y preguntas frecuentes"
                ],
                roadmapStatus: {
                    "Historia Bitcoin": "done",
                    "Explorador de contratos": "done",
                    "Glosario cripto": "done",
                    "Verificación de contratos": "soon",
                    "Publicidad con cripto": "soon",
                    "Dashboard interactivo con TradingView": "soon",
                    "Wiki educativa y preguntas frecuentes": "soon"
                },
                contactTitle: "Contacto y Publicidad",
                contactText: "Si tienes preguntas, sugerencias, o estás interesado en opciones de publicidad en MultitokenWorld para tu proyecto cripto o Web3, por favor contáctanos:",
                contactEmail: "contacto@multitokenworld.com",
                socialMedia: {
                    twitter: { label: "Twitter/X", url: "https://twitter.com/TuUsuarioDeTwitter" }, // ¡CAMBIAR!
                    facebook: { label: "Facebook", url: "https://facebook.com/TuPaginaDeFacebook" }, // ¡CAMBIAR!
                    instagram: { label: "Instagram", url: "https://instagram.com/TuUsuarioDeInstagram" }, // ¡CAMBIAR!
                },
                privacyPolicy: "Política de Privacidad",
                termsOfService: "Términos de Servicio",
                footer: "© 2025 MultitokenWorld — Libertad, transparencia y tecnología. Sitio registrado en .COM con CIRA. "
            },
            en: {
                headline: "MultitokenWorld",
                quote: "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks",
                subtitle: "Explore, learn and build in the crypto world. Contracts, tokens, history, education and tools for everyone.",
                buttons: [
                    { text: "Explore Contracts", href: "#explorer", bgColorClass: "bg-btn-blue" },
                    { text: "Generate Token", href: "#generator", bgColorClass: "bg-btn-green" },
                    { text: "Crypto Glossary", href: "#glossary", bgColorClass: "bg-btn-purple" },
                    { text: "Education & Resources", href: "#education", bgColorClass: "bg-btn-blue" },
                    { text: "Live Prices", href: "#live-prices", bgColorClass: "bg-btn-green" },
                    { text: "Plans & Pricing", href: "#pricing", bgColorClass: "bg-btn-purple" },
                    { text: "Voluntary Contributions", href: "#contribute", bgColorClass: "bg-btn-blue" },
                    { text: "Advertising", href: "#advertising", bgColorClass: "bg-btn-green" },
                ],
                featuresTitle: "What can you do here?",
                features: [
                    { title: "📜 Explore contracts", text: "Browse blockchain contracts and their history. Learn how they work and what they do." },
                    { title: "🔧 Generate tokens", text: "Easily create your own ERC-20 token without coding. 100% decentralized." },
                    { title: "🎓 Web3 Education", text: "Learn from scratch about wallets, keys, Bitcoin, Satoshi Nakamoto, and more." },
                    { title: "📊 Live Prices", text: "View real-time prices for tokens and cryptocurrencies, with charts and official sources." },
                    { title: "🧠 Crypto Glossary", text: "Look up key blockchain terms with trusted links and definitions." },
                    { title: "📬 Contact & Advertising", text: "Want to promote your project? Email us: contacto@multitokenworld.com" }
                ],
                pricingTitle: "Plans and Pricing",
                pricingSubtitle: "Choose the plan that best suits your needs. Try our free tools or access advanced features with our premium plans.",
                pricingPlans: [
                    {
                        name: "Free Plan",
                        price: "CAD $0",
                        frequency: "/month",
                        features: [
                            "10 contract scans/month",
                            "Token generator (limited functionality)",
                            "Access to glossary and basic education",
                            "Live crypto prices",
                            "Community support"
                        ],
                        buttonText: "Start Free",
                        buttonLink: "#generator",
                        buttonColorClass: "bg-btn-blue"
                    },
                    {
                        name: "Basic Premium Plan",
                        price: "CAD $9.99",
                        frequency: "/month",
                        features: [
                            "50 contract scans/month",
                            "Advanced token generator",
                            "Unlimited access to education and resources",
                            "Live prices and basic analysis",
                            "Email support"
                        ],
                        buttonText: "Subscribe Now",
                        buttonLink: "#contact",
                        buttonColorClass: "bg-btn-green"
                    },
                    {
                        name: "Pro Premium Plan",
                        price: "CAD $29.99",
                        frequency: "/month",
                        features: [
                            "Unlimited contract scans",
                            "Custom token generator",
                            "All educational and premium resources",
                            "Advanced analysis and price alerts",
                            "24/7 Priority support",
                            "Beta access to new tools"
                        ],
                        buttonText: "Get Pro",
                        buttonLink: "#contact",
                        buttonColorClass: "bg-btn-purple"
                    }
                ],
                contributeTitle: "Voluntary Contributions",
                contributeSubtitle: "Your support helps maintain and improve MultitokenWorld. Please consider making a voluntary contribution.",
                contributeText: "You can support our work by sending a contribution to the following Ethereum wallet address. Every contribution, big or small, is greatly appreciated!",
                contributeAddress: "0xExampleOfYourEthereumWalletAddressHere", // ¡CAMBIAR POR TU DIRECCIÓN REAL!
                contributeSuggested: "Suggested Amounts: 0.01 ETH, 0.05 ETH, 0.1 ETH (or any amount you wish)",
                testimonialsTitle: "What our users say",
                testimonials: [
                    { quote: "MultitokenWorld is a fantastic tool. It helped me understand contracts that previously seemed impossible. Highly recommended!", name: "Ana P., Crypto Enthusiast", stars: 5 },
                    { quote: "I was able to create my own ERC-20 token in minutes without writing a line of code. The education is invaluable.", name: "Carlos G., Novice Developer", stars: 5 },
                    { quote: "Live prices are very useful, and the glossary is my favorite resource. It's a very complete platform.", name: "Sofía M., Investor", stars: 4 },
                ],
                roadmap: "Roadmap 2025",
                steps: [
                    "Bitcoin History",
                    "Contract Explorer",
                    "Crypto Glossary",
                    "Contract Verification",
                    "Crypto Ads",
                    "Interactive Dashboard with TradingView",
                    "Educational Wiki and FAQ"
                ],
                roadmapStatus: {
                    "Bitcoin History": "done",
                    "Contract Explorer": "done",
                    "Crypto Glossary": "done",
                    "Contract Verification": "soon",
                    "Crypto Ads": "soon",
                    "Interactive Dashboard with TradingView": "soon",
                    "Educational Wiki and FAQ": "soon"
                },
                contactTitle: "Contact & Advertising",
                contactText: "If you have questions, suggestions, or are interested in advertising opportunities on MultitokenWorld for your crypto or Web3 project, please contact us:",
                contactEmail: "contacto@multitokenworld.com",
                socialMedia: {
                    twitter: { label: "Twitter/X", url: "https://twitter.com/YourTwitterHandle" }, // ¡CAMBIAR!
                    facebook: { label: "Facebook", url: "https://facebook.com/YourFacebookPage" }, // ¡CAMBIAR!
                    instagram: { label: "Instagram", url: "https://instagram.com/YourInstagramHandle" }, // ¡CAMBIAR!
                },
                privacyPolicy: "Privacy Policy",
                termsOfService: "Terms of Service",
                footer: "© 2025 MultitokenWorld — Freedom, transparency and technology. Officially registered under .COM with CIRA. "
            }
        };

        let currentLang = 'es'; // Estado global del idioma

        function updateContent() {
            const t = content[currentLang];

            // Hero Section
            document.getElementById('hero-headline').textContent = t.headline;
            document.getElementById('hero-quote').textContent = `"${t.quote}"`;
            document.getElementById('hero-subtitle').textContent = t.subtitle;
            const heroButtonsContainer = document.getElementById('hero-buttons');
            heroButtonsContainer.innerHTML = '';
            t.buttons.slice(0, 4).forEach(button => {
                const a = document.createElement('a');
                a.href = button.href;
                a.className = `${button.bgColorClass} text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 button-effect`;
                a.textContent = button.text;
                heroButtonsContainer.appendChild(a);
            });

            // Features Section
            document.getElementById('features-title').textContent = t.featuresTitle;
            const featuresGrid = document.getElementById('features-grid');
            featuresGrid.innerHTML = '';
            t.features.forEach(feature => {
                const div = document.createElement('div');
                div.className = "bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300";
                div.innerHTML = `
                    <h3 class="text-2xl font-bold text-green-300 mb-4">${feature.title}</h3>
                    <p class="text-gray-300 text-lg leading-relaxed flex-grow">${feature.text}</p>
                `;
                featuresGrid.appendChild(div);
            });

            // Contract Explorer
            document.getElementById('explorer-title').textContent = t.buttons.find(btn => btn.href === '#explorer').text;
            document.getElementById('explorer-input').placeholder = t.es.placeholder || "Introduce la dirección del contrato o el hash de la transacción..."; // Fallback si no está en t
            document.getElementById('explorer-button').textContent = t.es.button || "Explorar"; // Fallback
            document.getElementById('explorer-disclaimer').textContent = t.es.disclaimer || "Esta herramienta es para fines educativos..."; // Fallback
            document.getElementById('explorer-results-title').textContent = t.es.resultsTitle || "Resultados de la Exploración:"; // Fallback

            // Token Generator
            document.getElementById('generator-title').textContent = t.buttons.find(btn => btn.href === '#generator').text;
            document.getElementById('connect-wallet-button').textContent = t.es.connectWallet || "Conectar Billetera para Generar"; // Fallback
            document.getElementById('label-token-name').textContent = t.es.nameLabel || "Nombre del Token";
            document.getElementById('label-token-symbol').textContent = t.es.symbolLabel || "Símbolo del Token (ej. MTW)";
            document.getElementById('label-total-supply').textContent = t.es.supplyLabel || "Suministro Total";
            document.getElementById('label-decimals').textContent = t.es.decimalsLabel || "Decimales (ej. 18)";
            document.getElementById('generate-token-button').textContent = t.es.generateButton || "Generar Token";
            document.getElementById('generator-disclaimer').textContent = t.es.generatorDisclaimer || "Esta herramienta es para fines educativos...";

            // Crypto Prices
            document.getElementById('prices-title').textContent = t.buttons.find(btn => btn.href === '#live-prices').text;
            document.getElementById('prices-loading').textContent = t.es.loadingPrices || "Cargando precios...";
            document.getElementById('prices-disclaimer').textContent = t.es.pricesDisclaimer || "Los precios mostrados son solo para fines informativos...";


            // Crypto Education
            document.getElementById('education-title').textContent = t.buttons.find(btn => btn.href === '#education').text;
            document.getElementById('education-intro').textContent = t.educationIntro || t.es.intro;
            document.getElementById('wallets-title').textContent = t.walletsTitle || t.es.walletsTitle;
            document.getElementById('wallets-intro').textContent = t.walletsIntro || t.es.walletsIntro;
            const walletsGrid = document.getElementById('wallets-grid');
            walletsGrid.innerHTML = '';
            t.wallets.forEach(wallet => {
                const div = document.createElement('div');
                div.className = "bg-gray-700 p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 border border-gray-600";
                div.innerHTML = `
                    <h4 class="text-2xl font-semibold text-white mb-2">${wallet.name}</h4>
                    <p class="text-gray-300 mb-4 flex-grow">${wallet.description}</p>
                    <a href="${wallet.link}" target="_blank" rel="noopener noreferrer" class="bg-btn-blue text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-600 transition-colors duration-300 mt-auto button-effect">
                        ${wallet.linkText}
                    </a>
                `;
                walletsGrid.appendChild(div);
            });
            document.getElementById('disclaimer-wallets').textContent = t.disclaimerWallets || t.es.disclaimerWallets;

            document.getElementById('exchange-title').textContent = t.exchangeTitle || t.es.exchangeTitle;
            document.getElementById('exchange-intro').textContent = t.exchangeIntro || t.es.exchangeIntro;
            const exchangesGrid = document.getElementById('exchanges-grid');
            exchangesGrid.innerHTML = '';
            t.exchanges.forEach(exchange => {
                const div = document.createElement('div');
                div.className = "bg-gray-700 p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 border border-gray-600";
                div.innerHTML = `
                    <h4 class="text-2xl font-semibold text-white mb-2">${exchange.name}</h4>
                    <p class="text-gray-300 mb-4 flex-grow">${exchange.description}</p>
                    <a href="${exchange.link}" target="_blank" rel="noopener noreferrer" class="bg-btn-green text-white font-bold py-2 px-5 rounded-lg hover:bg-green-600 transition-colors duration-300 mt-auto button-effect">
                        ${exchange.linkText}
                    </a>
                `;
                exchangesGrid.appendChild(div);
            });
            document.getElementById('disclaimer-exchanges').textContent = t.disclaimerExchanges || t.es.disclaimerExchanges;
            document.getElementById('affiliate-disclosure').textContent = t.affiliateDisclosure || t.es.affiliateDisclosure;


            // Pricing Section
            document.getElementById('pricing-title').textContent = t.pricingTitle;
            document.getElementById('pricing-subtitle').textContent = t.pricingSubtitle;
            const pricingPlansGrid = document.getElementById('pricing-plans-grid');
            pricingPlansGrid.innerHTML = '';
            t.pricingPlans.forEach(plan => {
                const div = document.createElement('div');
                div.className = "bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col border border-gray-700 transition-transform transform hover:scale-105 duration-300";
                let featuresHtml = plan.features.map(feature => `
                    <li class="flex items-center text-gray-300 text-lg">
                        <span class="check-icon mr-3 text-2xl">✔</span> ${feature}
                    </li>
                `).join('');
                div.innerHTML = `
                    <h3 class="text-3xl font-bold text-white mb-4 text-center">${plan.name}</h3>
                    <p class="text-5xl font-extrabold text-center text-green-400 mb-6">
                        ${plan.price}<span class="text-xl font-medium text-gray-400">${plan.frequency}</span>
                    </p>
                    <ul class="list-none space-y-3 mb-10 flex-grow">${featuresHtml}</ul>
                    <a href="${plan.buttonLink}" class="w-full ${plan.buttonColorClass} text-white font-bold py-3 px-6 rounded-lg text-center shadow-md hover:opacity-90 transition-all duration-300 mt-auto button-effect">
                        ${plan.buttonText}
                    </a>
                `;
                pricingPlansGrid.appendChild(div);
            });

            // Contribute Section
            document.getElementById('contribute-title').textContent = t.contributeTitle;
            document.getElementById('contribute-subtitle').textContent = t.contributeSubtitle;
            document.getElementById('contribute-text').textContent = t.contributeText;
            document.getElementById('contribute-address').textContent = t.contributeAddress;
            document.getElementById('contribute-suggested').textContent = t.contributeSuggested;

            // Testimonials Section
            document.getElementById('testimonials-title').textContent = t.testimonialsTitle;
            const testimonialsGrid = document.getElementById('testimonials-grid');
            testimonialsGrid.innerHTML = '';
            t.testimonials.forEach(testimonial => {
                let starsHtml = '';
                for (let i = 0; i < testimonial.stars; i++) {
                    starsHtml += `<span class="star-icon text-xl mx-0.5">★</span>`; // Unicode star character
                }
                const div = document.createElement('div');
                div.className = "bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300";
                div.innerHTML = `
                    <p class="italic text-gray-300 mb-4 text-lg flex-grow">"${testimonial.quote}"</p>
                    <div class="flex items-center justify-center mb-2">${starsHtml}</div>
                    <p class="font-semibold text-white mt-2">${testimonial.name}</p>
                `;
                testimonialsGrid.appendChild(div);
            });

            // Roadmap Section
            document.getElementById('roadmap-title').textContent = t.roadmap;
            const roadmapList = document.getElementById('roadmap-list');
            roadmapList.innerHTML = '';
            t.steps.forEach(step => {
                const li = document.createElement('li');
                li.className = `flex items-center text-lg text-gray-300 roadmap-status-${t.roadmapStatus[step]}`;
                const icon = t.roadmapStatus[step] === "done" ?
                    '<span class="check-icon mr-3 text-2xl">✔</span>' :
                    '<span class="soon-icon mr-3 text-2xl">🔜</span>';
                li.innerHTML = `${icon} ${step}`;
                roadmapList.appendChild(li);
            });

            // Contact & Advertising Section
            document.getElementById('contact-title').textContent = t.contactTitle;
            document.getElementById('contact-text').textContent = t.contactText;
            const contactEmailLink = document.getElementById('contact-email-link');
            contactEmailLink.href = `mailto:${t.contactEmail}`;
            contactEmailLink.textContent = t.contactEmail;
            document.getElementById('social-media-title').textContent = currentLang === "es" ? "Síguenos en Redes Sociales" : "Follow Us on Social Media";
            const socialMediaLinks = document.getElementById('social-media-links');
            socialMediaLinks.innerHTML = '';
            Object.values(t.socialMedia).forEach(social => {
                const a = document.createElement('a');
                a.href = social.url;
                a.target = "_blank";
                a.rel = "noopener noreferrer";
                a.className = "text-blue-500 hover:text-blue-400 transition-colors duration-200 text-lg md:text-xl font-medium";
                a.textContent = social.label;
                socialMediaLinks.appendChild(a);
            });

            // Footer
            document.getElementById('footer-text').textContent = t.footer;
            document.getElementById('privacy-policy-link').textContent = t.privacyPolicy;
            document.getElementById('terms-of-service-link').textContent = t.termsOfService;
        }

        // --- Manejo de idioma ---
        document.addEventListener('DOMContentLoaded', () => {
            const langSelect = document.getElementById('language-select');
            langSelect.value = currentLang; // Sincronizar select con el estado inicial
            langSelect.addEventListener('change', (event) => {
                currentLang = event.target.value;
                updateContent();
            });
            updateContent(); // Cargar contenido inicial al cargar la página
        });

        // --- Lógica del Explorador de Contratos ---
        document.addEventListener('DOMContentLoaded', () => {
            const explorerInput = document.getElementById('explorer-input');
            const explorerButton = document.getElementById('explorer-button');
            const explorerError = document.getElementById('explorer-error');
            const explorerResults = document.getElementById('explorer-results');
            const explorerPre = document.getElementById('explorer-pre');

            explorerButton.addEventListener('click', async () => {
                const input = explorerInput.value.trim();
                explorerError.textContent = '';
                explorerResults.classList.add('hidden');
                explorerButton.disabled = true;
                explorerButton.textContent = currentLang === "es" ? "Cargando..." : "Loading...";

                if (!input) {
                    explorerError.textContent = currentLang === "es" ? "Por favor, introduce una dirección o hash." : "Please enter an address or hash.";
                    explorerButton.disabled = false;
                    explorerButton.textContent = currentLang === "es" ? "Explorar" : "Explore";
                    return;
                }

                try {
                    // Simulación de la API para mostrar funcionalidad "en desarrollo"
                    await new Promise(resolve => setTimeout(resolve, 1500)); // Simula una llamada a la API
                    const simulatedData = { message: (currentLang === "es" ? "Funcionalidad en desarrollo real. Entrada:" : "Real functionality in development. Input:") + ` ${input}` };
                    explorerPre.textContent = JSON.stringify(simulatedData, null, 2);
                    explorerResults.classList.remove('hidden');
                } catch (e) {
                    console.error("Error exploring contract:", e);
                    explorerError.textContent = currentLang === "es" ? "Error al explorar el contrato. Inténtalo de nuevo." : "Error exploring contract. Please try again.";
                } finally {
                    explorerButton.disabled = false;
                    explorerButton.textContent = currentLang === "es" ? "Explorar" : "Explore";
                }
            });
        });

        // --- Lógica del Generador de Tokens ---
        document.addEventListener('DOMContentLoaded', () => {
            const connectWalletButton = document.getElementById('connect-wallet-button');
            const tokenFormContainer = document.getElementById('token-form-container');
            const tokenNameInput = document.getElementById('tokenName');
            const tokenSymbolInput = document.getElementById('tokenSymbol');
            const totalSupplyInput = document.getElementById('totalSupply');
            const decimalsInput = document.getElementById('decimals');
            const generateTokenButton = document.getElementById('generate-token-button');
            const generatorMessage = document.getElementById('generator-message');
            const generatorError = document.getElementById('generator-error');

            let walletConnected = false;

            const updateGeneratorUI = () => {
                generatorMessage.textContent = '';
                generatorError.textContent = '';
                if (walletConnected) {
                    connectWalletButton.classList.add('hidden');
                    tokenFormContainer.classList.remove('hidden');
                    generatorMessage.textContent = currentLang === "es" ? "Billetera conectada." : "Wallet connected.";
                } else {
                    connectWalletButton.classList.remove('hidden');
                    tokenFormContainer.classList.add('hidden');
                }
            };

            connectWalletButton.addEventListener('click', async () => {
                connectWalletButton.disabled = true;
                connectWalletButton.textContent = currentLang === "es" ? "Conectando..." : "Connecting...";
                try {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    walletConnected = true;
                    updateGeneratorUI();
                } catch (e) {
                    generatorError.textContent = currentLang === "es" ? "No se pudo conectar la billetera." : "Could not connect wallet.";
                } finally {
                    connectWalletButton.disabled = false;
                }
            });

            generateTokenButton.addEventListener('click', async () => {
                if (!walletConnected) {
                    generatorError.textContent = currentLang === "es" ? "Por favor, conecta tu billetera primero." : "Please connect your wallet first.";
                    return;
                }

                const name = tokenNameInput.value.trim();
                const symbol = tokenSymbolInput.value.trim();
                const supply = totalSupplyInput.value.trim();
                const decimals = decimalsInput.value.trim();

                if (!name || !symbol || !supply || !decimals) {
                    generatorError.textContent = currentLang === "es" ? "Por favor, completa todos los campos." : "Please fill all fields.";
                    return;
                }

                generateTokenButton.disabled = true;
                generateTokenButton.textContent = currentLang === "es" ? "Generando..." : "Generating...";
                generatorMessage.textContent = '';
                generatorError.textContent = '';

                try {
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    const txHash = `0x${Math.random().toString(16).slice(2, 12)}${Date.now().toString(16)}`;
                    generatorMessage.textContent = (currentLang === "es" ? "Token generado con éxito (funcionalidad en desarrollo). ID de Transacción: " : "Token successfully generated (functionality in development). Transaction ID: ") + txHash;
                    tokenNameInput.value = "";
                    tokenSymbolInput.value = "";
                    totalSupplyInput.value = "";
                    decimalsInput.value = "18";
                } catch (e) {
                    generatorError.textContent = currentLang === "es" ? "Error al generar el token. Asegúrate de tener una billetera conectada y fondos suficientes para el gas." : "Error generating token. Ensure you have a wallet connected and sufficient funds for gas.";
                } finally {
                    generateTokenButton.disabled = false;
                    generateTokenButton.textContent = currentLang === "es" ? "Generar Token" : "Generate Token";
                }
            });

            // Re-render UI on language change
            document.getElementById('language-select').addEventListener('change', updateGeneratorUI);
            updateGeneratorUI(); // Initial UI setup
        });


        // --- Lógica de Precios de Criptomonedas ---
        document.addEventListener('DOMContentLoaded', () => {
            const pricesLoading = document.getElementById('prices-loading');
            const pricesError = document.getElementById('prices-error');
            const pricesGrid = document.getElementById('prices-grid');

            const cryptos = [
                "bitcoin", "ethereum", "solana", "cardano", "dogecoin",
                "binancecoin", "ripple", "litecoin",
            ];

            const fetchPrices = async () => {
                pricesLoading.classList.remove('hidden');
                pricesError.textContent = '';
                pricesGrid.innerHTML = ''; // Clear previous prices
                pricesLoading.textContent = content[currentLang].es.loadingPrices || "Cargando precios...";

                try {
                    const ids = cryptos.join(",");
                    const currency = "usd";
                    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${currency}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();

                    pricesGrid.innerHTML = ''; // Clear existing content before rendering
                    cryptos.forEach((cryptoId) => {
                        const price = data[cryptoId] && data[cryptoId].usd ? data[cryptoId].usd.toFixed(2) : 'N/A';
                        const div = document.createElement('div');
                        div.className = "bg-gray-700 p-6 rounded-lg flex items-center justify-between shadow-md transition-transform transform hover:scale-105 duration-300 border border-gray-600";
                        div.innerHTML = `
                            <span class="text-xl font-medium capitalize text-blue-300">
                                ${cryptoId.replace("coin", "")}
                            </span>
                            <span class="text-2xl font-bold text-green-400">
                                $${price} USD
                            </span>
                        `;
                        pricesGrid.appendChild(div);
                    });
                } catch (e) {
                    console.error("Error fetching crypto prices:", e);
                    pricesError.textContent = content[currentLang].es.pricesError || "Error al cargar los precios. Inténtalo de nuevo más tarde.";
                } finally {
                    pricesLoading.classList.add('hidden');
                }
            };

            // Initial fetch and set interval
            fetchPrices();
            setInterval(fetchPrices, 60000); // Update every 60 seconds

            // Update content on language change
            document.getElementById('language-select').addEventListener('change', fetchPrices);
        });

        // Initialize content on load
        document.addEventListener('DOMContentLoaded', updateContent);
    </script>
</body>
</html>
