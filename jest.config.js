module.exports = {
    rootDir: 'src',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(j|t)s?$': 'babel-jest'
    },
    moduleNameMapper: {
        '\\.(css)$': 'identity-obj-proxy'
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom']
}