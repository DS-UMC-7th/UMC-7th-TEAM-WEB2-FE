import React from "react";
import styled from "styled-components";
import { FooterLink, FooterP, ImgDiv } from "../Footer/Footer.style";
import { Link } from "react-router-dom";
import search from "../../assets/img/search.png";

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px 60px;
`;

const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const LogoImgDiv = styled(ImgDiv)`
  width: 90px;
  height: 50px;
`;

const NavMenu = styled(FooterLink)`
  margin: 0;
  margin-left: 3vw;
  width: 20%;
`;

const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;
`;

const SearchInput = styled.input`
  background-color: #f1f1f1;
  border-radius: 35px;
  outline: none;
  border: none;
  width: 320px;
  height: 40px;

  font-family: "Elice DX Neolli";
  font-weight: 300;
  font-size: 12px;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.gray};
`;

const SearchButton = styled.button`
  background: url(${search});
  background-repeat: no-repeat;
  background-position: center;

  border: none;

  position: absolute;
  width: 40px;
  height: 40px;
  top: 0;
  bottom: 0;
  right: 5px;
  margin: auto 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: "Elice DX Neolli";
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
`;

export { NavDiv, NavContainer, LogoImgDiv, NavMenu, SearchInput, SearchDiv, SearchButton, NavLink };
