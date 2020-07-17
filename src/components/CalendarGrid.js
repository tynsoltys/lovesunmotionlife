import React from "react"
import { Markup } from "interweave"

import moment from "moment-timezone"
import { catTranslate } from "../utils/uladConverters"

const CalendarGrid = ({ ulad, upuEvents, upnEvents }) => {
  // console.log(ulad, upnEvents, upuEvents)

  function eventConstructor(eventCode, eventUlad) {
    // console.log(`TOCHKA CODE`, eventCode, eventUlad)
    const eventUrl = `${eventUlad}_${eventCode}`
    // console.log(eventUrl)

    const eventSet = u => {
      // console.log(u)
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
    // console.log(eventNode[0].node)
    const {
      activity_title,
      activity_subtitle,
      has_tochka,
      activity_category,
      date_and_time,
    } = eventNode[0].node

    const returnTime = timeString => {
      // const zoned = moment.tz(date_and_time, "America/Toronto")
      // return zoned.utc().format("LT")
      const str = moment.tz(date_and_time, "America/Toronto")
      return str.utc().format("LT")
    }

    const hasTochkaRender = has_tochka => {
      if (has_tochka === true) {
        return `<div class="has-event-true"></div>`
      } else {
        return `<div class="has-event-false"></div>`
      }
    }

    return `
        <li>
          <a href="../event/${eventUrl}" class="
          ${catTranslate(activity_category)}
          ${eventCode}"
            >
            <div class="has-event">
              ${hasTochkaRender(has_tochka)}
            </div>
            <div class="time">
              <p>${returnTime(date_and_time)} EST</p>
            </div>
            <div class="tochka-right">
              <h4 class="activity_title">
                ${activity_title[0].text}
              </h4>
              <p class="activity_subtitle">
              ${activity_subtitle !== null ? activity_subtitle[0].text : ""}
              </p>
            </div>
          </a>
        </li>
    `
  }

  const today = new Date()
  const dateNumber = today.getDate()
  // console.log(dateNumber)

  const highlightToday = dateValue => {
    if (dateValue === dateNumber) {
      // console.log(dateValue, dateNumber)
      return `today`
    } else {
      return ` `
    }
  }

  function mobileNavClick(e, elClass) {
    console.log(e, elClass)
  }

  return (
    <>
      <nav className="mobile-cal-menu">
        <ul>
          <li>
            <a
              href="#day-19"
              className={`mobile-cal-link ${highlightToday(19)}`}
              onClick={e => mobileNavClick(e, "day-19")}
            >
              19
            </a>
          </li>
          <li>
            <a
              href="#day-20"
              className={`mobile-cal-link ${highlightToday(20)} `}
              onClick={mobileNavClick}
            >
              20
            </a>
          </li>
          <li>
            <a
              href="#day-21"
              className={`mobile-cal-link ${highlightToday(21)} `}
              onClick={mobileNavClick}
            >
              21
            </a>
          </li>
          <li>
            <a
              href="#day-22"
              className={`mobile-cal-link ${highlightToday(22)} `}
              onClick={mobileNavClick}
            >
              22
            </a>
          </li>
          <li>
            <a
              href="#day-23"
              className={`mobile-cal-link ${highlightToday(23)} `}
              onClick={mobileNavClick}
            >
              23
            </a>
          </li>
          <li>
            <a
              href="#day-24"
              className={`mobile-cal-link ${highlightToday(24)} `}
              onClick={mobileNavClick}
            >
              24
            </a>
          </li>
          <li>
            <a
              href="#day-25"
              className={`mobile-cal-link ${highlightToday(25)} `}
              onClick={mobileNavClick}
            >
              25
            </a>
          </li>
        </ul>
      </nav>
      <ul className="calendar-container nav m-0">
        <li
          id="day-19"
          className={`day-container day-19 19 ${highlightToday(19)}`}
        >
          <h3>
            Неділя <span>19</span>
          </h3>
          <section>
            <Markup content={eventConstructor("19b", "upu")} />
            <Markup content={eventConstructor("19c", "upu")} />
          </section>
        </li>
        <li
          id="day-20"
          className={`day-container day-20 20 ${highlightToday(20)}`}
        >
          <h3>
            Понеділок<span>20</span>
          </h3>
          <section>
            <Markup content={eventConstructor("20a", ulad)} />
            <Markup content={eventConstructor("20b", ulad)} />
            <Markup content={eventConstructor("20c", ulad)} />
          </section>
        </li>
        <li
          id="day-21"
          className={`day-container day-21 21 ${highlightToday(21)}`}
        >
          <h3>
            Вівторок<span>21</span>
          </h3>
          <section>
            <Markup content={eventConstructor("21a", ulad)} />
            <Markup content={eventConstructor("21b", ulad)} />
            <Markup content={eventConstructor("21c", ulad)} />
          </section>
        </li>
        <li
          id="day-22"
          className={`day-container day-22 22 ${highlightToday(22)}`}
        >
          <h3>
            Середa<span>22</span>
          </h3>
          <section>
            <Markup content={eventConstructor("22a", ulad)} />
          </section>
        </li>
        <li
          id="day-23"
          className={`day-container day-23 23 ${highlightToday(23)}`}
        >
          <h3>
            Четвер<span>23</span>
          </h3>
          <section>
            <Markup content={eventConstructor("23a", ulad)} />
            <Markup content={eventConstructor("23b", ulad)} />
            <Markup content={eventConstructor("23c", ulad)} />
          </section>
        </li>
        <li
          id="day-24"
          className={`day-container day-24 24 ${highlightToday(24)}`}
        >
          <h3>
            П'ятниця<span>24</span>
          </h3>
          <section>
            <Markup content={eventConstructor("24a", ulad)} />
            <Markup content={eventConstructor("24b", ulad)} />
            <Markup content={eventConstructor("24c", ulad)} />
          </section>
        </li>
        <li
          id="day-25"
          className={`day-container day-25 25 ${highlightToday(25)}`}
        >
          <h3>
            Суботa<span>25</span>
          </h3>
          <section>
            <Markup content={eventConstructor("25a", ulad)} />
            <Markup content={eventConstructor("25e", ulad)} />
            <Markup content={eventConstructor("25d", "upu")} />
            <Markup content={eventConstructor("25c", "upn")} />
            <Markup content={eventConstructor("25c", "upu")} />
          </section>
        </li>
      </ul>
      <div className="w-full text-center legend">
        <p>
          <span className="legend-symbol mr-3">▾</span>рaхується до проєкту
        </p>
      </div>
    </>
  )
}
export default CalendarGrid
