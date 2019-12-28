export const pad = (
  input: string | number,
  fillString: string = '0',
  maxLength: number = 2
) => String(input).padStart(maxLength, fillString)
