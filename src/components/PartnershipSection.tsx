
import { Button } from "@/components/ui/button";

export const PartnershipSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gaya-800 mb-8">
            Faça parte da inovação desde o início
          </h2>
          
          <div className="bg-gradient-to-r from-stone-100 to-gaya-100 p-10 rounded-3xl shadow-xl">
            <p className="text-xl text-gaya-700 leading-relaxed mb-8">
              Estamos validando nosso MVP com empresas selecionadas. 
              Oferecemos <strong className="text-gaya-800">condições exclusivas</strong> e 
              <strong className="text-gaya-800"> suporte personalizado</strong> nessa fase.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold text-gaya-800 mb-2">🎯 Condições Especiais</h4>
                <p className="text-sm text-gaya-600">Preços diferenciados para primeiros adotantes</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold text-gaya-800 mb-2">🛠 Suporte Dedicado</h4>
                <p className="text-sm text-gaya-600">Acompanhamento direto com nossa equipe</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold text-gaya-800 mb-2">🚀 Influência no Produto</h4>
                <p className="text-sm text-gaya-600">Suas necessidades moldam nossa evolução</p>
              </div>
            </div>
            
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-accent hover:bg-stone-600 text-gaya-800 hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📍 Quero Ser Parceiro
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
