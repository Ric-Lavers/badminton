var base =
  "https://skribbl-lists-serverless.now.sh" ||
  // "https://skribbl-lists-serverless.ric-lavers.vercel.app" ||
  "http://localhost:3000"

const getAllTeams = async () => {
  try {
    const teams = await fetch(base + "/api/team/all")
    return teams.json()
  } catch (error) {}
}
const createTeam = async (data) => {
  try {
    const team = await fetch(base + "/api/team/create", {
      method: "POST",
      body: JSON.stringify(data),
    })

    return team.json()
  } catch (error) {}
}
const updateTeam = async (data) => {
  try {
    const team = await fetch(base + "/api/team/update", {
      method: "POST",
      body: JSON.stringify(data),
    })
    return team.json()
  } catch (error) {}
}
