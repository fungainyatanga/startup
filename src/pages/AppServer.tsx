import React from "react";
import {
  MdMicNone,
  MdImage,
  MdPersonOutline,
  MdSend,
  MdSettings,
} from "react-icons/md";

import Beard from "../assets/svg/02-app_section/01-server_section/01-beared.svg";
import Rocket from "../assets/svg/02-app_section/01-server_section/02-rocket.svg";
import Dashboard from "../assets/svg/02-app_section/01-server_section/03-dashboard.svg";
import Learning from "../assets/svg/02-app_section/01-server_section/04-learning.svg";
import Hologram from "../assets/svg/02-app_section/01-server_section/05-hologram.svg";
import Strategy from "../assets/svg/02-app_section/01-server_section/06-strategy.svg";
import Chemical from "../assets/svg/02-app_section/01-server_section/07-chemicals.svg";
import Timer from "../assets/svg/02-app_section/01-server_section/08-timer.svg";
import Logo from "../assets/svg/02-app_section/01-server_section/09-logo.svg";
import Dimitri from "../assets/svg/02-app_section/02-contacts_section/01-beared.svg";
import DimImage from "../assets/images/app/01-contacts_section/01-dimitri.jpeg";
import TanyaImage from "../assets/images/app/01-contacts_section/02-tanya.jpeg";
import SteveImage from "../assets/images/app/01-contacts_section/03-steve.jpeg";
import NatallyImage from "../assets/images/app/01-contacts_section/04-natally.jpeg";
import AndreaImage from "../assets/images/app/01-contacts_section/05-andrea.jpeg";
import ForestImage from "../assets/images/app/01-contacts_section/06-forrest.jpeg";
import VincyImage from "../assets/images/app/01-contacts_section/07-vincy.jpeg";
import PattImage from "../assets/images/app/01-contacts_section/08-patt.jpeg";
import AngelaImage from "../assets/images/app/01-contacts_section/09-angela.jpeg";
import Dimitri2image from "../assets/images/app/02-chat_section/01-dimitri.jpeg";
import Tanya2Image from "../assets/images/app/02-chat_section/02-tanya.jpeg";
import Steve2Image from "../assets/images/app/02-chat_section/03-steve.jpeg";
import Natally2Image from "../assets/images/app/02-chat_section/04-natally.jpeg";
import Stock from "../assets/images/app/02-chat_section/10-stocks.jpg";
import Audio from "../assets/svg/02-app_section/03-chat_section/01-audio-message.svg";
import Forrest2Image from "../assets/images/app/02-chat_section/06-forrest.jpeg";
import Calendar from "../assets/svg/02-app_section/04-right_bar/01-calendar.svg";
import Clock from "../assets/svg/02-app_section/04-right_bar/02-world-clock.svg";
import Weather from "../assets/svg/02-app_section/04-right_bar/03-thermo.svg";
import Stocks from "../assets/svg/02-app_section/04-right_bar/04-stocks.svg";
import Invitations from "../assets/svg/02-app_section/04-right_bar/05-invitation.svg";
import Ebooks from "../assets/svg/02-app_section/04-right_bar/06-ebooks.svg";
import Blog from "../assets/svg/02-app_section/04-right_bar/07-blog.svg";
import Design from "../assets/svg/02-app_section/04-right_bar/08-design.svg";
import ProductRelease from "../assets/svg/02-app_section/04-right_bar/09-product_release.svg";
interface AppProps {
  id: string;
}

const AppServer = (props: AppProps) => {
  
  return (
    <div className="app-section" id={props.id}>
      <div className="backdrop"></div>

      {/* APP */}

      <div className="app-window app-layout">
        <div className="app-server-nav">
          {/* Window close, minimize */}
          <div className="app-window-buttons">
            <span className="red dot"></span>
            <span className="yellow dot"></span>
            <span className="green dot"></span>
          </div>

          {/* App Severs */}

          <div className="app-servers">
            <div
              className="server-1 server"
              style={{ backgroundColor: "#00ffd1" }}
            >
              <img src={Beard} alt="avatar" style={{ height: "100" }} />
            </div>

            <div
              className="server-2 server"
              style={{ backgroundColor: "#2a9d8f" }}
            >
              <img src={Rocket} alt="avatar" style={{ height: "100" }} />
            </div>
            <div
              className="server-3 server"
              style={{ backgroundColor: "#e9c46a" }}
            >
              <img src={Dashboard} alt="avatar" style={{ height: "100" }} />
            </div>

            <div
              className="server-4 server"
              style={{ backgroundColor: "#f4a261" }}
            >
              <img src={Learning} alt="avatar" style={{ height: "100" }} />
            </div>

            <div
              className="server-5 server"
              style={{ backgroundColor: "#e76f51" }}
            >
              <img src={Hologram} alt="avatar" style={{ height: "100" }} />
            </div>
            <div
              className="server-6 server"
              style={{ backgroundColor: "#e63946" }}
            >
              <img src={Strategy} alt="avatar" style={{ height: "80%" }} />
            </div>

            <div
              className="server-7 server"
              style={{ backgroundColor: "#bfffa9" }}
            >
              <img src={Chemical} alt="avatar" style={{ height: "60%" }} />
            </div>
            <div
              className="server-8 server"
              style={{ backgroundColor: "#a8dadc" }}
            >
              <img src={Timer} alt="avatar" style={{ height: "90%" }} />
            </div>
          </div>

          <img src={Logo} alt="app-logo" className="app-logo" />
        </div>

        {/* App Contacts Nav */}

        <div className="app-contacts-nav">
          <input type="text" id="search-box" placeholder="Search" />
          <button className="new-button">New Chat Room</button>
          <div className="team-info">
            <div className="team-dp">
              <img src={Dimitri} alt="Dimitri" />
            </div>
            <div className="team-info-text">
              <h5>Dimitri's Team</h5>
              <br />
              <h6>App Team</h6>
              <br />
              <p>56 Members</p>
            </div>
          </div>
          {/* App Contacts */}

          <div className="app-contacts">
            <div className="app-contacts-list">
              <img src={DimImage} alt="avatar" />
              <div className="contacts-info">
                <h6>Admin - Dimitri</h6>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="app-contacts-list">
              <img src={TanyaImage} alt="avatar" />
              <div className="contacts-info">
                <h6>Admin - Tanya</h6>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="app-contacts-list">
              <img src={SteveImage} alt="avatar" />
              <div className="contacts-info">
                <h6>Admin - Steve</h6>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="app-contacts-list">
              <img src={NatallyImage} alt="avatar" />
              <div className="contacts-info">
                <h6>Admin - Natally</h6>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="app-contacts-list">
              <img src={AndreaImage} alt="avatar" />
              <div className="contacts-info">
                <h6>Admin - Andrea</h6>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="app-contacts-list">
              <img src={ForestImage} alt="avatar" />
              <div className="contacts-info">
                <h6>Admin - Forrest</h6>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="app-contacts-list">
              <img src={VincyImage} alt="avatar" />
              <div className="contacts-info">
                <h6>Admin - Vincy</h6>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="app-contacts-list">
              <img src={PattImage} alt="avatar" />
              <div className="contacts-info">
                <h6>Admin - Patt</h6>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="app-contacts-list">
              <img src={AngelaImage} alt="avatar" />
              <div className="contacts-info">
                <h6>Admin - Angela</h6>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
        </div>

        {/* App Chat Section  */}

        <div className="app-chat-section">
          {/* App Chat section nav */}

          <div className="app-chat-section-nav">
            <h4>Dimitris's Team</h4>
            <div className="chat-users">
              <img src={Dimitri2image} alt="avatar" style={{ zIndex: 5 }} />
              <img src={Tanya2Image} alt="avatar" style={{ zIndex: 4 }} />
              <img src={Steve2Image} alt="avatar" style={{ zIndex: 3 }} />
              <img src={Natally2Image} alt="avatar" style={{ zIndex: 2 }} />
              <div className="add-user">+</div>
            </div>
          </div>

          {/* App-Chat-History */}
          <div className="app-chat-history">
            <div className="chat-history-1 chat-history">
              <img
                src={Dimitri2image}
                className="chat-history-dp"
                alt="avatar"
              />
              <div className="chat-history-text">
                <h6>Dimitri</h6>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>

            <div className="chat-history-2 chat-history">
              <img src={Tanya2Image} className="chat-history-dp" alt="avatar" />
              <div className="chat-history-text">
                <h6>Tanya</h6>
                <img src={Stock} className="stocks" alt="stocks" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                  ab?
                </p>
              </div>
            </div>

            <div className="chat-history-3 chat-history">
              <div className="chat-history-text">
                <h6>Audio</h6>
                <img src={Audio} alt="audio-message" />
              </div>
            </div>
            <div className="chat-history-1 chat-history">
              <img src={AndreaImage} className="chat-history-dp" alt="avatar" />
              <div className="chat-history-text">
                <h6>Andrea</h6>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div className="chat-history-1 chat-history">
              <img src={VincyImage} className="chat-history-dp" alt="avatar" />
              <div className="chat-history-text">
                <h6>Vincy</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto molestiae beatae amet veritatis quam laboriosam
                  nobis quis quas illum rerum!
                </p>
              </div>
            </div>
          </div>
          {/* Text Bar */}

          <div className="app-text-bar">
            <div className="text-bar-left">
              <MdMicNone
                name="mic-outline"
                className="mic-outline"
                style={{ marginRight: "10px" }}
              />
              <p>Type Something</p>
            </div>

            <div className="text-bar-right">
              <MdImage name="image-outline" className="image-outline" />
              <MdPersonOutline
                name="person-outline"
                className="person-outline"
              />
              <MdSend name="send-outline" className="send-outline" />
            </div>
          </div>
        </div>

        {/* App Right Navigation */}

        <div className="app-right-nav">
          <div className="app-user">
            <img src={Forrest2Image} alt="avatar" className="app-user" />
            <div className="app-user-info">
              <h4>Forrest</h4>
              <br />
              <p>UI/UX Designer</p>
            </div>
            <MdSettings name="settings-outline" className="settings-outline" />
          </div>

          <div className="app-widgets">
            <h4>Widgets</h4>
            <div className="widget widget-1">
              <p>Calender</p>
              <img src={Calendar} alt="calendar" />
              
            </div>
            <div className="widget widget-2">
              <p>World Clock</p>
              <img src={Clock} alt="workd-clock" />
            </div>
            <div className="widget widget-3">
              <p>Weather</p>
              <img src={Weather} alt="weather" />
            </div>
            <div className="widget widget-4">
              <p>Stocks</p>
              <img src={Stocks} alt="stock" />

            </div>
            <div className="widget widget-5">
              <p>Invitations</p>
              <img src={Invitations} alt="invitations" />

            </div>
          </div>

          {/* App Media */}
          <div className="app-media">
            <h4>Media</h4>
            <div className="app-media-grid">
              <div className="grid-item item-1">
                <img src={Ebooks} alt="ebooks" style={{height:"auto"}} />
              </div>
              <div className="grid-item item-2">
                <img src={Blog} alt="blog"  style={{height:"auto"}}/>
              </div>

              <div className="grid-item item-3">
                <img src={Design} alt="design"  style={{height:"auto"}} />
              </div>
              <div className="grid-item item-4">
                <img src={ProductRelease} alt="product-release" style={{height:"80px"}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppServer;
