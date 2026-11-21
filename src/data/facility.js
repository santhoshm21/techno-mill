export const facilityData = {
  header: 'INFRASTRUCTURE',
  tagline: 'Precision Manufacturing & Quality Metrology Hub',
  
  // Real Manufacturing Facility Highlights from Input Image 1
  highlights: [
    { title: 'Spread over 2000 SFT area', desc: 'Dedicated temperature-stabilized CNC tool grinding and inspection bays.', icon: 'Building2' },
    { title: 'In-house design & Development', desc: 'Full 3D CAD/CAM tool modeling, customized profile and step geometry formulation.', icon: 'Compass' },
    { title: 'Fully automatic Machines', desc: 'High-precision multi-axis CNC grinding centers with automated wheel dressing.', icon: 'Cpu' },
    { title: 'Well equipped product testing facility', desc: 'Comprehensive optical presetting, dimensional coordinate and surface roughness analysis.', icon: 'ShieldCheck' },
    { title: 'Trained manpower', desc: 'Skilled machinists and tool engineers dedicated to zero-defect cutting mechanics.', icon: 'Users' }
  ],

  // Real Machines from Input Image 1
  machines: [
    {
      id: 'saacke-cnc',
      name: 'SAACKE CNC-Grinding Center Model UW I F',
      category: 'CNC Grinding Center',
      image: '/images/facility/saacke-cnc.png',
      badge: 'High Precision Grinding',
      description: 'Ultra-precision German 5-axis CNC grinding center designed for complex solid carbide drills, stepped tools, and helical end mills.',
      specs: [
        '5-Axis simultaneous CNC interpolation',
        'Automatic wheel pack changer & dressing unit',
        'Direct drive glass scales for sub-micron accuracy',
        'Oil filtration and temperature chiller system'
      ]
    },
    {
      id: 'ecogrind-5axis',
      name: 'Ecogrind 5 Axis CNC Tool & Cutter Grinder',
      category: '5-Axis Tool & Cutter Grinder',
      image: '/images/facility/ecogrind-5axis.png',
      badge: '5-Axis Multi-Flute Grinding',
      description: 'Heavy-duty 5-axis tool and cutter grinder delivering exceptional stiffness and repeatable micron tolerances across standard and special geometries.',
      specs: [
        'Multi-axis kinematic grinding for high feed rates',
        'Capable of micro and large diameter solid carbide tooling',
        'High concentricity collet chucking & support steady rest',
        'Dedicated 3D simulation and collision prevention software'
      ]
    }
  ],

  // Real Quality Inspection Instruments from Input Image 1
  instruments: [
    {
      id: 'profile-projector',
      name: 'Horizontal Profile Projectors (300H/400H)',
      category: 'Optical Metrology',
      image: '/images/facility/profile-projector.png',
      badge: 'Optical Measurement',
      description: 'High-magnification non-contact optical comparator for inspecting complex tool contours, relief angles, helix pitch, and step transitions.',
      specs: 'Screen Size: 300mm / 400mm • Surface & Contour Illumination • Digital Readout (DRO)'
    },
    {
      id: 'illuminated-magnifier',
      name: 'Flexible Arm Illuminated Magnifier - Standard Model',
      category: 'Visual Inspection',
      image: '/images/facility/illuminated-magnifier.png',
      badge: 'Visual Edge Inspection',
      description: 'Precision distortion-free circular optical magnifier with shadowless LED illumination for rapid cutting edge and flute finish inspection.',
      specs: 'Distortion-Free Optical Lens • Multi-Axis Articulated Arm • 360° Shadowless Ring Light'
    },
    {
      id: 'digital-micrometer',
      name: 'Mitutoyo Digital Micrometer (IP65)',
      category: 'Precision Sizing',
      image: '/images/facility/digital-micrometer.png',
      badge: 'Micron Accuracy',
      description: 'Calibrated Mitutoyo IP65 water/oil-proof digital micrometers for measuring tool shank diameter and cutting diameters to single-micron tolerance.',
      specs: 'Resolution: 0.001mm (1µm) • Carbide Tipped Anvils • Ratchet Stop for Constant Force'
    },
    {
      id: 'digital-caliper',
      name: 'Mitutoyo 6"/150mm Digital Caliper',
      category: 'Dimensional Metrology',
      image: '/images/facility/digital-caliper.png',
      badge: 'Linear Verification',
      description: 'High-accuracy digital vernier caliper for measuring overall lengths (OAL), flute lengths (LOC), and step shoulder distances.',
      specs: 'Range: 0-150mm (6") • Resolution: 0.01mm • Absolute Electrostatic Capacitance Sensor'
    }
  ],

  // Real Credentials from Input Image 1
  credentials: [
    {
      number: '01',
      title: 'Experienced Technical Professionals',
      description: 'Experienced professionals with subject knowledge, process skill and strong desire to do creative work.',
      image: '/images/facility/cred-professionals.png'
    },
    {
      number: '02',
      title: 'Passion for Excellence',
      description: 'Passion for Excellence embedded across every grinding pass, wheel dressing, and tool geometry calculation.',
      image: '/images/facility/cred-excellence.png'
    },
    {
      number: '03',
      title: 'Innovative & Customized Solutions',
      description: 'Ability to provide innovative and customized solutions directly tailored to client workpiece blue-prints.',
      image: '/images/facility/cred-solutions.png'
    },
    {
      number: '04',
      title: 'Integral Quality Systems',
      description: 'Quality - An integral part of systems throughout existence from raw rod inspection to laser marking.',
      image: '/images/facility/cred-quality.png'
    },
    {
      number: '05',
      title: 'Member of Tools Association',
      description: 'Proud Member of Tools Association upholding national and international cutting tool manufacturing benchmarks.',
      image: '/images/facility/cred-association.png'
    }
  ],

  stats: [
    { label: 'Plant Area', value: '2000+ SFT' },
    { label: 'Automation Level', value: 'Fully Automatic' },
    { label: 'Measurement Accuracy', value: '0.001 mm' },
    { label: 'Industry Affiliation', value: 'Tools Association' }
  ]
};
