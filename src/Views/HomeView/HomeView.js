import React from 'react';
import Emoji from 'components/Emoji';
import style from './HomeView.module.scss';

const HomeView = () => {
  return (
    <>
      <div>
        <h1 className={style.h1}>
          Hello! <Emoji symbol="&#128075;	"></Emoji>Thank you for visiting my
          Todo list application!
        </h1>
      </div>
    </>
  );
};

export default HomeView;
