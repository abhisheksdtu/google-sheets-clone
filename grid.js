let leftCol = document.querySelector('.left-col');
let topRow = document.querySelector('.top-row');
let grid = document.querySelector('.grid');
let str = '';

for (let i = 0; i < 26; i++) {
	str += `<div class="col">${String.fromCharCode(65 + i)}</div>`;
}

topRow.innerHTML = str;

str = '';

for (let i = 0; i < 100; i++) {
	str += `<div class="left-col-box">${i + 1}</div>`;
}

leftCol.innerHTML = str;

str = '';
for (let i = 0; i < 100; i++) {
	str += `<div class="row">`;

	for (let j = 0; j < 26; j++) {
		str += `<div class="col" rid=${i} cid=${j} contenteditable='true'></div>`;
	}

	str += '</div>';
}

grid.innerHTML = str;
