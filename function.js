const container = document.querySelector('#container');
//this is the declearation of variable for the code line5-line13//
const Task = container.elements.inputTask;
const Time = container.elements.inputTime;
const showTask =document.getElementById('showTask');
container.addEventListener('submit', function(e){
	e.preventDefault();
	showTask.style.visibility = 'visible';
	const Task = container.elements.inputTask;
	const Time = container.elements.inputTime;
	addTask(Time.value, Task.value)
	Task.value = '';
	Time.value = '';

});

//this is the eclearation of variables from line22 - line45//
//thisdeclearation is to make all the variable global variable so it can be used everywhere//
const lineSpace = document.createElement('br');
const newTask = document.createElement('Li');
const bTAG = document.createElement('b');
const button = document.createElement('label');
const button1 = document.createElement('label');
console.dir(Task)
const addTask = (Time, Task) => {
	if (Task.value === "" || Time.value === "" ){
		alert("please enter your task and time")
		
	} else{
		button.className = 'label' ;
		button.textContent = 'done';
		button.style.backgroundColor = 'green';
		button1.className = 'label1'
		button1.textContent = 'delete';
		button1.style.backgroundColor = 'red';
		bTAG.append(Time);
		newTask.append(bTAG);
		newTask.append(`: ${Task}`);
		newTask.append(" ");
		newTask.append(button);
		newTask.append(" ");
		newTask.append(button1);
		showTask.append(newTask);
		showTask.append(lineSpace);
	}
}
showTask.addEventListener('click',function(e){
	e.target.className === 'label' && savedTask.append(newTask);
	console.dir(newTask);

})
//variable decleared //
const savedTask = document.getElementById('savedTask');
button.addEventListener('click',function(){
	savedTask.style.visibility = 'visible'
})

	
