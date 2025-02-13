import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

/**
 * @type {import('rollup').RollupOptions}
 */
const rollupOptions = {
  input: ['src/client.ts', 'src/server.ts'],
  output: [
    {
      format: /** @type {const} */ ('cjs'),
      entryFileNames: '[name].js',
      dir: 'dist',
    },
  ],
  plugins: [
    // Allows node_modules resolution
    nodeResolve({extensions, preferBuiltins: true}),
    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),
    // Compile TypeScript/JavaScript files
    babel({
      extensions,
      rootMode: 'upward',
      include: ['src/**/*'],
      babelHelpers: 'bundled',
    }),
  ],
  external: [
    'vscode',
    'vscode-languageclient/node',
    'vscode-languageserver/node',
    'vscode-languageserver-textdocument',
  ],
};

// eslint-disable-next-line import/no-default-export
export default rollupOptions;
