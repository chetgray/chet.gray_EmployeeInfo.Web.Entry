// @ts-check

$(function () {
    $("#submitButton").on("click", function (event) {
        event.preventDefault();
        // TODO: handle submit
        // @ts-ignore
        showAlert("Entry Accepted.", "Success");
    });
});
