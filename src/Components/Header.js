import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;
