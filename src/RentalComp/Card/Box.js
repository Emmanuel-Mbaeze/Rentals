import React from "react";
import styled from "styled-components";
const Box = ({ Title, num, pw }) => {
  return (
    <Container>
      <Up>{Title}</Up>
      <Center>{num}</Center>
      <Down>{pw}</Down>
    </Container>
  );
};

export default Box;
const Down = styled.div`
  color: gray;
  font-weight: 500;
`;
const Center = styled.div`
  font-weight: bold;
`;
const Up = styled.div`
  font-weight: 500;
  font-size: 15px;
`;
const Container = styled.div`
  width: 115px;
  height: 80px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;
