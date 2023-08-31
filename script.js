const in12 = document.querySelector('#in1')
const navitems1 = document.querySelector('.navitems')
function tog () {
  if (in12.checked == true) {
    in12.checked = false
  } else {
    in12.checked = true
  }
}

const scriptURL =
  'https://script.google.com/macros/s/AKfycby8rKRJR0ALHqzPeSBp5TVdAV6SnDMsRAorxB8P9Fe3Jfryn6R5iVdO7802FKvpqN_U/exec'
const form = document.forms['form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert('Thank you! your form is submitted successfully.'))
    .then(() => {
      window.location.reload()
    })
    .catch(error => console.error('Error!', error.message))
})
