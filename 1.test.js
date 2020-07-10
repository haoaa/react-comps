test('a', () => {
  expect(2 + 2).not.toBeGreaterThan(5)
})
test('a1', () => {
  expect({a: 2}).toEqual({a: 2})
})
