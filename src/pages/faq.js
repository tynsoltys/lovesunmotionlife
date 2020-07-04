import React from "react"
import { Link, graphql } from "gatsby"
import IconBackArrow from "../components/icons/IconBackArrow"

import Layout from "../components/layout"
import LogoFancy from "../components/LogoFancy"

export default function FaqPage({ data }) {
  const prismicContent = data.prismic.allFaqs.edges[0]
  if (!prismicContent) {
    return null
  }
  const faqpage = prismicContent.node
  console.log(faqpage)

  let qs = Array.from(document.getElementsByTagName("h4"))

  const addListeners = a =>
    a.map(i => {
      i.addEventListener("click", function () {
        console.log(this)
        this.classList.toggle("active")
      })
    })

  addListeners(qs)
  console.log(qs)

  return (
    <Layout pageType="faq">
      <div className="faq-container">
        <section className="intro">
          <h2>{faqpage.faq_page_title[0].text}</h2>
          <hr />
          <p>{faqpage.faq_info[0].text}</p>
          <ul className="faq-topics-list">
            <li className="faq-topic">
              <a className="bg-punch-500 text-white italic" href="#general">
                {/* {faqpage.general_section_title[0].text} */}
                Про ЛСРЖ
              </a>
            </li>
            <li className="faq-topic">
              <a className="bg-ronchi-500 text-white italic" href="#zustrich">
                {/* {faqpage.zustrich_section_title[0].text} */}Зустріч і
                Зaняття
              </a>
            </li>
            <li className="faq-topic">
              <a className="bg-zelene-500 text-white italic" href="#tochky">
                {/* {faqpage.tochky_section_title[0].text} */} Проєкти до
                Відзнaки ЛСРЖ
              </a>
            </li>
            <li className="faq-topic">
              <a
                className="bg-syne-500 text-white italic"
                href="#submission-info"
              >
                {/* {faqpage.submission_section_title[0].text} */} Зaвершення
                Проектів
              </a>
            </li>
            <li className="faq-topic">
              <a className="bg-gray-500 text-white italic" href="#tshirt">
                {/* {faqpage.tshirt_section_title[0].text} */}Футболки і
                Відзнaкa
              </a>
            </li>
          </ul>
        </section>
        <section
          className="general faq-block border-4 border-punch-500"
          id="general"
        >
          <h3>{faqpage.general_section_title[0].text}</h3>
          <ul>
            {faqpage.general_section_faq.map((i, j) => {
              return (
                <div className="faq-pair" key={`g${j}`}>
                  <h4 className={`general_q_${j} question`}>
                    {i.question[0].text} <span className="expando">＋</span>
                  </h4>
                  <p className={`general_a_${j} answer`}>{i.answer[0].text}</p>{" "}
                </div>
              )
            })}
          </ul>
          <div className="top-link">
            <a href="#intro">
              <IconBackArrow />
            </a>
          </div>
        </section>
        <section
          className="zustrich faq-block border-4 border-ronchi-500"
          id="zustrich"
        >
          <h3>{faqpage.zustrich_section_title[0].text}</h3>
          <ul>
            {faqpage.zustrich_section_faq.map((i, j) => {
              return (
                <div className="faq-pair" key={`z${j}`}>
                  <h4 className={`zustrich_q_${j} question`}>
                    {i.question[0].text} <span className="expando">＋</span>
                  </h4>
                  <p className={`zustrich_a_${j} answer`}>{i.answer[0].text}</p>{" "}
                </div>
              )
            })}
          </ul>
          <div className="top-link">
            <a href="#intro">
              <IconBackArrow />
            </a>
          </div>
        </section>
        <section
          className="tochky faq-block border-4 border-zelene-500"
          id="tochky"
        >
          <h3>{faqpage.tochky_section_title[0].text}</h3>
          <ul>
            {faqpage.tochky_section_faq.map((i, j) => {
              return (
                <div className="faq-pair" key={`t${j}`}>
                  <h4 className={`tochky_q_${j} question`}>
                    {i.question[0].text} <span className="expando">＋</span>
                  </h4>
                  <p className={`tochky_a_${j} answer`}>{i.answer[0].text}</p>{" "}
                </div>
              )
            })}
          </ul>
          <div className="top-link">
            <a href="#intro">
              <IconBackArrow />
            </a>
          </div>
        </section>
        <section
          className="submission-info faq-block border-4 border-syne-500"
          id="submission-info"
        >
          <h3>{faqpage.submission_section_title[0].text}</h3>
          <ul>
            {faqpage.submission_section_faq.map((i, j) => {
              return (
                <div className="faq-pair" key={`s${j}`}>
                  <h4 className={`submission_q_${j} question`}>
                    {i.question[0].text} <span className="expando">＋</span>
                  </h4>
                  <p className={`submission_a_${j} answer`}>
                    {i.answer[0].text}
                  </p>{" "}
                </div>
              )
            })}
          </ul>
          <div className="top-link">
            <a href="#intro">
              <IconBackArrow />
            </a>
          </div>
        </section>
        <section
          className="tshirt faq-block border-4 border-gray-500"
          id="tshirt"
        >
          <h3>{faqpage.tshirt_section_title[0].text}</h3>

          <ul>
            {faqpage.tshirt_section_faq.map((i, j) => {
              return (
                <div className="faq-pair" key={`v${j}`}>
                  <h4 className={`tshirt_q_${j} question`}>
                    {i.question[0].text} <span className="expando">＋</span>
                  </h4>
                  <p className={`tshirt_a_${j} answer`}>{i.answer[0].text}</p>
                </div>
              )
            })}
          </ul>
          <div className="top-link">
            <a href="#intro">
              <IconBackArrow />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query FaqPageQuery {
    prismic {
      allFaqs {
        edges {
          node {
            faq_info
            faq_page_title
            general_section_title
            submission_section_title
            tochky_section_title
            tshirt_section_title
            zustrich_section_title
            general_section_faq {
              answer
              question
            }
            submission_section_faq {
              answer
              question
            }
            tochky_section_faq {
              answer
              question
            }
            tshirt_section_faq {
              answer
              question
            }
            zustrich_section_faq {
              answer
              question
            }
            _linkType
          }
        }
      }
    }
  }
`
