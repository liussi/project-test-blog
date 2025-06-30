import styled from "styled-components";

export const Container = styled.div `
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  overflow:hidden;


@media screen and (min-width: 375px) {
    width: 375px;
    
}

@media screen and (min-width: 768px) {
     padding-left: 22px;
    padding-right: 22px;
    width: 768px;
  }


@media screen and (min-width: 1440px) {
     padding-left: 32px;
    padding-right: 32px;
    width: 1440px;
  }


`;