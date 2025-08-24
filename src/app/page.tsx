"use client";
import Image from "next/image";

// Componente do Dracker que pode usar emoji ou imagem
const DrackerAvatar = ({ size = "8xl", className = "" }) => {
  // Ativando a imagem REAL do Dracker!
  const hasImage = true;
  const imagePath = "/Dracker.png"; // Imagem real do Dracker na pasta public
  
  if (hasImage) {
    return (
      <Image
        src={imagePath}
        alt="Dracker - O dragãozinho marrom da floresta encantada"
        width={size === "8xl" ? 160 : size === "9xl" ? 200 : size === "6xl" ? 80 : 40}
        height={size === "8xl" ? 160 : size === "9xl" ? 200 : size === "6xl" ? 80 : 40}
        className={`object-cover rounded-full ${className}`}
        priority
        quality={95}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    );
  }
  
  // Fallback para emoji
  return <span className={`text-${size} ${className}`}>🐉</span>;
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-amber-50 to-green-100 flex flex-col relative overflow-hidden">
      {/* Elementos decorativos da floresta */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl opacity-20 forest-element">🌲</div>
        <div className="absolute top-32 right-20 text-4xl opacity-15 dracker-sparkle">🍃</div>
        <div className="absolute top-64 left-1/4 text-5xl opacity-10 forest-element">🌳</div>
        <div className="absolute bottom-32 right-10 text-7xl opacity-20 forest-element">🌲</div>
        <div className="absolute bottom-20 left-16 text-3xl opacity-25 dracker-bounce">🍄</div>
        <div className="absolute top-1/2 right-1/4 text-4xl opacity-15 dracker-sparkle">✨</div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-amber-100 to-green-100 shadow-lg p-4 border-b-2 border-amber-200 relative z-10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center shadow-lg border-2 border-amber-600">
              <DrackerAvatar size="2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-amber-800">Dracker</h1>
              <p className="text-xs text-green-700">Dragãozinho da Floresta Encantada</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#matematica" className="text-amber-800 hover:text-green-700 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-green-100">🔢 Matemática</a>
            <a href="#financas" className="text-amber-800 hover:text-green-700 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-green-100">💰 Educação Financeira</a>
            <a href="#professores" className="text-amber-800 hover:text-green-700 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-green-100">👩‍🏫 Para Professores</a>
            <a href="#sobre" className="text-amber-800 hover:text-green-700 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-green-100">🌟 Sobre</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 relative z-10">
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="mb-12">
              {/* Dracker com ambiente da floresta */}
              <div className="relative mb-8">
                <div className="w-40 h-40 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl border-4 border-amber-500 relative dracker-float">
                  <DrackerAvatar size="8xl" />
                  {/* Elementos mágicos ao redor do Dracker */}
                  <div className="absolute -top-2 -right-2 text-2xl dracker-sparkle">✨</div>
                  <div className="absolute -bottom-1 -left-2 text-xl dracker-bounce">🍃</div>
                  <div className="absolute top-1/2 -right-8 text-lg dracker-sparkle">⭐</div>
                </div>
                {/* Base da floresta */}
                <div className="flex justify-center space-x-4 mb-4">
                  <span className="text-3xl">🌲</span>
                  <span className="text-2xl">🍄</span>
                  <span className="text-3xl">🌳</span>
                  <span className="text-2xl">🌿</span>
                  <span className="text-3xl">🌲</span>
                </div>
              </div>
              
              <h2 className="text-6xl font-bold text-amber-900 mb-6 drop-shadow-lg">
                Olá! Eu sou o <span className="text-green-800">Dracker</span>
              </h2>
              <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-amber-200 max-w-4xl mx-auto">
                <p className="text-xl text-amber-800 mb-4 leading-relaxed">
                  🌲 Seu dragãozinho marrom da floresta encantada que vai te ajudar a descobrir os 
                  segredos da matemática e da educação financeira de forma mágica e inclusiva! 🎓✨
                </p>
                <p className="text-green-700 font-medium">
                  "Venha comigo explorar o mundo do conhecimento!" 🐉�
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12" id="matematica">
              {/* Matemática */}
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-blue-200 relative overflow-hidden">
                <div className="absolute top-2 right-2 text-sm opacity-50">🌲</div>
                <div className="text-5xl mb-6 text-center">🔢</div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Matemática Mágica</h3>
                <p className="text-blue-700 mb-6 text-center leading-relaxed">
                  Descubra os segredos dos números com jogos encantados da floresta do Dracker
                </p>
                <button 
                  onClick={() => alert('🌟 Em breve! Os jogos de matemática mágica do Dracker chegam em 2025!')}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all font-medium shadow-lg hover:shadow-xl"
                >
                  🎯 Começar Aventura
                </button>
              </div>

              {/* Educação Financeira */}
              <div className="bg-gradient-to-br from-green-100 to-emerald-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-green-200 relative overflow-hidden" id="financas">
                <div className="absolute top-2 right-2 text-sm opacity-50">🍃</div>
                <div className="text-5xl mb-6 text-center">💰</div>
                <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">Tesouro Financeiro</h3>
                <p className="text-green-700 mb-6 text-center leading-relaxed">
                  Aprenda a guardar e usar suas moedas como um verdadeiro guardião do tesouro
                </p>
                <button 
                  onClick={() => alert('🏆 Em desenvolvimento! Os jogos do tesouro financeiro chegam em breve!')}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all font-medium shadow-lg hover:shadow-xl"
                >
                  💎 Explorar Tesouro
                </button>
              </div>

              {/* Para Professores */}
              <div className="bg-gradient-to-br from-amber-100 to-orange-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-amber-200 relative overflow-hidden" id="professores">
                <div className="absolute top-2 right-2 text-sm opacity-50">🌟</div>
                <div className="text-5xl mb-6 text-center">👩‍🏫</div>
                <h3 className="text-2xl font-bold text-amber-800 mb-4 text-center">Portal dos Sábios</h3>
                <p className="text-amber-700 mb-6 text-center leading-relaxed">
                  Crie atividades mágicas adaptadas para todas as crianças da floresta
                </p>
                <button 
                  onClick={() => alert('🎪 Portal dos Sábios em construção! Dashboard mágico chegando!')}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all font-medium shadow-lg hover:shadow-xl"
                >
                  🔮 Entrar no Portal
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-100 to-pink-100 p-8 rounded-2xl shadow-2xl mb-12 border-2 border-red-200 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-2xl animate-pulse">🎬</div>
              <div className="absolute bottom-4 left-4 text-lg opacity-30">🌲</div>
              <h3 className="text-3xl font-bold text-red-800 mb-6 text-center">🎥 Canal Mágico do YouTube!</h3>
              <p className="text-red-700 mb-8 text-center text-lg leading-relaxed">
                Venha assistir às aventuras do Dracker na floresta encantada! 
                Vídeos educativos, histórias mágicas e muito mais! ✨
              </p>
              <div className="text-center">
                <a 
                  href="https://www.youtube.com/@canaldodracker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-10 py-4 rounded-2xl hover:from-red-600 hover:to-red-700 transition-all font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <span className="mr-3 text-2xl">🎬</span>
                  Canal do Dracker
                  <span className="ml-3 text-2xl">🐉</span>
                </a>
              </div>
            </div>

            {/* Seção Sobre */}
            <div className="bg-gradient-to-br from-amber-50 to-green-50 p-10 rounded-2xl shadow-2xl mb-12 border-2 border-amber-200 relative overflow-hidden" id="sobre">
              <div className="absolute top-4 right-4 text-3xl animate-bounce">🌟</div>
              <div className="absolute bottom-4 left-4 text-2xl opacity-20">🌲</div>
              <div className="absolute top-1/2 left-4 text-xl opacity-15">🍃</div>
              
              <h3 className="text-4xl font-bold text-amber-900 mb-8 text-center">🐉 A História do Dracker</h3>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div className="bg-white bg-opacity-70 p-6 rounded-xl border border-amber-200">
                    <h4 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                      <span className="mr-2">🌲</span> Nossa Missão Mágica
                    </h4>
                    <p className="text-amber-800 leading-relaxed">
                      Na floresta encantada, o dragãozinho Dracker descobriu que o conhecimento é o maior 
                      tesouro de todos! Agora ele compartilha os segredos da matemática e educação financeira 
                      com todas as crianças do mundo.
                    </p>
                  </div>
                  <div className="bg-white bg-opacity-70 p-6 rounded-xl border border-green-200">
                    <h4 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                      <span className="mr-2">✨</span> Inclusão Encantada
                    </h4>
                    <p className="text-amber-800 leading-relaxed">
                      O Dracker acredita que cada criança é especial e única. Por isso, criamos ferramentas 
                      mágicas para que todos os pequenos aventureiros possam aprender juntos, cada um no seu ritmo.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative">
                    <div className="w-64 h-64 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl border-4 border-amber-500 relative">
                      <DrackerAvatar size="9xl" />
                      {/* Elementos mágicos animados */}
                      <div className="absolute -top-4 -left-4 text-3xl animate-pulse">✨</div>
                      <div className="absolute -bottom-2 -right-4 text-2xl animate-bounce">🍃</div>
                      <div className="absolute top-1/4 -right-8 text-xl animate-pulse">⭐</div>
                      <div className="absolute bottom-1/4 -left-8 text-2xl animate-bounce">🌟</div>
                    </div>
                    {/* Base da floresta expandida */}
                    <div className="flex justify-center space-x-2 mb-4">
                      <span className="text-4xl">🌲</span>
                      <span className="text-3xl">🍄</span>
                      <span className="text-4xl">🌳</span>
                      <span className="text-2xl">🌿</span>
                      <span className="text-4xl">🌲</span>
                    </div>
                  </div>
                  <div className="bg-amber-100 bg-opacity-80 p-4 rounded-xl border border-amber-300">
                    <p className="text-2xl font-bold text-amber-900 mb-2">
                      "O aprendizado é uma aventura mágica!"
                    </p>
                    <p className="text-green-700 font-medium">- Dracker, o dragãozinho da floresta 🌲</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Contato */}
        <section className="bg-gradient-to-br from-green-200 via-amber-100 to-green-200 py-20 relative overflow-hidden" id="contato">
          {/* Elementos decorativos */}
          <div className="absolute top-10 left-10 text-4xl opacity-20">🌲</div>
          <div className="absolute top-20 right-20 text-3xl opacity-15">🍃</div>
          <div className="absolute bottom-20 left-20 text-5xl opacity-10">🌳</div>
          <div className="absolute bottom-10 right-10 text-2xl opacity-25">✨</div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="mb-12">
              <h3 className="text-4xl font-bold text-amber-900 mb-4">🌟 Fale com o Dracker</h3>
              <p className="text-amber-800 text-lg">Entre em contato e seja parte da nossa floresta encantada!</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-blue-200">
                <div className="text-5xl mb-6">📧</div>
                <h4 className="font-bold text-blue-800 mb-4 text-xl">Mensagem Mágica</h4>
                <p className="text-blue-700 mb-4">contato@dracker.com.br</p>
                <div className="text-2xl opacity-50">💌</div>
              </div>
              <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-red-200">
                <div className="text-5xl mb-6">🎥</div>
                <h4 className="font-bold text-red-800 mb-4 text-xl">Portal dos Vídeos</h4>
                <a 
                  href="https://www.youtube.com/@canaldodracker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-medium transition-colors"
                >
                  Canal do Dracker
                </a>
                <div className="text-2xl opacity-50 mt-4">🎬</div>
              </div>
              <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-green-200">
                <div className="text-5xl mb-6">🌟</div>
                <h4 className="font-bold text-green-800 mb-4 text-xl">Sugestões Encantadas</h4>
                <button 
                  onClick={() => alert('🧙‍♂️ Obrigado por querer ajudar! Formulário mágico chegando em breve!')}
                  className="text-green-600 hover:text-green-700 font-medium transition-colors"
                >
                  Enviar Ideia Mágica
                </button>
                <div className="text-2xl opacity-50 mt-4">💡</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-900 via-amber-800 to-green-900 text-white py-12 relative overflow-hidden">
        {/* Elementos decorativos do footer */}
        <div className="absolute top-4 left-10 text-2xl opacity-30">🌲</div>
        <div className="absolute top-8 right-10 text-xl opacity-20">✨</div>
        <div className="absolute bottom-4 left-1/4 text-lg opacity-25">🍃</div>
        <div className="absolute bottom-4 right-1/4 text-xl opacity-20">🌟</div>
        
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center shadow-lg border-2 border-amber-400">
              <DrackerAvatar size="2xl" />
            </div>
            <div>
              <span className="text-2xl font-bold text-amber-100">Dracker</span>
              <p className="text-sm text-green-200">Floresta Encantada do Conhecimento</p>
            </div>
          </div>
          <p className="text-amber-200 mb-8 text-lg leading-relaxed">
            🌲 Plataforma educacional mágica para matemática e educação financeira inclusiva 🌟
          </p>
          <div className="flex justify-center space-x-8 mb-6">
            <a 
              href="https://www.youtube.com/@canaldodracker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-300 hover:text-red-200 font-medium flex items-center space-x-2 hover:scale-105 transition-all"
            >
              <span>🎥</span>
              <span>YouTube</span>
            </a>
            <a href="#contato" className="text-amber-200 hover:text-amber-100 font-medium flex items-center space-x-2 hover:scale-105 transition-all">
              <span>📧</span>
              <span>Contato</span>
            </a>
            <button 
              onClick={() => alert('🛡️ Política de privacidade: O Dracker protege todas as crianças da floresta e não coleta dados pessoais sem autorização dos responsáveis. Nossa magia é segura!')}
              className="text-green-200 hover:text-green-100 cursor-pointer font-medium flex items-center space-x-2 hover:scale-105 transition-all"
            >
              <span>🛡️</span>
              <span>Privacidade</span>
            </button>
          </div>
          <div className="border-t border-amber-700 pt-6">
            <p className="text-amber-300 text-sm">
              © 2025 Dracker - Todos os direitos reservados na floresta encantada 🌲✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
