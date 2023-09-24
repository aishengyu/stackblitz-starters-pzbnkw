import { FC } from 'react';

import './style.css';
import ButtonDemo from './ButtonDemo';
import Header from './Header';
import Content from './Content';
import Navigator from './Navigator';
import Paperbase from './Paperbase';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      {/* https://stackblitz-starters-pzbnkw.stackblitz.io/ */}
      {/* <ButtonDemo /> */}
      {/* <Header /> */}
      {/* <Navigator /> */}
      {/* <Content /> */}
      <Paperbase />
    </div>
  );
};
