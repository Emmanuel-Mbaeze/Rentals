import React from "react";
import styled from "styled-components";
import Box from "../Card/Box";
const Detail = () => {
  return (
    <div>
      <Container>
        <Detailed>
          <Left>
            <img src="/images/C7.png" />
            <Text>
              <Title>Lexus</Title>
              <Sub>Coupe</Sub>
            </Text>
          </Left>
          <RIght>
            <One>
              <Test>
                <h3>Car Specs</h3>
                <span>see more</span>
              </Test>
              <Border>
                <Box Title="Max. Power" num="320" pw="hp" />
                <Box Title="0-60 mph" num="4.4" pw="sec" />
                <Box Title="Top Speed " num="177" pw="mph" />
              </Border>
            </One>
            <Two>
              <Car>
                <h3>Car Info</h3>
              </Car>
              <Info>
                <RightHold>
                  <Top>
                    <Icon />
                    <SubT>
                      <h4>2 Passenger</h4>
                    </SubT>
                  </Top>
                  <Centre>
                    <Icon />
                    <SubT>
                      <h4>Air Conditioning</h4>
                    </SubT>
                  </Centre>
                  <Below>
                    <Icon />
                    <SubT>
                      <h4>Unlimited Mileage</h4>
                    </SubT>
                  </Below>
                </RightHold>
                <LeftHold>
                  <Top>
                    <Icon />
                    <SubT>
                      <h4>2 Doors</h4>
                    </SubT>
                  </Top>
                  <Centre>
                    <Icon />
                    <SubT>
                      <h4>Manual</h4>
                    </SubT>
                  </Centre>
                  <Below>
                    <Icon />
                    <SubT>
                      <h4>Fuel Info:Full to Full</h4>
                    </SubT>
                  </Below>
                </LeftHold>
              </Info>
            </Two>
            <Three>
              <h3>
                $4500<span>/d</span>
              </h3>
              <Button>
                <button>Go To Book</button>
              </Button>
            </Three>
          </RIght>
        </Detailed>
      </Container>
    </div>
  );
};

export default Detail;
// const Container = styled.div``
// const Container = styled.div``
const Three = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 > span {
    color: gray;
  }
`;
const Button = styled.div`
  :hover > button {
    background-color: transparent;
    border: 1.5px solid blue;
    transform: scale(1.05);
    color: black;
  }
  button {
    padding: 16px 20px;
    color: black;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: blue;
    color: white;
    border-radius: 6px;
    font-weight: bold;
    font-size: 13px;
    transition: all 550ms;
  }
`;
const SubT = styled.div`
  h4 {
    margin-left: 9px;
    font-weight: 600;
  }
`;
const Icon = styled.div`
  width: 15px;
  height: 15px;
  background-color: blue;
  border-radius: 100%;
`;
const LeftHold = styled.div`
  min-height: 80px;
  /* background-color: silver; */
  width: 49%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const RightHold = styled.div`
  min-height: 80px;
  /* background-color: gold; */
  width: 49%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const Below = styled.div`
  height: 35px;
  /* background-color: blue; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Centre = styled.div`
  height: 35px;
  /* background-color: greenyellow; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  /* background-color: green; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Car = styled.div`
  height: 45px;
  /* background-color: pink; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.div`
  min-height: 80px;
  /* background-color: red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Border = styled.div`
  height: 80px;
  /* background-color: pink; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Test = styled.div`
  height: 45px;
  /* background-color: green; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 17px;
    color: blue;
  }
`;
const One = styled.div`
  width: 100%;
  min-height: 130px;
  /* background-color: peru; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Two = styled.div`
  width: 100%;
  min-height: 130px;
  /* background-color: peru; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const RIght = styled.div`
  padding: 0 8px;
  width: 418px;
  min-height: 72vh;
  /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); */
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;
`;
const Text = styled.div`
  /* background-color: green; */
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 32px;
`;
const Sub = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: gray;
`;
const Left = styled.div`
  img {
    height: 440px;
    object-fit: cover;
  }
  width: 678px;
  min-height: 72vh;
  /* background-color: brown; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Detailed = styled.div`
  flex-wrap: wrap;
  width: 82%;
  min-height: 80vh;
  /* background-color: navajowhite; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  /* background-color: red; */
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
