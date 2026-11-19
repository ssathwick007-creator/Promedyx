/**
 * PulseGuard Demonstration Datasets
 *
 * IMPORTANT MEDICAL & ETHICAL NOTICE:
 * All records, values, trends, and scores contained herein are SYNTHETIC DEMONSTRATION DATA
 * generated exclusively for UI architecture validation and workflow prototyping.
 * These do NOT represent real clinical telemetry, sensor outputs, or medical diagnoses.
 */

export const DEMO_DISCLAIMER = {
  BADGE: 'DEMO DATA',
  NOTICE: 'Simulated demonstration environment. Not connected to physical medical sensors.',
  LEGAL: 'For prototyping and hackathon evaluation only. Not for clinical diagnosis or treatment.',
};

export const DEMO_OVERVIEW_CARDS = [
  {
    id: 'monitoring-status',
    title: 'Monitoring Status',
    value: 'Active',
    subvalue: 'Continuous Telemetry',
    status: 'stable',
    icon: 'Radio',
    accentColor: 'cyan',
    metrics: [
      { label: 'Signal', value: '-48 dBm' },
      { label: 'Uptime', value: '99.9%' },
    ],
    trend: 'Stream healthy · 250 Hz',
    isDemo: true,
  },
  {
    id: 'temperature',
    title: 'Core Temperature',
    value: '98.4 °F',
    subvalue: '36.9 °C',
    status: 'stable',
    icon: 'Thermometer',
    accentColor: 'blue',
    metrics: [
      { label: 'Baseline', value: '98.2 °F' },
      { label: 'Deviation', value: '+0.2 °F' },
    ],
    trend: 'Normal thermal range (97.8° - 99.1°)',
    isDemo: true,
  },
  {
    id: 'activity-level',
    title: 'Activity Level',
    value: 'Moderate',
    subvalue: '6,420 steps today',
    status: 'info',
    icon: 'Footprints',
    accentColor: 'cyan',
    metrics: [
      { label: 'Active Mins', value: '46 min' },
      { label: 'Rest Ratio', value: '72%' },
    ],
    trend: '+12% above daily circadian target',
    isDemo: true,
  },
  {
    id: 'risk-level',
    title: 'Current Risk Level',
    value: 'Low Risk',
    subvalue: 'Risk Score: 14 / 100',
    status: 'stable',
    icon: 'ShieldCheck',
    accentColor: 'emerald',
    metrics: [
      { label: 'Trend', value: '-2 pts' },
      { label: 'Threshold', value: '< 30 Safe' },
    ],
    trend: 'Stable circadian vitals index',
    isDemo: true,
  },
];

export const DEMO_VITALS_TREND = {
  '24H': [
    { time: '00:00', heartRate: 61, spo2: 98, temp: 97.9, systolic: 118, diastolic: 76 },
    { time: '02:00', heartRate: 59, spo2: 99, temp: 97.8, systolic: 116, diastolic: 74 },
    { time: '04:00', heartRate: 58, spo2: 98, temp: 97.7, systolic: 115, diastolic: 74 },
    { time: '06:00', heartRate: 64, spo2: 98, temp: 98.0, systolic: 120, diastolic: 78 },
    { time: '08:00', heartRate: 72, spo2: 99, temp: 98.3, systolic: 122, diastolic: 80 },
    { time: '10:00', heartRate: 78, spo2: 98, temp: 98.5, systolic: 124, diastolic: 81 },
    { time: '12:00', heartRate: 74, spo2: 98, temp: 98.6, systolic: 121, diastolic: 79 },
    { time: '14:00', heartRate: 76, spo2: 99, temp: 98.5, systolic: 123, diastolic: 80 },
    { time: '16:00', heartRate: 82, spo2: 98, temp: 98.7, systolic: 126, diastolic: 82 },
    { time: '18:00', heartRate: 75, spo2: 99, temp: 98.4, systolic: 122, diastolic: 79 },
    { time: '20:00', heartRate: 68, spo2: 98, temp: 98.2, systolic: 119, diastolic: 77 },
    { time: '22:00', heartRate: 63, spo2: 99, temp: 98.0, systolic: 117, diastolic: 75 },
  ],
  '6H': [
    { time: '12:00', heartRate: 74, spo2: 98, temp: 98.6 },
    { time: '13:00', heartRate: 75, spo2: 98, temp: 98.5 },
    { time: '14:00', heartRate: 76, spo2: 99, temp: 98.5 },
    { time: '15:00', heartRate: 79, spo2: 98, temp: 98.6 },
    { time: '16:00', heartRate: 82, spo2: 98, temp: 98.7 },
    { time: '17:00', heartRate: 78, spo2: 99, temp: 98.5 },
  ],
  '1H': [
    { time: '17:10', heartRate: 77, spo2: 98, temp: 98.5 },
    { time: '17:20', heartRate: 76, spo2: 99, temp: 98.5 },
    { time: '17:30', heartRate: 78, spo2: 98, temp: 98.5 },
    { time: '17:40', heartRate: 75, spo2: 99, temp: 98.4 },
    { time: '17:50', heartRate: 76, spo2: 99, temp: 98.4 },
    { time: '18:00', heartRate: 75, spo2: 99, temp: 98.4 },
  ],
};

export const DEMO_ACTIVITY_DATA = [
  { hour: '06:00', intensity: 15, steps: 180, label: 'Waking' },
  { hour: '08:00', intensity: 58, steps: 890, label: 'Commute/Walk' },
  { hour: '10:00', intensity: 42, steps: 520, label: 'Desk Active' },
  { hour: '12:00', intensity: 75, steps: 1240, label: 'Lunch Walk' },
  { hour: '14:00', intensity: 35, steps: 460, label: 'Desk Focus' },
  { hour: '16:00', intensity: 65, steps: 1050, label: 'Midday Stretch' },
  { hour: '18:00', intensity: 88, steps: 1480, label: 'Evening Walk' },
  { hour: '20:00', intensity: 30, steps: 410, label: 'Evening Rest' },
  { hour: '22:00', intensity: 10, steps: 190, label: 'Preparing Sleep' },
];

export const DEMO_RECENT_ACTIVITIES = [
  {
    id: 'act-1',
    time: '8 minutes ago',
    category: 'Vitals Sync',
    description: 'Continuous telemetry frame #48,192 verified with zero dropped packets.',
    status: 'stable',
    icon: 'Radio',
  },
  {
    id: 'act-2',
    time: '24 minutes ago',
    category: 'Thermal Equilibrium',
    description: 'Skin temperature equilibrium verified at 98.4 °F (+0.2° variance within normal boundary).',
    status: 'stable',
    icon: 'Thermometer',
  },
  {
    id: 'act-3',
    time: '1 hour 15m ago',
    category: 'Kinetic Transition',
    description: 'Gait cadence measured at 112 spm during outdoor walk; heart-rate recovery within 180s.',
    status: 'info',
    icon: 'Footprints',
  },
  {
    id: 'act-4',
    time: '2 hours 40m ago',
    category: 'Baseline Re-calibration',
    description: 'Circadian resting heart rate baseline confirmed at 61 BPM during morning quiet period.',
    status: 'stable',
    icon: 'Activity',
  },
];

export const DEMO_RISK_PANEL_DATA = {
  status: 'LOW - STABLE',
  score: 14,
  maxScore: 100,
  confidence: '98.2%',
  level: 'stable',
  lastUpdated: '2 mins ago',
  explanation:
    'Circadian vitals and kinetic movement patterns align within baseline parameters. No respiratory depression, erratic tachyarrhythmia, or sudden fall kinetics detected.',
  factors: [
    { label: 'Cardiovascular Stability', score: 'Nominal (68 bpm avg)', status: 'stable' },
    { label: 'Oxygen Saturation (SpO2)', score: 'Optimal (98.6% avg)', status: 'stable' },
    { label: 'Thermal Equilibrium', score: 'Standard (98.4 °F)', status: 'stable' },
    { label: 'Kinetic Context Model', score: 'Non-Sedentary Regular', status: 'info' },
  ],
  disclaimer: 'Neutral demonstration status. No clinical medical evaluation has taken place.',
};

export const DEMO_ALERTS = [
  {
    id: 'ALT-1092',
    type: 'Skin Temperature Check',
    description: 'Slight thermal gradient (+0.3 °F) detected post-exercise. Normalized within 10 min.',
    timestamp: '14 mins ago',
    severity: 'info',
    status: 'Logged',
    channel: 'Thermal Sensor 01',
  },
  {
    id: 'ALT-1088',
    type: 'Prolonged Inactivity Window',
    description: 'Continuous sedentary interval exceeded 90 minutes. Prompted mild posture shift.',
    timestamp: '1 hour ago',
    severity: 'warning',
    status: 'Acknowledged',
    channel: 'IMU Motion Engine',
  },
  {
    id: 'ALT-1081',
    type: 'Telemetry Packet Checksum',
    description: 'Sensor interface handshake verified. BLE 5.2 link margin optimal at -48 dBm.',
    timestamp: '2 hours ago',
    severity: 'stable',
    status: 'Resolved',
    channel: 'Protocol Layer',
  },
  {
    id: 'ALT-1074',
    type: 'Resting Vitals Baseline',
    description: 'Circadian nocturnal dip observed normally between 03:00 - 05:00.',
    timestamp: '5 hours ago',
    severity: 'stable',
    status: 'Resolved',
    channel: 'Cardio Telemetry',
  },
];

export const DEMO_NOTIFICATIONS = [
  {
    id: 'notif-1',
    title: 'Continuous Telemetry Healthy',
    time: '2 mins ago',
    read: false,
    severity: 'stable',
    description: 'All 4 mock telemetry channels streaming with zero packet loss.',
  },
  {
    id: 'notif-2',
    title: 'Daily Baseline Synchronized',
    time: '45 mins ago',
    read: false,
    severity: 'info',
    description: 'Synthetic baseline metrics calibrated for current 24-hour cycle.',
  },
  {
    id: 'notif-3',
    title: 'Scheduled Audit Completed',
    time: '3 hours ago',
    read: true,
    severity: 'neutral',
    description: 'TLS 1.3 protocol validation check succeeded.',
  },
];

export const DEMO_USER_PROFILE = {
  name: 'Dr. Julian Vance',
  role: 'Lead Clinical Operator',
  department: 'Telemetry & Neuro-Cardiology',
  institution: 'PulseGuard Center for Advanced Telemetry',
  avatarInitials: 'JV',
  status: 'Online · Station 04',
  sessionId: 'PG-NODE-8912',
};

