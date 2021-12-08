/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            about_us
          }
          social {
            twitter
          } 
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  console.log(data.site.siteMetadata)

  return (
    <div className="bio">
      {author?.name && (
        <p>
          {/* Written by <strong>{author.name}</strong> {author?.summary || null} */}
          <strong>About us : </strong> <br/>
          {author.about_us} <br/>
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            Please follow us on Twitter.
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
