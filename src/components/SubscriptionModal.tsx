
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, CreditCard, QrCode, X } from 'lucide-react';

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
      period: 'mês',
      trialText: '7 dias grátis'
    },
    yearly: {
      price: 67,
      period: 'mês',
      yearlyTotal: 804,
      trialText: '7 dias grátis'
    }
  };

  const features = [
    'Atendimento 24h via WhatsApp',
    'Respostas sobre legislação brasileira',
    'Integração Receita Federal e SEFAZ',
    'Alertas de vencimentos automáticos',
    'Cálculos de impostos (DAS, IRPJ, CSLL)',
    'Suporte técnico especializado',
    'Atualizações legislativas'
  ];

  const handleContinue = () => {
    setStep('payment');
  };

  const handlePayment = () => {
    alert(`Assinatura ativada com sucesso! 

✅ Seus 7 dias grátis começam agora
📧 Instruções enviadas para seu email
📱 WhatsApp configurado em até 30 minutos
🔄 Garantia de reembolso em 30 dias

Bem-vindo ao ContaAssist Pro!`);
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
          <DialogTitle className="text-2xl font-bold text-center pr-8 text-slate-900">
            {step === 'plans' ? 'Escolha seu Plano - 7 Dias Grátis' : 'Finalizar Assinatura'}
          </DialogTitle>
        </DialogHeader>

        {step === 'plans' && (
          <div className="space-y-6">
            {/* Plan Selection */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card 
                className={`cursor-pointer transition-all ${
                  selectedPlan === 'monthly' ? 'border-blue-500 bg-blue-50 shadow-lg' : 'border-slate-200 hover:border-slate-300'
                }`}
                onClick={() => setSelectedPlan('monthly')}
              >
                <CardHeader className="text-center">
                  <Badge variant="outline" className="mx-auto mb-2 bg-blue-100 text-blue-700">
                    {plans.monthly.trialText}
                  </Badge>
                  <CardTitle className="text-lg text-slate-900">Plano Mensal</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-slate-900">R$ {plans.monthly.price}</span>
                      <span className="text-slate-600 ml-1">/{plans.monthly.period}</span>
                    </div>
                    <p className="text-sm text-slate-600 mt-2">
                      Flexibilidade para cancelar quando quiser
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card 
                className={`cursor-pointer transition-all relative ${
                  selectedPlan === 'yearly' ? 'border-blue-500 bg-blue-50 shadow-lg' : 'border-slate-200 hover:border-slate-300'
                }`}
                onClick={() => setSelectedPlan('yearly')}
              >
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1">
                  MAIS ECONOMIA
                </Badge>
                <CardHeader className="text-center pt-6">
                  <Badge variant="outline" className="mx-auto mb-2 bg-blue-100 text-blue-700">
                    {plans.yearly.trialText}
                  </Badge>
                  <CardTitle className="text-lg text-slate-900">Plano Anual</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-slate-900">R$ {plans.yearly.price}</span>
                      <span className="text-slate-600 ml-1">/{plans.yearly.period}</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      R$ {plans.yearly.yearlyTotal}/ano - pago anualmente
                    </p>
                    <p className="text-sm text-blue-600 font-medium mt-1">
                      Economia de 31% vs mensal
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Features */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg text-center text-slate-900">Incluído em todos os planos:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Guarantees */}
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-slate-900 mb-4">Garantias de Segurança</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-600">
                <div>
                  <span className="font-medium">🔒 Dados Seguros</span>
                  <p>Criptografia SSL 256-bits</p>
                </div>
                <div>
                  <span className="font-medium">✅ 7 Dias Grátis</span>
                  <p>Teste sem compromisso</p>
                </div>
                <div>
                  <span className="font-medium">💸 Garantia 30 dias</span>
                  <p>Dinheiro de volta</p>
                </div>
              </div>
            </div>

            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
              onClick={handleContinue}
            >
              CONTINUAR - {selectedPlan === 'monthly' ? 'Plano Mensal' : 'Plano Anual'}
            </Button>
          </div>
        )}

        {step === 'payment' && (
          <div className="space-y-6">
            {/* Order Summary */}
            <Card className="bg-slate-50 border-slate-200">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">Resumo do Pedido</h3>
                  <p className="text-slate-600">Você só será cobrado após os 7 dias grátis</p>
                </div>
                <div className="flex justify-between items-center bg-white rounded-lg p-4 border">
                  <div>
                    <p className="font-medium text-slate-900">
                      ContaAssist Pro - {selectedPlan === 'monthly' ? 'Mensal' : 'Anual'}
                    </p>
                    <p className="text-sm text-slate-600">
                      7 dias grátis, depois R$ {selectedPlan === 'yearly' ? plans.yearly.yearlyTotal : plans[selectedPlan].price}
                      {selectedPlan === 'monthly' ? '/mês' : '/ano'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-xl text-slate-900">R$ 0,00</p>
                    <p className="text-sm text-slate-600">hoje</p>
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
                    <Input id="cardName" placeholder="Nome completo" />
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
              </TabsContent>

              <TabsContent value="pix" className="space-y-4">
                <div className="text-center space-y-4">
                  <div className="bg-slate-100 p-8 rounded-lg">
                    <QrCode className="h-24 w-24 mx-auto text-slate-400" />
                    <p className="text-sm text-slate-600 mt-4">
                      QR Code será gerado após confirmação
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
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                onClick={handlePayment}
              >
                {paymentMethod === 'credit' ? 'CONFIRMAR ASSINATURA' : 'GERAR PIX'}
              </Button>
            </div>

            {/* Security Notice */}
            <div className="text-center bg-slate-50 rounded-lg p-4">
              <p className="text-xs text-slate-600">
                🔒 <strong>Transação Segura:</strong> Dados protegidos por criptografia SSL 256-bits<br/>
                ✅ <strong>Garantia:</strong> 7 dias grátis + 30 dias para reembolso<br/>
                📞 <strong>Suporte:</strong> (17) 98167-9818
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
