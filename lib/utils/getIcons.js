import { FaPython, FaAws, FaJs, FaReact, FaNodeJs, FaDocker } from "react-icons/fa"; 
import { 
  SiMlflow, SiApacheairflow, SiPostgresql, SiSqlite, SiExpress, SiTypescript, 
  SiNextdotjs, SiPytorch, SiOpencv, SiApachekafka, SiTerraform, SiFlask, SiDjango, SiApachespark, SiFastapi, SiNvidia 
} from "react-icons/si";

export const getIcon = (skill) => {
  const iconMapping = {
    Python: <FaPython />,
    PySpark: <SiApachespark />,
    AWS: <FaAws />,
    Docker: <FaDocker />,
    PostgreSQL: <SiPostgresql />,
    PyTorch: <SiPytorch />,
    OpenCV: <SiOpencv />,
    Airflow: <SiApacheairflow />,
    Kafka: <SiApachekafka />,
    FastAPI: <SiFastapi />,
    CUDA: <SiNvidia />,
    Deepstream: <SiNvidia />,
    Flask: <SiFlask />,
    Mlflow: <SiMlflow />,
    Django: <SiDjango />,
    SQLite: <SiSqlite />,
  };

  return iconMapping[skill] || null;
};

