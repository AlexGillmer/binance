import React from 'react';
import styled from 'styled-components';
import LeftBottomSidebar from './LeftBottomSidebar';
import LeftTopSidebar from './LeftTopSidebar';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: ${(props): string => props.theme.defaultMargin};
  margin-top: ${(props): string => props.theme.defaultMargin};
  min-height: 50vh;
  order: 2;
  overflow: hidden;
  @media (min-width: ${(props): string => props.theme.mediaSM}) {
    flex: 0 0 260px;
    flex-flow: column nowrap;
    margin-right: ${(props): string => props.theme.defaultMargin};
    min-height: auto;
    order: -1;
    padding-bottom: 10px;
  }
`;

const LeftSidebarWrapper: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <LeftTopSidebar />
      <LeftBottomSidebar />
    </Wrapper>
  );
};

export default LeftSidebarWrapper;
