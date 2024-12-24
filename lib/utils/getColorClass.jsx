const getColorClass = (tech) => {
  switch (tech) {
    case "#Python":
      return "python";
    case "#PySpark":
      return "pyspark";
    case "#JavaScript":
      return "javascript";
    case "#TypeScript":
      return "typescript";
    case "#React.js":
      return "reactjs";
    case "#Next.js":
      return "nextjs";
    case "#Node.js":
      return "nodejs";
    case "#Express.js":
      return "expressjs";
    case "#PostgreSQL":
      return "postgresql";
    case "#SQLite":
      return "sqlite";
    case "#PyTorch":
      return "pytorch";
    case "#OpenCV":
      return "opencv";
    case "#AWS":
      return "aws";
    case "#TailwindCSS":
      return "tailwindcss";
    default:
      return "";
  }
};

export default getColorClass;
