import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
 border: 1px solid #ddd;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
flex: 1 1 225px;
max-width: 225px;
`;

export const TitleLink = styled(Link)`
 text-decoration: none;
  color: #2a9df4;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 8px;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContentText = styled.p`
  margin: 0;
  color: #333;
  font-size: 10px;
  line-height: 1.4;
  word-break: break-word; 
`;