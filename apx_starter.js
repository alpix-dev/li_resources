const apx_widgets = {}
apx_widgets.functions = [];
apx_widgets.scripts = [];

apx_widgets.scripts.Glide = function(){
    console.log('apx_widgets -- Glide');
};

apx_widgets.worker = {};
apx_widgets.worker.run = function(){
    let starterCSS = document.createElement('link');
    starterCSS.href = "https://cdn.jsdelivr.net/gh/alpix-dev/li_resources/apx_starter.css";
    starterCSS.type = "text/css";
    starterCSS.rel = "stylesheet";
    document.head.append(starterCSS);
    
    $(window).load(function(){
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
    });
};

apx_widgets.functions.blockPage = function (status){
    if(status){
        $('body').append('<div id="apx_loader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>');
    }else{
        $('#apx_loader').remove();
    }   
};

document.addEventListener("DOMContentLoaded", function() {
    $(function() {
        apx_widgets.worker.run();
        apx_related();
    });
}, false);
window.addEventListener('load', function(event) {
    apx_related();
});

function apx_related(){
    $('[alt="Logomarca Loja Integrada"]').closest('a').attr('href','https://www.alpix.dev/criar-sua-loja-integrada');
    $('a[title="Loja Integrada"]').attr('href','https://www.alpix.dev/criar-sua-loja-integrada');
    $('a[title="Loja Integrada - Plataforma de loja virtual."]').attr('href','https://www.alpix.dev/criar-sua-loja-integrada');        
    $('.creditos.plataforma').attr('href','https://www.alpix.dev/criar-sua-loja-integrada');        
}