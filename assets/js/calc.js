$(function() {

	(function() {
		$("input[type='number']").keypress(function(e) {
		if (e.which != 8 && e.which != 0 && e.which != 46 && e.which != 44 && (e.which < 48 || e.which > 57)) {
			return false;
		}
	});

	$("input[type='number']").keyup( function() {
        var max = parseInt($(this).attr('max'));
    var min = parseInt($(this).attr('min'));
    if ($(this).val() > max)
    {
      $(this).val(max);
    }
    else if ($(this).val() < min)
    {
      $(this).val(min);
    }
    if(!$(this).val()) {
      $(this).val(min);
    }
  });

	var percentage1 = 120,
  		percentage2 = 140,
  		percentage3 = 200;
  		percentage4 = 300;

  var min1 = 10,
		  min2 = 100,
		  min3 = 500;
		  min4 = 1000;

  var max1 = 100,
      max2 = 500,
  		max3 = 1000;
  		max4 = 1000000;

  var percent = percentage1;



  $('#deposit_text').text(min1 + ' USD');
  $('#percent_text').text(percentage1 + '%');
  $('#day_text').text(1);
  $('#profit_text').text(100 + ' USD');

  $('#day-calc').val(1);
  $("#deposit-calc").val(min1);


  $("#deposit-calc").on('click keyup', function() {

      var summ = parseFloat($(this).val()); //сумма вложения
      $('#deposit_text').text(summ + ' USD');

      if (min1 <= summ && summ <= max1) {
      	$('#percent_text').text(percentage1 + '%');
      	$('.plans-item').removeClass('active');
      	$('#plan1').addClass('active');
      	percent = percentage1;
      } else if (min2 <= summ && summ <= max2) {
      	$('#percent_text').text(percentage2 + '%');
      	$('.plans-item').removeClass('active');
      	$('#plan2').addClass('active');
      	percent = percentage2;
      } else if (min3 <= summ && summ <= max3) {
      	$('#percent_text').text(percentage3 + '%');
      	$('.plans-item').removeClass('active');
      	$('#plan3').addClass('active');
      	percent = percentage3;
      } else if (min4 <= summ && summ <= max4) {
      	$('#percent_text').text(percentage4 + '%');
      	$('.plans-item').removeClass('active');
      	$('#plan4').addClass('active');
      	percent = percentage4;
      } else{
      	percent = 0;
      	$('#profit_text').text(0 + ' USD');
      	$('#deposit_text').text(0 + ' USD');
      	$('.plans-item').removeClass('active');
      	$('#plan1').addClass('active');
      }


      var days = parseInt($("#day-calc").val());

      if(!$('#deposit-calc').val() || !$('#day-calc').val()){
  		$('#profit_text').text(0 + ' USD');
  		$('#day_text').text(0);
  	} else{
  		var percent_sum = summ / 100;
  		var daily = percent * percent_sum;
  		var profitTotal = (daily * days).toFixed(2);

  		$('#profit_text').text(profitTotal + " " + " USD");
  	}
    });

  $("#day-calc").on('click keyup', function() {

  	var days = parseInt($(this).val());
  	$('#day_text').text(days);

  	var summ = parseFloat($('#deposit-calc').val());

  	if(!$('#deposit-calc').val() || !$('#day-calc').val()){
  		$('#profit_text').text(0 + ' USD');
  		$('#day_text').text(0);
  	} else{
  		var percent_sum = summ / 100;
  		var daily = percent * percent_sum;
  		var profitTotal = (daily * days).toFixed(2);

  		$('#profit_text').text(profitTotal + " " + " USD");
  	}
  });

  $('.plans-item').click(function() {
  	$('.plans-item').removeClass('active');
  	$(this).addClass('active');
  	if($(this).is('#plan1')) {
  		$('#deposit-calc').val(min1);
  		percent = percentage1;
  		$('#percent_text').text(percentage1 + '%');
  	}
  	else if($(this).is('#plan2')) {
  		$('#deposit-calc').val(min2);
  		percent = percentage2;
  		$('#percent_text').text(percentage2 + '%');
  	}
  	else if($(this).is('#plan3')) {
  		$('#deposit-calc').val(min3);
  		percent = percentage3;
  		$('#percent_text').text(percentage3 + '%');
  	}
  	else if($(this).is('#plan4')) {
  		$('#deposit-calc').val(min4);
  		percent = percentage4;
  		$('#percent_text').text(percentage4 + '%');
  	}


  	var summ = parseFloat($('#deposit-calc').val());
  	var days = parseInt($("#day-calc").val());

  	if(!$('#deposit-calc').val() || !$('#day-calc').val()){
  		$('#profit_text').text(0 + ' USD');
  		$('#day_text').text(0);
  	} else{
  		var percent_sum = summ / 100;
  		var daily = percent * percent_sum;
  		var profitTotal = (daily * days).toFixed(2);

  		$('#profit_text').text(profitTotal + " " + " USD");
  	}

  });



})();

});