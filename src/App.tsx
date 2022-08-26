import { Dashboard } from "./components/dashboard";
import { Header } from "./components/Header";
import { Sumarry } from "./components/sumarry";
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

