function showMoreInfo(topic) {
    document.getElementById(topic).style.top = "-200px";
}
function showLessInfo(topic) {
    document.getElementById(topic).style.top = "-700px";
}

// selecting topics
function selectTopic(id) {
   topic = document.getElementById(id);
    if (topic.classList.contains("selected")) {
        topic.classList.remove("selected");
    } else{
        topic.classList.add("selected");
    }
}

function searchingNeighborhoods() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('neighborhoodSearch');
    filter = input.value.toUpperCase();
    ul = document.getElementById("findNeighborhoods");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        label = li[i].getElementsByTagName("label")[0];
        txtValue = label.textContent || label.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        } else {
        li[i].style.display = "none";
        }
    }
  }

  function searchingIndicators() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('indicatorSearch');
    filter = input.value.toUpperCase();
    ul = document.getElementById("indicators");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        } else {
        li[i].style.display = "none";
        }
    }
  }