# makeWithLoadingIndicator

## Preview

<!-- STORY -->

## Description

`makeWithLoadingIndicator()` is a factory function which returns a higher-order component.
This HOC can then in turn be used to wrap another component with
the specified loading indicator.

## Configuration

The function expects a configuration object with the following
parameters:


| paramName     | type                         | paramDefault   | isRequired |
|---------------|------------------------------|----------------|------------|
| Container     | `React.Element`                | React.Fragment | -          |
| condition     | `(props: Object) => boolean` | -              | yes        |
| spinnerType   | `string` or `React.Node`     | 'SimpleCircle' | -          |
| spinnerConfig | `Object`                       | -              | -          |


## Usage

```js
import { makeWithLoadingIndicator } from '@4so-fourseasons/react-hoc-spinners'

import MyComponent from '<some-path>/MyComponent'

const withLoadingIndicator = makeWithLoadingIndicator({
    condition: ({ loading } => loading
})

// Export wrapped component
export default withLoadingIndicator(MyComponent)
```
