import classNameMap from './classNameMap'
import classNames from './classNames'

function handleClassNameMap(props) {
  const {
    alignItems,
    className,
    alignSelf,
    justifySelf,
    flex,
    flexFlow,
    justifyContent,
    padding,
    margin,
    ...rest
  } = props
  const styleProps = {
    alignItems,
    alignSelf,
    justifyContent,
    justifySelf,
    flex,
    flexFlow,
    padding,
    margin,
  }
  const classesAndStyles = Object.keys(styleProps)
    .filter(k => styleProps[k])
    .reduce((a, v) => {
      const result = a
      if (classNameMap[v] && classNameMap[v][styleProps[v]]) {
        result.classes = [...(result.classes || []), classNameMap[v][styleProps[v]]]
        return result
      }
      console.error(`
      handleClassNameMap: ${[v]} ${
  styleProps[v]
} does not have a mapping in the classNameMap and inline style is being defined for use in styling. 
      You may add a mapping in classNameMap.js and a css declaration in _classNameMap.scss for increased performace by elminating the cost of style redefinition.
    `)
      result.styles = { ...result.styles, [v]: styleProps[v] }
      return result
    }, {})
  return {
    className: classNames(className, ...(classesAndStyles.classes || [])),
    style: { ...(classesAndStyles.styles || {}) },
    ...rest,
  }
}

export default handleClassNameMap
