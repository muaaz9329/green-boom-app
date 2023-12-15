// import {splashTwo} from '../Assets';
import {
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  splashIndustrial,
  splashLand,
  splashMarine,
  splashOne,
  splashThree,
  splashTwo,
  trainingPDFIcon,
} from '../Assets';

export const onBoardingData = [
  {
    id: 0,
    heading: 'MARINE',
    description:
      'Green Boom products are lightweight and float on top of the water to absorb oil sheens without absorbing a drop of water.',
    image: splashOne,
    splashImage: splashMarine,
  },
  {
    id: 1,
    heading: 'LAND',
    description:
      'Green Boom’s patented lightweight absorbents are easier, safer, and more eco friendly than the clay-based competitors.',
    image: splashTwo,
    splashImage: splashLand,
  },
  {
    id: 2,
    heading: 'INDUSTRIAL',
    description:
      'Green Boom’s tear-resistant moldable socks help control everyday leaks with our most shape-hugging sock.',
    image: splashThree,
    splashImage: splashIndustrial,
  },
];
export const homeScreenBtns = [
  {
    id: 1,
    title: 'Training',
    image: bg1,
    icon: icon1,
    routeName: 'TrainingScreen',
    category: [
      {
        id: 1,
        title: 'Training 101',
      },
      {
        id: 2,
        title: 'Training 101',
      },
      {
        id: 1,
        title: 'Training 101',
      },
    ],
  },
  {
    id: 2,
    title: 'Videos',
    image: bg2,
    icon: icon2,
    routeName: 'VideoScreen',
  },
  {
    id: 3,
    title: 'Order a Demo Kit',
    image: bg3,
    icon: icon3,
    routeName: 'OrderDemoKitScreen',
  },
  {
    id: 4,
    title: 'MSDS Sheets',
    image: bg4,
    icon: icon4,
    routeName: 'MSDSheetScreen',
  },
  {
    id: 5,
    title: 'Products',
    image: bg5,
    icon: icon5,
    routeName: 'ProductScreen',
  },
  {
    id: 6,
    title: 'Perfect Sales Pitch',
    image: bg6,
    icon: icon6,
    routeName: 'PerfectSaleScreen',
  },
];

export const trainingPDFData = [
  {
    id: 1,
    title: 'Loose Sorbent Product Demo',
    description:
      'Our light, loose absorbent will float on top of water and pick up any oil or sheen - no water!',
    image: trainingPDFIcon,
  },
  {
    id: 2,
    title: 'Loose Sorbent Product Demo',
    description:
      'Our light, loose absorbent will float on top of water and pick up any oil or sheen - no water!',
    image: trainingPDFIcon,
  },
  {
    id: 3,
    title: 'Loose Sorbent Product Demo',
    description:
      'Our light, loose absorbent will float on top of water and pick up any oil or sheen - no water!',
    image: trainingPDFIcon,
  },
  {
    id: 4,
    title: 'Loose Sorbent Product Demo',
    description:
      'Our light, loose absorbent will float on top of water and pick up any oil or sheen - no water!',
    image: trainingPDFIcon,
  },
  {
    id: 5,
    title: 'Loose Sorbent Product Demo',
    description:
      'Our light, loose absorbent will float on top of water and pick up any oil or sheen - no water!',
    image: trainingPDFIcon,
  },
  {
    id: 6,
    title: 'Loose Sorbent Product Demo',
    description:
      'Our light, loose absorbent will float on top of water and pick up any oil or sheen - no water!',
    image: trainingPDFIcon,
  },
];
