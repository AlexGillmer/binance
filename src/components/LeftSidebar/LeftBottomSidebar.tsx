import React from 'react';
import styled from 'styled-components';

const LeftSideBarWrapper = styled.div`
  padding: ${(props): string => props.theme.defaultPadding};
  text-align: center;
  background: ${(props): string => props.theme.leftBottomSideBarBackground};
  flex: 0 0 50%;
  margin-left: ${(props): string => props.theme.defaultMargin};
  @media (min-width: ${(props): string => props.theme.mediaSM}) {
    margin-top: ${(props): string => props.theme.defaultMargin};
    margin-left: 0;
  }
`;

const LeftBottomSidebar: React.FC = (): JSX.Element => {
  return <LeftSideBarWrapper />;
};

export default LeftBottomSidebar;
