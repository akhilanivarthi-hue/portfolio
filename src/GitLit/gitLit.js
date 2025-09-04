import React, { useEffect } from "react";
import ImageHero from "./images/gitlit.png";
import Title from "../Components/Title/Title.js";
import Overview from "../Components/Overview/Overview.js";
import Problem from "../Components/Problem/Problem.js";
import White from "../Components/WhiteComponent/WhiteComponent.js";
import Black from "../Components/BlackComponent/Black.js";
import Research from "../Components/CommonImages/research.png";
import Prototype from "../Components/CommonImages/prototype.png";
import Lightbulb from "../Components/CommonImages/lightbulb-black.png";
import Button from "../Components/HomeButton/homeButton.js";
import PrototypeWhite from "../Components/CommonImages/prototype-white.png";
import Comparison from "../Components/CommonImages/comparison.png";
import Final from "../Components/CommonImages/final.png";

import Survey from "./images/survey.png";
import UserFlow from "./images/userflow1.png";
import Prototype1 from "./images/prototype1.png";
import Prototype2 from "./images/prototype2.png";
import UserFlow2 from "./images/userflow2.png";
import SurveyResults from "./images/surveyresults.png";

import Annotation from "./images/annotation1.png";
import Annotation2 from "./images/annotation2.png";
import Reading from "./images/readingannotations1.png";
import Reading2 from "./images/readingannotations2.png";
import Modes from "./images/quizmodes.png";
import Tutorial from "./images/tutorial.png";
import EnterPin from "./images/enterpin.png";
import EnterPin2 from "./images/enterpin2.png";
import Quiz from "./images/quiz1.png";
import Quiz2 from "./images/quiz2.png";
import Results from "./images/results.png";
import Leaderboard from "./images/leaderboard.png";
import Discussion from "./images/discussion1.png";
import Discussion2 from "./images/discussion2.png";

import "./gitLit.css";

function GitLit() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="gitlit-container">
      <Title
        Title="GitLit"
        Label="A collaborative reading platform that combines reading, discussion, and examination."
        Duration="10 weeks"
        Team="4 UX Designers"
        Role="UX Designer"
        Color="#fcd464"
      />

      <Overview
        Image={ImageHero}
        Overview="Imagine a professor who wants to check understanding while sparking real discussion. How can classroom quizzes reflect areas where students are struggling? Popular tools like Kahoot and Quizizz focus on the individual and don’t offer much for collaboration."
        Overview2="Now imagine a student who prefers reading independently, but still wants a space to compare notes and perspectives with others."
        Overview3="GitLit is a classroom-ready concept that blends reading, collaborative annotation, discussion, and quizzes to deepen comprehension."
      />

      <Problem
        Problem="How might the experience encourage active discussion while reading?"
        Color="#fcd464"
      />

      {/* User Research */}
      <White
        Title="User Research"
        Image={Research}
        Summary="A short survey explored how people read (online, with others, physical books) and how collaboration plays into that experience."
      >
        <div className="gitlit-section">
          {/* (not boxed originally) survey image */}
          <figure className="gitlit-figure">
            <img className="gitlit-img" src={Survey} alt="Survey form" />
            <figcaption className="gitlit-caption">Survey overview</figcaption>
          </figure>

          {/* originally boxed */}
          <div className="gitlit-card">
            <h3 className="gitlit-h3">Survey distribution and high-level findings</h3>
            <ul className="gitlit-list">
              <li>Shared via campus org Discords, Instagram, and direct outreach</li>
              <li><strong>27 participants</strong> responded</li>
              <li><strong>90%+</strong> felt collaborative reading has a positive influence</li>
              <li><strong>85%</strong> discuss books with others after reading collaboratively</li>
              <li><strong>60%</strong> lack a dedicated platform for book discussion</li>
              <li><strong>90%+</strong> discuss books face-to-face</li>
            </ul>
          </div>

          {/* (not boxed originally) key insights */}
          <h3 className="gitlit-h3">Key insights</h3>
          <ul className="gitlit-list">
            <li>Interacting with others is valued for social connection and new perspectives.</li>
            <li>Discussion often happens in person rather than on social platforms.</li>
            <li>Many readers prefer independent reading and discuss afterward.</li>
            <li>Students want access to different interpretations and clarifications where they feel stuck.</li>
          </ul>
        </div>
      </White>

      {/* Prototyping: Round 1 */}
      <Black
        Title="Prototyping: Round 1"
        Image={Prototype}
        Summary="Round one prototyping ran in Discord and Google Docs. carl-bot reaction roles handled access, and Google Docs links simulated reading and annotation. The goal was to test collaborative annotation, discussion, and recommendation concepts."
      >
        <div className="gitlit-section">
          {/* originally boxed: three concept cards */}
          <div className="gitlit-grid-3">
            <div className="gitlit-card">
              <h4 className="gitlit-h4">Collaborative annotation</h4>
              <p className="gitlit-text">
                Students had both a personal copy and a shared class copy. Annotations could be “pushed” to the class copy or “pulled” from peers.
              </p>
            </div>
            <div className="gitlit-card">
              <h4 className="gitlit-h4">Discussion prompts</h4>
              <p className="gitlit-text">
                “Saved” annotations flowed into prompt ideas, encouraging targeted conversations.
              </p>
            </div>
            <div className="gitlit-card">
              <h4 className="gitlit-h4">Recommendations</h4>
              <p className="gitlit-text">
                Reading group and book suggestions drew from interaction patterns in annotation and discussion.
              </p>
            </div>
          </div>

          {/* (not boxed originally) scenario roles */}
          <h3 className="gitlit-h3">Scenario roles</h3>
          <p className="gitlit-text">
            Participants played students in an English class reading <em>Cinderella</em> using GitLit. The team facilitated timing, answered questions, and moderated activity across Discord and Google Docs.
          </p>

          {/* (not boxed originally) user flow images, stacked & larger */}
          <div className="gitlit-grid-stack">
            <figure className="gitlit-figure">
              <img className="gitlit-img gitlit-img--big" src={UserFlow} alt="Round 1 user flow" />
            </figure>
            <figure className="gitlit-figure">
              <img className="gitlit-img gitlit-img--big" src={Prototype1} alt="Round 1 prototype screens" />
            </figure>
          </div>

          {/* (not boxed originally) session notes/insights */}
          <h3 className="gitlit-h3">Insights</h3>
          <p className="gitlit-text">
            Role assignment issues blocked access for some participants, and troubleshooting took a significant portion of the session. Despite pre-testing, device differences and permission states created friction, leaving limited time for full flows.
          </p>

          {/* originally boxed: pain points + room for improvement */}
          <div className="gitlit-grid-2">
            <div className="gitlit-card">
              <h4 className="gitlit-h4">Pain points</h4>
              <ol className="gitlit-list">
                <li>Discord ↔ Google Docs integration felt clunky.</li>
                <li>Role assignment in Discord caused access problems.</li>
                <li>“Saved annotations” felt redundant alongside Doc comments.</li>
              </ol>
            </div>

            <div className="gitlit-card">
              <h4 className="gitlit-h4">Room for improvement</h4>
              <ol className="gitlit-list">
                <li>Sharpen the value proposition for teachers/students beyond Google Docs/Perusall.</li>
                <li>Explore collaboration patterns that feel engaging in a classroom setting.</li>
                <li>Reduce platform switching; clarify the teacher perspective that was missing in this round.</li>
              </ol>
            </div>
          </div>
        </div>
      </Black>

      {/* Prototyping: Round 2 */}
      <White
        Title="Prototyping: Round 2"
        Image={PrototypeWhite}
        Summary="Round two combined Quizizz (to explore a competitive quiz mode) with a Figma prototype (to preview annotation, discussion, teacher view, and dashboards). Focus shifted to using class annotations and teacher input to generate in-class quizzes and discussion prompts."
      >
        <div className="gitlit-section">
          {/* originally boxed: three concept cards */}
          <div className="gitlit-grid-3">
            <div className="gitlit-card">
              <h4 className="gitlit-h4">Annotation</h4>
              <p className="gitlit-text">
                A Figma flow illustrated how readers add tags (from a professor’s list or their own) and how instructors review submissions and publish AI-generated quizzes.
              </p>
            </div>
            <div className="gitlit-card">
              <h4 className="gitlit-h4">Quizzes</h4>
              <p className="gitlit-text">
                Based on tags/annotations, quiz questions (manually authored for the test) ran in Quizizz with a leaderboard for live, in-class competition.
              </p>
            </div>
            <div className="gitlit-card">
              <h4 className="gitlit-h4">Discussion</h4>
              <p className="gitlit-text">
                A follow-up free-response quiz in pairs encouraged synthesis. A dashboard view (Figma) showcased class answers for asynchronous review and replies.
              </p>
            </div>
          </div>

          {/* (not boxed originally) scenario roles */}
          <h3 className="gitlit-h3">Scenario roles</h3>
          <p className="gitlit-text">
            Participants acted as college students reading a research paper. The team moderated timing, ran quizzes, walked through the Figma prototype, and narrated the professor experience.
          </p>

          {/* (not boxed originally) user flow images, stacked & larger */}
          <div className="gitlit-grid-stack">
            <figure className="gitlit-figure">
              <img className="gitlit-img gitlit-img--big" src={UserFlow2} alt="Round 2 user flow" />
            </figure>
            <figure className="gitlit-figure">
              <img className="gitlit-img gitlit-img--big" src={Prototype2} alt="Round 2 prototype screens" />
            </figure>
          </div>

          {/* (not boxed originally) session notes */}
          <h3 className="gitlit-h3">Insights</h3>
          <p className="gitlit-text">
            Platform switching was reduced by projecting the facilitator screen for instructions and demos. Links and QR codes supported both laptop and mobile use.
          </p>

          {/* originally boxed: pain points + room for improvement */}
          <div className="gitlit-grid-2">
            <div className="gitlit-card">
              <h4 className="gitlit-h4">Pain points</h4>
              <ol className="gitlit-list">
                <li>Heavy QR-code switching between Figma and Quizizz reduced flow.</li>
                <li>Students wanted access to professor/peer notes during quizzes.</li>
                <li>Onboarding lacked clarity; sync vs async expectations were fuzzy.</li>
                <li>Usability issues (minimizing annotations, text readability, etc.).</li>
              </ol>
            </div>

            <div className="gitlit-card">
              <h4 className="gitlit-h4">Room for improvement</h4>
              <ol className="gitlit-list">
                <li>Create a holistic dashboard for summaries (annotations, discussion, teacher feedback).</li>
                <li>Simplify newcomer experience and reduce confusion.</li>
                <li>Polish general usability across the app.</li>
              </ol>
            </div>
          </div>
        </div>
      </White>

      {/* Round 1 vs Round 2 comparison (not boxed originally) */}
      <Black
        Title="Prototyping: Round 1 vs Round 2 Insights"
        Image={Comparison}
        Summary="Participants preferred the second session—more interactive, clearer, and felt it improved understanding of the text. Interest in using the product increased after round two."
      >
        <div className="gitlit-section">
          <figure className="gitlit-figure">
            <img className="gitlit-img gitlit-img--big" src={SurveyResults} alt="Round comparison results" />
          </figure>
        </div>
      </Black>

      {/* Final Prototype — 2 per row, NOT boxed (as original) */}
      <White
        Title="Final Prototype"
        Image={Final}
        Summary="The final prototype moves quizzes into the GitLit experience and adds clearer structure: dashboards for classes/readings, synchronous and asynchronous quiz modes (with an optional tutorial), professor and peer notes during quizzes, and usability touches like like/save/minimize on annotations."
      >
        <div className="gitlit-section">
          {/* Annotations Dashboards */}
          <div className="gitlit-grid-2">
            <figure className="gitlit-figure">
              <img className="gitlit-img" src={Annotation} alt="Annotation dashboard: classes" />
              <figcaption className="gitlit-caption">
                <strong>Annotation Dashboard — classes:</strong> shows enrolled classes and a quick summary of recent annotations.
              </figcaption>
            </figure>

            <figure className="gitlit-figure">
              <img className="gitlit-img" src={Annotation2} alt="Annotation dashboard: readings" />
              <figcaption className="gitlit-caption">
                <strong>Annotation Dashboard — readings:</strong> appears after selecting a class, listing current readings.
              </figcaption>
            </figure>
          </div>

          {/* Reading Annotations */}
          <div className="gitlit-grid-2">
            <figure className="gitlit-figure">
              <img className="gitlit-img" src={Reading} alt="Reading view with collapsed annotations" />
              <figcaption className="gitlit-caption">
                <strong>Reading Annotations — collapsed:</strong> how inline notes appear while reading.
              </figcaption>
            </figure>

            <figure className="gitlit-figure">
              <img className="gitlit-img" src={Reading2} alt="Reading view with expanded annotation menu" />
              <figcaption className="gitlit-caption">
                <strong>Reading Annotations — expanded:</strong> quick filters for professor notes, peer notes, saved, and liked.
              </figcaption>
            </figure>
          </div>

          {/* Quiz Modes & Tutorial */}
          <div className="gitlit-grid-2">
            <figure className="gitlit-figure">
              <img className="gitlit-img" src={Modes} alt="Quiz modes" />
              <figcaption className="gitlit-caption">
                <strong>Quiz Modes:</strong> choose synchronous (in class) or asynchronous (study on your own).
              </figcaption>
            </figure>

            <figure className="gitlit-figure">
              <img className="gitlit-img" src={Tutorial} alt="Onboarding tutorial" />
              <figcaption className="gitlit-caption">
                <strong>Tutorial:</strong> optional onboarding to help students get started smoothly.
              </figcaption>
            </figure>
          </div>

          {/* Enter Pin */}
          <div className="gitlit-grid-2">
            <figure className="gitlit-figure">
              <img className="gitlit-img" src={EnterPin} alt="Enter pin screen" />
              <figcaption className="gitlit-caption">
                <strong>Enter PIN (start):</strong> first screen students see when joining a quiz.
              </figcaption>
            </figure>

            <figure className="gitlit-figure">
              <img className="gitlit-img" src={EnterPin2} alt="Enter pin confirmation" />
              <figcaption className="gitlit-caption">
                <strong>Enter PIN (ready):</strong> after entering a valid PIN, the session begins.
              </figcaption>
            </figure>
          </div>

          {/* Quiz */}
          <div className="gitlit-grid-2">
            <figure className="gitlit-figure">
              <img className="gitlit-img" src={Quiz} alt="Quiz with references" />
              <figcaption className="gitlit-caption">
                <strong>Quiz:</strong> access to the paper and annotations supports evidence-based answers.
              </figcaption>
            </figure>

            <figure className="gitlit-figure">
              <img className="gitlit-img" src={Quiz2} alt="Quiz result feedback" />
              <figcaption className="gitlit-caption">
                <strong>Immediate feedback:</strong> see whether the answer was correct when time runs out.
              </figcaption>
            </figure>
          </div>

          {/* Results & Leaderboard */}
          <div className="gitlit-grid-2">
            <figure className="gitlit-figure">
              <img className="gitlit-img" src={Results} alt="Aggregated results" />
              <figcaption className="gitlit-caption">
                <strong>Results:</strong> aggregated distribution of class answers after each question.
              </figcaption>
            </figure>

            <figure className="gitlit-figure">
              <img className="gitlit-img" src={Leaderboard} alt="Leaderboard" />
              <figcaption className="gitlit-caption">
                <strong>Leaderboard:</strong> top performers surface after each question.
              </figcaption>
            </figure>
          </div>

          {/* Discussion */}
          <div className="gitlit-grid-2">
            <figure className="gitlit-figure">
              <img className="gitlit-img" src={Discussion} alt="Discussion dashboard overview" />
              <figcaption className="gitlit-caption">
                <strong>Discussion dashboard:</strong> surface missed questions and peer answers for review.
              </figcaption>
            </figure>

            <figure className="gitlit-figure">
              <img className="gitlit-img" src={Discussion2} alt="Discussion replies" />
              <figcaption className="gitlit-caption">
                <strong>Discussion replies:</strong> ask questions and respond to classmates to extend learning.
              </figcaption>
            </figure>
          </div>
        </div>
      </White>

      {/* Final Thoughts */}
      <Black
        Title="Final Thoughts"
        Image={Lightbulb}
        Summary="Across iterations, the concept moved from scattered tools to a tighter, in-product flow that keeps readers, notes, and assessment in one place. The second round validated that structure and made the experience feel more engaging and clear for participants."
        Summary2="Based on the insights we received from our second prototyping session, we know that there are people who would use and benefit from this app. If we had more time, we would prototype with more users and prototype the lecturer experience more since we focused on the student experience in our first rounds."
      >
        <div className="gitlit-section">
          <Button />
        </div>
      </Black>
    </section>
  );
}

export default GitLit;
