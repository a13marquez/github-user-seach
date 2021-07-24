module.exports = {
  roots: [
    '<rootDir>/src/',
  ],
  moduleNameMapper: {
    '\\.png$|.jpg$': '<rootDir>/src/__mocks__/fileMock.ts',
  },
  collectCoverage: true,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};
