const about = {
  title: "Hi 👋 , I am Jagpreet",
  description:
   "I am a skilled Software Engineer specializing in Computer Vision, with a focus on object detection, tracking, and motion planning.\
    I hold a Master's degree with distinction in Cybersecurity and Artificial Intelligence from the University of Sheffield, England.",
  github: "https://github.com/JagpreetJakhar",
  linkedin: "https://www.linkedin.com/in/jagpreetjakhar/",
  cv: "/resume.pdf",
};

const projects = {
  title: "Projects",
  personalProjects: [
    {
      title: "Football Analysis -- Coming Soon",
      short:
        "Using YOLOv11 and ByteTrack",
      description:
        "Analysing FA Cup Final 2023-24 using Object Detection, Tracking and \
         Generating Statistics like Possession,Passing, and range of passes",
      technologies: ["Python", "PyTorch","OpenCV"],
      github: "https://github.com/JagpreetJakhar/football_analytics",
      demo: "#",
    },
    {
      title: "Neural ODEs for Domain Wall Analysis",
      short:
        "Neural ODEs",
      description:
        "The study focuses on three distinct physical systems: the double pendulum, the Lorenz attractor, and the magnetic \
 domain wall problem. ",
      technologies: ["Python", "PyTorch", "PySpark"],
      github: "https://github.com/JagpreetJakhar/Dissertation",
      demo: "#",
    },
    {
      title: "Coming Soon",
      short:
        "",
      description:
        "",
      technologies: [],
      github: "",
      demo: "#",
    },    
  ],
};

const experience = {
  title: "Experience",
  experiences: [
    {
      title: "Founding Engineer - Machine Learning",
      company: "Idea Enterprises LLC",
      duration: "Feb 2025 - Present",
      description: `- Took Product from prototype stage to production
- Curated Custom Dataset combining Open Source Datasets, Sources, and proprietary data
- Finetuned Pre-trained Object Detection and Action recognition Models on Custom Dataset using Distributed Data Parallel Training Approach with high Top-1 (87%), Top-5 Accuracy (95%), and F-1 Score (91%)
- Built End-to-End low latency (<1s) inference pipeline for real-time system with high throughput (25 CCTVs per node) for Weapon detection and Action Recognition (Violence) from live CCTV streams
- Deployed system using Nvidia Deepstream and Apache Kafka, integrating with Front-End Application providing Real-time Monitoring and Alerts`
    },
    {
      title: "Graduate Teaching Assistant",
      company: "University of Sheffield",
      duration: "Sep 2023 - Aug 2024",
      description: `### Big Data Analytics

- Supported students in understanding modern scale-out system architectures for processing large, structured and unstructured datasets, and how to scale resources for data processing based on workload requirements
- Provided hands-on support for students working with Airflow, Kafka, AWS, and Databricks to perform data analytics queries and implement data mining algorithms at scale
- Assisted students in Exploratory Data Analysis and Hypothesis Testing for Data Analysis

### Database Design

- Helped students understand fundamentals of database management, relational database design, and data warehousing
- Guided students in designing and implementing relational databases, addressing challenges with large and heterogeneous datasets, such as transactional and geo-spatial data

### Data Modelling and Storage

- Prepared presentations on topics such as Database Normalisation
- Provided technical assistance to students during sessions on SQLite and Python integration, addressing any questions`
    },
    {
      title: "Software Engineer",
      company: "Swig Solutions",
      duration: "2015 - 2019",
      description: `- Spearheaded the development of a Kiosk Information Management System, increasing operational efficiency and reducing manual inquiries by 40%
- Developed and deployed responsive, user-centric dynamic web applications using HTML, CSS, JavaScript, and React, enhancing client satisfaction and retention
- Conducted comprehensive code reviews and implemented rigorous testing protocols, reducing post-deployment defects by 25%`
    }
  ],
};

const skills = {
  title: "Skills",
  mySkills: [
    {
      title: "Languages & Frameworks",
      skills: [
        "Python",
        "PySpark",
        "PyTorch",
        "CUDA",
        "Flask",
        "FastAPI"
      ],
    },
    {
      title: "Others",
      skills: ["Mlflow", "OpenCV","AWS","Airflow","Kafka","Docker","Deepstream","PostgreSQL", "SQLite"],
    },
  ],
};

export { about, projects, experience, skills };
