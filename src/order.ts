export interface Order {
  id: number
  product: string
  quantity: number
  pricePerUnit: number
}

export function getTotalPrice(order: Order): number {
  return order.quantity * order.pricePerUnit
}

export const order1: Order = {
  id: 1,
  product: 'Ноутбук',
  quantity: 2,
  pricePerUnit: 50000,
}

console.log('Общая сумма заказа:', getTotalPrice(order1))
