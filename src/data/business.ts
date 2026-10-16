export const businessInfo = {
  name: 'Boise Drain Service',
  phone: '208-860-1639',
  phoneLink: 'tel:2088601639',
  website: 'https://www.boisedrainservice.com/',
  googleMapsLink: 'https://maps.app.goo.gl/EamNVKu6x5BjWC9g7',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d740962.2750758331!2d-117.1644645900758!3d43.49432663151479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aef98f93275263%3A0xbf2d61a0db4d9469!2sBoise%20Drain%20Service!5e0!3m2!1sen!2sin!4v1792061730213!5m2!1sen!2sin',
  primaryLocation: 'Boise, Idaho, USA',
  primaryLocationSlug: 'boise-id',
  domain: 'www.boisedrainservice.com',
  image: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Check',
  address: {
    addressLocality: 'Boise',
    addressRegion: 'ID',
    postalCode: '83702',
    addressCountry: 'US',
  },
  geo: {
    latitude: 43.615,
    longitude: -116.2023,
  },
  rating: 5.0,
  reviewCount: 65,
  ownerName: 'Kevin Bell',
};

export interface CategorizedFaq {
  category: 'problems' | 'inspections' | 'scheduling' | 'estimates' | 'limitations';
  categoryLabel: string;
  question: string;
  answer: string;
}

export const detailedFaqs: CategorizedFaq[] = [
  // 1. Drain Problems & Symptoms
  {
    category: 'problems',
    categoryLabel: 'Drain Problems',
    question: 'How do I know if my issue is a single fixture clog or a main sewer line backup?',
    answer:
      'If only one sink, shower, or toilet is draining slowly while every other fixture in the house works normally, the clog is isolated to that specific branch pipe. If using one fixture causes water or bubbles to rise in another (for example, flushing an upstairs toilet causes water to gurgle into the bathtub or basement floor drain), your main sewer line is obstructed and requires immediate clearing.',
  },
  {
    category: 'problems',
    categoryLabel: 'Drain Problems',
    question: 'Why do my drains keep clogging again every few weeks?',
    answer:
      'Recurring clogs indicate that previous clearing methods only poked a small hole through the obstruction rather than removing it. Typical causes include heavy tree roots entering through pipe joints, grease coats clinging to pipe walls, an underground pipe belly (sag) that holds stagnant water, or severe internal rust scale (tuberculation) in vintage cast iron.',
  },
  {
    category: 'problems',
    categoryLabel: 'Drain Problems',
    question: 'Can I safely use a plunger to clear my drain before calling?',
    answer:
      'Yes, light plunging with a standard cup plunger (for sinks) or flange plunger (for toilets) is safe for minor blockages. However, do NOT plunge forcefully if you have already poured chemical drain cleaners into the fixture, as caustic chemicals can splash onto your skin or eyes. If 2–3 gentle plunges do not restore flow, call a professional to prevent blowing out slip-joint seals inside your walls.',
  },

  // 2. Camera Inspections & Diagnostics
  {
    category: 'inspections',
    categoryLabel: 'Camera Inspections',
    question: 'When is a sewer camera inspection recommended?',
    answer:
      'A camera inspection is strongly recommended when: (1) you experience recurring clogs within 30 to 60 days, (2) you are purchasing a home in the Treasure Valley and want to verify sewer lateral condition during your inspection contingency, (3) you suspect an underground pipe collapse or root invasion, or (4) before running high-pressure hydro jetting in older cast iron or clay pipes.',
  },
  {
    category: 'inspections',
    categoryLabel: 'Camera Inspections',
    question: 'How does the camera pinpoint the exact depth and location of a broken pipe?',
    answer:
      'Our camera heads feature an integrated 512 Hz radio sonde transmitter. As the camera travels down your sewer pipe, it broadcasts an electromagnetic frequency. Our technician walks the surface above ground with a digital receiver, marking the exact horizontal location and vertical depth (in feet and inches) on your lawn, driveway, or sidewalk. This prevents unnecessary exploratory trenching.',
  },
  {
    category: 'inspections',
    categoryLabel: 'Camera Inspections',
    question: 'Can a camera inspection unclog my drain by itself?',
    answer:
      'No. An inspection camera is purely an optical diagnostic tool. If your pipe is completely backed up with dark standing sewage, our technician must first run a mechanical cable to drain the standing water so the high-resolution camera lens has clear visibility.',
  },

  // 3. Scheduling, Dispatch & Response Times
  {
    category: 'scheduling',
    categoryLabel: 'Scheduling & Dispatch',
    question: 'How quickly can Boise Drain Service arrive at my property?',
    answer:
      'We dispatch mobile service trucks directly from Boise across Ada and Canyon Counties daily. For active emergencies (sewage overflowing into living spaces or basements), our typical arrival window is between 45 and 90 minutes depending on traffic and current on-site calls. For routine cleanings and camera inspections, same-day and scheduled appointments are available.',
  },
  {
    category: 'scheduling',
    categoryLabel: 'Scheduling & Dispatch',
    question: 'Which cities and areas do you cover in the Treasure Valley?',
    answer:
      'We serve the entire Treasure Valley, including Boise, Meridian, Eagle, Garden City, Nampa, Caldwell, Kuna, Star, Middleton, and Hidden Springs. When you call, we confirm our technician availability for your specific neighborhood immediately.',
  },
  {
    category: 'scheduling',
    categoryLabel: 'Scheduling & Dispatch',
    question: 'Do you offer emergency weekend and evening services?',
    answer:
      'Yes. Sewer backups and overflowing drains do not wait for business hours. We provide 24/7 on-call emergency response for urgent sewer backups, basement flooding, and severe drainage emergencies across the valley.',
  },

  // 4. Pricing, Estimates & Transparency
  {
    category: 'estimates',
    categoryLabel: 'Estimates & Pricing',
    question: 'Can you give me an accurate price estimate over the phone?',
    answer:
      'When you call 208-860-1639, you speak directly with an experienced technician who will ask targeted questions about your symptoms, the affected fixtures, and home age. We provide transparent upfront pricing ranges for standard drain snaking, hydro jetting, and camera inspections before dispatching, with zero surprise hidden fees.',
  },
  {
    category: 'estimates',
    categoryLabel: 'Estimates & Pricing',
    question: 'Why do other plumbers quote thousands of dollars to dig up sewer lines?',
    answer:
      'Some plumbing companies use sub-contracted commission sales reps who push expensive full-yard excavations at the first sign of tree roots. Boise Drain Service believes in honest diagnosis: we show you the live camera footage on our monitor first. If roots are in sound pipe, simple root-cutting or hydro jetting solves the problem for a fraction of the cost.',
  },

  // 5. Service Limitations & Safety Rules
  {
    category: 'limitations',
    categoryLabel: 'Limitations & Safety',
    question: 'Why shouldn’t I use liquid chemical drain cleaners (like Drano or Liquid-Plumr)?',
    answer:
      'Caustic chemical cleaners generate intense exothermic heat that can soften and warp PVC pipes, degrade rubber trap gaskets, and accelerate internal rusting in older cast iron. Furthermore, chemicals rarely remove dense hair mats or tree roots—they simply burn a tiny pinhole through the center and leave 90% of the clog behind.',
  },
  {
    category: 'limitations',
    categoryLabel: 'Limitations & Safety',
    question: 'Is hydro jetting safe for older pipes in historic Boise homes?',
    answer:
      'Hydro jetting generates 3,000 to 4,000 PSI of water pressure. In structurally sound pipes (PVC, ABS, solid cast iron, and intact clay), it is the premier method for pipe restoration. However, it must NOT be used on crumbling Orangeburg (tar paper) pipe or severely fractured clay lines. Boise Drain Service always verifies pipe integrity before high-pressure jetting.',
  },
  {
    category: 'limitations',
    categoryLabel: 'Limitations & Safety',
    question: 'When does a drain need physical repair rather than just cleaning?',
    answer:
      'Cleaning removes obstructions (grease, roots, hair, wipes) from inside an intact pipe. If our camera reveals physical structural damage—such as a collapsed pipe wall, a sheared joint from soil settling, a severe belly holding sediment, or missing cast iron inverts—cleaning will only provide short-term relief until targeted spot excavation or trenchless repair is performed.',
  },
];

// Flat list for schema and general components
export const generalFaqs = detailedFaqs.map((f) => ({
  question: f.question,
  answer: f.answer,
}));
