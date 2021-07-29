apx_widgets.worker.variantWithImage = {};
apx_widgets.worker.variantWithImage.list = [{}];
apx_widgets.worker.variantWithImage.config = {};
apx_widgets.worker.variantWithImage.style = '<style>/* VARIANT WITH IMAGE */ .apx_widgets_worker-variantWithImage{}</style>';
apx_widgets.worker.variantWithImage.match = ($('.pagina-produto').length > 0 && $('.atributo-cor').length > 0);
apx_widgets.worker.variantWithImage.run = function(el){
    $(".atributo-cor .atributo-item").each((function() {
        let option = produto_grades_imagens[$(this).data("variacao-id")];
        if(option !== undefined){
            $(this).append('<img src="'+ $('[data-imagem-id="' + option + '"]').find('img').attr("src") +'"/>').find('span').remove();

        }
    }));
    console.log('apx_widgets.worker.variantWithImage OK');
};
