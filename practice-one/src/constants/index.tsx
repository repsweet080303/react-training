import { IListItemProps, IListScope } from '@/types/interfaces';

const listNavigation: IListItemProps[] = [
  {
    id: 1,
    tagName: 'a',
    title: 'Home',
    href: '#home',
  },
  {
    id: 2,
    tagName: 'a',
    title: 'Product',
    href: '#product',
  },
  {
    id: 3,
    tagName: 'a',
    title: 'Pricing',
    href: '#pricing',
  },
  {
    id: 4,
    tagName: 'a',
    title: 'Contact',
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
  }, {
    id: 5,
    type: 'disadvantage',
    text: 'Email and community support',
  },
];

export { listNavigation, listItemScope };
