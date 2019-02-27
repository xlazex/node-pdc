const promisify = require('util').promisify
const pdc = promisify(require('../pdc.js'))

test('checks if pandoc is available. show version', async () => {
  const result = await pdc('', 'markdown', 'html', [ '-v' ])
  expect(result).toBeInstanceOf(Buffer)
  expect(result.toString()).toContain('pandoc')
})

test('convert markdown to html', async () => {
  const result = await pdc('# Heading', 'markdown', 'html')
  expect(result).toBeInstanceOf(Buffer)
  expect(result.toString()).toBe('<h1 id=\"heading\">Heading</h1>\n')
})