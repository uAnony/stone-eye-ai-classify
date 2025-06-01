
import { Search, Camera } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Detecção automática de defeitos",
      description: "Identifica mulas, veios, largadas e barbantes com precisão"
    },
    {
      icon: Camera,
      title: "Análise de imagem com câmeras ",
      description: "Flexibilidade total para usar equipamentos existentes"
    },
    {
      icon: "⚡",
      title: "Interface rápida e intuitiva",
      description: "Design pensado para operadores do chão de fábrica"
    },
    {
      icon: "🤝",
      title: "Suporte técnico e onboarding guiado",
      description: "Acompanhamento completo na implementação"
    }
  ];

  return (
    <section className="py-20 bg-stone-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gaya-800 mb-6">
            O que entregamos
          </h2>
          <p className="text-xl text-gaya-600 max-w-2xl mx-auto">
            Uma solução completa para revolucionar sua linha de produção
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                {typeof feature.icon === 'string' ? (
                  <span className="text-4xl mb-4 block">{feature.icon}</span>
                ) : (
                  <feature.icon className="w-12 h-12 text-gaya-600 mx-auto mb-4" />
                )}
                <h3 className="text-xl font-semibold text-gaya-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gaya-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
