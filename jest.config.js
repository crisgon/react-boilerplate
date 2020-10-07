module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>/src/**/*.{js,jsx,ts,tsx}", "!**/*.d.ts"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(ts|js|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules"],
};
