import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Sair = () => {
  const [idUser, setIdUser] = useState('');
  const [nick, setNick] = useState(''); 
  const [message, setMessage] = useState(''); 
  const navigate = useNavigate(); 

  const handleSair = async () => {
    const token = localStorage.getItem('token'); 

    try {
      const response = await fetch(`https://chat-crng.onrender.com/sair-user?idUser=${idUser}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token 
        },
        body: JSON.stringify({ idUser, nick }) 
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Resposta da API:', data);
        setMessage('Você saiu do chat com sucesso!');
 
        setIdUser('');
        setNick('');
        
        
        navigate('/salas'); 
      } else {
        console.error('Erro na requisição:', response.status);
        setMessage(`Erro ao sair: ${response.status}`);
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
      setMessage('Erro de conexão com o servidor.');
    }
  };

  return (
    <div>
      <h1>Sair do Chat</h1>
      <input
        type="text"
        value={idUser}
        onChange={(e) => setIdUser(e.target.value)}
        placeholder="Digite seu ID de usuário"
      />
      <input
        type="text"
        value={nick}
        onChange={(e) => setNick(e.target.value)} 
        placeholder="Digite seu Nick"
      />
      <button onClick={handleSair}>Sair</button>
      {message && <p>{message}</p>} 
    </div>
  );
};

export default Sair;
