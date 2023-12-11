// import {splashTwo} from '../Assets';
import {
  splashIndustrial,
  splashLand,
  splashMarine,
  splashOne,
  splashThree,
  splashTwo,
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
