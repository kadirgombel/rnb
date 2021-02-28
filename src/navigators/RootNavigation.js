import React from 'react';

export const navigationRef = React.createRef();
/**
 * You can use this function to navigate outside of React component
 * use useNavigate whenever possible in components
 * @param {*} name
 * @param {*} params
 */
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
