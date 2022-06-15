import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Up>
            <Title>Car Types</Title>
            <Types>
              <Navs>
                <Nav>Coupe</Nav>
                <span>(12)</span>
              </Navs>
              <Navs>
                <Nav>Sedan</Nav>
                <span>(3)</span>
              </Navs>
              <Navs>
                <Nav>Hatchback</Nav>

                <span>(5)</span>
              </Navs>
              <Navs>
                <Nav>MPV</Nav>

                <span>(35)</span>
              </Navs>
              <Navs>
                <Nav>Suv</Nav>

                <span>(78)</span>
              </Navs>
            </Types>
          </Up>
          <Center>
            <Title>Capacity</Title>
            <Types>
              <Navs>
                <Nav>1-4</Nav>
                <span>(82)</span>
              </Navs>
              <Navs>
                <Nav>5-9</Nav>
                <span>(73)</span>
              </Navs>
              <Navs>
                <Nav>10</Nav>

                <span>(52)</span>
              </Navs>
            </Types>
          </Center>
          <Down>
            <Title>Recommendation</Title>
            <Types>
              <Navs>
                <Nav>50%-70%</Nav>
                <span>(81)</span>
              </Navs>
              <Navs>
                <Nav>80%-100%</Nav>
                <span>(9)</span>
              </Navs>
            </Types>
          </Down>
        </Left>
        <Right>
          <Card />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Hero;
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
const Right = styled.div`
  @media (max-width: 768px) {
    width: 45%;
  }
  @media (max-width: 425px) {
    width: 100%;
    justify-content: center;
  }

  width: 70%;

  /* background-color: aqua; */
  /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); */
  min-height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  /* margin: 16px; */
`;
const Types = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  /* background-color: red; */
`;
const Nav = styled.div`
  margin-top: 7px;
  font-weight: 500;
  cursor: pointer;
  transform: scale(1.03);
  font-size: 14px;
`;
const Navs = styled.div`
  display: flex;
  transition: all 950ms;

  font-weight: 400;
  span {
    margin-top: 7px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transform: scale(1.05);
  }
`;
const Title = styled.div`
  margin: 5px 0;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  transform: scale(1.08);
  padding: 0 7px;
`;
const Down = styled.div`
  width: 90%;
  min-height: 50px;
  /* background-color: rebeccapurple; */
`;
const Center = styled.div`
  width: 90%;
  min-height: 70px;
  /* background-color: rebeccapurple; */
`;
const Up = styled.div`
  width: 90%;
  min-height: 30px;

  /* background-color: rebeccapurple; */
`;
const Left = styled.div`
  /* position: fixed; */
  @media (max-width: 768px) {
    width: 40%;
  }
  @media (max-width: 425px) {
    display: none;
  }
  width: 25%;
  min-height: 87vh;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  /* margin-right: 400px; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 13px;
`;

const Wrapper = styled.div`
  @media (max-width: 768px) {
    justify-content: space-between;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  /* background-color: blue; */
  width: 84%;
  height: 100vh;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 13px;
  /* background-color: antiquewhite; */
`;
