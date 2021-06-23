// Step 1: Import your component
import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndexTwo = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    
    <Layout location={location} title={siteTitle}>
        <p><b>In coordination with many partners, on a grant 
                      funded by CEWIL Canada, UVic students are developing 
                      materials on starting and operating kelp farms on
                       Vancouver Island’s West coast. Community 
                       students are participating to help figure out how 
                       kelp farming can benefit their communities. 
                       Watch here to hear about their experiences!</b></p>
      <Seo title="All posts" />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
                
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                  
             
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndexTwo

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

