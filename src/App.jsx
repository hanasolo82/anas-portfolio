import Header from "./components/Header";
import Project from "./components/Projects/index.js";
import datas from'./components/Projects/data.js'

export default function App() {
  console.log(datas)
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
        {datas.map(data => (
        <div key={data.id} >
        <Project>
            <Project.Box
              href={data.link} 
              target="_blank">
            <Project.Number>{data.id}</Project.Number> 
                <img className="box-first-img"src="src\img\tr.jpg" alt={`Project ${data.id} - 1`}/>
                <img className="box-second-img"src="src\img\tr.jpg"/>
                <img className="box-third-img"src="src\img\tr.jpg"/>
            <Project.Name>{data.name}</Project.Name>
            <Project.Date>{data.date}</Project.Date>
          </Project.Box>
        </Project>
        </div>
        ))}
        </div>
      </section>
    </div>
  );
}
