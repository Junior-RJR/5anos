import React from 'react';
import './App.css';

const App = () => {
  const handleResgatarVoucher = () => {
    // Lógica para redirecionar para o WhatsApp com a chave Pix
    const numeroWhatsapp = '11946252220';  // Substitua com o seu número
    const mensagem = 'Olá! Gostaria de resgatar o voucher do Junior Gostosão. Chave Pix:';
    const linkWhatsapp = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${encodeURIComponent(mensagem)}`;
    window.location.href = linkWhatsapp;
  };

// TESTEEEEE

  return (
    <div className="App">
      <header className="App-header">
        <h1>Feliz Aniversário de Namoro e Casamento!</h1>
        <p>Hoje comemoramos 5 anos de namoro e 3 meses de casados.</p>

        <div className="voucher">
          <h2>Voucher de Amor</h2>
          <p>Este voucher tem um valor inestimável</p>
          <p>e representa o nosso amor que vale muito mais do que</p>
          <p>R$119,99.</p>

          {/* Botão para resgatar o voucher */}
          <button className="botao-resgatar" onClick={handleResgatarVoucher}>
            Resgatar Voucher
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
