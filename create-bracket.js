// console.log(XState)

input=[
  'teamName', 'teamName', 'teamName', 'teamName', 'teamName', 'teamName', 'teamName', 'teamName',
  
  'teamName'
]

function populateBracket(teams=input){
  len=teams.length
  remander=teams.length % 8

  arr=[[]];j=0;
  for (i = 0; i < teams.length; i++) {
    if(i%8 == 0 && i!=0 ){j++; arr.push([])}
    arr[j].push(teams[i])
  } 

  arr[0].length = 8
  
  html=bracket(
    arr[0].map(teamName => `<div class="team">${teamName}</div>`).join('')
  )

  document.querySelector('section.bracket-section').innerHTML = html
    items =Array.from(document.querySelectorAll('.team'))
  maxHeight=items.reduce((a,c) => {
    h=c.getBoundingClientRect().height
    if(h>a)return h
    else return a
  },0)
  items.forEach((team) => {
    // team.style.height = String(maxHeight)+'px'
  })

}
function bracket(teamsHtml){return`
<div class="bracket">
  <div class="col">
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
`}




populateBracket()





/* 
*/
expected=`
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