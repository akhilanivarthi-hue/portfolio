import React, { useEffect } from "react";
import Title from "../Components/Title/Title.js";
import Overview from "../Components/Overview/Overview.js";
import Image from "./images/sony-image.png";
import Problem from "../Components/Problem/Problem.js";
import White from "../Components/WhiteComponent/WhiteComponent.js";
import Black from "../Components/BlackComponent/Black.js";
import Research from "../Components/CommonImages/research.png";
import Desktop from "../Components/CommonImages/deaktop-research.png";
import Person from "../Components/CommonImages/persona-white.png";
import Storyboard from "./images/storyboard.png";
import Storyboard2 from "./images/storyboard2.png";
import Storyboard3 from "./images/storyboard3.png";
import Reddit from "./images/redditGif.gif";
import Instagram from "./images/instagramGif.gif";
import Windows from "./images/windowsProfile.png";
import Persona from "./images/userPersona.png";
import Prototype from "../Components/CommonImages/prototype.png";
import Solution from "./images/solution1.gif";
import Solution2 from "./images/solution2.gif";
import Solution3 from "./images/solution3.gif";
import Lightbulb from "../Components/CommonImages/lightbulb.png";
import Button from "../Components/HomeButton/homeButton.js";
import "./Sony.css";

function Sony() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Title
        Title="Sony CLP Project"
        Label="A phone-first companion that lets you navigate and personalize a shared TV—profiles, privacy, and quick controls."
        Duration="8 weeks"
        Team="4 UX Designers"
        Role="UX Designer"
        Color="rgb(104, 104, 255)"
      />

      <Overview
        Image={Image}
        Overview="The Sony Connected Learning Pathway (co-led by the Design Lab Community Team and Sony Human Factors) brought students and mentors together for an 8-week design sprint."
        Overview2="The brief asked a simple question with big implications: “How might we make watching TV a more personal experience with your phone?” The team focused on multi-user homes and shared devices, where privacy and identity often blur."
        Overview3="The concept explored a mobile companion that lets people navigate and personalize the TV from a phone—bringing familiar, touch-first patterns to the living room."
      />

      <Problem
        Problem="How might we make watching TV a more personal experience with your phone? How might we integrate personalization as a core feature for TVs with multiple users?"
        Color="rgb(104, 104, 255)"
      />

      {/* User Research */}
      <White
        Title="User Research"
        Image={Research}
        Summary="Discovery started hands-on with a Sony TV at the UCSD Design Lab to understand current capabilities and friction points."
        Summary2="The team concentrated on college students and recent grads—often living with roommates and sharing accounts. Interviews explored privacy expectations, profile habits, and when phones are preferred over remotes."
      >
        <div className="sony-section">
          <h2 className="sony-section-title">Insights from interviews</h2>

          <div className="sony-row-2 sony-userresearch-row">
            <div className="sony-card sony-card--pink">
              <ul>
                <li>Most TVs sit in shared spaces, so anyone can access them.</li>
                <li>“TV personalization” wasn’t top of mind for many participants.</li>
                <li>Phones are a common bridge to the TV (screen casting, login, search).</li>
              </ul>
            </div>

            <div className="sony-card sony-card--green">
              Interviews suggested a strong preference for using phones—not TV UIs—to sign in to services like Netflix. Several people called TV interfaces “more complicated” than mobile, reinforcing the value of a phone-first flow.
            </div>
          </div>
        </div>
      </White>

      {/* Desktop Research */}
      <Black
        Title="Desktop Research"
        Image={Desktop}
        Summary="To map patterns worth borrowing, the team reviewed profile-switching in familiar products—Reddit, Instagram, and Windows sign-in."
      >
        <div className="sony-section sony-desktopresearch-section">
          <div className="sony-media-grid">
            <div className="sony-media-item">
              <div className="sony-media-caption">Reddit</div>
              <img className="sony-media-img" src={Reddit} alt="Reddit profile switch" />
            </div>
            <div className="sony-media-item">
              <div className="sony-media-caption">Instagram</div>
              <img className="sony-media-img" src={Instagram} alt="Instagram profile switch" />
            </div>
            <div className="sony-media-item">
              <div className="sony-media-caption">Windows Login</div>
              <img className="sony-media-img" src={Windows} alt="Windows login selection" />
            </div>
          </div>

          <p className="sony-text sony-space-bottom-strong">
            Background research also covered personalization and device connectivity (Bluetooth and NFC) to understand what the TV could support now and later.
          </p>

          <div className="sony-card-grid-3">
            <div className="sony-card sony-card--red">
              <h3>Personalization</h3>
              <ul>
                <li>Custom app layout and ordering</li>
                <li>Color, font size, themes, and screensavers</li>
                <li>Aesthetic modes (e.g., Sony Living Decor, Samsung Frame)</li>
                <li>Video settings like brightness, saturation, and volume</li>
              </ul>
            </div>
            <div className="sony-card sony-card--red">
              <h3>Bluetooth</h3>
              <ul>
                <li>Wireless pairing between devices</li>
                <li>Manual setup via Settings</li>
                <li>Works with Bluetooth-enabled hardware</li>
                <li>Approximate range ~33 feet</li>
              </ul>
            </div>
            <div className="sony-card sony-card--red">
              <h3>Near Field Communication (NFC)</h3>
              <ul>
                <li>Tap-to-connect via proximity (no manual auth flow)</li>
                <li>Built on RFID; very short range</li>
                <li>Approximate range ~4 cm</li>
              </ul>
            </div>
          </div>

          <p className="sony-text sony-space-bottom-strong">
            With this landscape, the team defined a target persona to keep decisions grounded.
          </p>
        </div>
      </Black>

      {/* Personas & Storyboarding */}
      <White
        Title="Personas & Storyboarding"
        Image={Person}
        Summary="Research insights rolled into a persona representing a young adult in a shared living situation."
      >
        <div className="sony-section">
          <img className="sony-persona-img" src={Persona} alt="User persona" />
          <p className="sony-text">
            Storyboards then explored everyday moments where personalization, profiles, and privacy matter most.
          </p>

          <div className="sony-storyboard-grid">
            <img className="sony-storyboard-img" src={Storyboard} alt="Storyboard 1" />
            <img className="sony-storyboard-img" src={Storyboard2} alt="Storyboard 2" />
            <img className="sony-storyboard-img" src={Storyboard3} alt="Storyboard 3" />
          </div>

          <p className="sony-text">
            Each scenario informed a potential solution that combines identity, control, and convenience.
          </p>
        </div>
      </White>

      {/* Solution & Final Designs */}
      <Black
        Title="Solution & Final Designs"
        Image={Prototype}
        Summary="The team prototyped in Figma and focused on a clear, phone-driven flow. Within the sprint window, a lo-fi prototype captured the end-to-end experience."
      >
        <div className="sony-section sony-final-section">
          <div className="sony-row-2">
            <div className="sony-card sony-card--pink">
              <h3>Design Solution: Personalization</h3>
              <ul>
                <li>Clean, easy-to-scan UI</li>
                <li>Quick brightness and volume controls</li>
                <li>Personalization as a first-class feature</li>
                <li>Screensaver customization</li>
                <li>Flexible app layout</li>
                <li>Frequent apps surfaced by default</li>
              </ul>
            </div>
            <img className="sony-solution-media" src={Solution} alt="Personalization prototype" />
          </div>

          <div className="sony-row-2">
            <div className="sony-card sony-card--green">
              <h3>Design Solution: User Profiles</h3>
              <ul>
                <li>Per-profile settings and saved logins</li>
                <li>Guest/Incognito mode</li>
                <li>One-tap profile switch from the remote</li>
                <li>Sidebar profile picker</li>
              </ul>
            </div>
            <img className="sony-solution-media" src={Solution2} alt="User profiles prototype" />
          </div>

          <div className="sony-row-2">
            <div className="sony-card sony-card--blue">
              <h3>Design Solution: Privacy</h3>
              <ul>
                <li>Simple login/logout controls</li>
                <li>Control over which accounts remain signed in</li>
                <li>Phone-based sign-in on any TV</li>
              </ul>
            </div>
            <img className="sony-solution-media" src={Solution3} alt="Privacy prototype" />
          </div>
        </div>
      </Black>

      <White
        Title="Final Thoughts"
        Image={Lightbulb}
        Summary="The sprint set a strong foundation for phone-driven TV personalization. While hi-fi visuals and full usability testing were out of scope, the lo-fi prototype validated the core flow and surfaced next steps."
      >
        <p className="sony-text">
          Future iterations would expand profile management, deepen personalization, and trial NFC/Bluetooth handoff patterns. The team closed the program by sharing the prototype with Sony stakeholders—a highlight and a helpful checkpoint for where to take the concept next.
        </p>
        <Button />
      </White>
    </>
  );
}

export default Sony;
