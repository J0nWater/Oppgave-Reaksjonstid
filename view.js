putLampsInArray()
getRandomLamp()
function updateView(){
    html.innerHTML = /*html*/`
    <h2 class="title">Click on the lighted circle to check the reaction time</h2>
    <div class="lampContainer">
        ${displayLamps()}
    </div>
    <div class="reaction">Reaction time: ${spentMilliseconds} ms</div>
    `
}