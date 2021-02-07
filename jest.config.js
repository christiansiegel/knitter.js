module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testRegex: '^.+\\.spec\\.ts$',
    moduleFileExtensions: ['ts', 'js'],
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        resources: 'usable',
    },
    collectCoverageFrom: ['src/**/*.ts'],
    coverageReporters: ['text', 'html'],
};
