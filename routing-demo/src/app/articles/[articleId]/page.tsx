"use client"
import Link from 'next/link'
import React from 'react'
import { use } from 'react'

const NewsArticle = async({params, searchParams}: {
    params: Promise<{articleId: string}>
    searchParams: Promise<{lang? : "en" | "es" | "fr"}>
}) => {
    const {articleId} = use(params)
    const {lang = "en"} = use(searchParams);
  return (
    <div>
      <h1>News article {articleId}</h1>
      <p>Reading in {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  )
}

export default NewsArticle
