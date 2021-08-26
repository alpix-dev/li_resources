apx_widgets.worker.buyTogether = {};
apx_widgets.worker.buyTogether.list = [{}];
apx_widgets.worker.buyTogether.list.push({sku : "D8L4AHNAD",products : []);
apx_widgets.worker.buyTogether.config = {title: "Aproveite e leve também"};
apx_widgets.worker.buyTogether.style = "<style>/* BUY TOGETHER */ .apx_widgets_worker-buyTogether{}</style>";
apx_widgets.worker.buyTogether.match = $('.pagina-produto').length > 0;
apx_widgets.worker.buyTogether.run = function(el){
    var apx_widgetsbuyTogether = $('<div class="apx_widgets_worker-buyTogether"></div>');        
    
    console.log('apx_widgets.worker.buyTogether OK');
};