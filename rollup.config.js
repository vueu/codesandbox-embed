import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'build/codesandbox-embed.js',
    format: 'cjs',
  },
  plugins: [
    babel({
      exclude: 'node_modules',
      externalHelpers: false,
      plugins: ['external-helpers'],
    }),
  ],
};
