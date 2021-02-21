import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'fluo',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@fluo/core',
      proxiesFile: '../react/src/components.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
      footer: '',
    },
  ],
  plugins: [
    sass({
      includePaths: ['./src/styles']
    })
  ],
  globalStyle: './src/styles/fluo.scss'
};
