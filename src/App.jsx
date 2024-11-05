import Header from "./components/Header"
export default function App() {
  return (
    <div className="border-page">
      <Header/>
      <main>
        <section>
          <h5>
            "Decidí comenzar en el desarrollo web para explorar y entender los
            fundamentos que construyen el ecosistema digital.
            <br />
            El camino ya ha empezado, y este será el sitio donde mi aprendizaje
            se hará visible.
            <br />
            Aquí encontrarás no solo un portafolio, sino una crónica de los
            trabajos que he completado, una referencia para seguir avanzando con
            determinación. "
          </h5>
        </section>
        <section>
        section left  estas partes con grid y media para pasar a uno o dos 
          <p>componente box donde aparece una imagen con enlace del proyecto</p>
        </section>
        <section>
        section right
        <p>componente box donde aparece una imagen con enlace del proyecto</p>
        </section>

      </main>
      <footer>redes y deja tu comentario un form post</footer>
    </div>
  );
}
