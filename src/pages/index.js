import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const Blog = (title,children) => {
  let header

  // if (isRootPath) {
    header = (
      <h1 className="main-heading">

Coastal Kelp
        
        </h1>)
  return (
    <div className="global-wrapper">
      <header className="global-header">{header}</header>
    <main>

      <Layout pageTitle="Blog">
        <h3>Profile of our kelp tool with temperature data here!</h3>
      {/* <iframe width="100%" height="500px" src="https://studio.unfolded.ai/public/dd8f0bad-ead6-4711-b7a4-a8b244fb0c5f/embed" frameborder="0" allowfullscreen></iframe> */}
      
      <p>Kelp, or seaweed, is a rapidly growing food source that is an important carbon sequestration mechanism in aquatic ecosystems. Canada imports the vast majority of its kelp, which is a missed opportunity both economically and in terms of environmental impact. We feel that kelp farms can create jobs, enhance community revenue, feed Canadians, and act as an industrial input in a variety of processes. This project is an attempt to tie community benefits to student projects. Specifically, University of Victoria students in computer science classes will be consulting with communities and experts to develop online tools to help in the creation and operation of kelp farms. UVic fine arts students will be documenting the process and producing videos that we hope will expand the impact of this type of farming!</p>

<p>“Thanks to the many groups who have made this project possible. Special thanks to CEWIL Canada for funding the project, but equally to the industry groups contributing so much time and mentorship. In these pandemic times many of our students are remote, but we would like in particular to respectfully acknowledge the nuučaan̓uɫ (nuu-chah-nulth) speaking First Nations whose unceded territory so much of this project will take place.”</p>
<img src='ncns.png' alt="image" width="700" height="600"></img>
{/* <a href="default.asp"><img src="src/images/UOV.jpeg" alt="uov" style="width:42px;height:42px;"></img></a> */}
    </Layout>
    </main>
    </div>
  )
}

// Step 3: Export your component
export default Blog



