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
            Plataforma de Amigo Secreto: Simples, Segura e Eficiente
          </h1>
          <p className="text-xl md:text-2xl text-emerald-50 max-w-3xl mx-auto leading-relaxed">
            Organize seus sorteios de Amigo Secreto com facilidade e segurança,
            aproveitando a integração opcional com o TikTok para identificação dos participantes.
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
                  1. Crie ou Participe de um Grupo
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Crie um grupo de Amigo Secreto ou participe de um grupo já existente,
          informando os participantes de forma simples e segura.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <MessageCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                   2. Identifique-se com TikTok (Opcional)
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                O usuário pode opcionalmente conectar sua conta do TikTok para exibir
          nome e foto de perfil, facilitando a identificação dentro do grupo.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <Shuffle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  3. Realize o Sorteio
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                O Zapsecreto realiza automaticamente o sorteio do Amigo Secreto,
          garantindo imparcialidade e sigilo entre os participantes.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <MessageCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  4. Receba seu Amigo Secreto
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Cada participante recebe de forma privada a informação
          sobre quem é o seu Amigo Secreto.
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
              Utilizamos a API oficial do TikTok para permitir a identificação opcional dos usuários, de forma segura e confiável, ao criar e participar de grupos de Amigo Secreto.
            </p>
            <p className="text-gray-800 leading-relaxed text-lg mb-4">
              A integração com o TikTok permite que o Zapsecreto acesse, de forma individual e controlada, apenas informações básicas autorizadas pelo usuário, como nome de exibição e foto de perfil, garantindo transparência, conformidade com as políticas da plataforma e respeito à privacidade dos dados.
            </p>
            <p className="text-gray-800 leading-relaxed text-lg">
              Os dados obtidos por meio da integração com o TikTok são utilizados exclusivamente para fins de identificação do usuário dentro dos grupos de Amigo Secreto. Não realizamos publicações, envio de mensagens, automações ou qualquer tipo de ação promocional em nome do usuário na plataforma do TikTok.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Building2 className="w-10 h-10 text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Sobre o ZapSecreto
            </h2>
          </div>
          <div className="bg-gray-50 p-10 rounded-lg border border-gray-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Informações da Empresa</h3>
                <div className="space-y-2 text-gray-800">
                  <p><strong>Nome Comercial:</strong> ZapSecreto</p>
                  <p><strong>Razão Social:</strong> Ermeson Sampaio de Queiroz</p>
                  <p><strong>CNPJ:</strong> 59.046.751/0001-91</p>
                  <p><strong>Endereço:</strong>Fortaleza, Ceará</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Descrição do Produto</h3>
                <p className="text-gray-800 leading-relaxed">
                  O <strong>ZapSecreto</strong> é uma plataforma web que permite a identificação opcional dos usuários por meio do Tiktok, de forma segura e confiável, ao criar e participar de grupos de Amigo Secreto.
                </p>
                <p className="text-gray-800 leading-relaxed mt-2">
                  <strong>Público-alvo:</strong> Pessoas físicas que desejam realizar sorteios de Amigo Secreto de maneira prática e organizada.
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
                  <strong>Uso do TikTok:</strong> Utilizamos a API oficial do TikTok para permitir a identificação opcional dos usuários, de forma segura e confiável, ao criar e participar de grupos de Amigo Secreto.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Consentimento</h3>
                <p>
                  Ao autorizar a integração com o TikTok, o usuário concede permissão explícita, por meio dos mecanismos oficiais de autenticação da plataforma, para que o Zapsecreto utilize informações básicas da conta, como nome de exibição e foto de perfil, exclusivamente para fins de identificação do usuário dentro dos grupos de Amigo Secreto.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Compartilhamento de Dados</h3>
                <p>
                  Não compartilhamos, vendemos ou divulgamos dados pessoais dos usuários a terceiros. As informações obtidas por meio da integração com o TikTok são utilizadas exclusivamente para a identificação do usuário dentro dos grupos de Amigo Secreto.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Retenção e Exclusão de Dados</h3>
                <div className="flex items-start mb-2">
                  <Clock className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <p>
                    Todos os dados obtidos por meio da integração com o TikTok são armazenados apenas pelo tempo necessário para a identificação do usuário dentro dos grupos de Amigo Secreto. As informações básicas, como nome de exibição e foto de perfil, são excluídas de nossos servidores em até 30 dias após o encerramento do grupo ou mediante solicitação do usuário, salvo quando houver obrigação legal de retenção por período superior.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Direito de Opt-out (Cancelamento)</h3>
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
            Pronto para Sortear os Os participantes?
          </h2>
          <p className="text-emerald-50 text-lg mb-6">
            Simplifique seu sorteio de amigo secreto com nossa plataforma.
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
              ZapSecreto para facilitar o sorteio de grupos do seu Amigo Secreto
            </p>
            <p className="text-gray-400 text-sm">
              Um projeto para facilitar a organização dos seus grupos de Amigo Secreto.
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
              © 2025 ZapSecreto. Todos os direitos reservados.
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
