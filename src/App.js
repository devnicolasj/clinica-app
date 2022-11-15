import { useEffect, useState } from "react";
import styled from "styled-components";
import useContentful from "./useContentful";
import ServicioClinica from "./ServicioClinica";

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
