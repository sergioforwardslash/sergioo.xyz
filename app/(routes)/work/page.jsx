import { ArrowBigRightDash, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Fitgenie",
    description: "A fitness app",
    image: "/work/fitgenie.png",
    link: "https://landing.fitgenie.net",
  },
  {
    id: 2,
    title: "Artrid",
    description: "A web development agency",
    image: "/work/artrid.png",
    link: "https://artrid.net",
  },
  {
    id: 3,
    title: "United Sports Apparel",
    description: "An ecommerce website w/Admin panel powered by Payload CMS",
    image: "/work/unitedsportsapparel.png",
    link: "https://unitedsportsonline.com",
  },
  {
    id: 4,
    title: "Health Pair",
    description: "A chiropractic staffing agency",
    image: "/work/healthpair.png",
    link: "https://healthpair.io",
  },
  {
    id: 5,
    title: "LinkDigest",
    description: "AI powered article summarizer",
    image: "/work/linkdigest.png",
    link: "https://linkdigest.net",
  },
  {
    id: 6,
    title: "ANS Resin",
    description: "A resin art ecommerce website w/Admin panel",
    image: "/work/ansresin.png",
    link: "https://ans-front.vercel.app",
  },
];

const Work = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full pt-10">
        <div className="text-left mb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </h2>
          <p className="text-lg mt-2 text-gray-600">
            A selection of projects I've worked on.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-indigo-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-indigo-200">
                  {project.title}
                </h3>
                <p className="text-indigo-500 mt-2">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-flex items-center mt-4 text-indigo-400 hover:text-indigo-500 transition-colors duration-300"
                >
                  Visit site <ArrowUpRight size={24} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
