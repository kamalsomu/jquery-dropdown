/*! jQuery-dropdown v1 | Author: Kamal Somu*/

(function($) {


    $.fn.dropdown = function(options) {

        var dropdownInputTag = this;

        this.addClass("dropdown-hide");

        var settings = $.extend({
            name: "dropdown",
        }, options);

        var dropdownTemplate = function(name) {
            var dropdownName = $("<span/>").addClass("dropdown-name").text(name);
            var menuName = $("<a/>").addClass("dropdown-click button").append(dropdownName);
            var caret = $("<span/>").addClass("dropdown-arrow-down");
            return menuName.append(caret);
        }

        var getUlTagTemplate = function() {
            var menu = $("<ul />").attr('class', 'menu');
            return menu;
        }

        var getLiTagTemplate = function() {
            var subMenu = $("<li/>").attr('class', 'submenu');
            return subMenu;
        }

        var getMenu = function(menu) {
            var ulTemplate = getUlTagTemplate();

            $(menu).each(function(menuIndex, obj) {

                var liTemplate = getLiTagTemplate().text(obj["name"]);
                if (obj["value"]) {
                    liTemplate.attr("data-value", obj["value"]);
                }
                if (obj["children"]) {
                    liTemplate.append(getMenu(obj["children"]));
                    ulTemplate.append(liTemplate);
                } else {
                    ulTemplate.append(liTemplate);
                }

            });
            return ulTemplate;
        }


        var dropdownWrapper = $("<div/>", {
            "class": "dropdown-wrapper"
        });
        var divTag = $("<div/>", {
            "class": "dropdown-menu-container"
        });
        dropdownInputTag.wrap(dropdownWrapper);

        var dropdownWrapperSelector = this.parent(".dropdown-wrapper");

        dropdownWrapperSelector.append(dropdownTemplate(settings.name));


        dropdownWrapperSelector.append(divTag.append(getMenu(options.menu)));

        dropdownWrapperSelector.find(".dropdown-click").click(function(e) {
            e.stopPropagation();
            dropdownWrapperSelector.find(".dropdown-menu-container").children(".menu").toggle();
        });

        dropdownWrapperSelector.find(".menu li").click(function(e) {
            e.stopPropagation();
			var liValue=$(this).attr("data-value");
            if (liValue) {
                dropdownInputTag.val(liValue);
                dropdownWrapperSelector.find(".dropdown-name").html($(this).text());
                dropdownWrapperSelector.find(".dropdown-menu-container").children(".menu").hide();
            }
        });


        //For closing the menu if clicked outside the menu container
        $("html").click(function() {
            $(".dropdown-menu-container").children(".menu").hide();
        });



        return dropdownInputTag;
    };

}(jQuery));
