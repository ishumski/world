function elemBlock(firstInp) {
    firstInp.value = "Oh, u can't click on me, anymore"
    firstInp.disabled = true;
    secondInp.hidden = false;
}
function elemUnblock(secondInp) {
    firstInp.disabled = false;
    secondInp.hidden = true;
    firstInp.value = "U can click again!"
}