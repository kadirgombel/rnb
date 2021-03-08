# rnb - React Native Boilerplate

[![GitHub version](https://img.shields.io/badge/version-v1.0.0-blue.svg)](https://github.com/kadirgombel/rnb)
[![Depfu](https://badges.depfu.com/badges/279833236bb2e3daef40b69efd78ea4c/count.svg)](https://depfu.com/github/kadirgombel/rnb?project_id=22898)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg?style=flat-square)](http://makeapullrequest.com)

Boilerplate for creating testable, scalable and flexible React Native app.

## Table of Contents

- [rnb - React Native Boilerplate](#rnb---react-native-boilerplate)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Structure / Scaffolding](#structure--scaffolding)
  - [Dependencies](#dependencies)
  - [License](#license)

## Prerequisites

- You should setup your development environment first with React-Native-CLI Quick Start option from the [React Native's docs](https://reactnative.dev/docs/environment-setup)
- You can use [React Native Debugger](https://github.com/jhen0409/react-native-debugger) as your debugger, it doesn't require any setup, just run open react-native-debugger and enable debug from your app.

### Installation

Open your terminal and type in

```sh
$ git clone https://github.com/kadirgombel/rnb.git
$ cd rnb
```

Install all the packages

```sh
$ yarn install
```

### Structure / Scaffolding

```text
react-native-boilerplate
├── src
│   └── assets
│       ├── fonts
│       └── images
│   └── components
│       └── [ComponentName]
│           ├── index.js
│           ├── [ComponentName].js
│           └── [ComponentName].test.js
│   ├── hooks
│   ├── mocks
│   └── navigators
│       ├── RootNavigator.js
│       ├── StackNavigator.js
│       └── TabNavigator.js
│   └── pages
│       └── [PageName]
│           ├── index.js
│           ├── [PageName].js
│           └── [PageName].test.js
│   └── services
│       └── [PageName]
│           ├── index.js
│           ├── axios.js
│           ├── [serviceName1].js
│           └── [serviceName2].js
│   └── store
│       └── [slice-name]
│           └── index.js
|       └── index.js
│   └── themes
│       ├── components
│       └── variables
│   ├── translations
│   └── utils
├── LICENSE
└── README.md
```

## Dependencies

Some of the dependencies used in the project

- [Native Base](https://github.com/GeekyAnts/NativeBase) - Essential cross-platform UI components for React Native
- [React Navigation](https://github.com/react-navigation/react-navigation) - Routing and navigation for your React Native apps
- [React Hook Form](https://github.com/react-hook-form/react-hook-form) - 📋 React Hooks for forms validation
- [Yup](https://github.com/jquense/yup) - Dead simple Object schema validation
- [Redux Toolkit](https://github.com/reduxjs/redux-toolkit) - The official, opinionated, batteries-included toolset for efficient Redux development
- [Redux Persist](https://github.com/rt2zz/redux-persist) - Persist and rehydrate a redux store
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [React Query](https://github.com/tannerlinsley/react-query) - ⚛️ Hooks for fetching, caching and updating asynchronous data in React
- [React-i18next](https://github.com/i18next/react-i18next) - Internationalization for react done right. Using the i18next i18n ecosystem.

Dev dependencies

- [React Native Testing Library](https://github.com/callstack/react-native-testing-library) - 🦉 Simple and complete React Native testing utilities that encourage good testing practices.
- [Husky](https://github.com/typicode/husky) - Git hooks made easy 🐶 woof!
- [Eslint](https://github.com/eslint/eslint) - Find and fix problems in your JavaScript code.
- [Prettier](https://github.com/prettier/prettier) - Prettier is an opinionated code formatter.
- [Jest](https://github.com/facebook/jest) - Delightful JavaScript Testing.

## License

Copyright (c) 2021 Kadir Gömbel.

Usage is provided under the MIT License. See [LICENSE](LICENSE) for the full details.
