apx_widgets.worker.variantGrade = {};
apx_widgets.worker.variantGrade.list = [{}];
apx_widgets.worker.variantGrade.config = {};
apx_widgets.worker.variantGrade.style = '<style>/* VARIANT GRADE */ .apx_widgets_worker-variantGrade{} .apx_widgets_worker-variantGrade > table + div .total{font-size:26px;} .apx_widgets_worker-variantGrade > table + div{margin:30px 0 0 0;    display: flex;    gap: 30px;    align-items: center;    justify-content: space-between;} .apx_widgets_worker-variantGrade td > span{display:block;margin-bottom:5px;} .apx_widgets_worker-variantGrade td input{margin: 0 auto;    display: block;    text-align: center;} .apx_widgets_worker-variantGrade td{vertical-align:middle;text-align:center;} .apx_widgets_worker-variantGrade td:first-child > span[style^="border-color"]{height: 0;    width: 30px;    display: inline-block;    border-top: 30px solid #fff;    border-radius: 50%;    box-shadow: 0px 0px 2px #000;} .atributos, .principal .acoes-produto, .principal .parcelas-produto, .principal .cep{display:none!important;}</style>';
apx_widgets.worker.variantGrade.match = ($('.pagina-produto').length > 0 && $('.atributos').length > 0);
apx_widgets.worker.variantGrade.run = function(el){
    if($('.atributos > div').length == 1){
        console.log('apx_widgets.worker.variantGrade--oneOption OK');    
    }else{
        let options = [];
        options.titles = [];
        options.variants = [];
        
        $('.atributos > div').each(function(index){
            let isColor = $(this).hasClass('atributo-cor') ? true : false;            
            options.variants[index] = [];            
            options.titles.push($(this).find('span > b').text().trim());
            $(this).find('ul > li').each(function(){
                let me = $(this).find('a');
                options.variants[index].push({grade : me.data('grade-id'), variantId : me.data('variacao-id'), nameOrContent : (isColor ? me.html() : me.text().trim())})
            })
        });

        let apx_widgets_worker_variantGrade = $('<div class="apx_widgets_worker-variantGrade"></div>');
        let table = $('<table></table>');
        let tr = $('<tr><th></th></tr>');
        for (let i = 0; i < options.variants[1].length; i++) {            
            tr.append('<th>'+ options.variants[1][i].nameOrContent +'</th>');
        }
        table.append(tr);

        for (let i = 0; i < options.variants[0].length; i++) {             
            let tr = $('<tr></tr>');
            tr.append('<td>'+ options.variants[0][i].nameOrContent +'</td>');
            for (let z = 0; z < options.variants[1].length; z++) {    
                tr.append('<td>' + ($('[data-variacao-id="'+ options.variants[0][i].variantId +'-'+ options.variants[1][z].variantId +'"]').length > 0 ? '<span class="price">'+ $('[data-variacao-id="'+ options.variants[0][i].variantId +'-'+ options.variants[1][z].variantId +'"] .preco-produto .titulo').first().text().trim() +'/un</span><input data-variacao-id="'+ $('[data-variacao-id="'+ options.variants[0][i].variantId +'-'+ options.variants[1][z].variantId +'"]').attr('data-produto-id') +'" data-variacao-valor="'+ $('[data-variacao-id="'+ options.variants[0][i].variantId +'-'+ options.variants[1][z].variantId +'"] .preco-produto .titulo').first().text().trim() +'" type="tel" value="0" style="width:50px"/>' : '<span></span>') + '</td>');
            }
            table.append(tr);
        }
        apx_widgets_worker_variantGrade.append(table);
        apx_widgets_worker_variantGrade.append('<div><span class="total">R$ 0,00</span><button type="button" class="botao botao-comprar principal grande">Comprar</button></div>');
        apx_widgets_worker_variantGrade.insertBefore('.atributos');       


        
        $('.apx_widgets_worker-variantGrade input').change(function(){
            let total = 0;
            $('.apx_widgets_worker-variantGrade input').each(function(){
                let price = parseFloat($(this).data('variacao-valor').replace('R$ ','').replace('.','').replace(',','.')) * parseInt($(this).val());
                console.log(price);
                total = total + price;                
                console.log(total);
            });            
            $('.apx_widgets_worker-variantGrade .total').text('R$ ' + (total.toFixed(2).toString().replace('.',',')));
        });
        console.log('apx_widgets.worker.variantGrade--multiOption OK');            
    }
};
