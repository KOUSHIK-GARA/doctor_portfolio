import type { PortfolioData } from '../types/portfolio';
import heroImage from '../assets/images/dr-chaitanya-kiran.jpg';
import consultationImage from '../assets/images/consultation.jpg';
import collageImage from '../assets/images/interventional-collage.jpg';
import bronchoscopyImage1 from '../assets/images/bronchoscopy-01.jpg';
import bronchoscopyImage2 from '../assets/images/bronchoscopy-02.jpg';

/**
 * Single, typed source of truth for all website content.
 * Edit the values here — the UI is derived entirely from this object.
 *
 * NOTE: phone, email and address are placeholders — replace them with the
 * clinic's real contact details before publishing. The hero image is imported
 * so Vite fingerprints and cache-busts it at build time.
 */
export const portfolio: PortfolioData = {
  doctor: {
    name: 'Dr. G. Chaitanya Kiran',
    title: 'Consultant Interventional Pulmonologist & Sleep Medicine',
    credentials: [
      'MBBS',
      'MD',
      'DNB (Pulmonary Medicine)',
      'FAIP (Yashoda Hospitals & SGH, Singapore)',
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
    heroImage,
    socials: [
      { platform: 'facebook', url: 'https://www.facebook.com/CHITTI2301' },
      { platform: 'instagram', url: 'https://www.instagram.com/urstruly_chitti/' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/chaitanya-kiran-9718b1344/' },
    ],
    hours: [
      { label: 'Mon – Sat', value: '10:00 AM – 6:00 PM' },
      { label: 'Sunday', value: 'Closed' },
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
    image: consultationImage,
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
  expertiseImage: bronchoscopyImage1,
  expertiseImageAlt: 'Dr. G. Chaitanya Kiran performing a bronchoscopy procedure',
  gallery: [
    {
      src: collageImage,
      alt: 'Dr. Chaitanya Kiran performing a range of interventional pulmonology procedures',
      caption: 'Interventional pulmonology in action',
    },
    {
      src: bronchoscopyImage1,
      alt: 'Dr. Chaitanya Kiran performing a bedside bronchoscopy',
      caption: 'Bedside bronchoscopy at the point of care',
      // Shift the crop down to reveal more of the top of the frame.
      objectPosition: '50% 28%',
    },
    {
      src: bronchoscopyImage2,
      alt: 'Dr. Chaitanya Kiran visualising the airway during a bronchoscopy',
      caption: 'Live airway visualisation during the procedure',
      // Shift the crop up to reveal more of the lower part of the frame.
      objectPosition: '50% 68%',
    },
  ],
  education: [
    {
      year: '2025',
      degree: 'DNB (Pulmonary Medicine)',
      institution: 'National Board of Examinations, India',
    },
    {
      year: '2021',
      degree: 'MD (Pulmonary Medicine)',
      institution: "IMS & SUM Hospital, Siksha 'O' Anusandhan University, Bhubaneswar",
    },
    {
      year: '2015',
      degree: 'MBBS',
      institution:
        'Alluri Sita Rama Raju Academy of Medical Sciences (ASRAM), Eluru — Dr. NTR University of Health Sciences, Andhra Pradesh',
    },
  ],
  experience: [
    {
      period: 'Jul 2026 – Present',
      role: 'Consultant Interventional Pulmonologist & Sleep Medicine',
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
      period: '2026',
      role: 'Diploma in Pediatric Pulmonary Medicine',
      organization: "Sishuka Children's Hospital, Bangalore",
    },
    {
      period: '2025',
      role: 'Fellowship in Advanced Lung Endoscopy',
      organization: 'Singapore General Hospital, Singapore',
    },
    {
      period: '2025',
      role: 'Fellowship in Sleep Medicine (ISDA)',
      organization: 'Indian Sleep Disorders Association',
    },
    {
      period: '2025',
      role: 'Advanced Certification in Asthma & Allergy',
      organization: 'Bangalore',
    },
    {
      period: '2024',
      role: 'Fellowship in Interventional Pulmonology',
      organization: 'Yashoda Hospitals, Somajiguda',
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
};
