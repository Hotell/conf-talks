// @ts-check

/**
 * @type {jest.InitialOptions}
 */
const config = {
  preset: 'ts-jest',
  // testEnvironment: 'node',
  testPathIgnorePatterns: ['dist'],
  setupTestFrameworkScriptFile: '<rootDir>/src/setup-tests.ts'
}

module.exports = config
