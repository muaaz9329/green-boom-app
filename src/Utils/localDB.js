// import {splashTwo} from '../Assets';
import {
  about,
  asenaProfile,
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bio,
  biomass,
  callS,
  contact,
  demokit,
  downloadIcon,
  emailS,
  hadylProfile,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  linaProfile,
  locksetting,
  logout,
  messageS,
  microphoneS,
  oil,
  pBoom,
  pKits,
  pMat,
  pPillow,
  pSock,
  pSorbent,
  parkerProfile,
  privacy,
  product,
  profile,
  rapid,
  remediation,
  splashIndustrial,
  splashLand,
  splashMarine,
  splashOne,
  splashThree,
  splashTwo,
  terms,
  tindraProfile,
  trainingPDFIcon,
  videoThumb,
  water,
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
    id: 'Training',
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
        title: 'Videos',
      },
      {
        id: 3,
        title: 'Content',
      },
      {
        id: 4,
        title: 'Training 101',
      },
      {
        id: 5,
        title: 'Videos',
      },
      {
        id: 6,
        title: 'Content',
      },
    ],
  },
  {
    id: 'Video',
    title: 'Videos',
    image: bg2,
    icon: icon2,
    routeName: 'TrainingScreen',
    isVideo: true,
    category: [
      {
        id: 1,
        title: 'General',
      },
      {
        id: 2,
        title: 'Booms',
      },
      {
        id: 3,
        title: 'Pillows',
      },
      {
        id: 4,
        title: 'Socks',
      },
      {
        id: 5,
        title: 'General',
      },
      {
        id: 6,
        title: 'Content',
      },
    ],
  },
  {
    id: 3,
    title: 'Order a Demo Kit',
    image: bg3,
    icon: icon3,
    routeName: 'DemoKitScreen',
  },
  {
    id: 'MSDSheets',
    title: 'MSDS Sheets',
    image: bg4,
    icon: icon4,
    routeName: 'MSDScreen',
    isVideo: true,
  },
  {
    id: 5,
    title: 'Products',
    image: bg5,
    icon: icon5,
    routeName: 'ProductScreen',
  },
  {
    id: 'salespitch',
    title: 'Perfect Sales Pitch',
    image: bg6,
    icon: icon6,
    routeName: 'TrainingScreen',
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
  {
    id: 7,
    title: 'Loose Sorbent Product Demo',
    description:
      'Our light, loose absorbent will float on top of water and pick up any oil or sheen - no water!',
    image: trainingPDFIcon,
  },
];

export const videosData = {
  banner: {},
  category: [
    {
      id: 1,
      videoUrl: require('./test.mp4'),
      videoTitle: 'Green Boom Informational Session | Dr. Sudhir Sharma',
      videoDesc:
        'Join Green Boom CEO Dr. Sudhir Sharma for a short informational session on plastic waste and the importance of choosing biodegradable oil spill',
      videoThumb: videoThumb,
    },
    {
      id: 1,
      videoUrl: require('./test.mp4'),
      videoTitle: 'Green Boom Informational Session | Dr. Sudhir Sharma',
      videoDesc:
        'Join Green Boom CEO Dr. Sudhir Sharma for a short informational session on plastic waste and the importance of choosing biodegradable oil spill',
      videoThumb: videoThumb,
    },
    {
      id: 1,
      videoUrl: require('./test.mp4'),
      videoTitle: 'Green Boom Informational Session | Dr. Sudhir Sharma',
      videoDesc:
        'Join Green Boom CEO Dr. Sudhir Sharma for a short informational session on plastic waste and the importance of choosing biodegradable oil spill',
      videoThumb: videoThumb,
    },
    {
      id: 1,
      videoUrl: require('./test.mp4'),
      videoTitle: 'Green Boom Informational Session | Dr. Sudhir Sharma',
      videoDesc:
        'Join Green Boom CEO Dr. Sudhir Sharma for a short informational session on plastic waste and the importance of choosing biodegradable oil spill',
      videoThumb: videoThumb,
    },
  ],
};
export const msdsData = [
  {
    image: trainingPDFIcon,
    title: 'General Product Safety',
  },
  {
    image: trainingPDFIcon,
    title: 'Loose Sorbent',
  },
  {
    image: trainingPDFIcon,
    title: 'Socks',
  },
  {
    image: trainingPDFIcon,
    title: 'Pillow',
  },
  {
    image: trainingPDFIcon,
    title: 'Booms',
  },
  {
    image: trainingPDFIcon,
    title: 'Remediation Agent',
  },
  {
    image: trainingPDFIcon,
    title: 'Absorbent Sweeping Compound',
  },
  {
    image: trainingPDFIcon,
    title: 'Loose Sorbent Compound with Grit',
  },
];
export const demoKit = [
  {
    image: demokit,
    title: 'Sample Kit',
    description: 'Green Boom’s pillows provide rapid absorption in marine.',
  },
  {
    image: demokit,
    title: 'Sample Kit',
    description: 'Green Boom’s pillows provide rapid absorption in marine.',
  },
  {
    image: demokit,
    title: 'Sample Kit',
    description: 'Green Boom’s pillows provide rapid absorption in marine.',
  },
  {
    image: demokit,
    title: 'Sample Kit',
    description: 'Green Boom’s pillows provide rapid absorption in marine.',
  },
];
export const productData = [
  {
    image: pBoom,
    title: 'Booms',
  },
  {
    image: pPillow,
    title: 'Pillows',
  },
  {
    image: pSock,
    title: 'Socks',
  },
  {
    image: pMat,
    title: 'Mat',
  },
  {
    image: pSorbent,
    title: 'Loose Sorbent',
  },
  {
    image: pKits,
    title: 'Spill Kits',
  },
];
export const catData = [
  {
    title: 'EU Catalog',
    image: trainingPDFIcon,
  },
  {
    title: 'US Catalog',
    image: trainingPDFIcon,
  },
  {
    title: 'MENA Catalog',
    image: trainingPDFIcon,
  },
  {
    title: '1 Page Brochure',
    image: trainingPDFIcon,
  },
  {
    title: '4 Page Brochure',
    image: trainingPDFIcon,
  },
  {
    title: '4 Page Arabic Brochure',
    image: trainingPDFIcon,
  },
];

export const settingData = [
  {
    title: 'My Profile',
    image: profile,
    screenUrl: 'MyProfileScreen',
  },
  {
    title: 'Change Password',
    image: locksetting,
    screenUrl: 'ChangePasswordScreen',
  },
  {
    title: 'About Green Boom',
    image: about,
    screenUrl: 'ContactScreen',
  },
  {
    title: 'Privacy Policy',
    image: privacy,
    screenUrl: 'ContactScreen',
  },
  {
    title: 'Terms and Conditions',
    image: terms,
    screenUrl: 'ContactScreen',
  },
  {
    title: 'Contact us',
    image: contact,
    screenUrl: 'ContactScreen',
  },
  {
    title: 'Log out',
    image: logout,
    screenUrl: '',
    logOut: 'onCancel',
  },
];

export const contactData = [
  {
    image: linaProfile,
    designation: 'Sales Support Europe',
    name: 'Lina Nashabat',
    subDesignation: 'Sales Executive',
    email: 'Lina.Nashabat@greenboom.com',
    phone: '+1 (470) 830-2859',
    available: '(Available East American office hours)',
  },
  {
    image: parkerProfile,
    designation: 'Sales Support USA',
    name: 'Parker Pruett',
    subDesignation: 'Sales Director',
    email: 'Parker.Pruett@greenboom.com',
    phone: '+1 (470) 830-4517',
    available: '(Available East American office hours)',
  },
  {
    image: hadylProfile,
    designation: 'Sales Support Middle East',
    name: 'Hedyl Harbiye',
    subDesignation: 'Regional Sales Manager',
    email: 'Hadyl.Harbiye@greenboom.com',
    phone: '+974 33251000',
    available: '(Available Middle Eastern office hours)',
  },
  {
    image: asenaProfile,
    designation: 'Sales Support Middle East',
    name: 'Asena Kir',
    subDesignation: 'Regional Sales Manager',
    email: 'Asena.Kir@greenboom.com',
    phone: '+974 3325 8000',
    available: '(Available Middle Eastern office hours)',
  },
  {
    image: tindraProfile,
    designation: 'Marketing & Product Support',
    name: 'Tindra Falk',
    subDesignation: 'Global Marketing Lead',
    email: 'Tindra.Falk@greenboom.com',
    phone: '+1 (404)786-8003',
    available: '(Available European office hours)',
  },
];

export const accordionData = [
  {
    id: 1,
    title: 'Email Script',
    icon: emailS,
  },
  {
    id: 2,
    title: 'Phone Call Script',
    icon: callS,
  },
  {
    id: 3,
    title: 'Voice Mail Script',
    icon: microphoneS,
  },
  {
    id: 4,
    title: 'SMS Script',
    icon: messageS,
  },
];

export const slider = [
  {
    id: 1,
    image: product,
  },
  {
    id: 2,
    image: product,
  },
  {
    id: 3,
    image: product,
  },
  {
    id: 4,
    image: product,
  },
  {
    id: 5,
    image: product,
  },
];

export const productsData = [
  {
    name: 'Loose Sorbent',
    sku: 'L0010S',
    usage: 'For use on water surface',
    title:
      'Green Boom’s land use sorbents provide rapid absorption in land and industry environments.',
    description:
      'Spill control at its best! With a high capacity for oil absorption, the sorbent coagulates after oil absorption for easy cleanup. Also efficient in sand or sludge remediation.',
    longDescription:
      'Spill control at its best! With a high capacity for oil absorption, the sorbent coagulates after oil absorption for easy cleanup. Also efficient in sand or sludge remediation. Fast-wicking cellulose-based granules begin to soak up liquid the moment they touch the spill. Lightweight absorbent is easier than clay to carry and use without injury. Oil spill on sand or sludge has never been easier to clean! The loose sorbent quickly absorbs the oil, and together with the added microbes makes the oil non-traceable after just a few weeks',
    sizeValue: 'Small',
    dimensionValue: '10lb / 5kg bag',
    absorbencyValue: 'Up to 6 gal / 22,7 L',
    qtyValue: '1 Bag',
    productDimensionSize: '30" x 14" x 3"',
    productDimensionCm: '35,6 x 76,2 x 7,62 cm',
    packageDimensionSize: '30" x 14" x 3"',
    packageDimensionCm: '35,6 x 76,2 x 7,62 cm',
    weightProduct: '10lbs / 5kg',
    totalWeightProduct: '10lbs / 5kg',
  },
];
export const productBottom = [
  {
    icon: bio,
    name: '100% Biodegradable',
  },
  {
    icon: water,
    name: 'Water Repellent',
  },
  {
    icon: oil,
    name: 'Absorbs Oil Only',
  },
  {
    icon: biomass,
    name: '100% Biomass',
  },
  {
    icon: rapid,
    name: 'Rapid Absorption',
  },
  {
    icon: remediation,
    name: 'Oil degrading Remediation Material',
  },
];

export const sizes = ['Small', 'Medium', 'large'];
export const remedidationOption = ['No', 'Yes'];
