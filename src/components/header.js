import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/LSML_logo_svg.svg"
import { uladification, ukrainification } from "../utils/uladConverters"

const Header = ({ ulad, pageType, uladName }) => {
  console.log(`huhuhuh`, uladName)
  return (
    <header className="">
      <div className="link-container">
        {pageType !== "activity" ? (
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
        ) : (
          <Link to={`/tochky_${uladName}`} className={`text-2xl`}>
            {/* <FontAwesomeIcon icon={["fal", "arrow-circle-left"]} /> */}⬅
          </Link>
        )}

        <div className="header-link tochky-link">
          {" "}
          <Link
            to={`/tochky_${uladName}`}
            className={`text-2xl  ${
              pageType === "tochky" || pageType === "activity"
                ? `current-page`
                : null
            }`}
          >
            {/* <FontAwesomeIcon icon={["fal", "th"]} className="mr-1" /> */}

            <span> Вимоги {ukrainification(ulad)}</span>
          </Link>
        </div>
        <div className="header-link logo-link">
          {" "}
          <Link to="/" className="logo ">
            <img src={Logo} alt="" className="" />
          </Link>
        </div>
        <div className="header-link calendar-link">
          {" "}
          <Link
            to={`/calendar_${uladName}`}
            className={`text-2xl ${
              pageType === "calendar" ? `current-page` : null
            }`}
          >
            {/* <FontAwesomeIcon icon={["fal", "calendar-alt"]} className="mr-1" /> */}
            <span> Зустріч {ukrainification(ulad)}</span>
          </Link>
        </div>
        <div className="header-link faq-link ">
          {" "}
          <Link to={`/faq`} className="text-3xl">
            ?
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
