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

let script2 = document.createElement('script');
script2.src = "http://127.0.0.1:5500/4268/v2/apx_4268.js"
document.head.append(script2);
script2.onload = function() {
    apx_widgets.worker.pixPaymentMethod.list.push({target : "#pagamento6 .forma-conteiner > img"});
    apx_widgets.worker.pixPaymentMethod.list.push({target : ".pagina-produto .principal img[src^='https://cdn.awsli.com.br/production/static/img/formas-de-pagamento/boleto-logo.png']"});
    apx_widgets.worker.pixPaymentMethod.list.push({target : ".gateways-rodape"});
    apx_widgets.worker.run();
    console.log('script loaded');        
};



