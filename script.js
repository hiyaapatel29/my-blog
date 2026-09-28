function scrollToBlogs() {

    document.getElementById("blogs").scrollIntoView({
        behavior: "smooth"
    });

}


function readMore(place) {

    alert(
        "Welcome to the " +
        place +
        " travel story! 🌎"
    );

}


function showMessage() {

    alert(
        "Thank you for visiting Travel Vibes! ❤️"
    );

}


function searchBlogs() {

    let search =
        document.getElementById("search")
        .value
        .toLowerCase();

    let cards =
        document.querySelectorAll(".blog-card");


    cards.forEach(function(card) {

        let name =
            card.getAttribute("data-name");

        if (name.includes(search)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}
