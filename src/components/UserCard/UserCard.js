import React, {useEffect, useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import {userService} from '../../services';

export default function UserCard() {
  const [user, setUser] = useState({});

  const getUser = useCallback(async () => {
    const {data} = await userService.getUserInfo(2);
    setUser(data);
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);
  return (
    <View>
      <Text>{JSON.stringify(user, null, 2)}</Text>
    </View>
  );
}
