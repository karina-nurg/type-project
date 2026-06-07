export type User = {
  name: string
  age: number
  email: string
  isAdmin: boolean
}

export const user1: User = {
  name: 'Иван Иванов',
  age: 25,
  email: 'ivan@example.com',
  isAdmin: true,
}

console.log('Пользователь является админом:', user1.isAdmin)
