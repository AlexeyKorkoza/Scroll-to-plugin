$(document).ready(function() {
    arrowToNextPage();

    function arrowToNextPage() {
        $('.ImageButton_1link')
            .click(function() {
                $.scrollTo('#next-page', 1200);
            })
            .hover(function() {
                    $('.ImageButton_1_correct-positioning .ImageButton_1defaultImage').css({
                        'opacity': 0
                    });
                    $('.ImageButton_1_correct-positioning .ImageButton_1hoverImage').css({
                        'opacity': 1
                    })
                },
                function() {
                    $('.ImageButton_1_correct-positioning .ImageButton_1defaultImage').css({
                        'opacity': 1
                    });
                    $('.ImageButton_1_correct-positioning .ImageButton_1hoverImage').css({
                        'opacity': 0
                    });
                }
            )
    }
})