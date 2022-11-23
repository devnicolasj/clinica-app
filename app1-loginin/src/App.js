import { useEffect, useState } from "react";
import styled from "styled-components";
import useContentful from "./useContentful";
import ServicioClinica from "./ServicioClinica";
import { Link } from "react-router-dom";

const App = () => {
  const [loginin, setLoginin] = useState([]);
  const { getLoginin } = useContentful();

  useEffect(() => {
    getLoginin().then((response) => response && setLoginin(response));
  });

  return (
    
    <Wrapper>
      <TitleWrapper>
        <div align="center"><h1>Marketplace Clínica Imperial :D</h1>
          <p>Para más información presione alguno de los siguientes apartados</p>
          <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/detalle">Detalle</Link> |{" "}
        <Link to="/checkout">Checkout</Link>
      </nav>
    </div>
        </div>
      </TitleWrapper>
      {loginin.map((loginin, index) => (
        <div align="center"><ServicioClinica key={index} loginin={loginin} /></div>
      ))}
      
    </Wrapper>
    
    
  );
};

export default App;

const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;

  display: grid;
  row-gap: 40px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;
`;
