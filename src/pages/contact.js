import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const Contact = (title,children) => {
  let header

  // if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <br/>
<b>CONTACT</b>
        
        </h1>)
  return (
    <div className="global-wrapper">
      <header className="global-header">{header}</header>
    <main>
      

      <Layout pageTitle="Blog">
          
      <p>  The instructional lead on the project, Dr. Yvonne Coady, holds joint appointments at the University of Victoria and Northeastern University’s Vancouver campus. She is an expert on cloud computing and distributed systems. She has a passion for teaching and a deep interest in community-based education efforts. She can be reached at <a href="mailto: ycoady@gmail.com">email</a></p>

<p>The project lead, Dr. Derek Jacoby, worked in industry for many years before returning to academia. His career has revolved around numerous areas of machine learning and data analytics. Dr. Jacoby lives and works on the traditional unceded territories of the MÁLEXEȽ (Malahat) Nation and can be reached at <a href="mailto: derekja@coastalcomputing.ca">email</a></p>
    </Layout>
    </main>
    </div>
  )
}

// Step 3: Export your component
export default Contact