import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color:rgb(11, 42, 65);
  margin: 40px 0 30px 0;
  text-shadow: 1px 1px 4px rgba(42, 157, 244, 0.5);
  letter-spacing: 2px;
`;
export const ButtonLink = styled(Link)`
  display: block;         
  width: fit-content;     
  margin: 0 auto 40px;
  padding: 10px 20px;
margin-bottom: 40px;
  background-color: #2a9df4;
  color: white;
  font-weight: 600;
  border-radius: 6px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1c6fc1;
  }
`;
