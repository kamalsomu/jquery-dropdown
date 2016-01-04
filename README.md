# Jquery-dropdown

Jquery-dropdown is used to create multi level dropdown.

#Getting Started

Requirements
1) Jquery Library
2) Jquery-dropdown.js file
3) Jquery-dropdown.css file

#HTML Sample

```html
<input id="dropdown-selector"/>
```

#Jquery Sample

//Creating Dynamic Menu

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

   // using jquery-dropdown plugin 
  
    $("#dropdown-selector").dropdown({
        "menu": menu,
        "name": "Drop Down Menu"
    });

