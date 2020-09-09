
document.addEventListener("DOMContentLoaded", function(e){
    let fav_color=document.getElementById('color').value;
    let save_button=document.getElementById("save");
    save_button.addEventListener("click", function(event){
        console.log(click);
        document.body.style.backgroundColor = "fav_color".value;
    });
});