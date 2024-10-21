import React, { useState } from 'react';

const Entrar = () => {
  const [nickname, setNickname] = useState('');

  const handleEntrar = async () => {
    try {
      const response = await fetch('https://chat-crng.onrender.com/entrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nick: nickname })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Resposta da API:', data);

        if (data.token) {
          localStorage.setItem('token', data.token);
          console.log('Token armazenado com sucesso:', data.token);
        }
      } else {
        console.error('Erro na requisição:', response.status);
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
    }
  };

  return (
    <div>
      <h1>Entrar no Chat</h1>
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="Digite seu nick"
      />
      <button onClick={handleEntrar}>Entrar</button>
    </div>
  );
};

export default Entrar;
