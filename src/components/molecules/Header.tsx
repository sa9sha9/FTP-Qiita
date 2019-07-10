import React, { Component } from 'react';
import styled from 'styled-components';

const _Header = styled.header`
  width: 100%;
  display: flex;
`;

const QiitaLogo = styled.div`
  width: 75px;
  height: 26px;
  background-color: ${props => props.theme.charcoalGrey};
`;

const GlobalNavItem = styled.div`
  width: 48px;
  height: 24px;
  font-family: NotoSansCJKjp;
  font-size: 16px;
  color: ${props => props.theme.charcoaGrey};
`;

const GlobalNav = styled.div`
  width: 100%;
  display: flex;
  margin-left: 65px;

  ${GlobalNavItem} + ${GlobalNavItem} {
    margin-left: 20px;
  }
`;

const UserIcon = styled.div`
  width: 36px;
  height: 36px;
  border: solid 1px ${props => props.theme.lightGreyBlue};
  justify-self: right;
`;

const Header = () => {
  return (
    <_Header>
      <QiitaLogo />
      <GlobalNav>
        <GlobalNavItem>ホーム</GlobalNavItem>
      </GlobalNav>
      <UserIcon />
    </_Header>
  );
};

export default Header;
