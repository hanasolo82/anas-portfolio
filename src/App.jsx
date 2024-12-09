import Header from "./components/Header";
import Project from "./components/Project";

export default function App() {
  return (
    <div className="container">
      <Header/>
      <section className="timeliner">
        <div className="timer-header">
          <h1 className="header-name">
            Anás <br/>Elvira<br/> Fernández</h1>
          <h3 className="header-paragr">
             Decidí comenzar en el desarrollo web para explorar y entender los
            fundamentos que construyen el ecosistema digital.
            <br />
            
            El camino ya ha empezado.
            <br />
            
            Aquí encontrarás una crónica de mis
            trabajos...
          </h3>
        </div>
        <div className="project-container">
        <Project/>
        <Project/>
        
        </div>
        
      </section>
      
      <main>
        
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
