# fluo
[![npm version](https://badge.fury.io/js/%40hackgt%2Ffluo.svg)](https://badge.fury.io/js/%40hackgt%2Ffluo)

🎐 just another web-component library, brought to you by ninjas

## Getting Started

### Installation

#### Using `yarn`

```
yarn add @hackgt/fluo
```

#### Using `npm`

```
npm install @hackgt/fluo
```

#### Browser

```html
<script src="https://unpkg.com/@hackgt/fluo@0.0.2/dist/fluo.min.js"></script>
```

### Usage

`index.js`
```js
import { Button, FluoDesignSystemProvider } from "@hackgt/fluo";

Button;
FluoDesignSystemProvider;
```

`index.html`
```html
<!doctype html>
<html>
  <head>...</head>
  <body>
    <fl-design-system-provider>
      <fl-button></fl-button>
    </fl-design-system-provider>
    <script type="module" src="./index.js"></script>
  </body>
</html>
```
This will display a button using the Fluo design system.

## Documentation

You can find detailed documentation of `fluo` [here](https://fluo.dev.hack.gt).

## Contributing

If you're interested in contributing to this project, please see [CONTRIBUTING.md](CONTRIBUTING.md).
If you've found a bug, or want to propose a new feature, please file an issue [here](https://github.com/HackGT/fluo/issues)!

