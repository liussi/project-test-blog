import styled from 'styled-components';

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: rgb(59, 154, 226);
  margin: 40px 0 30px 0;
  text-shadow: 1px 1px 4px rgba(42, 157, 244, 0.5);
  letter-spacing: 2px;

  @media screen and (min-width: 375px) {
    font-size: 20px;
    margin: 45px 0 35px 0;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin: 50px 0 40px 0;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    margin: 60px 0 50px 0;
  }
`;

export const PostContent = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 16px;
  overflow-wrap: break-word;


  @media screen and (min-width: 375px) {
    font-size: 15px;
    margin-bottom: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    margin-bottom: 24px;
  }
`;

export const PostDate = styled.p`
  font-size: 12px;
  color: #666;
  margin-bottom: 24px;

  @media screen and (min-width: 375px) {
    font-size: 13px;
    margin-bottom: 26px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 15px;
    margin-bottom: 32px;
  }
`;
