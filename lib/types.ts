export type Color = 'red' | 'orange' | 'yellow' | 'green' | 'pink' | 'blue'

export type ColorVariant = {
  [key in Color]: string
}
