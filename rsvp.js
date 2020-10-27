anotherMobileBtn = document.querySelector("#add-mobile")
anotherGuestBtn = document.querySelector("#add-guest")
;(() => {
  anotherMobileBtn.addEventListener("click", anotherMobile)
  anotherGuestBtn.addEventListener("click", anotherName)

  form = document.querySelector("#rsvp-form")
  form.addEventListener("submit", submitForm)
})()

async function submitForm(e) {
  e.preventDefault()
  //* format data
  data = Array.from(form.querySelectorAll('input:not([type="submit"])')).reduce(
    (a, c) => {
      if (c.name.includes("guest")) {
        a.guests.push(c.value)
        return a
      }
      if (c.name.includes("number")) {
        a.numbers.push(c.value)
        return a
      }
      a[c.name] = c.value

      return a
    },
    { guests: [], numbers: [] },
  )

  //* send data
  try {
    if (!localStorage._id) {
      const team = await createTeam(data)
      localStorage.setItem("_id", team._id)
      localStorage.setItem("team", JSON.stringify(team))
      // hide form / show edit button
    } else {
      const team = await updateTeam({ ...data, _id: localStorage._id })
    }
    const teams = await getAllTeams()

    // populate bracket
  } catch (error) {}
}

function anotherMobile(e, value) {
  e && e.preventDefault()
  input = document.createElement("input")
  input.setAttribute("name", "number_2")
  input.setAttribute("type", "text")
  if (value) input.setAttribute("value", value)
  anotherMobileBtn.replaceWith(input)
}
function anotherName(e, value) {
  e && e.preventDefault()
  input = document.createElement("input")
  input.setAttribute("name", "guest_2")
  input.setAttribute("type", "text")
  if (value) input.setAttribute("value", value)
  anotherGuestBtn.replaceWith(input)
}

function showRSVP() {
  editRsvp = document.getElementById("edit-rsvp")
  rsvpForm = document.getElementById("rsvp-form-container")

  rsvpForm.removeAttribute("hidden", "false")
  editRsvp.setAttribute("hidden", "true")
}
function hideRSVP() {
  editRsvp = document.getElementById("edit-rsvp")
  rsvpForm = document.getElementById("rsvp-form-container")

  rsvpForm.setAttribute("hidden", "true")
  editRsvp.removeAttribute("hidden")
}

function setRsvpView() {
  showRsvpBtn = document.getElementById("show-rsvp")
  showRsvpBtn.addEventListener("click", showRSVP)
  if (localStorage._id) {
    hideRSVP()
  }
}

function populateTeam() {
  if (!localStorage.team) return
  team = JSON.parse(localStorage.team)
  team.guests.map((guest, i) => {
    if (i == 0)
      document.querySelector('[name="guest_1"]').setAttribute("value", guest)
    else anotherName(null, guest)
  })
  team.numbers.map((number, i) => {
    if (i == 0)
      document.querySelector('[name="number_1"]').setAttribute("value", number)
    else anotherMobile(null, number)
  })
  document
    .querySelector('[name="teamName"]')
    .setAttribute("value", team.teamName)
}

setRsvpView()
populateTeam()
