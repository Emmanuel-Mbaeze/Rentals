import React, { useEffect ,useState} from "react";
import styled from "styled-components";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { BiUserCircle } from "react-icons/bi";
import { BsGearWideConnected } from "react-icons/bs";

import axios from "axios"
import {useDispatch} from "react-redux"
const Card = () => {
  return (
    <Container>
      <Wrapper>
        <Up>
          <Top>
            <Title>{}</Title>
            <Love>
              <FcLike color="red" />
            </Love>
          </Top>
          <Bottom>
            <Text>{}</Text>
          </Bottom>
        </Up>
        <Center />
        <Down>
          <Left>
            <Licon>
              <BiUserCircle color="blue" />
            </Licon>
            <Num></Num>
          </Left>
          <Centre>
            <Licon>
              <BsGearWideConnected color="blue" fontSize="18px" />
            </Licon>
            <Num>{}</Num>
          </Centre>
          <Right>
            <Navs>
              <Nav>{}</Nav>

              <span></span>
            </Navs>
          </Right>
        </Down>
      </Wrapper>
    </Container>
  );
};

export default Card;
const Down = styled.div`
  width: 100%;
  height: 60px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Right = styled.div`
  width: 32%;
  /* background-color: cyan; */
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Nav = styled.div`
  /* margin-top: 7px; */
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transform: scale(1.03);
`;
const Navs = styled.div`
  display: flex;
  transition: all 950ms;

  font-weight: 400;
  span {
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transform: scale(1.05);
    color: gray;
  }
`;
const Centre = styled.div`
  width: 35%;
  /* background-color: violet; */
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Licon = styled.div`
  font-size: 20px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Num = styled.div`
  font-weight: 400;
  color: gray;
  margin-left: 3px;
`;
const Left = styled.div`
  width: 15%;
  height: 60px;
  /* background-color: beige; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Text = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: gray;
`;
const Bottom = styled.div`
  margin-bottom: 8px;
`;
const Love = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
`;
const Center = styled.img`
  width: 100%;
  height: 110px;
  object-fit: cover;
`;

const Up = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;
const Wrapper = styled.div`
  width: 230px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 250px;
  min-height: 200px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  margin-left: 13px;
  margin-bottom: 18px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
