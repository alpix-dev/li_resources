apx_widgets.worker.crossSelling = {};
apx_widgets.worker.crossSelling.list = [];
apx_widgets.worker.crossSelling.list.push({sku : "CAFMLVJCV",related:"faixa-feminina-para-cabelo-dupla-marie", option_name : "Faixa"});
apx_widgets.worker.crossSelling.list.push({sku : "CAFMLVJCV",related:"scrunchie-para-cabelo", option_name : "Scrunchie"});
apx_widgets.worker.crossSelling.config = {};
apx_widgets.worker.crossSelling.style = '<style>/* CROSS SELLING */ .apx_widgets_worker-crossSelling{padding-bottom:5px!important;}.apx_widgets_worker-crossSelling select{margin-top:10px;font-size:12px;}</style>';
apx_widgets.worker.crossSelling.match = $('.pagina-produto').length > 0;
apx_widgets.worker.crossSelling.run = function(el){
    let productSku = $('.principal').find('[itemprop="sku"]').text().toLowerCase().trim();
    let query_ = apx_widgets.worker.crossSelling.list.filter(el => el.sku.toLowerCase().trim() === productSku.toLowerCase().trim());
    $.each(query_, function(k,v){
        let query = v;
        $.get(query.related, function( data ) {
            let div = $('<div class="apx_widgets_worker-crossSelling" order="'+ k +'"><span>Selecione a opção de <b class="cor-secundaria">'+ query.option_name +'</b>:</span><br></div>');
            let select = $('<select></select>');
            select.append('<option value="">Selecione...</option>');
            select.append('<option value="">Sem '+ query.option_name +'</option>');
            let result = $(data);
            let name = result.find('.principal .nome-produto').text();
            result.find('.principal > .acoes-produto').each(function(){
                let variant_name = result.find('a[data-variacao-id="'+ $(this).attr('data-variacao-id') +'"]').text().trim();
                if($(this).hasClass('disponivel')){
                    let price = $(this).find('.preco-produto .titulo').text().trim();
                    let url = $(this).find('.botao.botao-comprar.principal.grande').attr('href');
                    select.append('<option value="'+ url +'">+'+ price +' - '+ variant_name +' </option>');                    
                }
                div.append(select);
                div.insertAfter('.atributos');
            });
        }).then(function(){
            if(k == (query_.length -1)){
                if($('.apx_widgets_worker-crossSelling').length > 0){
                    $('.acoes-produto .botao-comprar').unbind();
                    $('.acoes-produto .botao-comprar').click(function(e){
                        e.preventDefault();
                        let primary_product = $(this).attr('href');
                        let calls = [];
                        $('.apx_widgets_worker-crossSelling select').each(function(){
                            let url_related = $(this).val();
                            if ($(this).val() != ""){ 
                                calls.push(url_related)
                            }
                        });
                        console.log('apx_widgets.worker.crossSelling - Add - A');
                        crossSellingAjax(calls.shift(), calls, primary_product);
                    });
                }
                console.log('apx_widgets.worker.crossSelling OK');
            }
        });

        
    });
    
};

function crossSellingAjax (url, calls, primary_product){
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