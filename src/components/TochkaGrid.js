import React, { Component } from "react"
import { Link } from "gatsby"

const TochkaGrid = ({ ulad, tochky }) => {
  console.log(ulad)
  console.log(tochky)

  function liConstructor(tochkaCode) {
    const tochkaUrl = `${uladification(ulad)}-${tochkaCode}`
    const tochkaNode = tochky.filter(i => {
      return i.node._meta.uid === tochkaUrl
    })
    const {
      activity_category,
      activity_code,
      activity_title,
      activity_subtitle,
    } = tochkaNode[0].node
    console.log(activity_title[0].text)
    console.log(activity_subtitle[0].text)
    return `
      <li className="tochka-item love ${tochkaCode}">
        <Link
          to="activity/${tochkaUrl}"
          className=""
        >
        <div className="activity_code">${activity_code[0].text.slice(
          0,
          2
        )}</div>
        <h3 className="activity_title">${activity_title[0].text}</h3>
        <div className="activity_subtitle">${activity_title[0].text}</div>
        </Link>
      </li>
    `
  }

  console.log(liConstructor("s3"))

  function uladification(ulad) {
    const uladString = JSON.stringify(ulad)
    if (uladString === "true") {
      return `upu`
    } else {
      return `upn`
    }
  }

  const uladURL = uladification(ulad)
  console.log(uladURL)

  return (
    <>
      <ul className="container nav border m-0">
        <li className="love-list">
          <ul>
            {liConstructor("s1")}
            {liConstructor("s2")}
            {liConstructor("s3")}
            {liConstructor("s4")}
          </ul>
        </li>
        <li className="sun-list">
          <ul>
            {liConstructor("s1")}
            {liConstructor("s2")}
            {liConstructor("s3")}
            {liConstructor("s4")}
          </ul>
        </li>
        <li className="motion-list">
          <ul>
            <li className="tochka-item motion m1">
              <Link to={`activity/${uladification(ulad)}-m1`} className="">
                m1 + name
              </Link>
            </li>
            <li className="tochka-item motion m2">
              <Link to={`activity/${uladification(ulad)}-m2`} className="">
                m2 + name
              </Link>
            </li>
            <li className="tochka-item motion m3">
              <Link to={`activity/${uladification(ulad)}-m3`} className="">
                m3 + name
              </Link>
            </li>
            <li className="tochka-item motion m4">
              <Link to={`activity/${uladification(ulad)}-m4`} className="">
                m4 + name
              </Link>
            </li>
          </ul>
        </li>
        <li className="zife-list">
          <ul>
            <li className="tochka-item zife z1">
              <Link to={`activity/${uladification(ulad)}-z1`} className="">
                z1 + name
              </Link>
            </li>
            <li className="tochka-item zife z2">
              <Link to={`activity/${uladification(ulad)}-z2`} className="">
                z2 + name
              </Link>
            </li>
            <li className="tochka-item zife z3">
              <Link to={`activity/${uladification(ulad)}-z3`} className="">
                z3 + name
              </Link>
            </li>
            <li className="tochka-item zife z4">
              <Link to={`activity/${uladification(ulad)}-z4`} className="">
                z4 + name
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default TochkaGrid
