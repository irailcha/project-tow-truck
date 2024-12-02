import styled from "styled-components";
import { Link } from "react-router-dom";


export const StyledServicesListForMobile = styled.ul`
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
`;

export const StyledListItem = styled.li`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 16px;
    margin-bottom: 9px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.accent2};
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.accentHover || theme.colors.accent2};
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;