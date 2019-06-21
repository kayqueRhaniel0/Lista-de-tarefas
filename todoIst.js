var mostrar = document.querySelector('.tarefas')
var tarefa = document.querySelector('.tarefa')
var corpo = document.querySelector('.corpo')
var tarefasRegistradas = []
function adicionar(){

		if (tarefa.value.length < 3 ) {
			alert('Precisamos de no minímo 3 caractéres')
			return false
		}

		for(var control = 0 ; control <= 10 ; control++){
			if (tarefasRegistradas[control] ==  tarefa.value) {
				alert('Tarefa já registrada')
				return false
			}

		}
				tarefasRegistradas.push(tarefa.value)

				var checkbox = document.createElement('input')
				checkbox.type = 'checkbox'
				checkbox.setAttribute('class','input')
				var label = document.createElement('label')
				label.innerHTML = ` ${tarefa.value}<br><br>`

				corpo.appendChild(checkbox)
				corpo.appendChild(label)
				corpo.style.background = '#f44542'

				checkbox.setAttribute('onclick' , 'finalizar()')

 				tarefa.value = ''
 				tarefa.focus()

 					}

 					function finalizar(){

 						alert('Muito Bem! Tarefa Concluída!')

 					}

 					
