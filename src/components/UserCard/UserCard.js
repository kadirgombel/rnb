import React, {useEffect, useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import {init} from '_store/startup';
import {userService} from '_services';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';

export default function UserCard() {
  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  const {t} = useTranslation();

  const getUser = useCallback(async () => {
    const {data} = await userService.getUserInfo(2);
    setUser(data);
    dispatch(init());
    console.log(t('welcome'));
  }, [dispatch, t]);

  useEffect(() => {
    getUser();
  }, [getUser]);
  return (
    <View>
      <Text>{JSON.stringify(user, null, 2)}</Text>
    </View>
  );
}
