import bcrypt from 'bcryptjs'

export const saltAndHashPassword = (password) => {
  const saltRounds = 10  // Nombre de rounds pour le sel
  return bcrypt.hashSync(password, saltRounds)
}