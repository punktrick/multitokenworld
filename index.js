
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b0e13] to-[#0f172a] text-white font-sans">
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <img
          src="/logo.png"
          alt="MultitokenWorld Logo"
          className="w-40 h-40 mb-6 animate-pulse"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-green-400">
          MultitokenWorld
        </h1>
        <p className="text-md md:text-lg text-blue-300 mt-4 max-w-2xl">
          The Times 03/Jan/2009 Chancellor on brink of second bailout for banks
        </p>
        <p className="mt-8 text-lg md:text-xl max-w-2xl text-white/80">
          Explora, aprende y construye en el mundo cripto. Contratos, tokens, historia, educación y herramientas para todos.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#explorer"
            className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-xl text-lg font-medium"
          >
            Explorar Contratos
          </a>
          <a
            href="#generator"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium"
          >
            Generar Token
          </a>
        </div>
      </section>

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
              Crea tu propio token (ERC-20) fácilmente sin saber programar. 100% descentralizado.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-blue-400">🎓 Educación cripto</h3>
            <p className="text-white/80 mt-2">
              Aprende desde cero sobre Web3, wallets, DeFi, NFTs y más.
            </p>
          </li>
        </ul>
      </section>

      <footer className="text-center py-10 text-white/60 text-sm">
        &copy; {new Date().getFullYear()} MultitokenWorld — Libertad, transparencia y tecnología.
      </footer>
    </main>
  );
}
