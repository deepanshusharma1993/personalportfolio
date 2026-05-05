import Image from "next/image";
import * as React from "react";

export interface IAppProps {}

export default function Techstack(props: IAppProps) {
  const techStack = [
    {
      name: "HTML5",
      logo: "https://devicon-website.vercel.app/api/html5/original.svg",
    },
    {
      name: "CSS3",
      logo: "https://devicon-website.vercel.app/api/css3/original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://devicon-website.vercel.app/api/javascript/original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },

    {
      name: "React",
      logo: "https://devicon-website.vercel.app/api/react/original.svg",
    },
    {
        name:"redux",
        logo: "https://devicon-website.vercel.app/api/redux/original.svg",
    },
    {
      name: "Node.js",
      logo: "https://devicon-website.vercel.app/api/nodejs/original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://devicon-website.vercel.app/api/mongodb/original.svg",
    },
    {
      name: "postgreSQL",
      logo: "https://devicon-website.vercel.app/api/postgresql/original.svg",
    },
    {
      name: "next.js",
      logo: "https://devicon-website.vercel.app/api/nextjs/original.svg",
    },
    {
      name: "docker",
      logo: "https://devicon-website.vercel.app/api/docker/original.svg",
    },
    {
      name: "rabbitMQ",
      logo: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
    },
    {
      name: "redis",
      logo: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
    },
    {
      name: "git",
      logo: "https://devicon-website.vercel.app/api/git/original.svg",
    },
    {
        name: "github",
        logo: "https://devicon-website.vercel.app/api/github/original.svg",
    },
    {
        name:"aws",
        logo: "https://devicon-website.vercel.app/api/amazonwebservices/original.svg",
    },
    {
        name: "kubernetes",
        logo: "https://devicon-website.vercel.app/api/kubernetes/plain.svg"
    }
  ];

  return (
    <div className="flex flex-col justify-center px-4 gap-5">
      <div className="text-center">
        <h2 className="text-2xl font-poppins font-bold "> My Tech Stack</h2>
        <p className="text-gray-600 text-xl font-poppins">
          {" "}
          Technologies I've been working with recently
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6  gap-5 justify-items-center mt-10">
        {techStack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center gap-2">
            <Image
              src={tech.logo}
              alt={`${tech.name} logo`}
              width={70}
              height={70}
            /> 
          </div>
        ))}
      </div>
    </div>
  );
}