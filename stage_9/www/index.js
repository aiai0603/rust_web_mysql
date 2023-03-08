import * as wasm from "stage_9";

wasm.set_panic_hook();


const myForm = document.getElementById('form');

myForm.addEventListener('submit',(e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const desc = document.querySelector('#description').value;

    wasm.add_course(name,desc).then((json) => {
        console.log(json)
        alert('成功！');
        window.location.reload();
    })

})
