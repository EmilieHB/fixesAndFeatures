import { Typography } from '@mui/material';
import './App.css';
import { RequestPanel } from './components/RequestPanel/RequestPanel';
import { AddButton } from './components/AddButton/AddButton';
import { ItemProvider } from './hooks/ItemContext';

function App() {
  return (
    <ItemProvider>
      <div className="App">
        <div className="AppHeader">
          <Typography variant="h2">Fixes and Features</Typography>
          <AddButton title="New item" />
        </div>
        <RequestPanel />
      </div>
    </ItemProvider>
  );
}

export default App;
