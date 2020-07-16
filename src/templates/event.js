import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link, RichText, Date } from "prismic-reactjs"
import { Markup } from "interweave"
import { catTranslate } from "../utils/uladConverters"

export default function EventPage({ data }) {
  const prismicContent = data.prismic.allEvents.edges[0]
  if (!prismicContent) {
    return null
  }
  const event = prismicContent.node
  console.log(data)
  const {
    activity_category,
    activity_description,
    activity_subtitle,
    activity_title,
    date_and_time,
    event_information,
    event_znymka,
    has_tochka,
    hutirka_video_link,
    materials,
    ulad,
  } = event
  console.log(event)

  const materialsList = () =>
    materials.map(i => {
      console.log(i.text)
      return `<li>${i.text}</li>`
    })

  // const linksArray = () =>
  //   helpful_links.map(i => {
  //     console.log(i)
  //     const { helpful_link_title, helpful_link_description, helpful_link } = i
  //     // console.log(helpful_link_title[0].text)
  //     return `<li className="btn"><a href="${helpful_link.url}" target="_blank">${helpful_link_title[0].text}</a></li>`
  //   })

  // const linksList = () => linksArray().join("")

  return (
    <Layout ulad={ulad} pageType="event">
      <div
        className={`font-sans h-full
        w-full activity-container`}
      >
        <div className="top-section flex w-full">
          <section className="intro w-full">
            <div className="intro-text">
              <h1>{activity_title[0].text}</h1>
              {activity_subtitle !== null ? (
                <h3 className="activity_subtitle">
                  {activity_subtitle[0].text}
                </h3>
              ) : (
                ""
              )}
              <hr />
              {activity_description !== null ? (
                <p className="activity_description">
                  {activity_description[0].text}
                </p>
              ) : (
                ""
              )}
            </div>
            {event_znymka !== null ? (
              <div className="znymka-container">
                <img src={event_znymka.url} alt={event_znymka.alt} />
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
        </div>

        <hr class="major-hr" />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query EventPageQuery($uid: String) {
    prismic {
      allEvents(uid: $uid) {
        edges {
          node {
            activity_description
            activity_subtitle
            activity_title
            date_and_time
            event_information
            event_znymka
            has_tochka
            materials
            ulad
            _linkType
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`
