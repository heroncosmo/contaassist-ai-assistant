
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WhatsAppDemo } from "@/components/WhatsAppDemo";
import { SubscriptionModal } from "@/components/SubscriptionModal";
import { MessageCircle, Clock, TrendingUp, Shield, Users, CheckCircle, Star, Play, AlertTriangle, Calculator, FileText, HeadphonesIcon, Zap, Timer } from 'lucide-react';

const Index = () => {
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [testingStarted, setTestingStarted] = useState(false);
  const [testCount, setTestCount] = useState(0);
  const maxTestCount = 3;

  const handleStartTest = () => {
    if (testCount >= maxTestCount) {
      setShowSubscriptionModal(true);
    } else {
      setTestingStarted(true);
    }
  };

  const handleTestMessage = () => {
    if (testCount < maxTestCount) {
      setTestCount(testCount + 1);
    }
    if (testCount + 1 >= maxTestCount) {
      setTimeout(() => {
        setShowSubscriptionModal(true);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">ContaAssist Pro</span>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                ✅ Aprovado CFC
              </Badge>
              <Badge variant="outline" className="border-orange-300 text-orange-700">
                ⚡ 23 contadores testando agora
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-200">
              🔥 ÚLTIMA SEMANA: Desconto de 67% termina em breve
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Pare de Perder{" "}
              <span className="text-red-600">4 Horas Por Dia</span>{" "}
              Respondendo as Mesmas Perguntas
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
              <strong>Você já perdeu cliente por demora no retorno?</strong> O ContaAssist Pro é o assistente virtual que atende seus clientes 24h no WhatsApp 
              com precisão de contador experiente, liberando sua equipe para consultoria de alto valor.
            </p>
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <p className="text-lg font-bold text-yellow-800">
                💡 CASO REAL: "Ontem um escritório perdeu um cliente MEI porque demorou 2 dias para responder sobre vencimento do DAS. 
                Com ContaAssist Pro, a resposta seria instantânea."
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
                onClick={handleStartTest}
              >
                <Play className="mr-2 h-5 w-5" />
                TESTAR GRÁTIS AGORA
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
                onClick={() => setShowSubscriptionModal(true)}
              >
                LIBERAR MINHA EQUIPE AGORA
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Sem cartão • Sem compromisso • 7 dias grátis • Garantia 30 dias
            </p>
          </div>

          {/* Urgency Metrics */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-6 mb-12">
            <div className="flex justify-center items-center space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold">⚡ 23</div>
                <div className="text-sm">Contadores testando AGORA</div>
              </div>
              <div>
                <div className="text-2xl font-bold">⏰ 4</div>
                <div className="text-sm">Vagas restantes hoje</div>
              </div>
              <div>
                <div className="text-2xl font-bold">🔥 47h</div>
                <div className="text-sm">Para acabar desconto</div>
              </div>
            </div>
          </div>

          {/* Social Proof Numbers */}
          <div className="grid md:grid-cols-4 gap-8 opacity-90 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">12.847</div>
              <div className="text-sm text-gray-600">Mensagens automatizadas esta semana</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">R$ 2.3M</div>
              <div className="text-sm text-gray-600">Em multas evitadas para clientes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">4.2/5</div>
              <div className="text-sm text-gray-600">Avaliação média dos escritórios</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">89%</div>
              <div className="text-sm text-gray-600">Redução em ligações repetitivas</div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Demo Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Veja Como Seu Escritório Vai Funcionar
            </h2>
            <p className="text-xl text-gray-600">
              Demonstração real: perguntas que você recebe TODO DIA sendo respondidas automaticamente
            </p>
          </div>
          
          <WhatsAppDemo 
            onTestMessage={handleTestMessage}
            testCount={testCount}
            maxTestCount={maxTestCount}
            onMaxReached={() => setShowSubscriptionModal(true)}
          />
          
          {testCount > 0 && (
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                Você testou {testCount}/{maxTestCount} mensagens grátis
                {testCount >= maxTestCount && (
                  <span className="text-orange-600 font-medium">
                    {" "}• 7 dias grátis para usar sem limites
                  </span>
                )}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por Que 2.847 Escritórios Já Escolheram o ContaAssist Pro?
            </h2>
            <p className="text-xl text-gray-600">
              ROI comprovado: 4h economizadas = R$ 480/dia extras em consultoria
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <Clock className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle className="text-green-700">✅ Economize 4h/dia da sua equipe</CardTitle>
                <CardDescription>
                  Sua equipe para de responder DAS, DEFIS, MEI. Foca em consultoria que gera mais receita.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <HeadphonesIcon className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle className="text-blue-700">✅ Atendimento 24h sem custo adicional</CardTitle>
                <CardDescription>
                  Cliente pergunta sobre vencimento às 23h? Resposta na hora, sem pagar hora extra.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle className="text-purple-700">✅ Redução de 89% em ligações repetitivas</CardTitle>
                <CardDescription>
                  Menos interrupções = mais foco em trabalhos complexos e estratégicos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Zap className="h-10 w-10 text-orange-600 mb-2" />
                <CardTitle className="text-orange-700">✅ Clientes mais satisfeitos (resposta em 3 segundos)</CardTitle>
                <CardDescription>
                  Fim das reclamações por demora. Cliente feliz = fidelização + indicações.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <Calculator className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle className="text-green-700">✅ Faturamento 34% maior (tempo livre = mais consultoria)</CardTitle>
                <CardDescription>
                  4h livres/dia = 80h extras/mês para serviços de alto valor agregado.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Shield className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle className="text-red-700">✅ Zero multas por esquecimento</CardTitle>
                <CardDescription>
                  IA avisa sobre vencimentos antes do prazo. Seus clientes nunca mais perdem deadlines.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ - Quebra de Objeções */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quebra de Objeções - Suas Dúvidas Respondidas
            </h2>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">"E se a IA errar uma informação importante?"</h3>
                    <p className="text-gray-600">
                      <strong>→ Treinada com legislação atualizada + supervisão humana</strong><br/>
                      Nossa IA é treinada com toda legislação brasileira (CFC, CRC, Receita Federal) e atualizada semanalmente. 
                      Além disso, você pode revisar e ajustar todas as respostas. Em caso de dúvida, ela escalona para humano.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Calculator className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">"É muito caro para meu escritório?"</h3>
                    <p className="text-gray-600">
                      <strong>→ Custa menos que 1h de um auxiliar contábil</strong><br/>
                      R$ 97/mês = R$ 3,23/dia. Um auxiliar custa R$ 15/hora. O ContaAssist Pro trabalha 24h = economia de R$ 10.800/mês. 
                      ROI de 11.000% no primeiro mês.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">"Meus clientes vão perceber que é robô?"</h3>
                    <p className="text-gray-600">
                      <strong>→ Linguagem 100% humanizada</strong><br/>
                      Usamos técnicas avançadas de processamento de linguagem natural. A IA conversa como um contador experiente, 
                      usa gírias regionais e se adapta ao perfil do cliente. 94% dos clientes não percebem.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">"E se meu cliente fizer uma pergunta muito específica?"</h3>
                    <p className="text-gray-600">
                      <strong>→ Sistema de escalação inteligente</strong><br/>
                      Quando a IA não tem certeza (menos de 85% de confiança), ela automaticamente transfere para sua equipe 
                      com todo contexto da conversa. Cliente não fica sem resposta.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cases Reais de Contadores
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-2">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Ganho 4h/dia que uso para captação. Faturamento subiu 40% em 3 meses. 
                  Clientes MEI adoram resposta instantânea sobre DAS."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    MC
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Maria Clara</p>
                    <p className="text-sm text-gray-500">Escritório Contábil - São Paulo</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Tinha 200 MEIs ligando toda semana perguntando sobre DAS. 
                  Agora só ligam para dúvidas complexas. Equipe focada em consultoria."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    RS
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Roberto Silva</p>
                    <p className="text-sm text-gray-500">Silva & Associados - RJ</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Nunca mais cliente perdeu prazo de DEFIS ou PGDAS-D. 
                  IA avisa 15 dias antes. Zero multas em 8 meses."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    AL
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Ana Lucia</p>
                    <p className="text-sm text-gray-500">Contadora CRC-MG - Belo Horizonte</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Pare de Perder Tempo com Perguntas Repetitivas
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            Junte-se a 2.847 escritórios que já automatizaram o WhatsApp
          </p>
          <div className="bg-white/10 rounded-lg p-4 mb-8">
            <p className="text-white text-lg">
              <strong>⏰ ÚLTIMAS HORAS:</strong> Desconto de 67% + 7 dias grátis termina hoje às 23:59h
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-xl font-bold"
              onClick={() => setShowSubscriptionModal(true)}
            >
              AUTOMATIZAR MEU WHATSAPP - R$ 97/mês
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100 border-white px-8 py-4 text-xl font-bold"
              onClick={handleStartTest}
            >
              TESTAR GRÁTIS PRIMEIRO
            </Button>
          </div>
          <p className="text-blue-200 mt-4">
            ✅ 7 dias grátis • ✅ Garantia 30 dias • ✅ Suporte brasileiro • ✅ Aprovado CFC
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MessageCircle className="h-6 w-6" />
                <span className="text-xl font-bold">ContaAssist Pro</span>
              </div>
              <p className="text-gray-400">
                Assistente virtual especializado em contabilidade brasileira.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <p className="text-gray-400">WhatsApp: (17) 98167-9818</p>
              <p className="text-gray-400">Email: suporte@contaassistpro.com.br</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Conformidade</h3>
              <p className="text-gray-400">✅ Aprovado pelo CFC</p>
              <p className="text-gray-400">✅ Conforme LGPD</p>
              <p className="text-gray-400">✅ Dados criptografados</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Especialidades</h3>
              <p className="text-gray-400">• Simples Nacional</p>
              <p className="text-gray-400">• MEI</p>
              <p className="text-gray-400">• Lucro Presumido/Real</p>
              <p className="text-gray-400">• eSocial</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 ContaAssist Pro. CNPJ: 45.123.456/0001-78 - Desenvolvido especialmente para contadores brasileiros.
            </p>
          </div>
        </div>
      </footer>

      <SubscriptionModal 
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
      />
    </div>
  );
};

export default Index;
