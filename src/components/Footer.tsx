
export const Footer = () => {
  return (
    <footer className="bg-gaya-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-playfair mb-4">
              🌿 STONE EYE
            </h3>
            <p className="text-gaya-200 leading-relaxed">
              Inteligência Artificial para a nova era do mármore e granito. 
              Transformando a classificação de rochas ornamentais.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-gaya-200">
              <li><a href="#about" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Preços</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gaya-200">
              <li>📧 contato@stoneeye.ai</li>
              <li>💬 WhatsApp disponível</li>
              <li>🏢 São Paulo, Brasil</li>
            </ul>
          </div>
        </div>

        <hr className="border-gaya-600 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gaya-300 text-sm">
            © 2024 STONE EYE. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-gaya-300 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
