export const createPackage = (name: string) => {
  return `{
"name": "${name}",
"version": "0.1.0",
"license": "MIT",
"engines": {
  "node": "^12"
},
"scripts": {
  "dev": "yarn nf start -j Procfile.dev",
  "codegen": "NODE_ENV=development graphql-codegen --config codegen.yml",
  "install": "yarn --cwd client install && yarn --cwd server install",
  "build": "NODE_ENV=production yarn --cwd client build && yarn --cwd server build",
  "start": "NODE_ENV=production yarn --cwd server start",
  "lint": "yarn eslint ./ --fix",
  "typeorm": "yarn --cwd server typeorm",
  "seed": "yarn --cwd server seed",
  "seed:production": "yarn --cwd server seed:production",
  "test": "yarn --cwd server test:unit && yarn --cwd client test",
  "coverage": "yarn --cwd server coverage && yarn --cwd client coverage",
  "report": "yarn jscpd -r console,time,html -o ./report/server -i 'server/src/support/jest/coverage' server/src && yarn jscpd -r console,time,html -o ./report/client -i 'client/src/__tests__/support/jest/coverage' client/src"
},
"devDependencies": {
  "@apollo/react-common": "^3.1.3",
  "@caerusjs/cli": "^0.6.2",
  "@graphql-codegen/cli": "^1.12.2",
  "@graphql-codegen/introspection": "1.17.8",
  "@graphql-codegen/typescript-operations": "^1.12.2",
  "@graphql-codegen/typescript-react-apollo": "^2.0.6",
  "@graphql-codegen/typescript-resolvers": "1.17.9",
  "@graphql-codegen/typescript-type-graphql": "^1.15.2",
  "@types/react": "^16.9.22",
  "@typescript-eslint/eslint-plugin": "^4.1.1",
  "@typescript-eslint/parser": "^4.1.1",
  "apollo-client": "^2.6.8",
  "apollo-utilities": "^1.3.3",
  "foreman": "^3.0.1",
  "graphql": "^15.3.0",
  "graphql-tag": "^2.10.3",
  "jscpd": "^3.3.19",
  "source-map-explorer": "^2.4.1"
},
"dependencies": {}
}
  `;
};
