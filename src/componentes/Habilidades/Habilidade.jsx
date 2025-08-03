// Habilidades.jsx
import { useState } from "react";
import { habilidadesData } from "../../Data/HabilidadeData";
import './habilidade.css'

export const Habilidades = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todas");

  const toggleCategoria = (categoria) => {
    if (categoriaSelecionada === categoria) {
      setCategoriaSelecionada("todas"); // desmarca e volta para todas
    } else {
      setCategoriaSelecionada(categoria);
    }
  };

  const habilidadesFiltradas =
    categoriaSelecionada === "todas"
      ? Object.values(habilidadesData).flat()
      : habilidadesData[categoriaSelecionada];

  return (
    <div className="habilidades-container">
      <h2 className="h2-habi">Habilidades & Tecnologias</h2>
      <div className="filtros">
        <button
          onClick={() => toggleCategoria("front")}
          className={categoriaSelecionada === "front" ? "ativo" : ""}
        >
          Front-End
        </button>
        <button
          onClick={() => toggleCategoria("back")}
          className={categoriaSelecionada === "back" ? "ativo" : ""}
        >
          Back-End
        </button>
        <button
          onClick={() => toggleCategoria("devops")}
          className={categoriaSelecionada === "devops" ? "ativo" : ""}
        >
          DevOps
        </button>
      </div>

      <div className="skills-grid">
        {habilidadesFiltradas.map((hab, index) => (
          <div className="skill-card" key={index}>
            <div className="icon-skill">{hab.icon}</div>
            <span>{hab.nome}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
