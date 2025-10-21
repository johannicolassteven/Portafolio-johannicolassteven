import styled from "styled-components";
import { projects } from "../projectsdb";

const Projects = () => {
  return (
    <Wrapper>
      <div className="project-card">
        {projects.map((project) => {
          const { name, url, img, git } = project;
          return (
            <div className="body-card">
              <h1>{name}</h1>
              <a href={url} target="_blank" rel="noopener">
                <img src={img} alt="" />
              </a>
              <div className="description">
                <p>
                  <a href={git} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      width="15"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>{" "}
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  background-color: #d8c7c1;

  .project-card {
    object-fit: cover;
    width: 90%;
    text-align: center;

    img {
      width: 100%;
      height: 300px;
      object-position: 50% 0%;
      object-fit: cover;
      border-radius: 15px;
      border: solid 2px black;
    }
    .description {
      display: flex;
      justify-content: center;
      a{
        color: black;
        text-decoration: none;
      }
    }
  }

  .body-card {
    max-width: 500px;
    margin: auto;
  }

  @media (min-width: 992px) {
    .project-card {
      display: flex;
      justify-content: space-around;
    }
    .body-card {
      width: 400px;
    }
  }
`;

export default Projects;
