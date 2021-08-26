apx_widgets.worker.buyTogether = {};
apx_widgets.worker.buyTogether.list = [];
apx_widgets.worker.buyTogether.list.push({sku : "D8L4AHNAD", products : ['https://alpix-battle-ground.lojaintegrada.com.br/g100snky3-camiseta-basica-feminina','https://alpix-battle-ground.lojaintegrada.com.br/jaqueta-couro-preta']});
apx_widgets.worker.buyTogether.config = {target: ".principal .acoes-produto",title: "Aproveite e leve também", insertFunction: function(apx_widgetsbuyTogether){apx_widgetsbuyTogether.insertBefore($(apx_widgets.worker.buyTogether.config.target).first())},};
apx_widgets.worker.buyTogether.style = "<style>/* BUY TOGETHER */ .apx_widgets_worker-buyTogether{}</style>";
apx_widgets.worker.buyTogether.match = $('.pagina-produto').length > 0;
apx_widgets.worker.buyTogether.run = function(el){
    let productSku = $('.principal').find('[itemprop="sku"]').text().toLowerCase().trim();
    let query_ = apx_widgets.worker.buyTogether.list.filter(el => el.sku.toLowerCase().trim() === productSku.toLowerCase().trim());
    var apx_widgetsbuyTogether = $('<div class="apx_widgets_worker-buyTogether"><strong>'+ apx_widgets.worker.buyTogether.config.title +'</strong></div>');        
    if(query_){
        $.each(query_[0].products,function(k, url){
            $.get(url, function(data){
                let result = $(data);
                let name = result.find('.principal .nome-produto.titulo').text();
                let img = result.find('#imagemProduto').attr('src');
                let hasVariant = result.find('.principal .acoes-produto').length > 1 ? true : false;
                let price = hasVariant ? '' : result.find('.principal .acoes-produto .preco-produto .titulo').text().trim();
                let urlAdd = hasVariant ? '' : result.find('.principal .acoes-produto .comprar > a').attr('href');

                let buyTogetherProduct = $('<div class="apx_widgets_worker-buyTogether-item"></div>');
                buyTogetherProduct.append('<div><input type="checkbox"/></div>');
                buyTogetherProduct.append('<div><img src="'+ img +'"/></div>');
                let buyTogetherProductInfo = $('<div class="apx-gap-vertical-10"></div>');
                buyTogetherProductInfo.append('<label>'+ name +'</label>');
                if(hasVariant){
                    //let select = $('<select name="apx_widgets_worker-buyTogether-item-id-'+ k +'"></select>');
                    let options = $('<div class="apx_widgets_worker-buyTogether-item-options"></div>');
                    result.find('.principal .acoes-produto').each(function(){
                        let variant_name = result.find('a[data-variacao-id="'+ $(this).attr('data-variacao-id') +'"]').html();
                        if($(this).hasClass('disponivel')){
                            let price_opt = $(this).find('.preco-produto .titulo').text().trim();
                            let url_opt = $(this).find('.botao.botao-comprar.principal.grande').attr('href');
                            options.append('<span value="'+ url_opt +'" data-value="price_opt"><input type="hidden" name="apx_widgets_worker-buyTogether-item-id-'+ k +'" value="'+ urlAdd +'"/>'+ variant_name +' </span>');                    
                        }
                    });
                    buyTogetherProductInfo.append(options);
                    buyTogetherProductInfo.append('<b>'+ price +'</b>');
                }else{
                    buyTogetherProductInfo.append('<input type="hidden" name="apx_widgets_worker-buyTogether-item-id-'+ k +'" value="'+ urlAdd +'"/>');
                    buyTogetherProductInfo.append('<b>'+ price +'</b>');
                }
                
                buyTogetherProduct.append(buyTogetherProductInfo);
                apx_widgetsbuyTogether.append(buyTogetherProduct);
            });
        });        
        apx_widgets.worker.buyTogether.config.insertFunction(apx_widgetsbuyTogether);
    }

    
    
    console.log('apx_widgets.worker.buyTogether OK');
};

apx_widgets.functions.buyTogetherAjax = function (url, calls, primary_product){
    $.ajax({
        url: url,
        dataType: "json",
    })
    .done(function(data){
        let url_next = calls.shift();
        if(url_next != undefined){
            console.log('apx_widgets.worker.crossSelling - Add - B');
            crossSellingAjax(url_next, calls, primary_product)
        }else{
            console.log('apx_widgets.worker.crossSelling - Done');
            window.location.href = primary_product;
        }
    })
    .fail(function(data){
        console.log('apx_widgets.worker.crossSelling - Err');
        console.log(data);
    });          
};