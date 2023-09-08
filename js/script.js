// Bussiness Logic
function increaseByOne(num) {
    return num += 1;
}

function decreaseByOne(num) {
    return num -= 1;
}

function Reset() {
    return 0;
}

function plusTwo(num){
    return num += 2;
}

function plusThree(num){
    return num += 3;
}

function plusFour(num){
    return num += 4;
}

// UI Logic
$(document).ready(() =>{
    $("#increase").click(() =>{
        let number = $("#startNumber").html();
        let newNumber = increaseByOne(parseInt(number));
        $("#startNumber").html(newNumber);
    })

    $("#decrease").click(() =>{
        let number = $("#startNumber").html();
        let newNumber = decreaseByOne(parseInt(number));
        $("#startNumber").html(newNumber);
    })


    $("#reset").click(() =>{
        let number = $("#startNumber").html();
        let newNumber = Reset();
        $("#startNumber").html(newNumber);
    })

    $("#addTwo").click(() =>{
        let number = $("#startNumber").html();
        let newNumber = plusTwo(parseInt(number));
        $("#startNumber").html(newNumber);
    })

    $("#addThree").click(() =>{
        let number = $("#startNumber").html();
        let newNumber = plusThree(parseInt(number));
        $("#startNumber").html(newNumber);
    })

    $("#addFour").click(() =>{
        let number = $("#startNumber").html();
        let newNumber = plusFour(parseInt(number));
        $("#startNumber").html(newNumber);
    })



})