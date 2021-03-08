import React, { useEffect } from 'react';

import { init } from '_store/startup';
import { userService } from '_services';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, CardItem, Text, View, Card, Body } from 'native-base';
import { useQuery } from 'react-query';

export default function UserCard() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { data: user, refetch } = useQuery('user', () =>
    userService.getUserInfo(2),
  );

  useEffect(() => {
    dispatch(init());
    console.log(t('welcome'));
  }, [dispatch, t]);

  return (
    <View>
      <Card>
        <CardItem header>
          <Text>{user?.data.name}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{user?.data.email}</Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Text>{user?.data.phone}</Text>
        </CardItem>
      </Card>
      <Button
        onPress={() => {
          refetch();
        }}>
        <Text>{t('getData')}</Text>
      </Button>
    </View>
  );
}
