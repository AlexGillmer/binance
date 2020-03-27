import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.section`
  background: ${(props): string => props.theme.contentBackgroundColor};
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  justify-content: center;
  margin-bottom: ${(props): string => props.theme.defaultMargin};
  margin-top: ${(props): string => props.theme.defaultMargin};
  min-height: 100vh;
  order: 1;
  padding: ${(props): string => props.theme.defaultPadding};
  @media (min-width: ${(props): string => props.theme.mediaSM}) {
    margin: ${(props): string => props.theme.defaultMargin};
    min-height: auto;
  }
`;

const Content: React.FC = (): JSX.Element => {
  return <ContentWrapper />;
};

export default Content;
