<img src="https://github.com/Andrew32A/digital-concert/blob/main/resources/title.png" align="center">

<h2 align="center"><a href="https://andrew32a.github.io/digital-concert/">Click here to try it out!</a></h3>

## About

Powered by Three.js, this project features 6,464 nodes that dynamically change size and color in sync with the music's frequencies. It incorporates spatial audio which adjusts left and right channels based on the user's perspective. This fusion of music and technology offers an interactive and visually interesting environment, showcasing the potential of Three.js and real-time audio analysis for transformative experiences.

<img src="https://github.com/Andrew32A/digital-concert/blob/main/resources/screenshots/screenshot1.png" align="center">

## Installation

To install and run this project, follow these steps:

1. Clone the repository
2. Navigate to the project directory
3. Open the index.html file in a web browser

## Features

- 3D rendering with Three.js
- 3D texture mapping
- Real-time audio frequency analysis
- Spatial audio
- 6,464 dynamic nodes
- Color changing strobe lights
- Track selection menu

## Controls

| Action                   | Key            |
| ------------------------ | -------------- |
| Move forward             | W              |
| Move backward            | S              |
| Strafe left              | A              |
| Strafe right             | D              |
| Look around              | Move the mouse |
| Lock cursor              | Left click     |
| Unlock cursor            | Escape         |
| Play music               | Spacebar       |
| Open track selector menu | Q              |

## Dependencies

The project requires the following dependencies:

- Three.js v0.136: The main library used for 3D rendering
- EffectComposer: Post-processing effects for the scene
- ShaderPass: Shader pass for post-processing
- GammaCorrectionShader: Shader for gamma correction
- RenderPass: Render pass for post-processing
- FXAAShader: Shader for anti-aliasing

These dependencies are included via the CDN links in the script imports section of the code

## Credits

- [Three.js](https://threejs.org/) for the 3D rendering
- [Canva](https://www.canva.com/) for the logo
- [simondevyoutube](https://github.com/simondevyoutube) for the starter code for first person camera, movement, and texture mapping
- Simplex Noise, a fast javascript implementation of simplex noise by Jonas Wagner
- https://freepbr.com/ for the textures
- Music from Pixabay:
  - [Electronic Rock (King Around Here) By: AlexGrohl](https://pixabay.com/music/beats-electronic-rock-king-around-here-15045/)
  - [Lofi Study By: FASSounds](https://pixabay.com/music/beats-lofi-study-112191/)
  - [Playing In Color By: 29811401](https://pixabay.com/music/beautiful-plays-playing-in-color-120336/)

## License

This project is licensed under the [MIT License](LICENSE)
