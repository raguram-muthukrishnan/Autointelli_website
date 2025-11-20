import React from 'react';

// SVG Icon Components - Brand Yellow Color (#F0CE1D)
const brandColor = "#F0CE1D";

// 1. Unified Discovery & Inventory: network nodes with magnifying glass
export const DiscoveryInventoryIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="4" stroke={color} strokeWidth="1.5"/>
    <path d="M18 18L12 12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="16" cy="5" r="2" stroke={color} strokeWidth="1.5"/>
    <circle cx="5" cy="16" r="2" stroke={color} strokeWidth="1.5"/>
    <path d="M14 6L11 8M7 14L9 11" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 2. Real-Time Health & Performance: heartbeat line with server
export const HealthPerformanceIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke={color} strokeWidth="1.5"/>
    <path d="M2 12H5L7 9L10 15L13 12H22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 18H17" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// 3. Topology & Dependency Mapping: interconnected hierarchical nodes
export const TopologyMappingIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="5" r="3" stroke={color} strokeWidth="1.5"/>
    <circle cx="6" cy="19" r="3" stroke={color} strokeWidth="1.5"/>
    <circle cx="18" cy="19" r="3" stroke={color} strokeWidth="1.5"/>
    <path d="M12 8V12M12 12L7 16M12 12L17 16" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 4. Intelligent Alerting & AIOps: AI brain with alert bell
export const IntelligentAlertingIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3Z" stroke={color} strokeWidth="1.5"/>
    <path d="M12 7V9" stroke={color} strokeWidth="1.5"/>
    <path d="M12 15V17" stroke={color} strokeWidth="1.5"/>
    <path d="M8 12H10" stroke={color} strokeWidth="1.5"/>
    <path d="M14 12H16" stroke={color} strokeWidth="1.5"/>
    <path d="M15 8L17 6" stroke={color} strokeWidth="1.5"/>
    <path d="M9 8L7 6" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 5. Incident Response & Alert Management: shield with lightning
export const IncidentResponseIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 6V12C4 17 7 20 12 22C17 20 20 17 20 12V6L12 2Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 8L10 12H14L11 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 6. Unified Alert Window: centralized bell window
export const UnifiedAlertWindowIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke={color} strokeWidth="1.5"/>
    <path d="M12 8C13.1 8 14 8.9 14 10V13H10V10C10 8.9 10.9 8 12 8Z" stroke={color} strokeWidth="1.5"/>
    <path d="M9 13H15" stroke={color} strokeWidth="1.5"/>
    <path d="M12 15V16" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 7. Event Aggregation & Noise Reduction: funnel merging alerts
export const EventAggregationIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20L12 14V20L12 22V14L4 4Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 4H20" stroke={color} strokeWidth="1.5"/>
    <circle cx="8" cy="8" r="1" fill={color}/>
    <circle cx="16" cy="8" r="1" fill={color}/>
    <circle cx="12" cy="10" r="1" fill={color}/>
  </svg>
);

// 8. Maintenance Window Filtration: calendar with filter
export const MaintenanceWindowIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="5" width="16" height="16" rx="2" stroke={color} strokeWidth="1.5"/>
    <path d="M16 3V7" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 3V7" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 11H20" stroke={color} strokeWidth="1.5"/>
    <path d="M10 14L12 16L14 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 9. Automated ITSM Ticketing: ticket with cog
export const ItsmTicketingIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19H15" stroke={color} strokeWidth="1.5"/>
    <path d="M15 5L19 9L15 13" stroke={color} strokeWidth="1.5"/>
    <circle cx="18" cy="16" r="3" stroke={color} strokeWidth="1.5"/>
    <path d="M18 16L20 18" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 10. Low-Code Workflow Builder: flowchart with drag blocks
export const WorkflowBuilderIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="6" height="6" rx="1" stroke={color} strokeWidth="1.5"/>
    <rect x="14" y="4" width="6" height="6" rx="1" stroke={color} strokeWidth="1.5"/>
    <rect x="9" y="14" width="6" height="6" rx="1" stroke={color} strokeWidth="1.5"/>
    <path d="M7 10V12H9" stroke={color} strokeWidth="1.5"/>
    <path d="M17 10V12H15" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 11. Event-Driven Automation: play icon with gears
export const EventDrivenIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 5L16 12L6 19V5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18" cy="16" r="3" stroke={color} strokeWidth="1.5"/>
    <path d="M18 16L20 18" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 12. Human-in-the-Loop: network with human and approval tick
export const HumanInLoopIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="3" stroke={color} strokeWidth="1.5"/>
    <path d="M6 18V16C6 14 8 13 12 13C16 13 18 14 18 16V18" stroke={color} strokeWidth="1.5"/>
    <path d="M16 18L18 20L22 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 13. Auto-Remediation Library: toolbox with wrench
export const AutoRemediationIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8H20V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V8Z" stroke={color} strokeWidth="1.5"/>
    <path d="M8 8V6C8 4.9 8.9 4 10 4H14C15.1 4 16 4.9 16 6V8" stroke={color} strokeWidth="1.5"/>
    <path d="M12 12L14 14" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 14. Browser-Based Access: browser window with key or unlock
export const BrowserAccessIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke={color} strokeWidth="1.5"/>
    <path d="M3 9H21" stroke={color} strokeWidth="1.5"/>
    <path d="M6 7H7" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 7H10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 14C12 12.9 12.9 12 14 12C15.1 12 16 12.9 16 14V15H12V14Z" stroke={color} strokeWidth="1.5"/>
    <rect x="11" y="15" width="6" height="4" rx="1" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 15. Zero Trust Security: lock with shield and check
export const ZeroTrustIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 6V12C4 17 7 20 12 22C17 20 20 17 20 12V6L12 2Z" stroke={color} strokeWidth="1.5"/>
    <rect x="10" y="10" width="4" height="5" rx="1" stroke={color} strokeWidth="1.5"/>
    <path d="M11 10V9C11 8.4 11.4 8 12 8C12.6 8 13 8.4 13 9V10" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 16. Multi-Platform Compatibility: laptop, desktop, mobile
export const MultiPlatformIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="10" height="8" rx="1" stroke={color} strokeWidth="1.5"/>
    <rect x="14" y="8" width="8" height="10" rx="1" stroke={color} strokeWidth="1.5"/>
    <rect x="4" y="14" width="6" height="8" rx="1" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 17. Monitoring & Analytics: clock with analytics chart
export const MonitoringAnalyticsIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5"/>
    <path d="M12 7V12L15 15" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 16L19 13" stroke={color} strokeWidth="1.5"/>
    <path d="M16 13V16" stroke={color} strokeWidth="1.5"/>
    <path d="M19 13V16" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 18. Agent-Based Automation: robot head with circuit or gear
export const AgentAutomationIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="12" height="10" rx="2" stroke={color} strokeWidth="1.5"/>
    <path d="M9 10H10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 10H15" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 13H14" stroke={color} strokeWidth="1.5"/>
    <path d="M12 6V3" stroke={color} strokeWidth="1.5"/>
    <circle cx="12" cy="3" r="1" fill={color}/>
  </svg>
);

// 19. Instant IT Support: chat bubble with headset
export const InstantSupportIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 11.5C21 16.19 16.97 20 12 20C10.8 20 9.66 19.78 8.6 19.38L4 21L5.2 16.8C3.2 15.4 2 13.56 2 11.5C2 6.81 6.48 3 12 3C17.52 3 21 6.81 21 11.5Z" stroke={color} strokeWidth="1.5"/>
    <path d="M8 11H16" stroke={color} strokeWidth="1.5"/>
    <path d="M12 9V13" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 20. Document Querying: magnifying glass with papers
export const DocumentQueryingIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2H14L18 6V20C18 21.1 17.1 22 16 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2Z" stroke={color} strokeWidth="1.5"/>
    <circle cx="14" cy="14" r="4" stroke={color} strokeWidth="1.5" fill="white"/>
    <path d="M17 17L19 19" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// 21. Multi-Channel Access: chat, email, phone
export const MultiChannelAccessIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="12" rx="2" stroke={color} strokeWidth="1.5"/>
    <path d="M3 8L12 13L21 8" stroke={color} strokeWidth="1.5"/>
    <path d="M7 18H17" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 16V18" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 22. Multi-Channel Ticketing: ticket stack with channel icons
export const MultiChannelTicketingIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H20V10C20 11.1 19.1 12 18 12H6C4.9 12 4 11.1 4 10V6Z" stroke={color} strokeWidth="1.5"/>
    <path d="M4 14H20V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V14Z" stroke={color} strokeWidth="1.5"/>
    <circle cx="12" cy="9" r="1" fill={color}/>
    <circle cx="12" cy="17" r="1" fill={color}/>
  </svg>
);

// 23. AI-Powered Automation: robotic arm with automation arrows
export const AiPoweredAutomationIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20H8L12 12L16 12" stroke={color} strokeWidth="1.5"/>
    <circle cx="18" cy="12" r="2" stroke={color} strokeWidth="1.5"/>
    <path d="M18 10V8" stroke={color} strokeWidth="1.5"/>
    <path d="M16 6H20" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 24. Knowledge Base & Self-Service: open book with lightbulb
export const KnowledgeBaseIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19.5C4 18.12 5.12 17 6.5 17H20" stroke={color} strokeWidth="1.5"/>
    <path d="M6.5 2H20V22H6.5C5.12 22 4 20.88 4 19.5V4.5C4 3.12 5.12 2 6.5 2Z" stroke={color} strokeWidth="1.5"/>
    <path d="M12 6V10" stroke={color} strokeWidth="1.5"/>
    <circle cx="12" cy="8" r="2" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 25. Collaboration & Reporting: handshake with report chart
export const CollaborationReportingIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="4" width="10" height="12" rx="1" stroke={color} strokeWidth="1.5"/>
    <path d="M2 14H8" stroke={color} strokeWidth="1.5"/>
    <path d="M2 18H8" stroke={color} strokeWidth="1.5"/>
    <path d="M14 8V12" stroke={color} strokeWidth="1.5"/>
    <path d="M18 6V12" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 26. Asset Tracking: barcode scanner with assets
export const AssetTrackingIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H20" stroke={color} strokeWidth="1.5"/>
    <path d="M4 10H20" stroke={color} strokeWidth="1.5"/>
    <path d="M4 14H20" stroke={color} strokeWidth="1.5"/>
    <path d="M4 18H20" stroke={color} strokeWidth="1.5"/>
    <rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 27. Barcode & QR Code Integration: QR code with barcode
export const BarcodeQrIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="6" height="6" rx="1" stroke={color} strokeWidth="1.5"/>
    <rect x="14" y="4" width="6" height="6" rx="1" stroke={color} strokeWidth="1.5"/>
    <rect x="4" y="14" width="6" height="6" rx="1" stroke={color} strokeWidth="1.5"/>
    <path d="M14 14H16" stroke={color} strokeWidth="1.5"/>
    <path d="M18 14H20" stroke={color} strokeWidth="1.5"/>
    <path d="M14 18H16" stroke={color} strokeWidth="1.5"/>
    <path d="M18 18H20" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// 28. Software License Management: license document with checkmark
export const LicenseManagementIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2H14L18 6V20C18 21.1 17.1 22 16 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2Z" stroke={color} strokeWidth="1.5"/>
    <path d="M9 14L11 16L15 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 29. Asset Assignment System: tag with asset
export const AssetAssignmentIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L20 10L12 18L4 10L12 2Z" stroke={color} strokeWidth="1.5"/>
    <circle cx="12" cy="6" r="1.5" fill={color}/>
    <path d="M12 12V14" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// Extra icons for fallbacks
export const ComplianceIcon = ({ size = 40, color = brandColor }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 6V12C4 17 7 20 12 22C17 20 20 17 20 12V6L12 2Z" stroke={color} strokeWidth="1.5"/>
    <path d="M9 12L11 14L15 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icon selector function
export const getFeatureIcon = (title, description, idx, resetTracker = false, sectionKey = 'default') => {
  const normalizedTitle = title.toLowerCase();
  
  // Direct mapping based on title
  if (normalizedTitle.includes('discovery') && normalizedTitle.includes('inventory')) return <DiscoveryInventoryIcon />;
  if (normalizedTitle.includes('health') && normalizedTitle.includes('performance')) return <HealthPerformanceIcon />;
  if (normalizedTitle.includes('topology') && normalizedTitle.includes('mapping')) return <TopologyMappingIcon />;
  if (normalizedTitle.includes('alerting') && normalizedTitle.includes('aiops')) return <IntelligentAlertingIcon />;
  if (normalizedTitle.includes('incident') && normalizedTitle.includes('response')) return <IncidentResponseIcon />;
  if (normalizedTitle.includes('unified') && normalizedTitle.includes('alert')) return <UnifiedAlertWindowIcon />;
  if (normalizedTitle.includes('aggregation') && normalizedTitle.includes('noise')) return <EventAggregationIcon />;
  if (normalizedTitle.includes('maintenance') && normalizedTitle.includes('window')) return <MaintenanceWindowIcon />;
  if (normalizedTitle.includes('itsm') && normalizedTitle.includes('ticketing')) return <ItsmTicketingIcon />;
  if (normalizedTitle.includes('workflow') && normalizedTitle.includes('builder')) return <WorkflowBuilderIcon />;
  if (normalizedTitle.includes('event-driven') && normalizedTitle.includes('automation')) return <EventDrivenIcon />;
  if (normalizedTitle.includes('human') && normalizedTitle.includes('loop')) return <HumanInLoopIcon />;
  if (normalizedTitle.includes('auto-remediation') && normalizedTitle.includes('library')) return <AutoRemediationIcon />;
  if (normalizedTitle.includes('browser') && normalizedTitle.includes('access')) return <BrowserAccessIcon />;
  if (normalizedTitle.includes('zero') && normalizedTitle.includes('trust')) return <ZeroTrustIcon />;
  if (normalizedTitle.includes('multi-platform') && normalizedTitle.includes('compatibility')) return <MultiPlatformIcon />;
  if (normalizedTitle.includes('monitoring') && normalizedTitle.includes('analytics')) return <MonitoringAnalyticsIcon />;
  if (normalizedTitle.includes('agent') && normalizedTitle.includes('automation')) return <AgentAutomationIcon />;
  if (normalizedTitle.includes('instant') && normalizedTitle.includes('support')) return <InstantSupportIcon />;
  if (normalizedTitle.includes('document') && normalizedTitle.includes('querying')) return <DocumentQueryingIcon />;
  if (normalizedTitle.includes('multi-channel') && normalizedTitle.includes('access')) return <MultiChannelAccessIcon />;
  if (normalizedTitle.includes('multi-channel') && normalizedTitle.includes('ticketing')) return <MultiChannelTicketingIcon />;
  if (normalizedTitle.includes('ai-powered') && normalizedTitle.includes('automation')) return <AiPoweredAutomationIcon />;
  if (normalizedTitle.includes('knowledge') && normalizedTitle.includes('base')) return <KnowledgeBaseIcon />;
  if (normalizedTitle.includes('collaboration') && normalizedTitle.includes('reporting')) return <CollaborationReportingIcon />;
  if (normalizedTitle.includes('asset') && normalizedTitle.includes('tracking')) return <AssetTrackingIcon />;
  if (normalizedTitle.includes('barcode') && normalizedTitle.includes('qr')) return <BarcodeQrIcon />;
  if (normalizedTitle.includes('license') && normalizedTitle.includes('management')) return <LicenseManagementIcon />;
  if (normalizedTitle.includes('asset') && normalizedTitle.includes('assignment')) return <AssetAssignmentIcon />;

  // Fallback for other titles not explicitly in the list but present in data
  if (normalizedTitle.includes('change') && normalizedTitle.includes('awareness')) return <ComplianceIcon />;
  if (normalizedTitle.includes('runbook')) return <AutoRemediationIcon />;
  if (normalizedTitle.includes('compliance')) return <ComplianceIcon />;
  if (normalizedTitle.includes('self-service')) return <KnowledgeBaseIcon />;
  if (normalizedTitle.includes('recording')) return <MonitoringAnalyticsIcon />;
  if (normalizedTitle.includes('mobile')) return <MultiPlatformIcon />;
  if (normalizedTitle.includes('scalable')) return <WorkflowBuilderIcon />;
  if (normalizedTitle.includes('customizable')) return <WorkflowBuilderIcon />;
  if (normalizedTitle.includes('multi-tenancy')) return <MultiPlatformIcon />;
  if (normalizedTitle.includes('reporting')) return <CollaborationReportingIcon />;
  if (normalizedTitle.includes('email')) return <MultiChannelAccessIcon />;

  // Default fallback
  return <DiscoveryInventoryIcon />;
};
