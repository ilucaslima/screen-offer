'use client'

import React from 'react'
import Image from 'next/image'

import Button from './button'

import { FaArrowDown, FaArrowUp, FaTrash } from 'react-icons/fa'
import { IItemProps } from '@/interface/components/item'

const Item = ({
  title,
  id,
  transferProductToCurrentList,
  removeProductsAllProductsList,
  quantity,
  pricing,
  thumb,
  removeProduct,
}: IItemProps) => {
  return (
    <div className="flex w-full items-center gap-1 rounded-md bg-white p-4 text-left md:gap-4">
      <Image
        className="w-14 md:w-24"
        src={thumb}
        alt={title}
        width={100}
        height={100}
      />
      <div>
        <h2 className="text-base md:text-xl">{title}</h2>
        <div className="mt-2">
          <p className="text-[10px] md:text-xs">Quantidade: {quantity}</p>
          <p className="text-[10px] md:text-xs">Preço: R$ {pricing}</p>
        </div>
      </div>
      {removeProductsAllProductsList && (
        <Button
          buttonIcon
          onClick={() => removeProductsAllProductsList(id)}
          className="ml-auto rounded-md bg-red-950 p-2 md:p-4"
        >
          <FaTrash color="white" className="h-3 w-3 md:h-5 md:w-5" />
        </Button>
      )}
      {transferProductToCurrentList && (
        <Button
          buttonIcon
          onClick={() => transferProductToCurrentList(id)}
          className="rounded-md bg-green-950 p-2 md:p-4"
        >
          <FaArrowUp color="white" className="h-3 w-3 md:h-5 md:w-5" />
        </Button>
      )}
      {!removeProductsAllProductsList && !transferProductToCurrentList && (
        <Button
          buttonIcon
          onClick={() => removeProduct(id)}
          className="ml-auto rounded-md bg-green-950 p-2 md:p-4"
        >
          {<FaArrowDown color="white" className="h-3 w-3 md:h-5 md:w-5" />}
        </Button>
      )}
    </div>
  )
}

export default Item
