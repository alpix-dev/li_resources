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

// //.!77!        ~777.         !7777:         ~7777777!~^.      !7777777!~:    :?77!.      .7777.   
//    //~@@@&:      .&@@@!        Y@@@@@#:       .#@@@@@@@@@@#Y:   ^@@@@@@@@@@&B?. :#@@@P.    .B@@@P.   
//    //~@@@&:      .#@@@!       !@@@G@@@G       .#@@@J~~~?B@@@#:  ~@@@&!~~!J&@@@P  .G@@@P   .G@@@Y     
//    //~@@@&.       #@@@!      :&@@P P@@@J      .#@@@7    :&@@@?  ~@@@&:    7@@@@^  .G@@@P .G@@@J      
//    //~@@@@YJJJJJJJ&@@@!      G@@&: :#@@@!     .#@@@!    !@@@@!  ~@@@&.    Y@@@#.   .5@@@Y5@@@?       
//    //~@@@@@@@@@@@@@@@@!     Y@@@7   !@@@#:    .#@@@PJJYG@@@@J   ~@@@@YJJ5B@@@#!      Y@@@@@@7        
//    //~@@@&7!!!!!!7&@@@!    !@@@G~~~~^G@@@G    .#@@@@@@@&#GJ^    ~@@@@@@@@&BP7.        Y@@@@7         
//    //~@@@&.      .#@@@!   :&@@@@@@@@@@@@@@J   .#@@@?:^::.       ~@@@&~:::.            ~@@@#.         
//    //~@@@&:      .#@@@!   G@@@J~~~~~~~?@@@@!  .#@@@7            ~@@@&:                ~@@@&.         
//    //~@@@@:      .&@@@!  Y@@@P         Y@@@&: .#@@@7            ~@@@@:                !@@@&:         
//    //.?YY?.       7YYJ:  ?YYJ.         .?YYY^  7YYJ:            .?YY?.                :JYY?.         
//     //~777!:       ^77~        .^!?JJJJ7!^.     :777~       .!77!:       ^777: .JG#&&&&BP?:          
//    //~@@@@@&?      G@@&:     ~5#@@@@@@@@@@#Y:   ~@@@@!      J@@@@P      .#@@@^ .BG5JJYB@@@&!         
//    //!@@@&@@@J     G@@&:   .5@@@&Y!^:^~?B@@@&!   5@@@G     :&@@@@@!     ?@@@5          J@@@#.        
//    //!@@@Y5@@@5    G@@&:   5@@@B:        5@@@&:  :&@@@!    Y@@@@@@G    .#@@&:          7@@@#.        
//    //!@@@Y 5@@@P.  G@@&:  ^@@@@!         :&@@@J   J@@@G   :&@@JP@@@!   ?@@@J       ^!!Y&@@&!         
//    //!@@@Y  5@@@G: G@@&:  !@@@&:         .B@@@Y   .#@@@~  Y@@#.^@@@B. .#@@#.      .#@@@BP?:          
//    //!@@@Y   Y@@@B:G@@&:  !@@@@~         .&@@@?    7@@@G ^&@@?  5@@@7 7@@@7       .#@@#.             
//    //!@@@Y    ?@@@BB@@&:  .#@@@5         J@@@&:     B@@@~Y@@#.  ^&@@#:B@@G         ?557              
//    //!@@@Y     7@@@@@@&:   !@@@@P~.. ..~5@@@&!      !@@@B&@@?    Y@@@B@@@~         !JJ7.             
//    //!@@@5      7&@@@@&:    ^P&@@@&###&@@@#Y:        P@@@@@#.    :&@@@@@5         ~@@@@!             
//    //:YYY~       ^JYYY7       :!J5PGGGPY?~.          :JYYYY~      ~YYYYJ.         .YGGY: 

function apx_related(){
    $('#rodape a').click(function(e){
        e.preventDefault();
        let url = $(this).attr('href');
        if (url.includes('lojaintegrada') || url.includes('loja-integrada')){
            window.open('https://www.alpix.dev/criar-sua-loja-integrada', '_blank');        
        }else{
            window.location.href = url;
        }
    });
    //$('a[href^="https://www.lojaintegrada.com.br/?utm_source=lojas"]').attr('href','https://www.alpix.dev/criar-sua-loja-integrada');            
}
