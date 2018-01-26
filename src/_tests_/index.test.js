import HOCSpinners, {
  Cube,
  makeWithLoadingIndicator,
  SimpleCircle
} from '../index'

describe('HOCSpinners default export', () => {
  it('should contain makeWithLoadingIndicator', () => {
    expect(HOCSpinners.makeWithLoadingIndicator).toBeDefined()
  })

  it('should contain Cube', () => {
    expect(HOCSpinners.Cube).toBeDefined()
  })

  it('should contain SimpleCircle', () => {
    expect(HOCSpinners.SimpleCircle).toBeDefined()
  })
}) // end default export

describe('Named exports', () => {
  it('should export makeWithLoadingIndicator', () => {
    expect(makeWithLoadingIndicator).toBeDefined()
  })

  it('should export Cube', () => {
    expect(Cube).toBeDefined()
  })

  it('should export SimpleCircle', () => {
    expect(SimpleCircle).toBeDefined()
  })
}) // end named exports
