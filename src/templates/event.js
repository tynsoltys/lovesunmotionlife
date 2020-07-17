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
  // console.log(data)
  const {
    activity_category,
    activity_description,
    activity_subtitle,
    activity_title,
    date_and_time,
    event_information,
    event_znymka,
    has_tochka,
    youtube_video_id,
    materials,
    ulad,
    sacred_texts,
  } = event

  const materialsList = () =>
    materials.map(i => {
      // console.log(i)
      return `<li>${i.text}</li>`
    })

  const showFiles = texts => {
    console.log(texts)
    if (texts === null) {
      return false
    } else if (texts[0].religious_file === null) {
      return false
    } else if (texts[0] === undefined) {
      return false
    } else {
      return true
    }
  }

  console.log(showFiles(sacred_texts))

  const linksArray = () =>
    sacred_texts.map(i => {
      // console.log(i)
      const { religious_file, button_text } = i

      return `<li className="btn"><a class="btn bg-orange-500 ml-0" href="${
        religious_file.url !== null ? religious_file.url : ""
      }" target="_blank">${button_text[0].text}</a></li>`
    })

  const linksList = () => linksArray().join("")

  return (
    <Layout ulad={ulad} pageType="event">
      <div
        className={`font-sans h-full
        w-full ${catTranslate(activity_category)}-activity activity-container`}
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
                  {RichText.render(activity_description)}
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
          {youtube_video_id !== null ? (
            <section className="video-box">
              <h3>Відео</h3>
              <div className="embed-container">
                <iframe
                  src={`https://www.youtube.com/embed/${youtube_video_id[0].text.substr(
                    0,
                    11
                  )}`}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </section>
          ) : (
            ""
          )}
        </div>
        {showFiles(sacred_texts) == true ? (
          <div className="bottom-section">
            <section className="helpful-files">
              <h3>Додaтки</h3>
              <Markup containerTagName={`ul`} content={linksList()} />
            </section>
          </div>
        ) : (
          ""
        )}

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
            activity_category
            youtube_video_id
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
            sacred_texts {
              religious_file {
                _linkType
                ... on PRISMIC__FileLink {
                  _linkType
                  url
                }
              }
              button_text
            }
          }
        }
      }
    }
  }
`
