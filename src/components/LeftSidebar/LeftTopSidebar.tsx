import React from 'react';
import styled from 'styled-components';

const LeftSideBarWrapper = styled.div`
  background: ${(props): string => props.theme.leftTopSideBarBackground};
  flex: 0 0 50%;
  margin-right: ${(props): string => props.theme.defaultMargin};
  padding: ${(props): string => props.theme.defaultPadding};
  @media (min-width: ${(props): string => props.theme.mediaSM}) {
    margin-bottom: ${(props): string => props.theme.defaultMargin};
    margin-right: 0;
  }
`;

const LeftTopSidebar: React.FC = (): JSX.Element => {
  return <LeftSideBarWrapper />;
};

export default LeftTopSidebar;
