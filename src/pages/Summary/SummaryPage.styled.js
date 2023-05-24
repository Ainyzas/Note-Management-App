import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 75%;
  text-align: center;
`;

export const StyledSummaryDiv = styled.div`
  width: 80%;
  margin: 4rem auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;

    ${StyledTable} {
      width: 90%;
    }
  }
`;

export const StyledTableHeader = styled.th`
  font-size: 20px;
  background-color: var(--secondary-color);
  padding: 0.5rem;
  letter-spacing: 0.15rem;

  :nth-child(1) {
    border-right: 2px solid white;
  }
`;

export const StyledTableRow = styled.tr`
  color: white;
  background-color: var(--secondary-background);

  :nth-child(2n) {
    background-color: var(--secondary-color);
  }
`;

export const StyledTableCell = styled.td`
  font-size: 20px;
  font-weight: 500;
  padding: 0.5rem;

  :nth-child(1) {
    border-right: 2px solid white;
  }
`;
