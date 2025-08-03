import Slider from "react-slick";
import {
  FaJava, FaReact, FaAngular, FaPython, FaDocker, FaGitAlt, FaAws, FaGoogle,
} from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { SiMysql, SiSpringboot, SiFigma, SiFirebase, SiTailwindcss, SiTypescript, SiAlibabacloud } from "react-icons/si";
import './habilidade.css'

const icons = [
  { icon: <FaJava />, label: "Java" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaAngular />, label: "Angular" },
  { icon: <SiMysql />, label: "MySQL" },
  { icon: <DiPostgresql />, label: "PostgreSQL" },
  { icon: <SiSpringboot />, label: "Spring Boot" },
  { icon: <SiFigma />, label: "Figma" },
  { icon: <FaPython />, label: "Python" },
  { icon: <FaDocker />, label: "Docker" },
  { icon: <FaGitAlt />, label: "Git" },
  { icon: <SiFirebase />, label: "Firebase" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <FaAws />, label: "AWS" },
  { icon: <FaGoogle />, label: "Google Cloud" },
  { icon: <SiAlibabacloud />, label: "Alibaba Cloud" },
];

export default function TecnologiasCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="p-4 bg-black text-white rounded-lg habilidade">
      <Slider {...settings}>
        {icons.map((item, index) => (
          <div key={index} className="cafe flex flex-col items-center justify-center text-blue-400 text-4xl hover:scale-110 transition-transform">
            {item.icon}
            <p className="text-sm mt-1">{item.label}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
