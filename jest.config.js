module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testRegex: '^.+\\.spec\\.ts$',
    moduleFileExtensions: ['ts', 'js'],
    collectCoverageFrom: ['src/**/*.ts'],
    coverageReporters: ['json', 'html'],
};
