import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <Header />
      <Main />
      <Footer />
    </LocalizationProvider>
  );
}

export default App;
