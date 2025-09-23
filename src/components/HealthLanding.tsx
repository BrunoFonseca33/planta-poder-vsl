import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import saudeImage from "@/assets/SAUDE.png";
import referenciasImage from "@/assets/referencias.png";
import medicoImage from "@/assets/medico.webp";
import mockupImage from "@/assets/mockup.webp";
import comentario1Image from "@/assets/comentario1.webp";
import comentario2Image from "@/assets/comentario2.webp";
import comentario3Image from "@/assets/comentario3.webp";
import visaImage from "@/assets/visa.webp";
import masterImage from "@/assets/master.webp";
import eloImage from "@/assets/elo.webp";
import pixImage from "@/assets/pix.webp";

const CHECKOUT_URL = "https://checkout.example.com/health-brain-boost";

export default function HealthLanding() {
  const [showContent, setShowContent] = useState(false);
  const [videoTime, setVideoTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 20000); // 20 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleVideoTimeUpdate = (currentTime: number) => {
    setVideoTime(currentTime);
    if (currentTime >= 20) {
      setShowContent(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-health-red py-4 px-4">
        <div className="flex justify-center">
          <img 
            src={saudeImage} 
            alt="SAÚDE" 
            className="h-8 w-auto object-contain"
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-20 pb-8">
        {/* Headline */}
        <div className="px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-center leading-tight text-foreground">
            NEUROCIENTISTA REVELA UMA PLANTA ESQUECIDA QUE TURBINA O CÉREBRO EM ATÉ 50% — SEM REMÉDIOS OU TRATAMENTOS CAROS
          </h1>
        </div>

        {/* VSL Player */}
        <div className="px-4 mb-8">
          <div className="relative w-full max-w-md mx-auto">
            <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden">
              {/* Placeholder for VSL - In real implementation, use actual video player */}
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-sm">Carregando vídeo...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof - Initial Comments (before 20s) */}
        {!showContent && (
          <div className="px-4 space-y-4">
            <img 
              src={comentario1Image} 
              alt="Comentário de laisfernandes sobre a Planta Esquecida" 
              className="w-full max-w-md mx-auto h-auto object-contain"
            />
            <img 
              src={comentario2Image} 
              alt="Comentário de rodrigovieira sobre a Planta Esquecida" 
              className="w-full max-w-md mx-auto h-auto object-contain"
            />
            <img 
              src={comentario3Image} 
              alt="Comentário de camilasouza sobre a Planta Esquecida" 
              className="w-full max-w-md mx-auto h-auto object-contain"
            />
          </div>
        )}

        {/* Content that appears after 20 seconds */}
        {showContent && (
          <div className="space-y-0">
            {/* Main Offer Block - First CTA with Mockup */}
            <div className="bg-health-black text-health-black-foreground py-12 px-4">
              <div className="max-w-md mx-auto text-center space-y-6">
                {/* Mockup Image */}
                <div className="mb-8">
                  <img 
                    src={mockupImage} 
                    alt="Kit Completo - A Planta Esquecida que Turbina o Cérebro" 
                    className="w-full max-w-sm mx-auto h-auto object-contain"
                  />
                </div>

                {/* Pricing */}
                <div className="space-y-2">
                  <p className="text-health-red text-xl font-bold line-through">
                    VALOR NORMAL: R$59,90
                  </p>
                  <p className="text-health-green text-3xl font-bold">
                    HOJE: R$19,90
                  </p>
                  <p className="text-white text-lg">
                    AMANHÃ: R$29,90
                  </p>
                </div>

                {/* CTA Instruction */}
                <p className="text-health-yellow text-sm">
                  Clique no botão abaixo 👇 e garanta seus benefícios.
                </p>

                {/* CTA Button */}
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-health-yellow hover:bg-health-yellow/90 text-health-yellow-foreground font-bold text-lg py-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open(CHECKOUT_URL, '_blank')}
                  >
                    EU QUERO ATIVAR MINHA MENTE!
                  </Button>

                  {/* Payment Methods */}
                  <div className="flex flex-wrap justify-center items-center gap-3">
                    <img src={visaImage} alt="Visa" className="h-8 w-auto object-contain" />
                    <img src={masterImage} alt="Mastercard" className="h-8 w-auto object-contain" />
                    <img src={eloImage} alt="Elo" className="h-8 w-auto object-contain" />
                    <img src={pixImage} alt="PIX" className="h-8 w-auto object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Scientific References Block */}
            <div className="w-full">
              <img 
                src={referenciasImage} 
                alt="Referências Científicas e Estudos Clínicos" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Doctor Image Block */}
            <div className="w-full">
              <img 
                src={medicoImage} 
                alt="Dr. Gabriel Kreiman - Neurocientista" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Everything You Will Receive Section */}
            <div className="bg-white py-12 px-4">
              <div className="max-w-md mx-auto text-center space-y-8">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-black">
                  TUDO O QUE VOCÊ VAI RECEBER <span className="text-health-blue">HOJE</span>:
                </h2>
                
                {/* Subtitle */}
                <p className="text-lg italic text-gray-700">
                  A Fórmula da Planta Secreta + Guia Exclusivo
                </p>

                {/* Mockup Image */}
                <div className="my-8">
                  <img 
                    src={mockupImage} 
                    alt="Kit Completo - A Planta Esquecida que Turbina o Cérebro" 
                    className="w-full max-w-sm mx-auto h-auto object-contain"
                  />
                </div>

                {/* Benefits Bullets */}
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-health-green text-xl font-bold flex-shrink-0 mt-1">✓</span>
                    <p className="text-gray-800">
                      Descubra qual é a planta esquecida usada por antigos povos para turbinar o cérebro em até 50% mais foco e memória
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-health-green text-xl font-bold flex-shrink-0 mt-1">✓</span>
                    <p className="text-gray-800">
                      Guia passo a passo de como usar a planta corretamente para ativar sua mente todos os dias
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-health-green text-xl font-bold flex-shrink-0 mt-1">✓</span>
                    <p className="text-gray-800">
                      Energia mental explosiva sem café, sem remédios e sem efeitos colaterais
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-health-green text-xl font-bold flex-shrink-0 mt-1">✓</span>
                    <p className="text-gray-800">
                      Melhore sua clareza mental e raciocínio lógico em minutos
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-health-green text-xl font-bold flex-shrink-0 mt-1">✓</span>
                    <p className="text-gray-800">
                      Recupere a memória de longo prazo que parecia perdida
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-health-green text-xl font-bold flex-shrink-0 mt-1">✓</span>
                    <p className="text-gray-800">
                      Aumente sua criatividade e capacidade de resolver problemas
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-health-green text-xl font-bold flex-shrink-0 mt-1">✓</span>
                    <p className="text-gray-800">
                      Benefício oculto: muitos relatam uma sensação de bem-estar e leveza mental imediata
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-health-green text-xl font-bold flex-shrink-0 mt-1">✓</span>
                    <p className="text-gray-800">
                      Não é mágica nem placebo — é neurociência aplicada a uma planta natural
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-health-green text-xl font-bold flex-shrink-0 mt-1">✓</span>
                    <p className="text-gray-800">
                      Resultados que você pode sentir já no primeiro uso
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second CTA Block */}
            <div className="bg-health-black text-health-black-foreground py-12 px-4">
              <div className="max-w-md mx-auto text-center space-y-6">
                {/* Mockup Image */}
                <div className="mb-8">
                  <img 
                    src={mockupImage} 
                    alt="Kit Completo - A Planta Esquecida que Turbina o Cérebro" 
                    className="w-full max-w-sm mx-auto h-auto object-contain"
                  />
                </div>

                {/* Pricing */}
                <div className="space-y-2">
                  <p className="text-health-red text-xl font-bold line-through">
                    VALOR NORMAL: R$59,90
                  </p>
                  <p className="text-health-green text-3xl font-bold">
                    HOJE: R$19,90
                  </p>
                  <p className="text-white text-lg">
                    AMANHÃ: R$29,90
                  </p>
                </div>

                {/* CTA Instruction */}
                <p className="text-health-yellow text-sm">
                  Clique no botão abaixo 👇 e garanta seus benefícios.
                </p>

                {/* CTA Button */}
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-health-yellow hover:bg-health-yellow/90 text-health-yellow-foreground font-bold text-lg py-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open(CHECKOUT_URL, '_blank')}
                  >
                    EU QUERO ATIVAR MINHA MENTE!
                  </Button>

                  {/* Payment Methods */}
                  <div className="flex flex-wrap justify-center items-center gap-3">
                    <img src={visaImage} alt="Visa" className="h-8 w-auto object-contain" />
                    <img src={masterImage} alt="Mastercard" className="h-8 w-auto object-contain" />
                    <img src={eloImage} alt="Elo" className="h-8 w-auto object-contain" />
                    <img src={pixImage} alt="PIX" className="h-8 w-auto object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof at the Bottom (moved from initial position) */}
            <div className="px-4 py-8 space-y-4 bg-gray-50">
              <h3 className="text-center text-lg font-bold text-gray-800 mb-6">
                Veja o que nossos clientes estão dizendo:
              </h3>
              <img 
                src={comentario1Image} 
                alt="Comentário de laisfernandes sobre a Planta Esquecida" 
                className="w-full max-w-md mx-auto h-auto object-contain"
              />
              <img 
                src={comentario2Image} 
                alt="Comentário de rodrigovieira sobre a Planta Esquecida" 
                className="w-full max-w-md mx-auto h-auto object-contain"
              />
              <img 
                src={comentario3Image} 
                alt="Comentário de camilasouza sobre a Planta Esquecida" 
                className="w-full max-w-md mx-auto h-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}