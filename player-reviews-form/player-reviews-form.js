$(document).ready(function($) {
    //rateyo init and set
    var option = {
        rating: 0,
        numStars: 10,
        maxValue: 10,
        fullStar: !0,
        starWidth: "24px",
        spacing: "2px",
        normalFill: "#D8D8D8",
        ratedFill: "#67B686",
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n            <path d="M23.3365713,8.79596431 L16.3173369,7.84685057 L12.3964479,0.505772166 C12.3964479,0.220616216 12.175529,0 11.8905268,0 C11.6059461,0 11.3850272,0.220616216 11.3850272,0.505772166 L7.46203025,7.87806587 L0.663714711,8.79596431 C0.410332532,8.70020928 0.127016684,8.8583949 0.0313132653,9.14355085 C-0.0639685526,9.4287068 0.0629333376,9.71344092 0.347513988,9.80750864 L5.75454635,15.5979461 L4.39404004,23.1592189 C4.23593968,23.3802569 4.26713815,23.7295308 4.48974346,23.8877164 C4.71024076,24.0771173 5.02644149,24.0146868 5.18454185,23.7919614 L11.9204604,20.3118777 L18.6559574,23.7919614 C18.8140578,24.0129994 19.1302585,24.0771173 19.3511774,23.8877164 C19.5716747,23.6983155 19.6357581,23.3819443 19.4464593,23.1592189 L18.1192594,15.7561317 L23.6839705,9.80750864 C23.9377743,9.71175361 24.0625682,9.4287068 23.9689728,9.14355085 C23.8732694,8.8583949 23.5899535,8.70020928 23.3365713,8.79596431 Z"/>\n        </svg>'
    };
    function scrollToForm() {
        $("html,body").animate({
            scrollTop: $(".write").offset().top - 80
        }, 1000)
    }
    function changeColor(e, t) {
        t <= 5 ? $(e).rateYo("option", "ratedFill", "#FF333A") : $(e).rateYo("option", "ratedFill", "#67B686")
    }
    $(".do-rating-top").rateYo(option).on("rateyo.set", function(e, t) {
        $(".do-rating-write").rateYo("rating", t.rating), changeColor(".do-rating-write", t.rating), scrollToForm()
    }).on("rateyo.change", function(e, t) {
        changeColor(e.target, t.rating)
    }), 
    
    $(".do-rating-write").rateYo(option).on("rateyo.set", function(e, t) {
        var o = t.rating,
            i = $("#PlayerReview_rating");
        i.length && i.val(o)
    }).on("rateyo.change", function(e, t) {
        changeColor(e.target, t.rating)
    }), $(".do-rating-write").each(function() {
        var e = $(this).data("rating");
        e && $(this).rateYo("option", "rating", e)
    }), 
    
    $("#write-link").click(function() {
        return scrollToForm(), false
    }),

    //review character counter
    $(".write-like").on("input propertychange paste", function() {
        var e = 150 - $(this).val().length,
            t = $(".review-character-counter");
        1 == e ? t.text("1 CHARACTER LEFT FOR PROS") : 1 < e ? t.text(e + " CHARACTERS LEFT FOR PROS") : t.text("")
    }), $(".write-dislike").on("input propertychange paste", function() {
        var e = 150 - $(this).val().length,
            t = $(".review-character-counter-negativ");
        1 == e ? t.text("1 CHARACTER LEFT FOR CONS") : 1 < e ? t.text(e + " CHARACTERS LEFT FOR CONS") : t.text("")
    })

//---------------review form validation--------------------//
    //put error msg to error container
    function i(e) {
        var t = d(".write-txtcontainer");
        t.hasClass("write-txtcontainer-error") || t.addClass("write-txtcontainer-error"), t.next().hasClass("write-txterrors") || d(".write-errors-container").append('<div class="write-txterrors"><p class="write-error">' + e + "</p></div>")
    }
    //declare checkbox validation
    function s() {
        var e = !0;
        return d(".agree-text-declare").removeClass("agree-text-error"), d(".error-checkbox-declare").each(function() {
            -1 !== d(this).text().indexOf(m.terms) && d(this).remove()
        }), l.prop("checked") || (function(e) {
            d(".agree-text-declare").addClass("agree-text-error"), d(".write-errors-container").append('<p class="write-error error-checkbox-declare">' + e + "</p>")
        }(m.terms), e = !1), e
    }
    //all caps validation 
    function o(e, t) {
        var r = !0;
        return ! function(e, t) {
            return e.length >= t
        }(t, g.minLength) ? (i(m[e].minLength), r = !1) : function(e) {
            return e.toUpperCase() !== e.toLowerCase() && (2 < e.length && "" !== e && e === e.toUpperCase())
        }(t) && (i(m[e].allCaps), r = !1), r
    }
    //positive / negative review text validation (either required, minlength)
    function _(e, t) {
        var r = !0;
        if (d(".write-txtcontainer").removeClass("write-txtcontainer-error"), d(".write-txterrors").each(function() {
                var e = d(this).text(); - 1 === e.indexOf(m.ratingRequired) && -1 === e.indexOf(m.terms) && d(this).remove()
            }), function(e, t) {
                return 0 === e.val().length && 0 === t.val().length
            }(e, t)) i(m.reviewRequired), r = !1;
        else if (function(e, t) {
                return 0 === e.val().length || 0 === t.val().length
            }(e, t)) r = 0 === e.val().length ? o("positive", t.val()) : o("negative", e.val());
        else {
            var n = o("negative", e.val()),
                a = o("positive", t.val());
            r = n && a
        }
        return r
    }
    //captcha validation
    function u() {
        var e = !0,
            t = d(".write-captcha");
        d(".write-error").each(function() {
            -1 !== d(this).text().indexOf(m.captcha) && d(this).remove()
        }), t.length && (grecaptcha.getResponse().length || (function(e) {
            d(".write-errors-container").append('<p class="write-error">' + e + "</p>")
        }(m.captcha), e = !1));
        return e
    }
    //star rating validation
    function p(e) {
        var t = e.find(".jq-ry-rated-group").css("width"),
            r = !0;
        return d(".error-rating").each(function() {
            -1 !== d(this).text().indexOf(m.ratingRequired) && d(this).remove()
        }), "0px" === t && (function(e) {
            d(".write-errors-container").append('<p class="write-error error-rating">' + e + "</p>")
        }(m.ratingRequired), r = !1), r
    }

    var d, r, v, f, w, l, g, m;
    d = jQuery, 
    r = d("#writeYourReview"), 
    v = r.find("[name='PlayerReview[negativeComment]']"), 
    f = r.find("[name='PlayerReview[positiveComment]']"), 
    w = r.find(".do-rating-write"), 
    l = d("#review-terms-and-conditions"), 
    g = {
        minLength: 150
    }, 
    m = {
        reviewRequired: "".concat("You have to write either your positive or negative opinion."),
        neutral: {
            minLength: "".concat("Comment is too short. It should have ").concat(g.minLength, " ").concat("character or more."),
            allCaps: "".concat("Using all caps is not permitted.")
        },
        positive: {
            minLength: "".concat("Positive part of the review is too short. It should have ").concat(g.minLength, " ").concat("character or more."),
            allCaps: "".concat("Using all caps is not permitted on positive review.")
        },
        negative: {
            minLength: "".concat("Negative part of the review is too short. It should have ").concat(g.minLength, " ").concat("character or more."),
            allCaps: "".concat("Using all caps is not permitted on negative review.")
        },
        ratingRequired: "".concat("Rating is required."),
        captcha: "".concat("You have failed to solve the captcha."),
        terms: "".concat("Please agree with terms and conditions.")
    }, 
    r.on("submit", function(e) {
        //e.preventDefault()
        var t = d(this).find("button"),
            r = s(),
            n = p(w),
            a = _(v, f),
            i = u();
        if (a && n && r && i) {
            alert("validation success") //handle submit here
        } 
        else e.preventDefault()
    }), 
    v.on("blur keyup change", function() {
        _(v, f)
    }), 
    f.on("blur keyup change", function() {
        _(v, f)
    }), 
    w.on("click", function() {
        p(w)
    }), 
    l.on("click", function() {
        s()
    })
//---------------------------------------------//

})