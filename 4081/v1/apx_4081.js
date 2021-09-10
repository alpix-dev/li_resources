apx_widgets.worker.checkoutExtraFields = {};
apx_widgets.worker.checkoutExtraFields.list = [];
//apx_widgets.worker.checkoutExtraFields.list.push({label : 'De:',id:'de',type: 'text',required : true});
//apx_widgets.worker.checkoutExtraFields.list.push({label : 'Para:',id:'para',type: 'text',required : true});
//apx_widgets.worker.checkoutExtraFields.list.push({label : 'Data:',id:'data',type: 'date',required : true});
apx_widgets.worker.checkoutExtraFields.match = $('.pagina-carrinho.carrinho-checkout').length > 0;
apx_widgets.worker.checkoutExtraFields.run = function(el){
    $('#formularioObservacao').hide();    
    var themeCheckoutExtraFields = $('<div class="apx_widgets_worker-checkoutExtraFields"></div>');
    $.each(apx_widgets.worker.checkoutExtraFields.list, function(k,item){
        themeCheckoutExtraFields.append(apx_widgets.functions.createField(item));
    });
    themeCheckoutExtraFields.insertBefore('#formularioObservacao');
    
    $('.apx_widgets_worker-checkoutExtraFields .theme-customInputElement [name^="theme_field"]').change(function(){
        var themeCheckoutFieldValues = "";
        $('.apx_widgets_worker-checkoutExtraFields .theme-customInputElement').each(function(){
            themeCheckoutFieldValues = themeCheckoutFieldValues + $(this).find('label').text() + ' ' +  $(this).find('[name^="theme_field"]').val() + '\n';
        })
        $('[name="cliente_obs"]').val(themeCheckoutFieldValues);
    });
    console.log('apx_widgets.worker.checkoutExtraFields OK');
}

