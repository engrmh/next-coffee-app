import React from "react";
import ProductsDetails from "@/components/templates/Product/ProductDetails";
import Comments from "@/components/templates/Product/Comments";

function Product({productData , comments}) {
  return (
      <>
        <ProductsDetails data={productData}/>
        <Comments data={comments}/>
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

  const productRes = await fetch(`http://localhost:4000/menu/${params.id}`)
  const productData = await productRes.json()

  const commentRes = await fetch(`http://localhost:4000/comments`)
  const comments = await commentRes.json()
  const productComments = comments.filter(comment => comment.id === +params.id)

  return{
    props:{
      productData,
      comments: productComments
    },
    revalidate: 60 * 60 * 12 //second
  }
}
export default Product;
