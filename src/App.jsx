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
          
        </div>
        <div className="project-container">
        {datas.map(data => (
        <div key={data.id} >
        <Project>
            <Project.Box
              href={data.link} 
              target="_blank">
            <Project.Number>{data.id}</Project.Number> 
                {data.image?.[0] ? <img className="box-first-img"src={data.image[0]} alt={`Project ${data.id} - 1`}/> : null}
                {data.image?.[1] ? <img className="box-second-img"src={data.image[1] } alt={`Project ${data.id} - 2`}/> : null}
                {data.image?.[2] ? <img className="box-third-img"src={data.image[2]} alt={`Project ${data.id} - 3`}/> : null}
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
