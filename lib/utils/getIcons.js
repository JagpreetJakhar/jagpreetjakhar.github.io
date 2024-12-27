import { FaPython, FaAws,FaJs, FaReact, FaNodeJs, FaDocker } from "react-icons/fa"; 
import {SiMlflow , SiApacheairflow,SiPostgresql,SiSqlite , SiExpress, SiTypescript, SiNextdotjs, SiPytorch, SiOpencv, SiApachekafka, SiTerraform, SiFlask, SiDjango,SiApachespark } from "react-icons/si";

export const getIcon = (skill) => {
  const iconMapping = {
    "Python": <FaPython />,
    "PySpark":<SiApachespark />,
    "JavaScript": <FaJs />,
    "AWS":<FaAws />,
    "React.js": <FaReact />,
    "Node.js": <FaNodeJs />,
    "Docker": <FaDocker />,
    "PostgreSQL": <SiPostgresql />,
    "TypeScript": <SiTypescript />,
    "Next.js": <SiNextdotjs />,
    "PyTorch": <SiPytorch />,
    "OpenCV": <SiOpencv />,
    "Airflow":<SiApacheairflow />,
    "Kafka": <SiApachekafka />,
    "Terraform": <SiTerraform />,
    "Flask": <SiFlask />,
    "mlflow":<SiMlflow />,
    "Django": <SiDjango />,
    "SQLite":<SiSqlite />
  };

  return iconMapping[skill] || null;
};
