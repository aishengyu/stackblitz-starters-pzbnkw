import { FC } from 'react';

import './style.css';
import ButtonDemo from './ButtonDemo';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ButtonDemo />
    </div>
  );
};
