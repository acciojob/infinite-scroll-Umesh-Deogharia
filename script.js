//your code here!
let OrderList = document.getElementById('infi-list');
let id = 1;
function load() {
	for (let i = 0; i < 20; i++) {
	let list = document.createElement('li');
	list.innerHTML = `Item ${id++}`;
		OrderList.appendChild(list);
}
}

OrderList.addEventListener('scroll', function() {
if (OrderList.scrollTop + OrderList.clientHeight >= OrderList.scrollHeight) {
	load();
}	
})
load();
