'use client'

import { useEffect, useState } from 'react'
import Button from '@/components/button'
import Item from '@/components/item'
import Separator from '@/components/separator'
import { fetchProducts, getFilteredProducts } from '../lib/productService'
import { IProduct } from '@/interface/products'
import LoadingPage from '@/components/loading-page'

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])
  const [allProducts, setAllProducts] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const removeProductsCurrentlist = async (id: number) => {
    setFilteredProducts((prevState) =>
      prevState.filter((item) => item.id !== id),
    )
  }

  const removeProductsAllProductsList = async (id: number) => {
    setAllProducts((prevState) => prevState.filter((item) => item.id !== id))
  }

  const transferProductToCurrentList = async (id: number) => {
    removeProductsAllProductsList(id)
    const item = allProducts.filter((product) => product.id === id)[0]
    setFilteredProducts((prevState) => [...prevState, item])
  }

  useEffect(() => {
    async function fetch() {
      const [productsFiltered, allProducts] = await Promise.all([
        getFilteredProducts(),
        fetchProducts(),
      ])
      setFilteredProducts(productsFiltered)
      setAllProducts(allProducts)
    }
    fetch()
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <main className="m-auto min-h-screen max-w-screen-lg items-center justify-between p-6 text-center font-medium md:p-24">
      <h1 className="text-3xl font-medium">Sua oferta</h1>
      <p className="font-medium">Adicione produtos a sua oferta</p>
      <Button>Adicionar produto</Button>
      <section className="grid gap-4">
        {filteredProducts.length > 0 ? (
          <>
            <Separator title="Ofertas Atuais" />
            {filteredProducts.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                thumb={item.thumbnail}
                title={item.title}
                pricing={item.price}
                quantity={item.stock}
                removeProduct={removeProductsCurrentlist}
              />
            ))}
          </>
        ) : (
          <h1 className="my-10 text-2xl">Sem ofertas atuais</h1>
        )}
      </section>
      <section className="grid gap-4">
        <Separator title="Ofertas Anteriores" />
        {allProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            thumb={item.thumbnail}
            title={item.title}
            pricing={item.price}
            quantity={item.stock}
            removeProduct={removeProductsAllProductsList}
            transferProductToCurrentList={transferProductToCurrentList}
            removeProductsAllProductsList={removeProductsAllProductsList}
          />
        ))}
      </section>
    </main>
  )
}
