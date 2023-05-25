import legacy from '@vitejs/plugin-legacy';

export const configLegacy = () => {
  return legacy({
    targets: ['defaults', 'not IE 11', 'since 2015', 'Chrome 64'],
  });
};
