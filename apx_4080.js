apx_widgets.worker.testimonials = {};
apx_widgets.worker.testimonials.list = [];
//apx_widgets.worker.testimonials.list.push({name : "Mariana",rating: 5, description: "Estou usando a calça desde que chegou e estou muito satisfeito com o produto. Está exatamente como nas fotos, se encaixa perfeitamente, é muito confortável e de boa qualidade. Recomendo a compra sem problemas.", img:"http://127.0.0.1:5500/400x400.png"});
//apx_widgets.worker.testimonials.list.push({name : "Gabriela",rating: 5, description: "A calça ficou fabulosa, o acabamento é incrível, achei que ficaria mais curto por ser modelo cropped mas não, ficou perfeito. A entrega foi super rápida, comprei na segunda-feira e chegou no sábado. Recomendo a todos!", img:"http://127.0.0.1:5500/400x400.png"});
//apx_widgets.worker.testimonials.list.push({name : "Vanessa",rating: 5, description: "O produto é ótimo, estou usando há dois meses e já perdi 5 quilos. A entrega foi rápida e sem problemas. Recomendo!", img:"http://127.0.0.1:5500/400x400.png"});
//apx_widgets.worker.testimonials.list.push({name : "Amanda",rating: 5, description: "A calça preta é a minha preferida de todas! Uma peça clássica que nunca sai de moda, cores variadas, fica linda com camisetas xadrez e com t-shirts básicas.", img:"http://127.0.0.1:5500/400x400.png"});
//apx_widgets.worker.testimonials.list.push({name : "Fabíola",rating: 4, description: "A calça é linda, o tecido é de muito boa qualidade e a entrega foi rápida. Estou satisfeita com esse produto.", img:"http://127.0.0.1:5500/400x400.png"});
apx_widgets.worker.testimonials.config = {title:"O que dizem por ai", ratingColor: "#f9d141", nameColor: "#000", descriptionColor:"#666", slidesDesktop: 3, slidesMobile: 1, target: "#blank-home-position3"};
apx_widgets.worker.testimonials.style = "<style>/* TESTIMONIALS */.apx_widgets_worker-testimonials{-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}.apx_widgets_worker-testimonials .glide{margin: 2rem 0 5rem 0;}.apx_widgets_worker-testimonials > ul{margin:0;}.apx_widgets_worker-testimonials ul > li{}.apx_widgets_worker-testimonials ul > li > div{text-align: left; display: flex; gap: 15px; align-items: flex-start; background: #f8f8f8; padding: 15px;}.apx_widgets_worker-testimonials ul > li > div strong{font-size: 14px; display: block; margin: 0px 0 10px 0;}.apx_widgets_worker-testimonials ul > li > div p{white-space: pre-wrap; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;}.apx_widgets_worker-testimonials ul > li > div i{font-size:18px;margin:5px 3px 0 0;}.apx_widgets_worker-testimonials ul > li > div > img{max-width:100%; width:100px; display: block;}</style>";
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
    
    new Glide('.apx_widgets_worker-testimonials .glide', {            
        type: 'carousel',
        gap:20,
        autoplay: 4000,
        perView: apx_widgets.worker.testimonials.config.slidesDesktop,
        breakpoints: {
            800: {
                perView: apx_widgets.worker.testimonials.config.slidesMobile
            }
        }        
    }).mount();
    
    console.log('apx_widgets.worker.testimonials OK');
};