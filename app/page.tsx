import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Verification SaaS 4c76",
  description: "Solução inovadora de verificação de tubulações para manutenção preventiva e controle de qualidade.",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Verification SaaS 4c76</h1>
                <p className="text-xs text-gray-500">Soluções para tubulações industriais</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                Recursos
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
                Planos
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Solução inovadora para
                <span className="text-blue-600"> inspeção de tubulações</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Tecnologia avançada para garantir a integridade e segurança das suas tubulações industriais. 
                Agendamento flexível, relatórios detalhados e suporte técnico especializado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://test.com/pay"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  Contratar Agora
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                >
                  Falar com Especialista
                </a>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">+500</span> clientes satisfeitos
                  </p>
                  <p className="text-xs text-gray-500">Indústrias confiam na nossa tecnologia</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-3xl opacity-20"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Agende sua inspeção</h3>
                    <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      Disponível 24/7
                    </span>
                  </div>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tipo de tubulação
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                        <option>Água</option>
                        <option>Esgoto</option>
                        <option>Produtos químicos</option>
                        <option>Óleo e gás</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Data desejada
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                    >
                      Agendar Inspeção
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher o Verification SaaS 4c76?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossa plataforma oferece soluções completas para garantir a segurança e eficiência das suas operações.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tecnologia de Ponta",
                description: "Utilizamos equipamentos avançados para inspeções precisas e detalhadas.",
                icon: "🔍",
              },
              {
                title: "Relatórios em Tempo Real",
                description: "Acompanhe o progresso das inspeções e receba relatórios imediatos.",
                icon: "📊",
              },
              {
                title: "Suporte Especializado",
                description: "Equipe técnica altamente qualificada disponível 24/7.",
                icon: "🛠️",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Pronto para garantir a segurança das suas tubulações?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de empresas que já confiam na nossa tecnologia para manter a integridade das suas operações.
            </p>
            <a
              href="https://test.com/pay"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Começar Agora
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">VS</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Verification SaaS 4c76</h3>
                    <p className="text-gray-400 text-sm">Soluções para tubulações industriais</p>
                  </div>
                </div>
                <p className="text-gray-400 max-w-md">
                  Tecnologia avançada para garantir a integridade e segurança das suas tubulações industriais. Agendamento flexível, relatórios detalhados e suporte técnico especializado.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Empresa</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contato</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>📧 contato@verificationsas4c76.com.br</li>
                  <li>📱 (11) 98765-4321</li>
                  <li>🏢 Av. Paulista, 1000, São Paulo - SP</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Verification SaaS 4c76. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
