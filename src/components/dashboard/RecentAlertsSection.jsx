import React, { useState } from 'react';
import {
  BellRing,
  Clock,
  ArrowUpRight,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from '@/components/ui';
import { DEMO_ALERTS } from '@/utils';

export function RecentAlertsSection() {
  const [filter, setFilter] = useState('all');

  const filteredAlerts = DEMO_ALERTS.filter((alert) => {
    if (filter === 'all') return true;
    if (filter === 'warnings') return alert.severity === 'warning';
    if (filter === 'resolved') return alert.status === 'Resolved';
    return true;
  });

  return (
    <Card className="bg-white border border-[#E5EAE6] shadow-clinical-card">
      <CardHeader className="p-5 pb-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5EAE6]">
        <div>
          <div className="flex items-center gap-2">
            <CardTitle className="text-sm font-semibold text-[#20332F] flex items-center gap-2">
              <BellRing className="w-4 h-4 text-[#267C70]" />
              Recent Alert Events Log
            </CardTitle>
            <Badge variant="neutral" className="text-[10px] py-0 px-1.5 font-normal">
              Demo Events
            </Badge>
          </div>
          <CardDescription className="text-xs text-[#718078] mt-1">
            Example multi-parameter trigger events and sensor integrity records.
          </CardDescription>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center bg-[#F3F5F2] p-0.5 rounded-lg border border-[#E5EAE6] text-xs">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-md transition-colors ${
              filter === 'all'
                ? 'bg-white text-[#20332F] font-semibold shadow-xs border border-[#E5EAE6]'
                : 'text-[#718078] hover:text-[#20332F]'
            }`}
          >
            All ({DEMO_ALERTS.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('warnings')}
            className={`px-3 py-1 rounded-md transition-colors ${
              filter === 'warnings'
                ? 'bg-white text-[#D69A43] font-semibold shadow-xs border border-[#E5EAE6]'
                : 'text-[#718078] hover:text-[#20332F]'
            }`}
          >
            Warnings
          </button>
          <button
            type="button"
            onClick={() => setFilter('resolved')}
            className={`px-3 py-1 rounded-md transition-colors ${
              filter === 'resolved'
                ? 'bg-white text-[#27856A] font-semibold shadow-xs border border-[#E5EAE6]'
                : 'text-[#718078] hover:text-[#20332F]'
            }`}
          >
            Resolved
          </button>
        </div>
      </CardHeader>

      <CardContent className="p-5 pt-3">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E5EAE6] text-[11px] font-medium text-[#718078] uppercase tracking-wider bg-[#FAFBF9]">
                <th className="py-2.5 px-3 rounded-l">Alert ID & Type</th>
                <th className="py-2.5 px-3">Telemetry Source</th>
                <th className="py-2.5 px-3">Severity</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3">Timestamp</th>
                <th className="py-2.5 px-3 text-right rounded-r">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5EAE6] text-xs">
              {filteredAlerts.map((alert) => (
                <tr
                  key={alert.id}
                  className="hover:bg-[#FAFBF9] transition-colors group"
                >
                  <td className="py-3 px-3">
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#20332F] group-hover:text-[#267C70] transition-colors">
                        {alert.type}
                      </span>
                      <span className="text-[11px] text-[#718078] mt-0.5">
                        {alert.id} • {alert.description}
                      </span>
                    </div>
                  </td>

                  <td className="py-3 px-3 whitespace-nowrap text-[#718078]">
                    {alert.channel}
                  </td>

                  <td className="py-3 px-3 whitespace-nowrap">
                    <Badge
                      variant={
                        alert.severity === 'warning'
                          ? 'warning'
                          : alert.severity === 'critical'
                          ? 'critical'
                          : alert.severity === 'info'
                          ? 'info'
                          : 'stable'
                      }
                      dot
                      className="text-[10px] py-0.5 px-2 font-medium capitalize"
                    >
                      {alert.severity}
                    </Badge>
                  </td>

                  <td className="py-3 px-3 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] border font-medium ${
                        alert.status === 'Resolved'
                          ? 'bg-[#EAF3F0] text-[#27856A] border-[#D2E5DE]'
                          : alert.status === 'Acknowledged'
                          ? 'bg-[#DCEBE5] text-[#267C70] border-[#C3DDD4]'
                          : 'bg-[#F3F5F2] text-[#718078] border-[#E5EAE6]'
                      }`}
                    >
                      {alert.status}
                    </span>
                  </td>

                  <td className="py-3 px-3 whitespace-nowrap text-[#718078] text-xs">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#718078]" />
                      {alert.timestamp}
                    </span>
                  </td>

                  <td className="py-3 px-3 text-right whitespace-nowrap">
                    <button
                      type="button"
                      onClick={() =>
                        alert(`[Demonstration Notice] Alert Inspection for ${alert.id}:\n\n${alert.description}\nSource: ${alert.channel}\nSeverity: ${alert.severity}`)
                      }
                      className="inline-flex items-center gap-1 text-xs text-[#267C70] hover:underline font-medium p-1 transition-colors"
                    >
                      <span>Trace</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 pt-3 border-t border-[#E5EAE6] flex flex-col sm:flex-row items-center justify-between text-xs text-[#718078] gap-2">
          <span>All records above are synthetic demonstration events</span>
          <span>Automatic acknowledgment enabled (demo mode)</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default RecentAlertsSection;
