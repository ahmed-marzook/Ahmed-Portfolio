import awsIcon from "../../assets/images/tech-stack-icons/AWS.svg";
import azureIcon from "../../assets/images/tech-stack-icons/Azure.svg";
import dockerIcon from "../../assets/images/tech-stack-icons/Docker.svg";
import hashicorpTerraformIcon from "../../assets/images/tech-stack-icons/HashiCorp-Terraform.svg";
import javaIcon from "../../assets/images/tech-stack-icons/Java.svg";
import javascriptIcon from "../../assets/images/tech-stack-icons/JavaScript.svg";
import mongodbIcon from "../../assets/images/tech-stack-icons/MongoDB.svg";
import nodeIcon from "../../assets/images/tech-stack-icons/Node.js.svg";
import npmIcon from "../../assets/images/tech-stack-icons/NPM.svg";
import postgresIcon from "../../assets/images/tech-stack-icons/PostgresSQL.svg";
import pythonIcon from "../../assets/images/tech-stack-icons/Python.svg";
import reactIcon from "../../assets/images/tech-stack-icons/React.svg";
import redisIcon from "../../assets/images/tech-stack-icons/Redis.svg";
import springIcon from "../../assets/images/tech-stack-icons/Spring.svg";
import typescriptIcon from "../../assets/images/tech-stack-icons/TypeScript.svg";
import viteIcon from "../../assets/images/tech-stack-icons/Vite.svg";

const techIcons = {
  aws: awsIcon,
  azure: azureIcon,
  docker: dockerIcon,
  hashicorpTerraform: hashicorpTerraformIcon,
  java: javaIcon,
  javascript: javascriptIcon,
  mongodb: mongodbIcon,
  node: nodeIcon,
  npm: npmIcon,
  postgres: postgresIcon,
  python: pythonIcon,
  react: reactIcon,
  redis: redisIcon,
  spring: springIcon,
  typescript: typescriptIcon,
  vite: viteIcon,
} as const;

export type TechIconKey = keyof typeof techIcons;

export default techIcons;
