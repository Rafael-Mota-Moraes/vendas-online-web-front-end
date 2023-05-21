interface ComponenteProprioProps {
  titulo: string;
  textoCorpo: string;
  corFonte: string;
  corBg: string;
}

export default function ComponenteProprio(props: ComponenteProprioProps) {
  return (
    <div
      style={{
        color: props.corFonte || "black",
        backgroundColor: props.corBg || "#fff",
        padding: "1rem",
        borderRadius: ".5rem",
        margin: "2rem"
      }}
    >
      <h1>{props.titulo}</h1>
      <p>{props.textoCorpo}</p>
    </div>
  );
}
