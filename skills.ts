function calculateNumbers(a: number, b: number, operation: string) {
  if (operation === 'add') {
    return a + b
  } else if (operation === 'subtract') {
    return a - b
  } else if (operation === 'multiply') {
    return a * b
  } else if (operation === 'divide') {
    return a / b
  } else {
    return 'Invalid operation'
  }
}