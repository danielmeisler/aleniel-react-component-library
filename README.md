# aleniel-react-component-library
the coolest component library in the whole world

## Development 

### run ladle stories
`npx ladle serve`

### create dist build
`npm run rollup`

### publish package
`npm publish`

important: don't forget to update the version number in the package.json otherwise the `npm publish` will not work


## Component Testing

- Testing is handled by '@testing-library/react'.
- Place your testfiles within component folders, e.g. `/src/components/Accordion`:

### run tests in console
`npm run test`

### run tests with ui
`npm run test-ui`