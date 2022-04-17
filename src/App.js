import Header from './components/Header';
import Middle from './components/Middle';
import './App.css';

function App() {
  return (
    <div className="App">
      <header> 
        <Header/>  
      </header>
      <section>
        <Middle/>
      </section>
    </div>
  );
}

export default App;
