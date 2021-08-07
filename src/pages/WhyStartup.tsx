import React from "react";
import lAngle from "../assets/svg/03-why_section/01-L-angle.svg";
import Bot from "../assets/svg/03-why_section/02-bot.svg";
interface StartupProps{
    id:string
}

const WhyStartup = (props:StartupProps) => {
    return (
      <div className="why-startup-section" id={props.id}>
        <div className="why-startup-section-left">
          <h2>
            <span style={{ color: "#ff2441" }}>Why</span> Startup
          </h2>
          <br /> <br />
          <h4>
            Powerful way to collaborate with <br /> the most robust bot on the
            market
          </h4>
          <img src={lAngle} alt="l-angle" className="l-angle" />
          <ul className="key-points">
            <li>
              <h4>Friendly layout</h4>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quia id nobis, qui doloremque eum dicta accusantium voluptatum
                molestiae debitis!
              </p>
            </li>
            <li>
              <h4>Platform Independent</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                inventore laboriosam obcaecati, dolor ullam quidem delectus vero
                sapiente sunt quasi velit dolorum. Voluptate, modi!
              </p>
            </li>
            <li>
              <h4>Kick start with no manual</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, maiores mollitia dicta aperiam earum itaque?</p>
            </li>
          </ul>
        </div>
        <div className="why-startup-section-right">
            <img src={Bot} alt="bot"  />

        </div>
      </div>
    );
}

export default WhyStartup;