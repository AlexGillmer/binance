import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { I18nextProvider } from 'react-i18next';

import GlobalStyles from './common/ui/GlobalStyles';
import theme from './common/ui/theme';
import i18n from './common/translation/i18n';

import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';
import RightSidebar from './components/RightSidebar';
import LeftSidebarWrapper from './components/LeftSidebar/LeftSidebarWrapper';

const ContentWrapper = styled.div`
  color: ${(props): string => props.theme.textcolor};
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  @media (min-width: ${(props): string => props.theme.mediaSM}) {
    flex-direction: row;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-height: 100vh;
`;

const App: React.FC = (): JSX.Element => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppWrapper>
          <Header />
          <ContentWrapper>
            <LeftSidebarWrapper />
            <Content />
            <RightSidebar />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
