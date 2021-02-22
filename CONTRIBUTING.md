# Contributing to fluo

## Setting up a dev environment 

### Pre-requisites

- node (>= 14.15.0)
- yarn (>= 1.22.0)

### Checking out the repository 

To check out this repository, simply clone it.
```bash 
git clone https://github.com/HackGT/fluo
```

### Building the doc site

TODO (the doc site is under construction: [tracking
issue](https://github.com/HackGT/fluo/issues/2))

## Adding a component

TODO

## Documentation 

Every public API must be well documented before being
committed to the repo. Some examples are components and configuration.

For components, documentation must be provided in a README.md file in the same
directory as its source. We have a convenience script that generates base
documentation for you every time you build the repository. You may need to add
more documentation to it (things like usage patterns, examples, common errors).

For any other item, inline the documentation using [jsdoc](https://jsdoc.app/).

## Submitting a PR 

All PRs must have:
- A short writeup describing the changes you made
- Links to any tracking issues
- Links to any relevant test cases (if any)

When creating a PR for adding a new component to the library, please use [this
template](https://raw.githubusercontent.com/HackGT/fluo/main/.github/PULL_REQUEST_TEMPLATE/component.md).

*Note: Instead of copying over the template yourself, you can use the
`template` query param that tells github to do it for you. For more
details see [this
link](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/about-automation-for-issues-and-pull-requests-with-query-parameters)*
