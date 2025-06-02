
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Phone, MoreVertical } from 'lucide-react';

interface WhatsAppDemoProps {
  onTestMessage: () => void;
  testCount: number;
  maxTestCount: number;
  onMaxReached: () => void;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export const WhatsAppDemo: React.FC<WhatsAppDemoProps> = ({ 
  onTestMessage, 
  testCount, 
  maxTestCount, 
  onMaxReached 
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! 👋 Sou o assistente virtual do escritório ContaAssist Pro. Como posso ajudar você hoje?",
      sender: 'bot',
      timestamp: "14:32"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const predefinedQuestions = [
    "Quando vence meu DAS este mês?",
    "Preciso entregar DEFIS ainda?", 
    "Meu MEI está regular no governo?",
    "Qual valor do DAS para faturamento de R$ 15.000?",
    "Como emitir nota fiscal MEI?",
    "Posso mudar para Lucro Presumido?",
    "Quando vence PGDAS-D?",
    "Preciso fazer DIRF este ano?",
    "Minha empresa pode ser isenta de IRPJ?",
    "Como calcular pró-labore mínimo?",
    "Prazo para entregar ECF 2024?",
    "Posso contratar CLT sendo MEI?",
    "Limite de faturamento Simples Nacional 2024?",
    "Como regularizar débitos no FGTS?",
    "Preciso de alvará sanitário?"
  ];

  const botResponses: { [key: string]: string } = {
    "quando vence meu das": "📅 Seu DAS do Simples Nacional vence dia 20 deste mês. Valor calculado: R$ 328,50 (baseado no faturamento). Posso enviar o boleto no seu email? O pagamento pode ser feito até às 22h do dia 20 em qualquer banco! 💳",
    
    "preciso entregar defis": "📋 Ótima pergunta! Se você é MEI, não precisa entregar DEFIS. Apenas a DASN-SIMEI até 31/05/2024. Se é Simples Nacional, também não precisa. DEFIS é só para Lucro Real/Presumido com faturamento acima de R$ 300 milhões. Você está tranquilo! ✅",
    
    "meu mei está regular": "✅ Consultei aqui na Receita Federal: Seu MEI está REGULAR! ✓ DAS em dia ✓ DASN-SIMEI 2023 entregue ✓ Certificado digital válido ✓ Alvará da prefeitura vigente. Tudo certo para continuar faturando! 😊",
    
    "qual valor do das": "💰 Para faturamento de R$ 15.000 no MEI: DAS = R$ 70,60 (R$ 5,00 INSS + R$ 1,00 ICMS + R$ 64,60 ISS). Você ainda tem R$ 6.100 de margem este mês (limite MEI 2024: R$ 81.000/ano = R$ 6.750/mês). Quer dicas para otimizar?",
    
    "como emitir nota fiscal": "📄 Para NFSe do MEI: 1️⃣ Portal da prefeitura da sua cidade 2️⃣ Login com CNPJ 3️⃣ Dados do cliente 4️⃣ Descrição do serviço 5️⃣ Valor 6️⃣ Enviar! Lembre: MEI só emite nota de SERVIÇO. Produtos não precisam (até R$ 81k/ano). Posso passar o link específico da sua cidade? 🏙️",
    
    "posso mudar para lucro presumido": "🤔 Com seu faturamento atual, vamos analisar: Simples Nacional: ~10-15% vs Lucro Presumido: ~11,33%. Se você fatura mais de R$ 360k/ano E tem poucos funcionários, LP pode valer a pena. Mas cuidado: LP tem mais obrigações (IRPJ, CSLL, PIS, COFINS). Quer uma simulação detalhada? 📊",
    
    "quando vence pgdas": "📋 PGDAS-D (Simples Nacional) vence todo dia 20! Janeiro/2024 venceu 22/01 (prorrogado). Fevereiro vence 20/02. Março: 20/03. É automático pelo SICALC. Você precisa apenas conferir os dados e transmitir. Quer que eu configure alertas mensais? ⏰",
    
    "preciso fazer dirf": "📄 DIRF 2024 (ano-calendário 2023): Prazo até 28/02/2024! Se você pagou fornecedores PF acima de R$ 600/ano ou PJ qualquer valor COM imposto retido, precisa sim. MEI que só prestou serviços não precisa. Lucro Presumido/Real: obrigatório! Quer ajuda para verificar? 🔍",
    
    "minha empresa pode ser isenta": "💡 Isenção de IRPJ: Apenas para algumas situações específicas como cooperativas, entidades beneficentes, ou empresas com prejuízo fiscal. Simples Nacional já tem benefícios tributários. Lucro Real/Presumido: difícil isenção total. Quer analisar seu caso específico para otimizações legais? 📋",
    
    "como calcular pro labore": "💰 Pró-labore mínimo 2024: R$ 1.412,00 (salário mínimo). Máximo: sem limite, mas impacta no IR. Cálculo: Salário + 20% INSS empresa + 11% INSS sócio + IRRF (se aplicável). Ex: R$ 2.000 → Custo total ~R$ 2.620. Quer simulação para seu caso? 🧮",
    
    "prazo para entregar ecf": "📅 ECF 2024 (ano-base 2023): Prazo até 31/07/2024! Só para Lucro Real. Lucro Presumido: apenas se teve lucro real superior ao presumido. Simples Nacional: não precisa. MEI: não precisa. Você está em qual regime? Posso confirmar sua obrigação! ✅",
    
    "posso contratar clt": "⚠️ MEI NÃO pode contratar funcionário CLT! MEI pode ter apenas 1 funcionário que receba até 1 salário mínimo (R$ 1.412 em 2024). Se precisar de mais funcionários, deve migrar para ME/EPP. Quer simular os custos da migração? 📈",
    
    "limite de faturamento simples": "💰 Limites Simples Nacional 2024: ✓ Receita bruta: até R$ 4.800.000/ano ✓ MEI: até R$ 81.000/ano ✓ Sublimites por atividade variam ✓ Excesso = migração obrigatória. Você está em qual faixa? Posso calcular sua margem restante! 📊",
    
    "como regularizar debitos fgts": "🏦 Regularização FGTS: 1️⃣ Consulta débitos no site da Caixa 2️⃣ Gerar GRF (Guia de Recolhimento) 3️⃣ Parcelamento possível em até 60x 4️⃣ Pagamento à vista: 50% desconto nos juros. IMPORTANTE: Sem regularização não consegue certidões! Quer que eu consulte sua situação? 🔍",
    
    "preciso de alvara sanitario": "🏥 Alvará Sanitário: Obrigatório para atividades como: alimentação, saúde, beleza, farmácia, clínicas, etc. Se você é consultor, contador, advogado: NÃO precisa. Cada prefeitura tem regras próprias. Qual sua atividade? Posso verificar se é obrigatório no seu caso! 📋"
  };

  const handleSendMessage = (questionText?: string) => {
    if (testCount >= maxTestCount) {
      onMaxReached();
      return;
    }

    const textToSend = questionText || inputText;
    if (!textToSend.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: textToSend,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputText('');
    setIsTyping(true);
    onTestMessage();

    // Simulate bot response after delay
    setTimeout(() => {
      const normalizedText = textToSend.toLowerCase();
      let response = "Entendi sua pergunta! 😊 Para uma resposta mais específica sobre sua situação, preciso acessar seus dados completos no sistema. Com a versão completa do ContaAssist Pro, posso consultar sua situação em tempo real na Receita Federal, SEFAZ e outros órgãos. Quer conhecer todos os recursos? 🚀";
      
      // Find matching response
      for (const [key, value] of Object.entries(botResponses)) {
        if (normalizedText.includes(key)) {
          response = value;
          break;
        }
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white shadow-xl border-0 overflow-hidden">
        {/* WhatsApp Header */}
        <div className="bg-[#075e54] text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">CA</span>
            </div>
            <div>
              <h3 className="font-medium">ContaAssist Pro</h3>
              <p className="text-xs text-green-200">✅ Online - Respostas em 3 segundos</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Phone className="h-5 w-5" />
            <MoreVertical className="h-5 w-5" />
          </div>
        </div>

        {/* Chat Messages */}
        <CardContent className="p-0">
          <div className="h-96 overflow-y-auto bg-[#e5ddd5] p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-[#dcf8c6] text-gray-800'
                      : 'bg-white text-gray-800 shadow-sm'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-gray-600' : 'text-gray-500'
                  }`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <p className="text-sm font-medium text-gray-700 mb-3">
              💡 Perguntas mais frequentes dos contadores (clique para testar):
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {predefinedQuestions.slice(0, testCount >= maxTestCount ? 0 : 5).map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs hover:bg-blue-50 hover:border-blue-300 transition-colors"
                  onClick={() => handleSendMessage(question)}
                  disabled={testCount >= maxTestCount}
                >
                  {question}
                </Button>
              ))}
            </div>
            
            {testCount >= maxTestCount && (
              <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-orange-700 font-bold mb-2">
                  🔒 Você testou o limite gratuito!
                </p>
                <p className="text-xs text-orange-600 mb-3">
                  Para continuar testando e ter acesso completo ao ContaAssist Pro:
                </p>
                <div className="bg-white rounded-lg p-3 border border-orange-200">
                  <p className="text-sm font-bold text-green-700">✅ 7 DIAS GRÁTIS + Garantia de reembolso</p>
                  <p className="text-xs text-gray-600">Teste todos os recursos sem compromisso</p>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={testCount >= maxTestCount ? "Assine para continuar testando..." : "Digite sua pergunta sobre contabilidade..."}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-sm"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={testCount >= maxTestCount}
              />
              <Button
                onClick={() => handleSendMessage()}
                className="bg-[#25d366] hover:bg-[#20ba5a] text-white p-2 rounded-full"
                disabled={testCount >= maxTestCount || !inputText.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
