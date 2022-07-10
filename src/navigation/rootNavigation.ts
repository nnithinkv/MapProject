import * as React from 'react';

export const navigationRef = React.createRef();
const nav = navigationRef.current;
export function navigate(name, params) {
  if (nav !== null) nav.navigate(name, params);
}
