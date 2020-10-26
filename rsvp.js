(()=>{

  form=document.querySelector('#rsvp-form')
  form.addEventListener('submit', e => {
    e.preventDefault()
    data=Array.from(
      form.querySelectorAll('input:not([type="submit"])')
    ).reduce((a,c) => {
      a[c.name]= c.value
      return a
    },{})
    console.log(data);

})

})()

function submitForm(e){
  e.preventDefault()
  //* format data
  data=Array.from(
    form.querySelectorAll('input:not([type="submit"])')
  ).reduce((a,c) => {
    a[c.name]= c.value
    return a
  },{})
  console.log(data);

  //* send data
  
  
  //* confirm send (set localStorage)
}