const btnChange = document.querySelector('.btn--change')
const plans = document.querySelectorAll('.plan')
let slideIndex = 0

const changePlan = index => {
	if (index >= plans.length) index = 0
	for (let plan of plans) {
		plan.style.display = 'none'
	}
	plans[index].style.display = 'inline'
	slideIndex = index
}

changePlan(slideIndex) //deja el primer plan por defecto

btnChange.addEventListener('click', e => {
	changePlan(slideIndex + 1)
})
