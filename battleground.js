apx_widgets.worker.giftWrap = {};
apx_widgets.worker.giftWrap.list = [{}];
apx_widgets.worker.giftWrap.style = "<style>/* APX CHECKOUT GIFT */.apx_widgets_worker-giftWrap{}</style>";
apx_widgets.worker.giftWrap.config = {title:"Para presente", img: "", addToCart:"https://alpix-battle-ground.lojaintegrada.com.br/carrinho/produto/119664260/adicionar"};
apx_widgets.worker.giftWrap.match = $('tr[data-produto-id]').length > 0;
apx_widgets.worker.giftWrap.run = function(el){
    $('tr[data-produto-id]').each(function(){
        let sku = $(this).find('.produto-info > ul > li:first-child > span > strong').text().trim();
        console.log(sku);
        if(sku.includes('--hidden')){
            $(this).remove();
        }        
    })
};