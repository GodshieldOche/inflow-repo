export const tiers = [
  {
    name: 'Free',
    id: 'free',
    price: { monthly: '$0', annually: '$0' },
    features: [
      '3 pages per day',
      'Standard processing speed',
      '2MB file size limit',
    ],
    limits: {
      dailyPages: 3,
      fileSize: 2 * 1024 * 1024, // 2MB
    },
    cta: 'Get Started for Free',
    href: '/signup',
  },
  {
    name: 'Starter',
    id: 'Starter',
    price: { monthly: '$19', annually: '$15' },
    paddle: {
      monthly: 'price_1234567890abcdef',
      annually: 'price_abcdef1234567890',
    },
    features: [
      'Up to 1,000 pages per month',
      'Bulk conversion up to 5 files',
      '10MB bulk upload size',
      '2MB each file size limit',
      'Google drive storage link',
      'Priority email support',
      'Ad-Free Experience',
    ],
    limits: {
      monthlyPages: 1000,
      bulkConversionFiles: 5,
      bulkUploadSize: 10 * 1024 * 1024, // 10MB
      fileSize: 2 * 1024 * 1024, // 2MB
    },
    cta: 'Upgrade to Starter',
    href: '/signup?plan=starter',
    highlight: true,
  },
  {
    name: 'Pro',
    id: 'Pro',
    price: { monthly: '$49', annually: '$39' },
    paddle: {
      monthly: 'price_0987654321fedcba',
      annually: 'price_fedcba0987654321',
    },
    features: [
      'All Starter features',
      'Up to 5,000 pages per month',
      'Bulk conversion up to 20 files',
      '50MB bulk upload size',
      '5MB each file size limit',
      'Dedicated support channel',
    ],
    limits: {
      monthlyPages: 5000,
      bulkConversionFiles: 20,
      bulkUploadSize: 50 * 1024 * 1024, // 50MB
      fileSize: 5 * 1024 * 1024, // 5MB
    },
    cta: 'Choose Pro',
    href: '/signup?plan=pro',
  },
];
