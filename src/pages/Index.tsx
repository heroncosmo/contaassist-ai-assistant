
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WhatsAppDemo } from "@/components/WhatsAppDemo";
import { SubscriptionModal } from "@/components/SubscriptionModal";
import { MessageCircle, Clock, TrendingUp, Shield, Users, CheckCircle, Star, Play } from 'lucide-react';

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
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              ✅ Aprovado CFC
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">
              🔥 NOVIDADE: Integração com eSocial e DCTFWeb
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Pare de Responder as{" "}
              <span className="text-blue-600">Mesmas Perguntas</span>{" "}
              Todo Dia
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              O <strong>ContaAssist Pro</strong> é um assistente virtual inteligente que atende seus clientes 24h no WhatsApp, 
              conhece toda legislação brasileira e libera sua equipe para focar no que realmente importa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
                onClick={handleStartTest}
              >
                <Play className="mr-2 h-5 w-5" />
                Testar GRÁTIS Agora
              </Button>
              <p className="text-sm text-gray-500">
                Sem cartão • Sem compromisso • Resultados em 5 minutos
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex justify-center items-center space-x-8 opacity-70 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">2.847</div>
              <div className="text-sm text-gray-600">Escritórios Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">70%</div>
              <div className="text-sm text-gray-600">Menos Ligações</div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Demo Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Veja Como Funciona na Prática
            </h2>
            <p className="text-xl text-gray-600">
              Demonstração real de como o ContaAssist Pro atende seus clientes
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
                    {" "}• Assine para uso ilimitado
                  </span>
                )}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por Que Contadores Escolhem o ContaAssist Pro?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Clock className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Disponível 24/7</CardTitle>
                <CardDescription>
                  Atende seus clientes a qualquer hora, inclusive finais de semana e feriados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Respostas instantâneas
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Sem tempo de espera
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Shield className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Legislação Atualizada</CardTitle>
                <CardDescription>
                  Base de conhecimento sempre atualizada com mudanças na legislação brasileira
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Simples Nacional
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lucro Presumido/Real
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    MEI e eSocial
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>ROI Comprovado</CardTitle>
                <CardDescription>
                  Reduz até 70% do volume de atendimento repetitivo da sua equipe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mais tempo para consultoria
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Clientes mais satisfeitos
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O Que Dizem os Contadores
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Revolucionou nosso atendimento. Antes ficávamos o dia todo respondendo DAS e obrigações. 
                  Agora focamos em planejamento tributário."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    MC
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Maria Clara</p>
                    <p className="text-sm text-gray-500">Contadora - São Paulo</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "70% menos ligações! Nossos clientes adoram ter respostas na hora. 
                  E o melhor: ninguém percebe que é IA."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    RS
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Roberto Silva</p>
                    <p className="text-sm text-gray-500">Escritório Contábil - RJ</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Implementação super fácil. Em 1 dia já estava funcionando. 
                  Meus clientes MEI estão muito mais satisfeitos."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    AL
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Ana Lucia</p>
                    <p className="text-sm text-gray-500">Contadora - MG</p>
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
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a mais de 2.800 escritórios que já transformaram seu atendimento
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            onClick={() => setShowSubscriptionModal(true)}
          >
            Começar Agora - R$ 97/mês
          </Button>
          <p className="text-blue-200 mt-4">
            ✅ 7 dias grátis • ✅ Cancele quando quiser • ✅ Suporte brasileiro
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MessageCircle className="h-6 w-6" />
            <span className="text-xl font-bold">ContaAssist Pro</span>
          </div>
          <p className="text-gray-400">
            © 2024 ContaAssist Pro. Desenvolvido especialmente para contadores brasileiros.
          </p>
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
