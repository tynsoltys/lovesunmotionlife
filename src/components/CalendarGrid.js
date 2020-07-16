import React, { Component } from "react"
import { Link } from "gatsby"
import { Markup } from "interweave"
import { catTranslate } from "../utils/linkResolver"
import { uladification } from "../utils/uladConverters"

const CalendarGrid = ({ ulad, upuEvents, upnEvents }) => {
  console.log(ulad, upnEvents, upuEvents)

  function eventConstructor(eventCode, eventUlad) {
    console.log(`TOCHKA CODE`, eventCode, eventUlad)
    const eventUrl = `${eventUlad}_${eventCode}`
    console.log(eventUrl)
    // console.log(events)

    const eventSet = u => {
      console.log(u)
      if (u === "upn") {
        return upnEvents
      } else {
        return upuEvents
      }
    }

    // console.log(eventSet(eventUlad))

    const eventNode = eventSet(eventUlad).filter(i => {
      // console.log(i.node._meta.uid)
      return i.node._meta.uid === eventUrl
    })
    console.log(eventNode[0].node)
    const { activity_title, activity_subtitle, has_tochka } = eventNode[0].node
    console.log(activity_title[0].text)

    // console.log(eventUrl)

    const hasTochkaRender = has_tochka => {
      if (has_tochka === true) {
        return `<div class="has-event-true"></div>`
      } else {
        return `<div class="has-event-false"></div>`
      }
    }

    return `
        <li>

        <a
          href="../event/${eventUrl}"
          className=" tochka-item
     ${eventCode}"
        ><div className="has-event">
         ${hasTochkaRender(has_tochka)}
        </div>
        <div className="time"><p></p></div>
        <div className="tochka-right">        <h4 className="activity_title">${
          activity_title[0].text
        }</h4>
        <p className="activity_subtitle">${
          activity_subtitle !== null ? activity_subtitle[0].text : ""
        }</p></div>
        </a>
        </li>
    `
  }

  const today = new Date()
  const dateNumber = today.getDate()
  console.log(dateNumber)

  const highlightToday = dateValue => {
    if (dateValue === dateNumber) {
      console.log(dateValue, dateNumber)
      return `today`
    } else {
      return ` `
    }
  }

  return (
    <>
      <ul className="calendar-container nav m-0">
        <li className={`day-container day-19 19 ${highlightToday(19)}`}>
          <h3>
            Неділя <span>19</span>
          </h3>
          <section>
            <Markup content={eventConstructor("19b", "upu")} />
            <Markup content={eventConstructor("19c", "upu")} />
          </section>
        </li>
        <li className={`day-container day-20 20 ${highlightToday(15)}`}>
          <h3>
            Понеділок<span>20</span>
          </h3>
          <section>
            <Markup content={eventConstructor("20a", ulad)} />
            <Markup content={eventConstructor("20b", ulad)} />
            <Markup content={eventConstructor("20c", ulad)} />
          </section>
        </li>
        <li className={`day-container day-21 21 ${highlightToday(21)}`}>
          <h3>
            Вівторок<span>21</span>
          </h3>
          <section>
            <Markup content={eventConstructor("21a", ulad)} />
            <Markup content={eventConstructor("21b", ulad)} />
            <Markup content={eventConstructor("21c", ulad)} />
          </section>
        </li>
        <li className={`day-container day-22 22 ${highlightToday(22)}`}>
          <h3>
            Середa<span>22</span>
          </h3>
          <section>
            <Markup content={eventConstructor("22a", ulad)} />
          </section>
        </li>
        <li className={`day-container day-23 23 ${highlightToday(23)}`}>
          <h3>
            Четвер<span>23</span>
          </h3>
          <section>
            <Markup content={eventConstructor("23a", ulad)} />
            <Markup content={eventConstructor("23b", ulad)} />
            <Markup content={eventConstructor("23c", ulad)} />
          </section>
        </li>
        <li className={`day-container day-24 24 ${highlightToday(24)}`}>
          <h3>
            П'ятниця<span>24</span>
          </h3>
          <section>
            <Markup content={eventConstructor("24a", ulad)} />
            <Markup content={eventConstructor("24b", ulad)} />
            <Markup content={eventConstructor("24c", ulad)} />
          </section>
        </li>
        <li className={`day-container day-25 25 ${highlightToday(25)}`}>
          <h3>
            Суботa<span>25</span>
          </h3>
          <section>
            <Markup content={eventConstructor("25a", ulad)} />
            <Markup content={eventConstructor("25e", ulad)} />
            <div>
              <a
                href="../event/upu_25d"
                class=" tochka-item 
     ${eventCode}"
              >
                <div className="has-event"></div>
                <div class="time">
                  <p>6PM EST</p>
                </div>
                <div class="tochka-right">
                  {" "}
                  <h4 class="activity_title">Молебень</h4>
                  <p class="activity_subtitle">Молебень</p>
                </div>
              </a>
            </div>
            <div>
              <a
                href="../event/upn_25c"
                class=" tochka-item 
     ${eventCode}"
              >
                <div className="has-event"></div>
                <div class="time">
                  <p>7PM EST</p>
                </div>
                <div class="tochka-right">
                  {" "}
                  <h4 class="activity_title">Зaкриття ЛСРЖ</h4>
                  <p class="activity_subtitle">Зaкриття ЛСРЖ</p>
                </div>
              </a>
            </div>
            <div>
              <a
                href="../event/upu_25c"
                class=" tochka-item 
     ${eventCode}"
              >
                <div className="has-event"></div>
                <div class="time">
                  <p>8PM EST</p>
                </div>
                <div class="tochka-right">
                  {" "}
                  <h4 class="activity_title">Вогник</h4>
                  <p class="activity_subtitle">Вогник ЛСРЖ</p>
                </div>
              </a>
            </div>
          </section>
        </li>
      </ul>
    </>
  )
}
export default CalendarGrid
