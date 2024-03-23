const dropbtn = document.querySelector(".dropbtn");
const div = document.querySelector("#div");

dropbtn.addEventListener("click", () =>  {
    if (dropbtn.innerText == "Show"){
        div.style.display = "flex";
        dropbtn.innerText = "Hide";
    } else{
        div.style.display = "none";
        dropbtn.innerText = "Show";
    }
}
)