const toggle = document.getElementById('toggle');
const ToMonth = document.getElementById('To-Month');

toggle.addEventListener ('change', e =>{
    console.log('tied');
    ToMonth.classList.toggle("ShowMonthly")
});