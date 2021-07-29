apx_widgets.worker.variantGrade = {};
apx_widgets.worker.variantGrade.list = [{}];
apx_widgets.worker.variantGrade.config = {};
apx_widgets.worker.variantGrade.style = '<style>/* VARIANT GRADE */ .apx_widgets_worker-variantGrade{} .apx_widgets_worker-variantGrade td input{margin:0;} .apx_widgets_worker-variantGrade td{vertical-align:middle;} .apx_widgets_worker-variantGrade td:first-child > span[style^="border-color"]{height: 0;    width: 30px;    display: inline-block;    border-top: 30px solid #fff;    border-radius: 50%;    box-shadow: 0px 0px 2px #000;}</style>';
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

        let table = $('<div class="apx_widgets_worker-variantGrade"></div>');
        let tr = $('<tr><th></th></tr>');
        for (let i = 0; i < options.variants[1].length; i++) {            
            tr.append('<th>'+ options.variants[1][i].nameOrContent +'</th>');
        }
        table.append(tr);

        for (let i = 0; i < options.variants[0].length; i++) {            
            let tr = $('<tr></tr>');
            tr.append('<td>'+ options.variants[0][i].nameOrContent +'</td>');
            for (let z = 0; z < options.variants[1].length; z++) {    
                console.log('[data-variacao-id="'+ options.variants[0][i].variantId +'-'+ options.variants[1][z].variantId +'"]')        ;
                tr.append('<td>' + ($('[data-variacao-id="'+ options.variants[0][i].variantId +'-'+ options.variants[1][z].variantId +'"]').length > 0 ? '<input data-variacao-id="'+ options.variants[0][i].variantId +'-'+ options.variants[1][z].variantId +'" type="tel" value="0" style="width:50px"/>' : '<span></span>') + '</td>');
            }
            table.append(tr);
        }
        
        table.insertBefore('.atributos');
        console.log(options);
        console.log('apx_widgets.worker.variantGrade--multiOption OK');    
        
    }

};
