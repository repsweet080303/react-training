import React from 'react';
import List from '@/components/common/List';
import { listFooter } from '@/constants';

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="container">
        <div className="footer__list">
          {listFooter.map((item) => (
            <List
              key={item.id}
              additionalClass={item.additionalClass}
              title={item.title}
              listItem={item.listItem}
            />
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
