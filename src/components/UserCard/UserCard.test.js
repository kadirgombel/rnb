import React from 'react';
import { fireEvent, render } from '_utils/testUtils';
import UserCard from './UserCard';
import { server } from '_mocks/server';
import { successOneUser } from '_mocks/services/userService';

describe('UserCard', () => {
  it('changes text when pressed button', async () => {
    server.use(successOneUser);
    const { getByText } = await render(<UserCard />);

    expect(getByText('Default')).toBeTruthy();
    const button = getByText('Get Data');
    fireEvent.press(button);

    expect(getByText('After Test')).toBeTruthy();
  });
});
