$(document).ready(function () {

    //datepicker for Start date
    $("#txtProjectStartDate").datepicker({
        dateFormat: 'dd-M-yy',
        readonly: true,
        onSelect: function (selected) {
            $("#txtProjectClosureDate").datepicker("option", "minDate", selected)
            var selectedStartDate = $('#txtProjectStartDate').datepicker('getDate');
            var now = new Date();

            //set the project status
            if (selectedStartDate > now) //Date is future
            {
                if ($(this).data('options') == undefined) {
                    $(this).data('options', $('#projectStatus option').clone());
                }
                var statusValue = "futureDate";
                var options = $(this).data('options').filter('[value=' + statusValue + ']');
                $('#projectStatus').html(options);
            }

            else if (selectedStartDate <= now) //date is past
            {
                if ($(this).data('options') == undefined) {
                    $(this).data('options', $('#projectStatus option').clone());
                }
                var statusValue = "pastDate";
                var options = $(this).data('options').filter('[value=' + statusValue + ']');
                $('#projectStatus').html(options);
            }
        }

    });

    //Datepicker for Closure Date
    $("#txtProjectClosureDate").datepicker({
        dateFormat: 'dd-M-yy',
        readonly: true,
        onSelect: function (selected) {
            $("#txtProjectStartDate").datepicker("option", "maxDate", selected)
        }
    });

    //change the project status depends on start date
    $('#txtProjectStartDate').change(function () {

    });




    //currency Dropdown dependancy on  Customer 

    $("#customer").change(function () {
        if ($(this).data('options') == undefined) {
            $(this).data('options', $('#currency option').clone());//Set all the values in currency if no one selected
        }

        var id = $(this).val();
        var options = $(this).data('options').filter('[value=' + id + ']');
        $('#currency').html(options);
    });

    //Customer Dropdown dependancy on  Currency 


    $("#currency").change(function () {
        if ($(this).data('options') == undefined) {
            $(this).data('options', $('#customer option').clone());//Set all the values in currency if no one selected
        }

        var id = $(this).val();
        var options = $(this).data('options').filter('[value=' + id + ']');
        $('#customer').html(options);
    });
    //Button Click Events

    $('#frmProjectData').submit(function () {

        if ($("#frmProjectData").valid()) //Validation
        {
            var projectName = $("#txtProjectName").val();
            var projectCode = $("#txtprojectCode").val();
            var customer = $("#customer option:selected").text();
            var currency = $("#currency option:selected").text();
            var type = $("input[name='type']:checked").val();
            var manager = $("#txtprojectManager").val();
            var projectStatus = $("#projectStatus option:selected").text();
            var projectStartDate = $("#txtProjectStartDate").val();
            var projectEndDate = $("#txtProjectClosureDate").val();

            //defining JSON object
            var projectJsonobject = { "projectName": projectName, "projectCode": projectCode, "Currency": currency, "customer": customer, "type": type, "manager": manager, "status": projectStatus, "startDate": projectStartDate, "endDate": projectEndDate };
            //convert JSON to string for storing in localStorage
            var projectDetailString = JSON.stringify(projectJsonobject);
            //store in local storage
            localStorage.setItem("projectDetailStringLocal", projectDetailString);
            //Reset values after button click
            $('#frmEmployeeRegister').each(function () {
                this.reset();
            });

        }
    });

});



