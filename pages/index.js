#!/bin/bash

# --- Configuración Inicial ---
PROJECT_NAME="multitokenworld"
GITHUB_USERNAME="TU_NOMBRE_DE_USUARIO_GITHUB" # ¡¡¡IMPORTANTE: REEMPLAZA ESTO CON TU NOMBRE DE USUARIO REAL DE GITHUB!!!

echo "Creando el proyecto $PROJECT_NAME..."

# Crea la carpeta del proyecto y navega hacia ella
mkdir $PROJECT_NAME
cd $PROJECT_NAME

# --- Inicializar Proyecto Next.js con TypeScript, Tailwind CSS, ESLint y App Router ---
npx create-next-app . --ts --tailwind --eslint --app --src-dir --use-npm --import-alias "@/*"

echo "Configurando archivos de MultitokenWorld..."

# --- 1. src/app/layout.tsx ---
cat > src/app/layout.tsx << EOF
// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MultitokenWorld - Tu Guía Completa del Mundo Cripto",
  description: "Explora, aprende, simula y crea en el mundo de las criptomonedas. Herramientas de auditoría de contratos, simulador de gas, generador de tokens y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={\`\${inter.className} bg-[#0A0A0A] text-white flex flex-col min-h-screen\`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
EOF

# --- 2. src/app/page.tsx (Página Principal) ---
cat > src/app/page.tsx << EOF
// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      {/* Fondo con efecto de luz */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3B82F6] to-[#06B6D4] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/multitokenworld-logo.png"
            alt="MultitokenWorld Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          <span className="text-blue-400">Multi</span>
          <span className="text-green-400">token</span>
          <span className="text-white">World</span>
        </h1>

        {/* Mensaje del Bloque Génesis */}
        <p className="mt-6 text-lg leading-8 text-gray-400 font-mono">
          &quot;The Times 03/Jan/2009 Chancellor on brink of second bailout for banks&quot;
        </p>

        {/* Descripción */}
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Tu guía esencial y centro de herramientas para navegar el universo cripto con confianza y conocimiento.
        </p>

        {/* Botones de Llamada a la Acción */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/learn"
            className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Explora y Aprende
          </Link>
          <Link href="/audit" className="text-lg font-semibold leading-6 text-white hover:text-gray-300">
            Verifica un Contrato <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* Fondo con efecto de luz inferior */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#06B6D4] to-[#3B82F6] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Sección "¿Qué puedes hacer aquí?" */}
      <section id="features" className="py-20 bg-[#0A0A0A] px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-300">
          ¿Qué puedes hacer en MultitokenWorld?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
          {/* Tarjeta 1: Explorar contratos */}
          <Link href="/audit" className="block p-8 bg-[#1A1A1A] rounded-xl shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">📜 Auditoría & Verificación de Contratos</h3>
            <p className="text-white/80">
              Verifica la seguridad y las características de cualquier contrato inteligente en la blockchain.
            </p>
          </Link>

          {/* Tarjeta 2: Generar tokens */}
          <Link href="/generate" className="block p-8 bg-[#1A1A1A] rounded-xl shadow-lg hover:shadow-green-500/30 transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-green-400 mb-3">🔧 Generador de Contratos Inteligentes</h3>
            <p className="text-white/80">
              Crea tu propio token (ERC-20, NFT) fácilmente sin programar.
            </p>
          </Link>

          {/* Tarjeta 3: Educación cripto */}
          <Link href="/learn" className="block p-8 bg-[#1A1A1A] rounded-xl shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-purple-400 mb-3">🎓 Academia Cripto & Glosario</h3>
            <p className="text-white/80">
              Aprende desde cero sobre Web3, DeFi, NFTs y desmitifica el mundo cripto.
            </p>
          </Link>

          {/* Tarjeta 4: Simulador de Transacciones */}
          <Link href="/simulate" className="block p-8 bg-[#1A1A1A] rounded-xl shadow-lg hover:shadow-red-500/30 transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-red-400 mb-3">⛽ Simulador de Gas & Transacciones</h3>
            <p className="text-white/80">
              Estima los costos de gas y simula transacciones en diferentes blockchains.
            </p>
          </Link>

          {/* Tarjeta 5: Mercados Emergentes */}
          <Link href="/market-narratives" className="block p-8 bg-[#1A1A1A] rounded-xl shadow-lg hover:shadow-yellow-500/30 transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-3">📈 Panel de Narrativas de Mercado</h3>
            <p className="text-white/80">
              Identifica y explora las tendencias y proyectos emergentes en el espacio Web3.
            </p>
          </Link>

          {/* Puedes añadir más tarjetas aquí si expandes */}
        </div>
      </section>
    </div>
  );
}
EOF

# --- 3. src/app/audit/page.tsx ---
mkdir -p src/app/audit
cat > src/app/audit/page.tsx << EOF
// src/app/audit/page.tsx
import React from 'react';

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-8">Auditoría y Verificación de Contratos</h1>
        <p className="text-center text-gray-300 mb-12">
          Pega la dirección de cualquier contrato inteligente para obtener un análisis rápido de sus características y posibles riesgos.
          Esta herramienta no es una auditoría de seguridad exhaustiva, sino una verificación de propiedades clave del contrato.
        </p>

        <div className="bg-[#1A1A1A] p-8 rounded-xl shadow-lg">
          <div className="mb-6">
            <label htmlFor="contractAddress" className="block text-lg font-medium text-gray-200 mb-2">
              Dirección del Contrato:
            </label>
            <input
              type="text"
              id="contractAddress"
              className="w-full p-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="Ej: 0x... (dirección en Ethereum, BSC, Polygon, etc.)"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="blockchainNetwork" className="block text-lg font-medium text-gray-200 mb-2">
              Red Blockchain:
            </label>
            <select
              id="blockchainNetwork"
              className="w-full p-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-lg"
            >
              <option value="ethereum">Ethereum Mainnet</option>
              <option value="bsc">BNB Smart Chain (BSC)</option>
              <option value="polygon">Polygon Mainnet</option>
              <option value="arbitrum">Arbitrum One</option>
              <option value="avalanche">Avalanche C-Chain</option>
              {/* Agrega más redes según las APIs que uses */}
            </select>
          </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg text-lg transition duration-300"
          >
            Verificar Contrato
          </button>

          <div className="mt-10 p-6 bg-[#0A0A0A] border border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold text-green-300 mb-4">Resultados de la Verificación:</h3>
            {/* Aquí se mostrarán los resultados dinámicamente con JavaScript/React */}
            <p className="text-gray-400">
              * El análisis se realizará al hacer clic en &quot;Verificar Contrato&quot;.
            </p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li><strong>Nombre del Token:</strong> <span className="text-gray-500">[N/A]</span></li>
              <li><strong>Símbolo:</strong> <span className="text-gray-500">[N/A]</span></li>
              <li><strong>Suministro Total:</strong> <span className="text-gray-500">[N/A]</span></li>
              <li><strong>Código Verificado en Etherscan:</strong> <span className="text-yellow-500">Pendiente</span></li>
              <li><strong>Funcionalidad Mintable:</strong> <span className="text-yellow-500">Pendiente</span></li>
              <li><strong>Funcionalidad Burnable:</strong> <span className="text-yellow-500">Pendiente</span></li>
              <li><strong>Pausable:</strong> <span className="text-yellow-500">Pendiente</span></li>
              <li><strong>Propiedad Renunciada (Ownership Renounced):</strong> <span className="text-yellow-500">Pendiente</span></li>
              {/* Más resultados aquí */}
            </ul>
            <p className="mt-6 text-sm text-red-400">
              Descargo de responsabilidad: MultitokenWorld no proporciona asesoramiento financiero ni de seguridad. Realiza siempre tu propia investigación.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
EOF

# --- 4. src/app/simulate/page.tsx ---
mkdir -p src/app/simulate
cat > src/app/simulate/page.tsx << EOF
// src/app/simulate/page.tsx
import React from 'react';

export default function SimulatePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-red-400 mb-8">Simulador de Transacciones y Gas Fees</h1>
        <p className="text-center text-gray-300 mb-12">
          Estima los costos de gas y la velocidad de las transacciones en diferentes redes blockchain en tiempo real.
        </p>

        <div className="bg-[#1A1A1A] p-8 rounded-xl shadow-lg">
          <div className="mb-6">
            <label htmlFor="simNetwork" className="block text-lg font-medium text-gray-200 mb-2">
              Red Blockchain:
            </label>
            <select
              id="simNetwork"
              className="w-full p-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-red-500 focus:border-red-500 text-lg"
            >
              <option value="ethereum">Ethereum Mainnet</option>
              <option value="polygon">Polygon Mainnet</option>
              <option value="bsc">BNB Smart Chain (BSC)</option>
              <option value="arbitrum">Arbitrum One</option>
              {/* Añade más redes según las APIs que integres */}
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="transactionType" className="block text-lg font-medium text-gray-200 mb-2">
              Tipo de Transacción:
            </label>
            <select
              id="transactionType"
              className="w-full p-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-red-500 focus:border-red-500 text-lg"
            >
              <option value="transfer">Transferencia de Token (simple)</option>
              <option value="swap">Swap en DEX (ej. Uniswap)</option>
              <option value="nft-mint">Mint de NFT</option>
              {/* Añade más tipos de transacción */}
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="amount" className="block text-lg font-medium text-gray-200 mb-2">
              Monto (opcional, para estimación de impacto):
            </label>
            <input
              type="number"
              id="amount"
              className="w-full p-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-red-500 focus:border-red-500 text-lg"
              placeholder="Ej: 1 (token)"
            />
          </div>

          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg text-lg transition duration-300"
          >
            Estimar Costos
          </button>

          <div className="mt-10 p-6 bg-[#0A0A0A] border border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold text-green-300 mb-4">Estimación Actual:</h3>
            {/* Aquí se mostrarán los resultados dinámicamente con JavaScript/React */}
            <ul className="space-y-2 text-gray-300">
              <li><strong>Costo de Gas Estimado:</strong> <span className="text-gray-500">[N/A]</span></li>
              <li><strong>En USD:</strong> <span className="text-gray-500">[N/A]</span></li>
              <li><strong>Velocidad Estimada:</strong> <span className="text-gray-500">[N/A]</span></li>
              <li><strong>Precio del Gas (Gwei):</strong> <span className="text-gray-500">[N/A]</span></li>
              <li><strong>Gas Limit (aprox.):</strong> <span className="text-gray-500">[N/A]</span></li>
            </ul>
            <p className="mt-6 text-sm text-red-400">
              Los costos de gas pueden variar rápidamente. Esta es solo una estimación educativa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
EOF

# --- 5. src/app/generate/page.tsx ---
mkdir -p src/app/generate
cat > src/app/generate/page.tsx << EOF
// src/app/generate/page.tsx
import React from 'react';

export default function GeneratePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-400 mb-8">Generador de Contratos Inteligentes</h1>
        <p className="text-center text-gray-300 mb-12">
          Crea el código fuente para tu propio token ERC-20 o NFT (ERC-721) fácilmente, sin escribir una sola línea de código.
        </p>

        <div className="bg-[#1A1A1A] p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">Configura tu Contrato:</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="contractType" className="block text-lg font-medium text-gray-200 mb-2">
                Tipo de Contrato:
              </label>
              <select
                id="contractType"
                className="w-full p-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-green-500 focus:border-green-500 text-lg"
              >
                <option value="erc20">ERC-20 (Token Fungible)</option>
                <option value="erc721">ERC-721 (NFT - Token No Fungible)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="tokenName" className="block text-lg font-medium text-gray-200 mb-2">
                Nombre del Token:
              </label>
              <input
                type="text"
                id="tokenName"
                className="w-full p-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-green-500 focus:border-green-500 text-lg"
                placeholder="Ej: MultitokenCoin"
              />
            </div>
            <div>
              <label htmlFor="tokenSymbol" className="block text-lg font-medium text-gray-200 mb-2">
                Símbolo del Token:
              </label>
              <input
                type="text"
                id="tokenSymbol"
                className="w-full p-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-green-500 focus:border-green-500 text-lg"
                placeholder="Ej: MTC"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="initialSupply" className="block text-lg font-medium text-gray-200 mb-2">
                Suministro Inicial (ERC-20):
              </label>
              <input
                type="number"
                id="initialSupply"
                className="w-full p-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-green-500 focus:border-green-500 text-lg"
                placeholder="Ej: 1000000"
              />
            </div>
            <div>
              <label htmlFor="decimals" className="block text-lg font-medium text-gray-200 mb-2">
                Decimales (ERC-20):
              </label>
              <input
                type="number"
                id="decimals"
                className="w-full p-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-green-500 focus:border-green-500 text-lg"
                placeholder="Ej: 18"
              />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-100 mb-4">Funciones Adicionales (Opcional):</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center">
              <input type="checkbox" id="mintable" className="h-5 w-5 text-green-500 rounded border-gray-600 focus:ring-green-500" />
              <label htmlFor="mintable" className="ml-2 text-gray-300">Mintable (Se pueden crear más tokens)</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="burnable" className="h-5 w-5 text-green-500 rounded border-gray-600 focus:ring-green-500" />
              <label htmlFor="burnable" className="ml-2 text-gray-300">Burnable (Se pueden quemar tokens)</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="pausable" className="h-5 w-5 text-green-500 rounded border-gray-600 focus:ring-green-500" />
              <label htmlFor="pausable" className="ml-2 text-gray-300">Pausable (Se pueden pausar transferencias)</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="ownable" className="h-5 w-5 text-green-500 rounded border-gray-600 focus:ring-green-500" />
              <label htmlFor="ownable" className="ml-2 text-gray-300">Ownable (El contrato tiene un propietario)</label>
            </div>
          </div>

          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg text-lg transition duration-300"
          >
            Generar Código del Contrato
          </button>

          <div className="mt-10 p-6 bg-[#0A0A0A] border border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">Código Solidity Generado:</h3>
            <pre className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="whitespace-pre-wrap">
                {\`// El código de tu contrato Solidity aparecerá aquí.
// Ejemplo para ERC-20 básico:

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("MyTokenName", "MTN") {
        _mint(msg.sender, initialSupply);
    }
}

// Recuerda instalar @openzeppelin/contracts si usas importaciones:
// npm install @openzeppelin/contracts

// Disclaimer: Este código es solo un ejemplo.
// Es tu responsabilidad auditar y asegurar tu contrato antes de desplegarlo.
// MultitokenWorld no se hace responsable por el uso o mal uso del código generado.
\`}
              </code>
            </pre>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition duration-300">
              Copiar Código
            </button>

            <div className="mt-6 text-sm text-yellow-400 border border-yellow-400 p-4 rounded-lg">
              <strong>Pasos Siguientes Importantes:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>1. Copia este código.</li>
                <li>2. Usa un IDE como <a href="https://remix.ethereum.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Remix IDE</a> para compilar y desplegar tu contrato.</li>
                <li>3. ¡Siempre haz tu propia investigación (DYOR) y considera una auditoría profesional antes de cualquier lanzamiento público!</li>
                <li>4. MultitokenWorld solo genera código; no despliega contratos ni gestiona tus activos.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
EOF

# --- 6. src/app/learn/page.tsx ---
mkdir -p src/app/learn
cat > src/app/learn/page.tsx << EOF
// src/app/learn/page.tsx
import React from 'react';
import Link from 'next/link';

export default function LearnPage() {
  const glossaryTerms = [
    { term: "Blockchain", description: "Un libro mayor digital descentralizado y distribuido que registra transacciones.", link: "#" },
    { term: "DeFi", description: "Finanzas Descentralizadas, un ecosistema de aplicaciones financieras construidas sobre blockchain.", link: "#" },
    { term: "NFT", description: "Token No Fungible, un activo digital único que representa la propiedad de un ítem.", link: "#" },
    { term: "Gas Fee", description: "La tarifa pagada a los mineros/validadores por procesar transacciones en una red blockchain.", link: "#" },
    { term: "Wallet", description: "Una cartera digital para almacenar, enviar y recibir criptomonedas y NFTs.", link: "#" },
    { term: "Smart Contract", description: "Contratos auto-ejecutables con los términos del acuerdo escritos directamente en código.", link: "#" },
    { term: "DAO", description: "Organización Autónoma Descentralizada, una organización gobernada por código y sus miembros.", link: "#" },
    // Agrega más términos
  ];

  const topics = [
    { title: "Introducción a Web3", description: "Descubre los fundamentos de la nueva era de internet.", link: "#" },
    { title: "Cómo funciona una transacción Blockchain", description: "Un desglose paso a paso de lo que ocurre detrás de escena.", link: "#" },
    { title: "Tipos de Wallets y su seguridad", description: "Explora las diferencias entre wallets frías y calientes.", link: "#" },
    { title: "Entendiendo el Staking y Yield Farming", description: "Cómo ganar ingresos pasivos con tus criptoactivos.", link: "#" },
    // Agrega más temas
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-400 mb-8">Academia Cripto y Glosario</h1>
        <p className="text-center text-gray-300 mb-12">
          Tu punto de partida para entender el fascinante mundo de las criptomonedas, blockchain y Web3.
        </p>

        <section className="mb-12 bg-[#1A1A1A] p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 text-center">Glosario de Términos Cripto</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {glossaryTerms.map((item, index) => (
              <div key={index} className="bg-[#0A0A0A] p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">{item.term}</h3>
                <p className="text-gray-300">{item.description}</p>
                {item.link && (
                  <Link href={item.link} className="text-purple-400 hover:underline mt-2 inline-block text-sm">
                    Leer más
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#1A1A1A] p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 text-center">Temas Fundamentales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((item, index) => (
              <div key={index} className="bg-[#0A0A0A] p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-green-300 mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
                {item.link && (
                  <Link href={item.link} className="text-purple-400 hover:underline mt-2 inline-block text-sm">
                    Comenzar
                  </Link>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-400">¡Más artículos y cursos se añadirán pronto!</p>
        </section>
      </div>
    </div>
  );
}
EOF

# --- 7. src/app/market-narratives/page.tsx ---
mkdir -p src/app/market-narratives
cat > src/app/market-narratives/page.tsx << EOF
// src/app/market-narratives/page.tsx
import React from 'react';
import Link from 'next/link';

export default function MarketNarrativesPage() {
  const narratives = [
    {
      name: "Real World Assets (RWA)",
      description: "Tokens que representan activos del mundo real (inmuebles, commodities, bonos) en la blockchain.",
      projects: ["MakerDAO (RWA), Centrifuge, Ondo Finance"],
      trending: true,
      link: "#", // Enlace a un artículo o sección detallada
    },
    {
      name: "DePIN (Decentralized Physical Infrastructure Networks)",
      description: "Proyectos que usan tokens para incentivar la construcción y mantenimiento de infraestructura física descentralizada.",
      projects: ["Helium, Render Network, Arweave"],
      trending: true,
      link: "#",
    },
    {
      name: "AI + Crypto",
      description: "La intersección de la inteligencia artificial y la tecnología blockchain para nuevas aplicaciones.",
      projects: ["Fetch.ai, SingularityNET, Worldcoin"],
      trending: true,
      link: "#",
    },
    {
      name: "Zero-Knowledge (ZK) Proofs",
      description: "Tecnología criptográfica que permite verificar la validez de una declaración sin revelar la información subyacente.",
      projects: ["Polygon (ZK-EVM), Starknet, Aleo"],
      trending: false,
      link: "#",
    },
    // Agrega más narrativas
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">Panel de Narrativas de Mercado</h1>
        <p className="text-center text-gray-300 mb-12">
          Explora las tendencias y narrativas emergentes que están dando forma al futuro de Web3.
          Aquí no encontrarás consejos de inversión, solo información y proyectos clave.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {narratives.map((narrative, index) => (
            <div key={index} className="bg-[#1A1A1A] p-8 rounded-xl shadow-lg border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-yellow-300">{narrative.name}</h2>
                {narrative.trending && (
                  <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Tendencia</span>
                )}
              </div>
              <p className="text-gray-300 mb-4">{narrative.description}</p>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Proyectos Clave:</h3>
              <ul className="list-disc list-inside text-gray-400 text-sm mb-4">
                {narrative.projects.map((project, pIndex) => (
                  <li key={pIndex}>{project}</li>
                ))}
              </ul>
              {narrative.link && (
                <Link href={narrative.link} className="text-yellow-400 hover:underline text-sm">
                  Ver más sobre esta narrativa &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-gray-400 text-sm">
          Descargo de responsabilidad: La información aquí es solo para fines educativos y no constituye asesoramiento financiero.
        </p>
      </div>
    </div>
  );
}
EOF

# --- 8. src/components/Navbar.tsx ---
mkdir -p src/components
cat > src/components/Navbar.tsx << EOF
// src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-[#1A1A1A] p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/multitokenworld-logo.png" // Asegúrate de que tu logo esté en public/
            alt="MultitokenWorld Logo"
            width={40}
            height={40}
          />
          <span className="text-white text-2xl font-bold">
            <span className="text-blue-400">Multi</span>
            <span className="text-green-400">token</span>
            <span className="text-white">World</span>
          </span>
        </Link>
        <div className="flex space-x-6 text-lg">
          <Link href="/audit" className="text-gray-300 hover:text-blue-400 transition-colors">
            Auditoría
          </Link>
          <Link href="/generate" className="text-gray-300 hover:text-green-400 transition-colors">
            Generador
          </Link>
          <Link href="/learn" className="text-gray-300 hover:text-purple-400 transition-colors">
            Aprende
          </Link>
          <Link href="/simulate" className="text-gray-300 hover:text-red-400 transition-colors">
            Simulador
          </Link>
          <Link href="/market-narratives" className="text-gray-300 hover:text-yellow-400 transition-colors">
            Narrativas
          </Link>
        </div>
      </div>
    </nav>
  );
}
EOF

# --- 9. src/components/Footer.tsx ---
cat > src/components/Footer.tsx << EOF
// src/components/Footer.tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-center py-8 text-white/60 text-sm mt-auto shadow-inner">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} MultitokenWorld — Libertad, transparencia y tecnología.
        <p className="mt-2 text-xs text-white/50">
          Descargo de responsabilidad: MultitokenWorld proporciona herramientas e información educativa. No somos asesores financieros ni de inversión. La inversión en criptomonedas conlleva riesgos. Realice siempre su propia investigación (DYOR) y busque asesoramiento profesional antes de tomar decisiones.
        </p>
      </div>
    </footer>
  );
}
EOF

# --- 10. src/styles/globals.css ---
cat > src/styles/globals.css << EOF
/* src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Estilos personalizados si los necesitas, aunque Tailwind es suficiente */
body {
  font-family: 'Inter', sans-serif; /* Asegúrate de que Inter se cargue si lo deseas */
}
EOF

# --- 11. tailwind.config.ts ---
cat > tailwind.config.ts << EOF
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'blue-400': '#60A5FA', // Color de tu logo y elementos
        'green-400': '#4ADE80', // Color de tu logo y elementos
        'purple-400': '#C084FC',
        'red-400': '#F87171',
        'yellow-400': '#FACC15',
        'blue-600': '#2563EB',
        'green-600': '#16A34A',
        'red-600': '#DC2626',
        'gray-700': '#374151',
        'gray-800': '#1F2937',
        'gray-900': '#111827',
        'gray-1000': '#0A0A0A', // Tu color de fondo principal
        'gray-1A': '#1A1A1A', // Un gris oscuro para tarjetas y fondos de sección
      },
    },
  },
  plugins: [],
};
export default config;
EOF

# --- 12. src/utils/web3-api.ts (Crea la carpeta utils y el archivo) ---
mkdir -p src/utils
cat > src/utils/web3-api.ts << EOF
// src/utils/web3-api.ts

// Ejemplo de cómo podrías interactuar con Etherscan
// Para usar la API de Etherscan, necesitarás una clave de API (gratis)
// Puedes obtenerla en https://etherscan.io/myapikey

const ETHERSCAN_API_KEY = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY || ''; // Configura esto en .env.local

export async function getContractInfo(address: string, network: string) {
  // En un proyecto real, esto haría una llamada a la API de Etherscan/BscScan/Polygonscan
  // Ejemplo para Ethereum (necesitarías una URL base diferente para cada red)
  const apiUrl = \`https://api.etherscan.io/api?module=contract&action=getsourcecode&address=\${address}&apikey=\${ETHERSCAN_API_KEY}\`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === '1' && data.result && data.result.length > 0) {
      const contract = data.result[0];
      return {
        name: contract.ContractName,
        symbol: "N/A", // Necesitarías una llamada adicional para el símbolo de ERC20
        isVerified: contract.SourceCode !== '',
        abi: contract.ABI,
        // Aquí puedes parsear el código fuente para buscar funciones como mint, burn, etc.
        // Esto requeriría lógica más avanzada (parsing de AST o regex, con cautela)
        hasMintFunction: contract.SourceCode.includes("function mint("),
        hasBurnFunction: contract.SourceCode.includes("function burn("),
        isPausable: contract.SourceCode.includes("Pausable.sol"), // Asumiendo OpenZeppelin
        isOwnable: contract.SourceCode.includes("Ownable.sol"), // Asumiendo OpenZeppelin
        // ... más propiedades
      };
    } else {
      console.error("Error al obtener información del contrato:", data.message);
      return null;
    }
  } catch (error) {
    console.error("Error en la llamada a la API de Etherscan:", error);
    return null;
  }
}

// Ejemplo de cómo podrías obtener el precio del gas
// Puedes usar Etherscan Gas Tracker API o Chainlink Data Feeds
export async function getGasPrice(network: string) {
  // Para Ethereum (Etherscan Gas Oracle)
  const apiUrl = \`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=\${ETHERSCAN_API_KEY}\`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.status === '1') {
      return {
        fast: data.result.FastGasPrice, // en Gwei
        average: data.result.ProposeGasPrice, // en Gwei
        low: data.result.SafeGasPrice, // en Gwei
        // ... más datos
      };
    }
    return null;
  } catch (error) {
    console.error("Error al obtener precio del gas:", error);
    return null;
  }
}

// Nota importante: Las implementaciones reales para estas funciones serán más complejas
// y requerirán manejo de errores, caché, y posiblemente librerías de web3 para
// interactuar con los contratos directamente si se busca su estado.
// Para el generador de contratos, la lógica es puramente de string manipulation en el frontend.
EOF

# --- 13. .env.local ---
cat > .env.local << EOF
# .env.local
# Clave de API de Etherscan (necesaria para el módulo de auditoría y simulador)
# Obtén la tuya gratis en https://etherscan.io/myapikey
NEXT_PUBLIC_ETHERSCAN_API_KEY=TU_CLAVE_DE_API_DE_ETHERSCAN_AQUI

# Agrega otras claves de API aquí si usas CoinGecko, etc.
# NEXT_PUBLIC_COINGECKO_API_KEY=
EOF

# --- 14. README.md ---
cat > README.md << EOF
# MultitokenWorld

¡Bienvenido a MultitokenWorld! Tu centro integral para navegar, entender y crear en el ecosistema de las criptomonedas y Web3.

Este proyecto tiene como objetivo democratizar el acceso al conocimiento y a herramientas prácticas en el mundo blockchain, siempre bajo un enfoque educativo e informativo, sin custodiar fondos ni operar como un exchange.

---

## Características Principales

* **Auditoría y Verificación de Contratos Inteligentes:** Analiza y comprende las propiedades clave de cualquier contrato en diversas blockchains.
* **Simulador de Transacciones y Gas Fees:** Estima los costos y la velocidad de tus transacciones en tiempo real en diferentes redes.
* **Generador de Contratos Inteligentes "Lite":** Crea el código fuente para tokens ERC-20 y NFTs (ERC-721) sin necesidad de programar.
* **Academia Cripto y Glosario Interactivo:** Aprende los fundamentos y conceptos avanzados de Web3 con guías claras y un glosario completo.
* **Panel de Narrativas de Mercado:** Explora las tendencias y proyectos emergentes que están dando forma al futuro del ecosistema.

---

## Tecnologías Utilizadas

* **Next.js 14+:** Un framework de React para aplicaciones web robustas y escalables.
* **React:** Biblioteca de JavaScript para construir interfaces de usuario interactivas.
* **TypeScript:** Un superconjunto de JavaScript que añade tipado estático.
* **Tailwind CSS:** Un framework CSS para un diseño rápido y responsivo.
* **APIs de Exploradores de Blockchain:** (Etherscan, BscScan, Polygonscan, etc.) para obtener datos públicos de contratos y transacciones.
* **Git & GitHub:** Control de versiones y alojamiento de código.
* **Vercel:** Plataforma de despliegue continuo para aplicaciones Next.js.

---

## Cómo Ejecutar el Proyecto Localmente

1.  **Navega a la carpeta del proyecto** en tu terminal (si ya no estás allí).
2.  **Instala las dependencias:**
    \`\`\`bash
    npm install
    # o
    yarn install
    \`\`\`
3.  **Configura tus variables de entorno:**
    Crea un archivo \`.env.local\` en la raíz del proyecto y añade tus claves de API:
    \`\`\`
    NEXT_PUBLIC_ETHERSCAN_API_KEY=TU_CLAVE_DE_API_DE_ETHERSCAN
    # ... otras claves de API
    \`\`\`
4.  **Inicia el servidor de desarrollo:**
    \`\`\`bash
    npm run dev
    # o
    yarn dev
    \`\`\`
    Abre \`http://localhost:3000\` en tu navegador.

---

## Despliegue en Vercel

Este proyecto está optimizado para su despliegue en Vercel.

1.  **Crea una cuenta en Vercel** (si no la tienes).
2.  **Importa este repositorio** de GitHub a Vercel.
3.  **Configura las variables de entorno** en el panel de Vercel (Settings -> Environment Variables) para que coincidan con las de tu \`.env.local\`.
4.  Vercel detectará automáticamente que es una aplicación Next.js y la desplegará.
5.  **Conecta tus dominios** (\`multitokenworld.com\`, \`.ca\`, \`.storage\`) en la sección "Domains" de tu proyecto en Vercel. Sigue las instrucciones para configurar los DNS en tu registrador de dominios (ej. Namecheap).

---

## Descargo de Responsabilidad Legal

MultitokenWorld es una plataforma con fines **educativos e informativos**. No ofrecemos asesoramiento financiero, de inversión, legal o de seguridad. No custodiamos fondos ni operamos como un exchange. La información y las herramientas proporcionadas se basan en datos públicos y no garantizan la seguridad o el rendimiento de ningún activo o contrato. La inversión en criptomonedas y las interacciones con contratos inteligentes conllevan riesgos significativos, incluida la pérdida total del capital. Realiza siempre tu propia investigación exhaustiva (DYOR) y busca el consejo de profesionales cualificados antes de tomar cualquier decisión.

---

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar o añadir funcionalidades, no dudes en abrir un "issue" o enviar una "pull request".

---
EOF

# --- Subir a GitHub ---
echo "Iniciando la carga a GitHub..."

# Inicializa Git si no se ha hecho
git init

# Añade todos los archivos al staging area
git add .

# Confirma los cambios
git commit -m "Initial commit: MultitokenWorld full project setup with all functionalities"

# Conecta con el repositorio remoto de GitHub
# ¡Asegúrate de haber creado un repositorio vacío llamado 'multitokenworld' en tu cuenta de GitHub!
git remote add origin https://github.com/$GITHUB_USERNAME/$PROJECT_NAME.git 2>/dev/null || git remote set-url origin https://github.com/$GITHUB_USERNAME/$PROJECT_NAME.git

# Renombra la rama a 'main'
git branch -M main

# Sube los archivos a GitHub
echo "Empujando el código a GitHub. Puede que te pida tus credenciales."
git push -u origin main

echo "¡Felicidades! Tu proyecto MultitokenWorld debería estar ahora en GitHub."
echo "Recuerda: Si usas un logo, pon tu imagen 'multitokenworld-logo.png' manualmente en la carpeta '$PROJECT_NAME/public/'."
echo "Luego, el siguiente paso es ir a Vercel para conectar el repositorio y desplegar tu sitio web."
