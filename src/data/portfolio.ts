import type { PortfolioData } from '../types/portfolio';

const S3_IMAGE_BASE_URL = 'https://amzn-s3-gck-profile.s3.ap-south-1.amazonaws.com/images';

const imageUrl = (filename: string) => `${S3_IMAGE_BASE_URL}/${filename}`;

/**
 * Single, typed source of truth for all website content.
 * Edit the values here — the UI is derived entirely from this object.
 *
 * NOTE: phone, email and address are placeholders — replace them with the
 * clinic's real contact details before publishing. Images are served from S3
 * to keep the frontend bundle lightweight.
 */
export const portfolio: PortfolioData = {
  doctor: {
    name: 'Dr. G. Chaitanya Kiran',
    title: 'Consultant Interventional Pulmonologist & Sleep Medicine',
    credentials: [
      'MBBS',
      'MD',
      'DNB (Pulmonary Medicine)',
      'FAIP (Yashoda Hospitals & SGH - Singapore)',
      'FSM',
      'DPPM',
      'DPSM',
      'CAAI',
    ],
    location: 'Bhubaneswar, Odisha',
    phone: '+91 9494204143',
    email: 'dr.chaitanyakiran2301.ck@gmail.com',
    address: 'Manipal Hospitals, Bhubaneswar',
    bio: 'Dr. G. Chaitanya Kiran is a Consultant Interventional Pulmonologist and Sleep Medicine specialist trained at Yashoda Hospitals and Singapore General Hospital. He offers advanced diagnostic and therapeutic airway interventions for adults and children, alongside comprehensive sleep, asthma and respiratory critical care.',
    heroImage: imageUrl('dr_gck.jpeg'),
    socials: [
      { platform: 'facebook', url: 'https://www.facebook.com/CHITTI2301' },
      { platform: 'instagram', url: 'https://www.instagram.com/urstruly_chitti/' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/chaitanya-kiran-9718b1344/' },
    ],
    // Hospital OPD timings shown under the clinic address in the footer.
    locationHours: 'Mon – Sat · 10:00 AM – 5:00 PM',
    hours: [
      { label: 'Mon – Sat', value: '5:30 PM – 9:30 PM' },
      { label: 'Sunday', value: 'On call' },
    ],
  },
  hero: {
    eyebrow: 'Interventional Pulmonology & Sleep Medicine',
    stats: [
      { value: 'SGH', label: 'Singapore trained' },
      { value: '4+', label: 'Fellowships & diplomas' },
      { value: 'Adult & Child', label: 'Lung interventions' },
    ],
  },
  about: {
    lead: 'Dr. G. Chaitanya Kiran provides advanced, evidence-based interventional pulmonology and sleep medicine care — from complex airway procedures to critical respiratory support for patients of all ages.',
    image: imageUrl('about_the_doctor.jpeg'),
    imageAlt: 'Dr. G. Chaitanya Kiran at his consultation clinic',
  },
  expertise: [
    {
      title: 'Clinical Respiratory Care',
      description: 'Comprehensive diagnosis and treatment of a wide range of respiratory disorders.',
      details: [],
    },
    {
      title: 'Adult Lung Interventions',
      description: 'Advanced bronchoscopic and minimally invasive airway procedures for adults.',
      details: [
        'Flexible Bronchoscopy',
        'Thoracoscopy',
        'Rigid Bronchoscopy',
        'EBUS (Linear & Radial)',
        'Cryotherapy',
        'Electrosurgery',
        'Stenosis Repair',
        'Airway Stenting',
        'Pigtail',
        'IPC',
      ],
    },
    {
      title: 'Pediatric Lung Interventions',
      description: 'Specialised, gentle care and advanced interventions for children with lung conditions.',
      details: ['Foreign Body Retrieval', 'Sleep Evaluation'],
    },
    {
      title: 'Sleep Medicine',
      description: 'Evaluation and treatment of sleep disorders for better breathing and quality of rest.',
      details: ['OSA/OHS Management', 'Level 1 Sleep Study', 'PAP Titration'],
    },
    {
      title: 'Asthma & Allergy',
      description: 'Expert care for asthma, allergies and other chronic respiratory conditions.',
      details: ['Skin Prick Testing', 'Immunology', 'Biologics'],
    },
    {
      title: 'Respiratory Critical Care',
      description: 'Specialised intensive care for severe and critical respiratory illness.',
      details: ['Respiratory Failure', 'ARDS Management', 'ECMO Support'],
    },
    {
      title: 'Pulmonary Rehabilitation',
      description: 'Personalised rehabilitation programs to improve lung function and quality of life.',
      details: [
        'Adult Vaccinations',
        'Chest Physiotherapy',
        'Postural Drainage',
        'PEP Devices Training',
      ],
    },
    {
      title: 'Lung Transplant Assessment',
      description: 'Thorough evaluation and work-up for lung transplant candidacy.',
      details: [],
    },
    {
      title: 'Lung Cancer Screening & Diagnosis',
      description: 'Early detection and accurate diagnosis for better outcomes and long-term health.',
      details: [],
    },
  ],
  expertiseImage: imageUrl('collage.jpeg'),
  expertiseImageAlt: 'A collage of Dr. G. Chaitanya Kiran performing interventional pulmonology procedures',
  gallery: [
    {
      src: imageUrl('G1.jpg'),
      alt: 'Dr. Chaitanya Kiran holding a bronchoscope in a clinical procedure room',
      caption: 'Focused bronchoscopy care at the bedside',
    },
    {
      src: imageUrl('G2.jpg'),
      alt: 'Dr. Chaitanya Kiran coordinating with his team during an airway procedure',
      caption: 'Team coordination during airway intervention',
    },
    {
      src: imageUrl('G3.jpg'),
      alt: 'Clinical team reviewing imaging guidance during an interventional pulmonology procedure',
      caption: 'Image-guided planning inside the procedure room',
    },
    {
      src: imageUrl('G4.jpg'),
      alt: 'Dr. Chaitanya Kiran and clinical staff performing a bronchoscopy procedure',
      caption: 'Airway procedure with the bronchoscopy team',
    },
    {
      src: imageUrl('G5.jpg'),
      alt: 'Dr. Chaitanya Kiran beside advanced bronchoscopy equipment and airway imaging',
      caption: 'Advanced bronchoscopy setup for interventional care',
    },
    {
      src: imageUrl('G6.jpg'),
      alt: 'Dr. Chaitanya Kiran monitoring live endoscopic imaging in a procedure suite',
      caption: 'Live endoscopic monitoring during intervention',
    },
    {
      src: imageUrl('G7.jpg'),
      alt: 'Dr. Chaitanya Kiran visualising the airway during bronchoscopy',
      caption: 'Real-time airway visualisation during bronchoscopy',
    },
    {
      src: imageUrl('G8.jpg'),
      alt: 'Close-up of Dr. Chaitanya Kiran preparing bronchoscopy equipment',
      caption: 'Precision handling during a bronchoscopic procedure',
    },
    {
      src: imageUrl('G9.jpg'),
      alt: 'Dr. Chaitanya Kiran standing beside navigation bronchoscopy imaging equipment',
      caption: 'Navigation bronchoscopy with imaging support',
    },
    {
      src: imageUrl('G10.jpg'),
      alt: 'Dr. Chaitanya Kiran prepared for a therapeutic airway intervention',
      caption: 'Prepared for therapeutic airway intervention',
    },
  ],
  education: [
    {
      year: '2025',
      degree: 'DNB (Pulmonary Medicine)',
      institution: 'National Board of Examinations, India',
      tag: 'Post Graduate',
    },
    {
      year: '2021',
      degree: 'MD (Pulmonary Medicine)',
      institution: "IMS & SUM Hospital, Siksha 'O' Anusandhan University, Bhubaneswar",
      tag: 'Post Graduate',
    },
    {
      year: '2015',
      degree: 'MBBS',
      institution:
        'Alluri Sita Rama Raju Academy of Medical Sciences (ASRAM), Eluru — Dr. NTR University of Health Sciences, Andhra Pradesh',
      tag: 'Medical Degree',
    },
    {
      year: '2024',
      degree: 'Fellowship in Interventional Pulmonology',
      institution: 'Yashoda Hospitals, Somajiguda',
      tag: 'Fellowship',
    },
    {
      year: '2025',
      degree: 'Fellowship in Advanced Lung Endoscopy',
      institution: 'Singapore General Hospital, Singapore',
      tag: 'Fellowship',
    },
    {
      year: '2025',
      degree: 'Fellowship in Sleep Medicine (ISDA)',
      institution: 'Indian Sleep Disorders Association',
      tag: 'Fellowship',
    },
    {
      year: '2026',
      degree: 'Diploma in Pediatric Pulmonary Medicine',
      institution: "Sishuka Children's Hospital, Bangalore",
      tag: 'Diploma',
    },
    {
      year: '2026',
      degree: 'Diploma in Pediatric Sleep Medicine',
      institution: 'Colorado, USA',
      tag: 'Diploma',
    },
    {
      year: '2025',
      degree: 'Advanced Certification in Asthma & Allergy',
      institution: 'Bangalore',
      tag: 'Certification',
    },
  ],
  experience: [
    {
      period: 'Jul 2026 – Present',
      role: 'Consultant Interventional Pulmonology & Sleep Medicine',
      organization: 'Manipal Hospitals, Bhubaneswar',
    },
    {
      period: 'Jan 2025 – Jul 2026',
      role: 'Consultant Interventional Pulmonology & Sleep Medicine',
      organization: 'KIMS Hospitals, Srikakulam',
    },
    {
      period: 'Aug 2022 – Present',
      role: 'Assistant Professor of Respiratory Medicine',
      organization: 'GEMS Medical College, Srikakulam',
    },
    {
      period: '2021 – 2022',
      role: 'Senior Resident',
      organization: 'GHCCD, Andhra Medical College, Visakhapatnam',
    },
    {
      period: '2018 – 2021',
      role: 'PG Resident (Pulmonary Medicine)',
      organization: "IMS & SUM Hospital, Siksha 'O' Anusandhan University, Bhubaneswar",
    },
  ],
  achievements: [
    'First Prize — National Allergy Quiz',
    'Best Image — WABIP, Bali, Indonesia',
    'Third Prize — Poster Presentation on ILD, NAPCON 2020',
  ],
  memberships: [
    'Indian Chest Society',
    'European Respiratory Society',
    'Indian Association of Bronchology',
    'World Association of Bronchology & Interventional Pulmonology',
  ],
  booking: {
    // WhatsApp number in international format, digits only.
    whatsappNumber: '919390093095',
    // Rounded evening slots (clinic hours 5:30–9:30 PM). Edit freely.
    timeSlots: [
      '5:00 PM',
      '5:30 PM',
      '6:00 PM',
      '6:30 PM',
      '7:00 PM',
      '7:30 PM',
      '8:00 PM',
      '8:30 PM',
      '9:00 PM',
      '9:30 PM',
    ],
    // Direct-send options (no WhatsApp window opens when either is set):
    //   1. relayEndpoint  — serverless URL that calls the WhatsApp Cloud API.
    //   2. callmebotApiKey — free CallMeBot key that messages the number above.
    // Leave both empty to temporarily fall back to opening WhatsApp (wa.me).
    relayEndpoint: '',
    callmebotApiKey: '',
    // Deferred email flow.
    enableEmail: false,
    web3formsAccessKey: '',
  },
};
