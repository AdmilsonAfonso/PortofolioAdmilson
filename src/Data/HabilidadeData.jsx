// skillsData.js
import { FaReact, FaAngular, FaJava, FaDocker, FaGit, FaGoogle, FaAws, FaPython } from "react-icons/fa";
import { SiSpringboot, SiTypescript, SiMysql, SiTailwindcss, SiFirebase, SiJavascript, SiOracle, SiCloudflare, SiVercel, SiKubernetes, SiAlibabacloud, SiFigma } from "react-icons/si";
import { PiBracketsAngleBold } from "react-icons/pi";
import { DiCss3, DiPostgresql } from "react-icons/di";

export const habilidadesData = {
  front: [
    { nome: 'React', icon: <FaReact className="icon-react" /> },
    { nome: 'Angular', icon: <FaAngular className="icon-angular" /> },
    { nome: 'TypeScript', icon: <SiTypescript /> },
    { nome: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { nome: "JavaScript", icon: <SiJavascript /> },
  { nome: "SCSS", icon: <DiCss3 /> },
  ],
  back: [
    { nome: 'Java', icon: <FaJava /> },
    { nome: 'Spring Boot', icon: <SiSpringboot className="icon-spring" /> },
    { nome: 'Python', icon: <FaPython />},
    { nome: 'React Native', icon: <FaReact className="icon-react" /> },
    { nome: 'MySQL', icon: <SiMysql className="icon-mysql"/> },
    { nome: 'PostgreSQL', icon: <DiPostgresql />},
    { nome: 'AWS', icon: <FaAws /> },
    { nome: 'Google Cloud', icon: <FaGoogle /> },
    { nome: 'Alibaba Cloud', icon: <SiAlibabacloud /> },
    { nome: "Oracle", icon: <SiOracle /> },
    { nome: "Cloudflare", icon: <SiCloudflare /> },
    { nome: "Vercel", icon: <SiVercel /> },
    { nome: "Kubernetes", icon: <SiKubernetes /> },
  ],
  devops: [
    { nome: 'Docker', icon: <FaDocker className="icon-docker"/> },
    { nome: 'Git', icon: <FaGit /> },
    { nome: 'Figma', icon: <SiFigma /> },
    { nome: 'Firebase', icon: <SiFirebase /> },
  ],
};
