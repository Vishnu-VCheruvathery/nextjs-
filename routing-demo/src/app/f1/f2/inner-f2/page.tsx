import Link from 'next/link'
import React from 'react'

const InnerF2 = () => {
  return (
   <>
   <h1>Inner F2 Page</h1>
   <div>
    <Link href={"/f5"}>F5</Link>
   </div>
   </>
  )
}

export default InnerF2