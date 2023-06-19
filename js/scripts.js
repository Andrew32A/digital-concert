import * as THREE from "https://cdn.skypack.dev/three@0.136";

import { EffectComposer } from "https://cdn.skypack.dev/three@0.136/examples/jsm/postprocessing/EffectComposer.js";
import { ShaderPass } from "https://cdn.skypack.dev/three@0.136/examples//jsm/postprocessing/ShaderPass.js";
import { GammaCorrectionShader } from "https://cdn.skypack.dev/three@0.136/examples/jsm/shaders/GammaCorrectionShader.js";
import { RenderPass } from "https://cdn.skypack.dev/three@0.136/examples/jsm/postprocessing/RenderPass.js";
import { FXAAShader } from "https://cdn.skypack.dev/three@0.136/examples/jsm/shaders/FXAAShader.js";

import { helperFunctions } from "./helperFunctions.js";
import { noise } from "./noise.js";

// Setup Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create grid of squares
const gridSize = 50;
const squareSize = 1;
const squares = [];

for (let x = -gridSize / 2; x < gridSize / 2; x++) {
  for (let z = -gridSize / 2; z < gridSize / 2; z++) {
    const geometry = new THREE.BoxGeometry(squareSize, squareSize, squareSize);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const square = new THREE.Mesh(geometry, material);
    square.position.set(x * squareSize, 0, z * squareSize);
    scene.add(square);
    squares.push(square);
  }
}

// Audio setup
const audio = new Audio("./resources/music/song1.mp3");
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
const audioSource = audioContext.createMediaElementSource(audio);
audioSource.connect(analyser);
analyser.connect(audioContext.destination);

// User interaction to start audio
let hasUserInteracted = false;
document.addEventListener("click", () => {
  if (!hasUserInteracted) {
    audio.play();
    hasUserInteracted = true;
  }
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Update audio data
  const frequencyData = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(frequencyData);

  // Update square colors based on audio frequency
  const maxFrequency = Math.max(...frequencyData);
  squares.forEach((square, index) => {
    const frequency = frequencyData[index % frequencyData.length];
    const color = new THREE.Color(
      frequency / maxFrequency,
      0,
      1 - frequency / maxFrequency
    );
    square.material.color = color;
  });

  renderer.render(scene, camera);
}
animate();
