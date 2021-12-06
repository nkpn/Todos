import Emoji from 'components/Emoji';
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

const Header = () => {
  return (
    <>
      <header className={style.Header}>
        <h1 className={style.HeaderHeading}>Todo list app</h1>
        <nav>
          <NavLink to="/" exact></NavLink>
          <NavLink
            to="/list"
            className={style.Link}
            activeClassName={style.LinkActive}
          >
            <Emoji symbol="&#128210; "></Emoji>
            My list
          </NavLink>
          <NavLink
            to="/newtodo"
            className={style.Link}
            activeClassName={style.LinkActive}
          >
            <Emoji symbol="✍	"></Emoji>
            Add new todo
          </NavLink>
        </nav>
        {/* <p style={{ marginTop: '200px', color: 'white' }}>
          - Исправь todo-selector для фильтра <br />- сделай фильтр
          <br /> - сделай изменение тудушки
          <br /> - логинизацию было бы неплохо ещё
        </p> */}
      </header>
    </>
  );
};

export default Header;
