import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Button = styled.button`
  background-color: ${(props): string =>
    props.theme.defaultButtonBackground.default};
  background-image: ${(props): string =>
    props.theme.defaultButtonBackground.gradient};
  border: none;
  border-radius: ${(props): string => props.theme.defaultButtonBorderRadius};
  color: ${(props): string => props.theme.textColor};
  cursor: pointer;
  outline: none;
  padding: 12px ${(props): string => props.theme.defaultPadding};
  text-align: center;
`;

const DefaultButton: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  return <Button>{t('Click Here!')}</Button>;
};

export default DefaultButton;
