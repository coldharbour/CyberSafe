import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ onSelect, onVisibilityChange }) => {
  const items = [
    'Linux',
    'PhysicalSecurity',
    'VulnerabilityAssessment',
    'ThreatIntelligence',
    'SocialEngineering',
    'SOCAnalyst',
    'SecurityOperations',
    'SecurityGovernanceAndPolicy',
    'SecurityAwarenessTraining',
    'SecurityArchitectureAndEngineering',
    'RiskManagement',
    'PenetrationTesting',
    'MobileSecurity',
    'KaliLinuxTools',
    'IoTSecurity',
    'IncidentResponse',
    'GovernanceRiskManagementCompliance',
    'DisasterRecovery',
    'ComputerNetworking',
    'Cryptography',
    'ComplianceAndRegulations',
    'CloudSecurity',
    'CIATriad',
    'ApplicationSecurity',
  ];
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleItemClick = (value) => {
    onSelect(value);
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    const newVisibility = !dropdownVisible;
    setDropdownVisible(newVisibility);
    onVisibilityChange(newVisibility);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        Click to open dropdown
      </button>
      {dropdownVisible && (
        <div className="dropdown-content">
          {items.map((value) => (
            <button key={value} onClick={() => handleItemClick(value)}>
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;