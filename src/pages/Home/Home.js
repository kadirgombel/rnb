import React from 'react';
import { Text, Content } from 'native-base';
import UserCard from '_components/UserCard/UserCard';

export default function Home() {
  return (
    <Content padder>
      <Text>Home</Text>
      <UserCard />
    </Content>
  );
}
