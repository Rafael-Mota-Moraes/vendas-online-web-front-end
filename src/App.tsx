import ComponenteProprio from "./components/ComponenteProprio";
import Contador from "./components/Contador";
import TestCallback from "./components/TestCallback";

function App() {
  return (
    <>
      <div>
        <ComponenteProprio
          corBg="#ddd"
          corFonte="#333"
          textoCorpo="texto do corpo do componente"
          titulo="Título do componente"
        />
        <hr />
        <Contador />
        <hr />
        <TestCallback />
      </div>
    </>
  );
}

export default App;
