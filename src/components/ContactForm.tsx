
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    });

    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-gaya-700 font-medium">Nome *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 border-stone-300 focus:border-gaya-500 focus:ring-gaya-500 rounded-xl"
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <Label htmlFor="company" className="text-gaya-700 font-medium">Empresa *</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="mt-2 border-stone-300 focus:border-gaya-500 focus:ring-gaya-500 rounded-xl"
              placeholder="Nome da empresa"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email" className="text-gaya-700 font-medium">E-mail *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 border-stone-300 focus:border-gaya-500 focus:ring-gaya-500 rounded-xl"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-gaya-700 font-medium">Telefone</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 border-stone-300 focus:border-gaya-500 focus:ring-gaya-500 rounded-xl"
              placeholder="(11) 99999-9999"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="message" className="text-gaya-700 font-medium">Mensagem</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-2 border-stone-300 focus:border-gaya-500 focus:ring-gaya-500 rounded-xl"
            placeholder="Conte-nos sobre sua necessidade..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gaya-700 hover:bg-gaya-800 text-white py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </Button>
      </form>
    </div>
  );
};
