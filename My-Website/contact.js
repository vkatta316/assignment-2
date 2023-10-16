const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const notes = document.getElementById('notes')
const contactUL = document.getElementById('contact')

const contactDetails = JSON.parse(localStorage.getItem('contacts'))
if(contactDetails){
  console.log('FROM LOCAL STORAGE' + contactDetails)
  contactDetails.forEach(contact => addContact(contact))
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  addContact()
})

function addContact(name){
  let fName = firstName.value 
  let lName = lastName.value
  let emailValue = email.value
  let notesValue = notes.value
  
  var contactInfo = {
    fName, lName, emailValue, notesValue
  };

  if(contactInfo){
    const contactEle = document.createElement('li')
    if(name && name.completed){
      contactEle.classList.add('completed')
    }

    contactEle.innerText = contactInfo.fName +'  '+ contactInfo.lName +'  '+'  '+ contactInfo.emailValue

    if(name){
      contactEle.innerText  = name.text
    }

    contactEle.addEventListener('contextmenu', (e)=>{
      e.preventDefault()
      contactEle.remove()
      updateLocalStorage()
    })

    contactUL.appendChild(contactEle)
    firstName.value = ''
    lastName.value= ''
    email.value=''
    notes.value=''

    updateLocalStorage()
  }
}

function updateLocalStorage(){
  const contactsEle = document.querySelectorAll('li')

  const contactsArr= []

  contactsEle.forEach(conEle =>{
    contactsArr.push({
      text: conEle.innerText
    })
  })
  localStorage.setItem('contacts', JSON.stringify(contactsArr))
}
