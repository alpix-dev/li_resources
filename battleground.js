apx_widgets.worker.checkoutUpsell = {};
apx_widgets.worker.checkoutUpsell.list = [];
apx_widgets.worker.checkoutUpsell.list.push({
    sku : ["D8L4AHNAD","KXKN28Q8T"], 
    title : "Aproveite e leve também nossa Calça Legging Roxa!",
    subtitle : "De R$230 por apenas R$190.",
    confirmation : "Garantir Oferta!",
    addToCart: "https://alpix-battle-ground.lojaintegrada.com.br/carrinho/produto/111903081/adicionar",
    image : "https://cdn.awsli.com.br/1000x1000/1984/1984900/produto/111903081/c9466ed4b8.jpg"
});
apx_widgets.worker.checkoutUpsell.style = "<style>/* APX CHECKOUT UPSELL */.apx_widgets_worker-checkoutUpsell{}</style>";
apx_widgets.worker.checkoutUpsell.config = {title: "Aproveite e leve também"};
apx_widgets.worker.checkoutUpsell.match = $('.pagina-carrinho:not(.carrinho-checkout)').length > 0;
apx_widgets.worker.checkoutUpsell.run = function(el){
    $('tr[data-produto-id]').each(function(){
        let sku = $(this).find('.produto-info > ul > li:first-child > span > strong').text().trim();
        let findSku = apx_widgets.worker.quantityRange.list.find(el => sku.toLowerCase().trim().includes(el.sku.toLowerCase().trim()));
        if(findSku){
            console.log('eita porra');
        }
    })
};