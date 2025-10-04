const techIcons = {
  aws: new URL("../../assets/images/tech-stack-icons/AWS.svg", import.meta.url).href,
  azure: new URL("../../assets/images/tech-stack-icons/Azure.svg", import.meta.url).href,
  docker: new URL("../../assets/images/tech-stack-icons/Docker.svg", import.meta.url).href,
  hashicorpTerraform: new URL(
    "../../assets/images/tech-stack-icons/HashiCorp-Terraform.svg",
    import.meta.url
  ).href,
  java: new URL("../../assets/images/tech-stack-icons/Java.svg", import.meta.url).href,
  javascript: new URL(
    "../../assets/images/tech-stack-icons/JavaScript.svg",
    import.meta.url
  ).href,
  mongodb: new URL("../../assets/images/tech-stack-icons/MongoDB.svg", import.meta.url).href,
  node: new URL("../../assets/images/tech-stack-icons/Node.js.svg", import.meta.url).href,
  npm: new URL("../../assets/images/tech-stack-icons/NPM.svg", import.meta.url).href,
  postgres: new URL("../../assets/images/tech-stack-icons/PostgresSQL.svg", import.meta.url).href,
  python: new URL("../../assets/images/tech-stack-icons/Python.svg", import.meta.url).href,
  react: new URL("../../assets/images/tech-stack-icons/React.svg", import.meta.url).href,
  redis: new URL("../../assets/images/tech-stack-icons/Redis.svg", import.meta.url).href,
  spring: new URL("../../assets/images/tech-stack-icons/Spring.svg", import.meta.url).href,
  typescript: new URL(
    "../../assets/images/tech-stack-icons/TypeScript.svg",
    import.meta.url
  ).href,
  vite: new URL("../../assets/images/tech-stack-icons/Vite.svg", import.meta.url).href,
} as const;

export type TechIconKey = keyof typeof techIcons;

export default techIcons;
