import styled from "styled-components";

const ServicioClinica = ({ servicio, login }) => {
  return (
    <Wrapper background={servicio.imagen.file.url}>
      <TextContainer>
        <Title>{servicio.nombre}</Title>
        <Subtitle>{servicio.descripcion}</Subtitle>
      </TextContainer>
  </Wrapper>
  );
};

export default ServicioClinica;

const Wrapper = styled.div`
  display: grid;
  align-items: flex-end;
  width: 340px;
  height: 200px;
  border-radius: 15px;
  box-shadow: 0px 20px 600px rgba(52, 53, 99, 0.2),
    0px 1px 3px rgba(0, 0, 0, 0.05);
  background: ${(props) =>
    props.background && `url(${props.background}) center no-repeat`};
  background-size: auto;
`;

const TextContainer = styled.div`
  cursor: pointer;
  display: grid;
  background: rgba(255, 255, 255, 0.3);
  padding: 20px;
  gap: 10px;
  width: 100%;

  :hover {
    height: fit-content;
    width: auto;

    p:last-child {
      visibility: visible;
      display: block;
    }
  }
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  margin: 0;
  font-weight: bold;
  color: #000000;
  margin: 0px;
`;

const Subtitle = styled.p`
  font-weight: normal;
  font-size: 12px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.7);
  margin: 0px;
  visibility: hidden;
  display: none;
`;
