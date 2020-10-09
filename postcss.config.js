// module.exports = {
//   plugins: ["tailwindcss", "autoprefixer", "postcss-preset-env"],
// };

// module.exports = {
//   plugins: [
//     'tailwindcss',
//     'postcss-flexbugs-fixes',
//     'autoprefixer',
//     'postcss-preset-env',
//     [
//       'postcss-preset-env',
//       {
//         autoprefixer: {
//           flexbox: 'no-2009',
//         },
//         stage: 3,
//         features: {
//           'custom-properties': false,
//         },
//       },
//     ],
//   ],
// }


module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],
}