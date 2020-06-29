$(function() {
    /* Live search */

    const restaurants_titles = $('.restaurant-card__title');

    $('.section-header__search').on('input', () => {
        let value = $('.section-header__search').val().toLowerCase();
        let restaurants = [];
        let goods = [];
        let count_for_restaurant = 0;
        let check;

        /* Restaurants live search */

        for (let i = 0; i <= restaurants_titles.length - 1; i++) {
            check = $(restaurants_titles[i]).text().toLowerCase().includes(value);

            if (check) {
                restaurants[count_for_restaurant] = restaurants_titles[i];

                count_for_restaurant++;
            }
        }

        if (restaurants.length > 0) {
            $('.live-search__items').remove();
            let restaurant__li_title = $('<li class="live-search__items live-search__items_title"></li>');
            $(restaurant__li_title).text('Рестораны');
            $('.live-search').append(restaurant__li_title);

            for (let i = 0; i <= restaurants.length - 1; i++) {
                let restaurant__li = $('<li class="live-search__items"></li>');
                let restaurant__a = $('<a href=""></a>');
                $(restaurant__a).text($(restaurants[i]).text());
                let id = $(restaurants[i].parentNode.parentNode.parentNode).attr('id');
                $(restaurant__a).attr('href', id + '.html');
                $(restaurant__a).css({
                    'text-decoration': 'none',
                    'color': '#333'
                });
                $(restaurant__li).append(restaurant__a);
                $('.live-search').append(restaurant__li);
            }
        } else if (restaurants.length === 0) {
            $('.live-search__items').remove();
            let restaurant__li_empty = $('<li class="live-search__items live-search__items_empty"></li>');
            $(restaurant__li_empty).text('Список пуст');
            $('.live-search').append(restaurant__li_empty);
        }

        $('.live-search').fadeIn(500);
    });
    $(document).on('click', function(event) {
        if ($(event.target).hasClass('live-search') || $(event.target.parentNode).hasClass('live-search__items') || $(event.target).hasClass('live-search__items'))
            return;

        $('.live-search').fadeOut(500);
    });

    /* Update price */

    const prices = $('.basket-good__price');
    const good_amount = $('.basket-good__amount');
    let prices_summ = 0;

    for (let i = 0; i <= prices.length - 1; i++) {
        prices_summ = prices_summ + (parseInt($(prices[i]).text()) * parseInt($(good_amount[i]).text()));
    }

    $('.basket-goods__total-price').text(prices_summ);

    if ($('.basket-goods__container').children().length == 0) {
        const basket_goods_clear = $('<p class="basket-goods__clear">Корзина пуста</p>')
        $('.basket-goods__container').prepend(basket_goods_clear);
    }

    /* Show shopping card */

    $('#btn__basket').on('click', function() {
        /* Disable scroll */

        $('body').addClass('disable-scroll');

        /* Generation shopping cart */

        let basket_bg = $('<div class="basket-bg"></div>');

        let basket_window = $('<div class="basket-window"></div>');

        let basket_header = $('<div class="basket-header"></div>');
        let title = $('<h1 class="basket-header__title"></h1>');
        $(title).text('Корзина');
        let basket_header__btn = $('<button class="basket-header__btn"></button>');
        let one_hr = $('<div class="basket-header__btn_1hr"></div>');
        let two_hr = $('<div class="basket-header__btn_2hr"></div>');
        $(basket_header__btn).append(one_hr);
        $(basket_header__btn).append(two_hr);
        $(basket_header).append(title);
        $(basket_header).append(basket_header__btn);

        let basket_goods__container = $('<div class="basket-goods__container"></div>');

        let basket_goods__commerce = $('<div class="basket-goods__commerce"></div>');
        let price_container = $('<div class="basket-goods__total-price_container"></div>');
        let total_price = $('<span class="basket-goods__total-price"></span>');
        $(price_container).text(' ₽');
        $(price_container).prepend(total_price);
        let btn__checkout = $('<button id="basket-goods__checkout" class="basket-goods__btn"></button');
        $(btn__checkout).text('Оформить заказ');
        let btn__cancel = $('<button id="basket-goods__cancel" class="basket-goods__btn"></button');
        $(btn__cancel).text('Отмена');
        $(basket_goods__commerce).append(price_container);
        $(basket_goods__commerce).append(btn__checkout);
        $(basket_goods__commerce).append(btn__cancel);

        $(basket_window).append(basket_header);
        $(basket_window).append(basket_goods__container);
        $(basket_window).append(basket_goods__commerce);

        $(basket_bg).append(basket_window);

        $('.header').prepend(basket_bg);

        let basketHeight = $('.basket-window').height() + parseInt($('.basket-window').css('padding-top')) + parseInt($('.basket-window').css('padding-bottom'));
        let padding = parseInt($('.basket-window').css('padding-top'));

        /* Show shopping card */

        $('.basket-good').remove();

        let length = localStorage.length - 1;
        let id = [];

        for (let i = 0; i <= length; i++) {
            id[i] = localStorage.key(i);
        }

        length = id.length - 1;

        if (localStorage.length === 0) {
            const basket_goods_clear = $('<p class="basket-goods__clear">Корзина пуста</p>')
            $('.basket-goods__container').prepend(basket_goods_clear);
        }

        for (let i = 0; i <= length; i++) {
            let obj = localStorage.getItem(id[i]);
            obj = JSON.parse(obj);

            let good_card__id = id[i];
            let card_name = obj.name;
            let card_price = obj.price;
            let amount = obj.amount;

            $('.basket-goods__clear').remove();

            let good_card = $('<div class="basket-good"></div>');

            let good_title = $('<h2 class="basket-good__title"></h2>')
            good_title.text(card_name);

            let good_price = $('<div class="basket-good__price"></div>');
            good_price.text(card_price);

            let good_amount__container = $('<div class="basket-good__amount-container"></div>');

            let good_amount__prev = $('<button class="basket-good__amount_btn basket-good__amount_btn-prev"></button>');
            good_amount__prev.text('-');

            let good_amount = $('<div class="basket-good__amount"></div>');
            good_amount.text(amount);

            let good_amount__next = $('<button class="basket-good__amount_btn basket-good__amount_btn-next"></button>')

            good_amount__next.text('+');

            good_amount__container.append(good_amount__prev);
            good_amount__container.append(good_amount);
            good_amount__container.append(good_amount__next);

            good_card.append(good_title);
            good_card.append(good_price);
            good_card.append(good_amount__container);

            $('.basket-goods__container').prepend(good_card);

            /* Amount goods */

            $(good_amount__prev).click(function(event) {
                let amount = parseInt($(event.target.parentNode).children()[1].innerHTML);

                if (amount - 1 >= 1) {
                    amount--;

                    const amount__node = $(event.target.parentNode).children()[1];
                    $(amount__node).text(amount);

                    /* Update price */

                    const prices = $('.basket-good__price');
                    const good_amount = $('.basket-good__amount');
                    let prices_summ = 0;

                    for (let i = 0; i <= prices.length - 1; i++) {
                        prices_summ = prices_summ + (parseInt($(prices[i]).text()) * parseInt($(good_amount[i]).text()));
                    }

                    $('.basket-goods__total-price').text(prices_summ);
                } else if (amount - 1 < 1) {
                    amount = 0;

                    const amount__node = $(event.target.parentNode).children()[1];
                    $(amount__node).text(amount);

                    const delete__node = event.target.parentNode.parentNode;

                    $(delete__node).animate({
                        height: 0
                    }, 500);

                    setTimeout(() => {
                        $(delete__node).remove();

                        /* Update price */

                        const prices = $('.basket-good__price');
                        const good_amount = $('.basket-good__amount');
                        let prices_summ = 0;

                        for (let i = 0; i <= prices.length - 1; i++) {
                            prices_summ = prices_summ + (parseInt($(prices[i]).text()) * parseInt($(good_amount[i]).text()));
                        }

                        $('.basket-goods__total-price').text(prices_summ);

                        if ($('.basket-goods__container').children().length == 0) {
                            const basket_goods_clear = $('<p class="basket-goods__clear">Корзина пуста</p>')
                            $('.basket-goods__container').prepend(basket_goods_clear);
                        }
                    }, 500);
                }
                if (amount > 0) {
                    let card_obj = {
                        name: card_name,
                        price: card_price,
                        amount: amount
                    }

                    let new__card_obj = JSON.stringify(card_obj);

                    localStorage.setItem(good_card__id, new__card_obj);
                } else if (amount <= 0) {
                    localStorage.removeItem(good_card__id);
                }

                return false;
            });
            $(good_amount__next).click(function(event) {
                let amount = parseInt($(event.target.parentNode).children()[1].innerHTML);

                amount++;

                const amount__node = $(event.target.parentNode).children()[1];
                $(amount__node).text(amount);

                /* Update price */

                const prices = $('.basket-good__price');
                const good_amount = $('.basket-good__amount');
                let prices_summ = 0;

                for (let i = 0; i <= prices.length - 1; i++) {
                    prices_summ = prices_summ + (parseInt($(prices[i]).text()) * parseInt($(good_amount[i]).text()));
                }

                $('.basket-goods__total-price').text(prices_summ);

                let card_obj = {
                    name: card_name,
                    price: card_price,
                    amount: amount
                }

                let new__card_obj = JSON.stringify(card_obj);

                localStorage.setItem(good_card__id, new__card_obj);

                return false;
            });
        }


        /* Update price */

        const prices = $('.basket-good__price');
        const good_amount = $('.basket-good__amount');
        let prices_summ = 0;

        for (let i = 0; i <= prices.length - 1; i++) {
            prices_summ = prices_summ + (parseInt($(prices[i]).text()) * parseInt($(good_amount[i]).text()));
        }

        $('.basket-goods__total-price').text(prices_summ);

        $('#btn__basket').css('background', 'rgba(33, 166, 17, 0.5)');
        setTimeout(() => {
            $('#btn__basket').css('background', '#fff');
        }, 500);

        $('.basket-window').height(0);
        $('.basket-bg').show();
        $('.basket-window').show();
        $('.basket-window').animate({
            height: basketHeight + 'px',
            padding: padding + ' ' + 'auto' + 'px'
        }, 500);

        /* Hide shopping card */

        $('.basket-header__btn').on('click', function(event) {
            $('.basket-window').animate({
                height: 0,
                'padding-top': 0,
                'padding-bottom': 0
            }, 500);
            setTimeout(() => {
                $('.basket-window').hide();
                $(basket_bg).fadeOut(300);
                setTimeout(() => {
                    $(basket_bg).remove();
                }, 300);
                $('body').removeClass('disable-scroll');
            }, 500);

            return false;
        });

        /* Cancel order */

        $('.basket-goods__commerce').on('click', function(event) {
            if ($(event.target).attr('id') === 'basket-goods__cancel') {
                $('.basket-good').fadeOut(500);

                setTimeout(() => {
                    $('.basket-good').remove();

                    /* Update price */

                    $('.basket-goods__total-price').text(0);

                    if ($('.basket-goods__container').children().length == 0) {
                        const basket_goods_clear = $('<p class="basket-goods__clear">Корзина пуста</p>')
                        $('.basket-goods__container').prepend(basket_goods_clear);
                    }
                }, 500);

                return false;
            }
        });
    });

    /* Add to shopping card good */

    $('.good-card__btn').on('click', function(event) {
        let good_card;

        if ($(event.target).text() === 'В корзину')
            good_card = event.target.parentNode.parentNode.parentNode.parentNode;
        else if ($(event.target).attr('alt') === 'shopping card')
            good_card = event.target.parentNode.parentNode.parentNode.parentNode;
        else
            good_card = event.target.parentNode.parentNode.parentNode;

        const good_card__id = $(good_card).attr('id');

        good_card = $(good_card).children();
        good_card = $(good_card).children();

        let card_name;
        let card_price;

        for (let i = 0; i <= good_card.length - 1; i++) {
            if (i == 0) {
                card_name = $(good_card[i]).text();
            }
            if (i == 2) {
                for (let j = 0; j <= $(good_card[i]).children().length - 1; j++) {
                    let price = $(good_card[i]).children()[1];
                    card_price = $(price).text();
                }
            }
        }

        const shopping_card = localStorage;
        let amount;
        let no_good = false;
        if (shopping_card.length > 0) {
            for (let i = 0; i <= shopping_card.length - 1; i++) {
                if (shopping_card.key(i) === good_card__id) {
                    let card = shopping_card.key(i);
                    let new_card = shopping_card.getItem(card);
                    new_card = JSON.parse(new_card);
                    let amount = new_card.amount;
                    let new_amount = amount + 1;

                    $(amount).text(new_amount);

                    let card_obj = {
                        name: card_name,
                        price: card_price,
                        amount: new_amount
                    }

                    let new__card_obj = JSON.stringify(card_obj);

                    localStorage.setItem(good_card__id, new__card_obj);

                    no_good = true;
                }
            }

            if (no_good === false) {
                let card_obj = {
                    name: card_name,
                    price: card_price,
                    amount: 1
                }

                let new__card_obj = JSON.stringify(card_obj);

                localStorage.setItem(good_card__id, new__card_obj);
            }
        } else if (shopping_card.length === 0) {
            let card_obj = {
                name: card_name,
                price: card_price,
                amount: 1
            }

            let new__card_obj = JSON.stringify(card_obj);

            localStorage.setItem(good_card__id, new__card_obj);
        }

        /* Update price */

        const prices = $('.basket-good__price');
        const good_amount = $('.basket-good__amount');
        let prices_summ = 0;

        for (let i = 0; i <= prices.length - 1; i++) {
            prices_summ = prices_summ + (parseInt($(prices[i]).text()) * parseInt($(good_amount[i]).text()));
        }

        $('.basket-goods__total-price').text(prices_summ);

        $('#btn__basket').css('background', 'rgba(33, 166, 17, 0.5)');
        setTimeout(() => {
            $('#btn__basket').css('background', '#fff');
        }, 500);
    });
});