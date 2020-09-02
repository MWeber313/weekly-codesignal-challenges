import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my calculator</h1>
        <div class="container">
          <h2>Calculator</h2?>
          <div class="calculator">
            {/*This is the input window, clear key and division key */}
            <div class="calc-input"><p></p></div>
            <div class="calc-input"><p></p></div>
            <div class="calc-input"><p></p></div>
            {/*This is the first row (7-9 plux mult) of keys*/}
            <div class="calc-input"><p></p></div>
            <div class="calc-input"><p></p></div>
            <div class="calc-input"><p></p></div>
            <div class="calc-input"><p></p></div>
            {/*This is the second row (4-6 plus subtract) of keys */}
            <div class="calc-input"><p></p></div>
            <div class="calc-input"><p></p></div>
            <div class="calc-input"><p></p></div>
            <div class="calc-input"><p></p></div>
            {/*This is the third row (1-3 plus addition) of keys */}
            <div class="calc-input"><p></p></div>
            <div class="calc-input"><p></p></div>
            <div class="calc-input"><p></p></div>
            <div class="calc-input"><p></p></div>
            {/*This is the zero key and the sum key */}
            <div class="calc-input"><p></p></div>
            <div class="calc-input"><p></p></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
