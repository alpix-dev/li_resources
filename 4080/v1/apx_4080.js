apx_widgets.worker.testimonials = {};
apx_widgets.worker.testimonials.list = [];
//apx_widgets.worker.testimonials.list.push({name : "Mariana",rating: 5, description: "Estou usando a calça desde que chegou e estou muito satisfeito com o produto. Está exatamente como nas fotos, se encaixa perfeitamente, é muito confortável e de boa qualidade. Recomendo a compra sem problemas.", img:"http://127.0.0.1:5500/400x400.png"});
apx_widgets.worker.testimonials.config = {title:"O que dizem por ai", ratingColor: "#f9d141", nameColor: "#000", descriptionColor:"#666", target: "#blank-home-position3", sliderSettings:{type: 'carousel', gap:20, autoplay: 4000, perView: 3, breakpoints:{800:{perView: 1}}}, sliderArrows: '<div class="glide__arrows" data-glide-el="controls"> <button class="glide__arrow glide__arrow--prev" data-glide-dir="<" style=""><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style=""><defs><style>.cls-1{fill:none;}</style></defs><title></title><g data-name="Layer 2" id="Layer_2"><path d="M20,25a1,1,0,0,1-.71-.29l-8-8a1,1,0,0,1,0-1.42l8-8a1,1,0,1,1,1.42,1.42L13.41,16l7.3,7.29a1,1,0,0,1,0,1.42A1,1,0,0,1,20,25Z"></path></g><g id="frame"><rect class="cls-1" height="32" width="32"></rect></g></svg></button> <button class="glide__arrow glide__arrow--next" data-glide-dir=">"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><title></title><g data-name="Layer 2" id="Layer_2"><path d="M12,25a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L18.59,16l-7.3-7.29a1,1,0,1,1,1.42-1.42l8,8a1,1,0,0,1,0,1.42l-8,8A1,1,0,0,1,12,25Z"></path></g><g id="frame"><rect class="cls-1" height="32" width="32"></rect></g></svg></button> </div>'};
apx_widgets.worker.testimonials.style = "<style>/* TESTIMONIALS */.apx_widgets_worker-testimonials{-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}.apx_widgets_worker-testimonials .glide{margin: 2rem 0 5rem 0;}.apx_widgets_worker-testimonials > ul{margin:0;}.apx_widgets_worker-testimonials ul > li{}.apx_widgets_worker-testimonials ul > li > div{text-align: left; display: flex; gap: 15px; align-items: flex-start; padding: 15px; border: 1px solid #f8f8f8; border-radius: 10px; box-shadow: 5px 5px 5px rgb(0 0 0 / 3%); margin: 15px 0;}.apx_widgets_worker-testimonials ul > li > div strong{font-size: 16px; display: block; margin: 0px 0 10px 0;}.apx_widgets_worker-testimonials ul > li > div p{white-space: pre-wrap; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 99; -webkit-box-orient: vertical;}.apx_widgets_worker-testimonials ul > li > div i{font-size:14px; margin:5px 3px 0 0;}.apx_widgets_worker-testimonials ul > li > div > img{max-width:100%; width:100px; display: block;}.apx_widgets_worker-testimonials .glide_arrows .glide__arrow{position: absolute; top: 50%; left: -23px; height: 46px; width: 46px; border: 1px solid #f8f8f8; border-radius: 50%; box-shadow: 5px 5px 5px rgb(0 0 0 / 3%); background: #fff;}.apx_widgets_worker-testimonials .glide_arrows .glide__arrow.glide__arrow--next{left:auto;right:-23px}.apx_widgets_worker-testimonials .glide_arrows .glide__arrow svg{height: 46px; width: 34px; fill: #e0e0e0;}</style>";
apx_widgets.worker.testimonials.match = $('.pagina-inicial').length > 0;
apx_widgets.worker.testimonials.run = function(el){
    var apx_widgetsTestimonials = $('<div class="apx_widgets_worker-testimonials"></div>');    
    apx_widgetsTestimonials.append('<div class="titulo-categoria cor-principal"><strong>'+ apx_widgets.worker.testimonials.config.title +'</strong></div>');    
    var apx_widgetsTestimonialsList = $('<ul class="glide__slides" slides-md="'+ apx_widgets.worker.testimonials.config.slidesDesktop +'" slides-xs="'+ apx_widgets.worker.testimonials.config.slidesMobile +'"></ul>');
    $.each(apx_widgets.worker.testimonials.list, function(k,item){
        let li_ = $('<li></li>');
        let li = $('<div></div>');
        var content = $('<div class="content"></div>');
        if(item.img != ""){li.append('<img src="'+item.img+'"/>');}
        if(item.name != ""){content.append('<div><strong style="'+ (apx_widgets.worker.testimonials.config.nameColor != "" ? "color:" + apx_widgets.worker.testimonials.config.nameColor + ";": "") +'" >'+ item.name +'</strong></div>');}
        if(item.description != ""){content.append('<div><p style="'+ (apx_widgets.worker.testimonials.config.descriptionColor != "" ? "color:" + apx_widgets.worker.testimonials.config.descriptionColor + ";": "") +'">'+ item.description +'</p></div>');}
        if(item.rating != ""){
            for(let i = 1; i<=5; i++ ){
                content.append('<i style="'+ (apx_widgets.worker.testimonials.config.ratingColor != "" ? "color:" + apx_widgets.worker.testimonials.config.ratingColor + ";": "") +'" class="fa fa-star'+ (i<= item.rating ? '' : '-o') +'"></i>');
            }            
        }
        li.append(content);
        li_.append(li);        
        apx_widgetsTestimonialsList.append(li_);
    });
    apx_widgetsTestimonials.append(apx_widgetsTestimonialsList);
    apx_widgetsTestimonials.appendTo(apx_widgets.worker.testimonials.config.target);
    $('.apx_widgets_worker-testimonials .glide__slides').wrap('<div class="glide__track" data-glide-el="track"></div>');
    $('.apx_widgets_worker-testimonials .glide__track').wrap('<div class="glide" data-wait-mutation="false" data-autoplay="4000" data-per-view="'+ apx_widgets.worker.testimonials.config.slidesDesktop +'" data-per-view-sm="'+ apx_widgets.worker.testimonials.config.slidesMobile +'" ></div>');
    
    if(apx_widgets.worker.testimonials.config.sliderArrows !== ""){
        $('.apx_widgets_worker-testimonials .glide__track').append(apx_widgets.worker.testimonials.config.sliderArrows);
    }
    
    new Glide('.apx_widgets_worker-testimonials .glide', apx_widgets.worker.testimonials.config.sliderSettings).mount();
    
    console.log('apx_widgets.worker.testimonials OK');
};
