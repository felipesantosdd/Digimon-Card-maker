
import './App.css';
import { CardComponent } from './components/card';
import { InfoComponent } from './components/info';
import { Provider } from './provider';

function App() {
  return (
    <Provider>
      <div className="App">

        <h5>Digimon Card Maker</h5>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', minWidth: '98vw' }}>
          <InfoComponent></InfoComponent>
          <CardComponent />
        </div>

      </div >
    </Provider >
  );
}

export default App;
