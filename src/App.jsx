import './App.css';
import Card from './components/card/Card';
import db from './vendor/data/data.json';

function App() {
  return (
    <div className="App">
      <main className="main">
        <h1 className='title'>Ты сегодня покормил кота?</h1>
        <div className="cards">
          {db.map((card) => (
            <Card card={card} key={card._id}/>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;