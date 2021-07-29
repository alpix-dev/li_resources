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

let script2 = document.createElement('script');
script2.src = "http://127.0.0.1:5500/4268/v1/apx_4268.js"
document.head.append(script2);
script2.onload = function() {
    
    apx_widgets.worker.run();
    console.log('script loaded');        
};




