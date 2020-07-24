export const createPackage = (name: string) => {
  return (`{
"name": "${name}-server",
"version": "0.1.0",
"main": "server.js",
"license": "MIT",
"dependencies": {
    "@types/faker": "^4.1.9",
    "@types/graphql": "^14.5.0",
    "@types/helmet": "^0.0.45",
    "@types/lodash": "^4.14.150",
    "@zerollup/ts-transform-paths": "^1.7.17",
    "apollo-server-core": "^2.10.0",
    "apollo-server-express": "^2.10.0",
    "apollo-server-types": "^0.2.10",
    "axios": "^0.19.2",
    "body-parser": "^1.19.0",
    "class-validator": "^0.12.2",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-basic-auth": "^1.2.0",
    "graphql": "^14.1.1",
    "helmet": "^3.22.0",
    "lodash": "^4.17.15",
    "reflect-metadata": "^0.1.10",
    "ts-node": "^8.6.2",
    "tsconfig-paths": "^3.9.0",
    "ttypescript": "^1.5.10",
    "type-graphql": "^0.17.6",
    "typeorm": "0.2.24",
    "typescript": "^3.9.3"
},
"scripts": {
    "build": "NODE_ENV=production rm -rf dist/ && ttsc -p tsconfig.prod.json",
    "start": "NODE_ENV=production ts-node dist/server.js",
    "dev": "NODE_ENV=development nodemon",
    "coverage": "NODE_ENV=test yarn test --coverage",
    "test": "HEADLESS=false SLOWMO=50 JEST_PUPPETEER_CONFIG=src/support/puppeteer/jest-puppeteer.config.js yarn run jest --runInBand",
    "test:unit": "JEST_PUPPETEER_CONFIG=src/support/puppeteer/jest-puppeteer.config.js yarn run jest --runInBand",
    "test:headless": "JEST_PUPPETEER_CONFIG=src/support/puppeteer/jest-puppeteer.config.js yarn run jest --runInBand",
    "typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js",
    "seed": "ts-node -r tsconfig-paths/register src/db/seeds.ts",
    "seed:production": "NODE_ENV=production ts-node -r tsconfig-paths/register dist/db/seeds.js"
},
"devDependencies": {
    "@apollo/react-common": "^3.1.3",
    "@types/expect-puppeteer": "^4.4.0",
    "@types/jest": "^25.1.3",
    "@types/jest-environment-puppeteer": "^4.3.1",
    "@types/node": "^13.7.1",
    "@types/puppeteer": "^2.0.1",
    "@types/react": "^16.9.22",
    "and": "^0.0.3",
    "apollo-client": "^2.6.8",
    "apollo-server-testing": "^2.10.0",
    "apollo-utilities": "^1.3.3",
    "foreman": "^3.0.1",
    "graphql-tag": "^2.10.3",
    "jest": "^25.1.0",
    "jest-cucumber": "^2.0.11",
    "jest-environment-puppeteer": "^4.4.0",
    "jest-puppeteer": "^4.4.0",
    "nock": "^12.0.3",
    "nodemon": "^2.0.2",
    "puppeteer": "^2.1.1",
    "react": "^16.12.0",
    "ts-jest": "^25.2.0",
    "typeorm-test-transactions": "^1.10.0"
}
}`)}
