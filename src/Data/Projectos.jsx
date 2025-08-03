// data/projects.js
import { FaReact, FaJava, FaDocker, FaAngular, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";

import ANIMAIS from '../assets/ANIMAIS.png'
import EBIOLO from '../assets/EBIOLO.png'
import EMPREGA from '../assets/P.jpeg'
import Publica from '../assets/Publica.jpeg'


export const projetos = [
  {
    titulo: "ÉBIOLO",
    imagem: EBIOLO,
    descricao: "Plataforma web para venda e troca de produtos.",
    ferramentas: [<FaReact className="icon-react"/>, <FaJava className="icon-java"/>,<SiSpringboot className="icon-spring" />, <SiMysql className="icon-mysql"/>],
    git:<FaGithub />,
    gitLink: "https://github.com/AdmilsonAfonso/EBIOLO"
  },
  {
    titulo: "Ideias",
    imagem: EMPREGA,
    descricao: "Painel interativo para partilha de ideias.",
    ferramentas: [<FaAngular className="icon-angular"/>, <FaJava className="icon-java"/>, <FaDocker className="icon-docker"/>,<SiMysql className="icon-mysql"/>],
    git:<FaGithub />,
    gitLink: "https://github.com/AdmilsonAfonso/Publicacao"
  },
  {
    titulo: "Tarefas",
    imagem: Publica,
    descricao: "Plataforma web para agendar tarefas.",
    ferramentas: [<FaReact className="icon-react"/>, <FaJava className="icon-java"/>, <FaDocker className="icon-docker"/>,<SiMysql className="icon-mysql"/>],
    git:<FaGithub />,
    gitLink: "https://github.com/AdmilsonAfonso/SpringTodoList"
  },
   {
    titulo: "Adoção de Animais",
    imagem: ANIMAIS,
    descricao: "Painel interativo para Adoção de animais.",
    ferramentas: [<FaAngular className="icon-angular"/>, <FaJava className="icon-java"/>, <FaDocker className="icon-docker"/>,<SiMysql className="icon-mysql"/>],
    git:<FaGithub />,
    gitLink: "https://github.com/AdmilsonAfonso/EmpregaJ-"
  }
];
