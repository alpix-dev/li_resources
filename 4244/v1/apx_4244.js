apx_widgets.worker.offerTimer = {};
apx_widgets.worker.offerTimer.list = [];
apx_widgets.worker.offerTimer.list.push({sku : "FGGYJHTL2",text: "5% OFF COM O CUPOM <b>CHEGUEI</b>", date: "24/07/2021"});
apx_widgets.worker.offerTimer.config = {targetList:".info-produto",targetProductPage:".comprar",backgroundColor: "#000", textColor:"fff", layout: '<span class="apx_widgets_worker-offerTimer"><span>[text]</span><div><svg data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M12,4a9,9,0,1,0,9,9A9,9,0,0,0,12,4Zm0,16a7,7,0,1,1,7-7A7,7,0,0,1,12,20ZM21.19,3.81A12.88,12.88,0,0,0,17.06,1l-.78,1.84a11.08,11.08,0,0,1,3.5,2.36,11.43,11.43,0,0,1,1.87,2.49l1.75-1A13.19,13.19,0,0,0,21.19,3.81Zm-13.47-1L6.94,1A12.88,12.88,0,0,0,2.81,3.81,13.19,13.19,0,0,0,.6,6.74l1.75,1A11.43,11.43,0,0,1,4.22,5.22,11.08,11.08,0,0,1,7.72,2.86ZM13,8H11v6h5V12H13Z"/></svg><div data-limit="[date]"><span class="h"></span>:<span class="m"></span>:<span class="s"></span></div></div></span>'};
apx_widgets.worker.offerTimer.style = "<style>/*OFFER TIMER*/.apx_widgets_worker-offerTimer{position: absolute; bottom: 100%; background: #000; width: fit-content; left:50%; transform:translate(-50%, 0); border-radius: 5px; box-shadow: 0px 0px 10px rgb(0 0 0 / 30%); color: #fff; padding:10px;}.apx_widgets_worker-offerTimer > span{font-weight: 600; font-size: 10px; text-transform: uppercase; display: block; text-align: center;}.apx_widgets_worker-offerTimer > div{display: flex; justify-content: flex-start; align-items: center; gap:5px;}.apx_widgets_worker-offerTimer > div > svg{width: 30px; fill: #fff;}.apx_widgets_worker-offerTimer > div > div{font-weight: 900; font-size: 22px;}.apx_widgets_worker-offerTimer > div > div > span{margin: 0 3px; display: inline-block; line-height: initial;}.pagina-produto .principal .apx_widgets_worker-offerTimer{position: relative; display: block; width: fit-content; white-space: nowrap; transform: unset; left: unset; float: none; margin: 0 0 15px auto;}</style>";
apx_widgets.worker.offerTimer.match = $('.acoes-produto').length > 0;
apx_widgets.worker.offerTimer.run = function(el){
    $('.listagem-item').each(function(){        
        const me = $(this);
        let productSku = $(this).find('.produto-sku').text();
        let findOffer = apx_widgets.worker.offerTimer.list.find(el => el.sku.toLowerCase().trim() === productSku.toLowerCase().trim());
        if(findOffer){
            $(this).find(apx_widgets.worker.offerTimer.config.targetList).prepend(apx_widgets.worker.offerTimer.config.layout.replace('[text]',findOffer.text).replace('[date]',findOffer.date));
            var dateString = findOffer.date;
            var dateParts = dateString.split("/");
            var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
            console.log(dateObject);
            let countDownDate = new Date(dateObject);
            countDownDate.setDate(countDownDate.getDate() + 1);
                    
            var x = setInterval(function() {
                if(me.find('.apx_widgets_worker-offerTimer').length > 0){
                    var now = new Date().getTime();            
                    var distance = countDownDate - now;            
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + (days*24);
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    
                    me.find('.apx_widgets_worker-offerTimer .h').text(hours.toString().length == 1 ? "0" + hours.toString() : hours);
                    me.find('.apx_widgets_worker-offerTimer .m').text(minutes.toString().length == 1 ? "0" + minutes.toString() : minutes);
                    me.find('.apx_widgets_worker-offerTimer .s').text(seconds.toString().length == 1 ? "0" + seconds.toString() : seconds);

                    if (distance < 1) {
                        me.find('.apx_widgets_worker-offerTimer').remove();
                    }
                }
            }, 1000);
        }        
    });   
    
    $('.pagina-produto .principal .acoes-produto.disponivel').each(function(){
        const me = $(this);
        let productSku = $(this).attr('class').replace('acoes-produto','').replace('disponivel','').replace('SKU-','').trim().toLowerCase();
        let findOffer = apx_widgets.worker.offerTimer.list.find(el => el.sku.toLowerCase().trim() === productSku.toLowerCase().trim());
        if(findOffer){
            $(apx_widgets.worker.offerTimer.config.layout.replace('[text]',findOffer.text).replace('[date]',findOffer.date)).insertBefore($(this).find(apx_widgets.worker.offerTimer.config.targetProductPage));
            var dateString = findOffer.date;
            var dateParts = dateString.split("/");
            var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
            console.log(dateObject);
            let countDownDate = new Date(dateObject);
            countDownDate.setDate(countDownDate.getDate() + 1);
                    
            var x = setInterval(function() {
                if(me.find('.apx_widgets_worker-offerTimer').length > 0){
                    var now = new Date().getTime();            
                    var distance = countDownDate - now;            
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + (days*24);
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    
                    me.find('.apx_widgets_worker-offerTimer .h').text(hours.toString().length == 1 ? "0" + hours.toString() : hours);
                    me.find('.apx_widgets_worker-offerTimer .m').text(minutes.toString().length == 1 ? "0" + minutes.toString() : minutes);
                    me.find('.apx_widgets_worker-offerTimer .s').text(seconds.toString().length == 1 ? "0" + seconds.toString() : seconds);

                    if (distance < 1) {
                        me.find('.apx_widgets_worker-offerTimer').remove();
                    }
                }
            }, 1000);
        }   
    });
    
    console.log('apx_widgets.worker.offerTimer OK');
};
