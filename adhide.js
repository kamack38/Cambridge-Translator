//Hides ad slots
elementhide(".tz1");
elementhide(".am-default ");
function elementhide(elemen){
document.querySelectorAll(elemen).forEach(e => e.parentNode.removeChild(e));
}
