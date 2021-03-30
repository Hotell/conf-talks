import React from 'react';
import { ReactComponent as Logo } from './logo.svg';

import './ui-header.module.css';
// console.log({ styles });

/* eslint-disable-next-line */
export interface UiHeaderProps {
  title: string;
}

export function UiHeader(props: UiHeaderProps) {
  return (
    <header className={`flex container`}>
      <Logo width="75" height="75" />
      <h1>Welcome to {props.title}!</h1>
    </header>
  );
}

export default UiHeader;
