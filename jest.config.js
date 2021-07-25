module.exports = {
  testEnvironment: 'jsdom',
  roots: [
    '<rootDir>/src/'
  ],
  setupFilesAfterEnv: [
    './jest.setup.js'
  ],
  moduleNameMapper: {
    '\\.png$|.jpg$': '<rootDir>/src/__mocks__/fileMock.ts'
  },
  collectCoverage: true,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest'
  }
}
