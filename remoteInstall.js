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
    $('[alt="Logomarca Loja Integrada"]').closest('a').attr('href','https://app.lojaintegrada.com.br/public/assinar?utm_source=partners&utm_campaign=399');
    
};

// let script1 = document.createElement('script');
// script1.src = "http://127.0.0.1:5501/remoteInstall.js"
// document.head.append(script1);


let script2 = document.createElement('script');
script2.src = "http://127.0.0.1:5501/4077/v1/apx_4077.js"
document.head.append(script2);
script2.onload = function() {
    apx_widgets.worker.sizeTable.list.push({identifier: 'x', src: 'https://cdn.awsli.com.br/1000x1000/1957/1957297/produto/102680211/6fb03d2043.jpg'});
    apx_widgets.worker.sizeTable.config.target = $('.others-acoes-produto .size-table');
    apx_widgets.worker.sizeTable.config.icon = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.529 19.785"><g transform="translate(0 -0.355)"><path d="M108.8,80.726c2.2,0,3.988-1.349,3.988-3s-1.786-3-3.988-3-3.988,1.349-3.988,3S106.608,80.726,108.8,80.726Zm0-4.937c1.6,0,2.922.885,2.922,1.935s-1.338,1.935-2.922,1.935-2.922-.885-2.922-1.935,1.338-1.941,2.922-1.941Zm0,0" transform="translate(-99.714 -70.747)"></path><path d="M26,12.522H18.127V6.972c0-3.647-4.057-6.616-9.063-6.616S0,3.325,0,6.972v6.558c0,3.359,3.439,6.131,7.869,6.552H7.96c.368.032.741.059,1.12.059H26a.533.533,0,0,0,.533-.533V13.055A.533.533,0,0,0,26,12.522ZM9.09,1.427c4.4,0,8,2.49,8,5.55s-3.577,5.55-8,5.55-8-2.49-8-5.55S4.7,1.427,9.09,1.427Zm8,8.658v2.437H13.995a8.039,8.039,0,0,0,3.066-2.437Zm8.375,8.989H24.4v-2.7a.533.533,0,1,0-1.066,0v2.7H21.2V17.613a.533.533,0,0,0-1.066,0v1.466H18V17.613a.533.533,0,0,0-1.066,0v1.466H14.8v-2.7a.533.533,0,1,0-1.066,0v2.7H11.692V17.613a.533.533,0,0,0-1.066,0v1.466H8.493V17.613a.533.533,0,0,0-1.066,0v1.338c-3.6-.533-6.307-2.762-6.307-5.427V10.085c1.525,2.085,4.526,3.5,8,3.5H25.463Zm0,0"></path></g></svg>';
    apx_widgets.worker.sizeTable.config.textColor = "var(--cor-principal)";
    apx_widgets.worker.sizeTable.run = function(el){    
        const sizeTableProduct = $('.pagina-produto .info-principal-produto [itemprop="sku"]').text().trim();
        const sizeTableBrand = $('.pagina-produto [itemprop="brand"] [itemprop="name"]').length > 0 ? $('.pagina-produto [itemprop="brand"] [itemprop="name"]').attr('content').toLowerCase() : '';
        
        var themeSizeTable = apx_widgets.worker.sizeTable.list.filter( el => el.identifier == sizeTableProduct);
        if(themeSizeTable.length == 0){
            themeSizeTable = apx_widgets.worker.sizeTable.list.filter( el => el.identifier == sizeTableBrand);
        }
        if(themeSizeTable.length == 0){
            themeSizeTable = apx_widgets.worker.sizeTable.list.filter( el => el.identifier == "x");
        }
    
        if(themeSizeTable.length > 0){
        //<button class="open-table" style="display: flex;">GUIA DE MEDIDAS</button>
            $(apx_widgets.worker.sizeTable.config.target).prepend("<a href='"+ themeSizeTable[0].src +"' class='apx_widgets_worker-sizeTable open-table'>"+ apx_widgets.worker.sizeTable.config.icon + "" + apx_widgets.worker.sizeTable.config.text +"</a>");
            $(".apx_widgets_worker-sizeTable").fancybox();
        }   
        $('body').append('<style>.apx_widgets_worker-sizeTable{text-decoration: none!important;font-size: 13px!important;font-family: "Open Sans";}.apx_widgets_worker-sizeTable + .open-table{display:none!important}</style>');
        console.log('apx_widgets.worker.sizeTable OK');
    };
    apx_widgets.worker.run();
    console.log('script loaded');        
};
