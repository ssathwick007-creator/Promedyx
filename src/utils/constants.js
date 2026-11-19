/**
 * PulseGuard System Constants & Navigation Tokens
 */

export const APP_CONFIG = {
  NAME: 'PulseGuard',
  TAGLINE: 'Intelligent Real-Time Health Monitoring & Early Warning System',
  VERSION: '0.1.0-alpha',
  CLASSIFICATION: 'Clinical Tier-1 Architecture',
  DEMO_MODE: true,
};

export const STATUS_SEVERITY = {
  STABLE: 'stable',
  WARNING: 'warning',
  CRITICAL: 'critical',
  INFO: 'info',
  INACTIVE: 'inactive',
};

export const SIDEBAR_NAV_ITEMS = [
  {
    id: 'overview',
    label: 'Overview',
    icon: 'LayoutDashboard',
    badge: null,
    description: 'Central clinical telemetry & summary',
  },
  {
    id: 'live-monitoring',
    label: 'Live Monitoring',
    icon: 'Activity',
    badge: 'Live',
    badgeVariant: 'info',
    description: 'High-frequency real-time waveforms',
  },
  {
    id: 'health-profile',
    label: 'Health Profile',
    icon: 'HeartPulse',
    badge: null,
    description: 'Patient baseline & physiological records',
  },
  {
    id: 'ai-risk',
    label: 'AI Risk Intelligence',
    icon: 'BrainCircuit',
    badge: 'Beta',
    badgeVariant: 'outline',
    description: 'Predictive risk score & anomaly engine',
  },
  {
    id: 'smart-alerts',
    label: 'Smart Alerts',
    icon: 'BellRing',
    badge: '2 New',
    badgeVariant: 'warning',
    description: 'Multi-parameter threshold triggers',
  },
  {
    id: 'caregiver',
    label: 'Caregiver Portal',
    icon: 'Users2',
    badge: null,
    description: 'Caregiver notifications & emergency links',
  },
  {
    id: 'analytics',
    label: 'Analytics & Reports',
    icon: 'BarChart3',
    badge: null,
    description: 'Circadian trends & exportable summaries',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'Settings',
    badge: null,
    description: 'Sensor parameters & alerting thresholds',
  },
];
