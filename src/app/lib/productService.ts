import { IProduct } from '@/interface/products'
import { productsActivated } from '../utils/products-activated'

export async function fetchProducts(): Promise<IProduct[]> {
  const response = await fetch(
    'https://dummyjson.com/products/category/groceries',
    {
      cache: 'no-store',
    },
  )
  const data = await response.json()
  return data.products
}

function filterProducts(products: IProduct[]): IProduct[] {
  return products.filter((product) => productsActivated.includes(product.id))
}

export async function getFilteredProducts(): Promise<IProduct[]> {
  const rawProducts: IProduct[] = await fetchProducts()
  return filterProducts(rawProducts)
}
