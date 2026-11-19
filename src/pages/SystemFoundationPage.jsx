import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Layers,
  Cpu,
  Shield,
  Terminal,
} from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Button,
  StatusIndicator,
} from '@/components/ui';
import { APP_CONFIG } from '@/utils';

export function SystemFoundationPage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 4 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Platform Architecture Header */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E5EAE6]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#267C70]"></span>
            <span className="text-xs uppercase tracking-wider text-[#267C70] font-semibold">
              Clinical Design System & Architecture
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#20332F]">
            System Foundation & Component Primitives
          </h1>
          <p className="text-xs sm:text-sm text-[#718078] mt-1 max-w-2xl">
            PulseGuard clinical interface runtime initialized with modern light healthcare design tokens,
            resilient layout containers, and strictly typed architectural modules.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="stable" dot className="py-1 px-3">
            Light Theme Active
          </Badge>
          <Badge variant="outline" className="text-xs py-1">
            v{APP_CONFIG.VERSION}
          </Badge>
        </div>
      </motion.div>

      {/* Core Tech Stack Verification Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <motion.div variants={itemVariants}>
          <Card hover className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-[#DCEBE5] text-[#267C70]">
                  <Cpu className="w-4 h-4" />
                </span>
                <Badge variant="stable">Verified</Badge>
              </div>
              <CardTitle className="mt-3">React + Vite Runtime</CardTitle>
              <CardDescription>
                Fast ESM modular architecture configured with path alias resolution.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-xs space-y-2 text-[#718078]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#27856A]" />
                  <span>Vite 6 Fast Bundler</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#27856A]" />
                  <span>React 18 Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#27856A]" />
                  <span>Path Aliasing (@/*)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card hover className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-[#EAF3F0] text-[#27856A]">
                  <Layers className="w-4 h-4 text-[#27856A]" />
                </span>
                <Badge variant="stable">Verified</Badge>
              </div>
              <CardTitle className="mt-3">Clinical Light Theme</CardTitle>
              <CardDescription>
                Tailwind CSS tailored with soft warm canvas (#F3F5F2) and deep teal accents (#267C70).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-xs space-y-2 text-[#718078]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#27856A]" />
                  <span>Canvas (#F3F5F2) & White Surfaces</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#27856A]" />
                  <span>Primary Teal (#267C70) & Mint (#DCEBE5)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#27856A]" />
                  <span>Calibrated Medical Color Tokens</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card hover className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-[#FBF5EB] text-[#D69A43]">
                  <Shield className="w-4 h-4" />
                </span>
                <Badge variant="info">Standby</Badge>
              </div>
              <CardTitle className="mt-3">Motion & Iconography</CardTitle>
              <CardDescription>
                Framer Motion spring physics and Lucide clinical symbols.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-xs space-y-2 text-[#718078]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#27856A]" />
                  <span>Lucide Icons Loaded</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#27856A]" />
                  <span>Micro-Interaction Transitions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#27856A]" />
                  <span>Accessible Motion Fallbacks</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Component & Token Exhibition (Visual Verification) */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Foundation UI Primitives</CardTitle>
                <CardDescription className="mt-1">
                  Reusable components tailored for healthcare SaaS interfaces.
                </CardDescription>
              </div>
              <Badge variant="outline" className="text-xs">
                Tokens Active
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Badges and Indicators */}
            <div>
              <div className="text-xs font-semibold text-[#718078] uppercase tracking-wider mb-3">
                Telemetry Severity Badges & Status Indicators
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="stable" dot>Stable Condition</Badge>
                <Badge variant="info" dot>Sensors Synced</Badge>
                <Badge variant="warning" dot>Early Caution</Badge>
                <Badge variant="critical" dot>Threshold Breach</Badge>
                <Badge variant="neutral">System Idle</Badge>
                <Badge variant="outline">Unassigned Channel</Badge>
              </div>
            </div>

            {/* Buttons */}
            <div>
              <div className="text-xs font-semibold text-[#718078] uppercase tracking-wider mb-3">
                Action Primitives
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary">
                  <span>Primary Clinical Action</span>
                </Button>
                <Button variant="teal">
                  <span>Teal Soft Action</span>
                </Button>
                <Button variant="secondary">
                  <span>Secondary Surface</span>
                </Button>
                <Button variant="outline">
                  <span>Border Outline</span>
                </Button>
                <Button variant="ghost">
                  <span>Ghost Action</span>
                </Button>
                <Button variant="danger">
                  <span>Emergency Abort</span>
                </Button>
              </div>
            </div>

            {/* Live Status Indicators */}
            <div>
              <div className="text-xs font-semibold text-[#718078] uppercase tracking-wider mb-3">
                Live Pulse Indicators
              </div>
              <div className="flex flex-wrap items-center gap-6 p-4 rounded-xl bg-[#FAFBF9] border border-[#E5EAE6]">
                <StatusIndicator status="stable" label="Engine: Normal" />
                <StatusIndicator status="warning" label="Engine: Attention" />
                <StatusIndicator status="critical" label="Engine: Trigger Breach" />
                <StatusIndicator status="standby" label="Engine: Standby" />
              </div>
            </div>
          </CardContent>

          <CardFooter className="justify-between text-xs text-[#718078]">
            <span>DESIGN SYSTEM COMPLETE</span>
            <span className="text-[#267C70] font-medium">LIGHT CLINICAL PALETTE</span>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default SystemFoundationPage;
