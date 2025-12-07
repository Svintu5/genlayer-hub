import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GenLayer Community Hub',
  description: 'Games • Tools • Memes • Guides for GenLayer community',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* GENLAYER HERO */}
      <section className="bg-gradient-to-r from-[#0C0B58] to-[#FF78E2] min-h-screen flex flex-col justify-center p-8 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-[#F0F1E9] bg-clip-text text-transparent drop-shadow-2xl">
          GenLayer Community Hub
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
          🚀 Games • Tools • Memes • Guides
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="/games" className="bg-white text-[#0C0B58] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl">
            Play Games
          </a>
          <span className="text-lg bg-black/30 px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm">
            Fan-made • Not affiliated with GenLayer Labs
          </span>
        </div>
        <p className="text-sm opacity-75">
          Official: <a href="https://genlayer.com" className="underline hover:text-[#F0F1E9]">genlayer.com</a>
        </p>
      </section> 
      
      {/* CARDS */}
      <section className="py-20 px-8 bg-gradient-to-b from-[#0A0A0A] to-[#0C0B58]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Coming Soon</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all group cursor-pointer">
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#FF78E2]">🎮 Arkanoid</h3>
            <p className="text-[#F0F1E9] mb-4">Your Canvas game with GenLayer theme</p>
            <span className="text-sm bg-[#4E11CC]/20 px-4 py-2 rounded-full">Canvas + Web3</span>
          </div>
          <div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all group cursor-pointer">
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#FF78E2]">⚡ Web3 Tools</h3>
            <p className="text-[#F0F1E9] mb-4">Python scripts + testnet faucets</p>
            <span className="text-sm bg-[#4E11CC]/20 px-4 py-2 rounded-full">Web3.py</span>
          </div>
          <div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all group cursor-pointer">
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#FF78E2]">😂 Memes</h3>
            <p className="text-[#F0F1E9] mb-4">GenLayer meme gallery</p>
            <span className="text-sm bg-[#4E11CC]/20 px-4 py-2 rounded-full">IPFS Gallery</span>
          </div>
        </div>
      </section>
    </main>
  )
}
