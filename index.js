// const form1 = document.getElementById("myText");
// console.log(form1.value);

const butt = document.getElementById("name");
butt.addEventListener('click', function(e) {
    e.preventDefault();
    const dier = document.getElementById("myText");
    console.log(dier.value);
});
