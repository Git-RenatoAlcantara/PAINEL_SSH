import styled from "styled-components";

const Title = styled.p`
  text-align: center;
  margin-top: 18%;
  width: 100%;
  font-size: 2rem;
  font-weight: 300;
  @media screen and (min-width: 1024px) {
    margin-top: 10%;
  }
  @media screen and (min-width: 900px) {
    margin-top: 14%;
  }
`;
const BoxBackground = styled.body`
  background: #e9ecef;
  width: 100vw;
  height: 100vh;
`;

const ErrorMessage = styled.p`
  display: block;
  width: 50%;
  margin-left: calc(100% / 3);
  color: red;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const ButtonStyle = styled.button`
  display: block;
  width: 100%;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  background: #cdd9ed;
  border: none;
  &:hover {
    border: 1px solid #cdd9ed;
    background: #fff;
  }
`;

const ButtonRegister = styled(ButtonStyle)`
  margin-top: 10px;
`;
const InputFields = styled.input`
  display: block;
  width: 100%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border-radius: 6px;
  -webkit-appearance: none;
  color: #99a3ba;
  border: 1px solid #cdd9ed;
  background: #fff;
  transition: border 0.3s ease;
  &::placeholder {
    color: #cbd1dc;
  }
  &:focus {
    outline: none;
    border-color: #275efe;
  }
`;

const UserInput = styled(InputFields)``;

const PassInput = styled(InputFields)`
  margin-top: 5px;
`;

const BoxTitle = styled.p``;
export {
  BoxBackground,
  UserInput,
  ErrorMessage,
  Title,
  PassInput,
  ButtonRegister
};
