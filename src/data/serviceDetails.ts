export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ServiceMethod {
  name: string;
  description: string;
  bestFor: string;
}

export interface CaseStudy {
  city: string;
  locationSlug: string;
  neighborhoodOrArea: string;
  propertyType?: string;
  problem: string;
  technicianDiagnosis: string;
  solutionAndEquipment: string;
  outcome: string;
}

export interface ServiceTestimonial {
  name: string;
  city: string;
  service: string;
  quote: string;
  rating: number;
}

export interface DiagnosticComparisonRow {
  aspect: string;
  cleaningOrOptionA: string;
  repairOrOptionB: string;
}

export interface DiagnosticComparison {
  title: string;
  subtitle: string;
  optionAName: string;
  optionBName: string;
  rows: DiagnosticComparisonRow[];
  recommendation: string;
}

export interface CameraInspectionGuidance {
  whenRecommended: string[];
  whatItIdentifies: string[];
  howItGuidesDecision: string;
}

export interface PipeConditionWarning {
  title: string;
  warningText: string;
  safePipeTypes: string[];
  cautionPipeTypes: string[];
}

export interface KeywordStrategy {
  primaryKeywordPattern: string;
  searchIntent: string;
  distinctScope: string;
  descriptiveAnchorText: string;
  secondaryKeywords: string[];
}

export interface ServiceDetail {
  slug: string;
  categoryIntent: string;
  processSteps: ProcessStep[];
  methods: ServiceMethod[];
  limitations: string[];
  cameraInspectionGuidance?: CameraInspectionGuidance;
  pipeConditionWarning?: PipeConditionWarning;
  diagnosticComparison?: DiagnosticComparison;
  caseStudies: CaseStudy[];
  serviceTestimonials: ServiceTestimonial[];
  serviceFaqs: { question: string; answer: string }[];
  keywordStrategy?: KeywordStrategy;
}

export const serviceKeywordStrategies: Record<string, KeywordStrategy> = {
  'drain-cleaning': {
    primaryKeywordPattern: 'drain cleaning {city} ID',
    searchIntent: 'Broad / Routine Drain Clearing: Sinks, showers, tubs, and branch lines.',
    distinctScope: 'General routine drain snaking for isolated single-fixture clogs. Compares to Clogged Drain Repair which addresses stubborn foreign objects.',
    descriptiveAnchorText: 'Mechanical Drain Cleaning in {city}',
    secondaryKeywords: ['unclog drain {city}', 'slow sink clearing {city}', 'plumber snake {city}', 'drain clearing service {city}'],
  },
  'clogged-drain-repair': {
    primaryKeywordPattern: 'clogged drain repair {city}',
    searchIntent: 'Stubborn Blockage Diagnosis & Foreign Object Resolution',
    distinctScope: 'Diagnosing and repairing stubborn, recurring clogs resisting basic plunging, including trap disassembly and object retrieval.',
    descriptiveAnchorText: 'Stubborn Clogged Drain Repair in {city}',
    secondaryKeywords: ['fix clogged drain {city}', 'drain stoppage repair {city}', 'retrieving object from drain {city}'],
  },
  'main-drain-cleaning': {
    primaryKeywordPattern: 'main drain cleaning {city}',
    searchIntent: 'Whole-House Building Drain Backup Emergency',
    distinctScope: 'Clearing the central 3" to 4" building collector pipe inside the foundation before wastewater exits the building.',
    descriptiveAnchorText: 'Whole-House Main Drain Cleaning in {city}',
    secondaryKeywords: ['main line backing up {city}', 'toilet bubbling bathtub {city}', 'central waste drain clearing {city}'],
  },
  'sewer-line-cleaning': {
    primaryKeywordPattern: 'sewer line cleaning {city}',
    searchIntent: 'Underground Sewer Lateral Obstruction Removal',
    distinctScope: 'Clearing tree roots, wet wipes, and waste obstructions from the exterior underground sewer lateral in structurally intact pipe.',
    descriptiveAnchorText: 'Underground Sewer Line Cleaning in {city}',
    secondaryKeywords: ['clear roots from sewer line {city}', 'sewer lateral augering {city}', 'sewer line blockage removal {city}'],
  },
  'sewer-line-repair': {
    primaryKeywordPattern: 'sewer line repair {city} ID',
    searchIntent: 'Structural Pipe Damage & Failure Restoration',
    distinctScope: 'Physical structural repair, spot excavation, or pipe relining for broken, cracked, or collapsed sewer pipes.',
    descriptiveAnchorText: 'Structural Sewer Line Repair in {city}',
    secondaryKeywords: ['fix collapsed sewer line {city}', 'trenchless sewer repair {city}', 'broken sewer pipe replacement {city}'],
  },
  'hydro-jetting': {
    primaryKeywordPattern: 'hydro jetting {city} ID',
    searchIntent: 'Specific High-Pressure Scouring Method (3,000–4,000 PSI)',
    distinctScope: 'Commercial-grade high-pressure water scouring to remove 100% of grease, mineral scale, and root hairs across full pipe bore.',
    descriptiveAnchorText: 'High-Pressure Hydro Jetting in {city}',
    secondaryKeywords: ['water jetting pipes {city}', 'hydro jet sewer cleaning {city}', 'commercial grease pipe scouring {city}'],
  },
  'drain-camera-inspection': {
    primaryKeywordPattern: 'drain camera inspection {city}',
    searchIntent: 'Diagnostic In-Pipe Video Scoping & Sonde Locating',
    distinctScope: 'Visual video inspection with 512 Hz radio sonde depth locating to pinpoint pipe problems without exploratory digging.',
    descriptiveAnchorText: 'In-Pipe Drain Camera Inspection in {city}',
    secondaryKeywords: ['sewer scope inspection {city}', 'video pipe inspection {city}', 'homebuyer sewer line scope {city}'],
  },
  'kitchen-drain-cleaning': {
    primaryKeywordPattern: 'kitchen drain cleaning {city}',
    searchIntent: 'Kitchen Sink, Disposal & Grease Stoppage',
    distinctScope: 'Clearing Fats, Oils, and Grease (FOG), garbage disposal jams, and dishwasher tie-ins under the kitchen sink.',
    descriptiveAnchorText: 'Kitchen Sink & Disposal Drain Cleaning in {city}',
    secondaryKeywords: ['clogged kitchen sink {city}', 'garbage disposal backing up {city}', 'kitchen grease pipe clearing {city}'],
  },
  'bathroom-drain-cleaning': {
    primaryKeywordPattern: 'bathroom drain cleaning {city}',
    searchIntent: 'Bathroom Shower, Tub & Sink Hair/Soap Stoppage',
    distinctScope: 'Clearing hair mats and soap scum from 1.5" to 2" bathroom traps and shower pans without damaging fixtures.',
    descriptiveAnchorText: 'Bathroom Shower & Sink Drain Cleaning in {city}',
    secondaryKeywords: ['clogged shower drain {city}', 'hair clog removal {city}', 'bathroom sink slow draining {city}'],
  },
  'floor-drain-cleaning': {
    primaryKeywordPattern: 'floor drain cleaning {city}',
    searchIntent: 'Basement, Garage & Utility Flood Prevention',
    distinctScope: 'Clearing basement, laundry, and garage floor drains of silt, lint, and dried trap seals to stop sewer gas and flooding.',
    descriptiveAnchorText: 'Basement & Garage Floor Drain Cleaning in {city}',
    secondaryKeywords: ['basement floor drain backing up {city}', 'sewer gas smell from floor drain {city}', 'utility floor drain clearing {city}'],
  },
};

export const serviceDetails: Record<string, ServiceDetail> = {
  'drain-cleaning': {
    slug: 'drain-cleaning',
    categoryIntent:
      'General drain clearing across sinks, showers, tubs, and branch lines to eliminate sluggish flow and stop recurring backups before they damage property.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Initial Intake & Fixture Assessment',
        description:
          'When you call 208-860-1639, you speak directly with a technician. We review which fixtures are sluggish, check if multiple drains are affected, and locate the nearest cleanout or trap access point.',
      },
      {
        stepNumber: '02',
        title: 'Work Area Protection & Access',
        description:
          'We lay protective drop cloths and inspect the trap assembly. We access the drain line through cleanouts or trap disconnects without forcing chemicals down delicate pipe threads.',
      },
      {
        stepNumber: '03',
        title: 'Mechanical Cable Clearing',
        description:
          'Using sized commercial-grade continuous-feed cables and specialized cutter heads, we navigate the bends to grab, retrieve, or pulverize the blockage safely without scratching modern plastic or cracking vintage cast iron.',
      },
      {
        stepNumber: '04',
        title: 'Full-Flow Testing & Inspection Recommendation',
        description:
          'We flush the line with sustained high-volume hot water to ensure complete restored flow. If we detect root resistance or structural pipe friction, we discuss whether an in-line camera inspection is warranted.',
      },
    ],
    methods: [
      {
        name: 'Continuous-Feed Drum Snake',
        description:
          'Heavy-duty electric cable machine that rotates through traps and branch pipes to bore through hair, soap scale, and soft food obstructions.',
        bestFor: 'Individual sink, shower, and tub branch lines (1.5" to 2" pipes).',
      },
      {
        name: 'Drop-Head & Bulb Augers',
        description:
          'Specialized navigational heads that guide the steel cable through tight elbows, sanitary tees, and older drum traps without getting stuck.',
        bestFor: 'Older homes with tight bends and challenging pipe angles.',
      },
      {
        name: 'High-Volume Water Flush Verification',
        description:
          'Flushing the cleared drain with hot water under normal fixture load for several minutes to verify that all loosened debris washes through to the main municipal lateral.',
        bestFor: 'Every completed drain service call.',
      },
    ],
    limitations: [
      'Mechanical snaking punches a 2–3 inch opening through a blockage; it does not scrub 100% of greasy pipe walls like hydro jetting.',
      'If pipes have collapsed, sheared joints, or heavy root infiltration, mechanical cleaning provides temporary relief until structural repairs are made.',
      'Chemical drain cleaners cannot clear total blockages and often generate corrosive heat that damages PVC glue and accelerates cast iron corrosion.',
    ],
    cameraInspectionGuidance: {
      whenRecommended: [
        'Drains clog again within 30 to 60 days of mechanical cleaning',
        'Multiple fixtures across different rooms slow down simultaneously',
        'Homes built before 1975 with original cast iron or clay pipes',
        'Technician encounters dense resistance consistent with tree roots or pipe shifting',
      ],
      whatItIdentifies: [
        'Tree root intrusion points',
        'Pipe bellies holding standing water and grease',
        'Cracks, fractures, and separated joints',
        'Heavy rust scale (tuberculation) in cast iron',
      ],
      howItGuidesDecision:
        'A camera inspection pinpoints the exact foot mark and depth of the trouble spot. Instead of guessing, you see live video footage showing whether a simple hydro jetting scour or a localized spot repair is required.',
    },
    caseStudies: [
      {
        city: 'Boise',
        locationSlug: 'boise-id',
        neighborhoodOrArea: 'North End',
        propertyType: '1948 Craftsman Bungalow',
        problem: 'Bathroom sink and shower draining very slowly with gurgling sounds whenever the toilet flushed.',
        technicianDiagnosis:
          'Hair and soap residue had bound tightly to rough rust ridges inside the original 2-inch cast iron drain line.',
        solutionAndEquipment:
          'Used an electric continuous-feed drum machine with a drop-head cutter to break through the soap-and-hair plug. Flushed with sustained hot water and performed a camera verification to inspect the cast iron pipe walls.',
        outcome:
          'Restored 100% gravity flow with zero chemical use; homeowner was shown the clean line on video and advised on basic hair-strainer maintenance.',
      },
      {
        city: 'Meridian',
        locationSlug: 'meridian-id',
        neighborhoodOrArea: 'North Meridian',
        propertyType: '2008 Two-Story Suburban Home',
        problem: 'Upstairs master bath shower standing in two inches of soapy water during every morning shower.',
        technicianDiagnosis:
          'Deep hair tangle combined with hardened conditioner and bath product buildup in the 2-inch ABS P-trap beneath the floor.',
        solutionAndEquipment:
          'Removed the pop-up drain assembly, deployed a compact electric hand-auger with an expanding bulb head, extracted the fibrous hair plug intact, and re-tested flow.',
        outcome: 'Immediate rapid drainage with no fixture disassembly required.',
      },
      {
        city: 'Eagle',
        locationSlug: 'eagle-id',
        neighborhoodOrArea: 'Eagle Foothills',
        propertyType: 'Custom Ranch on 1-Acre Lot',
        problem: 'Laundry room utility sink overflowing whenever the high-efficiency washing machine pumped out water.',
        technicianDiagnosis:
          'Lint and soap scum restriction 12 feet down the 2-inch line where the laundry branch tied into the horizontal trunk.',
        solutionAndEquipment:
          'Ran a 3/8-inch sectional cable with a grease-cutting blade through the cleanout, clearing the fibrous lint dam completely.',
        outcome: 'Full pump-out cycle handled without backing up; recommended an inline lint trap filter.',
      },
    ],
    serviceTestimonials: [
      {
        name: 'Robert M.',
        city: 'Boise (North End)',
        service: 'Drain Cleaning',
        quote:
          'We had a stubborn shower drain that two bottles of store cleaner could not touch. Boise Drain Service arrived on time, was exceptionally respectful of our home, and cleared the line in under 45 minutes. Direct, honest pricing with zero pressure.',
        rating: 5,
      },
      {
        name: 'Jessica W.',
        city: 'Meridian',
        service: 'Drain Cleaning',
        quote:
          'Spoke right to the tech when I called. He diagnosed our recurring kitchen drain issue over the phone, showed up with the right gear, and had water flowing like new. Truly reliable service.',
        rating: 5,
      },
    ],
    serviceFaqs: [
      {
        question: 'Why do my drains keep slowing down even after I use a chemical cleaner?',
        answer:
          'Liquid chemical cleaners are heavy and usually sink down, burning a tiny pencil-sized hole through the center of a clog before washing away. The remaining 90% of the grease and hair stays glued to the pipe walls, causing the clog to reform quickly. Furthermore, caustic chemicals generate intense heat that can warp PVC fittings and eat through aging cast iron.',
      },
      {
        question: 'What is the difference between simple snaking and a camera inspection?',
        answer:
          'Snaking uses a rotating steel cable to physically punch through or extract obstructions to restore flow. A camera inspection sends a high-definition waterproof lens down the pipe so you and the technician can visually see the interior condition of the pipe, identifying cracks, roots, or sagging sections.',
      },
      {
        question: 'How do you protect my home while clearing indoor drains?',
        answer:
          'We treat your home with care. We use clean drop cloths around all work zones, wear protective shoe covers, operate machines with enclosed cable drums to prevent grease splattering, and wipe down all work areas after testing.',
      },
      {
        question: 'When should I call for a professional drain cleaning instead of plunging?',
        answer:
          'If a light plunger plunge does not restore flow after 2–3 attempts, or if water bubbles up into a nearby fixture when you plunge, stop immediately. Continuing to plunge can force seals loose or blow dirty water out of vent stacks. Call us at 208-860-1639 for a safe assessment.',
      },
    ],
  },

  'drain-camera-inspection': {
    slug: 'drain-camera-inspection',
    categoryIntent:
      'High-definition video pipe diagnostics that eliminate guesswork by revealing real-time underground pipe conditions, root intrusions, bellies, and structural breaks.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Cleanout Access & System Preparation',
        description:
          'We locate the primary sewer cleanout—typically outside in the yard, in a basement crawlspace, or behind a utility room wall. We clear standing water if necessary to ensure clear camera visibility.',
      },
      {
        stepNumber: '02',
        title: 'HD Color Camera Insertion & Navigation',
        description:
          'We insert a waterproof, high-resolution self-leveling optical camera attached to a rigid push-rod cable, advancing it through the entire lateral line out toward the municipal city main or septic tank.',
      },
      {
        stepNumber: '03',
        title: 'Live Monitor Review with the Homeowner',
        description:
          'You watch the live video feed alongside the technician. We inspect every joint, measuring distance footage in real time to identify root penetration, grease rings, pipe sags (bellies), cracks, or misaligned collars.',
      },
      {
        stepNumber: '04',
        title: 'Precision Radio Sonde Depth Locating',
        description:
          'When an anomaly or break is detected, the camera’s built-in 512 Hz sonde transmitter sends a signal to our handheld receiver above ground. We mark the exact surface spot and depth (in feet and inches), so you know precisely where the issue is without unnecessary digging.',
      },
    ],
    methods: [
      {
        name: 'Self-Leveling HD Video Camera',
        description:
          'Maintains an upright optical orientation at all times with bright adjustable LED lighting, allowing crisp inspection of pipe crowns, inverts, and side walls.',
        bestFor: 'Inspecting 3-inch to 6-inch residential and commercial sewer laterals.',
      },
      {
        name: 'Digital Footage Counter',
        description:
          'An on-screen digital odometer tracking the exact distance in feet from the cleanout to any blockage, belly, or structural crack.',
        bestFor: 'Mapping long sewer runs across front yards, driveways, and easements.',
      },
      {
        name: '512 Hz Sonde Radio Transmitter & Locator',
        description:
          'Emits an electromagnetic frequency through soil, concrete, or asphalt to allow pinpoint surface marking of underground trouble spots.',
        bestFor: 'Guiding spot repairs, trenchless access points, and avoiding utilities.',
      },
    ],
    limitations: [
      'A camera cannot see through pipes that are 100% full of opaque black water or thick sludge; the line must be mechanically opened or cleared first so the lens has visibility.',
      'Camera cables cannot navigate through 90-degree plumbing traps (like toilet bowls); access must be made through an approved cleanout or removed fixture.',
      'The inspection reveals visual condition only; it does not measure chemical wall degradation or underground soil compaction beneath the pipe.',
    ],
    cameraInspectionGuidance: {
      whenRecommended: [
        'Before purchasing a home in Boise, Meridian, Eagle, or surrounding cities (Sewer Scope)',
        'When drains back up repeatedly every few months',
        'Before spending money on high-pressure hydro jetting or trenchless pipe repairs',
        'Prior to pouring driveways, patios, or installing major landscaping over the sewer line path',
        'When you suspect an underground pipe collapse due to wet or sunken spots in the yard',
      ],
      whatItIdentifies: [
        'Tree root penetration through joint collars',
        'Pipe bellies (low spots holding standing water and waste)',
        'Offset or separated pipe joints from soil settling',
        'Cracks, fractures, holes, or collapsed pipe walls',
        'Cast iron corrosion, rust blistering, and missing pipe inverts',
        'Foreign objects (construction debris, toys, feminine products, flushable wipes)',
      ],
      howItGuidesDecision:
        'Video inspection removes all guesswork. If roots are found in sound pipe, simple root-cutting or hydro jetting is recommended. If a pipe is fractured or offset, you get exact depth and location marks to guide a targeted spot repair rather than replacing the entire yard lateral.',
    },
    caseStudies: [
      {
        city: 'Boise',
        locationSlug: 'boise-id',
        neighborhoodOrArea: 'Boise Bench',
        propertyType: '1962 Mid-Century Ranch',
        problem:
          'Prospective homebuyer requested a sewer line scope during their 10-day inspection contingency period.',
        technicianDiagnosis:
          'Camera revealed original vitrified clay tile lateral. At 44 feet from the foundation, heavy tree roots had completely invaded joint #4, and a 6-foot pipe belly was holding 2 inches of stagnant water under the driveway.',
        solutionAndEquipment:
          'Documented full video recording with on-screen footage and located the sonde at 5.5 feet depth directly under the driveway seam.',
        outcome:
          'Buyer used the documented video report and precise repair quote to negotiate a credit with the seller before closing, avoiding surprise emergency expenses.',
      },
      {
        city: 'Meridian',
        locationSlug: 'meridian-id',
        neighborhoodOrArea: 'South Meridian',
        propertyType: '2015 Two-Story Home',
        problem: 'Toilet gurgled and overflowed twice in two weeks despite being augered twice by a handyman.',
        technicianDiagnosis:
          'Camera inspection revealed modern SDR35 PVC pipe was completely intact, but a non-flushable toddler toy had lodged crosswise at the 45-degree transition outside the stem wall, snagging toilet paper.',
        solutionAndEquipment:
          'Pinpointed exact location at 18 feet. Retracted camera and deployed a mechanical retrieval auger to hook and extract the plastic toy without excavating.',
        outcome: 'Problem solved permanently without digging up the lawn; confirmed clear pipe with final camera run.',
      },
      {
        city: 'Eagle',
        locationSlug: 'eagle-id',
        neighborhoodOrArea: 'Downtown Eagle',
        propertyType: 'Historic Victorian Residence',
        problem: 'Foul sewer gas smell in crawlspace and slow drainage throughout the ground floor.',
        technicianDiagnosis:
          'Camera revealed the bottom invert of the 1930s cast iron pipe had corroded through, allowing wastewater to seep directly into the crawlspace soil.',
        solutionAndEquipment:
          'Located the exact 8-foot rotted run using the 512 Hz radio transmitter and marked the subfloor directly above.',
        outcome:
          'Homeowner received an exact roadmap for localized pipe replacement, saving thousands by avoiding exploratory demolition.',
      },
    ],
    serviceTestimonials: [
      {
        name: 'Tyler K.',
        city: 'Boise (Boise Bench)',
        service: 'Drain Camera Inspection',
        quote:
          'Had Boise Drain Service inspect our sewer line before buying our home on the Bench. The tech walked me through the live screen, showed me where roots were beginning to enter, and pinpointed the exact location in the yard. Best $ invested during home buying.',
        rating: 5,
      },
      {
        name: 'Karen D.',
        city: 'Eagle',
        service: 'Drain Camera Inspection',
        quote:
          'Our sewer backed up twice in 6 months. Other plumbers just snaked it and left. Boise Drain Service ran the camera, found a crushed PVC joint near the property line, and showed me the exact depth. Honest, thorough, and highly knowledgeable.',
        rating: 5,
      },
    ],
    serviceFaqs: [
      {
        question: 'How far into the pipe can your inspection camera reach?',
        answer:
          'Our inspection reels reach up to 150–200 feet, which easily covers the distance from a home’s cleanout to the municipal sewer main in the street or septic tank for virtually all Treasure Valley properties.',
      },
      {
        question: 'Do I get to see the video footage of my sewer line?',
        answer:
          'Yes. You can watch the high-definition color monitor live with the technician as the camera travels down the pipe. We explain what you are seeing in plain, straightforward terms—pointing out normal pipe characteristics versus damage.',
      },
      {
        question: 'Can the camera tell me how deep my sewer pipe is buried?',
        answer:
          'Yes. The camera head contains a built-in 512 Hz radio sonde transmitter. Our technician uses a digital receiver on the surface above ground to detect the signal, measuring both horizontal position and vertical depth down to the inch.',
      },
      {
        question: 'Will a camera inspection unclog my drain?',
        answer:
          'No. A camera is purely a diagnostic tool designed to view and locate pipe conditions. If your pipe is completely backed up with standing sewage, we typically run a mechanical cable first to clear the water so the camera lens has clear optical visibility.',
      },
    ],
  },

  'hydro-jetting': {
    slug: 'hydro-jetting',
    categoryIntent:
      'Commercial-grade, high-pressure water scouring (up to 4,000 PSI) that scrubs 100% of the pipe wall diameter, eliminating stubborn grease, hard mineral scale, and recurring tree root hair.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Mandatory Pre-Jetting Camera Assessment',
        description:
          'We NEVER run hydro-jetters blind. We first inspect the pipe with a camera or mechanical cable to verify pipe material and confirm there are no structural fractures, collapsed sections, or paper-thin rotted cast iron walls.',
      },
      {
        stepNumber: '02',
        title: 'Specialized Nozzle Selection',
        description:
          'Depending on the blockage, we mount the appropriate hardened steel nozzle: forward penetrator nozzles for thick grease dams, rotating spinner nozzles for scale removal, or root-cutting chain/flail nozzles.',
      },
      {
        stepNumber: '03',
        title: 'Controlled High-Pressure Scouring',
        description:
          'Feeding a flexible high-pressure hose through an exterior cleanout, water is pressurized up to 3,000–4,000 PSI. Rear propulsion jets pull the hose forward while scouring 360 degrees of the inner pipe wall, washing debris backward out of the line.',
      },
      {
        stepNumber: '04',
        title: 'Post-Jetting Camera Verification',
        description:
          'We re-insert the inspection camera to verify that 100% of the pipe circumference has been restored to clean, full-bore diameter, with zero remaining root hair or grease shelves.',
      },
    ],
    methods: [
      {
        name: '3,000–4,000 PSI High-Volume Jetter',
        description:
          'Commercial pump delivering 4 to 8 gallons per minute under regulated pressure, providing the physical hydraulic force necessary to shear hardened fats and mineral scale.',
        bestFor: 'Sewer laterals, commercial grease lines, and recurring root choke points.',
      },
      {
        name: 'Rotating Descaling & Scouring Nozzles',
        description:
          'High-speed spinning water jets that wash against the full 360-degree circumference of the pipe walls, polishing away build-up without gouging pipe surfaces.',
        bestFor: 'Heavy grease calcification, sludge layers, and cast iron descaling.',
      },
      {
        name: 'Reverse Propulsion Flushing Jets',
        description:
          'Multiple rearward-angled water orifices that propel the hose deep down the pipe while flushing all pulverized scale, grease, and debris out into the city main.',
        bestFor: 'Long pipe runs between 50 and 150 feet.',
      },
    ],
    limitations: [
      'Hydro jetting is NOT appropriate for every pipe. It must NOT be used on fragile, crumbling Orangeburg (tar paper) pipes, severely fractured clay lines, or paper-thin rusted cast iron.',
      'It cannot fix structural sags (bellies), separated joints, or broken pipes; it only restores the clean interior bore of structurally sound pipes.',
      'Cannot be safely performed through small indoor sink cleanouts due to high-pressure splashback risks; exterior or main cleanout access is standard.',
    ],
    pipeConditionWarning: {
      title: 'Crucial Pre-Jetting Pipe Condition Inspection',
      warningText:
        'Hydro jetting generates immense hydraulic force (3,000 to 4,000 PSI). In structurally sound PVC, ABS, and solid cast iron, it is the gold standard for pipe restoration. However, running a hydro jetter into cracked clay, fractured fittings, or deteriorated Orangeburg pipes can cause catastrophic pipe collapse. Boise Drain Service always assesses pipe integrity prior to high-pressure jetting.',
      safePipeTypes: ['Modern PVC (Schedule 40 & SDR35)', 'ABS Plastic', 'Sound Cast Iron', 'Intact Vitrified Clay'],
      cautionPipeTypes: [
        'Orangeburg / Bituminous Fiber pipe (strictly prohibited)',
        'Severely corroded cast iron with missing inverts',
        'Fractured or heavily offset clay joints',
      ],
    },
    diagnosticComparison: {
      title: 'Hydro Jetting vs. Conventional Mechanical Snaking',
      subtitle: 'Understanding the difference between opening a passage and completely restoring pipe diameter.',
      optionAName: 'Conventional Mechanical Snaking',
      optionBName: 'High-Pressure Hydro Jetting',
      rows: [
        {
          aspect: 'Action on Blockage',
          cleaningOrOptionA: 'Punches a 2–3 inch hole through the center of the clog to restore emergency flow',
          repairOrOptionB: 'Scours 100% of the full pipe circumference, washing away all clinging residues',
        },
        {
          aspect: 'Grease & Sludge Removal',
          cleaningOrOptionA: 'Cable passes through soft grease; grease slumps back and clogs again within weeks',
          repairOrOptionB: 'Liquefies and flushes grease, cooking oils, and soap buildup out of the pipe entirely',
        },
        {
          aspect: 'Tree Root Treatment',
          cleaningOrOptionA: 'Cuts a path through the root ball, leaving hairy roots clinging to joints to regrow',
          repairOrOptionB: 'Shears fine root hairs flush with the pipe wall, significantly delaying root regrowth',
        },
        {
          aspect: 'Pipe Wall Cleaning',
          cleaningOrOptionA: 'Does not clean pipe walls; leaves mineral scale and biofilm behind',
          repairOrOptionB: 'Restores original inside pipe diameter and smooth flow characteristics',
        },
        {
          aspect: 'Best Use Case',
          cleaningOrOptionA: 'Immediate emergency clearance for isolated blockages and smaller branch lines',
          repairOrOptionB: 'Long-term preventative maintenance, heavy grease, and stubborn recurring root lateral issues',
        },
      ],
      recommendation:
        'If you experience a sudden toilet or sink stoppage, mechanical snaking is the ideal first response. If your main line backs up every 6 to 12 months from grease, soap, or roots, hydro jetting is the permanent cleaning solution.',
    },
    caseStudies: [
      {
        city: 'Meridian',
        locationSlug: 'meridian-id',
        neighborhoodOrArea: 'North Meridian',
        propertyType: 'Busy Family Residence',
        problem:
          'Main sewer line backing up every 4 to 5 months. Multiple plumbers had snaked it, but the backup always returned.',
        technicianDiagnosis:
          'Camera inspection revealed that 12 years of cooking oils, dishwashing detergents, and hair had created a 1.5-inch hardened grease shelf along the bottom 40 feet of the 4-inch ABS lateral.',
        solutionAndEquipment:
          'Deployed commercial trailer-mounted hydro jetter at 3,500 PSI with a rotating scouring nozzle. Performed three controlled passes through the exterior yard cleanout.',
        outcome:
          'Scoured pipe back to 100% clean ABS plastic; verified on post-jet camera inspection. Zero backups over the past two years.',
      },
      {
        city: 'Boise',
        locationSlug: 'boise-id',
        neighborhoodOrArea: 'East End',
        propertyType: 'Commercial Cafe & Residential Flat',
        problem: 'Kitchen drain and grease trap discharge line draining at less than 20% normal capacity.',
        technicianDiagnosis:
          'Heavy animal fat and coffee sediment calcification completely choking the 3-inch horizontal waste line.',
        solutionAndEquipment:
          'Tied into exterior cleanout after hours with a penetrator nozzle to punch through the fat blockage, followed by a multi-jet spinner nozzle to descale walls.',
        outcome:
          'Full bore restored without pipe replacement or kitchen business downtime; established an annual preventative jetting schedule.',
      },
      {
        city: 'Garden City',
        locationSlug: 'garden-city-id',
        neighborhoodOrArea: 'Waterfront District',
        propertyType: 'Residential Duplex on Riverside Lot',
        problem: 'Shared lateral between duplex units backing up into ground floor shower basins.',
        technicianDiagnosis:
          'Fine willow root hair intrusion entering through clay joints near the Boise River greenbelt, creating a dense netting that caught toilet paper.',
        solutionAndEquipment:
          'Verified clay pipe structural soundness via camera, then ran root-shearing hydro-jet nozzle to cleanly trim root heads flush at the joint seams.',
        outcome:
          'Restored unobstructed flow; provided landlord with exact digital video recording of joint condition.',
      },
    ],
    serviceTestimonials: [
      {
        name: 'Greg S.',
        city: 'Meridian',
        service: 'Hydro Jetting',
        quote:
          'We were snaking our main line twice a year. Boise Drain Service recommended hydro jetting instead of another band-aid snaking. They showed us the before-and-after video on their camera. The pipe literally looks brand new inside. Worth every penny.',
        rating: 5,
      },
      {
        name: 'Danielle P.',
        city: 'Garden City',
        service: 'Hydro Jetting',
        quote:
          'Professional, honest, and equipped with serious industrial gear. They explained why they had to check the pipe with a camera first so they wouldn’t risk damaging older lines. That integrity earned my business for life.',
        rating: 5,
      },
    ],
    serviceFaqs: [
      {
        question: 'Will hydro jetting damage my plumbing pipes?',
        answer:
          'When performed by trained technicians on structurally sound pipes (PVC, ABS, modern cast iron, intact clay), hydro jetting is completely safe and non-damaging. However, we always assess the pipe beforehand. We will never hydro jet deteriorated, crumbling Orangeburg or severely fractured pipes that cannot withstand pressure.',
      },
      {
        question: 'How long does a hydro jetting service take?',
        answer:
          'A typical residential hydro jetting service takes approximately 1.5 to 2.5 hours. This includes the initial cleanout setup, safety checks, pre-jetting camera assessment, multiple high-pressure scouring passes, and post-jetting video inspection.',
      },
      {
        question: 'Can hydro jetting cut tree roots?',
        answer:
          'Yes. With specialized root-cutting nozzles, 3,500+ PSI water jets slice through fibrous tree roots and wash the debris downstream, leaving the pipe interior clear. However, if tree roots have physically cracked or crushed the pipe, structural repair or lining will eventually be required.',
      },
      {
        question: 'How often should residential sewer lines be hydro jetted?',
        answer:
          'For homes with persistent tree root issues or heavy kitchen usage, hydro jetting every 18 to 24 months keeps the line clean and prevents emergency backups. Homes with clean PVC pipes and good disposal habits rarely need jetting more than once every 5 to 7 years.',
      },
    ],
  },

  'sewer-line-cleaning': {
    slug: 'sewer-line-cleaning',
    categoryIntent:
      'Clearing deep blockages, tree root masses, and heavy waste buildup from the primary underground sewer lateral that connects your home to the municipal sewer or septic system.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Emergency Symptom & Fixture Analysis',
        description:
          'We verify whether the problem is isolated to one fixture or affecting the whole house. If flushing a toilet causes water to rise in a bathtub or basement floor drain, the main sewer line is obstructed.',
      },
      {
        stepNumber: '02',
        title: 'Main Cleanout Access & Containment',
        description:
          'We locate the main sewer cleanout (typically a 3-inch or 4-inch threaded cap in the yard, crawlspace, or garage). We relieve line head pressure carefully to prevent indoor flooding.',
      },
      {
        stepNumber: '03',
        title: 'Heavy-Duty Mechanical Root Cutting',
        description:
          'Deploying commercial sectional or drum machines with 3/4-inch steel cables and expanding C-cutters or spade blades, we bore through dense tree root plugs, feminine hygiene obstructions, and wet wipe accumulations.',
      },
      {
        stepNumber: '04',
        title: 'High-Volume Flush & Integrity Check',
        description:
          'We flush the main line with full residential water volume (toilets and bathtubs flowing together) to guarantee that all cut debris travels safely into the city main. We advise whether an optical camera inspection is needed to evaluate root damage.',
      },
    ],
    methods: [
      {
        name: 'Heavy 3/4" Commercial Cable Machine',
        description:
          'Industrial electric sewer auger capable of delivering maximum torque through 100+ feet of underground 4-inch and 6-inch pipe.',
        bestFor: 'Cutting dense tree root balls and heavy foreign object obstructions.',
      },
      {
        name: 'Expanding C-Cutter & Root Saws',
        description:
          'Spring-steel cutting blades that expand against the inner diameter of the sewer pipe to slice root collars without puncturing the pipe wall.',
        bestFor: 'Vitrified clay and cast iron main laterals with mature root intrusion.',
      },
      {
        name: 'Hydro Jet Scouring Integration',
        description:
          'High-pressure water washing used in tandem with mechanical cutting when pipes have heavy grease or silt coating.',
        bestFor: 'Long-term preventative maintenance after root clearing.',
      },
    ],
    limitations: [
      'Sewer line cleaning addresses OBSTRUCTIONS inside the pipe; it does NOT repair structurally cracked, crushed, offset, or disconnected pipes.',
      'Tree roots enter through joints seeking water; cleaning removes the roots but leaves the joint seam open, meaning roots will eventually return unless chemically treated or lined.',
      'If the sewer pipe has a severe belly (sag) or back-pitch, cleaning restores flow temporarily, but water and solids will continue to pool in the low spot.',
    ],
    diagnosticComparison: {
      title: 'Sewer Line Cleaning vs. Sewer Line Repair',
      subtitle: 'Clear criteria to determine whether your pipe needs obstruction removal or physical structural replacement.',
      optionAName: 'Sewer Line Cleaning (Obstruction Removal)',
      optionBName: 'Sewer Line Repair (Structural Restoration)',
      rows: [
        {
          aspect: 'Primary Problem',
          cleaningOrOptionA: 'Physical blockages: tree root clumps, grease, wet wipes, heavy paper dams',
          repairOrOptionB: 'Physical damage: collapsed pipe, cracked walls, missing invert, sheared joints, deep sags',
        },
        {
          aspect: 'Typical Symptoms',
          cleaningOrOptionA: 'Slow drainage, gurgling toilets, backup cleared after snaking, periodic recurrence',
          repairOrOptionB: 'Backup returns immediately after snaking; sewer gas in yard/crawlspace; sinkhole in lawn',
        },
        {
          aspect: 'Diagnostic Proof',
          cleaningOrOptionA: 'Camera shows intact round pipe walls with roots entering at seams or grease buildup',
          repairOrOptionB: 'Camera shows jagged fractures, collapsed clay, dirt entering pipe, or camera cannot pass',
        },
        {
          aspect: 'Work Approach',
          cleaningOrOptionA: 'Mechanical augers, C-cutters, high-pressure hydro-jetters through existing cleanouts',
          repairOrOptionB: 'Spot excavation, trenchless pipe lining (CIPP), pipe bursting, or full lateral replacement',
        },
        {
          aspect: 'Property Disruption',
          cleaningOrOptionA: 'Zero digging; completed in 1–2 hours through cleanout access with no lawn damage',
          repairOrOptionB: 'Requires targeted excavation or specialized trenchless relining equipment',
        },
      ],
      recommendation:
        'Always start with professional sewer line cleaning and a camera inspection. If the pipe structure is intact, thorough cleaning solves the problem. If the camera reveals structural failure, we guide you through targeted repair options.',
    },
    caseStudies: [
      {
        city: 'Boise',
        locationSlug: 'boise-id',
        neighborhoodOrArea: 'Collister',
        propertyType: '1974 Single-Level Home',
        problem: 'Sewage backed up into both bathtubs on a Saturday afternoon after running the washing machine.',
        technicianDiagnosis:
          'Main 4-inch sewer line was 100% blocked at 62 feet from the house by a massive ball of Siberian Elm tree roots and flushable wipes.',
        solutionAndEquipment:
          'Accessed exterior cleanout with an industrial 3/4-inch cable machine equipped with a 3-inch expanding root saw. Made multiple passes until water dropped rapidly.',
        outcome:
          'Full whole-house drainage restored in under an hour; customer received guidance on non-flushable wipes and camera verification.',
      },
      {
        city: 'Nampa',
        locationSlug: 'nampa-id',
        neighborhoodOrArea: 'Lakeview Park Area',
        propertyType: 'Mid-Century Single-Family Residence',
        problem: 'Basement floor drain bubbling and emitting foul odors whenever anyone flushed the upstairs toilet.',
        technicianDiagnosis:
          'Tree roots and heavy mineral scale in the historic concrete-to-clay connection outside the foundation.',
        solutionAndEquipment:
          'Employed heavy power auger to clear root obstruction, followed by high-volume warm water flush.',
        outcome:
          'Eliminated floor drain bubbling; provided homeowner with clean video inspection of the lateral run.',
      },
    ],
    serviceTestimonials: [
      {
        name: 'Mark T.',
        city: 'Boise (Collister)',
        service: 'Sewer Line Cleaning',
        quote:
          'Had raw sewage backing up into our shower. Called Boise Drain Service and spoke directly to the technician. He arrived quickly with heavy equipment, cleared tree roots out of our line, and verified flow. True lifesaver!',
        rating: 5,
      },
    ],
    serviceFaqs: [
      {
        question: 'How do I know if my problem is a main sewer clog or just an individual drain?',
        answer:
          'If only one sink or shower is slow while the rest of the house drains normally, the clog is in that branch line. If using one fixture (like flushing a toilet or running a washing machine) causes water or bubbles to rise in a bathtub or basement floor drain, you have a main sewer line blockage that requires immediate attention.',
      },
      {
        question: 'Why do tree roots get into sewer lines?',
        answer:
          'Sewer pipes carry warm water, vapor, and nutrients. Mature trees send microscopic root tendrils toward temperature and humidity gradients, penetrating tiny mortar gaps or rubber seals in pipe joints. Once inside, roots blossom into thick mats that trap toilet paper and solids.',
      },
      {
        question: 'Are "flushable" wipes actually safe for my sewer line?',
        answer:
          'No. Plumbers widely agree that flushable wipes do not dissolve like toilet paper. They remain fibrous and catch on the slightest pipe imperfection, root hair, or joint ridge, quickly creating impenetrable dams.',
      },
    ],
  },

  'sewer-line-repair': {
    slug: 'sewer-line-repair',
    categoryIntent:
      'Diagnosing and correcting physical structural damage to underground sewer pipes—including cracked walls, collapsed sections, sheared joints, and severe bellies—through targeted, transparent repair approaches.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Precision Camera Diagnostic & Sonde Locating',
        description:
          'Before anyone touches a shovel, we run an HD camera with an electronic 512 Hz sonde transmitter through the pipe to visually verify the exact nature and depth of the structural failure.',
      },
      {
        stepNumber: '02',
        title: 'Surface Mapping & Utility Markout',
        description:
          'We pinpoint the exact surface coordinates (depth in feet and surface mark) directly above the damaged pipe section and verify local 811 utility markings.',
      },
      {
        stepNumber: '03',
        title: 'Transparent Repair Strategy Discussion',
        description:
          'We explain the failure in plain language and show you the video. We discuss whether a localized spot excavation repair, trenchless epoxy pipe lining, or full replacement is technically and economically appropriate.',
      },
      {
        stepNumber: '04',
        title: 'Targeted Repair & Flow Certification',
        description:
          'The compromised pipe section is replaced with durable modern Schedule 40 PVC or SDR35 pipe, connected with heavy-duty shielded transition couplings, bedding stone, and verified with a final camera pass.',
      },
    ],
    methods: [
      {
        name: 'Targeted Spot Excavation Repair',
        description:
          'Excavating only the precise 5-to-10-foot section of broken or collapsed pipe identified by our camera locator, preserving the rest of your yard and driveway.',
        bestFor: 'Isolated pipe breaks, localized tree root crush points, and sheared foundation transitions.',
      },
      {
        name: 'Trenchless Pipe Lining (CIPP)',
        description:
          'Inserting an epoxy-saturated felt tube inside the damaged pipe and curing it in place to create a seamless, root-proof new pipe without digging a trench.',
        bestFor: 'Pipes running under mature trees, concrete driveways, or custom landscaping.',
      },
      {
        name: 'Sewer Pipe Bursting',
        description:
          'Pulling a heavy-duty hydraulic bursting head through the old deteriorated pipe to shatter it outward while immediately pulling a continuous new HDPE pipe in its place.',
        bestFor: 'Completely deteriorated cast iron or clay lines requiring full lateral replacement.',
      },
    ],
    limitations: [
      'Sewer repair cannot be diagnosed by sound or guesswork; it REQUIRES a verified in-pipe camera inspection to confirm physical structural failure.',
      'Trenchless lining cannot fix severely flattened pipes or deep bellies where the pipe has sagged into soft soil; structural grading correction requires physical excavation.',
      'Permits and utility markouts (Idaho Digline / 811) are mandatory before any underground excavation work can safely proceed.',
    ],
    diagnosticComparison: {
      title: 'When Can You Clean vs. When Must You Repair?',
      subtitle: 'Understanding the diagnostic criteria between regular maintenance and necessary structural repair.',
      optionAName: 'Candidate for Cleaning',
      optionBName: 'Requires Structural Repair',
      rows: [
        {
          aspect: 'Camera Visuals',
          cleaningOrOptionA: 'Intact round pipe bore with soft grease coating or fine root tendrils at joint seams',
          repairOrOptionB: 'Visible pipe wall fractures, missing bottom invert, pipe collapse, or dirt cavity',
        },
        {
          aspect: 'Cable Passage',
          cleaningOrOptionA: 'Auger cable passes smoothly to the city main once obstruction is penetrated',
          repairOrOptionB: 'Auger cable hits a solid structural stop or returns with mud, rocks, or broken clay shards',
        },
        {
          aspect: 'Yard Condition',
          cleaningOrOptionA: 'Lawn is dry and normal; no soil subsidence or foul odor outdoors',
          repairOrOptionB: 'Sunken depression, sinkhole, soggy foul-smelling lawn patch above sewer lateral route',
        },
        {
          aspect: 'Long-Term Viability',
          cleaningOrOptionA: 'Routine periodic maintenance keeps the line flowing reliably for years',
          repairOrOptionB: 'Cleaning fails to hold for more than a few days because the physical pipe has collapsed',
        },
      ],
      recommendation:
        'If a contractor tells you that you need an expensive $10,000+ full sewer replacement without showing you clear video proof of a structural break, get a second opinion. Boise Drain Service provides honest camera diagnostics so you only repair what is genuinely broken.',
    },
    caseStudies: [
      {
        city: 'Boise',
        locationSlug: 'boise-id',
        neighborhoodOrArea: 'North End (Harrison Blvd Area)',
        propertyType: '1930s Historic Brick Cottage',
        problem:
          '1930s home experienced persistent backups every 10 days despite repeated snaking by another company.',
        technicianDiagnosis:
          'Camera inspection revealed an 80-year-old vitrified clay pipe had completely sheared at an offset joint 5 feet deep under the front flower bed. Soil had washed into the line, creating an impenetrable mud dam.',
        solutionAndEquipment:
          'Pinpointed exact 6-foot spot using 512 Hz radio locator. Performed a surgical spot excavation, removed the broken clay section, and installed modern Schedule 40 PVC with heavy-duty Fernco shielded couplings.',
        outcome:
          'Yard landscaping was 95% preserved, and the homeowner avoided an unnecessary $14,000 full-yard trenching quote.',
      },
      {
        city: 'Caldwell',
        locationSlug: 'caldwell-id',
        neighborhoodOrArea: 'Downtown Caldwell',
        propertyType: 'Older Residential Property',
        problem: 'Soggy, foul patch in front yard and sluggish drains throughout the entire home.',
        technicianDiagnosis:
          'Original concrete lateral had collapsed under the walkway due to historic soil settling and moisture saturation.',
        solutionAndEquipment:
          'Located collapse point, excavated 8 feet of crushed concrete, and tied in new SDR35 pipe with proper slope and pea-gravel bedding.',
        outcome: 'Permanent structural resolution with full city code compliance.',
      },
    ],
    serviceTestimonials: [
      {
        name: 'Kenneth B.',
        city: 'Boise',
        service: 'Sewer Line Repair',
        quote:
          'Another company told me my entire sewer line had to be dug up for $12,000. I called Boise Drain Service for a camera second opinion. They located the single cracked collar under a garden bed, repaired just that section, and saved me over $8,000. True integrity.',
        rating: 5,
      },
    ],
    serviceFaqs: [
      {
        question: 'Do I really have to dig up my entire yard to repair a broken sewer pipe?',
        answer:
          'In many cases, no. With modern 512 Hz sonde camera locators, we can pinpoint the exact 5-to-10-foot section that is damaged. A targeted spot repair replaces only the failed section, preserving driveways, walkways, and landscaping while saving thousands of dollars.',
      },
      {
        question: 'What is a "pipe belly" and can it be repaired without digging?',
        answer:
          'A pipe belly is a low dip or sag in an underground pipe caused by soil settlement. Water and solid waste pool in this sag like a puddle, leading to frequent clogs. Because a belly is a physical grading defect, it cannot be fixed with chemicals or lining; the sagging section must be excavated, leveled, and properly supported with compacted crushed rock.',
      },
      {
        question: 'How do I know if my sewer line is cracked or just clogged?',
        answer:
          'A simple clog stops flow, but when cleared with a cable, water flows freely again. A cracked or collapsed pipe will cause backups to reoccur almost immediately, may bring back mud and clay on the technician’s cable, or will cause wet, sunken patches and sewage odors in your yard. A camera inspection is the only definitive test.',
      },
    ],
  },

  'clogged-drain-repair': {
    slug: 'clogged-drain-repair',
    categoryIntent:
      'Targeted diagnostic repair for stubborn, recurring, or complex clogs that resist standard plunging and basic cleaning, identifying deep foreign obstructions, venting issues, and mechanical trap failures.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Diagnostic Problem History',
        description:
          'We evaluate how frequently the drain clogs, what DIY methods have already been attempted, and whether unusual siphon noises or sewer odors accompany the blockage.',
      },
      {
        stepNumber: '02',
        title: 'Trap & Baffle Disassembly',
        description:
          'We inspect the fixture trap, pop-up linkage, cleanout plugs, and baffle tees. In many stubborn clogs, foreign objects (toothbrushes, bottle caps, jewelry, wipes) are lodged mechanically in the trap curve.',
      },
      {
        stepNumber: '03',
        title: 'Heavy Retrieval or Sectional Cable Run',
        description:
          'Using specialized retrieving augers or drop-head cables, we extract foreign objects rather than pushing them deeper into main line transitions.',
      },
      {
        stepNumber: '04',
        title: 'Venting & Trap Seal Restoration',
        description:
          'We check for negative pressure siphonage (blocked plumbing roof vents causing traps to suck dry) and reinstall clean, leak-free mechanical seals.',
      },
    ],
    methods: [
      {
        name: 'Mechanical Retrieval Augers',
        description:
          'Special corkscrew and basket attachments that hook into foreign objects (toys, wipes, washcloths) to pull them back out of the line.',
        bestFor: 'Objects accidentally dropped into toilets, sinks, or floor openings.',
      },
      {
        name: 'Trap Repair & Replacement',
        description:
          'Disassembling corroded slip-joints or mineralized drum traps and replacing them with modern, code-compliant P-traps.',
        bestFor: 'Older homes with corroded brass or lead drum traps that resist cleaning.',
      },
      {
        name: 'Plumbing Vent Stoppage Diagnosis',
        description:
          'Testing for blocked roof plumbing vents (bird nests, snow caps) that prevent atmospheric pressure from balancing drain flow.',
        bestFor: 'Drains that bubble, gurgle, or suck water out of adjacent toilet bowls.',
      },
    ],
    limitations: [
      'If the underlying issue is a cracked pipe or tree root invasion in the yard, repairing the fixture drain will only offer short-term relief until the sewer lateral is addressed.',
      'Plunging too aggressively before repair can blow out slip-joint compression washers inside vanities and walls, causing hidden water leaks.',
    ],
    caseStudies: [
      {
        city: 'Kuna',
        locationSlug: 'kuna-id',
        neighborhoodOrArea: 'Kuna Downtown',
        propertyType: 'Suburban Home',
        problem: 'Guest bathroom sink clogged solid for three weeks; plunger and liquid cleaners failed completely.',
        technicianDiagnosis:
          'A plastic cosmetics cap had fallen down the drain and lodged inside the P-trap, acting as a one-way valve that trapped hair and toothpaste.',
        solutionAndEquipment:
          'Disassembled P-trap assembly with basin tools, extracted the plastic cap, cleaned the trap arm, and replaced aged compression washers.',
        outcome: 'Restored rapid drainage with zero damage to vanity cabinetry.',
      },
    ],
    serviceTestimonials: [
      {
        name: 'Alicia M.',
        city: 'Kuna',
        service: 'Clogged Drain Repair',
        quote:
          'Had a drain that kept clogging every single weekend. Boise Drain Service actually took the time to find the real cause instead of just running a quick snake. Friendly, clean, and solved it once and for all.',
        rating: 5,
      },
    ],
    serviceFaqs: [
      {
        question: 'Why does my drain keep clogging even after I snake it myself?',
        answer:
          'Small DIY hand snakes often simply poke a small hole through soft clogs without removing the dense core or extracting foreign items like hair clumps or plastic caps. Furthermore, if the pipe interior has heavy mineral scale or grease, debris catches immediately on the rough edges.',
      },
      {
        question: 'Can a clogged roof vent cause my drains to stop draining?',
        answer:
          'Yes. Plumbing drain systems require atmospheric air from roof vents to allow water to flow freely—much like removing your finger from the top of a drinking straw. If a vent stack is blocked by debris, leaves, or snow, drains will gurgle, drain sluggishly, or siphon water out of toilet bowls.',
      },
    ],
  },

  'main-drain-cleaning': {
    slug: 'main-drain-cleaning',
    categoryIntent:
      'Clearing the primary central collector line inside the foundation footprint that ties all household fixtures together before exiting toward the street.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Whole-House Fixture Mapping',
        description:
          'We test multiple fixtures to determine if the stoppage is in an isolated branch line or the central building drain collector beneath the slab or crawlspace.',
      },
      {
        stepNumber: '02',
        title: 'Central Cleanout Access',
        description:
          'We locate the primary building drain cleanout, typically found where the vertical plumbing stacks merge into the horizontal crawlspace run or garage wall.',
      },
      {
        stepNumber: '03',
        title: 'Full-Diameter Mechanical Bore',
        description:
          'We deploy heavy sectional cable equipment to scour the 3-inch and 4-inch collector pipe, breaking through consolidated paper dams, kitchen grease accumulation, and wipes.',
      },
      {
        stepNumber: '04',
        title: 'Simultaneous High-Volume Flood Test',
        description:
          'We flush multiple fixtures at once (toilets flushing, bathtubs draining, kitchen sink running) to prove the main collector handles peak household drainage volume without hesitation.',
      },
    ],
    methods: [
      {
        name: 'Sectional Power Auger',
        description:
          'High-torque modular cable machine that delivers immense cutting power through long horizontal building drains without twisting inside large pipes.',
        bestFor: '3-inch to 4-inch central building drains and horizontal sub-slab collectors.',
      },
      {
        name: 'Straight & Funnel Augers',
        description:
          'Specialized cutter heads engineered to break up consolidated paper dams and feminine hygiene blockages without pipe wall abrasion.',
        bestFor: 'Whole-house collector stoppages.',
      },
    ],
    limitations: [
      'Does not repair pipes that have settled beneath concrete basement slabs.',
      'Main drain cleaning handles interior building collectors; if the problem extends beyond the foundation into city street trees, sewer lateral cleaning is required.',
    ],
    caseStudies: [
      {
        city: 'Boise',
        locationSlug: 'boise-id',
        neighborhoodOrArea: 'Southeast Boise',
        propertyType: 'Split-Level Residential Home',
        problem:
          'Whenever someone took a shower upstairs, water and soap bubbles backed up into the downstairs utility room floor drain.',
        technicianDiagnosis:
          'Central 3-inch building drain collector had a consolidated blockage of paper and lint right where the two main stacks merged in the crawlspace.',
        solutionAndEquipment:
          'Accessed the crawlspace cleanout, fed a 5/8-inch sectional cable with a funnel auger 35 feet down the line, and flushed through with heavy volume.',
        outcome: 'Whole house draining in perfect sync with zero floor drain backup.',
      },
    ],
    serviceTestimonials: [
      {
        name: 'Jason P.',
        city: 'Boise (Southeast)',
        service: 'Main Drain Cleaning',
        quote:
          'Water was coming up into our lowest bathroom when we did laundry. Boise Drain Service came out within the hour, identified the main collector clog, and resolved it fast. Exceptional communication.',
        rating: 5,
      },
    ],
    serviceFaqs: [
      {
        question: 'What is the difference between a branch drain and a main drain?',
        answer:
          'A branch drain connects a single fixture (such as your kitchen sink or master shower) to the plumbing system. The main drain is the larger central pipe (usually 3 to 4 inches in diameter) that collects wastewater from all branches and carries it out of the foundation. A clog in a branch affects one room; a clog in the main drain affects the entire house.',
      },
      {
        question: 'Why does my toilet bubble when the washing machine drains?',
        answer:
          'Washing machines discharge dozens of gallons of water in a short burst. If the main drain line has a partial restriction, that rapid volume of water cannot escape quickly enough, forcing air and water up into the nearest low fixture—typically a nearby toilet or shower.',
      },
    ],
  },

  'kitchen-drain-cleaning': {
    slug: 'kitchen-drain-cleaning',
    categoryIntent:
      'Specialized clearing of kitchen sink lines, garbage disposal tie-ins, and dishwasher discharge pipes choked with Fats, Oils, Grease (FOG), and food sediment.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Disposal & Trap Assembly Check',
        description:
          'We check the garbage disposal flywheel, dishwasher discharge loop, and slip-joint P-trap under the kitchen sink to isolate whether the clog is in the disposal or the wall pipe.',
      },
      {
        stepNumber: '02',
        title: 'Trap Arm Disconnect & Line Access',
        description:
          'We disconnect the under-sink trap assembly cleanly into a catch basin, protecting fine cabinetry and floors from greasy wastewater.',
      },
      {
        stepNumber: '03',
        title: 'Grease-Cutting Cable Navigation',
        description:
          'Using a dedicated kitchen cable machine with grease-cutting double-blade cutters, we navigate the 1.5-inch or 2-inch pipe into the wall, boring through congealed butter, cooking grease, and coffee grounds.',
      },
      {
        stepNumber: '04',
        title: 'Thermal Flush & Preventative Guidance',
        description:
          'We reassemble the trap with fresh gaskets and execute a prolonged boiling-hot water thermal flush to liquefy residual grease film. We share practical tips on avoiding FOG accumulation.',
      },
    ],
    methods: [
      {
        name: 'Grease-Cutting Dual-Blade Cable',
        description:
          'Flexible electric snake fitted with twin circular blades that scrape the inner diameter of 1.5" to 2" kitchen branch pipes.',
        bestFor: 'Hardened cooking oils, bacon grease, mayonnaise, and food paste clogs.',
      },
      {
        name: 'Trap & Baffle Disassembly',
        description:
          'Manual servicing of under-sink baffles and disposal connections to clear trapped bones, silverware, or fibrous peels.',
        bestFor: 'Disposal hums or water backing up into opposite sink bowl.',
      },
    ],
    limitations: [
      'Chemical drain cleaners like Drano should NEVER be poured into kitchen sinks with garbage disposals; they splash back, corrode disposal impellers, and melt plastic seals.',
      'If grease has traveled into the main underground sewer line, under-sink cabling will only restore temporary flow until the main line is cleared or jetted.',
    ],
    caseStudies: [
      {
        city: 'Star',
        locationSlug: 'star-id',
        neighborhoodOrArea: 'Star Residential',
        propertyType: 'Single-Family Suburban Home',
        problem:
          'Kitchen double-sink backing up into both bowls; garbage disposal was vibrating violently and humming.',
        technicianDiagnosis:
          'Potato peelings and fibrous celery had jammed the disposal shredder ring, while heavy cooking oil had formed a thick paste 14 feet down the wall line.',
        solutionAndEquipment:
          'Manually freed and de-jammed disposal plate, disconnected trap arm, and ran an electric kitchen auger through the wall pipe. Flushed with sustained hot water.',
        outcome: 'Disposal running quietly and both sink bowls draining instantly.',
      },
    ],
    serviceTestimonials: [
      {
        name: 'Megan H.',
        city: 'Star',
        service: 'Kitchen Drain Cleaning',
        quote:
          'Kitchen sink clogged right before hosting a family dinner. Boise Drain Service arrived within an hour, was super clean under the sink, and had everything running smoothly. Great advice on disposal care too.',
        rating: 5,
      },
    ],
    serviceFaqs: [
      {
        question: 'What foods should never go down the garbage disposal?',
        answer:
          'Never put fibrous items (celery, corn husks, artichokes), starchy expanders (pasta, rice, potato peels), coffee grounds, eggshells, or any cooking oils/grease down the disposal. Even with running water, these items form thick pastes that choke the drain line within feet of the sink.',
      },
      {
        question: 'Why does water back up into my other sink bowl when I run the disposal?',
        answer:
          'Double-basin kitchen sinks share a common sanitary tee connection beneath the divider. When the pipe downstream of that tee is restricted with grease, the forceful pumping action of the garbage disposal simply pushes wastewater up into the secondary sink bowl.',
      },
    ],
  },

  'bathroom-drain-cleaning': {
    slug: 'bathroom-drain-cleaning',
    categoryIntent:
      'Clearing stubborn hair tangles, soap scum calcification, and personal care products from bathroom sinks, showers, and bathtubs without damaging delicate plumbing fixtures.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Stopper & Strainer Removal',
        description:
          'We inspect and safely remove bathroom sink pop-up stoppers or shower drain strainers, where over 60% of common hair clogs are initially anchored.',
      },
      {
        stepNumber: '02',
        title: 'Hair & Soap Extraction',
        description:
          'Using specialized hair-snagging hand augers and micro-cables, we extract dense hair mats from the upper trap without scratching decorative brushed nickel or chrome finishes.',
      },
      {
        stepNumber: '03',
        title: 'Trap & Branch Line Clearing',
        description:
          'For deeper blockages past the P-trap, we guide a flexible continuous cable through the trap bend into the wall arm to clear soap scum and toothpaste buildup.',
      },
      {
        stepNumber: '04',
        title: 'Full Drainage Verification & Stopper Calibration',
        description:
          'We clean the mechanical pop-up linkage, reinstall and test the stopper seal, and run high-volume hot water to verify immediate vortex drainage.',
      },
    ],
    methods: [
      {
        name: 'Micro-Cable Drum Auger',
        description:
          'Compact, variable-speed electric snake designed to navigate tight 1.5-inch P-traps without scratching enamel or porcelain.',
        bestFor: 'Shower and bathtub drains with restricted access.',
      },
      {
        name: 'Pop-Up Stopper Extraction & Recalibration',
        description:
          'Disassembling under-sink pivot rods to clean hair-wrapped stopper stems and restoring smooth lever operation.',
        bestFor: 'Bathroom lavatory sinks that pool water slowly.',
      },
    ],
    limitations: [
      'Chemical drain cleaners sit in chrome shower drains and eat away the metal finish and rubber gaskets, creating costly leaks into ceilings below.',
      'If shower water backs up whenever a toilet is flushed, the problem is in the main branch or sewer line, not the individual shower trap.',
    ],
    caseStudies: [
      {
        city: 'Eagle',
        locationSlug: 'eagle-id',
        neighborhoodOrArea: 'Two Rivers',
        propertyType: 'Master Suite Shower',
        problem: 'Walk-in master shower pooling 3 inches of standing water across luxury tile flooring.',
        technicianDiagnosis:
          'Dense human and pet hair combined with body wash oils caught on the crossbar assembly beneath the decorative brass strainer.',
        solutionAndEquipment:
          'Removed strainer without scratching tile, deployed a specialized micro-extractor cable, pulled out the hair mass, and treated line with hot water flush.',
        outcome: 'Instant drainage with zero damage to luxury tile or grout.',
      },
    ],
    serviceTestimonials: [
      {
        name: 'David R.',
        city: 'Eagle',
        service: 'Bathroom Drain Cleaning',
        quote:
          'Prompt, professional, and very fair pricing. They cleared our shower drain without trying to upsell unneeded repairs. Highly recommend them to anyone in the Treasure Valley.',
        rating: 5,
      },
    ],
    serviceFaqs: [
      {
        question: 'Why do shower drains clog so frequently?',
        answer:
          'Shower drains handle a combination of long hair, pet hair, bar soap tallow, conditioners, and body oils. As hot water cools down the pipe, soap scum solidifies on the pipe walls, creating a sticky web that catches every stray strand of hair.',
      },
      {
        question: 'How can I prevent bathroom drains from clogging?',
        answer:
          'Place a fine silicone or stainless-steel hair-catching screen over the shower and tub drain openings. Empty the screen after every shower, avoid pouring oils or wax down sink basins, and flush drains monthly with hot water.',
      },
    ],
  },

  'floor-drain-cleaning': {
    slug: 'floor-drain-cleaning',
    categoryIntent:
      'Clearing basement, laundry room, garage, and utility floor drains of silt, lint, dirt, and dried trap seals to protect your property from basement flooding and noxious sewer gases.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Grate Removal & Sediment Cleanout',
        description:
          'We remove the heavy cast iron or brass floor drain grate, scooping out mud, gravel, and surface sediment that has washed in from garage slabs or basement floors.',
      },
      {
        stepNumber: '02',
        title: 'Trap Seal & Primer Inspection',
        description:
          'We inspect the floor drain P-trap to see if water is present. If the trap has dried out, sewer gases freely enter the home. We inspect automatic trap primer lines if installed.',
      },
      {
        stepNumber: '03',
        title: 'Heavy Cable Clearing of Deep Silt & Roots',
        description:
          'Floor drains often run flat across concrete footings. We run a heavy cable through the floor trap into the main collector to bore through sediment, washer lint, and intrusion.',
      },
      {
        stepNumber: '04',
        title: 'Water Trap Recharge & Flow Testing',
        description:
          'We flush the drain with high-volume water, verify that the trap holds clean water to block sewer gases, and reinstall the grate securely.',
      },
    ],
    methods: [
      {
        name: 'Heavy-Duty Floor Drain Auger',
        description:
          'Powerful cable machine capable of pushing through heavy silt, gravel, and detergent sludge commonly found in lowest-level drains.',
        bestFor: 'Basement and commercial garage floor drains.',
      },
      {
        name: 'Trap Seal Replenishment & Cleaning',
        description:
          'Scouring the water trap curve to remove decaying organic slime and recharging the water seal.',
        bestFor: 'Floor drains emitting sulfur or sewer gas odors.',
      },
    ],
    limitations: [
      'If groundwater is seeping through concrete basement floor cracks, a floor drain cannot prevent flooding unless a dedicated sump pump system is installed.',
      'Floor drains that back up when toilets flush are symptomatic of a main sewer lateral blockage, which must be cleared first.',
    ],
    caseStudies: [
      {
        city: 'Middleton',
        locationSlug: 'middleton-id',
        neighborhoodOrArea: 'Middleton Rural Acreage',
        propertyType: 'Ranch with Walkout Basement',
        problem:
          'Basement floor drain backing up water and laundry lint whenever the washing machine completed a spin cycle.',
        technicianDiagnosis:
          'Floor drain trap had accumulated heavy laundry lint and hard-water calcium scale, reducing the pipe bore to under 1 inch.',
        solutionAndEquipment:
          'Removed cast iron grate, deployed a sectional auger with a spade blade to descale the trap, and flushed with 50 gallons of water.',
        outcome: 'Washing machine discharges now drain effortlessly without basement pooling.',
      },
    ],
    serviceTestimonials: [
      {
        name: 'Steve B.',
        city: 'Middleton',
        service: 'Floor Drain Cleaning',
        quote:
          'Our utility room floor drain started backing up. Boise Drain Service came out, cleaned out years of lint and sediment, and explained how to keep the trap primed so we don’t get sewer odors. Great local service.',
        rating: 5,
      },
    ],
    serviceFaqs: [
      {
        question: 'Why does my basement floor drain smell like rotten eggs or sewage?',
        answer:
          'Floor drains have a curved "P-trap" beneath the grate that is supposed to stay full of water to create a physical barrier blocking sewer gases. If the drain is rarely used, that water evaporates, allowing noxious sewer gas into your home. Pouring a gallon of water down the drain every month replenishes the trap seal.',
      },
      {
        question: 'Can a clogged floor drain cause my basement to flood?',
        answer:
          'Yes. Floor drains are designed as emergency safety valves for water heater leaks, washing machine hose failures, and HVAC condensate runoff. If the floor drain is clogged with dirt or sediment, any plumbing leak will quickly pool across your basement floor causing serious water damage.',
      },
    ],
  },
};
