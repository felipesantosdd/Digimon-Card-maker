
import './App.css';
import { CardComponent } from './components/card';
import { InfoComponent } from './components/info';
import { Provider } from './provider';

function App() {
  return (
    <Provider>
      <div className="App">
        <h1>Digimon Card Maker</h1>
        <div style={{ height: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
          <InfoComponent></InfoComponent>
          <CardComponent />
        </div>
      </div >
    </Provider >
  );
}

export default App;
