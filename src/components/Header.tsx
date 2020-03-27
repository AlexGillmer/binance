import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: ${(props): string => props.theme.headerBackground};
  margin-bottom: ${(props): string => props.theme.defaultMargin};
  padding: ${(props): string => props.theme.defaultPadding};
  text-align: center;
  width: 100%;
`;

const Header: React.FC = (): JSX.Element => {
  return <HeaderWrapper />;
};

export default Header;
