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
