import { sum } from '../src'

describe('index', () => {
  test('sum result', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
