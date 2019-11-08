var tab = document.getElementById("tab");
var j = 0;
var content = document.getElementById("content");
var items = [];
var getsibling = function (elem) {
    var parent = elem.parentNode;
    var siblingitems = [];
    for (var n = parent.firstChild; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n != elem) {
            siblingitems.push(n);
        }
    }
    return siblingitems;
}
for (var k = 0; k < content.childNodes.length; k ++) {
    if (content.childNodes[k].nodeType == 1) {
        items.push(content.childNodes[k]);
    }
} 

for (var i = 0; i < tab.childNodes.length; i ++) {
    if (tab.childNodes[i].nodeType == 1) {
        var li = tab.childNodes[i];
        li.index = j;
        li.onclick = function () {
            for (var l = 0; l < items.length; l ++) {
                items[l].style.display = 'none';
            }
            items[this.index].style.display = 'block';
            this.className = "active";
            var sibling = getsibling(this);
            for (var m = 0; m < sibling.length; m ++) {
                sibling[m].className = '';
            }
        }
        j ++;
    }  
}

var wrapper = document.getElementById("wrapper");
wrapper.onclick = function () {
    if (this.ianimate) clearTimeout(this.ianimate);
    wrapper.className = 'active';
    this.ianimate = setTimeout(function () {
        wrapper.className = '';
    }, 250);
}