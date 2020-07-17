export const uladification = ulad => {
  const uladString = JSON.stringify(ulad)
  if (uladString === "true") {
    // console.info(`ULAD IS UPU`)
    return `upu`
  } else {
    // console.info(`ULAD IS UPN`)
    return `upn`
  }
}

export const ukrainification = ulad => {
  const uladString = JSON.stringify(ulad)
  if (uladString === "true") {
    // console.info(`ULAD IS UPU`)
    return `УПЮ+`
  } else {
    // console.info(`ULAD IS UPN`)
    return `УПН`
  }
}

export function catTranslate(category) {
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
