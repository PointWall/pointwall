import jwt from 'jsonwebtoken'

export function generateToken (email: string): string {
  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' })
}

export function validateToken (token: string): boolean {
  try {
    jwt.verify(token, process.env.JWT_SECRET)
    return true
  } catch (error) {
    return false
  }
}
