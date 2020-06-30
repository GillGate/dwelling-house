$(function() {
	let $links 		= $('.header__item a');
	let $form 		= $('.form__wrapper');
	let $formName 	= $('.form__input_name');
	let $submit 	= $('.form__btn');
	let $loading 	= $('.form__loading');
	let $result 	= $('.form__result');

	$('input[type=tel]').mask("(999) 999-9999");

	$links.on('click', function(e) {
		e.preventDefault();

		let target = $(this).attr('href');
		$('html, body').animate({
		  scrollTop: $(target).offset().top
		}, 700);
	});

	$('.order-call__btn').on('click', function() {
		$('html, body').animate({
		  scrollTop: $($formName).offset().top - 535
		}, 1000, function() {
			$($formName).focus();
		});
	});

	$($submit).on('click', function() {
		$submit.attr('disabled', true);
		$submit.addClass('form__btn_disabled');
		$loading.html('<img src="./img/ajax-load.svg" width="40">');

		$.post('./send.php', $form.serialize(), function(data) {
			if(data == 'ok') {
				$form.slideUp(300);
				$result.html('Заявка отправлена!');
				$result.addClass('form__result_done');
			} else {
				$result.html(data);
				$submit.attr('disabled', false);
				$submit.removeClass('form__btn_disabled');
			}
		})
		.always(function() {
			$loading.empty();
		})
		.fail(function() {
			$result.html('Сервер не отвечает');
		});
	});
});