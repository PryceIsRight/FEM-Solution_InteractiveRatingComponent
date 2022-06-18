console.log(sessionStorage.getItem('currentSelectedRatingNum'))

const userRatingFeedbackWrapper = document.getElementById('user-rating-feedback');
let newSpanNode = document.createElement('span');
let spanNodeText = `You selected ${sessionStorage.getItem('currentSelectedRatingNum')} out of 5`;

window.onload = function submitSelectedRating() { // Appends span element containing selected rating to user-rating-feedback div
    newSpanNode.innerHTML = spanNodeText;
    userRatingFeedbackWrapper.appendChild(newSpanNode);
}