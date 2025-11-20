import React from 'react';

// SVG Icon Components
export const AIIcon = ({ size = 40, color = "#2e3591" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="1.5" fill={color}/>
  </svg>
);

export const AutomationIcon = ({ size = 40, color = "#2e3591" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2"/>
    <path d="M12 1V4M12 20V23M23 12H20M4 12H1M20.49 20.49L18.36 18.36M5.64 5.64L3.51 3.51M20.49 3.51L18.36 5.64M5.64 18.36L3.51 20.49" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const AnalyticsIcon = ({ size = 40, color = "#2e3591" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="2"/>
    <path d="M8 17V12M12 17V7M16 17V14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const MonitoringIcon = ({ size = 40, color = "#2e3591" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="12" r="3" fill={color}/>
    <path d="M12 2V5M12 19V22M22 12H19M5 12H2" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const AlertIcon = ({ size = 40, color = "#2e3591" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IntegrationIcon = ({ size = 40, color = "#2e3591" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="12" r="3" stroke={color} strokeWidth="2"/>
    <circle cx="19" cy="12" r="3" stroke={color} strokeWidth="2"/>
    <path d="M8 12H16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 8V16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const PerformanceIcon = ({ size = 40, color = "#2e3591" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} fillOpacity="0.2"/>
  </svg>
);

export const SecurityIcon = ({ size = 40, color = "#2e3591" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CollaborationIcon = ({ size = 40, color = "#2e3591" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="7" r="4" stroke={color} strokeWidth="2"/>
    <circle cx="17" cy="17" r="4" stroke={color} strokeWidth="2"/>
    <path d="M3 21C3 17.134 6.134 14 10 14M14 10C14 13.866 17.134 17 21 17" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const ScalabilityIcon = ({ size = 40, color = "#2e3591" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17L9 11L13 15L21 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 7H21V11" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ReportingIcon = ({ size = 40, color = "#2e3591" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const NetworkIcon = ({ size = 40, color = "#2e3591" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <path d="M2 12H22M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22M12 2C9.5 4.5 8 8 8 12C8 16 9.5 19.5 12 22" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IdeaIcon = ({ size = 40, color = "#2e3591" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21H15M12 3C8.68629 3 6 5.68629 6 9C6 11.0935 7.0124 12.9461 8.5625 14.0625L9 17H15L15.4375 14.0625C16.9876 12.9461 18 11.0935 18 9C18 5.68629 15.3137 3 12 3Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 17V18C9 19.6569 10.3431 21 12 21C13.6569 21 15 19.6569 15 18V17" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const TargetIcon = ({ size = 40, color = "#2e3591" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="12" r="6" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="12" r="2" fill={color}/>
  </svg>
);

export const RocketIcon = ({ size = 40, color = "#2e3591" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const StarIcon = ({ size = 40, color = "#2e3591" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} fillOpacity="0.2"/>
  </svg>
);

// Track used icons to avoid repetition
const usedIconsTracker = new Set();

// Icon selector function with uniqueness tracking
export const getFeatureIcon = (title, description, idx, resetTracker = false) => {
  // Reset tracker for new sections
  if (resetTracker || idx === 0) {
    usedIconsTracker.clear();
  }
  
  const text = (title + ' ' + description).toLowerCase();
  
  // All available icons
  const iconMap = [
    { keywords: ['ai', 'intelligent', 'smart', 'alice'], icon: 'AIIcon', component: <AIIcon /> },
    { keywords: ['automat', 'workflow', 'orchestr'], icon: 'AutomationIcon', component: <AutomationIcon /> },
    { keywords: ['analyt', 'insight', 'dashboard', 'visual'], icon: 'AnalyticsIcon', component: <AnalyticsIcon /> },
    { keywords: ['monitor', 'observ', 'track', 'detect'], icon: 'MonitoringIcon', component: <MonitoringIcon /> },
    { keywords: ['alert', 'notif', 'incident'], icon: 'AlertIcon', component: <AlertIcon /> },
    { keywords: ['integrat', 'api', 'connect'], icon: 'IntegrationIcon', component: <IntegrationIcon /> },
    { keywords: ['perform', 'speed', 'fast', 'optim'], icon: 'PerformanceIcon', component: <PerformanceIcon /> },
    { keywords: ['secur', 'protect', 'safe'], icon: 'SecurityIcon', component: <SecurityIcon /> },
    { keywords: ['collab', 'team', 'share'], icon: 'CollaborationIcon', component: <CollaborationIcon /> },
    { keywords: ['scal', 'grow', 'expand'], icon: 'ScalabilityIcon', component: <ScalabilityIcon /> },
    { keywords: ['report', 'document', 'log'], icon: 'ReportingIcon', component: <ReportingIcon /> },
    { keywords: ['network', 'infra', 'topology'], icon: 'NetworkIcon', component: <NetworkIcon /> }
  ];
  
  // Try to match keywords
  for (const { keywords, icon, component } of iconMap) {
    if (keywords.some(keyword => text.includes(keyword)) && !usedIconsTracker.has(icon)) {
      usedIconsTracker.add(icon);
      return component;
    }
  }
  
  // Fallback to unused icons
  const fallbackIcons = [
    { icon: 'IdeaIcon', component: <IdeaIcon /> },
    { icon: 'TargetIcon', component: <TargetIcon /> },
    { icon: 'RocketIcon', component: <RocketIcon /> },
    { icon: 'StarIcon', component: <StarIcon /> }
  ];
  
  for (const { icon, component } of fallbackIcons) {
    if (!usedIconsTracker.has(icon)) {
      usedIconsTracker.add(icon);
      return component;
    }
  }
  
  // If all icons used, cycle through all available icons
  const allIcons = [...iconMap.map(i => i.component), ...fallbackIcons.map(i => i.component)];
  return allIcons[idx % allIcons.length];
};
