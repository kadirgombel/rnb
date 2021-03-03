import React, { useEffect, useState } from 'react';

import { init } from '_store/startup';
import { userService } from '_services';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'native-base';
import { useQuery } from 'react-query';

export default function UserCard() {
  const [testLabelValue, setTestLabelValue] = useState('Default');

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { data } = useQuery('user', () => userService.getUserInfo(2));

  useEffect(() => {
    dispatch(init());
    console.log(t('welcome'));
  }, [dispatch, t]);
  return (
    <View>
      <Text>{JSON.stringify(data?.data, null, 2)}</Text>
      <Text>{testLabelValue}</Text>
      <Button onPress={() => setTestLabelValue('After Test')}>
        <Text>Get Data</Text>
      </Button>
    </View>
  );
}
