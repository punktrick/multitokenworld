// Proyecto: MultitokenWorld - Página Principal Actualizada 2025
// Framework: React + Tailwind CSS

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b0e13] to-[#0f172a] text-white font-sans">
      {/* Encabezado */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <img
          src="/nuevo-logo.png"
          alt="MultitokenWorld Logo"
          className="w-40 h-40 mb-6 animate-pulse"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-green-400">
          MultitokenWorld
        </h1>
        <p className="text-md md:text-lg text-blue-300 mt-4 max-w-2xl">
          The Times 03/Jan/2009 - Chancellor on brink of second bailout for banks
        </p>
        <p className="mt-8 text-lg md:text-xl max-w-2xl text-white/80">
          Explora, aprende y construye en el mundo cripto. Contratos, tokens, historia, educación y herramientas para todos.
        </p>
        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <a href="#explorer" className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-xl text-lg font-medium">
            Explorar Contratos
          </a>
          <a href="#generator" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium">
            Generar Token
          </a>
          <a href="#glosario" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl text-lg font-medium">
            Glosario Cripto
          </a>
        </div>
      </section>

      {/* Qué puedes hacer */}
      <section id="features" className="py-20 bg-[#111827] px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-green-300">
          ¿Qué puedes hacer aquí?
        </h2>
        <ul className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          <li>
            <h3 className="text-xl font-semibold text-blue-400">📜 Explorar contratos</h3>
            <p className="text-white/80 mt-2">
              Visualiza contratos en blockchain y su historia. Aprende cómo funcionan y qué hacen.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-blue-400">🔧 Generar tokens</h3>
            <p className="text-white/80 mt-2">
              Crea tu propio token ERC-20 fácilmente sin saber programar. 100% descentralizado.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-blue-400">🎓 Educación Web3</h3>
            <p className="text-white/80 mt-2">
              Aprende desde cero sobre wallets, claves, Bitcoin, Satoshi Nakamoto, y más.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-blue-400">📊 Precios en Vivo</h3>
            <p className="text-white/80 mt-2">
              Visualiza valores actualizados de tokens y criptomonedas, con gráficos y fuentes oficiales.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-blue-400">🧠 Glosario Cripto</h3>
            <p className="text-white/80 mt-2">
              Consulta definiciones clave del ecosistema blockchain y enlaces confiables.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-blue-400">📬 Contacto y Publicidad</h3>
            <p className="text-white/80 mt-2">
              ¿Quieres promocionar tu proyecto? Escríbenos: <a className="underline text-green-400" href="mailto:contacto@multitokenworld.ca">contacto@multitokenworld.ca</a>
            </p>
          </li>
        </ul>
      </section>

      {/* Glosario y Educación */}
      <section id="glosario" className="bg-[#0f172a] py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-green-300 mb-8">
          Glosario Cripto
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div>
            <h4 className="font-semibold text-blue-400">Blockchain</h4>
            <p className="text-white/70">Cadena de bloques descentralizada que registra transacciones de forma segura e inmutable.</p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-400">Wallet</h4>
            <p className="text-white/70">Aplicación o dispositivo para almacenar y firmar con claves privadas de criptomonedas.</p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-400">Token</h4>
            <p className="text-white/70">Activo digital que puede representar utilidad, valor o acceso dentro de un sistema blockchain.</p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-400">Gas</h4>
            <p className="text-white/70">Tarifa requerida para realizar una transacción o contrato inteligente en Ethereum.</p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-[#1e293b] py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-green-300 mb-8">
          Roadmap 2025
        </h2>
        <ul className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 text-white/80">
          <li>✅ Historia Bitcoin - Listo</li>
          <li>✅ Explorador de contratos - Activo</li>
          <li>✅ Glosario cripto - Implementado</li>
          <li>🔜 Verificación de contratos - En desarrollo</li>
          <li>🔜 Publicidad con cripto - En diseño</li>
          <li>🔜 Dashboard interactivo con TradingView - Planeado</li>
          <li>🔜 Wiki educativa y preguntas frecuentes - Próximamente</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-white/60 text-sm">
        &copy; {new Date().getFullYear()} MultitokenWorld — Libertad, transparencia y tecnología. Sitio registrado en .CA con CIRA.
      </footer>
    </main>
  );
}
