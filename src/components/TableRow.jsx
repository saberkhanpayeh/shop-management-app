import React from 'react'
import { shortenProductId } from '../utils/helper'

function TableRow({product}) {
  return (
    <tr>
        <td>{product.name}</td>
        <td>{product.quantity}</td>
        <td>{product.price}</td>
        <td>{shortenProductId(product.id)}</td>
        <td></td>
    </tr>
  )
}

export default TableRow