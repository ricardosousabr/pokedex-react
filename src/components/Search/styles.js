import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h1`
 color: white;
 padding-bottom: 35px;
`;

export const NamePoke = styled.h2`
 color: white;
 padding: 35px 0;
 text-align: center;
`;

export const ItemList = styled.li`
  list-style: none;
`;

export const InformationPokemon = styled.div`
  color: white;
`;

export const Button = styled.button`
  background: #6f6799;
  color: white;
  width: 90px;
  border: none;
  height: 30px;
  border-radius: 14px;
`;

export const BoxSearch = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 350px;

`;

export const SearchInput = styled.input`
  width: 200px;
  height: 30px;
  color: white;
  background: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid;
  :focus {
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid;
    outline: 0;
  }
`;

export const BarStatus = styled.progress`
  height: 10px;
  border-radius: 10px;

  ::-webkit-progress-value {
    background-color: red;
  }
`;