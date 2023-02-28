import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Brand from '@/components/common/Brand';
import List from '@/components/common/List';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import listNavigation from '@/constants';

const Header = () => (
  <header className="header__wrapper">
    <div className="container">
      <nav className="navigation">
        <Brand title="Brandname" />
        <List additionalClass="list--row" listItem={listNavigation} />
        <div className="btn__group">
          <Button type="button" size="xs" variant="tertiary">
            Login
          </Button>
          <Button type="button" size="sm" variant="primary">
            JOIN US
            <Icon icon={faArrowRight} additionalClass="icon__arrow" />
          </Button>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
