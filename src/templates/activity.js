import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link, RichText, Date } from "prismic-reactjs"
import { Markup } from "interweave"
import { linkResolver } from "gatsby-source-prismic-graphql"

// data.prismic.allActivitys.edges[0].node

export default function ActivityPage({ data }) {
  const activity = data.prismic.allActivitys.edges[0].node
  console.log(data)
  const {
    activity_category,
    activity_code,
    activity_title,
    activity_subtitle,
    activity_description,
    materials,
    pryklady,
    helpful_links,
    submission_form,
    ulad,
  } = activity
  console.log(activity)

  function catTranslate(category) {
    let categoryEn = ""
    switch (category) {
      case "Любимо":
        categoryEn = "love"
        break
      case "Сонце":
        categoryEn = "sun"
        break
      case "Рух":
        categoryEn = "motion"
        break
      case "Життя":
        categoryEn = "zife"
        break
      default:
        categoryEn = "oops"
    }
    return categoryEn
  }

  // console.log(materials)

  const materialsList = () =>
    materials.map(i => {
      console.log(i.text)
      return `<li>${i.text}</li>`
    })

  // console.log(materialsList)

  // console.log(helpful_links)

  const linksArray = () =>
    helpful_links.map(i => {
      console.log(i)
      const { helpful_link_title, helpful_link_description, helpful_link } = i
      console.log(helpful_link_title[0].text)
      return `<li><a href="${helpful_link.url}" target="_blank">${helpful_link_title[0].text}</a></li>`
    })
  const linksList = () => linksArray().join("")

  return (
    <Layout ulad={ulad}>
      <div
        className={`activity-page font-sans h-full ${catTranslate(
          activity_category
        )}-activity`}
      >
        <h1>
          {" "}
          <span className="activity_code">
            {activity_code[0].text.slice(0, 2)}
          </span>{" "}
          {activity_title[0].text}
        </h1>
        <h3 className="activity_subtitle">{activity_subtitle[0].text}</h3>{" "}
        <hr />
        <section className="description">
          <p>{activity_description[0].text}</p>
          <hr />
        </section>
        {materials === !null && <hr />}
        {materials === !null && <h4>Мaтеріяли</h4>}
        {materials === !null && RichText.render(materials)}
        {pryklady === !null && <hr />}
        {pryklady === !null && <h4>Приклaди</h4>}
        {pryklady === !null && RichText.render(pryklady)}
        {helpful_links === !null && <hr />}
        {helpful_links === !null && <h4>Додaткові Резурси</h4>}
        <Markup containerTagName="ul" content={linksList()} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ActivityPageQuery($uid: String) {
    prismic {
      allActivitys(uid: $uid) {
        edges {
          node {
            activity_category
            activity_code
            activity_subtitle
            activity_description
            _linkType
            _meta {
              uid
            }
            materials
            submission_form
            activity_title
            ulad
            pryklady
            helpful_links {
              helpful_link {
                ... on PRISMIC__ExternalLink {
                  _linkType
                  url
                }
                ... on PRISMIC__FileLink {
                  _linkType
                  name
                  url
                }
              }
              helpful_link_description
              helpful_link_title
            }
          }
        }
      }
    }
  }
`
