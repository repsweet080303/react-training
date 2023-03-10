import {
  IListItemProps,
  IListScope,
  IListProps,
  ICardCourse,
  ICardProduct,
} from '@/types/interfaces';

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

const listFooter: IListProps[] = [
  {
    id: 1,
    title: 'Company Info',
    additionalClass: 'list__footer',
    listItem: [
      {
        id: 1,
        itemClass: 'footer__item',
        tagName: 'a',
        text: 'About Us',
        href: '#',
      },
      {
        id: 2,
        itemClass: 'footer__item',
        tagName: 'a',
        text: 'Carrier',
        href: '#',
      },
      {
        id: 3,
        itemClass: 'footer__item',
        tagName: 'a',
        text: 'We are hiring',
        href: '#',
      },
      {
        id: 4,
        itemClass: 'footer__item',
        tagName: 'a',
        text: 'Blog',
        href: '#',
      },
    ],
  },
  {
    id: 2,
    title: 'Legal',
    additionalClass: 'list__footer',
    listItem: [
      {
        id: 1,
        itemClass: 'footer__item',
        tagName: 'a',
        text: 'About Us',
        href: '#',
      },
      {
        id: 2,
        itemClass: 'footer__item',
        tagName: 'a',
        text: 'Carrier',
        href: '#',
      },
      {
        id: 3,
        itemClass: 'footer__item',
        tagName: 'a',
        text: 'We are hiring',
        href: '#',
      },
      {
        id: 4,
        itemClass: 'footer__item',
        tagName: 'a',
        text: 'Blog',
        href: '#',
      },
    ],
  },
  {
    id: 3,
    title: 'Features',
    additionalClass: 'list__footer',
    listItem: [
      {
        id: 1,
        itemClass: 'footer__item',
        tagName: 'a',
        text: 'Business Marketing',
        href: '#',
      },
      {
        id: 2,
        itemClass: 'footer__item',
        tagName: 'a',
        text: 'User Analytic',
        href: '#',
      },
      {
        id: 3,
        tagName: 'a',
        itemClass: 'footer__item',
        text: 'Live Chat',
        href: '#',
      },
      {
        id: 4,
        tagName: 'a',
        itemClass: 'footer__item',
        text: 'Unlimited Support',
        href: '#',
      },
    ],
  },
  {
    id: 4,
    title: 'Resources',
    additionalClass: 'list__footer',
    listItem: [
      {
        id: 1,
        itemClass: 'footer__item',
        tagName: 'a',
        text: 'IOS & Android',
        href: '#',
      },
      {
        id: 2,
        tagName: 'a',
        itemClass: 'footer__item',
        text: 'Watch a Demo',
        href: '#',
      },
      {
        id: 3,
        tagName: 'a',
        itemClass: 'footer__item',
        text: 'Customers',
        href: '#',
      },
      {
        id: 4,
        itemClass: 'footer__item',
        tagName: 'a',
        text: 'API',
        href: '#',
      },
    ],
  },
  {
    id: 5,
    title: 'Get In Touch',
    additionalClass: 'list__footer',
    listItem: [
      {
        icon: 'src/assets/icons/phone.svg',
        size: 'md',
        itemClass: 'footer__item',
        id: 1,
        tagName: 'a',
        text: '(480) 555-0103',
        href: 'tel:+(480) 555-0103',
      },
      {
        icon: 'src/assets/icons/location.svg',
        size: 'md',
        itemClass: 'footer__item',
        imageClass: 'footer__adress',
        id: 2,
        tagName: 'a',
        text: '4517 Washington Ave. Manchester, Kentucky 39495',
        href: '#',
      },
      {
        icon: 'src/assets/icons/mail-box.svg',
        size: 'md',
        itemClass: 'footer__item',
        id: 3,
        tagName: 'a',
        text: 'debra.holt@example.com',
        href: 'mailto:debra.holt@example.com',
      },
    ],
  },
];

const listCardCourse: ICardCourse[] = [
  {
    id: 1,
    modify: 'expert',
    title: 'Expert Instruction',
    description:
      'The gradual accumulation of information about atomic and small-scale behaviour...',
  },
  {
    id: 2,
    modify: 'training',
    title: 'Training Courses',
    description:
      'The gradual accumulation of information about atomic and small-scale behaviour...',
  },
  {
    id: 3,
    modify: 'life',
    title: 'Lifetime access',
    description:
      'The gradual accumulation of information about atomic and small-scale behaviour...',
  },
];

const listCardProduct: ICardProduct[] = [
  {
    id: 1,
    imageHeader: 'src/assets/images/keyboard-cover.png',
    alt: 'keyboard cover',
    tag: 'Training Courses',
    title: 'Video in Live Action',
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    vote: 4.5,
    downloaded: 15,
    newPrice: 6.48,
    oldPrice: 16.48,
  },
  {
    id: 2,
    imageHeader: 'src/assets/images/pencil-cover.png',
    alt: 'pencil cover',
    tag: 'Books Liberary',
    title: 'Every Client Matters',
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    vote: 4.5,
    downloaded: 15,
    newPrice: 6.48,
    oldPrice: 16.48,
  },
  {
    id: 3,
    imageHeader: 'src/assets/images/color-pencil-cover.png',
    alt: 'pencil color cover',
    tag: 'Certified Teacher',
    title: 'Get Quality Education',
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    vote: 4.5,
    downloaded: 15,
    newPrice: 6.48,
    oldPrice: 16.48,
  },
];
export {
  listNavigation,
  listItemScope,
  listFooter,
  listCardCourse,
  listCardProduct,
};
