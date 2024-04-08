$(document).ready(function() {
    var totalInputs = $('.input-text').length + $('.select-box').length + $('.radio-btn').length;
    var filledInputs = 0;

    function updateProgressBar() {
        var progress = (filledInputs / totalInputs) * 100;
        $('.progress').css('width', progress + '%');
    }

    function checkAndUpdateInput(input) {
        var currentValue = $(input).val();
        var previousValue = $(input).data('previous-value') || '';
        if (currentValue.length > previousValue.length) {
            if (currentValue.length === 3) {
                filledInputs++;
                updateProgressBar();
            }
        } else {
            if (previousValue.length === 3) {
                filledInputs--;
                updateProgressBar();
            }
        }
        $(input).data('previous-value', currentValue);
    }

    $('.input-text').on('input', function() {
        checkAndUpdateInput(this);
    });

    $('.select-box').change(function() {
        if ($(this).val() !== "") {
            filledInputs++;
            updateProgressBar();
        } else {
            filledInputs--;
            updateProgressBar();
        }
    });

    $('.radio-btn').change(function() {
        filledInputs++;
        updateProgressBar();
    });

    $('#nextPage1').click(function() {
        var currentPage = $('.page.active');
        var nextPage = currentPage.next('.page');
        currentPage.removeClass('active');
        nextPage.addClass('active');
    });

    $('#previousPage2').click(function() {
        var currentPage = $('.page.active');
        var previousPage = currentPage.prev('.page');
        currentPage.removeClass('active');
        previousPage.addClass('active');
    });

    $('#nextPage2').click(function() {
        var currentPage = $('.page.active');
        var nextPage = currentPage.next('.page');
        currentPage.removeClass('active');
        nextPage.addClass('active');
    });

    $('#previousPage3').click(function() {
        var currentPage = $('.page.active');
        var previousPage = currentPage.prev('.page');
        currentPage.removeClass('active');
        previousPage.addClass('active');
    });

});
