# Front End Starter Boilerplate

A starter boilerplate to use for quick templating using Webpack 5, SCSS, Linting, Hot reloading and more...
Personal small reusable 'library' of common styles.

## Table of Contents

- [Front End Starter Boilerplate](#front-end-starter-boilerplate)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Dependencies](#dependencies)
    - [Installation](#installation)
    - [Run Webpack dev server with live reload](#run-webpack-dev-server-with-live-reload)
    - [Compile assets for production](#compile-assets-for-production)
    - [Styles](#styles)
  - [Contributing](#contributing)

## Features

- Webpack 5
- SCSS
- Modern ES6+ with Babel
- Linting
- Hot reload on dev

## Dependencies

- [Node] >= 12
- [Yarn]

### Installation

1. `yarn` or `yarn install` from the root folder.
2. You should now have all the necessary dependencies to run the [build process](#compile-assets-for-production).

### Run Webpack dev server with live reload

For local development there's one more setup step needed:

- Go to [./config/env.config.js](config/env.config.js) and update the `HOST` value to match your local development hostname. Example:

```javascript
HOST: 'https://stater-foxy-mojo.test'
```

You should now be able to run the project:

- `npm run start`

### Compile assets for production

Production assets are compiled to `build/` folder. The `src/` folder **should not be uploaded** to production environment.

- `npm run build`

<!-- STYLES -->
### Styles

- `Abstracts`: Variables, functions, mixins, helpers. A good way to see this is, it should not print out any CSS code if compiled on it's own.
- `Base`: Settings, tools and helpers. Contains global styles, normalizers and utility classes.
- `Blocks`: Styles specific to blocks like the header, footer, or any full width section.
- `Components`: Styles specific to components like buttons, tooltips, and other small stand-alone reusable pieces.
- `Layout`: For things specific to the website's layout and formatting, global styles. Things specific to the theme either in FE or admin.
- `Pages`: Styles specific to pages like the home page
- `Helpers`: Overrides to colors classes and spacings, etc.

<!-- CONTRIBUTING -->
## Contributing

If you're here it's as part of a team. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a [Pull Request]

<!-- Repository Links -->
[Contributions]: https://github.com/CatinhoCR/crispy-supreme-ditso/pulls
[Pull Request]: https://github.com/CatinhoCR/crispy-supreme-ditso/pulls
[issues]: https://github.com/CatinhoCR/crispy-supreme-ditso/issues
[feedback]: https://github.com/CatinhoCR/crispy-supreme-ditso/discussions
<!-- Dependencies -->
[Node]: https://nodejs.org/
[Yarn]: https://classic.yarnpkg.com/en/docs/install
[Homebrew]: https://brew.sh/
