import React from 'react';
import styled from 'styled-components';

const LeftSideBarWrapper = styled.div`
  background: ${(props): string => props.theme.leftBottomSideBarBackground};
  flex: 0 0 50%;
  margin-left: ${(props): string => props.theme.defaultMargin};
  padding: ${(props): string => props.theme.defaultPadding};
  text-align: center;
  @media (min-width: ${(props): string => props.theme.mediaSM}) {
    margin-left: 0;
    margin-top: ${(props): string => props.theme.defaultMargin};
  }
`;

const LeftBottomSidebar: React.FC = (): JSX.Element => {
  return <LeftSideBarWrapper />;
};

export default LeftBottomSidebar;
