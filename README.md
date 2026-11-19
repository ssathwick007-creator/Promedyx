# PulseGuard

> Intelligent, context-aware real-time health monitoring and early warning system.

---

## Architecture Foundation (Phase 1)

PulseGuard is structured with a modular, enterprise-grade clinical software architecture designed for high-frequency telemetry, intelligent contextual awareness, and early critical anomaly detection.

### Technology Stack
- **Framework:** React 18
- **Build Tool:** Vite 6
- **Language:** Modern JavaScript (ESM)
- **Styling & Design Tokens:** Tailwind CSS v3 with custom clinical palette
- **Iconography:** Lucide React
- **Motion & Micro-interactions:** Framer Motion

---

## Directory Organization

```
PulseGuard/
├── public/
│   └── pulseguard-icon.svg      # Clinical telemetry favicon & brand asset
├── src/
│   ├── assets/                  # SVG emblems, visual brand assets
│   ├── components/              # Reusable UI component library
│   │   └── ui/                  # Atom-level clinical primitives (Card, Badge, Button, StatusIndicator)
│   ├── hooks/                   # Custom React hooks (system health, connectivity)
│   ├── layouts/                 # Page-level structural layouts (AppLayout)
│   ├── pages/                   # Application view modules (SystemFoundationPage)
│   ├── services/                # Transport & communication abstractions (apiClient)
│   ├── styles/                  # Design tokens, CSS variables, global styles
│   ├── utils/                   # Shared utilities (class merger, formatters, constants)
│   ├── App.jsx                  # Root container component
│   └── main.jsx                 # Client entry point
├── index.html                   # HTML entry point with dark-mode canvas
├── package.json                 # Dependency definitions and lifecycle scripts
├── postcss.config.js            # PostCSS configuration with Tailwind & Autoprefixer
├── tailwind.config.js           # Clinical palette, dark navy theme, typography & shadows
└── vite.config.js               # Vite configuration with '@/*' path aliasing
```

---

## Design System Tokens

- **Canvas & Surface Palette:**
  - `navy-950` (`#060a12`): Deepest background canvas
  - `navy-900` (`#0a1120`): Main surface layer
  - `navy-850` (`#0f172a`): Clinical card surface
  - `navy-800` (`#162238`): Elevated control surface
  - `navy-750` (`#1d2c47`): Structural borders & hover states
  - `navy-700` (`#253757`): Subdued borders
- **Clinical Accents:**
  - `clinical-cyan` (`#06b6d4`): Waveform highlights, high-precision telemetry accents
  - `clinical-blue` (`#2563eb`): Primary brand action color
- **Status Levels:**
  - Stable: `#10b981` (Emerald)
  - Warning: `#f59e0b` (Amber)
  - Critical: `#ef4444` (Rose)
  - Standby: `#06b6d4` (Cyan)

---

## Running the Application

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```

### 4. Preview Build
```bash
npm run preview
```

"# Promedyx" 
