
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, CreditCard, QrCode, Shield, Clock, Users, TrendingUp, X } from 'lucide-react';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isOpen, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'pix'>('credit');
  const [step, setStep] = useState<'plans' | 'payment'>('plans');

  const plans = {
    monthly: {
      price: 97,
      originalPrice: 197,
      period: 'mês',
      discount: '50% OFF',
      savings: 'R$ 100/mês'
    },
    yearly: {
      price: 67,
      originalPrice: 197,
      period: 'mês',
      discount: '65% OFF',
      savings: 'R$ 1.560/ano',
      yearlyTotal: 804,
      originalYearlyTotal: 2364
    }
  };

  const features = [
    'Atendimento 24/7 no WhatsApp',
    'Respostas sobre legislação atualizada',
    'Integração com eSocial e DCTFWeb',
    'Alertas de vencimentos automáticos',
    'Relatórios de atendimento',
    'Suporte técnico brasileiro',
    'Treinamento da equipe incluído',
    'Atualizações automáticas'
  ];

  const handleContinue = () => {
    setStep('payment');
  };

  const handlePayment = () => {
    // Simulate payment processing
    alert('Pagamento processado com sucesso! Você receberá as instruções de instalação por email em até 5 minutos.');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <DialogTitle className="text-2xl font-bold text-center pr-8">
            {step === 'plans' ? 'Escolha seu Plano' : 'Finalizar Assinatura'}
          </DialogTitle>
        </DialogHeader>

        {step === 'plans' && (
          <div className="space-y-6">
            {/* Limited Time Offer */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg text-center">
              <p className="font-bold text-lg">🔥 OFERTA LIMITADA</p>
              <p className="text-sm">Apenas para os primeiros 100 escritórios este mês!</p>
            </div>

            {/* Plan Selection */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card 
                className={`cursor-pointer border-2 transition-all ${
                  selectedPlan === 'monthly' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
                onClick={() => setSelectedPlan('monthly')}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Plano Mensal</CardTitle>
                      <CardDescription>Flexibilidade total</CardDescription>
                    </div>
                    <Badge variant="destructive">{plans.monthly.discount}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold">R$ {plans.monthly.price}</span>
                      <span className="text-gray-500">/{plans.monthly.period}</span>
                    </div>
                    <p className="text-sm text-gray-500 line-through">
                      R$ {plans.monthly.originalPrice}/{plans.monthly.period}
                    </p>
                    <p className="text-green-600 font-medium">{plans.monthly.savings} de economia</p>
                  </div>
                </CardContent>
              </Card>

              <Card 
                className={`cursor-pointer border-2 transition-all relative ${
                  selectedPlan === 'yearly' ? 'border-green-500 bg-green-50' : 'border-gray-200'
                }`}
                onClick={() => setSelectedPlan('yearly')}
              >
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-600">
                  MAIS POPULAR
                </Badge>
                <CardHeader className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Plano Anual</CardTitle>
                      <CardDescription>Melhor custo-benefício</CardDescription>
                    </div>
                    <Badge variant="destructive">{plans.yearly.discount}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold">R$ {plans.yearly.price}</span>
                      <span className="text-gray-500">/{plans.yearly.period}</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      (R$ {plans.yearly.yearlyTotal}/ano)
                    </p>
                    <p className="text-sm text-gray-500 line-through">
                      R$ {plans.yearly.originalYearlyTotal}/ano
                    </p>
                    <p className="text-green-600 font-medium">{plans.yearly.savings} de economia</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">O que está incluído:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Guarantees */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-sm">7 dias grátis</p>
                <p className="text-xs text-gray-500">Teste sem compromisso</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-sm">Cancele quando quiser</p>
                <p className="text-xs text-gray-500">Sem multas ou taxas</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-sm">Suporte brasileiro</p>
                <p className="text-xs text-gray-500">Equipe especializada</p>
              </div>
            </div>

            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
              onClick={handleContinue}
            >
              Continuar com {selectedPlan === 'monthly' ? 'Plano Mensal' : 'Plano Anual'} - R$ {plans[selectedPlan].price}/{plans[selectedPlan].period}
            </Button>
          </div>
        )}

        {step === 'payment' && (
          <div className="space-y-6">
            {/* Order Summary */}
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">
                      ContaAssist Pro - {selectedPlan === 'monthly' ? 'Mensal' : 'Anual'}
                    </p>
                    <p className="text-sm text-gray-500">
                      {selectedPlan === 'yearly' && '12 meses com '}
                      {plans[selectedPlan].discount} desconto
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">
                      R$ {selectedPlan === 'yearly' ? plans.yearly.yearlyTotal : plans[selectedPlan].price}
                      {selectedPlan === 'monthly' && '/mês'}
                    </p>
                    <p className="text-sm text-gray-500 line-through">
                      R$ {selectedPlan === 'yearly' ? plans.yearly.originalYearlyTotal : plans.monthly.originalPrice}
                    </p>
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
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700">
                    🔒 Pagamento 100% seguro. Seus dados são criptografados.
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
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-sm text-blue-700">
                      💰 Com PIX você recebe acesso imediato após a confirmação do pagamento
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
                Voltar
              </Button>
              <Button 
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                onClick={handlePayment}
              >
                {paymentMethod === 'credit' ? 'Finalizar Pagamento' : 'Gerar PIX'}
              </Button>
            </div>

            {/* Security Notice */}
            <div className="text-center">
              <p className="text-xs text-gray-500">
                Ao finalizar, você concorda com nossos Termos de Uso e Política de Privacidade.
                <br />
                Cobrança processada por ContaAssist Pro LTDA - CNPJ: 00.000.000/0001-00
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
