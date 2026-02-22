let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total-count");
let interview = document.getElementById("interview-count");
let rejected = document.getElementById("rejected-count");
let availableJobs = document.getElementById("available-jobs");

const allCards = document.getElementById("cards");

const mainContainer = document.querySelector("main");

function count(){
    total.innerText = allCards.children.length;
    availableJobs.innerText = `${allCards.children.length} jobs`;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}
count();

function toggleStyle(id){
    console.log('click', id);
}