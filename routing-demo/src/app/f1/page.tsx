import Link from 'next/link'
import React from 'react'

const F1 = () => {
  return (
    <>
      <div>F1</div>
      <div><Link href={"/f1/f2"}>F2</Link></div>
       <div><Link href={"/f3"}>F3</Link></div>
    </>
  
  )
}

export default F1