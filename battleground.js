apx_widgets.worker.giftWrap = {};
apx_widgets.worker.giftWrap.list = [{}];
apx_widgets.worker.giftWrap.style = '<style>/* APX CHECKOUT GIFT */.apx_widgets_worker-giftWrap{margin-top:15px!important;}.apx_widgets_worker-giftWrap-example{display: inline-block; background: #ccc; color: #fff; font-weight: bold; height: 16px; width: 16px; border-radius: 50%; text-align: center!important; margin-left: 5px; vertical-align: middle!important; font-size: 10px; line-height: 16px; position: relative;}.apx_widgets_worker-giftWrap-example .giftPopover:before{content: ""; border-bottom: 12px solid transparent; border-right: 12px solid #f2f2f2; border-top: 12px solid transparent; position: absolute; right: 100%; top: calc(50% - 12px);}.apx_widgets_worker-giftWrap-example .giftPopover:after{content: ""; border-bottom: 10px solid transparent; border-right: 10px solid #fff; border-top: 10px solid transparent; position: absolute; right: 100%; top: calc(50% - 10px);}.apx_widgets_worker-giftWrap-example:hover .giftPopover{opacity:1; transition:opacity .3s;}.apx_widgets_worker-giftWrap-example{cursor:pointer;}.apx_widgets_worker-giftWrap-example .giftPopover{position: absolute; left: 100%; margin-left: 15px; top: 50%; transform: translate(0, -50%); background: #fff; padding: 5px!important; border: 1px solid #f2f2f2; box-shadow: 0px 0px 20px rgb(0 0 0 / 5%); border-radius: 5px; font-size: 0; display: block; line-height: initial; opacity:0; pointer-events:none;}.apx_widgets_worker-giftWrap label{display: inline-block; align-items: center; gap: 5px; width: fit-content; margin-right: 5px; margin: 0;}.apx_widgets_worker-giftWrap label input{margin: -3px 5px 0 0; vertical-align: middle; vertical-align: middle!important;}</style>';
apx_widgets.worker.giftWrap.config = {title:"<i class='icon-gift'></i> Para presente", img: "", addToCart:""};
apx_widgets.worker.giftWrap.match = $('.pagina-carrinho').length > 0;
apx_widgets.worker.giftWrap.run = function(el){
    let apx_giftWrapItens = localStorage.getItem('apx_widgets_worker-giftWrap');
    if(apx_giftWrapItens !== null && apx_giftWrapItens.replaceAll('|','') == ""){
        localStorage.removeItem('apx_widgets_worker-giftWrap');
    }

    if($('.carrinho-checkout').length > 0){
        let giftBoxPrice = 0;
        $('.resumo-compra tbody tr').each(function(){
            let sku = $(this).find('.produto-info > ul > li:first-child > span > strong').text().trim();
            let isChecked = apx_giftWrapItens !== null ? apx_giftWrapItens.trim().split("|").some(el => el === sku) : false;
            if(sku.includes('--hidden')){
                $(this).hide();
                giftBoxPrice = Number($(this).find('.preco-promocional.titulo').text().replace(',','.').replace(/[^0-9.-]+/g,""));
                giftBoxPrice = giftBoxPrice / parseInt($(this).find('[data-produto-quantidade]').data('produto-quantidade'));

            }
            if(isChecked){
                $(this).find('.produto-info > ul').append('<li class="apx_widgets_worker-giftWrap"><label>'+ apx_widgets.worker.giftWrap.config.title +'</label><b class="apx_widgets_worker-giftWrap-price"></b>'+ (apx_widgets.worker.giftWrap.config.img !== undefined && apx_widgets.worker.giftWrap.config.img !== "" ? '<span class="apx_widgets_worker-giftWrap-example">?<div class="giftPopover"><img src="'+  apx_widgets.worker.giftWrap.config.img +'"/></div></span>' : '') + '</li>');
            }
        });

        if(apx_giftWrapItens !== null){            
            let bushinMessage = $('[name="cliente_obs"]').clone().attr('name','bushin_obs');
            $('[name="cliente_obs"]').hide();
            bushinMessage.insertBefore('[name="cliente_obs"]');
            $('[name="bushin_obs"]').change(function(){
                $('[name="cliente_obs"]').val($(this).val() + "\n\nEmbalar para presente: " +  apx_giftWrapItens.replace('||','|').replaceAll('|', '\n'));
            });
            $('[name="cliente_obs"]').val("Embalar para presente: " + apx_giftWrapItens.replace('||','|').replaceAll('|', '\n'));
        }

        
        if(giftBoxPrice > 0){
            $('.apx_widgets_worker-giftWrap-price').each(function(){
                let myQuantity = parseInt($(this).closest('td').data('produto-quantidade'));
                let total = giftBoxPrice * myQuantity;
                $(this).text(' (+R$ ' + total.toFixed(2).replace('.',',') + ')');
            });
        }
    }
    
    if($('tr[data-produto-id]').length > 0){
        $('tr[data-produto-id]').each(function(k, v){
            let sku = $(this).find('.produto-info > ul > li:first-child > span > strong').text().trim();
            let isChecked = apx_giftWrapItens !== null ? apx_giftWrapItens.trim().split("|").some(el => el === sku) : false;
            if(sku.includes('--hidden')){
                $(this).find('a, form').remove();
                $(this).hide();
            }else{
                $(this).find('.produto-info > ul').append('<li class="apx_widgets_worker-giftWrap"><label><input type="checkbox" '+ (isChecked ? 'checked':'') +'/>'+ apx_widgets.worker.giftWrap.config.title +'</label><b class="apx_widgets_worker-giftWrap-price"></b>'+ (apx_widgets.worker.giftWrap.config.img !== undefined && apx_widgets.worker.giftWrap.config.img !== "" ? '<span class="apx_widgets_worker-giftWrap-example">?<div class="giftPopover"><img src="'+  apx_widgets.worker.giftWrap.config.img +'"/></div></span>' : '') + '</li>');
            }

            if($('tr[data-produto-id]').length == k+1){
                $('.apx_widgets_worker-giftWrap input:checked').closest('tr').find('.icon-plus,.icon-minus,.icon-trash').click(function(e){
                    let itemId = apx_widgets.worker.giftWrap.config.addToCart.split('/')[5];
                    e.preventDefault();
                    let continueURL = $(this).attr('href');
                    let sku = $(this).closest('tr').find('.produto-info > ul > li:first-child > span > strong').text().trim();
                    let myQuantity = parseInt($(this).closest('tr').data('produto-quantidade'));
                    
                    if($(this).hasClass('icon-plus')){
                        let giftBoxQuantity = parseInt($('tr[data-produto-id="'+itemId+'"]').data('produto-quantidade')) + 1;
                        let urlAction = giftBoxQuantity <= 0 ?  apx_widgets.worker.giftWrap.config.addToCart.replace('adicionar','remover') : apx_widgets.worker.giftWrap.config.addToCart.replace('adicionar','atualizar/' + giftBoxQuantity);
                        $.get(urlAction,function(){
                            window.location = continueURL;
                        })
                    }
                    if($(this).hasClass('icon-minus')){
                        let giftBoxQuantity = parseInt($('tr[data-produto-id="'+itemId+'"]').data('produto-quantidade')) - 1;
                        let urlAction = giftBoxQuantity <= 0 ?  apx_widgets.worker.giftWrap.config.addToCart.replace('adicionar','remover') : apx_widgets.worker.giftWrap.config.addToCart.replace('adicionar','atualizar/' + giftBoxQuantity);
                        $.get(urlAction,function(){
                            window.location = continueURL;
                        })
                    }
                    if($(this).hasClass('icon-trash')){
                        let giftBoxQuantity = parseInt($('tr[data-produto-id="'+itemId+'"]').data('produto-quantidade'));
                        let urlAction = giftBoxQuantity - myQuantity <= 0 ?  apx_widgets.worker.giftWrap.config.addToCart.replace('adicionar','remover') : apx_widgets.worker.giftWrap.config.addToCart.replace('adicionar','atualizar/' + (giftBoxQuantity - myQuantity));
                        $.get(urlAction,function(){
                            if(apx_giftWrapItens.replace(sku,'').trim == "" || apx_giftWrapItens.replace(sku,'') == "|"){
                                localStorage.removeItem('apx_widgets_worker-giftWrap');
                            }else{
                                localStorage.setItem('apx_widgets_worker-giftWrap',apx_giftWrapItens.replace(sku,''));
                            }
                            window.location = continueURL;
                        })
                        
                    }
                });
                let itemId = apx_widgets.worker.giftWrap.config.addToCart.split('/')[5];
                if($('tr[data-produto-id="'+itemId+'"]').length > 0){
                    let giftBoxPrice = $('tr[data-produto-id="'+itemId+'"] .preco-produto.destaque-parcela .titulo').text();
                    giftBoxPrice = Number(giftBoxPrice.replace(',','.').replace(/[^0-9.-]+/g,""));
                    
                    
                    $('.apx_widgets_worker-giftWrap input:checked').each(function(){
                        let myQuantity = parseInt($(this).closest('tr').data('produto-quantidade'));
                        let total = giftBoxPrice * myQuantity;
                        $(this).closest('tr').find('.apx_widgets_worker-giftWrap-price').text(' (+R$ ' + total.toFixed(2).replace('.',',') + ')');
                    });
                }
                
            }
        });

        $('.apx_widgets_worker-giftWrap input').change(function(){        
            let sku = $(this).closest('tr').find('.produto-info > ul > li:first-child > span > strong').text().trim();
            let itemId = apx_widgets.worker.giftWrap.config.addToCart.split('/')[5];
            let quantity = parseInt($(this).closest('tr').data('produto-quantidade'));
            if($(this).is(':checked')){
                let urlToAction = apx_widgets.worker.giftWrap.config.addToCart + '/' + quantity;
                if($('tr[data-produto-id="'+itemId+'"]').length > 0){
                    urlToAction = apx_widgets.worker.giftWrap.config.addToCart.replace('adicionar','atualizar') + '/' + (parseInt($('tr[data-produto-id="'+itemId+'"]').data('produto-quantidade')) + quantity);
                }

                if(apx_giftWrapItens === null || apx_giftWrapItens === ''){
                    localStorage.setItem('apx_widgets_worker-giftWrap',sku);
                }else{
                    localStorage.setItem('apx_widgets_worker-giftWrap',apx_giftWrapItens + '|' + sku);
                }
                window.location = urlToAction;

            }else{
                let urlToAction = apx_widgets.worker.giftWrap.config.addToCart.replace('adicionar','remover');
                if($('tr[data-produto-id="'+itemId+'"]').data('produto-quantidade') - quantity > 0){
                    urlToAction = apx_widgets.worker.giftWrap.config.addToCart.replace('adicionar','atualizar') + '/' + (parseInt($('tr[data-produto-id="'+itemId+'"]').data('produto-quantidade')) - quantity);
                }
                if(apx_giftWrapItens.replace(sku,'').trim == "" || apx_giftWrapItens.replace(sku,'') == "|"){
                    localStorage.removeItem('apx_widgets_worker-giftWrap');
                }else{
                    localStorage.setItem('apx_widgets_worker-giftWrap',apx_giftWrapItens.replace(sku,''));
                }
                window.location = urlToAction;
            }        
        });

        
    }
};