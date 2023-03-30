import React, { useState } from 'react';
import './App.css';
import CarouselItem from './components/CarouselItem';
import ApplicationSecurity from './topics/ApplicationSecurity';
import CIATriad from './topics/CIATriad'
import CloudSecurity from './topics/CloudSecurity';
import ComplianceAndRegulations from './topics/ComplianceAndRegulations';
import Cryptography from './topics/Cryptography';
import ComputerNetworking from './topics/ComputerNetworking';
import DisasterRecovery from './topics/DisasterRecovery';
import GovernanceRiskManagementCompliance from './topics/GovernanceRiskManagementCompliance';
import IncidentResponse from './topics/IncidentResponse';
import IoTSecurity from './topics/IoTSecurity';
import KaliLinuxTools from './topics/KaliLinuxTools';
import MobileSecurity from './topics/MobileSecurity';
import PenetrationTesting from './topics/PenetrationTesting';
import RiskManagement from './topics/RiskManagement';
import SecurityArchitectureAndEngineering from './topics/SecurityArchitectureAndEngineering';
import SecurityAwarenessTraining from './topics/SecurityAwarenessTraining';
import SecurityGovernanceAndPolicy from './topics/SecurityGovernanceAndPolicy';
import SecurityOperations from './topics/SecurityOperations';
import SOCAnalyst from './topics/SOCAnalyst';
import SocialEngineering from './topics/SocialEngineering';
import ThreatIntelligence from './topics/ThreatIntelligence';
import VulnerabilityAssessment from './topics/VulnerabilityAssessment';
import Dropdown from './components/Dropdown';
import Linux from './topics/Linux';
import PhysicalSecurity from './topics/PhysicalSecurity'

const items = CIATriad;
const dataMap = {
  Linux,
  PhysicalSecurity,
  VulnerabilityAssessment,
  ThreatIntelligence,
  SocialEngineering,
  SOCAnalyst,
  SecurityOperations,
  SecurityGovernanceAndPolicy,
  SecurityAwarenessTraining,
  SecurityArchitectureAndEngineering,
  RiskManagement,
  PenetrationTesting,
  MobileSecurity,
  KaliLinuxTools,
  IoTSecurity,
  IncidentResponse,
  GovernanceRiskManagementCompliance,
  DisasterRecovery,
  ComputerNetworking,
  Cryptography,
  ComplianceAndRegulations,
  CloudSecurity,
  CIATriad,
  ApplicationSecurity,
};

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [item, setItem] = useState(ApplicationSecurity);
  const [selectedItemName, setSelectedItemName] = useState('Application Security');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleSelect = (value) => {
    setItem(dataMap[value]);
    setSelectedItemName(value);
    setIsDropdownVisible(false); // Hide dropdown after selecting an item
  };

  const handleItemClick = (distance) => {
    const newIndex = currentIndex + distance;
    if (newIndex >= 0 && newIndex < items.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="app">
      <div className="app-heading">CyberReady</div>
      <div className="app-sub-heading">{selectedItemName}</div>
      <Dropdown
        onSelect={handleSelect}
        onVisibilityChange={setIsDropdownVisible}
      />
      <div className={`carousel${isDropdownVisible ? ' hide-content' : ''}`}>
        {item.map((item, index) => (
          <CarouselItem
            key={index}
            item={item}
            visible={index === currentIndex}
            distance={index - currentIndex}
            onClick={handleItemClick}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
