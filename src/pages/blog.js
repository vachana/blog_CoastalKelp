// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const Blog = (children) => {
  return (
    <main>
      <Layout pageTitle="Blog">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
    </main>
  )
}

// Step 3: Export your component
export default Blog