apx_widgets.worker.shelfLife = {};
apx_widgets.worker.shelfLife.list = [{}];
apx_widgets.worker.shelfLife.config = {prefixo: "DV"};
apx_widgets.worker.shelfLife.match = $('.pagina-produto').length > 0 ;
apx_widgets.worker.shelfLife.run = function(el){
    $('.principal .acoes-produto').each(function(){
        let sku = $(this).attr('class').replace('acoes-produto','').replace('hide','').replace('disponivel','').replace('indisponivel','').trim().replace('SKU-','');
        sku = sku.split('-');
        let dataValidade = sku[sku.length -1];

        if(dataValidade.startsWith(apx_widgets.worker.shelfLife.config.prefixo)){
            dataValidade = dataValidade.replace(apx_widgets.worker.shelfLife.config.prefixo,'');
            dataValidade = dataValidade.slice(0,2) + '/' + dataValidade.slice(2,4) + '/' + dataValidade.slice(4,8);

            $('<label>Validade: '+ dataValidade+'</label>').prependTo($(this).find('div.comprar'));
        }
    })
    console.log('apx_widgets.worker.shelfLife OK');
};
