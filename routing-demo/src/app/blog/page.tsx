import {Metadata} from 'next'
import { resolve } from 'path'
import React from 'react'

export const metadata:Metadata = {
  title: {
        absolute: "Blog"
  },

}


const Blog = async() => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay")
    }, 2000)
  })
  return (
  <h1>Blog</h1>
  )
}

export default Blog
