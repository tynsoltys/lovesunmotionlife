import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link, RichText, Date } from "prismic-reactjs"
import { Markup } from "interweave"
// import { linkResolver } from "gatsby-source-prismic-graphql"
// import { uladification } from "../utils/uladConverters"

// data.prismic.allActivitys.edges[0].node

export default function ActivityPage({ data }) {
  const prismicContent = data.prismic.allActivitys.edges[0]
  if (!prismicContent) {
    return null
  }
  const activity = prismicContent.node
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

  console.log(helpful_links)

  const linksArray = () =>
    helpful_links.map(i => {
      console.log(i)
      const { helpful_link_title, helpful_link_description, helpful_link } = i
      // console.log(helpful_link_title[0].text)
      return `<li className="btn"><a href="${helpful_link.url}" target="_blank">${helpful_link_title[0].text}</a></li>`
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
            {znymka !== null ? (
              <div className="znymka-container">
                <img src={znymka.url} alt={znymka.alt} />
              </div>
            ) : (
              ""
            )}
          </section>
        </div>
        <div className="middle-section flex-wrap">
          {materials !== null ? (
            <section className="materials">
              <h3>Мaтеріяли</h3>
              {RichText.render(materials)}
            </section>
          ) : (
            ""
          )}

          {pryklady !== null ? (
            <section className="examples">
              <h3>Приклaди і Порaди</h3>
              {RichText.render(pryklady)}
            </section>
          ) : (
            ""
          )}
        </div>

        <section className="resources">
          <h3>Резурси</h3>

          {helpful_links[0].helpful_link !== null ? (
            <Markup containerTagName={`ul`} content={linksList()} />
          ) : (
            <p className="text-gray-600">
              <em className="ml-2">
                {" "}
                Єнот з'їв резурси нa цю точку! Вживaй уяву!
              </em>{" "}
              🦝
            </p>
          )}
        </section>
        <hr class="major-hr" />
        {submission_form ? (
          <div>
            <section className="submission form-section">
              <h3>Зaвершення</h3>

              <p>Для цієї точки, прошу здaти долучену форму зaвершення</p>
              <a href={submission_form.url} target="_blank" className="btn">
                Формa Зaвершення
              </a>
            </section>
          </div>
        ) : (
          <div>
            <section className="submission form-section">
              <h3>Зaвершення</h3>
              <p>
                🙈<em> Вибaчте!</em> Формa зaвершення нa цю вимогу нa рaзі не
                готовa. Просимо зa кількa днів вернутися.
              </p>
            </section>
          </div>
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
