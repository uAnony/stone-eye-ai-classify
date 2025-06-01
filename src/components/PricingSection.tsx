
import { Button } from "@/components/ui/button";

export const PricingSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gaya-800 mb-6">
            Previsível. Escalável. Transparente.
          </h2>
          <p className="text-xl text-gaya-600">
            Modelo de cobrança justo que cresce com seu negócio
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-gradient p-10 rounded-3xl shadow-xl animate-on-scroll">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gaya-800 mb-6">
                  Plano Base
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                    <span className="text-lg text-gaya-700">Até 25 mil m²/mês</span>
                    <span className="text-2xl font-bold text-gaya-800">R$ 5.000</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                    <span className="text-lg text-gaya-700">Volume excedente</span>
                    <span className="text-2xl font-bold text-gaya-800">R$ 0,25/m²</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl">
                <h4 className="text-2xl font-semibold text-gaya-800 mb-4">
                  Exemplo Prático
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gaya-600">Volume: 30 mil m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gaya-600">Base (25 mil m²):</span>
                    <span className="font-semibold">R$ 5.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gaya-600">Excedente (5 mil m²):</span>
                    <span className="font-semibold">R$ 1.250</span>
                  </div>
                  <hr className="border-gaya-200" />
                  <div className="flex justify-between text-xl font-bold text-gaya-800">
                    <span>Total:</span>
                    <span>R$ 6.250</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-gaya-500 mb-6">
                ✨ Sem fidelidade. Sem taxa de instalação.
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-gaya-700 hover:bg-gaya-800 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Solicitar Proposta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
