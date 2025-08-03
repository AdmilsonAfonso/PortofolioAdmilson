// components/Projetos.js
import { FaArrowRight } from "react-icons/fa";
import { projetos } from "../../Data/Projectos";
import './projectos.css'


export default function Projetos() {
  return (
    <div className="projetos">
        <h2 className="h2-prjs">Meus Projetos</h2>   

        <div className="projectos-list">   
            {projetos.map((projeto, index) => (
            <div key={index} className="project-item">
                <img
                src={projeto.imagem}
                alt={projeto.titulo}
                className="imagem"
                />
                <h3 className="">{projeto.titulo}</h3>
                <p className="p-projts">{projeto.descricao}</p>
                <div >
                {projeto.ferramentas.map((icone, i) => (
                  <>
                    <span className="icon-projts" key={i}>{icone}</span>
                  </>
                ))}
                </div>
                <a className="icon-projts" target="_blank" href={projeto.gitLink}>{projeto.git}<FaArrowRight className="seta-link" /> </a>
            </div>
            ))}
        </div>
    </div>
  );
}
