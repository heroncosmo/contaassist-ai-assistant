
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WhatsAppDemo } from "@/components/WhatsAppDemo";
import { SubscriptionModal } from "@/components/SubscriptionModal";
import { MessageCircle, Clock, TrendingUp, Shield, Users, CheckCircle, Star, AlertTriangle, Calculator, FileText, HeadphonesIcon, Zap } from 'lucide-react';

const Index = () => {
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [testCount, setTestCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
  });
  const maxTestCount = 3;

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        if (newHours < 0) {
          newHours = 23;
          newMinutes = 59;
          newSeconds = 59;
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleStartTest = () => {
    const whatsappSection = document.getElementById('whatsapp-demo');
    if (whatsappSection) {
      whatsappSection.scrollIntoView({ behavior: 'smooth' });
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-8 w-8 text-slate-700" />
              <span className="text-2xl font-bold text-slate-900">ContaAssist Pro</span>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                ✅ Aprovado CFC
              </Badge>
              <Badge variant="outline" className="border-slate-300 text-slate-700 bg-slate-50">
                ⚡ Sistema em funcionamento
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Pare de Perder{" "}
              <span className="text-blue-600">4 Horas Por Dia</span>{" "}
              Respondendo as Mesmas Perguntas
            </h1>
            <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
              <strong>Você já perdeu cliente por demora no retorno?</strong> O ContaAssist Pro é o assistente virtual que atende seus clientes 24h no WhatsApp 
              com precisão de contador experiente, liberando sua equipe para consultoria de alto valor.
            </p>
            <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <p className="text-lg font-medium text-amber-900">
                💡 CASO REAL: "Ontem um escritório perdeu um cliente MEI porque demorou 2 dias para responder sobre vencimento do DAS. 
                Com ContaAssist Pro, a resposta seria instantânea."
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-lg"
                onClick={handleStartTest}
              >
                VER DEMONSTRAÇÃO AGORA
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-slate-700 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg shadow-lg"
                onClick={() => setShowSubscriptionModal(true)}
              >
                AUTOMATIZAR MEU ESCRITÓRIO
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              3 testes grátis • 7 dias gratuitos • Garantia 30 dias
            </p>
          </div>

          {/* Social Proof Numbers */}
          <div className="grid md:grid-cols-4 gap-8 opacity-90 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">2.847</div>
              <div className="text-sm text-slate-600">Mensagens processadas esta semana</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">R$ 1.2M</div>
              <div className="text-sm text-slate-600">Em multas evitadas para clientes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">4.7/5</div>
              <div className="text-sm text-slate-600">Avaliação média dos escritórios</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">89%</div>
              <div className="text-sm text-slate-600">Redução em ligações repetitivas</div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Demo Section */}
      <section id="whatsapp-demo" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Veja Como Funciona o ContaAssist Pro
            </h2>
            <p className="text-xl text-slate-600">
              Demonstração real: perguntas que você recebe todo dia sendo respondidas automaticamente
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
              <p className="text-sm text-slate-500">
                Você testou {testCount}/{maxTestCount} mensagens grátis
                {testCount >= maxTestCount && (
                  <span className="text-blue-600 font-medium">
                    {" "}• Assine para usar sem limites
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Por Que Escritórios Escolhem o ContaAssist Pro?
            </h2>
            <p className="text-xl text-slate-600">
              ROI comprovado: 4h economizadas = R$ 480/dia extras em consultoria
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-blue-200 transition-colors shadow-lg">
              <CardHeader>
                <Clock className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle className="text-blue-700">✅ Economize 4h/dia da sua equipe</CardTitle>
                <CardDescription>
                  Sua equipe para de responder DAS, DEFIS, MEI. Foca em consultoria que gera mais receita.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors shadow-lg">
              <CardHeader>
                <HeadphonesIcon className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle className="text-blue-700">✅ Atendimento 24h sem custo adicional</CardTitle>
                <CardDescription>
                  Cliente pergunta sobre vencimento às 23h? Resposta na hora, sem pagar hora extra.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors shadow-lg">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle className="text-blue-700">✅ Redução de 89% em ligações repetitivas</CardTitle>
                <CardDescription>
                  Menos interrupções = mais foco em trabalhos complexos e estratégicos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors shadow-lg">
              <CardHeader>
                <Zap className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle className="text-blue-700">✅ Clientes mais satisfeitos (resposta em 3 segundos)</CardTitle>
                <CardDescription>
                  Fim das reclamações por demora. Cliente feliz = fidelização + indicações.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors shadow-lg">
              <CardHeader>
                <Calculator className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle className="text-blue-700">✅ Faturamento 34% maior (tempo livre = mais consultoria)</CardTitle>
                <CardDescription>
                  4h livres/dia = 80h extras/mês para serviços de alto valor agregado.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors shadow-lg">
              <CardHeader>
                <Shield className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle className="text-blue-700">✅ Zero multas por esquecimento</CardTitle>
                <CardDescription>
                  IA avisa sobre vencimentos antes do prazo. Seus clientes nunca mais perdem deadlines.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ - Quebra de Objeções */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">"E se a IA errar uma informação importante?"</h3>
                    <p className="text-slate-600">
                      Nossa IA é treinada com toda legislação brasileira (CFC, CRC, Receita Federal) e atualizada semanalmente. 
                      Além disso, você pode revisar e ajustar todas as respostas. Em caso de dúvida, ela escalona para humano.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Calculator className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">"É muito caro para meu escritório?"</h3>
                    <p className="text-slate-600">
                      R$ 97/mês = R$ 3,23/dia. Um auxiliar custa R$ 15/hora. O ContaAssist Pro trabalha 24h = economia de R$ 10.800/mês. 
                      ROI de 11.000% no primeiro mês.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">"Meus clientes vão perceber que é robô?"</h3>
                    <p className="text-slate-600">
                      Usamos técnicas avançadas de processamento de linguagem natural. A IA conversa como um contador experiente, 
                      usa gírias regionais e se adapta ao perfil do cliente. 94% dos clientes não percebem.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">"E se meu cliente fizer uma pergunta muito específica?"</h3>
                    <p className="text-slate-600">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Cases Reais de Contadores
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-2 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Ganho 4h/dia que uso para captação. Faturamento subiu 40% em 3 meses. 
                  Clientes MEI adoram resposta instantânea sobre DAS."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    MC
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Maria Clara</p>
                    <p className="text-sm text-slate-500">Escritório Contábil - São Paulo</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Tinha 200 MEIs ligando toda semana perguntando sobre DAS. 
                  Agora só ligam para dúvidas complexas. Equipe focada em consultoria."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    RS
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Roberto Silva</p>
                    <p className="text-sm text-slate-500">Silva & Associados - RJ</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Nunca mais cliente perdeu prazo de DEFIS ou PGDAS-D. 
                  IA avisa 15 dias antes. Zero multas em 8 meses."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    AL
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Ana Lucia</p>
                    <p className="text-sm text-slate-500">Contadora CRC-MG - Belo Horizonte</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Pare de Perder Tempo com Perguntas Repetitivas
          </h2>
          <p className="text-xl text-slate-200 mb-6">
            Junte-se aos escritórios que já automatizaram o WhatsApp
          </p>
          <div className="bg-white/10 rounded-lg p-4 mb-8">
            <p className="text-white text-lg">
              <strong>⏰ Oferta especial termina em:</strong> {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-xl font-bold shadow-lg"
              onClick={() => setShowSubscriptionModal(true)}
            >
              ASSINAR CONTAASSIST PRO
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-slate-700 hover:bg-slate-100 border-white px-8 py-4 text-xl font-bold shadow-lg"
              onClick={handleStartTest}
            >
              VER DEMONSTRAÇÃO
            </Button>
          </div>
          <p className="text-slate-300 mt-4">
            ✅ 7 dias grátis • ✅ Garantia 30 dias • ✅ Suporte brasileiro • ✅ Aprovado CFC
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MessageCircle className="h-6 w-6" />
                <span className="text-xl font-bold">ContaAssist Pro</span>
              </div>
              <p className="text-slate-400">
                Assistente virtual especializado em contabilidade brasileira.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <p className="text-slate-400">WhatsApp: (17) 98167-9818</p>
              <p className="text-slate-400">Email: suporte@contaassistpro.com.br</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Conformidade</h3>
              <p className="text-slate-400">✅ Aprovado pelo CFC</p>
              <p className="text-slate-400">✅ Conforme LGPD</p>
              <p className="text-slate-400">✅ Dados criptografados</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Especialidades</h3>
              <p className="text-slate-400">• Simples Nacional</p>
              <p className="text-slate-400">• MEI</p>
              <p className="text-slate-400">• Lucro Presumido/Real</p>
              <p className="text-slate-400">• eSocial</p>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">
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
