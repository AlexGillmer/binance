import React from 'react';
import styled from 'styled-components';

const SideBarWrapper = styled.div`
  background: ${(props): string => props.theme.rightSideBarBackground};
  padding: ${(props): string => props.theme.defaultPadding};
  order: 3;
  text-align: center;
  margin-top: ${(props): string => props.theme.defaultMargin};
  margin-bottom: ${(props): string => props.theme.defaultMargin};
  min-height: 100vh;
  @media (min-width: ${(props): string => props.theme.mediaSM}) {
    flex: 0 0 260px;
    order: 3;
    margin: ${(props): string => {
      const themeMargin = props.theme.defaultMargin;
      return `${themeMargin} 0 ${themeMargin} ${themeMargin}`;
    }};
    min-height: auto;
  }
`;

const RightSidebar: React.FC = (): JSX.Element => {
  return <SideBarWrapper />;
};

export default RightSidebar;
