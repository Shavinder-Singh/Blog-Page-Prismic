import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Prismic from "prismic-javascript"
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import { Client } from "@/prismic-configuration";
import { PrismicText } from '@prismicio/react'
const inter = Inter({ subsets: ['latin'] })

export default function Home({ article1, trending1 }) {


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className='layout_title'>See What's happening around the world</h1>
        <div className='flex'>

          <div>
            <div className='mainArticleBox'>
              {
                article1.results.map((article, index) => (
                  <>
                    <Link href={`article/${article.uid}`} className='article_title'>
                      <h1 key={article.uid}>
                        {article.data.artcile1title}
                      </h1>
                    </Link>

                    {article.data.slices.map((slice, sliceIndex) => (
                      <div key={slice.uid}>
                        {slice.items.map((item, index) => (
                          <img src={item.articlesliceimage.url} width={500} height={300} className='article_image' />
                        ))}
                      </div>
                    ))}
                    <p className='article_content'>{article.data.article1previewinfo}</p>
                  </>
                ))
              }
            </div>
          </div>
          <div className='trending_box'>
            <div>
              {trending1.results.map((first, index) => (
                <>
                  <div key={first.data.uid}>
                    <h2 className='trending_title' >{first.data.slices[0].primary.trendind1title}</h2>
                    {first.data.slices.map((second, index) => (
                      second.items.map((third, index) => (
                        <div key={index} className='trending_list_wrapper'>
                          <p><Link href="./trending/trending" className='trending_list'>{third.trending1list1}</Link></p><hr />
                          <p><Link href="./trending/trending" className='trending_list'>{third.trending1list2}</Link></p><hr />
                          <p><Link href="./trending/trending" className='trending_list'>{third.trending1list3}</Link></p><hr />
                        </div>
                      ))
                    ))}
                  </div>

                </>
              ))
              }
            </div>
          </div>
        </div>
      </Layout>
    </>
  )

}


// this function is called everytime when request is made or refresh

export async function getServerSideProps() {
  const article1 = await Client().query(Prismic.Predicates.at("document.type", "article1"));
  const trending1 = await Client().query(Prismic.Predicates.at("document.type", "trending1"));
  console.log(trending1)
  return {
    props: {
      article1: article1,
      trending1: trending1,

    }
  }
}