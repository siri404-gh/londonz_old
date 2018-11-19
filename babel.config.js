const presets = [
  [
    "@babel/env",
    {
      targets: {
        chrome: "70",
        // edge: "17",
        // firefox: "60",
        // safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
  [
    "@babel/preset-react",
  ],
];

const plugins = [
  [
    "react-hot-loader/babel",
  ],
]

module.exports = { presets, plugins };