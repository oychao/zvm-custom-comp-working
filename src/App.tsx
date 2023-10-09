import { Display } from './components/Display';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div style={{ height: '60px', width: '60px' }}>
        <Display
          globalData={{}}
          setGlobalData={() => {
            //
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
