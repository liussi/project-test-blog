import styled from "styled-components";
export const FormWrapper = styled.form`
  width: 100%;
  max-width: 375px;
  margin: 40px auto;
  padding: 16px;
  background-color: #fdfdfd;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  @media screen and (min-width: 375px) {
    max-width: 375px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 22px;
    padding-right: 22px;
    margin: 40px auto;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid #ccc;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 10px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  height: 120px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: vertical;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 10px;
    height: 150px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #2a9df4;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218ad6;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 10px 24px;
    width: auto;
  }
`;
