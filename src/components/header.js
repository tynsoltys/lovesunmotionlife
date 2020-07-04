import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/LSML_logo_svg.svg"
import { uladification, ukrainification } from "../utils/uladConverters"
import IconQuestion from "../components/icons/IconQuestion"
import IconGrid from "../components/icons/IconGrid"
import IconBackArrow from "../components/icons/IconBackArrow"
import IconCalendar from "../components/icons/IconCalendar"

const Header = ({ ulad, pageType, uladName }) => {
  console.log(`huhuhuh`, uladName)
  console.log(pageType)

  const showToggle = () => {
    if (pageType === "faq") {
      console.log(pageType)
      return false
    } else if (pageType === "activity") {
      return false
    } else {
      return true
    }
  }
  console.log(showToggle())

  return (
    <header className="">
      <div className="link-container">
        {showToggle() ? (
          <div className="header-link ulad-toggle">
            {" "}
            <Link to={`${pageType}_${uladification(!ulad)}`} className="">
              <div className="toggle-container">
                <div className={`toggle-ball toggle-${uladName}`}></div>
              </div>
              <div className="ulads">
                <span>УПН</span>
                <span>УПЮ+</span>
              </div>
            </Link>
          </div>
        ) : (
          <Link to={`/tochky_${uladName}`} className={`back-arrow text-3xl`}>
            <IconBackArrow />
          </Link>
        )}
        <div className="header-link tochky-link">
          {pageType !== "faq" ? (
            <Link
              to={`/tochky_${uladName}`}
              className={`text-2xl ${
                pageType === "tochky" ? `current-page` : null
              }`}
            >
              <IconGrid />
              <span className="header-link-word">Проєкти</span>
            </Link>
          ) : (
            " "
          )}
        </div>

        <div className="header-link logo-link">
          {" "}
          <Link to="/" className="logo ">
            <img src={Logo} alt="" className="" />
          </Link>
        </div>
        <div className="header-link calendar-link">
          {pageType !== "faq" ? (
            <Link
              to={`/calendar_${uladName}`}
              className={`text-2xl ${
                pageType === "calendar" ? `current-page` : null
              }`}
            >
              <IconCalendar />
              <span className="header-link-word">Зустріч</span>
            </Link>
          ) : (
            " "
          )}
        </div>
        <div className="header-link faq-link ">
          {" "}
          <Link to={`/faq`} className="text-3xl">
            <IconQuestion color="false" />
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
