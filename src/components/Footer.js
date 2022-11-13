import React from "react";
import styled from "@emotion/styled";
import {
  Email,
  GitHub,
  LinkedIn,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import {mobile} from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  
  ${mobile({flexDirection:"column"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display:"none"})}
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
padding: 20px;
  flex: 1;
  ${mobile({backgroundColor:"#f9ebeb"})}
`;
const ContactItem = styled.div`
margin-bottom:20px;
display: flex;
align-items: center;
`;
const Payment = styled.img``;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>.ARM</Logo>
        <Desc>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when
        </Desc>
        <SocialContainer>
          <SocialIcon color="#0099ff">
            <Twitter></Twitter>
          </SocialIcon>
          <SocialIcon color="#000000">
            <GitHub></GitHub>
          </SocialIcon>
          <SocialIcon color="#005ce6">
            <LinkedIn></LinkedIn>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Armenia, Yerevan, Arabkir
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +374 55 36 88 07
        </ContactItem>
        <ContactItem>
          <Email style={{marginRight:"10px"}}/> armine.demirchyan.tech@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
