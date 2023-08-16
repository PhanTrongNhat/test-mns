import {
  FeelingItemDescription,
  FeelingItemImageWrapper,
  FeelingItemTitle,
  FeelingItemWrapper,
} from './styled';
import React from 'react';

interface FeelingItem {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const FeelingItem = ({ title, icon, description }: FeelingItem) => {
  return (
    <FeelingItemWrapper>
      <FeelingItemImageWrapper>{icon}</FeelingItemImageWrapper>
      <FeelingItemTitle>{title}</FeelingItemTitle>

      <FeelingItemDescription>{description}</FeelingItemDescription>
    </FeelingItemWrapper>
  );
};

export default FeelingItem;
