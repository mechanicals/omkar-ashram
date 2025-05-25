import { addDays } from 'date-fns';

export interface Festival {
  titleKey: string;
  descriptionKey: string;
  type: 'major' | 'special' | 'daily';
  month: number; // 0-11
  day: number;
  duration: number; // in days
  startTime?: { hours: number; minutes: number };
  endTime?: { hours: number; minutes: number };
}

// Daily rituals that happen throughout the year
export const dailyRituals: Festival[] = [
  {
    titleKey: 'events.daily.brahmamuhuratMeditation',
    descriptionKey: 'events.descriptions.brahmamuhuratMeditation',
    type: 'daily',
    month: -1, // Happens every month
    day: -1, // Happens every day
    duration: 1,
    startTime: { hours: 4, minutes: 30 },
    endTime: { hours: 6, minutes: 0 }
  },
  {
    titleKey: 'events.daily.morningAarti',
    descriptionKey: 'events.descriptions.morningAarti',
    type: 'daily',
    month: -1,
    day: -1,
    duration: 1,
    startTime: { hours: 6, minutes: 0 },
    endTime: { hours: 7, minutes: 0 }
  },
  {
    titleKey: 'events.daily.vedaPathana',
    descriptionKey: 'events.descriptions.vedaPathana',
    type: 'daily',
    month: -1,
    day: -1,
    duration: 1,
    startTime: { hours: 8, minutes: 0 },
    endTime: { hours: 9, minutes: 30 }
  },
  {
    titleKey: 'events.daily.eveningAarti',
    descriptionKey: 'events.descriptions.eveningAarti',
    type: 'daily',
    month: -1,
    day: -1,
    duration: 1,
    startTime: { hours: 18, minutes: 30 },
    endTime: { hours: 19, minutes: 30 }
  }
];

// Major festivals and events related to Shankaracharya tradition
export const majorFestivals: Festival[] = [
  {
    titleKey: 'events.major.shankaraJayanti',
    descriptionKey: 'events.descriptions.shankaraJayanti',
    type: 'major',
    month: 4, // May
    day: 15, // Approximate date (varies based on lunar calendar)
    duration: 3,
    startTime: { hours: 5, minutes: 0 },
    endTime: { hours: 21, minutes: 0 }
  },
  {
    titleKey: 'events.major.guruPurnima',
    descriptionKey: 'events.descriptions.guruPurnima',
    type: 'major',
    month: 6, // July
    day: 13, // Approximate date (varies based on lunar calendar)
    duration: 1,
    startTime: { hours: 5, minutes: 0 },
    endTime: { hours: 21, minutes: 0 }
  },
  {
    titleKey: 'events.major.vyasaPuja',
    descriptionKey: 'events.descriptions.vyasaPuja',
    type: 'major',
    month: 6, // July
    day: 13, // Same as Guru Purnima
    duration: 1,
    startTime: { hours: 9, minutes: 0 },
    endTime: { hours: 12, minutes: 0 }
  },
  {
    titleKey: 'events.major.chaturmasyaBegin',
    descriptionKey: 'events.descriptions.chaturmasyaBegin',
    type: 'major',
    month: 6, // July
    day: 13, // Starts on Guru Purnima
    duration: 1,
    startTime: { hours: 6, minutes: 0 },
    endTime: { hours: 18, minutes: 0 }
  },
  {
    titleKey: 'events.major.dandiEkadashi',
    descriptionKey: 'events.descriptions.dandiEkadashi',
    type: 'major',
    month: 7, // August
    day: 11,
    duration: 1,
    startTime: { hours: 4, minutes: 30 },
    endTime: { hours: 20, minutes: 0 }
  },
  {
    titleKey: 'events.major.bhikshaRules',
    descriptionKey: 'events.descriptions.bhikshaRules',
    type: 'major',
    month: 8, // September
    day: 10,
    duration: 1,
    startTime: { hours: 6, minutes: 0 },
    endTime: { hours: 18, minutes: 0 }
  },
  {
    titleKey: 'events.major.chaturmasyaEnd',
    descriptionKey: 'events.descriptions.chaturmasyaEnd',
    type: 'major',
    month: 10, // November
    day: 8,
    duration: 1,
    startTime: { hours: 6, minutes: 0 },
    endTime: { hours: 18, minutes: 0 }
  },
  {
    titleKey: 'events.major.shivaratri',
    descriptionKey: 'events.descriptions.shivaratri',
    type: 'major',
    month: 2, // March
    day: 8, // Approximate date
    duration: 1,
    startTime: { hours: 18, minutes: 0 },
    endTime: { hours: 6, minutes: 0 }
  }
];

// Special events and celebrations
export const specialEvents: Festival[] = [
  {
    titleKey: 'events.special.vedantaRetreat',
    descriptionKey: 'events.descriptions.vedantaRetreat',
    type: 'special',
    month: 1, // February
    day: 15,
    duration: 7,
    startTime: { hours: 5, minutes: 0 },
    endTime: { hours: 21, minutes: 0 }
  },
  {
    titleKey: 'events.special.geetaParayana',
    descriptionKey: 'events.descriptions.geetaParayana',
    type: 'special',
    month: 11, // December
    day: 15,
    duration: 3,
    startTime: { hours: 9, minutes: 0 },
    endTime: { hours: 17, minutes: 0 }
  },
  {
    titleKey: 'events.special.upanishadCamp',
    descriptionKey: 'events.descriptions.upanishadCamp',
    type: 'special',
    month: 5, // June
    day: 1,
    duration: 10,
    startTime: { hours: 9, minutes: 0 },
    endTime: { hours: 17, minutes: 0 }
  },
  {
    titleKey: 'events.special.chaturmasyaVedanta',
    descriptionKey: 'events.descriptions.chaturmasyaVedanta',
    type: 'special',
    month: 7, // August
    day: 15,
    duration: 30,
    startTime: { hours: 9, minutes: 0 },
    endTime: { hours: 12, minutes: 0 }
  },
  {
    titleKey: 'events.special.chaturmasyaUpanishad',
    descriptionKey: 'events.descriptions.chaturmasyaUpanishad',
    type: 'special',
    month: 8, // September
    day: 15,
    duration: 30,
    startTime: { hours: 9, minutes: 0 },
    endTime: { hours: 12, minutes: 0 }
  },
  {
    titleKey: 'events.special.chaturmasyaBrahmasutra',
    descriptionKey: 'events.descriptions.chaturmasyaBrahmasutra',
    type: 'special',
    month: 9, // October
    day: 15,
    duration: 30,
    startTime: { hours: 9, minutes: 0 },
    endTime: { hours: 12, minutes: 0 }
  },
  {
    titleKey: 'events.special.dandiSwadhyaya',
    descriptionKey: 'events.descriptions.dandiSwadhyaya',
    type: 'special',
    month: 7, // August
    day: 15,
    duration: 120, // Entire Chaturmasya period
    startTime: { hours: 8, minutes: 0 },
    endTime: { hours: 11, minutes: 0 }
  },
  {
    titleKey: 'events.special.dandiAnushthan',
    descriptionKey: 'events.descriptions.dandiAnushthan',
    type: 'special',
    month: 7, // August
    day: 15,
    duration: 120, // Entire Chaturmasya period
    startTime: { hours: 15, minutes: 0 },
    endTime: { hours: 18, minutes: 0 }
  }
]; 