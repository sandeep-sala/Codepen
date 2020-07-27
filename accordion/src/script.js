
function showhideSector(el) {
    el.classList.toggle("active");
    var sector = el.nextElementSibling;
    if (sector.style.maxHeight) {
        sector.style.maxHeight = null;
    } else {
        sector.style.maxHeight = sector.scrollHeight + "px";
    } 
}