'use client'

import React from 'react'
import Image from 'next/image'

import Button from './button'

import { FaArrowDown, FaArrowUp, FaTrash } from 'react-icons/fa'
import { IItemProps } from '@/interface/components/item'

const style = {
  icon: 'h-3 w-3 md:h-5 md:w-5',
  buttonIcon: 'p-2 md:p-4 rounded-md',
  descriptionItem: 'text-[10px] md:text-xs',
}

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
          <p className={style.descriptionItem}>Quantidade: {quantity}</p>
          <p className={style.descriptionItem}>Preço: R$ {pricing}</p>
        </div>
      </div>
      {removeProductsAllProductsList && (
        <Button
          buttonIcon
          onClick={() => removeProductsAllProductsList(id)}
          className={`ml-auto bg-red-950 ${style.buttonIcon}`}
        >
          <FaTrash color="white" className={style.icon} />
        </Button>
      )}
      {transferProductToCurrentList && (
        <Button
          buttonIcon
          onClick={() => transferProductToCurrentList(id)}
          className={`bg-green-950 ${style.buttonIcon}`}
        >
          <FaArrowUp color="white" className={style.icon} />
        </Button>
      )}
      {!removeProductsAllProductsList && !transferProductToCurrentList && (
        <Button
          buttonIcon
          onClick={() => removeProduct(id)}
          className={`ml-auto bg-green-950 ${style.buttonIcon}`}
        >
          {<FaArrowDown color="white" className={style.icon} />}
        </Button>
      )}
    </div>
  )
}

export default Item
