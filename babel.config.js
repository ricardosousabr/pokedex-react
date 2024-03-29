module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "next/babel",
  ],
  plugins: [["styled-components", { ssr: true, displayName: true }]],
};
