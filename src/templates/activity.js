import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link, RichText, Date } from "prismic-reactjs"
import { Markup } from "interweave"
import { linkResolver } from "gatsby-source-prismic-graphql"
import { uladification } from "../utils/uladConverters"

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
    znymka,
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

  const linksArray = () =>
    helpful_links.map(i => {
      console.log(i)
      const { helpful_link_title, helpful_link_description, helpful_link } = i
      // console.log(helpful_link_title[0].text)
      return `<li><a href="${
        helpful_links && helpful_link.url
      }" target="_blank">${
        helpful_link_title[0].text && helpful_link_title[0].text
      }</a></li>`
    })
  const linksList = () => linksArray().join("")

  return (
    <Layout ulad={ulad} pageType="activity">
      <div
        className={`font-sans h-full ${catTranslate(
          activity_category
        )}-activity activity-container`}
      >
        <div className="top-section flex">
          <section className="intro">
            <div className="intro-text">
              <h1>
                {" "}
                <span className="activity_code">
                  {activity_code[0].text.slice(0, 2)}
                </span>{" "}
                {activity_title[0].text}
              </h1>
              <h3 className="activity_subtitle">{activity_subtitle[0].text}</h3>{" "}
              <hr />
              <p>{activity_description[0].text}</p>
            </div>
            <div className="znymka-container">
              <img src={znymka.url} alt={znymka.alt} />
            </div>
          </section>
        </div>

        <div className="middle-section">
          <section className="materials ">
            <h3>Мaтеріяли</h3>
            {materials === !null && RichText.render(materials)}
          </section>

          <section className="examples">
            <h3>Приклaди і Порaди</h3>
            {RichText.render(pryklady)}
          </section>
        </div>

        <section className="resources">
          <h3>Резурси</h3>
          {console.log(linksList())}
          {helpful_links ? (
            <Markup containerTagName={`ul`} content={linksList()} />
          ) : (
            ""
          )}
        </section>
        <hr class="major-hr" />
        {submission_form ? (
          <section className="submission form-section">
            <h3>Зaвершення</h3>
          </section>
        ) : (
          ""
        )}
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
            znymka
          }
        }
      }
    }
  }
`
