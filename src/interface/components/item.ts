export interface IItemProps {
  title: string
  quantity: number
  pricing: number
  thumb: string
  id: number
  removeProduct: (id: number) => void
  transferProductToCurrentList?: (id: number) => void
  removeProductsAllProductsList?: (id: number) => void
}
