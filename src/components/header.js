import { Link } from "gatsby"
import PropTypes from "prop-types"
import Image from "../components/image"
import React from "react"
import Logo from "../images/LSML_logo_svg.svg"

const Header = ({ ulad }) => {
  function uladification(ulad) {
    const uladString = JSON.stringify(ulad)
    // console.log(uladString)
    if (uladString === "true") {
      console.info(`ULAD IS UPU`)
      return `upu`
    } else {
      console.info(`ULAD IS UPN`)
      return `upn`
    }
  }

  const uladURL = uladification(ulad)
  // console.log(uladURL)
  return (
    <header className="">
      <Link
        to={`/tochky_${uladURL}`}
        className="left-skew bg-green-500 rounded-lg max-w-1/2"
      >
        Вимоги
      </Link>
      <Link to="/" className="logo">
        <img src={Logo} alt="" className="" />
      </Link>

      <Link
        to={`/prohrama_${uladURL}`}
        className="right-skew bg-green-500 rounded-lg max-w-1/2"
      >
        Зустріч
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
