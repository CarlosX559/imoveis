function modal() {

    var modal = document.querySelectorAll('.img_modal');
    var closeModal = document.querySelector('.area_modal_int svg ');
    modal.forEach((element) => {
        element.addEventListener('click', () => {

            $('.area_modal').css('display', 'flex').css('opacity', 1);
            var imgAtual = element.getAttribute('data-img');
            var title = element.getAttribute('data-title');
            
            document.querySelector('.modal img').setAttribute('src', imgAtual);
            document.querySelector('.texts_modal h2').innerHTML = title;

        });

    });
    closeModal.addEventListener('click', () => {
        $('.area_modal').css('opacity', 0);
        setTimeout(() => {
            $('.area_modal').css('display', 'none', 'important')

        }, 300);

    });

}
window.addEventListener('load', modal());

function menu(){
    $(".menu_opener").click(
        function(){
            
            $('.area_menu_mobile_total').css( 'display', '-webkit-flex' ).css( 'top', '100px' ).css( 'animation', 'move 1s ease' );
            setTimeout( ()=> {
                $('.menu_opener').css( 'display', 'none', 'important' );
                $('.menu_close').css( 'display', '-webkit-flex' );
            }, 600 );
        }  
    );

    $(".menu_close").click(
        function() {
            $('.area_menu_mobile_total').css( 'top', '-100%' ).css('animation', 'move 1s ease' );
            setTimeout( () => {
                if($('.area_menu_mobile_total').css('top', '-100%')) {
                    $('.area_menu_mobile_total').css('-webkit-flex', 'none', 'important');
                }
            }, 600);

            setTimeout( ()=> {
                $('.menu_opener').css( 'display', '-webkit-flex' );
                $('.menu_close').css( 'display', 'none', 'important' );
            }, 100 );
            
        }
        
    );
}
menu();