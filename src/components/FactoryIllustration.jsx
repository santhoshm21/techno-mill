import React from 'react';
import factoryBuildingImg from '../assets/images/tmt-factory-building.png';

export default function FactoryIllustration({ className = 'w-full h-full' }) {
  return (
    <img 
      src={factoryBuildingImg} 
      onError={(e) => {
        e.target.src = './images/company/tmt-factory-building.png';
      }}
      alt="Techno Mech Toolings Factory Facility and Headquarters" 
      className={`object-cover ${className}`}
    />
  );
}
