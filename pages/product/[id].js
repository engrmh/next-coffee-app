import React from "react";
import ProductsDetails from "@/components/templates/Product/ProductDetails";
import Comments from "@/components/templates/Product/Comments";

function Product({productData}) {
  return (
      <>
        <ProductsDetails data={productData}/>
        <Comments/>
      </>
  );
}

export async function getStaticPaths(context){
  const {params} = context

  const res = await fetch(`http://localhost:4000/menu`)
  const products = await res.json()

  const paths = products.map(product => ({params: {id: String(product.id)}}))

  return{
    paths,
    fallback: false
  }
}

export async function getStaticProps(context){
  const {params} = context

  const res = await fetch(`http://localhost:4000/menu/${params.id}`)
  const product = await res.json()

  return{
    props:{
      productData : product
    }
  }
}
export default Product;
