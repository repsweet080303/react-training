import React from 'react';
import List from '@/components/common/List';
import { listFooter } from '@/constants';
import Typo from '@/components/common/Typo';
import Image from '@/components/common/Image';

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="container">
        <div className="footer__list d-flex-column-mobile">
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
      <div className="footer__credit">
        <div className="container">
          <div className="footer__group d-flex-column-mobile">
            <Typo
              sizeTypo="xs"
              statusTypo="typo__paragraph"
              tagTypo="h6"
              weightTypo="typo__bold"
              additionalTypo="footer__credit__desc"
            >
              Made With Love By Figmaland All Right Reserved
            </Typo>
            <div className="footer__social">
              <Image img="src/assets/icons/facebook.svg" alt="icon facebook" imageClass="icon__credit" />
              <Image img="src/assets/icons/instagram.svg" alt="icon instagram" imageClass="icon__credit" />
              <Image img="src/assets/icons/twitter.svg" alt="icon twitter" imageClass="icon__credit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
