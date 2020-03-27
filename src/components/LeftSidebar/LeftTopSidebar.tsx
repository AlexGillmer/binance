import React from 'react';
import styled from 'styled-components';

const LeftSideBarWrapper = styled.div`
  padding: ${(props): string => props.theme.defaultPadding};
  background: ${(props): string => props.theme.leftTopSideBarBackground};
  flex: 0 0 50%;
  margin-right: ${(props): string => props.theme.defaultMargin};
  @media (min-width: ${(props): string => props.theme.mediaSM}) {
    margin-right: 0;
    margin-bottom: ${(props): string => props.theme.defaultMargin};
  }
`;

const LeftTopSidebar: React.FC = (): JSX.Element => {
  return <LeftSideBarWrapper />;
};

export default LeftTopSidebar;
