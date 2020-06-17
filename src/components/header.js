import { Link } from "gatsby"
import PropTypes from "prop-types"
import Image from "../components/image"
import React from "react"
import Logo from "../images/LSML_logo_svg.svg"

const Header = ({ ulad }) => {
  function uladification(ulad) {
    const uladString = JSON.stringify(ulad)
    console.log(uladString)
    if (uladString === "true") {
      console.log(`This page is UPU`)
      return `upu`
    } else {
      console.log(`This page is UPN`)
      return `upn`
    }
  }

  const uladURL = uladification(ulad)
  console.log(uladURL)
  return (
    <header className="px-4 bg-green-600 shadow-lg flex justify-center items-center">
      <Link to={`/tochky_${uladURL}`} className="text-3xl p-0 m-0 uppercase">
        Точки
      </Link>
      <Link to="/">
        <img src={Logo} alt="" className="py-0 m-2 mb-3" />
      </Link>
      <Link to={`/prohrama_${uladURL}`} className="text-3xl p-0 m-0 uppercase">
        Кaлєндaр
      </Link>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
