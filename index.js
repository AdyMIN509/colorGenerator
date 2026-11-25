// DOM Element
const colorContainer = document.getElementById('color-container');
const form = document.getElementById('form');

// Functions
async function renderColor(mode, count, color) {
	const baseUrl = 'https://www.thecolorapi.com/scheme';
	const numOfColors = count;
	const queryString = `hex=${color}&mode=${mode}&count=${numOfColors}`;
	const metaData = {
		method: 'GET',
		headers: {
			'Content-type': 'application/json'
		}
	}

	return fetch(`${baseUrl}?${queryString}`, metaData)
	.then(res => res.json())
	.then(data => {
		const colorsArray = data.colors.map(color=>color.hex.value);
		const colorHTML = colorsArray.map(col=>getHtmlColor(col)).join('');
		colorContainer.innerHTML = colorHTML;
	})
}

function getHtmlColor(color) {
	return `
		<div class="color">
			<div class="color-box" data-color='${color}' style='background-color: ${color}'></div>
			<p class="color-value" data-color='${color}'>${color}</p>
		</div>
	`
}

// Event listener
form.addEventListener('submit',(e)=>{
	e.preventDefault();
	const formData = new FormData(form);
	const color = formData.get('color').slice(1);
	const mode = formData.get('mode');
	const count = 5;
	renderColor(mode, count, color);
})

document.addEventListener('click',(e)=>{
	const color = e.target.dataset.color;
	if(color) {
		navigator.clipboard.writeText(color);
		const colorText = document.querySelector(`p[data-color='${color}']`);
		const textContent = colorText.dataset.color;
		colorText.textContent = 'Copied!'
		setTimeout(()=>{
			colorText.textContent = textContent
		},3000)
	}
})