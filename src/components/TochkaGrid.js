import React, { Component } from "react"
// import { Link } from "gatsby"
import { Markup } from "interweave"
import IconTriangle from "./icons/IconTriangle"

const TochkaGrid = ({ ulad, tochky }) => {
  console.log(ulad)
  console.log(tochky)
  function liConstructor(tochkaCode) {
    // console.log(`TOCHKA CODE`, tochkaCode)
    const tochkaUrl = `${ulad}-${tochkaCode}`
    // console.log(tochkaUrl)
    const tochkaNode = tochky.edges.filter(i => {
      return i.node._meta.uid === tochkaUrl
    })
    const {
      activity_category,
      activity_code,
      activity_title,
      activity_subtitle,
      has_event,
    } = tochkaNode[0].node
    console.log(activity_code, has_event)
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
    const hasEventRender = has_event => {
      if (has_event === true) {
        return `<div class="has-event-true"></div>`
      } else {
        return `<div class="has-event-false"></div>`
      }
    }
    return `
      <li>
        <a
          href="../activity/${tochkaUrl}"
          class="${catTranslate(activity_category)} tochka-item 
    ${catTranslate(activity_category)}-item ${tochkaCode}"
        ><div className="has-event">
         ${hasEventRender(has_event)}
        </div>
        <div class="tochka-left">        <span class="activity_code">${activity_code[0].text.slice(
          0,
          2
        )}</span></div>
        <div class="tochka-right">        <h3 class="activity_title">${
          activity_title[0].text
        }</h3>
        <p class="activity_subtitle">${activity_subtitle[0].text}</p></div>
        </a>
      </li>
    `
  }

  return (
    <>
      <ul className="tochky-container nav m-0">
        <li className="love-list">
          <section>
            <Markup content={liConstructor("l1")} />
            <Markup content={liConstructor("l2")} />
            <Markup content={liConstructor("l3")} />
            <Markup content={liConstructor("l4")} />
          </section>
        </li>
        <li className="sun-list">
          <section>
            <Markup content={liConstructor("s1")} />
            <Markup content={liConstructor("s2")} />
            <Markup content={liConstructor("s3")} />
            <Markup content={liConstructor("s4")} />
          </section>
        </li>
        <li className="motion-list">
          <section>
            <Markup content={liConstructor("r1")} />
            <Markup content={liConstructor("r2")} />
            <Markup content={liConstructor("r3")} />
            <Markup content={liConstructor("r4")} />
          </section>
        </li>
        <li className="zife-list">
          <section>
            <Markup content={liConstructor("z1")} />
            <Markup content={liConstructor("z2")} />
            {/* <Markup content={liConstructor("z3")} /> */}
            <Markup content={liConstructor("z4")} />
          </section>
        </li>
      </ul>
    </>
  )
}
export default TochkaGrid
