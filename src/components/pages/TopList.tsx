import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import sc from 'styled-components';

interface Props extends RouteComponentProps<{}> {}

const TopList = (props: Props) => {
  return <_TopList />;
};

const _TopList = sc.div`
    width: 100%;
 `;

export default TopList;
