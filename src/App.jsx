import React, { useState } from 'react';
import { DashboardLayout } from '@/layouts';
import { DashboardPage } from '@/pages';

export function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <DashboardLayout activeTab={activeTab} onSelectTab={setActiveTab}>
      <DashboardPage
        activeTab={activeTab}
        onResetToOverview={() => setActiveTab('overview')}
      />
    </DashboardLayout>
  );
}

export default App;
