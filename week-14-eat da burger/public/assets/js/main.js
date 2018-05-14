$(document).ready(function () {
    // Setup the click event for each burgers 'devour me' button
    $(".devour-me").click(function () {
        var id = $(this).data("id");
        var isDevoured = $(this).data("devoured");

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: {}
        }).done(
            function (data, textStatus, jqXHR) {
                console.log("PUT return status: " + textStatus);
                console.log("burger devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        ).fail(function (jqXHR, textStatus, errorThrown) {
            console.log("PUT return status: " + textStatus);
            console.log("FAILED: " + errorThrown);
        });
    });

    $(".clear-button").click(function () {
        $.ajax("/api/burgers/clear", {
            type: "DELETE"
        }).done(function (data, textStatus, jqXHR) {
            console.log("PUT return status: " + textStatus);
            console.log("burgers cleared");
            // Reload the page to get the updated list
            location.reload();
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log("PUT return status: " + textStatus);
            console.log("FAILED: " + errorThrown);
        });
    });


    //  Handle submission of add new burger form 
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        // alert("about to add da burger");
        var newName = $("#bn").val().trim();

        // Send the POST request.
        $.post(`/api/burgers/${newName}`, function (data) {
            console.log("POST return status: " + data);
            console.log("burger added");
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $("#bn").focus();
});