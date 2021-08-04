// apx_widgets.worker.variantGrade = {};
// apx_widgets.worker.variantGrade.list = [{}];
// apx_widgets.worker.variantGrade.config = {};
// apx_widgets.worker.variantGrade.style = '<style>/* VARIANT GRADE */ .apx_widgets_worker-variantGrade{} .apx_widgets_worker-variantGrade > table + div .total{font-size:26px;} .apx_widgets_worker-variantGrade > table + div{margin:30px 0 0 0;    display: flex;    gap: 30px;    align-items: center;    justify-content: space-between;} .apx_widgets_worker-variantGrade td > span{display:block;margin-bottom:5px;} .apx_widgets_worker-variantGrade td input{margin: 0 auto;    display: block;    text-align: center;} .apx_widgets_worker-variantGrade td{vertical-align:middle;text-align:center;} .apx_widgets_worker-variantGrade td:first-child > span[style^="border-color"]{height: 0;    width: 30px;    display: inline-block;    border-top: 30px solid #fff;    border-radius: 50%;    box-shadow: 0px 0px 2px #000;} .atributos, .principal .acoes-produto, .principal .parcelas-produto, .principal .cep{display:none!important;}</style>';
// apx_widgets.worker.variantGrade.match = ($('.pagina-produto').length > 0 && $('.atributos').length > 0);
// apx_widgets.worker.variantGrade.run = function(el){
//     if($('.atributos > div').length == 1){
//         console.log('apx_widgets.worker.variantGrade--oneOption OK');    
//     }else{
//         let options = [];
//         options.titles = [];
//         options.variants = [];
        
//         $('.atributos > div').each(function(index){
//             let isColor = $(this).hasClass('atributo-cor') ? true : false;            
//             options.variants[index] = [];            
//             options.titles.push($(this).find('span > b').text().trim());
//             $(this).find('ul > li').each(function(){
//                 let me = $(this).find('a');
//                 options.variants[index].push({grade : me.data('grade-id'), variantId : me.data('variacao-id'), nameOrContent : (isColor ? me.html() : me.text().trim())})
//             })
//         });

//         let apx_widgets_worker_variantGrade = $('<div class="apx_widgets_worker-variantGrade"></div>');
//         let table = $('<table></table>');
//         let tr = $('<tr><th></th></tr>');
//         for (let i = 0; i < options.variants[1].length; i++) {            
//             tr.append('<th>'+ options.variants[1][i].nameOrContent +'</th>');
//         }
//         table.append(tr);

//         for (let i = 0; i < options.variants[0].length; i++) {             
//             let tr = $('<tr></tr>');
//             tr.append('<td>'+ options.variants[0][i].nameOrContent +'</td>');
//             for (let z = 0; z < options.variants[1].length; z++) {    
//                 tr.append('<td>' + ($('[data-variacao-id="'+ options.variants[0][i].variantId +'-'+ options.variants[1][z].variantId +'"]').length > 0 ? '<span class="price">'+ $('[data-variacao-id="'+ options.variants[0][i].variantId +'-'+ options.variants[1][z].variantId +'"] .preco-produto .titulo').first().text().trim() +'/un</span><input data-variacao-id="'+ $('[data-variacao-id="'+ options.variants[0][i].variantId +'-'+ options.variants[1][z].variantId +'"]').attr('data-produto-id') +'" data-variacao-valor="'+ $('[data-variacao-id="'+ options.variants[0][i].variantId +'-'+ options.variants[1][z].variantId +'"] .preco-produto .titulo').first().text().trim() +'" type="tel" value="0" style="width:50px"/>' : '<span></span>') + '</td>');
//             }
//             table.append(tr);
//         }
//         apx_widgets_worker_variantGrade.append(table);
//         apx_widgets_worker_variantGrade.append('<div><span class="total">R$ 0,00</span><button type="button" class="botao botao-comprar principal grande">Comprar</button></div>');
//         apx_widgets_worker_variantGrade.insertBefore('.atributos');       


        
//         $('.apx_widgets_worker-variantGrade input').change(function(){
//             let total = 0;
//             $('.apx_widgets_worker-variantGrade input').each(function(){
//                 let price = parseFloat($(this).data('variacao-valor').replace('R$ ','').replace('.','').replace(',','.')) * parseInt($(this).val());
//                 console.log(price);
//                 total = total + price;                
//                 console.log(total);
//             });            
//             $('.apx_widgets_worker-variantGrade .total').text('R$ ' + (total.toFixed(2).toString().replace('.',',')));
//         });
//         console.log('apx_widgets.worker.variantGrade--multiOption OK');            
//     }
// };
const apx_widgets = {}
apx_widgets.functions = [];
apx_widgets.scripts = [];

apx_widgets.worker = {};
apx_widgets.worker.run = function(){
    
    $.each(apx_widgets.worker, function(k, item){
        if(k != "run"){
            if(apx_widgets.worker[k].style !== undefined){
                $('head').append(apx_widgets.worker[k].style);
            }
            if(apx_widgets.worker[k].list.length > 0 && apx_widgets.worker[k].match){
                apx_widgets.worker[k].run();
            }            
        }        
    })
    
};

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
                        if($('.customize-show').hasClass('active')){        
                            apx.product_id = $(this).closest('.acoes-produto').data('produto-id');
                            apx.quantity = parseInt($(this).closest('.acoes-produto').find('.qtde-carrinho').val());
                            apx.customize = [];
                            apx.identifier = $(this).closest('.acoes-produto').attr('class').replace('acoes-produto','').replace('hide','').replace('disponivel','').replace('indisponivel','').trim();
                            apx['customize'].push('REF|' + apx.identifier);
                            apx['customize'].push('Qtd.|' + apx.quantity);
                            $('#apx_fields input, #apx_fields select').each(function(k, input){
                                apx['customize'].push($(input).data('name') + '|' + $(input).val().trim());
                            });
                            //console.log(apx.customize);
                            localStorage.setItem(apx.product_id, apx.customize);
                    
                            $.ajax({
                                url: '/carrinho/mini'            
                            }).done(function(data){
                                let oObj = $(data);
                    
                                if(oObj.find('[data-produto-id="103994722"]').length > 0){
                                    let qtdAtual = parseInt(oObj.find('[data-produto-id="103994722"]').find('[name="quantidade"]').val());       
                                    addSomaBordado2(primary_product, qtdAtual + apx.quantity);
                                }else{
                                    addBordado2(primary_product, apx.quantity);
                                }
                            });        
                        }else{
                            let calls = [];
                            $('.apx_widgets_worker-crossSelling select').each(function(){
                                let url_related = $(this).val();
                                if ($(this).val() != ""){ 
                                    calls.push(url_related)
                                }
                            });
                            console.log(calls);
                            if(calls.length > 0){
                                console.log('apx_widgets.worker.crossSelling - Add - A');
                                crossSellingAjax(calls.shift(), calls, primary_product);
                            }else{
                                window.location.href = primary_product;
                            }
                            
                        }                        
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

function addBordado2(urlOriginal, qtd){
    $.ajax({
        url: '/carrinho/produto/103994722/adicionar/' + qtd,
        dataType: "json"
    }).done(function(p) {
        let calls = [];        
        $('.apx_widgets_worker-crossSelling select').each(function(){
            let url_related = $(this).val();
            if ($(this).val() != ""){ 
                calls.push(url_related)
            }
        });
        if(calls.length > 0){
            console.log('apx_widgets.worker.crossSelling - Add - A');
            crossSellingAjax(calls.shift(), calls, urlOriginal);
        }else{
            window.location.href= urlOriginal;
        }
    }).fail(function(p) {
        alert('Ocorreu um erro ao adicionar o produto ao carrinho.\nPor favor, recarregue a página e tente novamente.');
    })
}

function addSomaBordado2(urlOriginal,  quantity){
    $.ajax({
        url: '/carrinho/produto/103994722/atualizar/' + quantity,
        dataType: "json"
    }).done(function(p) {
        let calls = [];
        $('.apx_widgets_worker-crossSelling select').each(function(){
            let url_related = $(this).val();
            if ($(this).val() != ""){ 
                calls.push(url_related)
            }
        });
        if(calls.length > 0){
            console.log('apx_widgets.worker.crossSelling - Add - A');
            crossSellingAjax(calls.shift(), calls, urlOriginal);
        }else{
            window.location.href= urlOriginal;
        }        
    }).fail(function(p) {
        alert('Ocorreu um erro ao adicionar o produto ao carrinho.\nPor favor, recarregue a página e tente novamente.');
    })
}