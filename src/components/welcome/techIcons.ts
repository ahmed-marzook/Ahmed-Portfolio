import awsIcon from "../../assets/images/tech-stack-icons/AWS.svg";
import azureIcon from "../../assets/images/tech-stack-icons/Azure.svg";
import dockerIcon from "../../assets/images/tech-stack-icons/Docker.svg";
import electronIcon from "../../assets/images/tech-stack-icons/Electron.svg";
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
import tailwindIcon from "../../assets/images/tech-stack-icons/Tailwind-CSS.svg";
import typescriptIcon from "../../assets/images/tech-stack-icons/TypeScript.svg";
import viteIcon from "../../assets/images/tech-stack-icons/Vite.svg";

const techIcons = {
  aws: awsIcon.src,
  azure: azureIcon.src,
  docker: dockerIcon.src,
  electron: electronIcon.src,
  hashicorpTerraform: hashicorpTerraformIcon.src,
  java: javaIcon.src,
  javascript: javascriptIcon.src,
  mongodb: mongodbIcon.src,
  node: nodeIcon.src,
  npm: npmIcon.src,
  postgres: postgresIcon.src,
  python: pythonIcon.src,
  react: reactIcon.src,
  redis: redisIcon.src,
  spring: springIcon.src,
  tailwind: tailwindIcon.src,
  typescript: typescriptIcon.src,
  vite: viteIcon.src,
} as const;

export type TechIconKey = keyof typeof techIcons;

export default techIcons;
