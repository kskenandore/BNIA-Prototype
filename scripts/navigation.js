function backButton(e) {
    e.preventDefault();
    window.history.back();
};

function togglePage(id) {
    nav = ['chart', 'trends', 'data', 'map','list'];
    navLinks = ['chart-nav', 'trends-nav', 'data-nav', 'map-nav','list-nav'];
    page = document.getElementById(id);
    active = id + '-nav';

    var i;
    for (i = 0; i < nav.length; i++) {
        try {
            document.getElementById(nav[i]).style.display = "none";
            document.getElementById(navLinks[i]).classList.remove("active");
        } catch(error) {
            console.log(error);
            continue;
        }  
    }

    document.getElementById(active).classList.add("active");
    page.style.display = "block";
}

function skipNav() {
     location.href = "homepage-noprofile.html";
} 

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
  }
  
/* Set the width of the side navigation to 0 */
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}