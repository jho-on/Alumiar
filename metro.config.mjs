import { getDefaultConfig } from 'expo/metro-config.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const config = getDefaultConfig(import.meta.dirname);

config.transformer.babelTransformerPath =
    require.resolve('react-native-svg-transformer');

config.resolver.assetExts = config.resolver.assetExts.filter(
    (ext) => ext !== 'svg',
);

config.resolver.sourceExts.push('svg');

export default config;
