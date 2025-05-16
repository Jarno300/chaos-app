// Get DOM elements
const chaosContainer = document.getElementById("chaos-container");
const chaosElements = document.getElementById("chaos-elements");
const chaosTitle = document.getElementById("chaotic-title");
const triggerButton = document.getElementById("trigger-chaos");
const resetButton = document.getElementById("reset-chaos");

// Random values functions
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `hsl(${randomNumber(0, 360)}, ${randomNumber(50, 100)}%, ${randomNumber(
    40,
    70
  )}%)`;
const randomPos = (max) => `${randomNumber(0, max)}px`;
const randomSize = () => `${randomNumber(20, 150)}px`;
const randomRotate = () => `rotate(${randomNumber(0, 360)}deg)`;
const randomText = () => {
  const words = [
    "CHAOS",
    "ERROR",
    "MALFUNCTION",
    "GLITCH",
    "VOID",
    "RANDOM",
    "DISORDER",
    "ENTROPY",
    "404",
    "SYSTEM CRASH",
  ];
  return words[randomNumber(0, words.length - 1)];
};

// Multi-language character sets
const charSets = {
  // Russian Cyrillic
  russian: "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя",
  // Chinese
  chinese:
    "的一是不了人我在有他这为之大来以个中上们到说国和地也子时道出而要于就下得可你年生自会那后能对着事其里所去行过家十用发天如然作方成者多日都三小于心学样年前看中同经面又门些主立已时利二力进等她看动头应问政走很气最得通并提直党程展五果把似整革使变好金强点老将公心由问只现朝觉很件却知被听电费别打界重水住今据曾感界接何布百平身语认回见远表斯马完少更较",
  // Japanese
  japanese:
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン",
  // Hebrew
  hebrew: "אבגדהוזחטיכךלמםנןסעפףצץקרשת",
  // Arabic
  arabic: "ابتثجحخدذرزسشصضطظعغفقكلمنهويءآأؤإئ",
  // Thai
  thai: "กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืุูเแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛",
  // Korean
  korean:
    "가나다라마바사아자차카타파하거너더러머버서어저처커터퍼허기니디리미비시이지치키티피히",
  // Greek
  greek: "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω",
  // Symbols and special characters
  symbols:
    "☠☢☣⚠⚡♠♣♥♦♤♧♡♢♔♕♚♛⚀⚁⚂⚃⚄⚅✓✗✘☑☒✔✖❓❗❕❔⁉‼⚛☯☮☪☦☧☨✝✞✡★☆✦✧⚝✫✬✭✮✯❇❈❅❆❄︎❀✿✾✽✼✻✺✹✸✷✶✵✴✳✲✱✰⁂❧☙♡♥❤❣❥❦☙❦❧၊၈၇၆၄၃",
};

// Get random character from a specific script
const getRandomChar = (script) => {
  const chars = charSets[script];
  return chars.charAt(randomNumber(0, chars.length - 1));
};

// Get random character from any script
const getRandomMultiChar = () => {
  const scripts = Object.keys(charSets);
  const randomScript = scripts[randomNumber(0, scripts.length - 1)];
  return getRandomChar(randomScript);
};

// Get random string of multi-language characters
const getRandomMultiString = (length = 3) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += getRandomMultiChar();
  }
  return result;
};

// Emoji set for chaos
const chaosEmojis = [
  "🤪",
  "💥",
  "🔥",
  "⚡",
  "🌀",
  "🎭",
  "👾",
  "🤖",
  "👽",
  "🎯",
  "🎪",
  "🧠",
  "👁️",
  "🌈",
  "🚨",
];
const randomEmoji = () => chaosEmojis[randomNumber(0, chaosEmojis.length - 1)];

// Audio chaos
const createChaosSound = () => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // Create oscillator
  const oscillator = audioContext.createOscillator();
  oscillator.type = ["sine", "square", "sawtooth", "triangle"][
    randomNumber(0, 3)
  ];
  oscillator.frequency.setValueAtTime(
    randomNumber(100, 1000),
    audioContext.currentTime
  );

  // Create gain node for volume control
  const gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    0.00001,
    audioContext.currentTime + randomNumber(1, 3) / 10
  );

  // Connect nodes
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  // Start and stop
  oscillator.start();
  setTimeout(() => oscillator.stop(), randomNumber(100, 300));
};

// Chaos elements array
let chaosElementsArray = [];
let chaosInterval;
let intensityLevel = 0;

// Create a new chaos element
const createChaosElement = () => {
  // Expanded element types
  const elementType = randomNumber(1, 7);
  const element = document.createElement("div");

  switch (elementType) {
    case 1: // Circular blob
      element.className = "chaos-element";
      element.style.width = randomSize();
      element.style.height = element.style.width;
      element.style.backgroundColor = randomColor();
      element.style.left = randomPos(window.innerWidth - 100);
      element.style.top = randomPos(window.innerHeight - 100);
      element.style.opacity = `${randomNumber(3, 8) / 10}`;
      element.style.filter = `blur(${randomNumber(0, 5)}px)`;
      element.style.animationDuration = `${randomNumber(2, 8)}s`;
      break;
    case 2: // Text
      element.className = "text-element";
      element.textContent = randomText();
      element.style.color = randomColor();
      element.style.fontSize = `${randomNumber(10, 60)}px`;
      element.style.left = randomPos(window.innerWidth - 150);
      element.style.top = randomPos(window.innerHeight - 150);
      element.style.fontFamily = [
        "Comic Sans MS",
        "Impact",
        "Arial",
        "Times New Roman",
        "Courier New",
      ][randomNumber(0, 4)];
      element.style.transform = randomRotate();
      element.style.textShadow = `0 0 ${randomNumber(
        5,
        15
      )}px ${randomColor()}`;
      break;
    case 3: // Emoji
      element.className = "text-element";
      element.textContent = randomEmoji();
      element.style.fontSize = `${randomNumber(20, 100)}px`;
      element.style.left = randomPos(window.innerWidth - 100);
      element.style.top = randomPos(window.innerHeight - 100);
      break;
    case 4: // Shape
      element.className = "shape";
      element.style.width = randomSize();
      element.style.height = randomSize();
      element.style.left = randomPos(window.innerWidth - 150);
      element.style.top = randomPos(window.innerHeight - 150);
      break;
    case 5: // Image from placeholder (chaos-looking pics)
      element.className = "chaos-element";
      element.style.backgroundImage = `url(https://picsum.photos/${randomNumber(
        100,
        300
      )}/${randomNumber(100, 300)}?random=${Date.now()})`;
      element.style.backgroundSize = "cover";
      element.style.width = randomSize();
      element.style.height = element.style.width;
      element.style.left = randomPos(window.innerWidth - 150);
      element.style.top = randomPos(window.innerHeight - 150);
      break;
    case 6: // Random script character
      element.className = "text-element";
      // Get random script
      const scripts = Object.keys(charSets);
      const randomScript = scripts[randomNumber(0, scripts.length - 1)];
      element.textContent = getRandomChar(randomScript);
      element.style.color = randomColor();
      element.style.fontSize = `${randomNumber(30, 120)}px`;
      element.style.left = randomPos(window.innerWidth - 100);
      element.style.top = randomPos(window.innerHeight - 100);
      element.style.fontWeight = "bold";
      element.style.textShadow = `0 0 ${randomNumber(
        5,
        15
      )}px ${randomColor()}`;
      break;
    case 7: // Multi-script string
      element.className = "text-element";
      element.textContent = getRandomMultiString(randomNumber(1, 5));
      element.style.color = randomColor();
      element.style.fontSize = `${randomNumber(20, 80)}px`;
      element.style.left = randomPos(window.innerWidth - 100);
      element.style.top = randomPos(window.innerHeight - 100);
      element.style.fontWeight = "bold";
      element.style.letterSpacing = `${randomNumber(-5, 10)}px`;
      element.style.textShadow = `0 0 ${randomNumber(
        5,
        15
      )}px ${randomColor()}`;
      break;
  }

  // Add random effects to some elements
  if (randomNumber(1, 3) === 1) {
    element.classList.add(["invert", "glitch", "shake"][randomNumber(0, 2)]);
  }

  chaosElements.appendChild(element);
  chaosElementsArray.push(element);

  // Self-destruct after random time
  setTimeout(() => {
    if (chaosElements.contains(element)) {
      chaosElements.removeChild(element);
      chaosElementsArray = chaosElementsArray.filter((el) => el !== element);
    }
  }, randomNumber(2000, 8000));
};

// Create characters rain
const createCharacterRain = () => {
  const numChars = randomNumber(10, 30);
  const scriptKeys = Object.keys(charSets);

  // Select a random script for this rain
  const selectedScript = scriptKeys[randomNumber(0, scriptKeys.length - 1)];

  for (let i = 0; i < numChars; i++) {
    setTimeout(() => {
      const char = document.createElement("div");
      char.className = "text-element";
      char.textContent = getRandomChar(selectedScript);
      char.style.position = "absolute";
      char.style.color = randomColor();
      char.style.fontSize = `${randomNumber(15, 40)}px`;
      char.style.left = `${randomNumber(0, window.innerWidth)}px`;
      char.style.top = "-50px";
      char.style.opacity = `${randomNumber(5, 10) / 10}`;
      char.style.zIndex = randomNumber(100, 900);
      char.style.textShadow = `0 0 ${randomNumber(3, 8)}px ${randomColor()}`;
      char.style.transform = `rotate(${randomNumber(-30, 30)}deg)`;
      char.style.transition = `top ${randomNumber(
        2,
        8
      )}s linear, opacity 2s ease-in`;

      chaosElements.appendChild(char);

      // Start animation after a moment (allows transition to work)
      setTimeout(() => {
        char.style.top = `${window.innerHeight + 50}px`;
        char.style.opacity = "0";
      }, 50);

      // Remove after animation completes
      setTimeout(() => {
        if (chaosElements.contains(char)) {
          chaosElements.removeChild(char);
        }
      }, 8000);
    }, i * randomNumber(50, 200));
  }
};

// Create floating script text
const createFloatingScriptText = () => {
  const floatingText = document.createElement("div");
  floatingText.className = "text-element";

  // Choose random script and create a string of characters
  const scripts = Object.keys(charSets);
  const randomScript = scripts[randomNumber(0, scripts.length - 1)];

  // Create a string of 2-5 characters from the selected script
  let textContent = "";
  const charCount = randomNumber(2, 5);
  for (let i = 0; i < charCount; i++) {
    textContent += getRandomChar(randomScript);
  }

  floatingText.textContent = textContent;
  floatingText.style.color = randomColor();
  floatingText.style.fontSize = `${randomNumber(20, 80)}px`;
  floatingText.style.left = randomPos(window.innerWidth - 150);
  floatingText.style.top = randomPos(window.innerHeight - 150);
  floatingText.style.fontWeight = "bold";
  floatingText.style.opacity = `${randomNumber(7, 10) / 10}`;
  floatingText.style.textShadow = `0 0 ${randomNumber(
    5,
    15
  )}px ${randomColor()}`;

  // Add unique animation
  const animations = ["float", "rotate", "glitch", "shake", "invert"];
  const randomAnim = animations[randomNumber(0, animations.length - 1)];
  floatingText.classList.add(randomAnim);

  chaosElements.appendChild(floatingText);
  chaosElementsArray.push(floatingText);

  // Self-destruct
  setTimeout(() => {
    if (chaosElements.contains(floatingText)) {
      chaosElements.removeChild(floatingText);
      chaosElementsArray = chaosElementsArray.filter(
        (el) => el !== floatingText
      );
    }
  }, randomNumber(3000, 10000));
};

// Random DOM manipulation
const randomDomChaos = () => {
  const chaosActions = [
    // Change title
    () => {
      chaosTitle.style.color = randomColor();
      chaosTitle.style.fontSize = `${randomNumber(30, 80)}px`;
      chaosTitle.style.filter = `blur(${randomNumber(0, 4)}px)`;
      chaosTitle.style.transform = `translate(-50%, -50%) rotate(${randomNumber(
        -20,
        20
      )}deg)`;

      // Chance to replace title with random script character
      if (randomNumber(1, 10) === 1) {
        chaosTitle.textContent = getRandomMultiString(randomNumber(1, 3));
        setTimeout(() => {
          chaosTitle.textContent = "CHAOS";
        }, randomNumber(1000, 3000));
      }
    },
    // Change background
    () => {
      document.body.style.backgroundColor = randomColor();
      setTimeout(() => {
        document.body.style.backgroundColor = "#000";
      }, 500);
    },
    // Shake page
    () => {
      document.body.classList.add("shake");
      setTimeout(() => {
        document.body.classList.remove("shake");
      }, 1000);
    },
    // Change existing elements
    () => {
      if (chaosElementsArray.length > 0) {
        const randomEl =
          chaosElementsArray[randomNumber(0, chaosElementsArray.length - 1)];
        randomEl.style.transform = `scale(${
          randomNumber(5, 20) / 10
        }) ${randomRotate()}`;
        setTimeout(() => {
          randomEl.style.transform = "";
        }, 2000);
      }
    },
    // Invert colors temporarily
    () => {
      document.body.style.filter = "invert(1)";
      setTimeout(() => {
        document.body.style.filter = "";
      }, 500);
    },
    // Change cursor
    () => {
      const cursors = [
        "none",
        "crosshair",
        "grab",
        "zoom-in",
        "cell",
        "not-allowed",
        "wait",
        "help",
      ];
      document.body.style.cursor = cursors[randomNumber(0, cursors.length - 1)];
      setTimeout(() => {
        document.body.style.cursor = "default";
      }, 2000);
    },
    // Character rain
    () => {
      createCharacterRain();
    },
    // Floating script text
    () => {
      createFloatingScriptText();
    },
    // Character explosion
    () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const numChars = randomNumber(10, 30);

      for (let i = 0; i < numChars; i++) {
        const char = document.createElement("div");
        char.className = "text-element";
        char.textContent = getRandomMultiChar();
        char.style.position = "absolute";
        char.style.color = randomColor();
        char.style.fontSize = `${randomNumber(20, 50)}px`;
        char.style.left = `${centerX}px`;
        char.style.top = `${centerY}px`;
        char.style.opacity = "1";
        char.style.zIndex = "1000";
        char.style.transition = "all 2s cubic-bezier(0.165, 0.84, 0.44, 1)";

        chaosElements.appendChild(char);

        // Create explosion effect
        setTimeout(() => {
          const angle = (i / numChars) * 360;
          const distance = randomNumber(100, 400);
          const x = centerX + distance * Math.cos((angle * Math.PI) / 180);
          const y = centerY + distance * Math.sin((angle * Math.PI) / 180);

          char.style.left = `${x}px`;
          char.style.top = `${y}px`;
          char.style.opacity = "0";
        }, 50);

        // Remove after animation
        setTimeout(() => {
          if (chaosElements.contains(char)) {
            chaosElements.removeChild(char);
          }
        }, 2000);
      }
    },
  ];

  // Execute random action
  chaosActions[randomNumber(0, chaosActions.length - 1)]();

  // Create chaos sound sometimes
  if (randomNumber(1, 5) === 1) {
    createChaosSound();
  }
};

// Intensity increases over time
const increaseIntensity = () => {
  intensityLevel = Math.min(intensityLevel + 1, 10);
  return Math.max(100, 1000 - intensityLevel * 100);
};

// Start chaos mode
const startChaos = () => {
  if (chaosInterval) return; // Already running

  // Reset intensity
  intensityLevel = 0;

  // Add chaos class to body
  document.body.classList.add("chaos-mode");

  // Create initial elements
  for (let i = 0; i < 15; i++) {
    createChaosElement();
  }

  // Initial character rain
  createCharacterRain();

  // Start chaos intervals
  chaosInterval = setInterval(() => {
    // Create new element
    if (chaosElementsArray.length < 50 + intensityLevel * 5) {
      createChaosElement();
    }

    // Random DOM chaos
    randomDomChaos();

    // Adjust interval time to increase intensity
    clearInterval(chaosInterval);
    chaosInterval = setInterval(startChaos, increaseIntensity());
  }, 1000);
};

// Reset chaos
const resetChaos = () => {
  clearInterval(chaosInterval);
  chaosInterval = null;

  // Remove all elements
  while (chaosElements.firstChild) {
    chaosElements.removeChild(chaosElements.firstChild);
  }

  chaosElementsArray = [];

  // Reset styles
  document.body.classList.remove("chaos-mode");
  document.body.style.filter = "";
  document.body.style.cursor = "default";
  document.body.style.backgroundColor = "#000";
  document.body.classList.remove("shake");

  // Reset title
  chaosTitle.textContent = "CHAOS";
  chaosTitle.style.color = "#ff00ff";
  chaosTitle.style.fontSize = "5rem";
  chaosTitle.style.filter = "";
  chaosTitle.style.transform = "translate(-50%, -50%) rotate(0deg)";
};

// Event listeners
triggerButton.addEventListener("click", startChaos);
resetButton.addEventListener("click", resetChaos);

// Some random chaos when mouse moves
document.addEventListener("mousemove", (e) => {
  if (chaosInterval && randomNumber(1, 50) === 1) {
    const smallChaos = document.createElement("div");

    // Sometimes spawn multi-script characters instead of circles
    if (randomNumber(1, 3) === 1) {
      smallChaos.className = "text-element";
      smallChaos.textContent = getRandomMultiChar();
      smallChaos.style.fontSize = `${randomNumber(15, 30)}px`;
      smallChaos.style.color = randomColor();
    } else {
      smallChaos.className = "chaos-element";
      smallChaos.style.width = `${randomNumber(5, 20)}px`;
      smallChaos.style.height = smallChaos.style.width;
      smallChaos.style.backgroundColor = randomColor();
    }

    smallChaos.style.left = `${e.clientX}px`;
    smallChaos.style.top = `${e.clientY}px`;
    smallChaos.style.opacity = "0.7";

    chaosElements.appendChild(smallChaos);

    setTimeout(() => {
      if (chaosElements.contains(smallChaos)) {
        chaosElements.removeChild(smallChaos);
      }
    }, 2000);
  }
});

// Some chaos when clicking anywhere
document.addEventListener("click", (e) => {
  if (chaosInterval && e.target !== triggerButton && e.target !== resetButton) {
    for (let i = 0; i < 8; i++) {
      const clickChaos = document.createElement("div");

      // Mix of emojis and multi-script characters
      if (randomNumber(1, 2) === 1) {
        clickChaos.className = "text-element";
        clickChaos.textContent = randomEmoji();
      } else {
        clickChaos.className = "text-element";
        clickChaos.textContent = getRandomMultiChar();
        clickChaos.style.color = randomColor();
      }

      clickChaos.style.fontSize = `${randomNumber(20, 40)}px`;
      clickChaos.style.left = `${e.clientX + randomNumber(-20, 20)}px`;
      clickChaos.style.top = `${e.clientY + randomNumber(-20, 20)}px`;
      clickChaos.style.transform = randomRotate();

      chaosElements.appendChild(clickChaos);

      setTimeout(() => {
        if (chaosElements.contains(clickChaos)) {
          chaosElements.removeChild(clickChaos);
        }
      }, 1000);
    }
  }
});
