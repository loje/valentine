$(document).ready(function(){
	$(".page").height($(window).height());
	$(window).resize(function(){
		$(".page").height($(window).height());
	})

	var h = 0;
	var hl = setInterval(function(){
		if(h<100){
			h = h +20;
			$(".heart-loading").attr("style","height:" + h + "%");
			$(".loading-percentage").text(h + "%");
		}else{
			clearInterval(hl);
			$(".p0").attr("style","opacity:0;");
			var loaded = setTimeout(function(){
				$(".p0").attr("style","display:none;");
				clearTimeout(loaded);
			},1000);
		}
	},500);


	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'vertical',
		effect : 'fade',
		loop: false,

		// 如果需要前进后退按钮
		//nextButton: '.swiper-button-next',
		//prevButton: '.swiper-button-prev',
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		} 
	})

	$(".cover-btn").click(function(){
		mySwiper.slideTo(1, 500, false);
		$(".choice-table .choice-td .choice-main .choice-it .lover").addClass("chiosedwon");
		$(".choice-table .choice-td .choice-main .choice-it .single").addClass("chiosedwon");
		$(".choice-table .choice-td .choice-main .choice-it .choicelove").addClass("chioseshake");
		$(".choice-table .choice-td .choice-main .choice-it .choicesingle").addClass("chioseshake");
	});
	$(".choicelove").click(function(){
		mySwiper.slideTo(2, 500, false);
		$(".loverchiose-table .loverchiose-td .loverlogo").addClass("chiosedwon");
		$(".loverchiose-table .loverchiose-td .loverlogo .loverlogo-cartoon").addClass("chioseshake");
	});

	$(".submit-lovername").click(function(){
		if($(".lovername-input").val() ==""){
			alert("请填写情侣名字！");
			$(".lovername-input").focus();
		}else{
			$("span.lovename").text($(".lovername-input").val());
			mySwiper.slideTo(4, 500, false);
		}
	});

	$(".submit-loverdate").click(function(){
		var loverdate = new Date($(".loverdate-input").val());
		var sysdate = new Date();
		if($(".loverdate-input").val() == ""){
			alert("请填写开始恋爱的日期");
			$(".loverdate-input").focus();
		}else{
			if(loverdate.getTime() <= sysdate.getTime()){
				var getlovedate = loverdate.getTime()/1000/60/60/24;
				var getsysdate = sysdate.getTime()/1000/60/60/24;
				var diffdate = parseInt((sysdate.getTime() - loverdate.getTime())/1000);
				
				var loveday = parseInt(diffdate / (24*60*60));
				var afterloveday = diffdate - loveday*24*60*60;//天数与天数整的秒差；
				var lovehour  = parseInt(afterloveday/(60*60));//小时整
				var afterlovehour = diffdate - loveday*24*60*60 - lovehour*60*60;//减去天数整和小时整后，剩下的秒
				var lovemin = parseInt(afterlovehour/60);//分钟整
				var afterlovemin = diffdate - loveday*24*60*60 - lovehour*60*60 - lovemin*60;//减去天数整、小时整、分钟整后，剩下的秒数

				if(afterlovemin <= 9 && afterlovemin >= 0){
					$(".onlylovesecond").addClass("addzero");
				}else{
					$(".onlylovesecond").removeClass("addzero");
				}

				if(lovemin <= 9 && lovemin >= 0){
					$(".onlylovemin").addClass("addzero");
				}else{
					$(".onlylovemin").removeClass("addzero");
				}

				if(lovehour <= 9 && lovehour >= 0){
					$(".onlylovehour").addClass("addzero");
				}else{
					$(".onlylovehour").removeClass("addzero");
				}

				var setTimer = setInterval(function(){

					if(afterlovemin<=58){
						afterlovemin = afterlovemin + 1;
						if(afterlovemin<=9 && afterlovemin >= 0){
							$(".onlylovesecond").addClass("addzero");
						}else{
							$(".onlylovesecond").removeClass("addzero");
						}
						$(".onlyloveday").text(loveday);
						$(".onlylovehour").text(lovehour);
						$(".onlylovemin").text(lovemin);
						$(".onlylovesecond").text(afterlovemin);
					}else{
						afterlovemin = 0;
						if(lovemin<=58){
							lovemin =lovemin + 1;
							if(lovemin<=9 && lovemin >= 0){
								$(".onlylovemin").addClass("addzero");
							}else{
								$(".onlylovemin").removeClass("addzero");
							}
							$(".onlyloveday").text(loveday);
							$(".onlylovehour").text(lovehour);
							$(".onlylovemin").text(lovemin);
							$(".onlylovesecond").text(afterlovemin);
						}else{
							lovemin = 0;
							if(lovehour<=22){
								lovehour = lovehour + 1;
								if(lovehour<=9 && lovehour >= 0){
									$(".onlylovehour").addClass("addzero");
								}else{
									$(".onlylovehour").removeClass("addzero");
								}
								$(".onlyloveday").text(loveday);
								$(".onlylovehour").text(lovehour);
								$(".onlylovemin").text(lovemin);
								$(".onlylovesecond").text(afterlovemin);
							}else{
								lovehour = 0;
								loveday = loveday + 1;
								$(".onlyloveday").text(loveday);
								$(".onlylovehour").text(lovehour);
								$(".onlylovemin").text(lovemin);
								$(".onlylovesecond").text(afterlovemin);
							}
						}
					}

					$(".letsbreak").click(function(){
						clearInterval(setTimer);
					})
				},1000);
				
				mySwiper.slideTo(6, 500, false);
			}else{
				alert("恋爱的时间居然比现在还晚，你是叶湘伦还是路小雨？重新填吧！");
				$(".loverdate-input").focus();
			}
		}
	});


	$("#mypic").on("change", function(){
		
		// Get a reference to the fileList
		var files = !!this.files ? this.files : [];
		if(files[0].size/1024 <= 1024){
			$(".rahmen-pic .rahmen-pic-td").text("上传中……");
			// If no files were selected, or no FileReader support, return
			if (!files.length || !window.FileReader) return;

			// Only proceed if the selected file is an image
			if (/^image/.test( files[0].type)){

				// Create a new instance of the FileReader
				var reader = new FileReader();

				// Read the local file as a DataURL
				reader.readAsDataURL(files[0]);

				// When loaded, set image data as background of div
				reader.onloadend = function(){
					$(".rahmen-pic .rahmen-pic-td").text("");
					$(".require-pic").css({backgroundImage:"url("+this.result+")",backgroundColor:"#FCF5DB"});
					$(".lovetimer-pic").css({backgroundImage:"url("+this.result+")",backgroundColor:"#FCF5DB"});
					//alert(parseInt(files[0].size/1024));
					mySwiper.slideTo(7, 500, false);//切换到第一个slide，速度为1秒
					$(".submit-loverdate").val(1);
				}
			}
		}else{
			$(".rahmen-pic .rahmen-pic-td").html("图片太大<br/>无法显示<br/>请更换<br/>图片应该<br/>小于1M:)");
			alert("图片太大，微信内置的浏览器无法加载>0<，换张小点的吧！");
		}

	});

	$(".reload-btn").click(function(){
		mySwiper.slideTo(6, 500, false);
	});

	$(".submit-uploaded-btn").click(function(){
		mySwiper.slideTo(8, 500, false);
	})


	$(".lovetimer-table .lovetimer-tr .lovetimer-td button.sharelove-btn").click(function(){
		$(".sharelovepage").removeAttr("style");
	});
	$(".sharelovepage").click(function(){
		$(this).attr("style","display:none;");
	});

	$(".lovetimer-table .lovetimer-tr .lovetimer-td button.breakshare-btn").click(function(){
		$(".sharebreakpage").removeAttr("style");
	});
	$(".sharebreakpage").click(function(){
		$(this).attr("style","display:none;");
	});


	//切换分手跟情侣分享按钮
	$(".lovetimer-table .lovetimer-tr .lovetimer-td .switch-btn").click(function(){
		$(".lovetimer-table .lovetimer-tr .lovetimer-td button.break-btn").attr("style","bottom:50%;");
		$(".lovetimer-table .lovetimer-tr .lovetimer-td button.sharelove-btn").attr("style","display:none;");
		$(".lovetimer-table .lovetimer-tr .lovetimer-td .switch-btn").attr("style","display:none;");
		$(".lovetimer-table .lovetimer-tr .lovetimer-td .switch-back-btn").attr("style","bottom:0%;");
	});
	$(".lovetimer-table .lovetimer-tr .lovetimer-td .switch-back-btn").click(function(){
		$(".lovetimer-table .lovetimer-tr .lovetimer-td button.break-btn").attr("style","display:none;");
		$(".lovetimer-table .lovetimer-tr .lovetimer-td button.sharelove-btn").attr("style","bottom:50%;");
		$(".lovetimer-table .lovetimer-tr .lovetimer-td button.breakshare-btn").attr("style","bottom:-120%;");
		$(".lovetimer-table .lovetimer-tr .lovetimer-td .switch-btn").attr("style","bottom:0%;");
		$(".lovetimer-table .lovetimer-tr .lovetimer-td .switch-back-btn").attr("style","bottom:-50%;");
	});


	$(".letsbreak").click(function(){
		$('#loveBreak').modal('hide');
		$(".lovetimer").attr("style","background-color:#c9c9c9;");
		$(".lovetimer-table .lovetimer-tr .lovetimer-td span").attr("style","color:#000;");
		$(".lovetimer-table .lovetimer-tr .lovetimer-td span.togeter").attr("style","background-image:url(img/lovetimer_pic_break.png);color:#000;");
		$(".lovetimer-table .lovetimer-tr .lovetimer-td .timerbox").attr("style","border-color:#666;color:#000;");
		$(".lovetimer-table .lovetimer-tr .lovetimer-td span.di").remove();
		$(".lovetimer-table .lovetimer-tr .lovetimer-td span.tian").attr("style","background-image:url(img/lovetimer_pic_break_p2.png);");
		$(".lovetimer-table .lovetimer-tr .lovetimer-td button.breakshare-btn").attr("style","bottom:40%;");
		var yanshi = setTimeout(function(){
			$(".lovetimer-table .lovetimer-tr .lovetimer-td button.break-btn").attr("style","bottom:-120%;");
			$(".lovetimer-table .lovetimer-tr .lovetimer-td .switch-btn").attr("style","display:none;");
			$(".lovetimer-table .lovetimer-tr .lovetimer-td .switch-back-btn").attr("style","bottom:-50%;");
			clearTimeout(yanshi);
		},250);
		$(".submit-loverdate").val(2);
	});


	$(".choice-table .choice-td .choice-main .choice-it .choicesingle").click(function(){
		mySwiper.slideTo(3, 500, false);//切换到第一个slide，速度为1秒
		$(".singlechiose-table .singlechiose-td .singlelogo").addClass("chiosedwon");
		$(".singlechiose-table .singlechiose-td .singlelogo .singlelogo-cartoon").addClass("chioseshake");
	});


	$(".singlechiose-table .singlechiose-td .singletime-talkbox .input .confirm").click(function(){
		var singledate = new Date($(".singledate-input").val());
		var sysdate = new Date();
		if($(".singledate-input").val() == ""){
			alert("请填写开始单身的日期");
			$(".singledate-input").focus();
		}else{
			if(singledate.getTime() <= sysdate.getTime()){
				var getsingledate = singledate.getTime()/1000/60/60/24;
				var getsysdate = sysdate.getTime()/1000/60/60/24;
				var diffdate = parseInt((sysdate.getTime() - singledate.getTime())/1000);
				
				var singleday = parseInt(diffdate / (24*60*60));
				var aftersingleday = diffdate - singleday*24*60*60;//天数与天数整的秒差；
				var singlehour  = parseInt(aftersingleday/(60*60));//小时整
				var aftersinglehour = diffdate - singleday*24*60*60 - singlehour*60*60;//减去天数整和小时整后，剩下的秒
				var singlemin = parseInt(aftersinglehour/60);//分钟整
				var aftersinglemin = diffdate - singleday*24*60*60 - singlehour*60*60 - singlemin*60;//减去天数整、小时整、分钟整后，剩下的秒数

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

				var setTimer = setInterval(function(){

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

					$(".letnosingle").click(function(){
						clearInterval(setTimer);
						$('#nosingle').modal('hide')
						mySwiper.slideTo(2, 500, false);
						$(".loverchiose-table .loverchiose-td .loverlogo").addClass("chiosedwon");
						$(".loverchiose-table .loverchiose-td .loverlogo .loverlogo-cartoon").addClass("chioseshake");
					});
				},1000);
				
				mySwiper.slideTo(5, 500, false);
				$(".submit-loverdate").val(0);
			}else{
				alert("单身的时间居然比现在还晚？重新填吧！");
				$(".singledate-input").focus();
			}
		}
	});

	$(".singletimer-table .singletimer-tr .singletimer-td .switch-btn").click(function(){
		$(".singletimer-table .singletimer-tr .singletimer-td button.nosingle-btn").attr("style","bottom:50%;");
		$(".singletimer-table .singletimer-tr .singletimer-td button.singleshare-btn").attr("style","display:none;");
		$(".singletimer-table .singletimer-tr .singletimer-td .switch-btn").attr("style","display:none;");
		$(".singletimer-table .singletimer-tr .singletimer-td .switch-back-btn").attr("style","bottom:0%;");
	});

	$(".singletimer-table .singletimer-tr .singletimer-td button.singleshare-btn").click(function(){
		$(".sharesinglepage").removeAttr("style");
	});
	$(".sharesinglepage").click(function(){
		$(this).attr("style","display:none;");
	});

	$(".singletimer-table .singletimer-tr .singletimer-td .switch-back-btn").click(function(){
		$(".singletimer-table .singletimer-tr .singletimer-td button.nosingle-btn").attr("style","bottom:-120%;");
		$(".singletimer-table .singletimer-tr .singletimer-td button.singleshare-btn").attr("style","bottom:40%;");
		$(".singletimer-table .singletimer-tr .singletimer-td .switch-btn").attr("style","bottom:0%;");
		$(".singletimer-table .singletimer-tr .singletimer-td .switch-back-btn").attr("style","bottom:-50%;");
	});

	
})