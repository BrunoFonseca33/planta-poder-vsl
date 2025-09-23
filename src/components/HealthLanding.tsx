import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import saudeImage from "@/assets/SAUDE.png";
import referenciasImage from "@/assets/referencias.png";
import visaImage from "@/assets/visa.webp";
import masterImage from "@/assets/master.webp";
import eloImage from "@/assets/elo.webp";
import pixImage from "@/assets/pix.webp";
import doctorImage from "@/assets/doctor.jpg";

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

        {/* Social Proof */}
        <div className="px-4 mb-8">
          <div className="space-y-4">
            <div className="bg-card p-4 rounded-lg shadow-sm border">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-health-blue rounded-full flex items-center justify-center text-white font-semibold">
                  M
                </div>
                <div>
                  <p className="font-semibold text-sm">Maria Santos</p>
                  <p className="text-sm text-muted-foreground">
                    "Incrível! Em 2 semanas já senti minha memória muito mais aguçada. Recomendo!"
                  </p>
                  <div className="flex text-health-yellow text-xs mt-1">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-4 rounded-lg shadow-sm border">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-health-blue rounded-full flex items-center justify-center text-white font-semibold">
                  J
                </div>
                <div>
                  <p className="font-semibold text-sm">João Lima</p>
                  <p className="text-sm text-muted-foreground">
                    "Aos 65 anos, voltei a ter o foco que tinha aos 30. Simplesmente fantástico!"
                  </p>
                  <div className="flex text-health-yellow text-xs mt-1">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content that appears after 20 seconds */}
        {showContent && (
          <div className="space-y-8">
            {/* Scientific References Block */}
            <div className="px-2">
              <div className="w-full">
                <img 
                  src={referenciasImage} 
                  alt="Referências Científicas e Estudos Clínicos" 
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Doctor Specialist Block */}
            <div className="px-4">
              <Card className="p-6 shadow-lg border-2">
                <div className="text-center space-y-4">
                  <div className="relative w-24 h-24 mx-auto">
                    <img 
                      src={doctorImage} 
                      alt="Dr. Ricardo Silva" 
                      className="w-full h-full object-cover rounded-full border-4 border-health-blue"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Dr. Ricardo Silva
                    </h3>
                    <p className="text-health-blue font-semibold">
                      Neurocientista
                    </p>
                  </div>
                  
                  <blockquote className="italic text-lg text-muted-foreground">
                    "Sua mente nunca foi feita para desaparecer — é hora de trazê-la de volta à vida."
                  </blockquote>
                  
                  <div className="flex flex-wrap justify-center gap-2 text-xs">
                    <span className="bg-health-blue text-health-blue-foreground px-2 py-1 rounded-full">
                      +20 anos de pesquisa
                    </span>
                    <span className="bg-health-blue text-health-blue-foreground px-2 py-1 rounded-full">
                      Neurociência aplicada
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Offer Block */}
            <div className="bg-health-black text-health-black-foreground py-8 px-4">
              <div className="max-w-md mx-auto text-center space-y-6">
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
                    SIM, EU QUERO ATIVAR MINHA MENTE!
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

            {/* Delivery Copy */}
            <div className="px-4 py-6 bg-card">
              <div className="max-w-md mx-auto text-center space-y-4">
                <h4 className="text-lg font-bold text-foreground mb-4">
                  O que você vai receber:
                </h4>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-health-green rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">
                      Material especial com o Protocolo de 7 dias da Planta Esquecida
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-health-green rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">
                      Como usar no horário certo do dia
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-health-green rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">
                      Formas simples de incluir na rotina para foco e memória
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}