import React from "react";
import WorkSpace from "../assets/svg/04-details_section/01-work_space.svg";
import Communication from "../assets/svg/04-details_section/02-communication.svg";
interface AboutProps {
  id: string;
}

const About = (props: AboutProps) => {
  return (
    <div className="about-section" id={props.id}>
      <div className="about-section-main">
        <div className="about-section-content">
          <img src={WorkSpace} alt="work-space" />

          <p>
            <span className="about-span">Plethora of Workspace</span> Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Inventore ea
            animi quo aut debitis quis magni unde, quae excepturi consectetur
            alias enim assumenda, velit molestias.
          </p>
        </div>
      </div>
      <div className="about-section-main">
        <div className="about-section-content">
          <p>
            <span className="about-span">Hassle=free Communication</span>Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Vel quos minus
            cupiditate amet sit assumenda voluptates consequatur dolor laborum
            enim neque, aspernatur qui molestiae ipsa?
          </p>
          <img src={Communication} alt="communication" />
        </div>
      </div>
    </div>
  );
};

export default About;
