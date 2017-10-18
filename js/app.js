const request = superagent
var fetch = document.querySelector('button').addEventListener('click', function () {



var personas = document.querySelector('.users-list')

request

.get('https://randomuser.me/api/?results=50')
.then(function savePersonsInAVariable (data) {
      const persons = data.body.results

      console.log(persons);

      personas.innerHTML = ''

persons.forEach(function(obj) {
            console.log(obj.email);
            var nation = obj.nat
            var eMail = obj.email
            personas.innerHTML += `
              <article>
                <span>${nation}</span>
                <h6>${eMail}</h6>
              </article>`
            })
          })
})
