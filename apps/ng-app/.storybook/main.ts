import type { StorybookConfig, Options } from '@storybook/core-common';

const config: StorybookConfig = {
  core: { builder: 'webpack5' },

  stories: [
    '../src/app/**/*.stories.mdx',
    '../src/app/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }: Options) => {
    // apply any global webpack configs that might have been specified in .storybook/main.ts

    // add your own webpack tweaks if needed

    return config;
  },
};

module.exports = config;
