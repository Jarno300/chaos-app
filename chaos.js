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
    "UNSTABLE",
    "MELTDOWN",
    "CORRUPTED",
    "BROKEN",
    "OVERLOAD",
  ];
  return words[randomNumber(0, words.length - 1)];
};

// Image APIs for random images
const imageAPIs = [
  // Random images from Picsum
  () =>
    `https://picsum.photos/${randomNumber(100, 300)}/${randomNumber(
      100,
      300
    )}?random=${Date.now()}`,
  // Unsplash random
  () =>
    `https://source.unsplash.com/random/${randomNumber(
      100,
      300
    )}x${randomNumber(100, 300)}?chaos&sig=${Date.now()}`,
  // Lorem Flickr
  () =>
    `https://loremflickr.com/${randomNumber(100, 300)}/${randomNumber(
      100,
      300
    )}?random=${Date.now()}`,
  // Placeholder (colorful)
  () =>
    `https://via.placeholder.com/${randomNumber(100, 300)}x${randomNumber(
      100,
      300
    )}/${randomColor().slice(1)}/${randomColor().slice(
      1
    )}?text=${getRandomMultiChar()}`,
  // Random fox
  () => `https://randomfox.ca/images/${randomNumber(1, 120)}.jpg`,
  // Random dog
  () =>
    `https://placedog.net/${randomNumber(200, 400)}/${randomNumber(
      200,
      400
    )}?random=${Date.now()}`,
];

// Get random image URL from one of the image APIs
const getRandomImageUrl = () => {
  const randomAPI = imageAPIs[randomNumber(0, imageAPIs.length - 1)];
  return randomAPI();
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
  "🦄",
  "🌋",
  "🎡",
  "🎢",
  "🌠",
  "👺",
  "👹",
  "🤡",
  "💀",
  "☠️",
  "👻",
  "👿",
  "😵",
  "🥴",
  "🤯",
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
let backgroundEffectsInterval;
let currentBackgroundEffect = null;

// Background effects
const backgroundEffects = {
  waves: () => {
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    canvas.style.opacity = "0.7";
    canvas.style.mixBlendMode = "screen";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let time = 0;

    const animate = () => {
      if (canvas.parentNode !== document.body) return;

      time += 0.05;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `hsl(${(time * 20 + i * 70) % 360}, 100%, 50%)`;
        ctx.lineWidth = randomNumber(3, 8);

        for (let x = 0; x < canvas.width; x += 10) {
          const y =
            Math.sin(x * 0.01 + time + i) * 50 +
            Math.sin(x * 0.02 + time * 1.5) * 30 +
            canvas.height / 2 +
            i * 40;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    animate();
    return canvas;
  },

  geometricPatterns: () => {
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    canvas.style.opacity = "0.6";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let time = 0;

    const animate = () => {
      if (canvas.parentNode !== document.body) return;

      time += 0.02;
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < 10; i++) {
        const size = 100 + Math.sin(time + i * 0.3) * 50;
        const x = centerX + Math.sin(time * 0.7 + i) * 200;
        const y = centerY + Math.cos(time * 0.5 + i) * 200;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(time * 0.5 + (i * Math.PI) / 5);

        ctx.fillStyle = `hsl(${(time * 30 + i * 30) % 360}, 100%, 50%)`;

        // Random shape
        const shapeType = (i + Math.floor(time)) % 3;

        if (shapeType === 0) {
          // Square
          ctx.fillRect(-size / 2, -size / 2, size, size);
        } else if (shapeType === 1) {
          // Triangle
          ctx.beginPath();
          ctx.moveTo(0, -size / 2);
          ctx.lineTo(-size / 2, size / 2);
          ctx.lineTo(size / 2, size / 2);
          ctx.closePath();
          ctx.fill();
        } else {
          // Circle
          ctx.beginPath();
          ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      requestAnimationFrame(animate);
    };

    animate();
    return canvas;
  },

  gradientPulse: () => {
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let time = 0;

    const animate = () => {
      if (canvas.parentNode !== document.body) return;

      time += 0.01;

      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      const hue1 = (time * 20) % 360;
      const hue2 = (hue1 + 60) % 360;
      const hue3 = (hue1 + 180) % 360;

      gradient.addColorStop(0, `hsl(${hue1}, 100%, 50%)`);
      gradient.addColorStop(0.5, `hsl(${hue2}, 100%, 50%)`);
      gradient.addColorStop(1, `hsl(${hue3}, 100%, 50%)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add noise pattern
      for (let i = 0; i < 100; i++) {
        ctx.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.1})`;
        ctx.fillRect(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 40 + 10,
          Math.random() * 40 + 10
        );
      }

      requestAnimationFrame(animate);
    };

    animate();
    return canvas;
  },

  matrixRain: () => {
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const columns = Math.floor(canvas.width / 20);
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const animate = () => {
      if (canvas.parentNode !== document.body) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = getRandomMultiChar();
        const colorHue = (i * 5) % 360;
        ctx.fillStyle = `hsla(${colorHue}, 100%, 50%, 0.8)`;
        ctx.font = "20px monospace";
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      requestAnimationFrame(animate);
    };

    animate();
    return canvas;
  },
};

// Start a random background effect
const startRandomBackgroundEffect = () => {
  stopCurrentBackgroundEffect();

  const effects = Object.keys(backgroundEffects);
  const randomEffect = effects[randomNumber(0, effects.length - 1)];

  currentBackgroundEffect = backgroundEffects[randomEffect]();

  // Change background effect periodically
  setTimeout(() => {
    if (intensityLevel > 0) {
      startRandomBackgroundEffect();
    }
  }, randomNumber(5000, 15000));
};

// Stop current background effect
const stopCurrentBackgroundEffect = () => {
  if (currentBackgroundEffect && currentBackgroundEffect.parentNode) {
    currentBackgroundEffect.parentNode.removeChild(currentBackgroundEffect);
  }
  currentBackgroundEffect = null;
};

// Create a new chaos element
const createChaosElement = () => {
  // Expanded element types with more variety
  const elementType = randomNumber(1, 10);
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
    case 5: // Random image from multiple APIs
      element.className = "chaos-element";
      element.style.backgroundImage = `url(${getRandomImageUrl()})`;
      element.style.backgroundSize = "cover";
      element.style.width = randomSize();
      element.style.height = element.style.width;
      element.style.left = randomPos(window.innerWidth - 150);
      element.style.top = randomPos(window.innerHeight - 150);
      element.style.borderRadius = randomNumber(0, 100) + "%";
      element.style.transform = randomRotate();
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
    case 8: // Animated GIFs
      element.className = "chaos-element";
      // Use some fun animated GIFs
      const gifUrls = [
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjg3eHlrdXY5ZG8xb2VwM3FqMWR2aWVicnU5emZiM2NtbnYwcXFoNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPsx2VAYAgEHC12/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG03YTh0Nnkzamk3aDhkdHg5dWQ3Mm15YXU0MXI1OGVucnFpdzR1eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41YmQjOz9LE2dxpK/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHp0bHJwaTl0bjVwZ244NzJkbWkxcnR2cTlzc3h3ZXRsN2VyZXozbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41lFw057lAJfbBRe/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnd2ZGx2ajdpcWt3anA5a2xpd2dobG9jZGxpaWxoZ2hienQ0eWR5NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRtW4zppWWjrsPu/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnB5bjh0eTl6YmJiOTFwMXFvbWR5bTdzMTJ6OWNvMmtpdHhtd3ZxNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aCQjeGXtWcEGjLO/giphy.gif",
      ];
      element.style.backgroundImage = `url(${
        gifUrls[randomNumber(0, gifUrls.length - 1)]
      })`;
      element.style.backgroundSize = "cover";
      element.style.width = randomSize();
      element.style.height = element.style.width;
      element.style.left = randomPos(window.innerWidth - 150);
      element.style.top = randomPos(window.innerHeight - 150);
      element.style.borderRadius = randomNumber(0, 100) + "%";
      break;
    case 9: // Glitchy photo
      element.className = "chaos-element glitch";
      element.style.backgroundImage = `url(${getRandomImageUrl()})`;
      element.style.backgroundSize = "cover";
      element.style.width = randomSize();
      element.style.height = element.style.width;
      element.style.left = randomPos(window.innerWidth - 150);
      element.style.top = randomPos(window.innerHeight - 150);
      element.style.clipPath = `polygon(${randomNumber(0, 20)}% ${randomNumber(
        0,
        20
      )}%, ${randomNumber(80, 100)}% ${randomNumber(0, 20)}%, ${randomNumber(
        80,
        100
      )}% ${randomNumber(80, 100)}%, ${randomNumber(0, 20)}% ${randomNumber(
        80,
        100
      )}%)`;
      break;
    case 10: // Floating meme
      element.className = "chaos-element";
      // Intentionally use popular meme image URLs
      const memeUrls = [
        "https://i.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg",
        "https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg",
        "https://i.kym-cdn.com/entries/icons/original/000/026/489/crying.jpg",
        "https://i.kym-cdn.com/entries/icons/original/000/022/940/mockingspongebobbb.jpg",
        "https://i.kym-cdn.com/entries/icons/original/000/021/311/free.jpg",
      ];
      element.style.backgroundImage = `url(${
        memeUrls[randomNumber(0, memeUrls.length - 1)]
      })`;
      element.style.backgroundSize = "cover";
      element.style.width = randomSize();
      element.style.height = element.style.width;
      element.style.left = randomPos(window.innerWidth - 150);
      element.style.top = randomPos(window.innerHeight - 150);
      element.style.transform = randomRotate();
      break;
  }

  // Add random effects to some elements
  if (randomNumber(1, 3) === 1) {
    element.classList.add(
      ["invert", "glitch", "shake", "spin", "pulse"][randomNumber(0, 4)]
    );
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

// Modified startChaos function to include our new background effects
const startChaos = () => {
  if (chaosInterval) clearInterval(chaosInterval);

  // Initialize or increase intensity
  intensityLevel = Math.min(intensityLevel + 1, 5);
  document.body.classList.add("chaos-mode");

  // Start background effects
  startRandomBackgroundEffect();

  // Create more elements based on intensity level
  const creationRate = Math.max(500 - intensityLevel * 100, 100);
  chaosInterval = setInterval(() => {
    for (let i = 0; i < intensityLevel; i++) {
      createChaosElement();

      // Add sound at higher intensities
      if (intensityLevel > 2 && randomNumber(1, 5) === 1) {
        createChaosSound();
      }
    }

    // Random DOM modifications at higher intensity levels
    if (intensityLevel > 3 && randomNumber(1, 10) === 1) {
      randomDomChaos();
    }

    // Create special effects at higher intensities
    if (intensityLevel > 2) {
      if (randomNumber(1, 20) === 1) createCharacterRain();
      if (randomNumber(1, 15) === 1) createFloatingScriptText();
    }
  }, creationRate);
};

// Modified resetChaos function to properly clean up all effects
const resetChaos = () => {
  if (chaosInterval) clearInterval(chaosInterval);
  chaosInterval = null;

  // Clear background effects
  stopCurrentBackgroundEffect();

  // Remove all chaos elements
  while (chaosElements.firstChild) {
    chaosElements.removeChild(chaosElements.firstChild);
  }
  chaosElementsArray = [];

  // Reset title
  const titles = document.querySelectorAll("#chaotic-title");
  titles.forEach((title) => {
    title.style.animation = "";
    title.style.transform = "translate(-50%, -50%)";
    title.style.color = "#ff0000";
    title.style.textShadow =
      "0 0 10px #ff00ff, 0 0 20px #ffff00, -4px 0 0 #00ffff, 4px 0 0 #ff0000";
  });

  // Remove any added canvas elements
  document.querySelectorAll("canvas").forEach((canvas) => {
    if (canvas.parentNode) {
      canvas.parentNode.removeChild(canvas);
    }
  });

  document.body.classList.remove("chaos-mode");
  intensityLevel = 0;
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
