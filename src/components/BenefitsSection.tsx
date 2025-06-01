
import { Check } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: "✨",
      title: "Padronização da qualidade",
      description: "Critérios uniformes em toda a produção"
    },
    {
      icon: "✂️",
      title: "Redução de retrabalho",
      description: "Menor desperdício e custos operacionais"
    },
    {
      icon: "📈",
      title: "Mais eficiência",
      description: "Processo mais rápido e produtivo"
    },
    {
      icon: "🤝",
      title: "Confiança do cliente final",
      description: "Entrega consistente de qualidade"
    }
  ];

  return (
    <section className="py-20 bg-gaya-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gaya-800 mb-6">
            Resultados que você sente no chão de fábrica
          </h2>
          <p className="text-xl text-gaya-600">
            Benefícios diretos para sua operação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gaya-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gaya-600 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="mt-4">
                  <Check className="w-6 h-6 text-green-500 mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
