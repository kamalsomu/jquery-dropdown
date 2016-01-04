/*! custom-script v1 | Author: Kamal Somu*/

$( document ).ready(function() {
							 
var menu=[{
        "name": "Submenu1",
        "children": [{
            "name": "Option NAME 1",
            "value": "CODE"
        }, {
            "name": "Option NAME 2",
            "value": "46.0"
        }]
    }, {
        "name": "Submenu2",
        "children": [{
            "name": "Option NAME 1",
            "value": "CODE"
        }, {
            "name": "Option NAME 2",
            "value": "R2"
        }]
    }, {
        "name": "Submenu3",
        "children": [{
            "name": "Option NAME 1",
            "value": "CODE"
        }, {
            "name": "Option NAME 2",
            "value": "21.0"
        }]
    }];

    $("#dropdown-selector").dropdown({
        "menu": menu,
        "name": "Drop Down Menu"
    });

});
