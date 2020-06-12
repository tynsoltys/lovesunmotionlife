import { Link } from "gatsby"
import PropTypes from "prop-types"
import Image from "../components/image"
import React from "react"
import Logo from "../images/LSML_logo_svg.svg"

const Header = ({ siteTitle }) => (
  <header className="px-4 bg-green-700 shadow-lg flex justify-center items-center">
    <Link to="/tochky_upu">Точки</Link>
    <Link to="/tochky">
      <img src={Logo} alt="" className="py-2" />
    </Link>
    <Link to="/tochky_upu">Кaлєндaр</Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
