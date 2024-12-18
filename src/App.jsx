import Header from "./components/Header";
import Project from "./components/Projects/index.js";
import data from'./components/Projects/data.js'

export default function App() {
  console.log(data)
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
        <Project>
          {
            <Project.Box 
              href={'https://anas-travel-journal.netlify.app'} 
              target="_blank">
              <Project.Number>1</Project.Number> 
                  <img className="box-first-img"src="src\img\tr.jpg"/>
                  <img className="box-second-img"src="src\img\tr.jpg"/>
                  <img className="box-third-img"src="src\img\tr.jpg"/>
              <Project.Name>Jammming</Project.Name>
              <Project.Date>10.03.24</Project.Date>
            </Project.Box>
          }
        </Project>
        </div>
      </section>
    </div>
  );
}
