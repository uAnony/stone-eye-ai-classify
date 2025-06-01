
import { Check } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-stone-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gaya-800 mb-6">
              Vamos conversar?
            </h2>
            <p className="text-xl text-gaya-600">
              Entre em contato e descubra como a STONE EYE pode transformar sua produção
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-on-scroll">
              <ContactForm />
            </div>
            
            <div className="space-y-8 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gaya-800 mb-6">
                  Outras formas de contato
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gaya-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <p className="font-medium text-gaya-800">E-mail</p>
                      <p className="text-gaya-600">contato@stoneeye.ai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gaya-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">💬</span>
                    </div>
                    <div>
                      <p className="font-medium text-gaya-800">WhatsApp</p>
                      <p className="text-gaya-600">Clique no botão flutuante</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gaya-800 mb-4">
                  Por que escolher a STONE EYE?
                </h3>
                <ul className="space-y-3 text-gaya-600">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Tecnologia 100% nacional</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Suporte técnico especializado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Implementação rápida</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>ROI comprovado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
