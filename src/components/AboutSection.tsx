
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gaya-800 mb-8">
            O que é a STONE EYE?
          </h2>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gaya-600 leading-relaxed mb-8">
              A STONE EYE é uma solução com IA criada para transformar o setor de rochas ornamentais. 
              Com análise de imagem, ela detecta automaticamente defeitos como <strong className="text-gaya-800">mulas, veios, largadas e barbantes</strong> — 
              e classifica as chapas com rapidez e precisão.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-stone-gradient p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gaya-800 mb-4">
                🔬 Sistema de IA para classificação de chapas por imagem
              </h3>
              <p className="text-gaya-600">
                Tecnologia avançada que analisa e processa imagens em tempo real.
              </p>
            </div>
            
            <div className="bg-gaya-gradient p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gaya-800 mb-4">
                Integrado com seu estudio.
              </h3>
              <p className="text-gaya-600">
                Integração simples com equipamentos que você já possui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
