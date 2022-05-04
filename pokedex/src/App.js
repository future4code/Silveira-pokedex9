import GlobalState from './context/GlobalState';
import { Router } from './routes/Routes';

function App() {
  return (
    <div>
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;