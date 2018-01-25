[![Build Status](https://travis-ci.org/4so-fourseasons/react-hoc-spinners.svg?branch=master)](https://travis-ci.org/4so-fourseasons/react-hoc-spinners)
[![Coverage Status](https://coveralls.io/repos/github/4so-fourseasons/react-hoc-spinners/badge.svg?branch=master)](https://coveralls.io/github/4so-fourseasons/react-hoc-spinners?branch=master)
[![npm version](https://badge.fury.io/js/%404so-fourseasons%2Freact-hoc-spinners.svg)](https://badge.fury.io/js/%404so-fourseasons%2Freact-hoc-spinners)
[![api docs](https://img.shields.io/badge/docs-API-C8022F.svg)](https://4so-fourseasons.github.io/react-hoc-spinners/)
[![JavavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)


# react-hoc-spinners

_react-hoc-spinners_ is a simple loading spinner library for your React projects.


## Installation

`npm i --save @4so-fourseasons/react-hoc-spinners`


## Usage

For detailed information about each component/function have a look at our [API](https://4so-fourseasons.github.io/react-hoc-spinners)

_Note: You can either use named imports of each respective component/function or use the default import with dot notation._


### Default use case

In most cases you will want to use the provided `makeWithLoadingSpinner` factory function.
This provides you with a higher-order component which you can use to wrap your
Components with a loading spinner whenever the provided condition is true.


#### Example

```js
import { makeWithLoadingIndicator } from '@4so-fourseasons/react-hoc-spinners'

import MyComponent from '<some-path>/MyComponent'

const withLoadingIndicator = makeWithLoadingIndicator({
    condition: ({ loading } => loading
})

// Export wrapped component
export default withLoadingIndicator(MyComponent)
```


### Spinner without HOC

It is also possible to use all provided spinners without a wrapping higher-order component, in case you want to implement all logic yourself. Just use named imports as shown in our API spec.


## Versioning

We use [SemVer](http://semver.org/) for versioning.
