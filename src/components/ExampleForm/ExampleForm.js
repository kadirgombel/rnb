import React from 'react';
import { Form, Item, Input, Button, Text } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA } from './ExampleForm.constants';
import { useTranslation } from 'react-i18next';

export default function ExampleForm() {
  const { t } = useTranslation();

  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(SCHEMA),
  });

  const handleLogin = (data) => {
    console.log('Submitted data', data);
  };

  return (
    <Form>
      <Item error={!!errors.username}>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ onChange, value }) => (
            <>
              <Input
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder={t('exampleForm.username')}
              />
              {errors.username && (
                <Text>{t('exampleForm.usernameRequired')}</Text>
              )}
            </>
          )}
        />
      </Item>
      <Item last error={!!errors.password}>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ onChange, value }) => (
            <>
              <Input
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder={t('exampleForm.password')}
              />
              {errors.password && (
                <Text>{t('exampleForm.passwordRequired')}</Text>
              )}
            </>
          )}
        />
      </Item>
      <Button block primary onPress={handleSubmit(handleLogin)}>
        <Text>{t('exampleForm.submit')}</Text>
      </Button>
    </Form>
  );
}
