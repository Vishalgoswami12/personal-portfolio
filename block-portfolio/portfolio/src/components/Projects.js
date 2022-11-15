import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <>
      <section className="getlatest-projects">
        <h2> Get all latest projects</h2>
        <button className="btn-large">
          <Link to={"https://github.com/Vishalgoswami12"}>FOLLOW ME</Link>
        </button>
      </section>

      <section className="container project-section">
        <div className="project-wrapper">
          <h2 className="section-heading">Projects</h2>
          <div className="project-container">
            <ProjectCard
              image={"blogapp.png"}
              title={"Blog app"}
              description={
                "This application is a social blogging site (i.e. a Medium.com clone) called Conduit. It uses a custom API for all requests, including authentication and much more .."
              }
              links={[
                "//github.com/RahulMandyal1/blogapp",
                "//conduitblogapp.netlify.app",
              ]}
            />

            <ProjectCard
              image={"portfolio.png"}
              title={"Personal portfolio"}
              description={"My personal Portfolio  website made with react js "}
              links={[
                "//github.com/RahulMandyal1/Personalportfolio",
                "//rahulmandyal.me/",
              ]}
            />

            <ProjectCard
              image={"conduitapi.png"}
              title={"Blog app api"}
              description={
                "This is  the api of this blog application that i  have made . Used Node js Or mongodb . Jwt for authetication."
              }
              links={[
                "https://github.com/Vishalgoswami12"
              ]}
            />

            <ProjectCard
              image={"githubBattle.png"}
              title={"Github Battle app"}
              description={"Enter two github username and battle between them"}
              links={[
                "https://github.com/Vishalgoswami12"
              ]}
            />
            <ProjectCard
              image={"todoapp.png"}
              title={"Todo Application"}
              description={"Very basic todo application made with react js and redux. User can add what need to be done."}
              links={[
                "https://github.com/Vishalgoswami12"
              ]}
            />
            <ProjectCard
              image={"sixteenclothing.png"}
              title={"Sixteen Clothing"}
              description={
                " Ecommerce website made with the vanilla js and scss."
              }
              links={[
                "https://github.com/Vishalgoswami12"
              ]}
            />
            <ProjectCard
              image={"flexor.png"}
              title={"Flexor"}
              description={"Fully resposive  Multipage website made with html css."}
              links={[
                "https:github.com/Vishalgoswami12"
              ]}
            />
            <ProjectCard
              image={"stimulus.png"}
              title={"Stimulus portfolio website"}
              description={
                "Portfolio website made with html/scss and css-grid."
              }
              links={[
               "https://github.com/Vishalgoswami12"
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}