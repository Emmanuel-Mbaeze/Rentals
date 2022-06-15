import React from "react";
import styled from "styled-components";
import { BiUserCircle } from "react-icons/bi";
import Card from "../Card/Card";
const Booking = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>
            <span>Book Cars</span> in easy steps
          </Title>
          <Text>
            Renting a car brings you freedom and we will help
            <br /> you find the best car for you at a great price
          </Text>
        </Left>
        <Right>
          <Rleft>
            <Top>
              <Upper>
                <Icon>
                  <BiUserCircle color="blue" fontSize="20px" />
                </Icon>{" "}
                <span>Pick-up</span>{" "}
              </Upper>
              <Lower>
                <input placeholder="Input Pickup Location" />
              </Lower>
            </Top>
            <Bottom>
              <One>
                <Upper>
                  <Icon>
                    <BiUserCircle color="blue" fontSize="20px" />
                  </Icon>{" "}
                  <span>Pickup-Date</span>{" "}
                </Upper>
                <Lower1>
                  <input placeholder="Input Pickup Date" />
                </Lower1>
              </One>
              <Two>
                <Upper>
                  <Icon>
                    <BiUserCircle color="blue" fontSize="20px" />
                  </Icon>{" "}
                  <span>Pickup-Time</span>{" "}
                </Upper>
                <Lower1>
                  <input placeholder="Input Pickup Time" />
                </Lower1>
              </Two>
            </Bottom>
          </Rleft>
          <Rleft>
            <Top>
              <Upper>
                <Icon>
                  <BiUserCircle color="blue" fontSize="20px" />
                </Icon>{" "}
                <span>Drop-off</span>{" "}
              </Upper>
              <Lower>
                <input placeholder="Input Dropoff Location" />
              </Lower>
            </Top>
            <Bottom>
              <One>
                <Upper>
                  <Icon>
                    <BiUserCircle color="blue" fontSize="20px" />
                  </Icon>{" "}
                  <span>Dropoff-Date</span>{" "}
                </Upper>
                <Lower1>
                  <input placeholder="Input Dropoff Date" />
                </Lower1>
              </One>
              <Two>
                <Upper>
                  <Icon>
                    <BiUserCircle color="blue" fontSize="20px" />
                  </Icon>{" "}
                  <span>Dropoff-Time</span>{" "}
                </Upper>
                <Lower1>
                  <input placeholder="Input Dropoff Time" />
                </Lower1>
              </Two>
            </Bottom>
          </Rleft>
        </Right>
      </Wrapper>
      <Cars>
        <Card
          title="718 cayPorsheman s"
          text="Coupe"
          image="/images/C0.png"
          num="4"
          price="$7500"
          currency="/d"
          gear="Manual"
        />
        <Card
          title="chevrolet"
          text="Sedan"
          image="/images/C2.png"
          num="2"
          price="$3500"
          currency="/d"
          gear="Matic"
        />
        <Card
          title="Toyota"
          text="Coupe"
          image="/images/C6.png"
          num="9"
          price="$500"
          currency="/d"
          gear="Manual"
        />
        <Card
          title="Ferrari"
          text="Coupe"
          image="/images/C7.png"
          num="9"
          price="$5900"
          currency="/d"
          gear="Matic"
        />
        <Card
          title="Innoson Motors"
          text="Coupe"
          image="/images/C11.png"
          num="9"
          price="$700"
          currency="/d"
          gear="Manual"
        />
        <Card
          title="Lexus"
          text="Coupe"
          image="/images/C8.png"
          num="9"
          price="$900"
          currency="/d"
          gear="Matic"
        />
        <Card
          title="Venza"
          text="Suv"
          image="/images/C9.png"
          num="2"
          price="$5300"
          currency="/d"
          gear="Manual"
        />
      </Cars>
    </Container>
  );
};

export default Booking;
// const Container=styled.div``
const Cars = styled.div`
  @media (max-width: 425px) {
    /* background-color: gainsboro; */
    width: 83%;
    margin-right: 20px;
  }
  width: 86%;
  margin-top: 50px;
  min-height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  /* margin: 16px; */
`;
const Lower1 = styled.div`
  height: 35px;
  margin-top: 4px;
  input {
    width: 95%;
    padding: 0 3px;
    height: 39px;
    font-weight: bold;
    outline: none;
    border: none;
    font-size: 13px;
    border-radius: 5px;
    background-color: #eee;
    color: black;
    /* flex: 1; */
  }
`;
const Two = styled.div`
  width: 47%;
`;
const One = styled.div`
  width: 47%;
`;
const Bottom = styled.div`
  min-height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Icon = styled.div``;
const Lower = styled.div`
  height: 39px;
  width: 100%;
  display: flex;

  input {
    padding: 0 3px;
    height: 39px;
    font-weight: bold;
    outline: none;
    border: none;
    font-size: 13px;
    border-radius: 5px;
    background-color: #eee;
    color: black;
    flex: 1;
  }
`;
const Upper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 20px;
  /* background-color: palegoldenrod; */
  span {
    font-weight: bold;
    font-size: 15px;
    margin-left: 5px;
    margin-bottom: 3px;
  }
`;

const Top = styled.div`
  min-height: 70px;
  width: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;
const Rleft = styled.div`
  @media (max-width: 425px) {
    width: 100%;
  }
  min-height: 150px;
  width: 50%;
  margin: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
// const Rright=styled.div``
const Right = styled.div`
  min-height: 200px;
  width: 61%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  /* background-color: rebeccapurple; */
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  @media (max-width: 425px) {
    font-size: 31px;
  }
  @media (max-width: 1024px) {
    font-size: 25px;
  }
  @media (max-width: 375px) {
    font-size: 23px;
  }
  font-size: 39px;
  font-weight: bold;
  span {
    color: blue;
  }
`;
const Text = styled.div`
  @media (max-width: 425px) {
    font-size: 15px;
  }
  @media (max-width: 375px) {
    font-size: 11px;
  }
  color: gray;
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;
`;

const Left = styled.div`
  @media (max-width: 768px) {
    // flex-direction: column;
    width: 100%;
    text-align: center;
    height: 150px;
  }
  @media (max-width: 425px) {
    height: 125px;
  }

  height: 250px;
  width: 39%;
  // background-color: red;
`;
const Wrapper = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
  width: 82%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  /* background-color: burlywood; */
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;
