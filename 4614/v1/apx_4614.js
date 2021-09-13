apx_widgets.worker.customFilter = {};
apx_widgets.worker.customFilter.list = [];
//apx_widgets.worker.customFilter.list.push({text: "Jaquetas",url:"/https://alpix-battle-ground.lojaintegrada.com.br/jaquetas-14955775", showOnPageURL : ""});
apx_widgets.worker.customFilter.style = "<style>/* APX CUSTOM FILTER */.apx_widgets_worker-customFilter{}.apx_widgets_worker-customFilter ul{border:0!important; display: flex; gap: 10px; flex-wrap: wrap;}.apx_widgets_worker-customFilter ul > li{border: 1px solid #f2f2f2!important; box-sizing: border-box; padding: 5px 10px;}.apx_widgets_worker-customFilter ul > li > a{}</style>";
apx_widgets.worker.customFilter.config = {title: "Sugestões", active:true, smartSuggestion:true, targetFunction: function(oObj){oObj.insertAfter($('.coluna > div:nth-child(1)'));}};
apx_widgets.worker.customFilter.match = $('.coluna .filtro-coluna').length > 0 && $('.listagem-item').length > 1 && apx_widgets.worker.customFilter.config.active;
apx_widgets.worker.customFilter.run = function(el){
    let apx_widgetsCustomFilter = $('<div class="lateral outras filtro-coluna apx_widgets_worker-customFilter"> <div class="filtro lista borda-principal" data-toggle="tooltip" data-placement="right" title=""> <h4 class="titulo cor-secundaria"> '+ apx_widgets.worker.customFilter.config.title +' </h4> <div class="borda-alpha"> <ul> </ul> </div></div></div>');
    let suggestions = [];

    if(apx_widgets.worker.customFilter.list.length > 0){
        $.each(apx_widgets.worker.customFilter.list, function(k,v){
            if(window.location.pathname.replace('/','') == v.showOnPageURL || v.showOnPageURL == "" || v.showOnPageURL == undefined){
                suggestions.push({text: v.text, link: v.url});
            }
        })
    }    
    if(apx_widgets.worker.customFilter.config.smartSuggestion){
        
        $('.listagem-item .nome-produto').each(function(){
            $.each($(this).text().split(' '), function(k,v){
                if(v.length > 2){
                    try{
                        let find = suggestions.find(e => e.text.toLowerCase() == v.toLowerCase());
                        find == undefined  ? suggestions.push({text: v.toLowerCase(), link: '/buscar?q=' + v.toLowerCase()}) : '';
                    }catch(e){
                        console.log('4614 - ' + e);
                    }
                }
            });
            

        });
    }
    if(suggestions.length > 0){
        $.each(suggestions,function(k,v){
            apx_widgetsCustomFilter.find('ul').append('<li><a href="'+ v.link+'">'+ v.text+'</a></li>');
        })
        apx_widgets.worker.customFilter.config.targetFunction(apx_widgetsCustomFilter);    
        console.log('apx_widgets.worker.customFilter OK');
    }
};
