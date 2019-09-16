import React from 'react'
import PropTypes from 'prop-types'

import handleClassNameMap from './handleClassNameMap'
import classNames from './classNames'

function Flex(props) {
  const { children, className, component: Component, ...rest } = handleClassNameMap(props)
  return (
    <Component {...rest} className={classNames('Flex', className)}>
      {children}
    </Component>
  )
}

Flex.defaultProps = {
  component: 'div',
}

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.string,
}

export default Flex
