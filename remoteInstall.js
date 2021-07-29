// const apx_widgets = {}
// apx_widgets.functions = [];
// apx_widgets.scripts = [];

// apx_widgets.worker = {};
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

let script2 = document.createElement('script');
script2.src = "http://127.0.0.1:5500/4268/v1/apx_4268.js"
document.head.append(script2);
script2.onload = function() {
    apx_widgets.worker.pixPaymentMethod.style = "<style>/* PIX FOOTER */.apx_widgets_worker-pixPaymentMethod-footer{}.apx_widgets_worker-pixPaymentMethod-footer .icon{height:26px;} .apx_widgets_worker-pixPaymentMethod-footer .icon > *{max-height:100%;width:auto;}</style>";
    apx_widgets.worker.pixPaymentMethod.list.push({target : "#pagamento520160 .forma-conteiner > img"});
    apx_widgets.worker.pixPaymentMethod.list.push({target : ".pagina-produto .text-parcelas + img[src^='https://cdn.awsli.com.br/production/static/img/formas-de-pagamento/boleto-logo.png']"});
    apx_widgets.worker.run();
    console.log('script loaded');        
};




