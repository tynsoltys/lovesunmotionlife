import { Link } from "gatsby"
import PropTypes from "prop-types"
import Image from "../components/image"
import React from "react"
import Logo from "../images/LSML_logo_svg.svg"
import { uladification, ukrainification } from "../utils/uladConverters"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"

const Header = ({ ulad, pageType, uladName }) => {
  console.log(`huhuhuh`, uladName)
  return (
    <header className="">
      <div className="link-container">
        <div className="header-link ulad-toggle">
          {" "}
          <Link to={`${pageType}_${uladification(!ulad)}`} className="">
            <div className="toggle-container">
              <div className={`toggle-ball toggle-${uladName}`}></div>
            </div>
            <div className="ulads">
              <span>УПН</span>
              <br />
              <span>УПЮ+</span>
            </div>
          </Link>
        </div>
        <div className="header-link">
          {" "}
          <Link
            to={`/tochky_${uladName}`}
            className={`text-2xl  ${
              pageType === "tochky" || pageType === "activity"
                ? `current-page`
                : null
            }`}
          >
            Вимоги {ukrainification(ulad)}
          </Link>
        </div>
        <div className="header-link">
          {" "}
          <Link to="/" className="logo ">
            <img src={Logo} alt="" className="" />
          </Link>
        </div>
        <div className="header-link">
          {" "}
          <Link
            to={`/calendar_${uladName}`}
            className={`text-2xl ${
              pageType === "calendar" ? `current-page` : null
            }`}
          >
            Зустріч {ukrainification(ulad)}
          </Link>
        </div>
        <div className="header-link faq-link ">
          {" "}
          <Link
            to={`/faq`}
            className="text-2xl
          mt-8"
          >
            <FontAwesomeIcon icon={["fal", "question-circle"]} />
          </Link>
        </div>
      </div>
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
