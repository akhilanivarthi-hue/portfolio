import './App.css';
import { Link } from 'react-router-dom';

function Projects({ Title, Label, Image, Href, ImgBg }) {
  const isHash = Href && Href.startsWith('#');
  const isExternal = Href && /^https?:\/\//i.test(Href);

  const Img = (
    <img
      src={Image}
      className="project-image-home"
      alt={Title}
      /* This sets the backdrop color for letterboxed areas */
      style={{ '--project-img-bg': ImgBg }}
    />
  );

  return (
    <article className="project-card-home">
      {isExternal ? (
        <a
          href={Href}
          className="project-image-link"
          aria-label={`Open ${Title}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {Img}
        </a>
      ) : isHash ? (
        <a href={Href} className="project-image-link" aria-label={`Open ${Title}`}>
          {Img}
        </a>
      ) : (
        <Link to={Href} className="project-image-link" aria-label={`Open ${Title}`}>
          {Img}
        </Link>
      )}

      <div className="project-body-home">
        <h3 className="project-title-home">{Title}</h3>
        <p className="project-label-home">{Label}</p>

        {isExternal ? (
          <a
            href={Href}
            className="project-button-home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        ) : isHash ? (
          <a href={Href} className="project-button-home">Read more</a>
        ) : (
          <Link to={Href} className="project-button-home">Read more</Link>
        )}
      </div>
    </article>
  );
}

export default Projects;
