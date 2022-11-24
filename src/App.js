import { useEffect, useState } from "react";
import styled from "styled-components";
import useContentful from "./useContentful";
import ServicioClinica from "./ServicioClinica";
import { Link } from "react-router-dom";

const App = () => {
  const [servicios, setServicios] = useState([]);
  const { getServicios } = useContentful();

  useEffect(() => {
    getServicios().then((response) => response && setServicios(response));
  });

  return (
    
    <Wrapper>
      <TitleWrapper>
        <div align="center"><h1>Marketplace Clínica Imperial</h1>
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
      {servicios.map((servicio, index) => (
        <div align="center"><ServicioClinica key={index} servicio={servicio} /></div>
      ))}
      
    </Wrapper>
    
    
  );
};

export default App;

const Wrapper = styled.div`
  font-family: "Calibri";
  margin: 40px;
  background: url("https://img.freepik.com/fotos-premium/interior-borroso-hospital-o-clinica-personas_1484-2139.jpg?w=2000");

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
