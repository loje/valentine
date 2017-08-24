$(document).ready(function(){
	$(".page").height($(window).height());
	$(window).resize(function(){
		$(".page").height($(window).height());
	});

	var sysdate = new Date();

	if($(".setshareval").val() == "0"){
		$(".singlepage").addClass("setshare");
		//单身中
		var singledate = new Date($(".sharesingledate").val());

		var getsingledate = singledate.getTime()/1000/60/60/24;
		var getsysdate = sysdate.getTime()/1000/60/60/24;
		var diffsingledate = parseInt((sysdate.getTime() - singledate.getTime())/1000);
		
		var singleday = parseInt(diffsingledate / (24*60*60));
		var aftersingleday = diffsingledate - singleday*24*60*60;//天数与天数整的秒差；
		var singlehour  = parseInt(aftersingleday/(60*60));//小时整
		var aftersinglehour = diffsingledate - singleday*24*60*60 - singlehour*60*60;//减去天数整和小时整后，剩下的秒
		var singlemin = parseInt(aftersinglehour/60);//分钟整
		var aftersinglemin = diffsingledate - singleday*24*60*60 - singlehour*60*60 - singlemin*60;//减去天数整、小时整、分钟整后，剩下的秒数

		if(aftersinglemin <= 9 && aftersinglemin >= 0){
			$(".onlysinglesecond").addClass("addzero");
		}else{
			$(".onlysinglesecond").removeClass("addzero");
		}

		if(singlemin <= 9 && singlemin >= 0){
			$(".onlysinglemin").addClass("addzero");
		}else{
			$(".onlysinglemin").removeClass("addzero");
		}

		if(singlehour <= 9 && singlehour >= 0){
			$(".onlysinglehour").addClass("addzero");
		}else{
			$(".onlysinglehour").removeClass("addzero");
		}

		var setsingleTimer = setInterval(function(){

			if(aftersinglemin<=58){
				aftersinglemin = aftersinglemin + 1;
				if(aftersinglemin<=9 && aftersinglemin >= 0){
					$(".onlysinglesecond").addClass("addzero");
				}else{
					$(".onlysinglesecond").removeClass("addzero");
				}
				$(".onlysingleday").text(singleday);
				$(".onlysinglehour").text(singlehour);
				$(".onlysinglemin").text(singlemin);
				$(".onlysinglesecond").text(aftersinglemin);
			}else{
				aftersinglemin = 0;
				if(singlemin<=58){
					singlemin =singlemin + 1;
					if(singlemin<=9 && singlemin >= 0){
						$(".onlysinglemin").addClass("addzero");
					}else{
						$(".onlysinglemin").removeClass("addzero");
					}
					$(".onlysingleday").text(singleday);
					$(".onlysinglehour").text(singlehour);
					$(".onlysinglemin").text(singlemin);
					$(".onlysinglesecond").text(aftersinglemin);
				}else{
					singlemin = 0;
					if(singlehour<=22){
						singlehour = singlehour + 1;
						if(singlehour<=9 && singlehour >= 0){
							$(".onlysinglehour").addClass("addzero");
						}else{
							$(".onlysinglehour").removeClass("addzero");
						}
						$(".onlysingleday").text(singleday);
						$(".onlysinglehour").text(singlehour);
						$(".onlysinglemin").text(singlemin);
						$(".onlysinglesecond").text(aftersinglemin);
					}else{
						singlehour = 0;
						singleday = singleday + 1;
						$(".onlysingleday").text(singleday);
						$(".onlysinglehour").text(singlehour);
						$(".onlysinglemin").text(singlemin);
						$(".onlysinglesecond").text(aftersinglemin);
					}
				}
			}
		},1000);
	}else if($(".setshareval").val() == "1"){
		$(".loverpage").addClass("setshare");
		//恋爱中
		var loverdate = new Date($(".shareloverdate").val());

		var getloverdate = loverdate.getTime()/1000/60/60/24;
		var getsysdate = sysdate.getTime()/1000/60/60/24;
		var diffloverdate = parseInt((sysdate.getTime() - loverdate.getTime())/1000);
		
		var loverday = parseInt(diffloverdate / (24*60*60));
		var afterloverday = diffloverdate - loverday*24*60*60;//天数与天数整的秒差；
		var loverhour  = parseInt(afterloverday/(60*60));//小时整
		var afterloverhour = diffloverdate - loverday*24*60*60 - loverhour*60*60;//减去天数整和小时整后，剩下的秒
		var lovermin = parseInt(afterloverhour/60);//分钟整
		var afterlovermin = diffloverdate - loverday*24*60*60 - loverhour*60*60 - lovermin*60;//减去天数整、小时整、分钟整后，剩下的秒数

		if(afterlovermin <= 9 && afterlovermin >= 0){
			$(".onlyloversecond").addClass("addzero");
		}else{
			$(".onlyloversecond").removeClass("addzero");
		}

		if(lovermin <= 9 && lovermin >= 0){
			$(".onlylovermin").addClass("addzero");
		}else{
			$(".onlylovermin").removeClass("addzero");
		}

		if(loverhour <= 9 && loverhour >= 0){
			$(".onlyloverhour").addClass("addzero");
		}else{
			$(".onlyloverhour").removeClass("addzero");
		}

		var setloverTimer = setInterval(function(){

			if(afterlovermin<=58){
				afterlovermin = afterlovermin + 1;
				if(afterlovermin<=9 && afterlovermin >= 0){
					$(".onlyloversecond").addClass("addzero");
				}else{
					$(".onlyloversecond").removeClass("addzero");
				}
				$(".onlyloverday").text(loverday);
				$(".onlyloverhour").text(loverhour);
				$(".onlylovermin").text(lovermin);
				$(".onlyloversecond").text(afterlovermin);
			}else{
				afterlovermin = 0;
				if(lovermin<=58){
					lovermin =lovermin + 1;
					if(lovermin<=9 && lovermin >= 0){
						$(".onlylovermin").addClass("addzero");
					}else{
						$(".onlylovermin").removeClass("addzero");
					}
					$(".onlyloverday").text(loverday);
					$(".onlyloverhour").text(loverhour);
					$(".onlylovermin").text(lovermin);
					$(".onlyloversecond").text(afterlovermin);
				}else{
					lovermin = 0;
					if(loverhour<=22){
						loverhour = loverhour + 1;
						if(loverhour<=9 && loverhour >= 0){
							$(".onlyloverhour").addClass("addzero");
						}else{
							$(".onlyloverhour").removeClass("addzero");
						}
						$(".onlyloverday").text(loverday);
						$(".onlyloverhour").text(loverhour);
						$(".onlylovermin").text(lovermin);
						$(".onlyloversecond").text(afterlovermin);
					}else{
						loverhour = 0;
						loverday = loverday + 1;
						$(".onlyloverday").text(loverday);
						$(".onlyloverhour").text(loverhour);
						$(".onlylovermin").text(lovermin);
						$(".onlyloversecond").text(afterlovermin);
					}
				}
			}
		},1000);
	}else if($(".setshareval").val() == "2"){
		$(".breakpage").addClass("setshare");
		//分手中
		var breakdate = new Date($(".sharebreakdate").val());
		
		var getbreakdate = breakdate.getTime()/1000/60/60/24;
		var getsysdate = sysdate.getTime()/1000/60/60/24;
		var diffbreakdate = parseInt((sysdate.getTime() - breakdate.getTime())/1000);
		
		var breakday = parseInt(diffbreakdate / (24*60*60));
		var afterbreakday = diffbreakdate - breakday*24*60*60;//天数与天数整的秒差；
		var breakhour  = parseInt(afterbreakday/(60*60));//小时整
		var afterbreakhour = diffbreakdate - breakday*24*60*60 - breakhour*60*60;//减去天数整和小时整后，剩下的秒
		var breakmin = parseInt(afterbreakhour/60);//分钟整
		var afterbreakmin = diffbreakdate - breakday*24*60*60 - breakhour*60*60 - breakmin*60;//减去天数整、小时整、分钟整后，剩下的秒数

		if(afterbreakmin <= 9 && afterbreakmin >= 0){
			$(".onlybreaksecond").addClass("addzero");
		}else{
			$(".onlybreaksecond").removeClass("addzero");
		}

		if(breakmin <= 9 && breakmin >= 0){
			$(".onlybreakmin").addClass("addzero");
		}else{
			$(".onlybreakmin").removeClass("addzero");
		}

		if(breakhour <= 9 && breakhour >= 0){
			$(".onlybreakhour").addClass("addzero");
		}else{
			$(".onlybreakhour").removeClass("addzero");
		}

		$(".onlybreakday").text(breakday);
		$(".onlybreakhour").text(breakhour);
		$(".onlybreakmin").text(breakmin);
		$(".onlybreaksecond").text(afterbreakmin);
	}
})