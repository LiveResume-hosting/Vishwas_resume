document.getElementById("copy-clip").addEventListener("click", ()=>{
    var range = document.createRange();
    range.selectNodeContents(document.getElementById("mobile-no"));
    var selection = window.getSelection();
    selection.removeAllRanges()
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
    alert("Copied to clipboard " + document.getElementById("mobile-no").innerHTML)
});

document.getElementById("gmail").addEventListener("click", function(){
    // Clipboard.writeText("dubeyvishwas22@gmail.com");
    var range = document.createRange();
    range.selectNodeContents(document.getElementById("gmail-content"));
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
    alert("Email copied to clipboard "+ document.getElementById("gmail-content").innerHTML)
});