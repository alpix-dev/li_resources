apx_widgets.worker.stripe = {};
apx_widgets.worker.stripe.list = [];
apx_widgets.worker.stripe.list.push({text : "5% OFF Somente hoje usando o cupom <b><u>ALPIX</u></b>",backgroundColor: '#000',textColor: '#fff',fontSize:"11px",padding: "10px", link: "/", img:""});
apx_widgets.worker.stripe.list.push({text : "Está chegando o <b><u>GRANDE ESQUENTA DA BLACK FRIDAY</u></b>",backgroundColor: '#CCC',textColor: '#666',fontSize:"11px",padding: "10px", link: "/", img:""});
apx_widgets.worker.stripe.config = {place: function(oObj){oObj.prependTo('body')} };
apx_widgets.worker.stripe.style = '<style></style>';
apx_widgets.worker.stripe.match = $('.pagina-carrinho').length < 1;
apx_widgets.worker.stripe.run = function(el){
    $.each(apx_widgets.worker.stripe.list,function(i,item){
        let apx_stripe = $('<div style="text-align:center;"></div>');
        if(item.backgroundColor !== undefined && item.backgroundColor !== ""){apx_stripe.css('background-color',item.backgroundColor)}
        if(item.textColor !== undefined && item.textColor !== ""){apx_stripe.css('color',item.textColor)}        
        if(item.fontSize !== undefined && item.fontSize !== ""){apx_stripe.css('font-size',item.fontSize)}   
        if(item.padding !== undefined && item.padding !== ""){apx_stripe.css('padding',item.padding)}        
        if(item.text !== undefined && item.text !== ""){apx_stripe.append('<div>'+item.text+'</div>')}
        if(item.img !== undefined && item.img !== ""){apx_stripe.append('<img src="'+item.img+'"/>')}
        if(item.link !== undefined && item.link !== ""){apx_stripe.children().wrapAll('<a style="display: block;color: unset;text-decoration:unset;"href="'+item.link+'"></a>')}        
        apx_widgets.worker.stripe.config.place(apx_stripe);
    })
};
