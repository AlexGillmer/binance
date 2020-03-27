import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  text-align: center;
  background-color: ${(props): string => props.theme.headerBackground};
  width: 100%;
  padding: ${(props): string => props.theme.defaultPadding};
  margin-bottom: ${(props): string => props.theme.defaultMargin};
`;

const Header: React.FC = (): JSX.Element => {
  return <HeaderWrapper />;
};

export default Header;
