import emailjs from 'emailjs-com';
import { useState } from 'react';
import './contacto.css'
import { Redes } from '../redes/Redes'

export const Contato = () => {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_1k4133z', 
      'template_zq0d3hz', 
      form, 
      'NsK3MYmrYgbDAwZJk'
    ).then(() => {
      setStatus('Mensagem enviada com sucesso!');
      setForm({ nome: '', email: '', mensagem: '' });
    }).catch((error) => {
      setStatus('Erro ao enviar. Tente novamente.');
      console.error(error);
    });
  };

  return (
    <>
        <h2 className='h2-contacto'>Contacte-me</h2>
        <Redes/>
    <form onSubmit={sendEmail} className="form-contato">
      <input 
        type="text" 
        name="nome" 
        placeholder="Seu nome" 
        value={form.nome} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Seu email" 
        value={form.email} 
        onChange={handleChange} 
        required 
      />
      <textarea 
        name="mensagem" 
        placeholder="Sua mensagem" 
        value={form.mensagem} 
        onChange={handleChange} 
        required 
      />
      <button type="submit">Enviar</button>
      {status && <p>{status}</p>}
    </form>
  </>
  );
};
