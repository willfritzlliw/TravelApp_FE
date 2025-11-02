# Travel App (travelapp-fe)

An application designed for travelers.

## Table of Contents

- [Travel App (travelapp-fe)](#travel-app-travelapp-fe)
  - [Table of Contents](#table-of-contents)
  - [About The Project](#about-the-project)
    - [Built With](#built-with)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Available Scripts](#available-scripts)
  - [Linting and Formatting](#linting-and-formatting)
  - [Building for Production](#building-for-production)
  - [Customizing Configuration](#customizing-configuration)
  - [Contributing](#contributing)
  - [License](#license)

## About The Project

This is a frontend application for the Travel App, designed to help users plan and manage their travels.

### Built With

*   [Quasar Framework](https://quasar.dev/)
*   [Vue.js](https://vuejs.org/)
*   [Vue Router](https://router.vuejs.org/)
*   [Electron](https://www.electronjs.org/) (for desktop builds)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This project uses Node.js and npm/yarn. Make sure you have them installed.
You can check the required versions in the `engines` section of the `package.json` file.

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/TravelApp_FE.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    # or
    yarn
    ```

## Usage

Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

## Project Structure

The main source code of the application is located in the `src` directory.

```
src
├── assets
├── boot
├── css
├── layouts
├── pages
├── router
└── App.vue
```

-   `src/pages`: Contains the Vue components for each page of the application.
-   `src/layouts`: Contains the layout components for the application.
-   `src/router`: Contains the Vue Router configuration.
-   `src/css`: Contains the global CSS and SCSS files.
-   `src/boot`: Contains boot files for Quasar.
-   `src/assets`: Contains static assets like images and fonts.
-   `App.vue`: The main App component.

## Available Scripts

In the project directory, you can run:

-   `npm run dev` or `quasar dev`: Starts the app in development mode.
-   `npm run build` or `quasar build`: Builds the app for production.
-   `npm test`: Runs the test suite. (Note: No tests are configured in the project yet).

## Linting and Formatting

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

## Building for Production

```bash
quasar build
```

## Customizing Configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m '''Add some AmazingFeature'''`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

*(Note: There is no LICENSE file in the project yet. You should add one.)*