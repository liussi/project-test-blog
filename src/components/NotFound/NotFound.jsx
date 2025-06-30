import { Container } from "../../styles/Container.styled";
 import {Title,ButtonLink} from "../../styles/BaseStyle.styled";

function NotFound() {
  return (
    <Container>
      <Title>404 - Сторінка не знайдена</Title>
      <ButtonLink to="/">Повернутися на головну</ButtonLink>
    </Container>
  );
}

export default NotFound;