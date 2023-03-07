import { IListItemProps, IListScope, IListProps } from '@/types/interfaces';

const listNavigation: IListItemProps[] = [
  {
    id: 1,
    tagName: 'a',
    text: 'Home',
    href: '#home',
  },
  {
    id: 2,
    tagName: 'a',
    text: 'Product',
    href: '#product',
  },
  {
    id: 3,
    tagName: 'a',
    text: 'Pricing',
    href: '#pricing',
  },
  {
    id: 4,
    tagName: 'a',
    text: 'Contact',
    href: '#contact',
  },
];

const listItemScope: IListScope[] = [
  {
    id: 1,
    type: 'advantage',
    text: 'Unlimited product updates',
  },
  {
    id: 2,
    type: 'advantage',
    text: 'Unlimited product updates',
  },
  {
    id: 3,
    type: 'advantage',
    text: 'Unlimited product updates',
  },
  {
    id: 4,
    type: 'disadvantage',
    text: '1GB Cloud storage',
  },
  {
    id: 5,
    type: 'disadvantage',
    text: 'Email and community support',
  },
];

const listAboutUs: IListProps[] = [
  {
    additionalClass: 'list--column',
    title: 'Company Info',
    listItem: [
      {
        id: 1,
        tagName: 'a',
        text: 'About Us',
        href: '#',
      },
      {
        id: 2,
        tagName: 'a',
        text: 'Carrier',
        href: '#',
      },
      {
        id: 3,
        tagName: 'a',
        text: 'We are hiring',
        href: '#',
      },
      {
        id: 4,
        tagName: 'a',
        text: 'Blog',
        href: '#',
      },
    ],
  },
  {
    additionalClass: 'list--column',
    title: 'Legal',
    listItem: [
      {
        id: 1,
        tagName: 'a',
        text: 'About Us',
        href: '#',
      },
      {
        id: 2,
        tagName: 'a',
        text: 'Carrier',
        href: '#',
      },
      {
        id: 3,
        tagName: 'a',
        text: 'We are hiring',
        href: '#',
      },
      {
        id: 4,
        tagName: 'a',
        text: 'Blog',
        href: '#',
      },
    ],
  },
  {
    additionalClass: 'list--column',
    title: 'Features',
    listItem: [
      {
        id: 1,
        tagName: 'a',
        text: 'Business Marketing',
        href: '#',
      },
      {
        id: 2,
        tagName: 'a',
        text: 'User Analytic',
        href: '#',
      },
      {
        id: 3,
        tagName: 'a',
        text: 'Live Chat',
        href: '#',
      },
      {
        id: 4,
        tagName: 'a',
        text: 'Unlimited Support',
        href: '#',
      },
    ],
  },
  {
    additionalClass: 'list--column',
    title: 'Resources',
    listItem: [
      {
        id: 1,
        tagName: 'a',
        text: 'IOS & Android',
        href: '#',
      },
      {
        id: 2,
        tagName: 'a',
        text: 'Watch a Demo',
        href: '#',
      },
      {
        id: 3,
        tagName: 'a',
        text: 'Customers',
        href: '#',
      },
      {
        id: 4,
        tagName: 'a',
        text: 'API',
        href: '#',
      },
    ],
  },
  {
    additionalClass: 'list--column',
    title: 'Get In Touch',
    listItem: [
      {
        icon: 'src/assets/icons/phone.svg',
        id: 1,
        tagName: 'a',
        text: '(480) 555-0103',
        href: 'tel:+(480) 555-0103',
      },
      {
        icon: 'src/assets/icons/location.svg',
        id: 2,
        tagName: 'a',
        text: 'Watch a Demo',
        href: '#',
      },
      {
        icon: 'src/assets/icons/mail-box.svg',
        id: 3,
        tagName: 'a',
        text: 'Customers',
        href: 'mailto:debra.holt@example.com',
      },
    ],
  },
];
export { listNavigation, listItemScope, listAboutUs };
