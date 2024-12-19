import React from 'react';
import { CenteredText } from '@monee/shared';

const HomePage: React.FC = () => {
  return (
    <CenteredText
      text="Hello from Next.js!"
      className="h-screen"
      ContainerComponent="div"
      TextComponent="p"
    />
  );
};

export default HomePage;
