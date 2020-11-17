// console.log(XState)

input = [
  "teamName",
  "teamName",
  "teamName",
  "teamName",
  "teamName",
  "teamName",
  "teamName",
  "teamName",

  "teamName",
]

function populateBracket(teams = input) {
  len = teams.length
  remander = teams.length % 8

  arr = [[]]
  j = 0
  for (i = 0; i < teams.length; i++) {
    if (i % 8 == 0 && i != 0) {
      j++
      arr.push([])
    }
    arr[j].push(teams[i])
  }
  if (arr.length > 1) {
    arr.forEach((i) => {
      const first_bracket = document.querySelector(".bracket").cloneNode(true)
      const bracketSection = document.querySelector(".bracket-section")
      bracketSection.append(first_bracket)
    })
  }
  arr.forEach((array, j) => {
    array.length = 8
    // html = ""
    // for (i = 0; i < 8; i++) {
    //   html = html + `<div class="team"><span>${array[i]}</span></div>`
    // }
    // html = bracket(html)
    // document.querySelector('.bracket').style.display = 'grid'
    // document.querySelectorAll('.col-1 span').forEach((el, i) => {
    //   el.innerText = array[i] || ''
    // })

    const this_bracket = Array.from(document.querySelectorAll(".bracket"))[j]

    this_bracket.querySelectorAll(".col-1 span").forEach((el, idx) => {
      el.innerText = array[idx] || ""
    })
  })

  items = Array.from(document.querySelectorAll(".team"))
  maxHeight = items.reduce((a, c) => {
    h = c.getBoundingClientRect().height
    if (h > a) return h
    else return a
  }, 0)
  items.forEach((team) => {
    team.style.height = String(maxHeight) + "px"
  })
  document.documentElement.style.setProperty(
    "--bracket-team-height",
    `${maxHeight}px`,
  )
}

function bracket(teamsHtml) {
  return `
<div class="bracket">
  <div class="col col-1">
    ${teamsHtml}
  </div>
  <div class="col col-2">
    <div class="team"></div>
    <div class="team"></div>
    <div class="team"></div>
    <div class="team"></div>
  </div>
  <div class="col col-3">
    <div class="team"></div>
    <div class="team"></div>
  </div>
  <div class="col col-4">
    <div class="team"></div>
  </div>
</div>
`
}
getAllTeams()
  .then((teams) =>
    teams.filter(({ teamName }) => teamName).map(({ teamName }) => teamName),
  )
  .then((teams) => {
    if (teams.length > 3) populateBracket(teams)
  })

/*
 */
expected = `
<div class="bracket">
  <div class="col">
    <div class="team"></div>
    <div class="team"></div>
    <div class="team"></div>
    <div class="team"></div>
    <div class="team"></div>
    <div class="team"></div>
    <div class="team"></div>
    <div class="team"></div>
  </div>
  <div class="col col-2">
    <div class="team"></div>
    <div class="team"></div>
    <div class="team"></div>
    <div class="team"></div>
  </div>
  <div class="col col-3">
    <div class="team"></div>
    <div class="team"></div>
  </div>
  <div class="col col-4">
    <div class="team"></div>
  </div>
</div>
`
