var changeName = (function () {
    var name;
    return {
        setName: function() {
            name = prompt('Enter name');
        },
        getName: function() {
            return name;
        }
    }
})();