import React from 'react';
import { motion } from 'framer-motion';
import {
  OverviewMetricCards,
  VitalsTrendChart,
  ActivityChart,
  MonitoringStatusPanel,
  RecentActivityFeed,
  RiskStatusPanel,
  RecentAlertsSection,
} from '@/components/dashboard';
import { Info, ArrowRight } from 'lucide-react';

export function DashboardPage({ activeTab = 'overview', onResetToOverview }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 4 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        staggerChildren: 0.05,
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
      {/* If non-overview tab is selected, show polite notice banner */}
      {activeTab !== 'overview' && (
        <motion.div
          variants={itemVariants}
          className="p-4 rounded-xl bg-white border border-[#E5EAE6] shadow-clinical-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-[#DCEBE5] text-[#267C70]">
              <Info className="w-4 h-4" />
            </span>
            <div>
              <div className="text-xs font-semibold text-[#20332F]">
                Viewing Module Preview: <span className="text-[#267C70] capitalize">{activeTab.replace('-', ' ')}</span>
              </div>
              <p className="text-xs text-[#718078] mt-0.5">
                In this development phase, all primary telemetry waveforms and risk monitoring widgets are integrated within the Overview dashboard.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onResetToOverview}
            className="text-xs text-[#267C70] hover:underline font-medium flex items-center gap-1 shrink-0"
          >
            <span>Return to Overview</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}

      {/* 1. Four Overview Cards */}
      <motion.section variants={itemVariants} aria-label="Dashboard Metric Summary">
        <OverviewMetricCards />
      </motion.section>

      {/* 2. Primary Telemetry Charts: 24h Vitals Waveform & Kinetic Movement */}
      <motion.section
        variants={itemVariants}
        className="grid grid-cols-1 xl:grid-cols-3 gap-6"
        aria-label="Monitoring Overview Charts"
      >
        <div className="xl:col-span-2">
          <VitalsTrendChart />
        </div>
        <div className="xl:col-span-1">
          <ActivityChart />
        </div>
      </motion.section>

      {/* 3. AI Risk Intelligence & Telemetry Pipeline Diagnostics */}
      <motion.section
        variants={itemVariants}
        className="grid grid-cols-1 xl:grid-cols-2 gap-6"
        aria-label="Risk and Status Diagnostics"
      >
        <RiskStatusPanel />
        <MonitoringStatusPanel />
      </motion.section>

      {/* 4. Recent Alerts & Chronological Activity Log */}
      <motion.section
        variants={itemVariants}
        className="grid grid-cols-1 xl:grid-cols-3 gap-6"
        aria-label="Alerts and Activity Stream"
      >
        <div className="xl:col-span-2">
          <RecentAlertsSection />
        </div>
        <div className="xl:col-span-1">
          <RecentActivityFeed />
        </div>
      </motion.section>
    </motion.div>
  );
}

export default DashboardPage;
