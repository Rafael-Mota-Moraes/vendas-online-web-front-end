interface MinhaDivProps {
  texto: string;
}

const MinhaDiv = ({ texto }: MinhaDivProps) => {
  return (
    <div>
      <p>{texto}</p>
    </div>
  );
};

function App() {
  return (
    <>
      <div>
        <h1>Título</h1>
        <h2>Subtitulo</h2>
        <MinhaDiv texto="Meu nome é Rafael" />
        <MinhaDiv texto="Mais um texto" />
      </div>
    </>
  );
}

export default App;
