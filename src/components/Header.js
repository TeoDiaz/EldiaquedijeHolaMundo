import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import "./style.scss"

const TitleAndDescription = ({data}) => {
  
  const title = data.site.siteMetadata.title
  return (
    <div className="header">
      <h2 className="title" >{title}</h2>
    </div>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}


export default Header
