import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const ContainerImage = styled.div`
  margin-bottom: 100px;
`;

export const ContainerForm = styled.div`
  margin-bottom: 50px;
`;
export const ContainerPokemon = styled.div`
  margin-bottom: 50px;
`;

export const NamePoke = styled.h2`
  padding: 35px 0;
  text-align: center;
`;

export const ListSkils = styled.ul`
  list-style: none;
`;

export const Button = styled.button`
  background: #434343;
  color: white;
  width: 100px;
  height: 35px;
  border-top: 1px solid #010201;
  border-right: 1px solid #010201;
  border-left: 4px solid #010201;
  border-bottom: 4px solid #010201;
  border-radius: 4px;
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
  background: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid;
  ::placeholder {
    color: black;
  }
  :focus {
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid;
    outline: 0;
  }
`;
