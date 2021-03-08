import { Text, Content } from 'native-base';
import React from 'react';
import UserCard from '_components/UserCard/UserCard';
import { useTranslation } from 'react-i18next';

export default function Settings() {
  const { t } = useTranslation();
  return (
    <Content padder>
      <Text>{t('settings')}</Text>
      <UserCard />
    </Content>
  );
}
