function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input')

function retrieveEmployeeInformation() {
  return input.value
}

function addNewElementAsLi() {
  let info = retrieveEmployeeInformation()
  $('.employee-list').append(info)
}
