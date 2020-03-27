import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.section`
  flex: 1 1 auto;
  flex-direction: row;
  display: flex;
  justify-content: center;
  padding: ${(props): string => props.theme.defaultPadding};
  background: ${(props): string => props.theme.contentBackgroundColor};
  order: 1;
  margin-top: ${(props): string => props.theme.defaultMargin};
  margin-bottom: ${(props): string => props.theme.defaultMargin};
  min-height: 100vh;
  @media (min-width: ${(props): string => props.theme.mediaSM}) {
    margin: ${(props): string => props.theme.defaultMargin};
    min-height: auto;
  }
`;

const Content: React.FC = (): JSX.Element => {
  return <ContentWrapper />;
};

export default Content;
