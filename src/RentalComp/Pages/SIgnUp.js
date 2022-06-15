import React, { useState } from "react";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import * as yup from "yup";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import pix from "../Pages/user.png";
import { useNavigate } from "react-router-dom";

const SIgnUp = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(pix);
  const [avatar, setAvatar] = useState("");

  const formSchema = yup.object().shape({
    fullname: yup.string().required("Field can't be empty"),
    email: yup.string().email().required("Field can't be empty"),
    password: yup.string().required("Field can't be empty"),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password doesn't match"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setAvatar(file);
  };

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const { fullname, email, password } = value;
    const local = "http://localhost:9108";
    const url = `${local}/api/user/register`;

    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    const config = {
      "content-type": "multipart/form-data",
      onUploadProgress: (ProgressEvent) => {
        const { loaded, total } = ProgressEvent;
        const percent = Math.floor((loaded * 100) / total);
        console.log(percent);
      },
    };

    const options = {
      onUploadProgress: (ProgressEvent) => {
        const { loaded, total } = ProgressEvent;
        const percent = Math.floor((loaded * 100) / total);
        console.log(percent);
      },
    };

    await axios.post(url, formData, config).then((res) => {
      console.log("Error Data:", res);
    });

    navigate("/");
  });
  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Right>
          <ImageHolder>
            <Image src={image} />
            <ImageLabel htmlFor="pix">Upload Image</ImageLabel>
            <ImageInput
              id="pix"
              onChange={handleImage}
              type="file"
              accept="image/*"
            />
          </ImageHolder>
          <Form onSubmit={onSubmit} type="multipart/form-data">
            <Inputs>
              <Inputholder>
                <Label>fullname</Label>
                <Input
                  placeholder="input Username"
                  {...register("fullname")}
                  type="text"
                />
                <Error>{errors.message && errors?.message.fullname}</Error>
              </Inputholder>
              <Inputholder>
                <Label>Email address</Label>
                <Input
                  placeholder="input email"
                  {...register("email")}
                  type="email"
                />
                <Error>{errors.message && errors?.message.email}</Error>
              </Inputholder>
              <Inputholder>
                <Label>Password</Label>
                <Input
                  placeholder="input password"
                  {...register("password")}
                  type="password"
                />
                <Error>{errors.message && errors?.message.password}</Error>
              </Inputholder>
              <Inputholder>
                <Label>Confirm Password</Label>
                <Input
                  placeholder="Confirm password"
                  {...register("confirm")}
                />
                <Error>{errors.message && errors?.message.confirm}</Error>
              </Inputholder>
            </Inputs>
            <Buttons>
              <Button type="submit">Sign Up</Button>
            </Buttons>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default SIgnUp;
//#090909
const Error = styled.div`
  color: red;
  font-weight: 500;
  font-size: 12px;
`;
const ImageHolder = styled.div`
  width: 90%;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  // background-color: red;
`;
const ImageInput = styled.input`
  display: none;
`;
const ImageLabel = styled.label`
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border-radius: 3px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border: 1.5px solid blue;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: darkorange;
  margin-bottom: 20px;

  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
const Line = styled.div`
  background-color: blue;
  width: 1px;
  height: 80vh;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Right = styled.div`
  @media (max-width: 768px) {
    flex: 1;
  }
  flex: 0.5;
  min-height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: royalblue;
`;
const Left = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  flex: 0.6;
  min-height: 90px;
  background-image: url("/images/C0.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
const Wrapper = styled.div`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  width: 80%;
  min-height: 80vh;
  display: flex;
  margin-top: 15px;
`;
const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  @media (max-width: 768px) {
    flex: 1;
  }
  width: 90%;
  min-height: 65%;
  opacity: 0.8;
  // background-color: gold;
  border-radius: 7px;
  padding: 20px 32px;
`;
const Buttons = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* background-color: red; */
  align-items: center;
  margin-top: 30px;
`;
const Button = styled.button`
  /* background-color: royalblue; */
  background-color: blue;
  padding: 14px 22px;
  border-radius: 7px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  :hover {
    transform: scale(1.09);
    background-color: white;
    border: 1px solid blue;
    color: black;
    font-size: 20px;
    font-weight: 600;
  }
`;
const Applesignup = styled.div`
  @media (max-width: 768px) {
    margin-right: 5px;
  }
  :hover {
    transform: scale(1.04);
    background-color: blue;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: 600;
  }
  span {
    margin-left: 10px;
  }
  font-size: 19px;
  cursor: pointer;
  background-color: white;
  border: 1px solid blue;
  width: 100%;
  height: 55px;
  padding: 0 5px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;
const GOOglesignup = styled.div`
  @media (max-width: 768px) {
    margin-right: 5px;
  }
  :hover {
    transform: scale(1.04);
    background-color: blue;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: 600;
  }
  span {
    margin-left: 10px;
  }
  font-size: 19px;
  cursor: pointer;
  background-color: white;
  border: 1px solid blue;
  width: 100%;
  height: 55px;
  padding: 0 5px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: black;
`;
const Inputs = styled.div`
  // margin-top: 30px;
`;
const Inputholder = styled.div`
  margin-bottom: 20px;
`;
const Label = styled.div`
  font-weight: 700;
  color: black;
`;
const Input = styled.input`
  :focus {
    /* outline: 1px solid royalblue; */
  }
  font-size: 17px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 0 5px;
  width: 100%;
  height: 45px;
  border: 1px solid blue;
  outline: none;
  border-radius: 6px;
  margin-top: 7px;
`;
