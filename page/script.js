function modal() {

    var modal = document.querySelectorAll('.img_modal');
    var closeModal = document.querySelector('.area_modal_int svg ');
    modal.forEach((element) => {
        element.addEventListener('click', () => {

            $('.area_modal').css('display', 'flex').css('opacity', 1);
            var imgAtual = element.src;
            
            document.querySelector('.modal img').setAttribute('src', imgAtual);

        });

    });
    closeModal.addEventListener('click', () => {
        $('.area_modal').css('opacity', 0);
        setTimeout(() => {
            $('.area_modal').css('display', 'none');

        }, 300);

    });

}
window.addEventListener('load', modal());

function modal_2() {

    var modal_2 = document.querySelectorAll('.img_modal_2');
    var closeModal = document.querySelector('.area_modal_int_2 svg ');
    modal_2.forEach((element) => {
        element.addEventListener('click', () => {

            $('.area_modal_2').css('display', 'flex').css('opacity', 1);
            var imgAtual = element.src;
            
            document.querySelector('.modal_2 img').setAttribute('src', imgAtual);

        });

    });
    closeModal.addEventListener('click', () => {
        $('.area_modal_2').css('opacity', 0);
        setTimeout(() => {
            $('.area_modal_2').css('display', 'none');

        }, 300);

    });

}
window.addEventListener('load', modal_2());