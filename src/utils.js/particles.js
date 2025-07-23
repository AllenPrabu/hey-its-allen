const particleConfig = {
  fullScreen: { enable: true, zIndex: 0 },
  background: {
    color: "#000000",
  },
  particles: {
    number: {
      value: 100,
      density: { enable: true, area: 800 },
    },
    shape: {
      type: "char",
      character: {
        value: ["A", "E", "9", "@", "#", "Σ", "⌐", "Δ", "╣", "░"],
        font: "Courier New",
        fill: true,
      },
    },
    color: {
      value: "#00ff00",
    },
    opacity: {
      value: { min: 0.2, max: 0.8 },
      animation: {
        enable: true,
        speed: 0.5,
        minimumValue: 0.2,
        sync: false,
      },
    },
    size: {
      value: 14,
      animation: {
        enable: true,
        speed: 3,
        minimumValue: 10,
        sync: false,
      },
    },
    move: {
      enable: true,
      direction: "top",
      speed: 1,
      straight: false,
      outModes: { default: "out" },
    },
  },
  detectRetina: true,
  interactivity: {
    events: {
      onHover: { enable: false },
      onClick: { enable: false },
      resize: true,
    },
  },
};
export default particleConfig;
