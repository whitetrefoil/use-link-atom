import type {Config} from '@jest/types'


const jestConfig: Config.InitialOptions = {
  collectCoverage           : true,
  collectCoverageFrom       : [
    'src/**/*.{ts,tsx,js,jsx}',
    '!**/*.d.ts',
  ],
  coveragePathIgnorePatterns: [
    '/~.*',
  ],
  coverageDirectory         : 'test_results/jest',
  // coverageProvider          : 'v8',
  coverageReporters      : [
    'clover',
    'lcov',
    'text-summary',
  ],
  extensionsToTreatAsEsm : ['.ts', '.tsx', '.mts', '.jsx'],
  moduleFileExtensions   : [
    'jsx',
    'js',
    'json',
    'tsx',
    'ts',
  ],
  moduleNameMapper       : {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/file-mock.ts',
    '\\.(css|less|sass|scss)$'                                                           : '<rootDir>/tests/style-mock.ts',
    '^(\\.{1,2}/.*)\\.js$'                                                               : '$1',
    '^~/(.*)\\.js$'                                                                      : '<rootDir>/src/$1',
    '^~/(.*)$'                                                                           : '<rootDir>/src/$1',
  },
  reporters              : ['default'],
  resetMocks             : true,
  resetModules           : true,
  setupFiles             : [],
  setupFilesAfterEnv     : [
    '<rootDir>/tests/setup.ts',
  ],
  testEnvironment        : 'jest-environment-jsdom',
  testRegex              : '(src|tests)/.*(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  transform              : {
    '^.+\\.m?[jt]sx?$': [
      'ts-jest',
      {
        tsconfig       : './tests/tsconfig.json',
        isolatedModules: true,
        useESM         : true,
      },
    ],
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(@dwzq|@whitetrefoil|vue))',
  ],
}


export default jestConfig
