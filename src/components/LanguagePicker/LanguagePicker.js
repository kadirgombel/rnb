import { Picker } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';

export default function LanguagePicker() {
  const { t, i18n } = useTranslation();
  const langs = [
    {
      label: t('langPicker.turkish'),
      value: 'tr',
    },
    {
      label: t('langPicker.english'),
      value: 'en',
    },
  ];
  return (
    <Picker
      mode="dropdown"
      style={styles.picker}
      selectedValue={i18n.language}
      onValueChange={value => i18n.changeLanguage(value)}>
      {langs.map(lang => (
        <Picker.Item key={lang.value} label={lang.label} value={lang.value} />
      ))}
    </Picker>
  );
}

const styles = StyleSheet.create({
  picker: {
    width: 120,
  },
});
