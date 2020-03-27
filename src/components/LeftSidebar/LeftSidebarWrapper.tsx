import React from 'react';
import styled from 'styled-components';
import LeftBottomSidebar from './LeftBottomSidebar';
import LeftTopSidebar from './LeftTopSidebar';

const Wrapper = styled.div`
  order: 2;
  flex-flow: row nowrap;
  display: flex;
  overflow: hidden;
  margin-top: ${(props): string => props.theme.defaultMargin};
  margin-bottom: ${(props): string => props.theme.defaultMargin};
  min-height: 50vh;
  @media (min-width: ${(props): string => props.theme.mediaSM}) {
    flex: 0 0 260px;
    order: -1;
    flex-flow: column nowrap;
    margin-right: ${(props): string => props.theme.defaultMargin};
    padding-bottom: 10px;
    min-height: auto;
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
