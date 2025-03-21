'use client';

// import axios from "axios";
// import Image from "next/image";
// import React, { useState } from "react";

const Contact: React.FC = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const [status, setStatus] = useState<string | null>(null);
  // const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

  //   const { name, value } = e.target;

  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });

  //   setStatus('')
  // }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   const { email, message, name } = formData;
  //   if (!name?.trim() || !email?.trim() || !message?.trim()) {
  //     setStatus("Todos os campos são obrigatórios!");
  //     return
  //   }

  //   try {
  //     await axios.post('/api/send-email', {
  //       name,
  //       email,
  //       message
  //     });

  //     setFormSubmitted(true);
  //     setFormData({
  //       name: '',
  //       email: '',
  //       message: ''
  //     })

  //   } catch (error) {
  //     setStatus('Erro ao enviar a mensagem. Tente novamente.');
  //     console.error(error);
  //   }
  //   finally {
  //     setIsLoading(false);
  //   }
  // }

  return (
    <div >
      {/* Ícone do Mapa (Placeholder) */}
      <div className="flex justify-center mb-8">
        <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
      </div>


      {/* Formulário */}
      <form>
        {/* Campo de Nome Completo */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full bg-[#333] border border-[#555] rounded-md p-1 focus:outline-none focus:border-blue-500"
          />

          {/* w-full bg-[#333] border border-[#555] rounded-md p-1 focus:outline-none focus:border-blue-500 */}
          <p className="text-red-500 text-sm mt-1">Fill in the field</p>
        </div>

        {/* Campo de Email */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-[#333] border border-[#555] rounded-md p-2 px-3 focus:outline-none focus:border-blue-500"
          />
          <p className="text-red-500 text-sm mt-1">Email is incorrect</p>
        </div>

        {/* Campo de Mensagem */}
        <div className="mb-6">
          <textarea
            placeholder="Your Message"
            className="w-full bg-[#333] border border-[#555] rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            rows={4}
          ></textarea>
          <p className="text-red-500 text-sm mt-1">Full in the field</p>
        </div>

        {/* Botão de Enviar */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md flex items-center justify-center w-full"
        >
          <span className="mr-2">Send Message</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-2.293 2.293a1 1 0 101.414 1.414l3-3A1 1 0 0013.707 9.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default Contact