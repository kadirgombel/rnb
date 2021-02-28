import React from 'react';
import {fireEvent, render} from '../../utils/testUtils';
// import {render} from '@testing-library/react-native';
import UserCard from './UserCard';

describe('UserCard', () => {
  it('changes text when pressed button', async () => {
    const {getByText} = render(<UserCard />);

    expect(getByText('Default')).toBeTruthy();
    const button = getByText('Get Data');
    fireEvent.press(button);

    expect(getByText('After Test')).toBeTruthy();
  });
});
