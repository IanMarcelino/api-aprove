import { Gift, Users, Shuffle, MessageCircle, Shield, Clock, Building2, Phone, Mail, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="flex justify-center mb-6">
            <Gift className="w-16 h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Plataforma de Análise de Dados do TikTok: Simples, Segura e Eficiente
          </h1>
          <p className="text-xl md:text-2xl text-emerald-50 max-w-3xl mx-auto leading-relaxed">
            Acompanhe o desempenho de contas e conteúdos do TikTok de forma prática e organizada. Nossa plataforma coleta e exibe métricas como visualizações, curtidas, comentários e crescimento de seguidores por meio da API oficial do TikTok, oferecendo uma visão clara e confiável dos resultados.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Como Funciona
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  1. Conecte sua Conta do TikTok
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Autorize o acesso à sua conta por meio da API oficial do TikTok, garantindo uma integração segura e em conformidade com as políticas da plataforma.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <MessageCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  2. Coleta de Dados Automatizada
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Após a autorização, nossa plataforma coleta automaticamente métricas públicas e estatísticas de desempenho, como visualizações, curtidas, comentários e seguidores.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <Shuffle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  3. Processamento e Análise
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Os dados são organizados e processados para gerar indicadores claros de desempenho, engajamento e crescimento ao longo do tempo.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <MessageCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  4. Visualização no Dashboard
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Acompanhe todas as métricas em um dashboard intuitivo, com gráficos e números atualizados para facilitar a análise e a tomada de decisões.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20 bg-blue-50 p-10 rounded-lg border-2 border-blue-200">
          <div className="flex items-center justify-center mb-6">
            <MessageCircle className="w-10 h-10 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Nossa Integração com o TikTok
            </h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-800 leading-relaxed text-lg mb-4">
              Utilizamos a API oficial do TikTok para garantir acesso seguro e confiável às métricas essenciais de desempenho de contas e conteúdos.
            </p>
            <p className="text-gray-800 leading-relaxed text-lg mb-4">
              A integração com o TikTok nos permite coletar dados estatísticos de forma individual e controlada, assegurando que apenas informações autorizadas pelo usuário sejam acessadas e exibidas. Isso garante transparência, conformidade com as políticas da plataforma e respeito à privacidade dos dados.
            </p>
            <p className="text-gray-800 leading-relaxed text-lg">
              Os dados coletados são estritamente analíticos e utilizados exclusivamente para fins de visualização no dashboard. Não realizamos ações automatizadas, publicações, envio de mensagens, nem qualquer tipo de comunicação promocional em nome do usuário.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Building2 className="w-10 h-10 text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Sobre o Dashboard de Análise de Dados do TikTok
            </h2>
          </div>
          <div className="bg-gray-50 p-10 rounded-lg border border-gray-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Informações da Empresa</h3>
                <div className="space-y-2 text-gray-800">
                  <p><strong>Nome Comercial:</strong> Dashboard de Análise de Dados do TikTok</p>
                  <p><strong>Razão Social:</strong> Ermeson Sampaio de Queiroz</p>
                  <p><strong>CNPJ:</strong> 59.046.751/0001-91</p>
                  <p><strong>Endereço:</strong>Fortaleza, Ceará</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Descrição do Produto</h3>
                <p className="text-gray-800 leading-relaxed">
                  O <strong>Dashboard de Análise de Dados do TikTok</strong> é uma plataforma web que automatiza a análise de métricas e desempenho de contas e conteúdos do TikTok.
                </p>
                <p className="text-gray-800 leading-relaxed mt-2">
                  <strong>Público-alvo:</strong> Pessoas físicas que desejam organizar dados, acompanhar métricas.
                </p>
                <p className="text-gray-800 leading-relaxed mt-2">
                  <strong>Escopo:</strong> Nacional (Brasil)
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-10 h-10 text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Política de Privacidade
            </h2>
          </div>
          <div className="bg-gray-50 p-10 rounded-lg border border-gray-200">
            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Coleta e Uso de Dados</h3>
                <p className="mb-3">
                  Coletamos apenas as informações essenciais para o funcionamento do serviço.
                </p>
                <p>
                  <strong>Uso do TikTok:</strong> Utilizamos a API oficial do TikTok para garantir acesso seguro e confiável às métricas essenciais de desempenho de contas e conteúdos.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Consentimento</h3>
                <p>
                  Ao autorizar a integração com a plataforma, o usuário confirma que possui permissão para acessar e visualizar os dados da conta do TikTok conectada. A autorização é concedida de forma explícita por meio dos mecanismos oficiais de autenticação do TikTok, sendo utilizada exclusivamente para a coleta e exibição de métricas estatísticas no dashboard.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Compartilhamento de Dados</h3>
                <p>
                  Não compartilhamos, vendemos ou divulgamos seus dados pessoais ou de usuários para terceiros. Os dados são utilizados exclusivamente para a exibição de métricas estatísticas no dashboard.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Retenção e Exclusão de Dados</h3>
                <div className="flex items-start mb-2">
                  <Clock className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <p>
                    Todos os dados coletados por meio da integração com o TikTok são armazenados apenas pelo tempo necessário para a finalidade de análise e visualização no dashboard. As informações estatísticas são automaticamente excluídas de nossos servidores em até 30 dias, salvo quando houver obrigação legal que exija retenção por período superior.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Direito de Opt-out (Cancelamento)</h3>
                <p>
                  O usuário pode solicitar, a qualquer momento, a exclusão dos dados associados à sua conta antes do prazo de exclusão automática, por meio dos canais oficiais de contato informados nesta plataforma. As solicitações serão analisadas e processadas em até 48 horas.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Segurança</h3>
                <p>
                  O usuário pode solicitar, a qualquer momento, a exclusão dos dados associados à sua conta antes do prazo de exclusão automática, por meio dos canais oficiais de contato informados nesta plataforma. As solicitações serão analisadas e processadas em até 48 horas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Phone className="w-10 h-10 text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Contato e Suporte
            </h2>
          </div>
          <div className="bg-gray-50 p-10 rounded-lg border border-gray-200">
            <p className="text-gray-800 leading-relaxed text-lg mb-6">
              Estamos à disposição para esclarecer dúvidas, receber sugestões ou atender solicitações relacionadas aos seus dados pessoais.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">E-mail Oficial</p>
                  <a href="mailto:iandevcontato@gmail.com" className="text-emerald-600 hover:text-emerald-700 underline">
                    iandevcontato@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Telefone/WhatsApp</p>
                  <p className="text-gray-800">(85) 98163-3529</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Horário de Atendimento</p>
                  <p className="text-gray-800">Segunda a Sexta: 9h às 18h (horário de Brasília)</p>
                  <p className="text-gray-600 text-sm mt-1">Tempo médio de resposta: até 24 horas úteis</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Localização</p>
                  <p className="text-gray-800">Fortaleza, Ceará</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-10 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Pronto para Analisar os Dados?
          </h2>
          <p className="text-emerald-50 text-lg mb-6">
            Simplifique suas análises com nossa plataforma.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors">
            Criar Análise Agora
          </button>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Gift className="w-8 h-8 text-emerald-500" />
            </div>
            <p className="mb-2 text-lg font-semibold">
              Dashboard de Análise de Dados do TikTok
            </p>
            <p className="text-gray-400 text-sm">
              Um projeto para facilitar a análise de dados do TikTok.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Informações Legais</h4>
              <p className="text-gray-400 text-sm mb-1">Ermeson Sampaio de Queiroz</p>
              <p className="text-gray-400 text-sm mb-1">CNPJ: 59.046.751/0001-91</p>
              <p className="text-gray-400 text-sm">Fortaleza, Ceará</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Contato</h4>
              <p className="text-gray-400 text-sm mb-1">
                <a href="mailto:iandevcontato@gmail.com" className="text-emerald-400 hover:text-emerald-300 underline">
                  iandevcontato@gmail.com
                </a>
              </p>
              <p className="text-gray-400 text-sm mb-1">(85) 98163-3529</p>
              <p className="text-gray-400 text-sm">Seg-Sex: 9h às 18h</p>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Dashboard de Análise de Dados do TikTok. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Este serviço utiliza a API oficial do TikTok. TikTok é uma marca registrada da ByteDance Ltd.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
