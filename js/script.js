const $grid = $('.collection-list').isotope();

const $filterBtns = $('.filter-button-group button');

$('.filter-button-group').on('click', 'button', function () {
    const filterValue = $(this).attr('data-filter');
    
    $filterBtns.removeClass('active-filter-btn'); 
    $(this).addClass('active-filter-btn'); 

    $grid.isotope({ filter: filterValue });
});
