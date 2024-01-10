/* ------------   Arrays for components Part ------------ */


/* ----- Sentence Structure ---- 
`In the spirit of ${Scientist}, let's ${Verb} ${Adverb} 
with a ${Adjective} approach. Embrace the ${Noun} and work 
towards unlocking the ${Object}!` */

const scientists = [
    "Einstein",
    "Newton",
    "Curie",
    "Hawking",
    "Tesla",
    "Galileo",
    "Aristotle",
    "Pythagoras",
    "Turing"
  ];
  
const nouns = [
    "equation",
    "experiment",
    "scientist",
    "variable",
    "quantum realm",
    "algorithm",
    "solution",
];
  
  const adverbs = [
    "unpredictably",
    "diligently",
    "creatively",
    "methodically",
    "innovatively",
    "curiously",
  ];
  
  const verbs = [
    "solve",
    "embrace",
    "channel",
    "adapt",
    "perceive",
    "accelerate",
    "unlock",
  ];
  
  const adjectives = [
    "successful",
    "productive",
    "extraordinary",
    "mysterious",
    "constant",
    "innovative",
  ];
  
  const objects = [
    "challenge",
    "day",
    "experiment",
    "solution",
    "equation",
    "orbit",
    "goal",
  ];

  /* ----- Genchanting Artifacts ---- */

  const artifacts = {
    Einstein: [
      "Fortune-Resonating Quantum Gizmo",
      "Serendipitous Space-Time Whistle",
      "Photon-Attracting Flux Crystal",
      "Luck-Defying Relativity Watch",
      "E=mc^2 Serendipity Infuser",
    ],
    Newton: [
      "Gravity-Defying Luck Stirrer",
      "Calculus-Enhanced Luck Compass",
      "Prism Spectrum Luck Prism",
      "Fortuitous Laws of Motion Dice",
      "Reflecting Telescope Luck Amulet",
    ],
    Curie: [
      "Radioactive Elixir of Fortune",
      "Pitchblende Luck Gemstone",
      "Gamma Ray Fortune Bracelet",
      "Curie's Lucky Law Crystal Ball",
      "Radiant Radium Fortune Locket",
    ],
    Hawking: [
      "Luck-Inducing Hawking Umbrella",
      "Quantum Singularity Luck Talisman",
      "Black Hole Microscope of Good Fortune",
      "Theoretical Luck Cosmology Token",
      "Hawking's Brief History of Good Fortune Book",
    ],
    Tesla: [
      "Tesla's Luck Coil Cufflinks",
      "Alternating Current Fortune Tie Clip",
      "Wireless Transmission Fortune Hat",
      "Nikola's Resonance Luck Harmonica",
      "Electric Ray Enlightenment Charm",
    ],
    Galileo: [
      "Celestial Luck Kaleidoscope",
      "Heliocentric Luck Sundial Watch",
      "Telescope Monopoly Luck Board",
      "Galilean Inclined Plane Lucky Slippers",
      "Galaxy-Studded Luck Star Map Blanket",
    ],
    Aristotle: [
      "Golden Mean Luck Compass",
      "Substance Theory Aroma of Luck",
      "Aristotelian Physics Fortune Yo-Yo",
      "Alembic Luck Elixir Mixer",
      "Logic and Ethics Luck Chess Set",
    ],
    Pythagoras: [
      "Harmonic Triangle Luck Pendant",
      "Pythagorean Luck Cup with Smart Pour",
      "Musical Lyre Fortune Air Freshener",
      "Golden Ratio Luck Calipers",
      "Tetractys Luck Fidget Spinner",
    ],
    Turing: [
      "Enigma Codebreaker Luck Ring",
      "Turing Machine Fortune Cube",
      "Colossus Computer Mousepad of Luck",
      "Binary Code Luck Espresso Machine",
      "Halting Problem Fortune Decision Dice",
    ],
  };

  /* --------- Programming Part ---------- */

  // Random Function
  const makeRandom = (num) => {
    let random = Math.floor(Math.random() * num);
    return random;
    // console.log(random);
  }

  // Random in Array
  const randomArray = () => {
    const sci = makeRandom(scientists.length); // assign variable declaration. 
    const noun = makeRandom(nouns.length);
    const adv = makeRandom(adverbs.length);
    const verb = makeRandom(verbs.length);
    const adj = makeRandom(adjectives.length);
    const obj = makeRandom(objects.length);

    return [sci, noun, adv, verb, adj, obj]; // replace x, x, x; ==> [x, x, x];
  }

  // randomArray(); // unused function calls

  // Random Artifact
  const randomArtifact = (scientist) => { // assign parameter for access function furthur. 
    let artArray = artifacts[scientist]; // `${scientists[sci]} can make to be declared as variable furthur.
    let randomArt = makeRandom(artArray.length);
    
    return artArray[randomArt]; 
  }
  
  // randomArtifact(); // unused function calls

  // Generate Message
  const generateMessage = () => {
    const [sci, noun, adv, verb, adj, obj] = randomArray();
    const scientist = scientists[sci];
    const artifact = randomArtifact(scientist);
  
    const message = `---------------------------- Message ----------------------------------
    In the spirit of "${scientists[sci]}", let's ${verbs[verb]} ${adverbs[adv]} 
    with a ${adjectives[adj]} approach. Embrace the ${nouns[noun]} and work 
    towards unlocking the ${objects[obj]}!
    ------------------------------------------------------------------------
    ----------------------------- Artifact ---------------------------------
    ${artifact}`
  
    console.log(message);
  }

  // Call the function to generate and display the message
  generateMessage();
