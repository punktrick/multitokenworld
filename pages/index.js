// pages/index.js - Script único con todas las funcionalidades integradas para MultitokenWorld

import React, { useState, useEffect } from "react";
import Head from "next/head"; // Head de Next.js para gestionar el <head> del HTML

// Importa estas librerías si planeas usarlas. Recuerda instalarlas con 'npm install axios ethers'.
// axios es opcional si usas la API Fetch nativa del navegador, como se hace para CoinGecko.
// import axios from "axios";
// ethers es crucial para interactuar con la blockchain (ej. conectar billetera, desplegar contratos).
// import { ethers } from "ethers"; // Asegúrate de tenerlo instalado: npm install ethers

export default function Home() {
  const [lang, setLang] = useState("es"); // Estado para el idioma

  // --- Contenido multilingüe ---
  const content = {
    es: {
      headline: "MultitokenWorld",
      quote: "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks",
      subtitle: "Explora, aprende y construye en el mundo cripto. Contratos, tokens, historia, educación y herramientas para todos.",
      buttons: [
        { text: "Explorar Contratos", href: "#explorer" },
        { text: "Generar Token", href: "#generator" },
        { text: "Glosario Cripto", href: "#glossary" },
        { text: "Educación y Recursos", href: "#education" },
        { text: "Precios en Vivo", href: "#live-prices" },
        { text: "Planes y Precios", href: "#pricing" },
        { text: "Aportes Voluntarios", href: "#contribute" },
        { text: "Publicidad", href: "#advertising" },
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
          buttonLink: "#generator"
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
          buttonLink: "#contact" // O un enlace a tu pasarela de pago
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
          buttonLink: "#contact" // O un enlace a tu pasarela de pago
        }
      ],
      contributeTitle: "Aportes Voluntarios",
      contributeSubtitle: "Tu apoyo ayuda a mantener y mejorar MultitokenWorld. Considera hacer un aporte voluntario.",
      contributeText: "Puedes apoyar nuestro trabajo enviando un aporte a la siguiente dirección de billetera Ethereum. ¡Cada contribución, grande o pequeña, es muy apreciada!",
      contributeAddress: "0xEjemploDeTuDireccionDeBilleteraEthereumAqui", // Placeholder, ¡CAMBIAR!
      contributeSuggested: "Montos Sugeridos: 0.01 ETH, 0.05 ETH, 0.1 ETH (o lo que desees)",
      testimonialsTitle: "Lo que dicen nuestros usuarios",
      testimonials: [
        { quote: "MultitokenWorld es una herramienta fantástica. Me ayudó a entender contratos que antes me parecían imposibles. ¡Totalmente recomendable!", name: "Ana P., Entusiasta Cripto", stars: 5 },
        { quote: "Pude crear mi propio token ERC-20 en minutos sin escribir una línea de código. La educación es invaluable.", name: "Carlos G., Desarrollador Novato", stars: 5 },
        { quote: "Los precios en vivo son muy útiles, y el glosario es mi recurso favorito. Es una plataforma muy completa.", name: "Sofía M., Inversora", stars: 4 },
      ],
      roadmap: "Roadmap 2025",
      steps: [
        "✅ Historia Bitcoin - Listo",
        "✅ Explorador de contratos - Activo",
        "✅ Glosario cripto - Implementado",
        "🔜 Verificación de contratos - En desarrollo",
        "🔜 Publicidad con cripto - En diseño",
        "🔜 Dashboard interactivo con TradingView - Planeado",
        "🔜 Wiki educativa y preguntas frecuentes - Próximamente"
      ],
      contactTitle: "Contacto y Publicidad",
      contactText: "Si tienes preguntas, sugerencias, o estás interesado en opciones de publicidad en MultitokenWorld para tu proyecto cripto o Web3, por favor contáctanos:",
      contactEmail: "contacto@multitokenworld.com",
      socialMedia: {
        twitter: { label: "Twitter/X", url: "https://twitter.com/TuUsuarioDeTwitter" }, // Placeholder
        facebook: { label: "Facebook", url: "https://facebook.com/TuPaginaDeFacebook" }, // Placeholder
        instagram: { label: "Instagram", url: "https://instagram.com/TuUsuarioDeInstagram" }, // Placeholder
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
        { text: "Explore Contracts", href: "#explorer" },
        { text: "Generate Token", href: "#generator" },
        { text: "Crypto Glossary", href: "#glossary" },
        { text: "Education & Resources", href: "#education" },
        { text: "Live Prices", href: "#live-prices" },
        { text: "Plans & Pricing", href: "#pricing" },
        { text: "Voluntary Contributions", href: "#contribute" },
        { text: "Advertising", href: "#advertising" },
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
          buttonLink: "#generator"
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
          buttonLink: "#contact" // Or link to your payment gateway
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
          buttonLink: "#contact" // Or link to your payment gateway
        }
      ],
      contributeTitle: "Voluntary Contributions",
      contributeSubtitle: "Your support helps maintain and improve MultitokenWorld. Please consider making a voluntary contribution.",
      contributeText: "You can support our work by sending a contribution to the following Ethereum wallet address. Every contribution, big or small, is greatly appreciated!",
      contributeAddress: "0xExampleOfYourEthereumWalletAddressHere", // CHANGE!
      contributeSuggested: "Suggested Amounts: 0.01 ETH, 0.05 ETH, 0.1 ETH (or any amount you wish)",
      testimonialsTitle: "What our users say",
      testimonials: [
        { quote: "MultitokenWorld is a fantastic tool. It helped me understand contracts that previously seemed impossible. Highly recommended!", name: "Ana P., Crypto Enthusiast", stars: 5 },
        { quote: "I was able to create my own ERC-20 token in minutes without writing a single line of code. The education is invaluable.", name: "Carlos G., Novice Developer", stars: 5 },
        { quote: "Live prices are very useful, and the glossary is my favorite resource. It's a very complete platform.", name: "Sofia M., Investor", stars: 4 },
      ],
      roadmap: "Roadmap 2025",
      steps: [
        "✅ Bitcoin History - Ready",
        "✅ Contract Explorer - Active",
        "✅ Crypto Glossary - Implemented",
        "🔜 Contract Verification - In development",
        "🔜 Crypto Ads - In design",
        "🔜 Interactive Dashboard with TradingView - Planned",
        "🔜 Educational Wiki and FAQ - Coming soon"
      ],
      contactTitle: "Contact & Advertising",
      contactText: "If you have questions, suggestions, or are interested in advertising opportunities on MultitokenWorld for your crypto or Web3 project, please contact us:",
      contactEmail: "contacto@multitokenworld.com",
      socialMedia: {
        twitter: { label: "Twitter/X", url: "https://twitter.com/YourTwitterHandle" },
        facebook: { label: "Facebook", url: "https://facebook.com/YourFacebookPage" },
        instagram: { label: "Instagram", url: "https://instagram.com/YourInstagramHandle" },
      },
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      footer: "© 2025 MultitokenWorld — Freedom, transparency and technology. Officially registered under .COM with CIRA. "
    }
  };

  const t = content[lang]; // Contenido para el idioma actual

  // --- COMPONENTE INTEGRADO: ContractExplorer ---
  const ContractExplorer = () => {
    const componentT = {
      es: {
        title: "Explorador de Contratos Blockchain",
        placeholder: "Introduce la dirección del contrato o el hash de la transacción...",
        button: "Explorar",
        disclaimer: "Esta herramienta es para fines educativos y de visualización técnica. No ofrecemos asesoramiento financiero o de inversión. Los datos provienen directamente de la blockchain y pueden requerir interpretación técnica.",
      },
      en: {
        title: "Blockchain Contract Explorer",
        placeholder: "Enter contract address or transaction hash...",
        button: "Explore",
        disclaimer: "This tool is for educational and technical visualization purposes. We do not provide financial or investment advice. Data comes directly from the blockchain and may require technical interpretation.",
      },
    };
    const currentLangContent = componentT[lang];

    const [input, setInput] = useState("");
    const [contractData, setContractData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleExplore = async () => {
      setLoading(true);
      setError(null);
      setContractData(null);
      try {
        // --- Lógica para interactuar con la blockchain (EJ: ethers.js) ---
        // Aquí es donde usarías ethers.js o web3.js para obtener datos del contrato
        // const provider = new ethers.JsonRpcProvider("TU_RPC_URL_AQUI_EJ_INFURA_ALCHIMY");
        // const bytecode = await provider.getCode(input);
        // setContractData({ bytecode, /* ... más datos */ });

        console.log(`Explorando: ${input}`); // Placeholder de simulación
        setContractData({ message: currentLangContent.placeholder + " (funcionalidad en desarrollo)" }); // Simulación
        // --- FIN Lógica para interactuar con la blockchain ---

      } catch (e) {
        console.error("Error exploring contract:", e);
        setError(lang === "es" ? "Error al explorar el contrato. Asegúrate de que la dirección sea válida." : "Error exploring contract. Please ensure the address is valid.");
      } finally {
        setLoading(false);
      }
    };

    return (
      <section id="explorer" className="py-20 bg-[#111827] px-6 rounded-xl shadow-lg my-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-green-300">{currentLangContent.title}</h2>
        <div className="max-w-3xl mx-auto p-6 bg-[#0f172a] rounded-lg">
          <input
            type="text"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={currentLangContent.placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleExplore}
            disabled={loading || !input}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed btn-blue"
          >
            {loading ? (lang === "es" ? "Cargando..." : "Loading...") : currentLangContent.button}
          </button>
          {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
          {contractData && (
            <div className="mt-6 p-4 bg-gray-700 rounded text-sm">
              <h3 className="font-semibold text-blue-300 mb-2">{lang === "es" ? "Resultados:" : "Results:"}</h3>
              <pre className="whitespace-pre-wrap break-words text-gray-200">{JSON.stringify(contractData, null, 2)}</pre>
            </div>
          )}
          <p className="mt-8 text-sm text-gray-400 text-center italic">{currentLangContent.disclaimer}</p>
        </div>
      </section>
    );
  };

  // --- COMPONENTE INTEGRADO: TokenGenerator ---
  const TokenGenerator = () => {
    const componentT = {
      es: {
        title: "Generador de Tokens ERC-20",
        nameLabel: "Nombre del Token",
        symbolLabel: "Símbolo del Token (ej. MTW)",
        supplyLabel: "Suministro Total",
        decimalsLabel: "Decimales (ej. 18)",
        button: "Generar Token",
        disclaimer: "Esta herramienta es para fines educativos y de experimentación técnica sobre la creación de tokens ERC-20. Los tokens generados no tienen valor intrínseco, no son inversiones ofrecidas por MultitokenWorld, y MultitokenWorld no es un exchange ni un intermediario financiero. Eres el único responsable del uso y las implicaciones de cualquier token que crees.",
        success: "Token generado con éxito (funcionalidad en desarrollo). ID de Transacción: ",
        error: "Error al generar el token. Asegúrate de tener una billetera conectada y fondos suficientes para el gas.",
        connectWallet: "Conectar Billetera para Generar",
      },
      en: {
        title: "ERC-20 Token Generator",
        nameLabel: "Token Name",
        symbolLabel: "Token Symbol (e.g., MTW)",
        supplyLabel: "Total Supply",
        decimalsLabel: "Decimals (e.g., 18)",
        button: "Generate Token",
        disclaimer: "This tool is for educational and technical experimentation purposes related to ERC-20 token creation. Tokens generated have no inherent value, are not investments offered by MultitokenWorld, and MultitokenWorld is not an exchange or financial intermediary. You are solely responsible for the use and implications of any token you create.",
        success: "Token successfully generated (functionality in development). Transaction ID: ",
        error: "Error generating token. Ensure you have a wallet connected and sufficient funds for gas.",
        connectWallet: "Connect Wallet to Generate",
      },
    };
    const currentLangContent = componentT[lang];

    const [tokenName, setTokenName] = useState("");
    const [tokenSymbol, setTokenSymbol] = useState("");
    const [totalSupply, setTotalSupply] = useState("");
    const [decimals, setDecimals] = useState("18");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [walletConnected, setWalletConnected] = useState(false); // Simulación de conexión de billetera

    const handleConnectWallet = async () => {
      // Aquí iría la lógica para conectar la billetera (ej. usando wagmi/rainbowkit o ethers.js BrowserProvider)
      // if (window.ethereum) {
      //   try {
      //     const provider = new ethers.BrowserProvider(window.ethereum);
      //     await provider.send("eth_requestAccounts", []);
      //     setWalletConnected(true);
      //     setMessage(lang === "es" ? "Billetera conectada." : "Wallet connected.");
      //   } catch (e) {
      //     console.error("Error connecting wallet:", e);
      //     setError(lang === "es" ? "Error al conectar la billetera. Asegúrate de que MetaMask esté instalado." : "Error connecting wallet. Ensure MetaMask is installed.");
      //   }
      // } else {
      //   setError(lang === "es" ? "No se detectó una billetera Ethereum (ej. MetaMask)." : "No Ethereum wallet (e.g., MetaMask) detected.");
      // }

      console.log("Conectando billetera...");
      setWalletConnected(true); // Simulación
      setMessage(lang === "es" ? "Billetera conectada." : "Wallet connected.");
    };

    const handleGenerateToken = async () => {
      if (!walletConnected) {
        setError(lang === "es" ? "Por favor, conecta tu billetera primero." : "Please connect your wallet first.");
        return;
      }
      setLoading(true);
      setMessage("");
      setError("");
      try {
        // --- Lógica para desplegar el contrato ERC-20 (EJ: ethers.js) ---
        // Necesitarás:
        // 1. Un contrato ERC-20 compilado (ABI y Bytecode) - Puedes usar OpenZeppelin
        // 2. Un provider de ethers.js conectado a una red (ej. Sepolia para pruebas)
        // 3. Un signer (tu billetera conectada)
        // 4. Lógica para desplegar el contrato con los parámetros del formulario

        // Ejemplo (pseudocódigo, requiere el contrato y setup real):
        /*
        const provider = new ethers.BrowserProvider(window.ethereum); // Para MetaMask
        const signer = await provider.getSigner();
        // ABI de un contrato ERC-20 simple (ejemplo, tendrías tu propio ABI)
        const ERC20_ABI = [
            "constructor(string memory name, string memory symbol, uint256 initialSupply, uint8 decimals)",
            "function name() view returns (string)",
            "function symbol() view returns (string)",
            "function totalSupply() view returns (uint256)",
            "function decimals() view returns (uint8)",
            "function balanceOf(address account) view returns (uint256)",
            "function transfer(address recipient, uint256 amount) returns (bool)",
            "event Transfer(address indexed from, address indexed to, uint256 value)"
        ];
        // Bytecode de un contrato ERC-20 compilado (esto sería muy largo en realidad)
        const ERC20_BYTECODE = "0x..."; // Tu bytecode aquí
        const factory = new ethers.ContractFactory(ERC20_ABI, ERC20_BYTECODE, signer);
        const contract = await factory.deploy(tokenName, tokenSymbol, ethers.parseUnits(totalSupply, decimals));
        await contract.waitForDeployment();
        setMessage(currentLangContent.success + contract.deploymentTransaction().hash);
        */

        // Simulación de despliegue
        const txHash = `0x${Math.random().toString(16).slice(2, 12)}...`;
        setMessage(currentLangContent.success + txHash);

        // --- FIN Lógica para desplegar el contrato ERC-20 ---

      } catch (e) {
        console.error("Error generating token:", e);
        setError(currentLangContent.error);
      } finally {
        setLoading(false);
      }
    };

    return (
      <section id="generator" className="py-20 bg-[#111827] px-6 rounded-xl shadow-lg my-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-green-300">{currentLangContent.title}</h2>
        <div className="max-w-2xl mx-auto p-8 bg-[#0f172a] rounded-lg">
          {!walletConnected ? (
            <button
              onClick={handleConnectWallet}
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-4 rounded shadow btn-purple"
            >
              {currentLangContent.connectWallet}
            </button>
          ) : (
            <div className="space-y-4">
              <div>
                <label htmlFor="tokenName" className="block text-blue-300 text-sm font-bold mb-2">{currentLangContent.nameLabel}:</label>
                <input
                  type="text"
                  id="tokenName"
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={tokenName}
                  onChange={(e) => setTokenName(e.target.value)}
                  placeholder="Mi Token World"
                />
              </div>
              <div>
                <label htmlFor="tokenSymbol" className="block text-blue-300 text-sm font-bold mb-2">{currentLangContent.symbolLabel}:</label>
                <input
                  type="text"
                  id="tokenSymbol"
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={tokenSymbol}
                  onChange={(e) => setTokenSymbol(e.target.value)}
                  placeholder="MTW"
                />
              </div>
              <div>
                <label htmlFor="totalSupply" className="block text-blue-300 text-sm font-bold mb-2">{currentLangContent.supplyLabel}:</label>
                <input
                  type="number"
                  id="totalSupply"
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={totalSupply}
                  onChange={(e) => setTotalSupply(e.target.value)}
                  placeholder="1000000"
                />
              </div>
              <div>
                <label htmlFor="decimals" className="block text-blue-300 text-sm font-bold mb-2">{currentLangContent.decimalsLabel}:</label>
                <input
                  type="number"
                  id="decimals"
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={decimals}
                  onChange={(e) => setDecimals(e.target.value)}
                  placeholder="18"
                />
              </div>
              <button
                onClick={handleGenerateToken}
                disabled={loading || !tokenName || !tokenSymbol || !totalSupply || !decimals}
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed btn-green"
              >
                {loading ? (lang === "es" ? "Generando..." : "Generating...") : currentLangContent.button}
              </button>
              {message && <p className="text-blue-300 mt-4 text-center">{message}</p>}
              {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
            </div>
          )}
          <p className="mt-8 text-sm text-gray-400 text-center italic">{currentLangContent.disclaimer}</p>
        </div>
      </section>
    );
  };

  // --- COMPONENTE INTEGRADO: CryptoPrices ---
  const CryptoPrices = () => {
    const [prices, setPrices] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const cryptos = [
        "bitcoin",
        "ethereum",
        "solana",
        "cardano",
        "dogecoin",
    ];

    useEffect(() => {
        const fetchPrices = async () => {
            setLoading(true);
            setError(null);
            try {
                const ids = cryptos.join(",");
                const currency = "usd";
                // Usar fetch API directamente, si no quieres axios
                const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${currency}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPrices(data);

            } catch (e) {
                console.error("Error fetching crypto prices:", e);
                setError(lang === "es" ? "Error al cargar los precios. Inténtalo de nuevo más tarde." : "Error loading prices. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchPrices();
        const intervalId = setInterval(fetchPrices, 60000); // Actualizar cada 60 segundos

        return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar
    }, [lang]); // Dependencia 'lang' para recargar si cambia el idioma

    const componentT = {
        es: {
            title: "Precios de Criptomonedas en Vivo",
            loading: "Cargando precios...",
            disclaimer: "Los precios mostrados son solo para fines informativos y educativos. Pueden no reflejar el valor de mercado exacto debido a la latencia de la API y no constituyen asesoramiento de inversión.",
        },
        en: {
            title: "Live Cryptocurrency Prices",
            loading: "Loading prices...",
            disclaimer: "Prices shown are for informational and educational purposes only. They may not reflect exact real-time market value due to API latency and do not constitute investment advice.",
        },
    };

    const currentLangContent = componentT[lang];

    return (
        <section id="live-prices" className="py-16 border-t border-gray-700 bg-[#111827] px-6 rounded-xl shadow-lg my-10">
            <h2 className="text-3xl font-semibold mb-10 text-center text-green-300">{currentLangContent.title}</h2>
            <div className="max-w-4xl mx-auto bg-[#1e293b] p-8 rounded-xl shadow-lg">
                {loading && <p className="text-center text-blue-300">{currentLangContent.loading}</p>}
                {error && <p className="text-center text-red-400">{error}</p>}
                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.keys(prices).map((cryptoId) => (
                            <div key={cryptoId} className="bg-[#0f172a] p-5 rounded-lg flex items-center justify-between shadow">
                                <span className="text-lg font-medium capitalize text-blue-300">{cryptoId}</span>
                                <span className="text-xl font-bold text-green-400">
                                    ${prices[cryptoId].usd.toFixed(2)} USD
                                </span>
                            </div>
                        ))}
                    </div>
                )}
                <p className="mt-8 text-sm text-gray-400 text-center italic">
                    {currentLangContent.disclaimer}
                </p>
            </div>
        </section>
    );
  };

  // --- COMPONENTE INTEGRADO: CryptoEducation ---
  const CryptoEducation = () => {
    const componentT = {
        es: {
            title: "Educación Web3 y Recursos",
            intro: "Aprende los fundamentos del mundo descentralizado. Aquí encontrarás guías sobre cómo funciona Web3, las billeteras digitales y por qué son importantes.",
            walletsTitle: "Billeteras Cripto Recomendadas",
            walletsIntro: "Para interactuar con la blockchain y gestionar tus activos, necesitarás una billetera digital. Estas son algunas de las opciones más populares y seguras para empezar:",
            wallets: [
                {
                    name: "MetaMask",
                    description: "Una billetera de navegador fácil de usar para Ethereum y redes compatibles. Esencial para interactuar con DApps.",
                    link: "https://metamask.io/", // Considera añadir enlace de afiliado aquí con divulgación
                    linkText: "Descargar MetaMask",
                },
                {
                    name: "Trust Wallet",
                    description: "Una billetera móvil segura y multi-cadena, ideal para gestionar una amplia variedad de criptomonedas y NFTs.",
                    link: "https://trustwallet.com/", // Considera añadir enlace de afiliado aquí con divulgación
                    linkText: "Descargar Trust Wallet",
                },
            ],
            exchangeTitle: "Plataformas para Comprar/Vender Criptos (Recursos Externos)",
            exchangeIntro: "MultitokenWorld es una plataforma educativa. Si deseas adquirir criptomonedas (como ETH para gas) o intercambiar activos, necesitarás una plataforma de terceros. **Recuerda:** Investiga a fondo antes de usar cualquier servicio y comprende los riesgos.",
            exchanges: [
                {
                    name: "Wchange", // Reemplaza con el nombre real de tu afiliado si es diferente
                    description: "Una plataforma donde puedes comprar, vender e intercambiar criptomonedas. (Ejemplo: Asegúrate de leer sus términos y condiciones).",
                    link: "https://wchange.com", // Reemplaza con el enlace de afiliado real si aplica
                    linkText: "Ir a Wchange",
                },
                // Añade más exchanges si lo deseas
            ],
            disclaimerWallets: "MultitokenWorld recomienda estas billeteras con fines educativos y de facilidad de uso. No custodiamos tus fondos y no somos responsables de la seguridad de tus billeteras personales. Siempre protege tu frase semilla.",
            disclaimerExchanges: "MultitokenWorld NO es un exchange, ni un asesor financiero, ni un intermediario de valores. Los enlaces a plataformas de terceros son solo para fines informativos y de referencia. Cualquier transacción o interacción en plataformas externas es bajo tu propia responsabilidad y riesgo. El mercado de criptoactivos es altamente volátil y conlleva riesgo de pérdida de capital.",
            affiliateDisclosure: "Divulgación de Afiliados: Algunos enlaces en esta sección pueden ser enlaces de afiliados, lo que significa que podríamos ganar una pequeña comisión si realizas una acción (como una descarga o registro) a través de ellos, sin costo adicional para ti. Esto nos ayuda a mantener MultitokenWorld operativo.",
        },
        en: {
            title: "Web3 Education & Resources",
            intro: "Learn the fundamentals of the decentralized world. Here you'll find guides on how Web3 works, digital wallets, and why they are important.",
            walletsTitle: "Recommended Crypto Wallets",
            walletsIntro: "To interact with the blockchain and manage your assets, you'll need a digital wallet. These are some of the most popular and secure options to get started:",
            wallets: [
                {
                    name: "MetaMask",
                    description: "An easy-to-use browser wallet for Ethereum and compatible networks. Essential for interacting with DApps.",
                    link: "https://metamask.io/",
                    linkText: "Download MetaMask",
                },
                {
                    name: "Trust Wallet",
                    description: "A secure, multi-chain mobile wallet, ideal for managing a wide variety of cryptocurrencies and NFTs.",
                    link: "https://trustwallet.com/",
                    linkText: "Download Trust Wallet",
                },
            ],
            exchangeTitle: "Platforms to Buy/Sell Cryptos (External Resources)",
            exchangeIntro: "MultitokenWorld is an educational platform. If you wish to acquire cryptocurrencies (like ETH for gas) or exchange assets, you will need a third-party platform. **Remember:** Research thoroughly before using any service and understand the risks.",
            exchanges: [
                {
                    name: "Wchange",
                    description: "A platform where you can buy, sell, and exchange cryptocurrencies. (Example: Be sure to read their terms and conditions).",
                    link: "https://wchange.com",
                    linkText: "Go to Wchange",
                },
            ],
            disclaimerWallets: "MultitokenWorld recommends these wallets for educational purposes and ease of use. We do not custody your funds and are not responsible for the security of your personal wallets. Always protect your seed phrase.",
            disclaimerExchanges: "MultitokenWorld is NOT an exchange, financial advisor, or securities intermediary. Links to third-party platforms are for informational and reference purposes only. Any transactions or interactions on external platforms are at your own risk and responsibility. The crypto asset market is highly volatile and carries the risk of capital loss.",
            affiliateDisclosure: "Affiliate Disclosure: Some links in this section may be affiliate links, meaning we might earn a small commission if you take an action (such as a download or signup) through them, at no additional cost to you. This helps us keep MultitokenWorld running.",
        },
    };
    const currentLangContent = componentT[lang];

    return (
      <section id="education" className="py-20 bg-[#111827] px-6 rounded-xl shadow-lg my-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-green-300">{currentLangContent.title}</h2>
        <div className="max-w-5xl mx-auto bg-[#0f172a] p-8 rounded-lg space-y-12">

          <p className="text-lg text-gray-300 text-center mb-10">{currentLangContent.intro}</p>

          {/* Sección de Billeteras */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-300 text-center">{currentLangContent.walletsTitle}</h3>
            <p className="text-md text-gray-400 text-center mb-8">{currentLangContent.walletsIntro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentLangContent.wallets.map((wallet, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-green-400 mb-2">{wallet.name}</h4>
                  <p className="text-gray-300 mb-4">{wallet.description}</p>
                  <a href={wallet.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded btn-blue">
                    {wallet.linkText}
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-400 text-center italic">{currentLangContent.disclaimerWallets}</p>
          </div>

          {/* Sección de Exchanges */}
          <div className="border-t border-gray-700 pt-10">
            <h3 className="text-2xl font-semibold mb-6 text-blue-300 text-center">{currentLangContent.exchangeTitle}</h3>
            <p className="text-md text-gray-400 text-center mb-8">{currentLangContent.exchangeIntro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentLangContent.exchanges.map((exchange, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-green-400 mb-2">{exchange.name}</h4>
                  <p className="text-gray-300 mb-4">{exchange.description}</p>
                  <a href={exchange.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded btn-green">
                    {exchange.linkText}
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-red-400 text-center italic font-bold">{currentLangContent.disclaimerExchanges}</p>
            <p className="mt-4 text-xs text-gray-500 text-center italic">{currentLangContent.affiliateDisclosure}</p>
          </div>
        </div>
      </section>
    );
  };

  // --- COMPONENTE: Advertising (Publicidad) ---
  const Advertising = () => {
    const componentT = {
      es: {
        title: "Publicidad en MultitokenWorld",
        intro: "¿Tienes un proyecto cripto o Web3 que quieres destacar? MultitokenWorld te ofrece una plataforma vibrante para conectar con nuestra creciente comunidad de entusiastas y constructores del ecosistema descentralizado.",
        benefitsTitle: "Beneficios de la Publicidad con Nosotros",
        benefits: [
          "Acceso directo a una audiencia niche interesada en blockchain, DeFi, NFTs y Web3.",
          "Opciones de banners en ubicaciones estratégicas de la plataforma.",
          "Artículos patrocinados y menciones en nuestro contenido educativo.",
          "Promoción en nuestras redes sociales y boletines informativos (opcional).",
          "Análisis de rendimiento de la campaña (disponible en planes premium)."
        ],
        contactPrompt: "Interesado en una colaboración o necesitas más información sobre nuestros paquetes de publicidad? Contáctanos directamente:",
        email: "contacto@multitokenworld.com",
        callToAction: "¡Impulsa tu proyecto cripto hoy!",
        disclaimer: "MultitokenWorld se reserva el derecho de revisar y aprobar todos los anuncios para asegurar que se alineen con nuestros valores de transparencia y seguridad. No garantizamos el éxito de las campañas de publicidad ni actuamos como asesores de inversión para los proyectos anunciados.",
      },
      en: {
        title: "Advertising on MultitokenWorld",
        intro: "Do you have a crypto or Web3 project you want to highlight? MultitokenWorld offers you a vibrant platform to connect with our growing community of decentralized ecosystem enthusiasts and builders.",
        benefitsTitle: "Benefits of Advertising with Us",
        benefits: [
          "Direct access to a niche audience interested in blockchain, DeFi, NFTs, and Web3.",
          "Banner options in strategic locations on the platform.",
          "Sponsored articles and mentions in our educational content.",
          "Promotion on our social media and newsletters (optional).",
          "Campaign performance analysis (available with premium plans)."
        ],
        contactPrompt: "Interested in a collaboration or need more information about our advertising packages? Contact us directly:",
        email: "contacto@multitokenworld.com",
        callToAction: "Boost your crypto project today!",
        disclaimer: "MultitokenWorld reserves the right to review and approve all advertisements to ensure they align with our values of transparency and security. We do not guarantee the success of advertising campaigns nor do we act as investment advisors for advertised projects.",
      },
    };
    const currentLangContent = componentT[lang];

    return (
      <section id="advertising" className="py-20 bg-[#111827] px-6 rounded-xl shadow-lg my-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-green-300">{currentLangContent.title}</h2>
        <div className="max-w-4xl mx-auto bg-[#0f172a] p-8 rounded-lg space-y-8">
          <p className="text-lg text-gray-300 text-center">{currentLangContent.intro}</p>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">{currentLangContent.benefitsTitle}</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              {currentLangContent.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-300 mb-4">{currentLangContent.contactPrompt}</p>
            <a href={`mailto:${currentLangContent.email}`} className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg text-xl shadow-md btn-blue">
              {currentLangContent.email}
            </a>
            <p className="mt-6 text-xl font-bold text-green-400">{currentLangContent.callToAction}</p>
          </div>
          <p className="mt-8 text-sm text-gray-400 text-center italic">{currentLangContent.disclaimer}</p>
        </div>
      </section>
    );
  };


  // Función para renderizar estrellas de testimonio (AJUSTADA PARA EL TAMAÑO)
  const renderStars = (numStars) => {
    return (
      <div className="flex justify-center mt-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            // Clases de Tailwind para asegurar el tamaño correcto (w-5 h-5 son 20x20px)
            className={`w-5 h-5 ${i < numStars ? 'text-yellow-400' : 'text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.543 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.788.565-1.843-.198-1.543-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.92 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };


  return (
    <>
      <Head>
        <title>{t.headline}</title>
        <meta name="description" content={t.subtitle} />
        <link rel="icon" href="/favicon.ico" />
        {/* Fuente Inter de Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Selector de Idioma */}
      <div className="absolute top-4 right-4 z-50">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>

      <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#0f172a] text-white">
        {/* Sección de Héroe */}
        <section className="text-center py-20 px-4 max-w-4xl">
          <p className="text-sm italic text-gray-400 mb-4 font-mono">{t.quote}</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-green-400 mb-4 leading-tight">
            {t.headline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {t.buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 btn-gradient"
              >
                {button.text}
              </a>
            ))}
          </div>
        </section>

        {/* Sección de Características */}
        <section className="w-full max-w-6xl py-20 px-6 bg-[#1e293b] rounded-xl shadow-2xl my-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-green-300">
            {t.featuresTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0f172a] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-blue-300 mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Renderizado de Componentes Integrados */}
        <ContractExplorer />
        <TokenGenerator />
        <CryptoPrices />
        <CryptoEducation />
        <Advertising /> {/* Incluye el componente de Publicidad */}


        {/* Sección de Precios y Planes */}
        <section id="pricing" className="w-full max-w-6xl py-20 px-6 bg-[#1e293b] rounded-xl shadow-2xl my-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-green-300">
                {t.pricingTitle}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                {t.pricingSubtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {t.pricingPlans.map((plan, index) => (
                    <div key={index} className="bg-[#0f172a] p-8 rounded-lg shadow-lg flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
                        <div>
                            <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">{plan.name}</h3>
                            <p className="text-5xl font-extrabold text-green-400 text-center mb-6">
                                {plan.price}
                                <span className="text-lg text-gray-400 font-normal">{plan.frequency}</span>
                            </p>
                            <ul className="space-y-3 text-gray-300 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a
                            href={plan.buttonLink}
                            className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 btn-blue mt-auto"
                        >
                            {plan.buttonText}
                        </a>
                    </div>
                ))}
            </div>
        </section>

        {/* Sección de Aportes Voluntarios */}
        <section id="contribute" className="w-full max-w-4xl py-20 px-6 bg-[#111827] rounded-xl shadow-lg my-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-300">{t.contributeTitle}</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">{t.contributeSubtitle}</p>
          <p className="text-gray-400 mb-6">{t.contributeText}</p>
          <div className="bg-[#0f172a] p-6 rounded-lg inline-block shadow-md">
            <code className="text-xl md:text-2xl font-mono text-yellow-300 select-all break-all">{t.contributeAddress}</code>
            <button
                // Importante: alert() y window.alert() no funcionan en el entorno de Canvas.
                // Si quieres mostrar un mensaje al usuario, usa un modal personalizado.
                // Para este contexto, mantendremos el console.log y una simulación de copia.
                onClick={() => {
                    // Esta es una simulación para entornos donde navigator.clipboard.writeText puede no funcionar
                    // debido a restricciones de iframe o seguridad del navegador sin HTTPS.
                    // Para una implementación robusta, se recomienda una librería como 'react-copy-to-clipboard'
                    // o asegurar un entorno HTTPS para el uso de navigator.clipboard.writeText.
                    const dummyTextArea = document.createElement("textarea");
                    dummyTextArea.value = t.contributeAddress;
                    document.body.appendChild(dummyTextArea);
                    dummyTextArea.select();
                    document.execCommand('copy'); // Método de respaldo para copiar al portapapeles
                    document.body.removeChild(dummyTextArea);
                    console.log(lang === 'es' ? '¡Dirección copiada al portapapeles!' : 'Address copied to clipboard!');
                    // Considera un componente modal para feedback al usuario
                }}
                className="mt-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            >
                {lang === 'es' ? 'Copiar Dirección' : 'Copy Address'}
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4 italic">{t.contributeSuggested}</p>
        </section>

        {/* Sección de Testimonios */}
        <section className="w-full max-w-6xl py-20 px-6 bg-[#1e293b] rounded-xl shadow-2xl my-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-green-300">{t.testimonialsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#0f172a] p-6 rounded-lg shadow-md testimonial-card">
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-blue-300">{testimonial.name}</p>
                {renderStars(testimonial.stars)}
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Roadmap */}
        <section className="w-full max-w-4xl py-20 px-6 bg-[#111827] rounded-xl shadow-lg my-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-green-300">
            {t.roadmap}
          </h2>
          <ul className="text-lg text-gray-300 space-y-4 text-center">
            {t.steps.map((step, index) => (
              <li key={index} className="flex items-center justify-center">
                <span className="text-xl mr-2">{step.startsWith('✅') ? '✅' : '🔜'}</span>
                {step.substring(step.indexOf(' ') + 1)}
              </li>
            ))}
          </ul>
        </section>

        {/* Sección de Contacto */}
        <section id="contact" className="w-full max-w-4xl py-20 px-6 bg-[#1e293b] rounded-xl shadow-2xl my-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-300">{t.contactTitle}</h2>
          <p className="text-lg text-gray-300 mb-8">{t.contactText}</p>
          <a
            href={`mailto:${t.contactEmail}`}
            className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg text-xl shadow-lg transition-all duration-300 transform hover:scale-105 btn-gradient"
          >
            {t.contactEmail}
          </a>
          <div className="mt-8 flex justify-center space-x-6 text-2xl">
            {t.socialMedia.twitter && (
              <a href={t.socialMedia.twitter.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                {/* Puedes usar un ícono de Font Awesome si lo tienes configurado, o un SVG */}
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-6.236-8.754L7.006 21.75H3.69L10.649 13.06 2.56 2.25h8.07L12 10.74 18.244 2.25zM17.29 20.25h2.14L6.596 3.75H4.33L17.29 20.25z"/>
                </svg>
                <span className="sr-only">{t.socialMedia.twitter.label}</span>
              </a>
            )}
            {t.socialMedia.facebook && (
              <a href={t.socialMedia.facebook.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.812c-3.266 0-4.188 1.09-4.188 4v2.5z"/>
                </svg>
                <span className="sr-only">{t.socialMedia.facebook.label}</span>
              </a>
            )}
            {t.socialMedia.instagram && (
              <a href={t.socialMedia.instagram.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                    <path d="M12 2c2.716 0 3.056.01 4.122.06a7.487 7.487 0 012.651.533 4.148 4.148 0 012.32 2.32 7.487 7.487 0 01.533 2.651c.049 1.066.06 1.406.06 4.122v.001c0 2.716-.01 3.056-.06 4.122a7.487 7.487 0 01-.533 2.651 4.148 4.148 0 01-2.32 2.32 7.487 7.487 0 01-2.651.533c-1.066.049-1.406.06-4.122.06h-.001c-2.716 0-3.056-.01-4.122-.06a7.487 7.487 0 01-2.651-.533 4.148 4.148 0 01-2.32-2.32 7.487 7.487 0 01-.533-2.651c-.049-1.066-.06-1.406-.06-4.122v-.001c0-2.716.01-3.056.06-4.122a7.487 7.487 0 01.533-2.651 4.148 4.148 0 012.32-2.32A7.487 7.487 0 017.878 2.06C8.944 2.01 9.284 2 12 2zm0 3.655c-3.11 0-5.636 2.526-5.636 5.636s2.526 5.636 5.636 5.636 5.636-2.526 5.636-5.636S15.11 5.655 12 5.655zm0 1.932c2.04 0 3.704 1.664 3.704 3.704s-1.664 3.704-3.704 3.704-3.704-1.664-3.704-3.704 1.664-3.704 3.704-3.704zm6.401-3.666a1.397 1.397 0 110 2.794 1.397 1.397 0 010-2.794z"/>
                </svg>
                <span className="sr-only">{t.socialMedia.instagram.label}</span>
              </a>
            )}
          </div>
        </section>

      </main>

      <footer className="w-full py-10 px-6 bg-[#0f172a] text-gray-400 text-center text-sm border-t border-gray-700">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a href="#" className="hover:underline">{t.privacyPolicy}</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:underline">{t.termsOfService}</a>
        </div>
        <p className="max-w-xl mx-auto">{t.footer}</p>
      </footer>
    </>
  );
}
