document.getElementById("moreInfo1").addEventListener("click",
    function () {
        myPopup.classList.add("show");
    }
);
document.getElementById("closePopup").addEventListener("click",
    function () {
        myPopup.classList.remove(
            "show"
        );
    }
);
window.addEventListener("click",
    function (event) {
        if (event.target == myPopup) {
            myPopup.classList.remove(
                "show"
            );
        }
    }
);
document.getElementById("moreInfo2").addEventListener("click",
    function () {
        myPopup2.classList.add("show");
    }
);
document.getElementById("closePopup2").addEventListener("click",
    function () {
        myPopup2.classList.remove(
            "show"
        );
    }
);
window.addEventListener("click",
    function (event) {
        if (event.target == myPopup2) {
            myPopup2.classList.remove(
                "show"
            );
        }
    }
);
document.getElementById("moreInfo3").addEventListener("click",
    function () {
        myPopup3.classList.add("show");
    }
);
document.getElementById("closePopup3").addEventListener("click",
    function () {
        myPopup3.classList.remove(
            "show"
        );
    }
);
window.addEventListener("click",
    function (event) {
        if (event.target == myPopup3) {
            myPopup3.classList.remove(
                "show"
            );
        }
    }
);