const ratings = document.querySelectorAll('.rating-num-container');
const selectedRating = document.getElementsByClassName('selected');
const btnSubmitRating = document.getElementById('rating-submit');
let selectedRatingNum;


function removeSelectedClass() {
    ratings.forEach(rating => {
        rating.classList.remove('selected');
        sessionStorage.clear()
    })
};

function clearSessionStorage() {
    sessionStorage.clear();
}

function getSelectedRatingNum() { // Stores the current selected rating in sessionStorage in order to access it on the thankyou page
    sessionStorage.setItem('currentSelectedRatingNum', selectedRatingNum)
}

function confirmSelectedRating() { // Function checks to see if there is a rating selected before taking user to thankyou page
    if (Object.is(parseInt(sessionStorage.getItem('currentSelectedRatingNum')), NaN) === false ) {
        window.location.href = 'thanks.html';
    } else {
        alert('Please select a rating!')
    }
}

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        if (rating.classList.contains('selected')) { // Code block runs when clicking a selected rating
            rating.classList.remove('selected')
            clearSessionStorage();
        } else { // Runs when selecting a new rating
            removeSelectedClass()
            rating.classList.add('selected')
            selectedRatingNum = selectedRating[0].firstElementChild.innerHTML;
            getSelectedRatingNum();
        }
    })
})

