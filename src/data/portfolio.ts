import type { PortfolioData } from '../types/portfolio';
import heroImage from '../assets/images/dr-chaitanya-kiran.jpg';

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
    email: 'appointments@example.com',
    address: 'Manipal Hospitals, Bhubaneswar',
    bio: 'Dr. G. Chaitanya Kiran is a Consultant Interventional Pulmonologist and Sleep Medicine specialist trained at Yashoda Hospitals and Singapore General Hospital. He offers advanced diagnostic and therapeutic airway interventions for adults and children, alongside comprehensive sleep, asthma and respiratory critical care.',
    heroImage,
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
  },
  expertise: [
    { title: 'Clinical Respiratory Care', details: [] },
    {
      title: 'Adult Lung Interventions',
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
      details: ['Foreign Body Retrieval', 'Sleep Evaluation'],
    },
    {
      title: 'Sleep Medicine',
      details: ['OSA/OHS Management', 'Level 1 Sleep Study', 'PAP Titration'],
    },
    {
      title: 'Asthma & Allergy',
      details: ['Skin Prick Testing', 'Immunology', 'Biologics'],
    },
    {
      title: 'Respiratory Critical Care',
      details: ['Respiratory Failure', 'ARDS Management', 'ECMO Support'],
    },
    {
      title: 'Pulmonary Rehabilitation',
      details: [
        'Adult Vaccinations',
        'Chest Physiotherapy',
        'Postural Drainage',
        'PEP Devices Training',
      ],
    },
    { title: 'Lung Transplant Assessment', details: [] },
    { title: 'Lung Cancer Screening & Diagnosis', details: [] },
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
