// https://stackoverflow.com/a/175787
export function isValidNumeric(str: string | undefined) {
  if (typeof str !== 'string') return true // we only process strings!
  if (str === '') return true // Empty string is considered valid for this case
  return (
    !isNaN(parseInt(str)) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ) // ...and ensure strings of whitespace fail
}
