export interface Location {
  slug: string;
  name: string;
  state: string;
  shortDescription: string;
  description: string;
  housingProfile: string;
  typicalPipeMaterials: string;
  localPlumbingNotes: string;
  serviceDispatchNote: string;
}

export const locations: Location[] = [
  {
    slug: 'boise-id',
    name: 'Boise',
    state: 'ID',
    shortDescription: 'Idaho\'s capital city and the primary service area for Boise Drain Service.',
    description:
      'Boise is the capital and most populous city in Idaho, located in the Treasure Valley along the Boise River. As our primary service area, Boise Drain Service provides dedicated drain cleaning and sewer diagnostic services to homes and businesses throughout the city. Boise\'s mix of older and newer neighborhoods means drainage challenges range from aging cast iron and clay sewer laterals in the North End and Bench to settling lines and tree root intrusions along the river and foothills.',
    housingProfile:
      'Historic 1900s–1950s homes in the North End, East End, and Warm Springs; mid-century 1950s–1970s ranches across the Boise Bench and Sunset; and modern subdivisions in Southwest Boise and Southeast Boise.',
    typicalPipeMaterials:
      'Original vitrified clay tile sewer laterals, vintage cast iron stacks, galvanized branch drains, and modern ABS/PVC in newer builds.',
    localPlumbingNotes:
      'Mature Siberian elms, silver maples, and weeping willows frequently invade clay joint collars. Hard water mineral scaling from the Boise aquifer can also calcify on rough cast iron pipe inverts over time.',
    serviceDispatchNote:
      'Boise Drain Service is locally owned and based right here in Boise, providing direct technician communication and rapid response across all Boise neighborhoods.',
  },
  {
    slug: 'meridian-id',
    name: 'Meridian',
    state: 'ID',
    shortDescription: 'One of Idaho\'s fastest-growing cities, located just west of Boise.',
    description:
      'Meridian is a dynamic, rapidly growing city in Ada County situated between Boise and Nampa. With widespread residential development over the past two decades, many Meridian homes feature modern ABS and PVC plumbing. However, expanding tree root systems in 10-to-20-year-old subdivisions, heavy kitchen grease accumulation in busy family homes, and post-construction soil settlement contribute to common drainage issues.',
    housingProfile:
      'Primarily 1990s through modern 2020s single-family suburban subdivisions, master-planned communities, and townhome developments.',
    typicalPipeMaterials:
      'Modern ABS drainage pipes indoors and green SDR35 PVC sewer laterals outdoors.',
    localPlumbingNotes:
      'Rapid subdivision construction can sometimes lead to localized pipe settling and minor bellies. High household water and kitchen appliance use make grease buildup and laundry lint common culprits for drain clogs.',
    serviceDispatchNote:
      'We dispatch mobile drain service units directly from our Boise headquarters to Meridian daily, offering prompt service without call center delays.',
  },
  {
    slug: 'eagle-id',
    name: 'Eagle',
    state: 'ID',
    shortDescription: 'A community northwest of Boise known for its residential neighborhoods and foothills.',
    description:
      'Eagle is an upscale community in Ada County located northwest of Boise along the Boise River, known for its scenic foothills, acreage estates, and riverside subdivisions. Drainage considerations in Eagle often involve long sewer laterals, custom home plumbing architectures, high river water tables, and transition points between home drains and municipal sewer connections or private septic systems.',
    housingProfile:
      'Custom single-family residences on large acreage lots, luxury riverfront developments (such as Two Rivers), and hillside homes in the Eagle Foothills.',
    typicalPipeMaterials:
      'Schedule 40 PVC, ABS, and heavy-duty SDR35 sewer pipe.',
    localPlumbingNotes:
      'Higher water tables near the Boise River greenbelt and extended lateral pipe runs on 1-to-5-acre parcels require accurate diagnostic equipment like 512 Hz sonde inspection cameras to locate issues without disturbing custom landscaping.',
    serviceDispatchNote:
      'Boise Drain Service provides full service coverage to Eagle residents and businesses, dispatched directly from our Boise facility.',
  },
  {
    slug: 'garden-city-id',
    name: 'Garden City',
    state: 'ID',
    shortDescription: 'A community surrounded by Boise along the Boise River.',
    description:
      'Garden City is an incorporated city nearly surrounded by Boise, stretching along the Boise River corridor. With an eclectic mix of historic residential cottages, modern live-work lofts, craft beverage spaces, and commercial properties along Chinden Boulevard, drainage systems vary widely in age and material.',
    housingProfile:
      'Historic 1930s–1960s river cottages, mid-century commercial properties, and new high-density riverfront townhomes and condominiums.',
    typicalPipeMaterials:
      'Mix of vintage cast iron, galvanized steel, original clay pipe, and modern PVC in newer infill projects.',
    localPlumbingNotes:
      'Alluvial river soils, shallow groundwater, and aggressive willow and cottonwood root systems along the riverfront make root intrusion and silt accumulation frequent issues.',
    serviceDispatchNote:
      'Located immediately adjacent to Boise, Garden City receives prompt, direct dispatch from our service technicians.',
  },
  {
    slug: 'nampa-id',
    name: 'Nampa',
    state: 'ID',
    shortDescription: 'The largest city in Canyon County, located west of Boise.',
    description:
      'Nampa is the largest city in Canyon County and an integral hub of the Treasure Valley. With established historic homes near downtown, mid-century neighborhoods around Lakeview Park, and rapid new subdivision growth on the outskirts, Nampa properties face varied drainage challenges from deteriorating vintage sewer laterals to grease and hard-water scaling.',
    housingProfile:
      'Turn-of-the-century and mid-century single-family homes in central Nampa, alongside extensive 2000s–modern residential subdivisions.',
    typicalPipeMaterials:
      'Vintage cast iron and vitrified clay in older sectors; modern ABS and SDR35 PVC in newer expansions.',
    localPlumbingNotes:
      'Canyon County soils and agricultural dust can wash into exterior drains, while older downtown residential lines often suffer from mature root penetration and internal cast iron rust scaling.',
    serviceDispatchNote:
      'Boise Drain Service travels the I-84 corridor to serve Nampa homeowners and businesses with fully equipped service vehicles.',
  },
  {
    slug: 'caldwell-id',
    name: 'Caldwell',
    state: 'ID',
    shortDescription: 'The seat of Canyon County, located in the western Treasure Valley.',
    description:
      'Caldwell is the county seat of Canyon County, located in the western Treasure Valley along Indian Creek and the Boise River. With a significant number of historic and mid-century properties alongside newer developments, Caldwell drainage infrastructure includes aging residential laterals that require careful diagnosis and cleaning methods that protect older pipe integrity.',
    housingProfile:
      'Historic homes in the Steunenberg residential district and downtown core, mid-century neighborhoods, and agricultural-bordering subdivisions.',
    typicalPipeMaterials:
      'Historic concrete and clay sewer pipes, cast iron stacks, and modern PVC in newer subdivisions.',
    localPlumbingNotes:
      'Older concrete sewer laterals can experience structural deterioration and aggregate erosion. Camera inspections are especially valuable in Caldwell to check pipe wall integrity before aggressive clearing.',
    serviceDispatchNote:
      'We extend our professional drain and camera diagnostic services to Caldwell properties from our Treasure Valley base.',
  },
  {
    slug: 'kuna-id',
    name: 'Kuna',
    state: 'ID',
    shortDescription: 'A growing community south of Meridian in Ada County.',
    description:
      'Kuna is a fast-growing community in southwestern Ada County. The rapid transformation of agricultural land into master-planned residential subdivisions means many homes have modern plumbing, but new landscaping root growth, soil settling, and high laundry/appliance demands in young families are frequent contributors to drain stoppages.',
    housingProfile:
      'Mostly modern 2000s–2020s single-family residential subdivisions with some rural ranches on the perimeter.',
    typicalPipeMaterials:
      'Modern ABS interior plumbing and PVC sewer connections.',
    localPlumbingNotes:
      'Soil settling around newly excavated foundations can sometimes create minor slope inconsistencies or bellies in exterior sewer lines.',
    serviceDispatchNote:
      'Boise Drain Service regularly services Kuna residents with fully equipped drain cleaning trucks.',
  },
  {
    slug: 'star-id',
    name: 'Star',
    state: 'ID',
    shortDescription: 'A small city in Ada County west of Eagle.',
    description:
      'Star is a growing city in northwestern Ada County located along the Boise River corridor west of Eagle. Once primarily rural, Star has experienced substantial residential growth, featuring high-quality subdivisions where homeowners expect prompt, clean, and reliable drain cleaning services.',
    housingProfile:
      'A mix of established rural homes and new master-planned subdivisions featuring spacious modern residences.',
    typicalPipeMaterials:
      'Modern ABS, PVC, and some septic tank connection lines in peripheral rural acreage properties.',
    localPlumbingNotes:
      'Homes on perimeter properties may connect to private septic tanks where proper drain clearing methods must protect tank bacterial balance.',
    serviceDispatchNote:
      'Our mobile service units easily reach Star via State Street (Highway 44) for timely drain evaluations.',
  },
  {
    slug: 'middleton-id',
    name: 'Middleton',
    state: 'ID',
    shortDescription: 'A rural community in Canyon County northwest of Caldwell.',
    description:
      'Middleton is a community in Canyon County northwest of Caldwell, blending rural homesteads, agricultural acreage, and newer residential developments. Drainage issues can involve everything from laundry sediment clogs to utility floor drain sediment buildup and mature roots from windbreak trees.',
    housingProfile:
      'Rural acreage properties, established farmhouses, and newer subdivisions expanding from the town center.',
    typicalPipeMaterials:
      'ABS, PVC, older cast iron in farmhouses, and septic lateral connections.',
    localPlumbingNotes:
      'Agricultural silt, well-water mineral deposits, and windbreak tree roots frequently affect exterior and utility drainage pipes.',
    serviceDispatchNote:
      'Boise Drain Service provides professional drain clearing and camera inspection services across Middleton.',
  },
  {
    slug: 'hidden-springs-id',
    name: 'Hidden Springs',
    state: 'ID',
    shortDescription: 'A master-planned community in the Boise Foothills.',
    description:
      'Hidden Springs is a master-planned community nestled in the Boise Foothills of Ada County. Featuring custom homes built along hillside terrain, drainage systems in Hidden Springs require attention to elevation slopes, deep sewer laterals, and proper floor drain trap maintenance in dry foothill basements.',
    housingProfile:
      'Late 1990s through 2010s Craftsman-style custom homes and cottages built on rolling foothill terrain.',
    typicalPipeMaterials:
      'Modern ABS and Schedule 40 PVC.',
    localPlumbingNotes:
      'Dry foothill air can cause unused basement floor drain traps to evaporate quickly, allowing sewer smells to escape indoors. Foothill grading also means sewer laterals can have steeper drop angles into community collectors.',
    serviceDispatchNote:
      'We provide specialized drain diagnostic and cleaning services to Hidden Springs homeowners via Bogus Basin / Cartwright routes.',
  },
];
