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

  // Function to generate a random integer up to a given limit
  const getRandomIndex = (array) => { // for assign parameter with array
    return Math.floor(Math.random() * array.length); // can be access to find the array length within operation
  }

  // Function to get a random set of indices for arrays
  const getRandomIndices = () => {
    const sciIndex = getRandomIndex(scientists); 
    const nounIndex = getRandomIndex(nouns);
    const advIndex = getRandomIndex(adverbs);
    const verbIndex = getRandomIndex(verbs);
    const adjIndex = getRandomIndex(adjectives);
    const objIndex = getRandomIndex(objects);

    // Return an array of random indices
    return [sciIndex, nounIndex, advIndex, verbIndex, adjIndex, objIndex]; 
  }

  // Function to retrieve a random artifact for a given scientist
  const getRandomArtifact = (scientist) => { 
    let scitistArtifacts = artifacts[scientist]; 
    let randomArtifactIndex = getRandomIndex(scitistArtifacts);
    
    // Return a random artifact for the given scientist
    return scitistArtifacts[randomArtifactIndex]; 
  }

  // Function to generate and display a message
  const generateMessage = () => {
    // Get a set of random indices
    const [sciIndex, nounIndex, advIndex, verbIndex, adjIndex, objIndex] = getRandomIndices();

    // Get the corresponding scientist and artifact
    const scientist = scientists[sciIndex];
    const artifact = getRandomArtifact(scientist);
  
    // Construct and Display the message and ACSII art
    console.log("  +---------------------------------------------------------------+")
    console.log("|      _____  _                            ______  _               |")
    console.log("|     |  _  || |                           |  _  \\(_)              |")
    console.log("|     | | | || |_  _   _  _ __ ___  ______ | | | | _   ___  ___    |")
    console.log("|     | | | || __|| | | || '_ ` _ \\|______|| | | || | / __|/ _ \\   |")
    console.log("|     \\ \\/' /| |_ | |_| || | | | | |       | |/ / | || (__ | __/   |")
    console.log("|      \\_/\\_\\ \\__| \\__,_||_| |_| |_|       |___/  |_| \\___|\\___|   |")
    console.log("|                                                                  |")
    console.log("|                                                                  |")
    console.log(`|    In the spirit of "${scientists[sciIndex]}", let's ${verbs[verbIndex]} ${adverbs[advIndex]} with a `)
    console.log(`|    ${adjectives[adjIndex]} approach. Embrace the ${nouns[nounIndex]} and work      `)
    console.log(`|    towards unlocking the ${objects[objIndex]}!                            `)
    console.log("|                                                                ")
    console.log("|                                                                 ")
    console.log("|                       Artifact for Today!                      ")
    console.log(`|               (${artifact})             `)
    console.log("|                                                                  |")
    console.log("|                         +------+                                 |")
    console.log("|                         |      |                                 |")
    console.log("|                         |  /\\_/|                                 |")
    console.log("|                         | ( o.o )                                |")
    console.log("|                         |  > ^ <                                 |")
    console.log("|                         +------+                                 |")
    console.log("  +---------------------------------------------------------------+`")
  }

  // Call the function to generate and display the message
  generateMessage();
