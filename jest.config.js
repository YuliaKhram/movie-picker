module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverageFrom: [
    "src/domain/**/*.ts",
    "!src/domain/**/*.test.ts",
    "!src/domain/__tests__/**",
    "!src/domain/EXAMPLES.ts",
  ],
};
