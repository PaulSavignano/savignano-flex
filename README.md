<h1 align="center">Savignano-Flex</h1>

<div align="center">

Write JavaScript Flex styles and have them served in css.

[![NPM Version](https://img.shields.io/npm/v/savignano-flex.svg?style=flat)](https://www.npmjs.com/package/savignano-flex)
[![NPM Downloads](https://img.shields.io/npm/dm/savignano-flex.svg?style=flat)](https://npmcharts.com/compare/savignano-flex?minimal=true)
[![CircleCI](https://img.shields.io/circleci/build/github/PaulSavignano/savignano-flex/master.svg)](https://circleci.com/gh/PaulSavignano/savignano-flex/tree/master)
[![codecov.io](https://codecov.io/gh/PaulSavignano/savignano-flex/branch/master/graph/badge.svg)](https://codecov.io/gh/PaulSavignano/savignano-flex)
[![Dependencies](https://david-dm.org/PaulSavignano/savignano-flex/master/status.svg)](https://david-dm.org/PaulSavignano/savignano-flex/master)
[![DevDependencies](https://david-dm.org/PaulSavignano/savignano-flex/master/dev-status.svg)](https://david-dm.org/PaulSavignano/savignano-flex/master?type=dev)
[![PeerDependencies](https://david-dm.org/PaulSavignano/savignano-flex/master/peer-status.svg)](https://david-dm.org/PaulSavignano/savignano-flex/master?type=peer)
[![Patreon](https://img.shields.io/badge/patreon-support%20the%20author-blue.svg)](https://www.patreon.com/PaulSavignano)

</div>

Savignano-Flex is a JavaScript library for styling user interfaces.

* **Declarative:** Define the styles you need and enjoy the benefit of cached css without the cost of inline style redefinition.
* **Flexible:** No pun intended.  Props that do not have css definitions will be inline styled.  You may also pass a style prop.  Have a className you'd like incorporated?  Pass in a className prop and have it concatenated.

## Installation

```
npm install savignano-flex
```

## Usage

Here is an example to get you started:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Flex from 'savignano-flex';

function App() {
  return (
    <Flex alignItems="center" flexFlow="row wrap" justifyContent="center">
      <p>This</p>
      <p>content</p>
      <p>is horizontal</p>
    </Flex>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```
