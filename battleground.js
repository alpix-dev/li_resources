apx_widgets.worker.quantityRange = {};
apx_widgets.worker.quantityRange.list = [];
apx_widgets.worker.quantityRange.config = {};
apx_widgets.worker.quantityRange.style = '<style></style>';
apx_widgets.worker.quantityRange.match = $('.pagina-carrinho').length > 0;
apx_widgets.worker.quantityRange.list.push({sku : "FGGYJHTL2",min: 3, max: 5});
apx_widgets.worker.quantityRange.run = function(el){
    $.each(apx_widgets.worker.quantityRange,function(i,item){
        $('.tabela-carrinho .td ul li span')
    })
};
