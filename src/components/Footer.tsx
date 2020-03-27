import React from 'react';
import styled from 'styled-components';

import DefaultButton from './DefaultButton';

const FooterWrapper = styled.footer`
  background-color: ${(props): string => props.theme.footerBackground};
  text-align: center;
  margin-top: ${(props): string => props.theme.defaultMargin};
  padding: 70px ${(props): string => props.theme.defaultPadding};
`;

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterWrapper>
      <DefaultButton />
    </FooterWrapper>
  );
};

export default Footer;
