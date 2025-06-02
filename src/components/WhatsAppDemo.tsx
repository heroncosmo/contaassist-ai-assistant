
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
      text: "Olá! 👋 Sou o assistente virtual do escritório. Como posso ajudar?",
      sender: 'bot',
      timestamp: "14:32"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const predefinedQuestions = [
    "Quando vence meu DAS este mês?",
    "Preciso entregar DEFIS?", 
    "Meu MEI está regular?",
    "Qual valor do DAS para faturamento de R$ 5.000?",
    "Como emitir nota fiscal MEI?"
  ];

  const botResponses: { [key: string]: string } = {
    "quando vence meu das": "📅 O DAS do Simples Nacional vence todo dia 20 de cada mês. Para este mês, o vencimento é 20/01/2024. Posso te ajudar com o cálculo se precisar! 😊",
    "preciso entregar defis": "📋 A DEFIS (Declaração de Informações Socioeconômicas e Fiscais) deve ser entregue até 31 de março. Como você é MEI, essa declaração é obrigatória para manter sua regularidade. Quer que eu te explique o passo a passo?",
    "meu mei está regular": "✅ Verifiquei aqui e seu MEI está REGULAR! Última atualização: 15/01/2024. Suas obrigações estão em dia: ✓ DAS em dia ✓ DASN-SIMEI 2023 entregue ✓ Alvará vigente",
    "qual valor do das": "💰 Para faturamento de R$ 5.000 no MEI: DAS = R$ 67,00 (R$ 5,00 INSS + R$ 1,00 ICMS + R$ 61,00 ISS). Você ainda tem R$ 3.000 de margem este mês (limite MEI: R$ 8.100/mês). Precisa de mais alguma coisa?",
    "como emitir nota fiscal": "📄 Para emitir nota fiscal MEI: 1️⃣ Acesse o portal da prefeitura da sua cidade 2️⃣ Entre com seu CNPJ 3️⃣ Preencha os dados do cliente 4️⃣ Envie! Lembre-se: MEI só emite NFSe (serviços). Para produtos, não precisa de nota. Posso te passar o link do portal?"
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
      let response = "Entendi sua pergunta! Para uma resposta mais específica sobre sua situação, preciso acessar seus dados. Com a versão completa, posso consultar sua situação em tempo real. 😊";
      
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
              <p className="text-xs text-green-200">✅ Online - Sempre disponível</p>
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
              💡 Perguntas mais comuns (clique para testar):
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {predefinedQuestions.slice(0, testCount >= maxTestCount ? 0 : 3).map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs hover:bg-blue-50 hover:border-blue-300"
                  onClick={() => handleSendMessage(question)}
                  disabled={testCount >= maxTestCount}
                >
                  {question}
                </Button>
              ))}
            </div>
            
            {testCount >= maxTestCount && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-orange-700 font-medium">
                  🔒 Você atingiu o limite de testes gratuitos!
                </p>
                <p className="text-xs text-orange-600 mt-1">
                  Assine agora para acesso ilimitado e integração com seu WhatsApp
                </p>
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
                placeholder={testCount >= maxTestCount ? "Assine para continuar testando..." : "Digite sua pergunta..."}
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
