// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import "../assets/css/main.css"
import "bootstrap/dist/css/bootstrap.min.css";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="PageHeader relative  PageHeader-large">
        <div className="container relative">
            <h1 className="PageHeader--Title">headless - the shopify + gatsby starter theme for digital commerce</h1>
            <div className="Content PageHeader--Subtitle">
              <h2>the shopify + gatsby starter theme for digital commerce</h2>
            </div>
        </div>
      </div>
      <div className="section">
        <div className="container cardindex" >
            <div className="card" >
              <div className="card-body">
                <StaticImage
                  alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                  src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
                />
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card" >
              <div className="card-body">
                <StaticImage
                  alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                  src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
                />
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card" >
              <div className="card-body">
                <StaticImage
                  alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                  src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
                />
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

        </div>
      </div>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage

