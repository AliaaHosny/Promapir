(function() {
    "use strict";

    function _0xe564x1(_0xe564x2, _0xe564x3, _0xe564x4, _0xe564x5) {
        var _0xe564x6 = new google.maps.LatLng(_0xe564x2, _0xe564x3);
        var _0xe564x7 = {
            zoom: _0xe564x5,
            center: _0xe564x6,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false
        };
        var _0xe564x8 = new google.maps.Map(document.getElementById("map_canvas"), _0xe564x7);
        var _0xe564x9 = new google.maps.Marker({
            position: _0xe564x6,
            map: _0xe564x8,
            title: "location :"  + _0xe564x4
        })
    }

    function _0xe564xa() {
        $(".go-up").hide();
        $(window).on(scroll, function() {
            if ($(this).scrollTop() > 400) {
                $(".go-up").fadeIn()
            } else {
                $(".go-up").fadeOut()
            };
            return false
        });
        $(".go-up a").on(click, function(_0xe564xb) {
            _0xe564xb.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false
        })
    }

    function _0xe564xc() {
        var _0xe564xd = document.createElement("p");
        _0xe564xd.style.width = "100%";
        _0xe564xd.style.height = "200px";
        var _0xe564xe = document.createElement("div");
        _0xe564xe.style.position = "absolute";
        _0xe564xe.style.top = "0px";
        _0xe564xe.style.left = "0px";
        _0xe564xe.style.visibility = "hidden";
        _0xe564xe.style.width = "200px";
        _0xe564xe.style.height = "150px";
        _0xe564xe.style.overflow = "hidden";
        _0xe564xe.appendChild(_0xe564xd);
        document.body.appendChild(_0xe564xe);
        var _0xe564xf = _0xe564xd.offsetWidth;
        _0xe564xe.style.overflow = "scroll";
        var _0xe564x10 = _0xe564xd.offsetWidth;
        if (_0xe564xf == _0xe564x10) {
            _0xe564x10 = _0xe564xe.clientWidth
        };
        document.body.removeChild(_0xe564xe);
        return (_0xe564xf - _0xe564x10)
    }

    function _0xe564x11() {
        var _0xe564x12 = _0xe564xc();
        if (($(window).width() + _0xe564xc()) <= 767 && _0xe564x19 == false) {
            _0xe564x15("enable");
            _0xe564x13("enable");
            _0xe564x19 = true
        } else {
            if (($(window).width() + _0xe564xc()) >= 768) {
                _0xe564x15("disable");
                _0xe564x13("disable");
                _0xe564x19 = false;
                if (typeof bindUniform !== undefined) {
                    bindUniform()
                }
            }
        }
    }

    function _0xe564x13(_0xe564x14) {
        if (_0xe564x14 == enable) {
            $("#footer .footer-block h4").on(click, function(_0xe564xb) {
                $(this).toggleClass("active").parent().find(".toggle-footer").stop().slideToggle("medium");
                _0xe564xb.preventDefault();
                return false
            });
            $("#footer").addClass("accordion").find(".toggle-footer").slideUp("fast")
        } else {
            $(".footer-block h4").removeClass("active").off().parent().find(".toggle-footer").removeAttr("style").slideDown("fast");
            $("#footer").removeClass("accordion")
        }
    }

    function _0xe564x15(_0xe564x14) {
        if (_0xe564x14 == enable) {
            var _0xe564x16 = "#right_column .block .title_block, #left_column .block .title_block";
            $("#right_column .block .title_block, #left_column .block .title_block").on(click, function(_0xe564xb) {
                $(this).toggleClass("active").parent().find(".block_content").stop().slideToggle("medium");
                return false
            });
            $("#right_column, #left_column").addClass("accordion").find(".block .block_content").slideUp("fast")
        } else {
            $("#right_column .block .title_block, #left_column .block .title_block").removeClass("active").off().parent().find(".block_content").removeAttr("style").slideDown("fast");
            $("#left_column, #right_column").removeClass("accordion")
        }
    }

    function _0xe564x17(_0xe564x18) {
        _0xe564x18.owlCarousel({
            rtl: true,
            loop: true,
            margin: 30,
            stopOnHover: false,
            navigation: true,
            navigationText: ["&lsaquo;", "&rsaquo;"],
            pagination: false,
            paginationNumbers: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: false
                }
            }
        })
    }
    var _0xe564x19 = false;
    var _0xe564x1a = false;
    $(document).ready(function() {
        _0xe564xa();
        _0xe564x11();
        $(window).resize(_0xe564x11);
        $("#all").after('<div id="off-mainmenu"><div class="off-mainnav"><div class="off-close"><span class="title">Menu</span><span class="close-menu"><i class="fa fa-close"></i></span></div></div></div>');
        $(".megamenu").clone().appendTo(".off-mainnav");
        $(".off-mainnav .megamenu li.dropdown, .off-mainnav .megamenu li.dropdown-submenu").each(function() {
            $(this).find("a").first().after('<span class="icon-down"><i class="fa fa-angle-down"></i></span>')
        });
        $("#btn-menu").on(click, function(_0xe564xb) {
            _0xe564xb.preventDefault();
            $("body").toggleClass("mainmenu-active");
            return false
        });
        $(".off-close .close-menu").on(click, function(_0xe564xb) {
            _0xe564xb.preventDefault();
            $("body").removeClass("mainmenu-active");
            return false
        });
        $(".icon-down").on(click, function(_0xe564xb) {
            $(this).closest("li").find(".dropdown-menu").first().toggleClass("tiva-active");
            return false
        });
        $(window).on(resize, function() {
            var _0xe564x1b = $(this);
            if (_0xe564x1b.width() >= 1000) {
                $("#main-nav").css({
                    display: block
                })
            };
            return false
        });
        $(".btn-fixedheader .no").on(click, function(_0xe564xb) {
            _0xe564x1a = false;
            $(".btn-fixedheader .no").addClass("active");
            $(".btn-fixedheader .yes").removeClass("active");
            return false
        });
        $(".btn-fixedheader .yes").on(click, function(_0xe564xb) {
            _0xe564x1a = true;
            $(".btn-fixedheader .no").removeClass("active");
            $(".btn-fixedheader .yes").addClass("active");
            return false
        });
        $(window).on(scroll, function() {
            if (_0xe564x1a) {
                if ($(window).scrollTop() > 120) {
                    $("#top-header").addClass("fixed")
                } else {
                    $("#top-header").removeClass("fixed")
                }
            } else {
                $("#top-header").removeClass("fixed")
            };
            return false
        });
        $("#myTabs a").on(click, function(_0xe564xb) {
            _0xe564xb.preventDefault();
            $(this).tab("show");
            _0xe564x17($(this).parents(".tabs-top").find($(this).attr("href") +  ".owl-carousel"))
        });
        $(".tabproduct-carousel").each(function() {
            _0xe564x17($(this))
        });
        var _0xe564x1c = false;
        if ($("html").attr("class")) {
            _0xe564x1c = ($("html").attr("class").indexOf("rtl") != -1) ? true : false
        };
        $(".prolist-owlcaousel").owlCarousel({
            rtl: _0xe564x1c,
            loop: true,
            margin: 30,
            nav: true,
            dots: true,
            stopOnHover: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
        $(".popular-owlcaousel").owlCarousel({
            rtl: _0xe564x1c,
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            stopOnHover: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
        $(".postslist-owlcaousel").owlCarousel({
            rtl: _0xe564x1c,
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            stopOnHover: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
        $(".testimoniol-items-h1").owlCarousel({
            rtl: _0xe564x1c,
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            stopOnHover: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        $(".manufacture_block").owlCarousel({
            rtl: _0xe564x1c,
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            stopOnHover: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 5
                }
            }
        });
        $(".topdes-owlcaousel").owlCarousel({
            rtl: _0xe564x1c,
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            stopOnHover: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });
        $(".featureditem-owl").owlCarousel({
            rtl: _0xe564x1c,
            loop: true,
            margin: 30,
            nav: true,
            dots: true,
            stopOnHover: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });
        $(".testimoniol-items-h2").owlCarousel({
            rtl: _0xe564x1c,
            loop: true,
            margin: 30,
            nav: true,
            dots: true,
            stopOnHover: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        });
        $(".featured-owlcaousel").owlCarousel({
            rtl: _0xe564x1c,
            loop: true,
            margin: 30,
            nav: true,
            dots: true,
            stopOnHover: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
        $(".topsight-owl").owlCarousel({
            rtl: _0xe564x1c,
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            stopOnHover: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
        $(".postslist-owlcaousel-h3").owlCarousel({
            rtl: _0xe564x1c,
            loop: false,
            margin: 30,
            nav: true,
            dots: false,
            stopOnHover: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        $(".iframe-link").each(function() {
            $(this).magnificPopup({
                type: iframe,
                iframe: {
                    markup: '<div class="mfp-iframe-scaler your-special-css-class"> + <div class="mfp-close"></div> + $(this).closest("li").find(".iframe-content").html() + </div>'
                }
            })
        });
        $(".blockproductscategory_grid").owlCarousel({
            rtl: _0xe564x1c,
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            stopOnHover: false,
            navigation: true,
            navigationText: ["&lsaquo;", "&rsaquo;"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                568: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });
        if ($("#price-filter").length) {
            $("#price-filter").slider({
                from: 0,
                to: 100,
                step: 1,
                smooth: true,
                round: 0,
                dimension: "&nbsp;$",
                skin: plastic
            })
        };
        if ($("#budget-filter").length) {
            $("#budget-filter").slider({
                from: 0,
                to: 2000,
                step: 1,
                smooth: true,
                round: 0,
                dimension: "&nbsp;$",
                skin: plastic
            })
        };
        if ($("#duration-filter").length) {
            $("#duration-filter").slider({
                from: 0,
                to: 30,
                step: 1,
                smooth: true,
                round: 0,
                dimension: "&nbsp;day",
                skin: plastic
            })
        };
        $("#categories_block_left ul li.parent .arrow").on(click, function(_0xe564xb) {
            _0xe564xb.preventDefault();
            $(this).parents("li.parent").find("ul").slideToggle("medium");
            $(this).toggleClass("active");
            return false
        });
        $("#datetimepicker1").datepicker({
            format: dd-mm-yyyy,
            autoclose: true
        });
        $("#thumbs_list ul li").on(click, function(_0xe564xb) {
            $("#image-block #view_full_size").html($(this).html());
            $("#thumbs_list ul li").removeClass("active");
            $(this).addClass("active");
            return false
        });
        if ($(".tiva-popup-screen").length) {
            if (screen.width < 500) {
                $(".tiva-popup-screen .popup").css(width, "80%")
            };
            $("html").on(click, function(_0xe564xb) {
                if (_0xe564xb.target.id == tiva-popupscreen) {
                    $(".tiva-popup-screen").remove()
                }
            });
            $(".tiva-popup-screen .popup .close").on(click, function(_0xe564xb) {
                _0xe564xb.preventDefault();
                $(".tiva-popup-screen").remove()
            });
            setTimeout(function() {
                $(".tiva-popup-screen").remove()
            }, 20 * 1000)
        };
        $(".multi-color .handle").on(click, function(_0xe564xb) {
            _0xe564xb.preventDefault();
            $(".multi-color").toggleClass("active");
            return false
        });
        $(".multi-groupcolor .color").on(click, function(_0xe564xb) {
            $(".multi-groupcolor .color").removeClass("active");
            $(this).addClass("active");
            $("head").append('<link rel="stylesheet" href="css/multi-color/ + $(this).attr("id") + /color.css" type="text/css" />')
        });
        $("#tiva-slideshow").nivoSlider({
            effect: random,
            animSpeed: 1000,
            pauseTime: 5000,
            directionNav: true,
            controlNav: true,
            pauseOnHover: true
        });
        $(".video-link a").on(click, function(_0xe564xb) {
            _0xe564xb.preventDefault();
            $(".tiva-video-overlay").toggleClass("open");
            $(".video-link").css(display, none);
            return false
        });
        $(".video-close a").on(click, function(_0xe564xb) {
            _0xe564xb.preventDefault();
            $(".tiva-video-overlay").toggleClass("open");
            $(".video-link").css(display, table-cell);
            return false
        });
        var _0xe564x4 = jQuery(".contact-address").html();
        var _0xe564x1d = "100%";
        var _0xe564x1e = "500px";
        var _0xe564x5 = 16;
        if (_0xe564x4) {
            $("#map").html('<div id="map_canvas" style="width: + _0xe564x1d + ; height: + _0xe564x1e + "></div>');
            var _0xe564x1f = new google.maps.Geocoder();
            _0xe564x1f.geocode({
                "\x61\x64\x64\x72\x65\x73\x73": _0xe564x4
            }, function(_0xe564x20, _0xe564x14) {
                if (_0xe564x14 == google.maps.GeocoderStatus.OK) {
                    var _0xe564x2 = _0xe564x20[0].geometry.location.lat();
                    var _0xe564x3 = _0xe564x20[0].geometry.location.lng();
                    _0xe564x1(_0xe564x2, _0xe564x3, _0xe564x4, _0xe564x5)
                }
            })
        }
    })
})()