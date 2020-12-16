# Contributing to fluo

Hey there! Thank you for taking the time to contribute to this project.

## Getting Started
- Clone the repo
```
git clone https://github.com/HackGT/fluo
cd fluo
```
- Install dependencies
```
yarn add
```
- Start the dev server
```
yarn dev
```

The dev server supports HMR (Hot Module Reloading). Your browser should automatically refresh on every save.

## Code Structure
This repository contains both, the components and the doc site. You will be building your components along side the doc site.

All source code exists in the `src/` folder.

- `src/components/` -> source for components
- `src/js` -> scripts used in the doc site

All other files in `src/` are templates that will be processed using `11ty`.

## How does the dev server work?
The dev server serves the doc site. It uses `11ty` to process the templates, and `snowpack` to build and serve the site. Snowpack comes with HMR enabled, and it handles re-building your source incrementatlly, and allows faster unbundled development.

`11ty` generates the `_site/` folder containing the processed templates, and `snowpack` generates the `build/` folder containing the final doc site. Both these folders are **not** under version control.

## Bundling for deployment
The dev server doesn't produce an optimized build suitable for deployment.

To bundle the doc site for deployment, simply run
```
yarn build:site
```
This command simply runs `snowpack build` under the hood. You can produce builds using your favorite bundler too! To learn more, read the docs [here](https://www.snowpack.dev/concepts/build-pipeline).

## Scripts

### `generate-custom-elements-manifest`
This script reads the `*.definition.ts` file for each component, and generates the corresponding `custom-elements.json` file. The schema file can be found [here](src/components/schema.ts).

The `custom-elements.json` file is used by the `<fl-interact>` component to auto-generate knobs, toggles, and documentation.

To run the script
```
node -r esm scripts/generate-custom-elements-manifest.js
```

### `generate-base-docs`
This script does not exist yet. The goal is to generate a template doc for each component if it doesn't already exist.

### `create-component <name>`
This script does not exist yet. The goal is to generate boilerplate code for creating a new component.

## Writing your own web component

All web components must be written using the [`fast-element`](https://www.fast.design/) library.

- Create a sub-folder that looks like `src/components/<component-name>`
- Export the definition in `src/components/index.ts`

Now that you have your component defined, you will likely need to see it rendered to fix any bugs and test functionality.

- Create a `README.md` file in `src/components/<component-name>`, and write the html for your component
- Import your component in `src/js/index.js`

Run the dev server if you haven't already. You should see a link to your component documentation page appear in the nav bar. Simply click on it to navigate to it.

### Enabling interactive docs
You can create an interactive playground for users. To do this, we will use the `<fl-interact>` component. This requires a `custom-elements.json` file. 
To create one, you'll need to create a `*.definition.ts` file. Take a look at some of the existing definition files for an example. It follows the schema defined [here](src/components/schema.ts). To build the `custom-elements.json` file, run the `generate-custom-elements-manifest` script described under the Scripts section.

Using the `<fl-interact>` component
```html
<fl-interact src="/components/<component-name>/custom-elements.json"></fl-interact>
```

## Guidelines for writing web components
- Try your to use CSS variable styles defined in a design system. This will allow for consistently changing the look across multiple components easily. If the style does not exist, add one to the design system
- Take a look at this [blog post](https://developers.google.com/web/fundamentals/web-components/best-practices)

