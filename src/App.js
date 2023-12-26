import React from 'react';
import './App.css';

function App() {
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
        </div>

        {/* <div className="personal-message">
          <p>Quero expressar o quanto sou feliz ao lado da minha amada Rebeca.</p>
          <p>As bênçãos que Deus tem feito por nós são inúmeras, e confiamos que Ele continuará abençoando nossa união.</p>
          <p>Com amor, Para minha marrentinha</p>
        </div> */}
      </header>
    </div>
  );
}

export default App;
