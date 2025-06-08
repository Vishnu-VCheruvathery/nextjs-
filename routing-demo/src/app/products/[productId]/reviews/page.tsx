import React from 'react'

const Review = async({params} : {
  params: Promise<{productId: string}>
}) => {
  const {productId} = await params;
  return (
    <>
 <h1>Reviews for Product: {productId}</h1>
  <h2>Review 1</h2>
  <h2>Review 2</h2>
  <h2>Review 3</h2>
    </>

  )
}

export default Review
