import Header from "./components/Header";
import OldProject from "./components/OldProject";
import Project from "./components/Projects/index.js";
import ProjectDate from "./components/Projects/ProjectDate.jsx";

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
        <OldProject/>
        <OldProject/>
        
        <Project>
            <Project.Box>
              <Project.Number>1</Project.Number>
              
                  <img className="box-second-img"src="src\img\tr.jpg"/>
                  <img className="box-first-img"src="src\img\tr.jpg"/>
                  <img className="box-third-img"src="src\img\tr.jpg"/>
              
              <Project.Name>Jammming</Project.Name>
              <Project.Date>10.03.24</Project.Date>
            </Project.Box>
        </Project>
        
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
