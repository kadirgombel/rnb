import React from 'react';
import { Text, Content } from 'native-base';
import ExampleForm from '_components/ExampleForm/ExampleForm';
import { useTranslation } from 'react-i18next';
import LanguagePicker from '_components/LanguagePicker/LanguagePicker';

export default function Home() {
  const { t } = useTranslation();
  return (
    <Content padder>
      <Text>{t('home')}</Text>
      <ExampleForm />
      <LanguagePicker />
    </Content>
  );
}
