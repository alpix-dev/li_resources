var calcular_frete = function() {
    var c = $("[name=cep]").val();
    var b = $("[name=produto_id]").val();
    var d = $(".produto .acoes-produto:visible [name=qtde-carrinho]").val() || 1;
    var e = {
        cep: c,
        produto_id: b,
        quantidade: d
    };
    $.cookie("cep", c, {
        expires: 7,
        path: "/"
    });
    $(".cep ul").empty().removeClass("hide").addClass("loading").slideDown();
    if (!b) {
        var a;
        a = $("<li>").html('<span class="error">Antes de calcular o frete Ã© necessÃ¡rio escolher as opÃ§Ãµes do produto.</span>');
        $(".cep ul").append(a);
        $(".cep ul").removeClass("loading");
        return false
    }
    $.getJSON(URL_PRODUTO_FRETE_CALCULAR, e, function(k) {
        var g;
        $(".cep ul").empty();
        if (k && k.length > 0) {
            if (k.estado != "erro") {
                for (var h in k) {
                    var j = k[h];
                    if (j.msg_erro && j.erro != "0" && document.location.pathname == "carrinho/index") {
                        var f = '<div class="alert alert-block alert-danger">' + j.nome_codigo_servico.toUpperCase() + ": " + j.msg_erro + "</div>";
                        g = $("<li>").append(f)
                    } else {
                        if (j.name) {
                            g = $("<li>").html('<span class="valor cor-principal">R$ :valor</span> <span class="prazo">:prazo dia:plural_dia Ãºt:plural_util</span> <span class="nome cor-secundaria">:nome</span>');
                            g.html(g.html().replace(":nome", j.name).replace(":valor", formatar_decimal_br(j.price)).replace(":prazo", j.deliveryTime).replace(":plural_dia", j.deliveryTime == 1 ? "" : "s").replace(":plural_util", j.deliveryTime == 1 ? "il" : "eis"))
                        }
                    }
                    if (j.msgErro) {
                        var f = '<div class="aviso">' + j.msgErro + "</div>";
                        g.append(f)
                    }
                    $(".cep ul").append(g)
                }
                $(".cep ul").next(".aviso-disponibilidade").slideDown()
            } else {
                g = $('<li class="alert alert-error">').html(k.erro);
                $(".cep ul").append(g)
            }
        } else {
            if (!c) {
                g = $('<li class="text-align-center">').html("Por favor informe um CEP.");
                $(".cep ul").append(g)
            } else {
                g = $('<li class="text-align-center">').html("NÃ£o foram encontradas formas de envio para o CEP informado.");
                $(".cep ul").append(g)
            }
        }
        $(".cep ul").removeClass("loading")
    }, "json");
    return false
};
(function(a) {
    a.ProdutoOpcoes = function(b, c) {
        this.$el = a(c);
        this._init(b)
    };
    a.ProdutoOpcoes.defaults = {
        atributos: ".atributos",
        item_atributo: ".atributo-item",
        item_acao: ".acoes-produto",
        class_ativo: ".active",
        class_indisponivel: "indisponivel"
    };
    a.ProdutoOpcoes.prototype = {
        _init: function(b) {
            this.options = a.extend(true, {}, a.ProdutoOpcoes.defaults, b);
            this.options.class_ativo_sem_ponto = this.options.class_ativo.replace(".", "");
            if (!a(this.options.atributos).length) {
                return false
            }
            this.total_grades = 0;
            this._verificar_total_grades();
            this._bind_click_opcoes();
            this._marcar_variacoes_indisponiveis()
        },
        _verificar_total_grades: function() {
            this.total_grades = a(this.options.atributos).children().length
        },
        _deselecionar_opcoes_mesmo_nivel: function(b) {
            a(b).parents("ul").children(this.options.class_ativo).removeClass(this.options.class_ativo_sem_ponto)
        },
        _selecionar_imagem_atributo: function(b) {
            var c = produto_grades_imagens[b];
            if (c) {
                a.each(c, function(d, e) {
                    a(".miniaturas li a[data-imagem-id=" + e + "]").click()
                });
                if (a(".acoes-flutuante").length && a(".produto .conteiner-imagem img").length) {
                    a(".acoes-flutuante .image img").attr("src", a(".produto .conteiner-imagem img").attr("src").replace("380x380", "210x210"))
                }
            }
        },
        _selecionar_opcao: function(b) {
            a(b).parents("li").addClass(this.options.class_ativo_sem_ponto);
            this._esconder_variacoes_inexistentes(b);
            if (this.total_grades > 1) {
                this._marcar_variacoes_indisponiveis(b)
            }
            if (a(b).attr("data-pode-ter-imagens") == "true") {
                this._selecionar_imagem_atributo(a(b).attr("data-variacao-id"))
            }
        },
        _marcar_variacoes_indisponiveis: function(b) {
            var j = this.options.item_atributo;
            var h = this.options.class_indisponivel;
            var k = this.options.atributos;
            if (this.total_grades == 1) {
                a(this.options.item_acao).each(function() {
                    var l = a(this);
                    var m = parseInt(getdata(l, "variacao-id"), 10);
                    if (l.hasClass("indisponivel")) {
                        a(j + "[data-variacao-id=" + m + "]").addClass(h)
                    }
                })
            } else {
                if (this.total_grades == 2) {
                    var d = parseInt(a(b).attr("data-variacao-id"), 10);
                    var f = [];
                    a(k + " > div:last-child").find("a").each(function(l, m) {
                        var n = a(m);
                        if (n.hasClass(h)) {
                            n.removeClass(h)
                        }
                        f.push(d + "-" + a(n).attr("data-variacao-id"))
                    });
                    for (var g = 0; g < f.length; g++) {
                        var c = a(this.options.item_acao + '[data-variacao-id="' + f[g] + '"]');
                        if (c.length) {
                            if (c.hasClass("indisponivel")) {
                                var e = f[g];
                                e = e.split("-")[1];
                                a(j + "[data-variacao-id=" + e + "]").addClass(h)
                            }
                        }
                    }
                }
            }
        },
        _esconder_variacoes_inexistentes: function(c) {
            var h = this.options.class_indisponivel;
            var g = this.options.class_ativo.replace(".", "");
            var l = parseInt(getdata(a(c), "grade-id"), 10);
            var e = parseInt(getdata(a(c), "variacao-id"), 10);
            var b = grades.indexOf(l);
            var f = [];
            var d;
            var m;
            for (var k in variacoes) {
                m = variacoes[k];
                variacoes_ids = variacoes[k][Object.keys(m)[0]];
                if (typeof(variacoes_ids) == "object" && variacoes_ids[b] == e) {
                    for (var j in variacoes_ids) {
                        variacao_id = variacoes_ids[j];
                        if (f.indexOf(variacao_id) == -1) {
                            f.push(variacao_id)
                        }
                    }
                }
            }
            a(this.options.item_atributo).each(function() {
                var n = a(this);
                var o = parseInt(getdata(n, "variacao-id"), 10);
                var p = parseInt(getdata(n, "grade-id"), 10);
                if (f.indexOf(o) == -1 && p != l) {
                    n.addClass(h);
                    n.find(".icon-remove").show();
                    n.parent("li").removeClass(g)
                } else {
                    if (a(".atributos > div").length > 1) {
                        n.removeClass(h);
                        n.find(".icon-remove").hide()
                    }
                }
            })
        },
        _esconder_acoes_produto: function() {
            a(".acoes-produto[data-produto-id]").hide();
            a(".parcelas-produto[data-produto-id]").hide()
        },
        _mostrar_acao_produto: function(f) {
            var d;
            var c;
            var e = false;
            for (var b in variacoes) {
                c = variacoes[b];
                d = Object.keys(c)[0];
                if (JSON.stringify(c[d]) == JSON.stringify(f)) {
                    e = true;
                    break
                }
            }
            if (e) {
                a(".acoes-produto[data-produto-id=" + d + "]").show();
                a("[name=produto_id]").val(d);
                a(".parcelas-produto[data-produto-id=" + d + "]").show()
            } else {
                a(".parcelas-produto.padrao").show()
            }
        },
        _verificar_selecao_opcoes: function() {
            var b = this;
            var d = a(b.options.atributos + " " + b.options.class_ativo);
            if (d.length == b.total_grades) {
                var c = [];
                d.each(function(h, j) {
                    var f = a(j).find(b.options.item_atributo);
                    var g = parseInt(getdata(f, "variacao-id"), 10);
                    c.push(g)
                });
                b._esconder_acoes_produto();
                b._mostrar_acao_produto(c)
            }
        },
        _bind_click_opcoes: function() {
            var b = this;
            a(b.options.item_atributo).click(function() {
                b._esconder_acoes_produto();
                a('.acoes-produto[data-variacao-id=""]').show();
                b._deselecionar_opcoes_mesmo_nivel(this);
                b._selecionar_opcao(this);
                b._verificar_selecao_opcoes()
            })
        }
    };
    a.fn.produto_opcoes = function(b) {
        return new a.ProdutoOpcoes(b, this)
    }
}(jQuery));
$(document).ready(function() {
    $(".preco-produto").on("click", "#produto-consulta-preco", function(d) {
        d.preventDefault();
        var c = $(this);
        var f = "#consulta-" + c.data("id");
        $(f).load("/contato/sob-consulta", function() {
            $(f).slideDown();
            if (c.data("nome")) {
                $("#consulte-produto_nome").val(c.data("nome"))
            } else {
                $("#consulte-produto_nome").val($(".produto .nome-produto").first().text())
            }
            $("#consulte-produto_sku").val(c.data("sku"));
            $("#consulte-nome").focus()
        })
    });
    $("#formCalcularCep").submit(calcular_frete);
    if (CONTRATO_BRAZIL) {
        $("#formCalcularCep .input-cep").mask("00000-000", {
            clearIfNotMatch: true,
            onComplete: function(c) {
                var d = $("#formCalcularCep .input-cep");
                var e = d.data("cep_old");
                if (e != c) {
                    if (c.length == 9 && c.indexOf("_") < 0) {
                        d.data("cep_old", c);
                        $("#formCalcularCep").submit()
                    }
                }
            }
        })
    }
    $(".produto .atributos").produto_opcoes();
    if (imagem_grande) {
        $(".thumbs-horizontal #carouselImagem").flexslider({
            animation: "slide",
            direction: "horizontal",
            slideshow: false,
            controlNav: false,
            itemWidth: 80,
            start: function(c) {
                if (c.pagingCount === 1) {
                    c.addClass("flex-centered")
                }
                $(".thumbs-horizontal #carouselImagem .flex-viewport").addClass("elastislide-carousel");
                $(".thumbs-horizontal #carouselImagem li").removeClass("active flex-active-slide");
                $(".thumbs-horizontal #carouselImagem li:eq(0)").addClass("active");
                $("#imagemProduto").ImageZoom({
                    bigImageSrc: imagem_grande
                })
            }
        });
        $(".thumbs-vertical #carouselImagem").flexslider({
            animation: "slide",
            direction: "vertical",
            slideshow: false,
            controlNav: false,
            itemWidth: 0,
            animationLoop: false,
            maxItems: 6,
            minItems: 1,
            start: function(c) {
                if (c.pagingCount === 1) {
                    c.addClass("flex-centered")
                }
                if ($(".thumbs-vertical .miniaturas li").length === 1 && !$(".thumbs-vertical .produto-video").length) {
                    $(".thumbs-vertical").hide();
                    $(".thumbs-vertical + .conteiner-imagem").css("margin-left", 0)
                }
                if ($(".thumbs-vertical .miniaturas li").length < 7) {
                    $(".thumbs-vertical .flex-direction-nav").hide();
                    $(".thumbs-vertical #carouselImagem").css("padding-bottom", 5)
                }
                $(".thumbs-vertical #carouselImagem .flex-viewport").addClass("elastislide-carousel");
                $(".thumbs-vertical #carouselImagem li").removeClass("active flex-active-slide");
                $(".thumbs-vertical #carouselImagem li:eq(0)").addClass("active");
                $(".thumbs-vertical #carouselImagem .flex-direction-nav .flex-nav-prev").prepend($('<div style="width: 30px; height: 30px; position: absolute; z-index: 11; bottom: 0; left: 0;"></div>'))
            },
            before: function(c) {
                if (c.animatingTo >= (c.count - 6)) {
                    $(".thumbs-vertical #carouselImagem .flex-direction-nav .flex-nav-next").prepend($('<div style="width: 30px; height: 30px; position: absolute; z-index: 11; bottom: 0; right: 5px;"></div>'))
                } else {
                    $(".thumbs-vertical #carouselImagem .flex-direction-nav .flex-nav-next div").remove()
                }
                if (c.animatingTo == 0) {
                    $(".thumbs-vertical #carouselImagem .flex-direction-nav .flex-nav-prev").prepend($('<div style="width: 30px; height: 30px; position: absolute; z-index: 11; bottom: 0; left: 0;"></div>'))
                } else {
                    $(".thumbs-vertical #carouselImagem .flex-direction-nav .flex-nav-prev div").remove()
                }
            },
            after: function(c) {
                if (c.animatingTo == (c.count - 6)) {
                    $(".thumbs-vertical #carouselImagem .flex-direction-nav .flex-nav-next a").addClass("flex-disabled")
                }
            }
        });
        $(".produto-thumbs").on("click", ".miniaturas li a", function(d) {
            d.preventDefault();
            $(this).parent().siblings().removeClass("active");
            $(this).parent().addClass("active");
            var c = $("#imagemProduto").data("imagezoom");
            if (c) {
                c.changeImage($(this).find("img").attr("data-mediumimg"), $(this).find("img").attr("data-largeimg"))
            }
        })
    }
    $("#abreZoom").click(function() {
        var g, c, f = [];
        g = $("#abreZoom").attr("href");
        imagens_li = $(".produto .miniaturas li");
        for (i = 0; i < imagens_li.length; i++) {
            if ($(imagens_li[i]).is(":visible")) {
                var d = $("a", imagens_li[i]).attr("data-imagem-grande");
                f.push(d)
            }
        }
        c = [{
            href: g
        }];
        for (i = 0; i < f.length; i++) {
            var e = f[i];
            if (e != g) {
                c.push({
                    href: e
                })
            }
        }
        $.fancybox(c);
        return false
    });
    $(".pagina-produto").on("click", ".zm-viewer, .produto .conteiner-imagem img, .produto .conteiner-imagem > div", function() {
        if (!$(".visible-phone").first().is(":visible")) {
            $("#abreZoom").click()
        }
    });
    $(".miniaturas a").click(function() {
        var c;
        c = $(this).attr("data-imagem-grande");
        $("#abreZoom").attr("href", c)
    });
    $(".atributos .atributo-comum").each(function(c, d) {
        if ($(d).find(".atributo-item").length > 10) {
            transformarSelect(d)
        }
    });
    if ($(".qtde-adicionar-carrinho").length) {
        setTimeout(function() {
            $(window).resize(function() {
                $(".qtde-adicionar-carrinho").each(function() {
                    $(this).width($(".principal .acoes-produto .botao.principal.botao-comprar:visible").outerWidth() - 1)
                })
            }).resize()
        }, 500);
        $(document).on("change keyup focusout", ".qtde-adicionar-carrinho .qtde-carrinho", function() {
            var d = $(this).val();
            var c = $(this).parent().siblings(".botao-comprar");
            c.attr("href", c.attr("href").replace(/adicionar.*/g, "adicionar/" + d))
        })
    }
    if (window.location.search.indexOf("sku=") > -1) {
        var a = /sku=([^&]+)/.exec(window.location.search)[1];
        var b = $(".produto .acoes-produto.SKU-" + a).first().data("variacao-id").toString().split("-");
        if (b) {
            $.each(b, function(c, d) {
                $(".atributos ul li a[data-variacao-id=" + d + "]").click()
            })
        }
    }
});

function transformarSelect(a) {
    $(a).find("ul").addClass("dropdown").wrap("<div class='wrapper-dropdown componente'></div>");
    $(a).find(".wrapper-dropdown").prepend("<span>Selecione</span>");
    $(a).find(".wrapper-dropdown").on("click", function() {
        $(this).toggleClass("show")
    });
    $(a).find(".wrapper-dropdown .dropdown li a").on("click", function() {
        $(a).find(".wrapper-dropdown > span").text($(this).text())
    });
    if ($(".atributos .atributo-cor").length) {
        $(".atributos .atributo-cor li a").on("click", function() {
            $(a).find(".wrapper-dropdown > span").text("Selecione")
        })
    }
};