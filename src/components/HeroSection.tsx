
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 marble-bg overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gaya-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-stone-300 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-accent opacity-25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6">
            <span className="inline-block text-gaya-600 text-lg font-medium tracking-wide uppercase mb-4">
              🌿 Inovação em Rochas Ornamentais
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gaya-800 mb-6 leading-tight">
            <span className="text-accent">STONE EYE</span>
            <br />
            <span className="text-4xl md:text-5xl font-medium">
              Inteligência Artificial para a nova era do mármore e granito
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gaya-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Classificação precisa, rápida e padronizada com visão computacional. 
            Automatize a análise de chapas e transforme sua produção.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gaya-700 hover:bg-gaya-800 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              📍 Agendar Demonstração
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gaya-700 text-gaya-700 hover:bg-gaya-700 hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-300"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Saiba Mais
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gaya-500" />
        </div>
      </div>
    </section>
  );
};
