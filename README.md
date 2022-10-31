# aleniel-react-component-library
the coolest component library in the whole world

## Development 

### run ladle stories
in `/`:\
`npx ladle serve`

### component development
in `/lib`:\

create and develop components in the lib folder. 

#### create dist build
in `/lib`:\
`npm run rollup`

#### publish package
in `/lib`:\
`npm publish`

important: don't forget to update the version number in the package.json otherwise the `npm publish` will not work


### component testing

- Testing is handled by '@testing-library/react'.
- Place your testfiles within component folders, e.g. `/lib/src/components/Accordion`:

#### run tests in console

`npm run test`


#### run tests with majestic test UI

`npx majestic`
