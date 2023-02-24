import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://webtrain.hu/portfolio-api/graphql',
  documents: ['src/**/*.tsx'],
  generates: {
    './src/lib/qraphql/types/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;