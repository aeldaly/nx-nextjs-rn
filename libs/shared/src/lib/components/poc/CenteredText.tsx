import React, { ReactNode } from 'react';

type CenteredTextProps = {
  text: string;
  className?: string;
  ContainerComponent?: React.ElementType;
  TextComponent?: React.ElementType;
  children?: ReactNode;
};

export const CenteredText: React.FC<CenteredTextProps> = ({
                                                            text,
                                                            className = '',
                                                            ContainerComponent = 'div',
                                                            TextComponent = 'span',
                                                          }) => {
  return (
    <ContainerComponent className={`flex justify-center items-center ${className}`}>
      <TextComponent>{text}</TextComponent>
    </ContainerComponent>
  );
};
