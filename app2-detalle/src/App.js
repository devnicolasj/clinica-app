import { useEffect, useState } from "react";
import styled from "styled-components";
import useContentful from "./useContentful";
import ServicioClinica from "./ServicioClinica";
import { Link } from "react-router-dom";

const App = () => {
  const [detalle, setDetalle] = useState([]);
  const { getDetalle } = useContentful();

  useEffect(() => {
    getDetalle().then((response) => response && setDetalle(response));
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
      {detalle.map((detalle, index) => (
        <div align="center"><ServicioClinica key={index} detalle={detalle} /></div>
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
