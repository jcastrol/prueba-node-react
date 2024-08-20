import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AppRouter from "./routes/AppRouter";
import { AppContextProvider } from "./utils/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
    
      <AppRouter />

    </AppContextProvider>
  );
}

export default App;
