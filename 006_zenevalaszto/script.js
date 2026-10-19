// Itt hivatkozz az elemekre, rendeld hozzá az eseménykezelőt,
// és írd meg a saját függvényedet!

const select = document.querySelector("#stilus")
const valasztott = document.querySelector("#valasztott")

select.addEventListener("change", valtoz)



function valtoz(){
    valasztott.replaceChildren(select.value)
    document.title = select.value
}
