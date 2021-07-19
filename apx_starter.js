const apx_widgets = {}
apx_widgets.functions = [];
apx_widgets.scripts = [];

apx_widgets.scripts.Glide = function(){
    if(typeof window.Glide === "undefined"){
        let glideJS = document.createElement('script');
        glideJS.src = "https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/glide.min.js";
        document.body.append(glideJS);
        
        let glideCSS = document.createElement('link');
        glideCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/css/glide.core.css";
        glideCSS.rel  = 'stylesheet';
        glideCSS.type = 'text/css';
        glideCSS.media = 'all';
        document.body.append(glideCSS);  

        $('head').append('<style>/* GLIDE FIX */.glide__slides:after{display:none;}.glide__slides{margin:0;}</style>');
    }
};

apx_widgets.worker = {};
apx_widgets.worker.run = function(){
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

document.addEventListener("DOMContentLoaded", function() {
    $(function() {
        apx_widgets.worker.run();
    });
}, false);