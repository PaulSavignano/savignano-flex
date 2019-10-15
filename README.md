<h1 align="center" color="#1976d2">savignano-flex<h1>

<div style="display: flex; flex-flow: row wrap; align-items: center;">
[![NPM Version](https://img.shields.io/npm/v/savignano-flex.svg?style=flat)](https://www.npmjs.com/package/savignano-flex)
[![NPM Downloads](https://img.shields.io/npm/dm/savignano-flex.svg?style=flat)](https://npmcharts.com/compare/savignano-flex?minimal=true)
[![CircleCI](https://img.shields.io/circleci/build/github/PaulSavignano/savignano-flex/master.svg)](https://circleci.com/gh/PaulSavignano/savignano-flex/tree/master)
[![codecov.io](https://codecov.io/gh/PaulSavignano/savignano-flex/branch/master/graph/badge.svg)](https://codecov.io/gh/PaulSavignano/savignano-flex)
[![Dependencies](https://david-dm.org/PaulSavignano/savignano-flex/master/status.svg)](https://david-dm.org/mui-org/material-ui/master?path=packages/material-ui)
[![DevDependencies](https://david-dm.org/PaulSavignano/savignano-flex/master/dev-status.svg)](https://david-dm.org/mui-org/material-ui/master?type=dev)
[![PeerDependencies](https://david-dm.org/PaulSavignano/savignano-flex/master/peer-status.svg)](https://david-dm.org/mui-org/material-ui/master?type=peer&path=packages/material-ui)
[![Patreon](https://img.shields.io/badge/patreon-support%20the%20author-blue.svg)](https://www.patreon.com/PaulSavignano)
</div>

Use flex css without inline styles [`savignano-flex`](https://www.npmjs.com/package/savignano-flex).

## Installation

```
npm install savignano-flex
```

## Usage

Here is a quick example to get you started, **it's all you need**:

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
