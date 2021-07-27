apx_widgets.worker.sizeTable = {};
apx_widgets.worker.sizeTable.list = [];
apx_widgets.worker.sizeTable.style = "<style>/* SIZE TABLE */.apx_widgets_worker-sizeTable{display:block;margin:10px 0 0 0;font-size: 11px!important;text-decoration:underline!important;}.apx_widgets_worker-sizeTable-icon{font-size:0;max-width:20px;vertical-align:middle;margin-right:3px;}.apx_widgets_worker-sizeTable > *{max-width:100%;}</style>";
apx_widgets.worker.sizeTable.config = {text:"Guia de Medidas", icon:"<i class='apx_widgets_worker-sizeTable-icon'><svg fill='#000' xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 16 16' width='16px' height='16px'><path d='M 7.5 1 C 3.917969 1 1 3.917969 1 7.5 C 1 11.082031 3.917969 14 7.5 14 C 11.082031 14 14 11.082031 14 7.5 C 14 3.917969 11.082031 1 7.5 1 Z M 7.5 2 C 10.542969 2 13 4.457031 13 7.5 C 13 10.542969 10.542969 13 7.5 13 C 4.457031 13 2 10.542969 2 7.5 C 2 4.457031 4.457031 2 7.5 2 Z M 7 4 L 7 5 L 8 5 L 8 4 Z M 7 6 L 7 11 L 8 11 L 8 6 Z'/></svg></i>",backgroundColor: "#fff",textColor:"#000", target:".atributo-comum .cor-secundaria:contains(Tamanho)"};
apx_widgets.worker.sizeTable.match = $('.pagina-produto').length > 0;
apx_widgets.worker.sizeTable.run = function(el){    
    const sizeTableProduct = $('.pagina-produto .info-principal-produto [itemprop="sku"]').text().trim();
    const sizeTableBrand = $('.pagina-produto [itemprop="brand"] [itemprop="name"]').length > 0 ? $('.pagina-produto [itemprop="brand"] [itemprop="name"]').attr('content').toLowerCase() : '';
    
    var themeSizeTable = apx_widgets.worker.sizeTable.list.filter( el => el.identifier == sizeTableProduct);
    if(themeSizeTable.length == 0){
        themeSizeTable = apx_widgets.worker.sizeTable.list.filter( el => el.identifier == sizeTableBrand);
    }

    if(themeSizeTable.length > 0){
        $(apx_widgets.worker.sizeTable.config.target).parent().after("<a href='"+ themeSizeTable[0].src +"' class='apx_widgets_worker-sizeTable' style='"+ (apx_widgets.worker.sizeTable.config.textColor != undefined ? "color:" +  apx_widgets.worker.sizeTable.config.textColor + ";" : "") + " " + (apx_widgets.worker.sizeTable.config.backgroundColor != undefined ? "background-color:" +  apx_widgets.worker.sizeTable.config.backgroundColor + ";" : "") + "'>"+ apx_widgets.worker.sizeTable.config.icon + "" + apx_widgets.worker.sizeTable.config.text +"</a>");
        $(".apx_widgets_worker-sizeTable").fancybox();
    }   
    console.log('apx_widgets.worker.sizeTable OK');
};