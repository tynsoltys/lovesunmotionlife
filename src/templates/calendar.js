import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

// data.prismic.allActivitys.edges[0].node
export default function CalendarPage({ data }) {
  const calendarPage = data.prismic.allCalendars.edges[0].node
  const { calendar_title, ulad } = calendarPage
  console.log(`test`, ulad)
  const today = new Date()
  const dateNumber = today.getDate()
  console.log(dateNumber)

  const highlightToday = dateValue => {
    if (dateValue === dateNumber) {
      return `today`
    }
  }

  return (
    <Layout ulad={ulad} pageType="calendar">
      <div className="calendar-container calendar-placeholder">
        <div className={`day-19 day-container`}>
          <h3>
            Понеділок 19<span className="oho">ого</span>
          </h3>
          <div className="a 19b">
            <p>Щось рухливе..</p>
          </div>
          <div className="b 19a">
            <p>Щось смaчне..</p>
          </div>
          <div className="c 19c">
            <p>Щось рaдісне..</p>
          </div>
        </div>
        <div className={`day-20 day-container`}>
          <h3>
            Вівторок 20<span className="oho">ого</span>
          </h3>
          <div className="a 20b">
            <p>Щось рухливе..</p>
          </div>
          <div className="b 20a">
            <p>Щось смaчне..</p>
          </div>
          <div className="c 20c">
            <p>Щось рaдісне..</p>
          </div>
        </div>
        <div className={`day-21 day-container`}>
          <h3>
            Середa 21<span className="oho">ого</span>
          </h3>
          <div className="a 21b">
            <p>Щось рухливе..</p>
          </div>
          <div className="b 21a">
            <p>Щось смaчне..</p>
          </div>
          <div className="c 21c">
            <p>Щось рaдісне..</p>
          </div>
        </div>
        <div className={`day-22 day-container`}>
          <h3>
            Четвер 22<span className="oho">ого</span>
          </h3>
          <div className="a 22b">
            <p>Щось рухливе..</p>
          </div>
          <div className="b 22a">
            <p>Щось смaчне..</p>
          </div>
          <div className="c 22c">
            <p>Щось рaдісне..</p>
          </div>
        </div>
        <div className={`day-23 day-container`}>
          <h3>
            П'ятниця 23<span className="oho">ого</span>
          </h3>
          <div className="a 23b">
            <p>Щось рухливе..</p>
          </div>
          <div className="b 23a">
            <p>Щось смaчне..</p>
          </div>
          <div className="c 23c">
            <p>Щось рaдісне..</p>
          </div>
        </div>
        <div className={`day-24 day-container`}>
          <h3>
            Суботa 24<span className="oho">ого</span>
          </h3>
          <div className="a 24b">
            <p>Щось рухливе..</p>
          </div>
          <div className="b 24a">
            <p>Щось смaчне..</p>
          </div>
          <div className="c 24c">
            <p>Щось рaдісне..</p>
          </div>
        </div>
        <div className={`day-25 day-container`}>
          <h3>
            Неділя 25<span className="oho">ого</span>
          </h3>
          <div className="a 25b">
            <p>Щось рухливе..</p>
          </div>
          <div className="b 25a">
            <p>Щось смaчне..</p>
          </div>
          <div className="c 25c">
            <p>Щось рaдісне..</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query CalendarPageQuery($uid: String) {
    prismic {
      allCalendars(uid: $uid) {
        edges {
          node {
            ulad
            calendar_title
            _linkType
            _meta {
              lang
              alternateLanguages {
                lang
                uid
              }
            }
          }
        }
      }
    }
  }
`
