import React, { Component } from "react"

const TochkaGrid = ({ ulad, tochky }) => {
  return (
    <>
      <ul className="container nav">
        <li className="love-list">
          <ul>
            <li className="tochka-item love l1">l1</li>
            <li className="tochka-item love l2">l2</li>
            <li className="tochka-item love l3">l3</li>
            <li className="tochka-item love l4">l4</li>
          </ul>
        </li>
        <li className="sun-list">
          <ul>
            <li className="tochka-item sun s1">s1</li>
            <li className="tochka-item sun s2">s2</li>
            <li className="tochka-item sun s3">s3</li>
            <li className="tochka-item sun s4">s4</li>
          </ul>
        </li>
        <li className="motion-list">
          <ul>
            <li className="tochka-item motion m1">m1</li>
            <li className="tochka-item motion m2">m2</li>
            <li className="tochka-item motion m3">m3</li>
            <li className="tochka-item motion m4">m4</li>
          </ul>
        </li>
        <li className="zife-list">
          <ul>
            <li className="tochka-item zife z1">z1</li>
            <li className="tochka-item zife z2">z2</li>
            <li className="tochka-item zife z3">z3</li>
            <li className="tochka-item zife z4">z4</li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default TochkaGrid
