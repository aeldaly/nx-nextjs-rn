import React from 'react';
import { View, Text } from 'react-native';
import { CenteredText } from '@monee/shared';

const FaqScreen: React.FC = () => {
  return (
    <CenteredText
      text="Hello from React Native!"
      className="flex-1"
      ContainerComponent={View}
      TextComponent={Text}
    />
  );
};

export default FaqScreen;
