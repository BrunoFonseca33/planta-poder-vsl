import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import saudeImage from "@/assets/SAUDE.png";
import referenciasImage from "@/assets/referencias.png";
import medicoImage from "@/assets/medico.webp";
import mockupImage from "@/assets/mockup.webp";
import mockup2Image from "@/assets/mockup2.png";
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-health-red-dark py-4 px-4">
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
            <span className="text-health-red">NEUROCIENTISTA REVELA UMA PLANTA ESQUECIDA QUE TURBINA O CÉREBRO EM ATÉ 50%</span> — SEM REMÉDIOS OU TRATAMENTOS CAROS
          </h1>
        </div>

        {/* VSL Player */}
        <div className="px-4 mb-4">
          <div className="relative w-full max-w-md mx-auto">
            <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden">
              <iframe 
                id="panda-2e7e0156-fe09-40f3-b03d-b5ac5e3fe917" 
                src="https://player-vz-f9300885-494.tv.pandavideo.com.br/embed/?v=2e7e0156-fe09-40f3-b03d-b5ac5e3fe917" 
                style={{border: 'none'}} 
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
                allowFullScreen={true} 
                width="100%" 
                height="100%" 
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Fixed message below VSL */}
        <div className="px-4 mb-8">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="text-lg">📷</span>
            <span>Fique até o final para destravar a sua memória</span>
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
                    src={mockup2Image} 
                    alt="Kit Completo - A Planta Esquecida que Turbina o Cérebro" 
                    className="w-full max-w-sm mx-auto h-auto object-contain"
                  />
                </div>

                {/* Benefits Bullets */}
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-health-green text-xl font-bold flex-shrink-0 mt-1">✓</span>
                    <p className="text-gray-800">
                      Descubra qual é a planta esquecida usada por antigos povos para turbinar o cérebro em até <strong>50% mais foco e memória</strong>
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-health-green text-xl font-bold flex-shrink-0 mt-1">✓</span>
                    <p className="text-gray-800">
                      Guia passo a passo de como usar a planta corretamente para <strong>ativar sua mente</strong> todos os dias
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-health-green text-xl font-bold flex-shrink-0 mt-1">✓</span>
                    <p className="text-gray-800">
                      <strong>Energia mental explosiva</strong> sem café, sem remédios e sem efeitos colaterais
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-health-green text-xl font-bold flex-shrink-0 mt-1">✓</span>
                    <p className="text-gray-800">
                      Melhore sua <strong>clareza mental</strong> e raciocínio lógico em minutos
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-health-green text-xl font-bold flex-shrink-0 mt-1">✓</span>
                    <p className="text-gray-800">
                      Recupere a <strong>memória</strong> de longo prazo que parecia perdida
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-health-green text-xl font-bold flex-shrink-0 mt-1">✓</span>
                    <p className="text-gray-800">
                      Aumente sua <strong>criatividade</strong> e capacidade de resolver problemas
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-health-green text-xl font-bold flex-shrink-0 mt-1">✓</span>
                    <p className="text-gray-800">
                      Benefício oculto: muitos relatam uma sensação de <strong>bem-estar</strong> e leveza mental imediata
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-health-green text-xl font-bold flex-shrink-0 mt-1">✓</span>
                    <p className="text-gray-800">
                      Não é mágica nem placebo — é <strong>neurociência aplicada</strong> a uma planta natural
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-health-green text-xl font-bold flex-shrink-0 mt-1">✓</span>
                    <p className="text-gray-800">
                      Resultados que você pode sentir já no <strong>primeiro uso</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second CTA Block */}
            <div className="bg-health-black text-health-black-foreground py-16 px-4">
              <div className="max-w-md mx-auto text-center space-y-6">
                {/* Text above mockup */}
                <p className="text-white font-bold text-xl">
                  Tudo isso por apenas:
                </p>

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

            {/* Social Proof moved here */}
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

            {/* FAQ Section */}
            <div className="bg-white py-12 px-4">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-black mb-8">
                  Perguntas Frequentes
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left font-bold text-gray-800 hover:text-health-blue">
                      Como funciona a Planta Esquecida?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed">
                      A Planta Esquecida contém compostos bioativos que agem diretamente nos neurotransmissores responsáveis pela memória, foco e clareza mental. Estudos científicos comprovam sua eficácia em melhorar a função cognitiva de forma natural e segura.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left font-bold text-gray-800 hover:text-health-blue">
                      Em quanto tempo verei resultados?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed">
                      Muitas pessoas relatam melhorias já nas primeiras horas de uso. Os efeitos mais significativos costumam aparecer entre 7 a 14 dias de uso consistente, com benefícios duradouros ao longo do tempo.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left font-bold text-gray-800 hover:text-health-blue">
                      É seguro usar a Planta Esquecida?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed">
                      Sim, completamente seguro. É uma planta 100% natural, sem contraindicações conhecidas e sem efeitos colaterais. Ao contrário de medicamentos sintéticos, ela trabalha em harmonia com seu organismo.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left font-bold text-gray-800 hover:text-health-blue">
                      Onde consigo encontrar essa planta?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed">
                      Por ser uma planta "esquecida", ela não é encontrada facilmente. Nosso guia revela exatamente onde encontrar, como identificar a planta autêntica e o método correto de preparo para máxima eficácia.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left font-bold text-gray-800 hover:text-health-blue">
                      O que está incluído no guia?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed">
                      Você recebe o guia completo em PDF com: identificação da planta, locais onde encontrar, método de preparo, dosagem ideal, melhores horários para consumo, e dicas extras para potencializar os resultados.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Guarantee Section */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
              <div className="max-w-md mx-auto text-center space-y-6">
                {/* Guarantee Badge */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-health-green rounded-full mb-4">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-gray-800">
                  GARANTIA INCONDICIONAL
                </h3>
                
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-health-blue mb-3">
                    15 DIAS DE GARANTIA
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Se por qualquer motivo você não ficar <strong>100% satisfeito</strong> com os resultados da Planta Esquecida, nós devolvemos <strong>todo o seu dinheiro</strong> sem perguntas.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    É isso mesmo: você tem <strong>15 dias completos</strong> para testar, experimentar e comprovar os benefícios. Se não funcionar para você, basta solicitar o reembolso.
                  </p>
                  <p className="text-health-green font-bold mt-4">
                    ✓ Risco ZERO para você
                  </p>
                </div>
              </div>
            </div>

            {/* Final CTA with Scarcity */}
            <div className="bg-health-black text-health-black-foreground py-16 px-4">
              <div className="max-w-md mx-auto text-center space-y-6">
                {/* Scarcity Header */}
                <div className="bg-health-red text-health-red-foreground py-3 px-6 rounded-lg mb-6">
                  <p className="font-bold text-sm">
                    ⚠️ ATENÇÃO: OFERTA POR TEMPO LIMITADO
                  </p>
                </div>

                {/* Mockup Image */}
                <div className="mb-8">
                  <img 
                    src={mockupImage} 
                    alt="Kit Completo - A Planta Esquecida que Turbina o Cérebro" 
                    className="w-full max-w-sm mx-auto h-auto object-contain"
                  />
                </div>

                {/* Scarcity Text */}
                <div className="space-y-3 mb-6">
                  <p className="text-health-yellow font-bold text-lg">
                    ÚLTIMA CHANCE!
                  </p>
                  <p className="text-white text-sm">
                    Este preço especial de R$ 19,90 é válido apenas HOJE. Amanhã o valor volta para R$ 29,90 e em breve chegará ao preço normal de R$ 59,90.
                  </p>
                  <p className="text-health-red font-bold text-sm">
                    Não perca esta oportunidade única!
                  </p>
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

                {/* CTA Button */}
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-health-yellow hover:bg-health-yellow/90 text-health-yellow-foreground font-bold text-lg py-8 rounded-xl transition-all duration-300 transform hover:scale-105 animate-pulse"
                    onClick={() => window.open(CHECKOUT_URL, '_blank')}
                  >
                    GARANTIR MINHA PLANTA AGORA!
                  </Button>

                  {/* Payment Methods */}
                  <div className="flex flex-wrap justify-center items-center gap-3">
                    <img src={visaImage} alt="Visa" className="h-8 w-auto object-contain" />
                    <img src={masterImage} alt="Mastercard" className="h-8 w-auto object-contain" />
                    <img src={eloImage} alt="Elo" className="h-8 w-auto object-contain" />
                    <img src={pixImage} alt="PIX" className="h-8 w-auto object-contain" />
                  </div>

                  <p className="text-health-green text-xs">
                    ✓ Compra 100% Segura e Protegida
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-gray-300 py-8 px-4">
              <div className="max-w-md mx-auto text-center space-y-4">
                <div className="space-y-2">
                  <p className="text-sm">
                    © 2024 Planta Esquecida. Todos os direitos reservados.
                  </p>
                  <div className="flex justify-center space-x-6 text-xs">
                    <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                    <a href="#" className="hover:text-white transition-colors">Contato</a>
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-xs text-gray-400">
                    Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Os resultados podem variar de pessoa para pessoa.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        )}
      </div>

      {/* PandaVideo Script */}
      <script 
        dangerouslySetInnerHTML={{
          __html: `
            if(!document.querySelector('script[src="https://player.pandavideo.com.br/api.v2.js"]')){
              let s=document.createElement('script');
              s.src='https://player.pandavideo.com.br/api.v2.js'; 
              s.async=true; 
              document.head.appendChild(s);
            } 
            window.pandascripttag = window.pandascripttag || [];
            window.pandascripttag.push(function (){
              const panda_id_player = 'panda-2e7e0156-fe09-40f3-b03d-b5ac5e3fe917';
              const p=new PandaPlayer(panda_id_player,{
                onReady(){
                  p.pipScrollFollow({panda_id_player});
                }
              });
            });
          `
        }}
      />
    </div>
  );
}