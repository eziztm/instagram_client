function getDate() {
    var date = new Date();
    return date.toLocaleDateString(); 
}

function getPageName(data) {
    switch (data) {
        case 1: return "FIRST";
        case 2: return "SECOND";
        default: return "MAIN";
    }
}

module.exports = {
    getDate,
    getPageName
}
