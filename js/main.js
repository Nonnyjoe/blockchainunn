// document.addEventListener('DOMContentLoaded', function() {
//     var btn = document.querySelector('.button'),
//         loader = document.querySelector('.loader'),
//         check = document.querySelector('.check');

//     btn.addEventListener('click', function() {
//         loader.classList.add('active');
//     });

//     loader.addEventListener('animationend', function() {
//         check.classList.add('active');
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    var submit = document.querySelector('.submit'),
        checked = document.querySelector('.checked');

    submit.addEventListener('click', function() {
        setTimeout(() => {
            checked.classList.add('active');
            submit.classList.add('hidden');
            checked.classList.remove('hidden');
            submit.classList.remove('btn');
        }, 1500);
    })
});