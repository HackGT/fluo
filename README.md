# fluo

🎐 Another web-component library, brought to you by ninjas

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
<script src="https://unpkg.com/@hackgt/fluo@0.0.1/dist/fluo.min.js"></script>
```

### Usage

`index.js`
```js
import { Button, FluoDesignProvider } from "@hackgt/fluo";

Button;
FluoDesignProvider;
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

You can find detailed documentation of `fluo` [here](https://fluo.hack.gt).

## Contributing

If you're interested in contributing to this project, please see [CONTRIBUTING.md](CONTRIBUTING.md).
If you've found a bug, or want to propose a new feature, please file an issue [here](https://github.com/HackGT/fluo/issues)!

