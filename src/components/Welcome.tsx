import styled from "styled-components";
import Projects from "./Projects";

const Welcome = () => {
  return (
    <Wrapper>
      <div className="welcome-section">
        <div>
        <h1>Hi! I'm Nicolas</h1>
        <p>
          <i className="fa-brands fa-react fa-spin"></i>React Developer
        </p> 
        </div>
      </div>
      <img src="https://i.ibb.co/JkZRQmh/Img-Nicolas-Espinosa.jpg" alt="Img-Nicolas-Espinosa"/>
      <Projects></Projects>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: auto;
  text-align: center;
  background-color: beige;
  .welcome-section{
    padding:3rem;
  }
  h1{
    font-size: 3rem;
    margin: 0;
  }
  p{
    font-size: 2rem;
    margin: 0;
  }
  img{
    margin-bottom: 3rem ;
    width: 200px;
    border-radius: 50%;
  }
  i{
    color: #004358d5;
  }
`;

export default Welcome;
