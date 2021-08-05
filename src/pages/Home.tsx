import React from "react";

import Navbar  from "../components/Navbar";


interface HomeProps{
    id: string;

}
const Home = (props: HomeProps) => {
    return (
      <div className="home-section" id={props.id}>
        <Navbar />
        <div className="home-content">
          <div className="home-text">
            <h1>Innovation</h1>
            <h1>Reinvented</h1>
          </div>
        </div>
        <div className="home-description">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reiciendis vitae dignissimos. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="download-btn btn">
                <a href="#app-section">Download Now</a>
            </div>
        </div>
      </div>
    );
}
export default Home;