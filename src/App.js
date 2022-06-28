import "./App.css";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import LandingPage from './pages'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <LandingPage />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
