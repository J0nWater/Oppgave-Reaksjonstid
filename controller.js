
function displayLamps(){
    let html = '';
    for( i = 0; i < array.length; i++){
        html += array[i]
    }
    return html
}

function putLampsInArray(){
    for( i = 0; i < 25; i++){
        array.push(`<div class="lightOff"></div>`)
    }  
}

function getRandomLamp(){
    selectedLampIndex = Math.floor(Math.random()* array.length)
    array[selectedLampIndex] = `<div class="lightOn" onclick="checkTime()"></div>`
    startTime = new Date().getTime();
    updateView()
    
    console.log('selectedLampIndex -->', array)
    console.log(startTime)
}

function checkTime(){
    array[selectedLampIndex] = `<div class="lightOff"></div>`
    finishTime = new Date().getTime();
    spentMilliseconds = Math.floor(finishTime - startTime);
    spentSeconds = spentMilliseconds / 1000;
    getRandomLamp()

    console.log(spentMilliseconds)
    console.log(finishTime)
}