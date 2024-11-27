let inputslide = document.getElementById("inputslide");
let slider = document.getElementById("slider");
let pass = document.getElementById("pass");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let btn = document.getElementById("btn");
let copy = document.getElementById("copy");

slider.textContent = inputslide.value;
inputslide.addEventListener('input',()=>{
    slider.textContent = inputslide.value;
});
btn.addEventListener('click', ()=>{
    pass.value=generate();
});

let Lowercase ="abcdefghijklmnopqrstuvwxyz";
let Uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num="1234567890";
let sym="~!@#$%^&*";

function generate(){
    let gen = "";
    let char = "";

    char += lowercase.checked ? Lowercase : "";
    char += uppercase.checked ? Uppercase : "";
    char += numbers.checked ? num : "";
    char += symbols.checked ? sym : "";

    if(char == "" || char.length==0){
        return gen;
    }

    let i=1;
    while(i<=inputslide.value){
        gen += char.charAt(Math.floor(Math.random() * char.length));
        i++;
    }
    return gen;

}

copy.addEventListener('click',()=>{
    if(pass.value!=""||pass.value.length>=1){
        navigator.clipboard.writeText(pass.value);
        copy.innerText ="check";
        copy.title ="password copied";

        setTimeout(()=>{
            copy.innerHTML ="content_copy";
            copy.title ="";
        }, 1000);
    }
});
