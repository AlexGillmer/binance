import React from 'react';
import styled from 'styled-components';

const SideBarWrapper = styled.div`
  background: ${(props): string => props.theme.rightSideBarBackground};
  margin-bottom: ${(props): string => props.theme.defaultMargin};
  margin-top: ${(props): string => props.theme.defaultMargin};
  min-height: 100vh;
  order: 3;
  padding: ${(props): string => props.theme.defaultPadding};
  text-align: center;
  @media (min-width: ${(props): string => props.theme.mediaSM}) {
    flex: 0 0 260px;
    margin: ${(props): string => {
      const themeMargin = props.theme.defaultMargin;
      return `${themeMargin} 0 ${themeMargin} ${themeMargin}`;
    }};
    min-height: auto;
    order: 3;
  }
`;

const RightSidebar: React.FC = (): JSX.Element => {
  return <SideBarWrapper />;
};

export default RightSidebar;
