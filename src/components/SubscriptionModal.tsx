
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, CreditCard, QrCode, Shield, Clock, Users, TrendingUp, X, Timer } from 'lucide-react';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isOpen, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'pix'>('credit');
  const [step, setStep] = useState<'plans' | 'payment'>('plans');
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
  });

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

  const plans = {
    monthly: {
      price: 97,
      originalPrice: 297,
      period: 'mês',
      discount: '67% OFF',
      savings: 'R$ 200/mês',
      trialText: '7 dias grátis'
    },
    yearly: {
      price: 67,
      originalPrice: 297,
      period: 'mês',
      discount: '77% OFF',
      savings: 'R$ 2.760/ano',
      yearlyTotal: 804,
      originalYearlyTotal: 3564,
      trialText: '7 dias grátis'
    }
  };

  const features = [
    'Atendimento 24/7 no WhatsApp',
    'Respostas sobre toda legislação brasileira',
    'Integração eSocial, SEFAZ e Receita Federal',
    'Alertas automáticos de vencimentos',
    'Cálculos de DAS, IRPJ, CSLL automáticos',
    'Suporte técnico especializado',
    'Treinamento completo da equipe',
    'Atualizações legislativas em tempo real'
  ];

  const handleContinue = () => {
    setStep('payment');
  };

  const handlePayment = () => {
    // Simulate payment processing
    alert(`✅ Assinatura ativada com sucesso! 
    
🎉 Seus 7 dias grátis começam AGORA!
📧 Instruções de instalação enviadas para seu email
📱 WhatsApp será configurado em até 30 minutos
🔄 Garantia total de reembolso em 30 dias

Bem-vindo ao ContaAssist Pro! 🚀`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <DialogTitle className="text-3xl font-bold text-center pr-8">
            {step === 'plans' ? '🔥 Oferta Especial - 7 Dias Grátis' : '💳 Finalizar Assinatura'}
          </DialogTitle>
        </DialogHeader>

        {step === 'plans' && (
          <div className="space-y-6">
            {/* Urgency Timer */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg text-center">
              <div className="flex items-center justify-center mb-3">
                <Timer className="h-6 w-6 mr-2" />
                <p className="font-bold text-xl">OFERTA TERMINA EM:</p>
              </div>
              <div className="flex justify-center space-x-4 text-3xl font-bold">
                <div className="bg-white/20 px-4 py-2 rounded">
                  {String(timeLeft.hours).padStart(2, '0')}
                  <div className="text-sm font-normal">HORAS</div>
                </div>
                <div className="bg-white/20 px-4 py-2 rounded">
                  {String(timeLeft.minutes).padStart(2, '0')}
                  <div className="text-sm font-normal">MIN</div>
                </div>
                <div className="bg-white/20 px-4 py-2 rounded">
                  {String(timeLeft.seconds).padStart(2, '0')}
                  <div className="text-sm font-normal">SEG</div>
                </div>
              </div>
              <p className="mt-3 text-lg">⚡ Apenas 12 vagas restantes para teste gratuito!</p>
            </div>

            {/* Free Trial Banner */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-green-700 mb-2">🎁 7 DIAS COMPLETAMENTE GRÁTIS</h3>
              <p className="text-gray-700 text-lg">
                ✅ Teste TODOS os recursos sem limitações<br/>
                ✅ Configure seu WhatsApp profissional<br/>
                ✅ Atenda clientes reais com IA<br/>
                ✅ <strong>Garantia de reembolso total em 30 dias</strong>
              </p>
            </div>

            {/* Plan Selection */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card 
                className={`cursor-pointer border-3 transition-all transform hover:scale-105 ${
                  selectedPlan === 'monthly' ? 'border-blue-500 bg-blue-50 shadow-xl' : 'border-gray-200'
                }`}
                onClick={() => setSelectedPlan('monthly')}
              >
                <CardHeader className="text-center">
                  <Badge variant="outline" className="mx-auto mb-2 bg-blue-100 text-blue-700">
                    {plans.monthly.trialText}
                  </Badge>
                  <CardTitle className="text-xl">Plano Mensal</CardTitle>
                  <CardDescription>Flexibilidade total</CardDescription>
                  <Badge variant="destructive" className="text-lg py-1">
                    {plans.monthly.discount}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-600">R$ {plans.monthly.price}</span>
                      <span className="text-gray-500 ml-1">/{plans.monthly.period}</span>
                    </div>
                    <p className="text-lg text-gray-500 line-through">
                      R$ {plans.monthly.originalPrice}/{plans.monthly.period}
                    </p>
                    <p className="text-green-600 font-bold text-lg">{plans.monthly.savings} de economia</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-sm font-medium text-yellow-700">
                      💡 Comece gastando R$ 0,00 pelos primeiros 7 dias!
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card 
                className={`cursor-pointer border-3 transition-all transform hover:scale-105 relative ${
                  selectedPlan === 'yearly' ? 'border-green-500 bg-green-50 shadow-xl' : 'border-gray-200'
                }`}
                onClick={() => setSelectedPlan('yearly')}
              >
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-1 text-lg">
                  ⭐ MAIS POPULAR
                </Badge>
                <CardHeader className="text-center pt-8">
                  <Badge variant="outline" className="mx-auto mb-2 bg-green-100 text-green-700">
                    {plans.yearly.trialText}
                  </Badge>
                  <CardTitle className="text-xl">Plano Anual</CardTitle>
                  <CardDescription>Máxima economia</CardDescription>
                  <Badge variant="destructive" className="text-lg py-1">
                    {plans.yearly.discount}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-600">R$ {plans.yearly.price}</span>
                      <span className="text-gray-500 ml-1">/{plans.yearly.period}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      (R$ {plans.yearly.yearlyTotal}/ano - pago anualmente)
                    </p>
                    <p className="text-lg text-gray-500 line-through">
                      R$ {plans.yearly.originalYearlyTotal}/ano
                    </p>
                    <p className="text-green-600 font-bold text-lg">{plans.yearly.savings} de economia</p>
                  </div>
                  <div className="bg-green-50 border border-green-300 rounded-lg p-3">
                    <p className="text-sm font-bold text-green-700">
                      🎯 MELHOR CUSTO-BENEFÍCIO
                    </p>
                    <p className="text-xs text-green-600">
                      Equivale a R$ 2,23 por dia
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Features */}
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl text-center">🚀 Tudo que você vai ter nos 7 dias grátis:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Proof */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">2.847</div>
                  <div className="text-sm text-gray-600">Escritórios Ativos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">127k</div>
                  <div className="text-sm text-gray-600">Mensagens Automatizadas/Mês</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">R$ 2.3M</div>
                  <div className="text-sm text-gray-600">Em Multas Evitadas</div>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <Shield className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <p className="font-bold text-sm">7 dias grátis</p>
                <p className="text-xs text-gray-500">Teste sem compromisso</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <Clock className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <p className="font-bold text-sm">Garantia 30 dias</p>
                <p className="text-xs text-gray-500">Dinheiro de volta integral</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <Users className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <p className="font-bold text-sm">Suporte brasileiro</p>
                <p className="text-xs text-gray-500">WhatsApp e telefone</p>
              </div>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 text-xl font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
              onClick={handleContinue}
            >
              🚀 COMEÇAR 7 DIAS GRÁTIS - {selectedPlan === 'monthly' ? 'Plano Mensal' : 'Plano Anual'}
            </Button>
            
            <p className="text-center text-sm text-gray-500">
              ⚡ Configuração automática em 30 minutos • 🔒 Dados protegidos • ✅ Cancele quando quiser
            </p>
          </div>
        )}

        {step === 'payment' && (
          <div className="space-y-6">
            {/* Order Summary */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-green-700">🎁 7 DIAS GRÁTIS + Garantia 30 Dias</h3>
                  <p className="text-gray-600">Você só será cobrado após o período de teste</p>
                </div>
                <div className="flex justify-between items-center bg-white rounded-lg p-4">
                  <div>
                    <p className="font-bold text-lg">
                      ContaAssist Pro - {selectedPlan === 'monthly' ? 'Mensal' : 'Anual'}
                    </p>
                    <p className="text-sm text-gray-500">
                      7 dias grátis, depois R$ {selectedPlan === 'yearly' ? plans.yearly.yearlyTotal : plans[selectedPlan].price}
                      {selectedPlan === 'monthly' ? '/mês' : '/ano'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-2xl text-green-600">
                      R$ 0,00
                    </p>
                    <p className="text-sm text-gray-500">hoje</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Tabs value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as 'credit' | 'pix')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="credit" className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4" />
                  <span>Cartão de Crédito</span>
                </TabsTrigger>
                <TabsTrigger value="pix" className="flex items-center space-x-2">
                  <QrCode className="h-4 w-4" />
                  <span>PIX</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="credit" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Número do Cartão</Label>
                    <Input id="cardNumber" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Nome no Cartão</Label>
                    <Input id="cardName" placeholder="Nome como está no cartão" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Validade</Label>
                    <Input id="expiry" placeholder="MM/AA" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-700 font-medium">
                    🔒 <strong>100% Seguro:</strong> Seus dados são criptografados. Você só será cobrado após os 7 dias grátis.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="pix" className="space-y-4">
                <div className="text-center space-y-4">
                  <div className="bg-gray-100 p-8 rounded-lg">
                    <QrCode className="h-32 w-32 mx-auto text-gray-400" />
                    <p className="text-sm text-gray-600 mt-4">
                      QR Code do PIX será gerado após confirmar
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-700 font-medium">
                      💰 <strong>Com PIX:</strong> Acesso liberado imediatamente após confirmação do pagamento (após período gratuito)
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setStep('plans')}
              >
                ← Voltar
              </Button>
              <Button 
                className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3"
                onClick={handlePayment}
              >
                🚀 {paymentMethod === 'credit' ? 'Começar 7 Dias Grátis' : 'Gerar PIX e Começar'}
              </Button>
            </div>

            {/* Security Notice */}
            <div className="text-center bg-gray-50 rounded-lg p-4">
              <p className="text-xs text-gray-600">
                ✅ <strong>Garantia Total:</strong> 7 dias grátis + 30 dias para reembolso integral<br/>
                🔒 <strong>Segurança:</strong> Dados criptografados SSL 256-bits<br/>
                📞 <strong>Suporte:</strong> WhatsApp (17) 98167-9818 - Atendimento humano
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Ao confirmar, você concorda com nossos Termos de Uso e Política de Privacidade.
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
