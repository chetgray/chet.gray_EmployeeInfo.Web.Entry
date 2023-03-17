// @ts-check

$(function () {
    /** @type JQuery<HTMLFormElement> */
    const $employeeForm = $("#employeeInfoEntryForm");

    $employeeForm.on("submit", handleSubmit);
    $employeeForm.find("#departmentDropMenu a[data-department]").on("click", setDepartment);

    function handleSubmit(event) {
        event.preventDefault();
        // TODO: handle submit
        // @ts-ignore
        showAlert("Entry Accepted.", "Success");
    }

    function setDepartment(event) {
        event.preventDefault();
        $("input#employeeDepartment").val($(this).data("department"));
    }
});
