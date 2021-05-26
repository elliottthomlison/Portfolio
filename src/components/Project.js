import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import bg2 from "../bg.jpg";


export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          date,
          place,
          description,
          projectType,
          link,
          tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="absolute object-cover w-full h-full">

  <img src={bg2} alt="background" className="absolute object-cover w-full h-120 bg-blue-500"/>

      <section className="container mx-auto">
        <h1 className="relative text-6xl text-blue-100 flex justify-center cursive pt-20 hover:text-gray-900">Welcome to my Projects Page!</h1>
        <h2 className="relative text-4xl text-gray-100 flex justify-center mb-12 pb-10 hover:text-gray-900">
          Here I share my projects from big to small
        </h2>
        <section className="grid grid-cols-3 gap-5">
          {projectData &&
            projectData.map((project, index) => (
              <article className="bg-gray-400 relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-800 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    View The Project{" "}
                    <span role="img" aria-label="left pointer">
                    👈
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}