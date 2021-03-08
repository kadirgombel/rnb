import React from 'react';
import { fireEvent, render } from '_utils/testUtils';
import UserCard from './UserCard';
import { server } from '_mocks/server';
import { successOneUser } from '_mocks/services/userService';

describe('UserCard', () => {
  it('should get data on button press', async () => {
    server.use(successOneUser);
    const { getByText, findByText } = render(<UserCard />);

    const button = getByText('Get Data');
    fireEvent.press(button);

    expect(await findByText('Kadir')).toBeTruthy();
    expect(await findByText('kadirgombel@gmail.com')).toBeTruthy();
    expect(await findByText('111 111 11 11')).toBeTruthy();
  });
});
