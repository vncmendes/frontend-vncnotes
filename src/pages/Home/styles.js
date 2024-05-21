import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`
export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > li {
    padding-top: 44px;
    text-align: center;
  } 

`

export const Search = styled.div`
   grid-area: search;
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
   padding: 64px 64px;

   > input {
    width: 100%;
    height: 40px;

    border: none;
    border-radius: 5px;

    padding-left: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
   }
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;
`

export const NewNote = styled(Link)`
  grid-area: newnote;
  
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
    margin-right: 8px;
  }
`