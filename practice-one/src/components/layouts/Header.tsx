import React, { useState } from 'react';
import {
  faArrowRight,
  faBars,
  faBarsStaggered,
} from '@fortawesome/free-solid-svg-icons';
import Brand from '@/components/common/Brand';
import List from '@/components/common/List';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import { listNavigation } from '@/constants/index';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu((prev) => !prev);

  return (
    <header className="header__wrapper">
      <div className="container">
        <nav className="navigation ">
          <Brand title="Brandname" />
          <div className="navigation__mobile">
            <Icon
              additionalClass="icon__bars"
              icon={menu ? faBarsStaggered : faBars}
              onClick={toggleMenu}
            />
          </div>
          <div className="navigation__desktop">
            <List additionalClass="list--row" listItem={listNavigation} />
            <div className="btn__group">
              <Button type="button" size="xs" variant="tertiary">
                Login
              </Button>
              <Button type="button" size="md" variant="primary">
                JOIN US
                <Icon icon={faArrowRight} additionalClass="icon__arrow" />
              </Button>
            </div>
          </div>
        </nav>
      </div>
      {menu && <List additionalClass="list--column" listItem={listNavigation} />}
    </header>
  );
};

export default Header;
