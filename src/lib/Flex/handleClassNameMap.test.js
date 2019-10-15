import handleClassNameMap from "./handleClassNameMap"

describe('handleClassNameMap', () => {
  it('should create a className for styles defined in classNameMap', () => {
    const styles = {
      alignItems: 'center'
    }
    const { className } = handleClassNameMap(styles)
    expect(className).toEqual('align-items-center')
  })
  it('should create an inline style for styles NOT defined in classNameMap', () => {
    const styles = {
      flex: '100 100 100px'
    }
    const { style } = handleClassNameMap(styles)
    expect(style).toEqual(styles)
  })
  it('should console.error a style that is not defined in classNameMap so the style may be indentified', () => {
    const styles = {
      flex: '100 100 100px'
    }
    const spy = jest.spyOn(console, 'error')
    handleClassNameMap(styles)
    expect(spy).toHaveBeenCalled()
  })
})
