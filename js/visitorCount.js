//Count Api is used here to get the number of visitors
function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}