import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  background: #1998f6;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  max-width: 1500px;
`;

export const Title = styled(Link)`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

  .fa-typo3 {
    margin-left: 0.5rem;
    font-size: 1.8rem;
  }
`;

export const TextLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    border-bottom: 2px solid #fff;
    transition: all 0.2s ease-out;
  }
`;

export const MenuIcon = styled.i`
  display: none;
`;

export const Item = styled.li`
  height: 80px;
`;

export const NavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 60vw;
  justify-content: end;
  margin-right: 2rem;
`;

export const NavMenuActive = styled.div``;
