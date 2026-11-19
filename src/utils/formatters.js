/**
 * PulseGuard Core Formatters
 * Pure utility functions for timestamps and display strings.
 */

/**
 * Format timestamp into standard ISO time for clinical audit logs.
 * @param {Date | number | string} date
 * @returns {string}
 */
export function formatTimestamp(date = new Date()) {
  const d = new Date(date);
  return d.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
}

/**
 * Format relative time in seconds/minutes.
 * @param {number} seconds
 * @returns {string}
 */
export function formatDuration(seconds) {
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const remSec = seconds % 60;
  return `${mins}m ${remSec}s`;
}

