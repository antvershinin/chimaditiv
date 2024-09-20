import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { ICatalogue } from '../../data/catalogues/catalogues'
import { products } from '../../data/products/products'


export const ProductsPage = () => {

    const [product, setProduct] = useState<ICatalogue>()
    const navigate = useNavigate()
    const {productName} = useParams()

    // useEffect(() => {
    //     const index = products.findIndex((el) => el.adress === productName);

    //     window.scrollTo({top:0, behavior:'smooth'})
    //     if (index === -1) navigate("/");
    //     else {
    //       setProduct(products[index]);
    //     }
    //   }, [productName]);

  return (
    <div>{product?.description}</div>
  )
}
