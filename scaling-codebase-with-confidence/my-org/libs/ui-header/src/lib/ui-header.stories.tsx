import { text } from '@storybook/addon-knobs';
import React from 'react';
import { UiHeader, UiHeaderProps } from './ui-header';

export default {
  component: UiHeader,
  title: 'UiHeader',
};

export const primary = () => {
  const props: UiHeaderProps = {
    title: text('title', ''),
  };

  return <UiHeader title={props.title} />;
};
