$(function(){
    // 选择样式
     changestyle();
	// 登陆前 菜单切换
	var equiv=[508,1745,2394,3000,3570,4800,5500];
	 $('a.menu_item').click(function () {
        $('.help_topic').removeClass('open');
        $('.topic_content').hide(800);
        var ancora = $(this).attr('key');
        $(document).scrollTo(equiv[ancora], 800);
        // return false;
    });

     // swf播放
     var timer=null;
     $("#mark").click(function(event) {
        var pause=false;
        clearInterval(timer);
        timer=setInterval(function(){
            var isturn = $("#objvideo")[0].IsPlaying();
            if(pause){
                $("#objvideo")[0].StopPlay();
                $(this).addClass('btn');
                clearInterval(timer);
            };
            if(!pause && !isturn) {
                $("#mark").addClass('btn');
                $("#objvideo")[0].Rewind();
                clearInterval(timer);
            };
        },1000);
        if($(this).hasClass('btn')){
            $("#objvideo")[0].Play();
            $(this).removeClass('btn');
        }else{
            pause=true;
            $("#objvideo")[0].StopPlay();
            $(this).addClass('btn');
            return;
        }
        
     });
    

	 // 登陆后 菜单切换
	var equiv2 = [0,938,1738,2248,3049];
	 $('a.menu_item_2').click(function () {
        var ancora = $(this).attr('key');
        $(document).scrollTo(equiv2[ancora], 800);
        return false;
    });
	 // 帮助信息
	 $('.topic_title').click(function(event) {
	 	$('.help_topic').removeClass('open');
        $('.topic_content').hide(800);
        $(this).parent().children('.topic_content').show(800, function () {
            $(this).parent().addClass('open');
        });
        return false;
	 });
	 // 幻灯片
	 $("#carrossel_control .select").click(function(event) {
	 	$(this).addClass('active').siblings().removeClass('active');
	 	$("#active_pic").stop().animate({
	 		left: -$(this).index()*$("#active_pic li").width()+"px"},
	 		500);
	 });

	 // 手机系统预览
	 showphone();

	 $("#carrossel_header .tab").click(function(event) {
	 	$(this).addClass('selected').siblings().removeClass('selected');
	 	$(".content .frames_container").eq($(this).index()).show().siblings().hide();
	 });

	 // tab
	 $(".menu_li ul li").click(function(event) {
	 	$(this).addClass('sel').siblings().removeClass('sel');
	 	$('.message_info  '+'.menu_'+($(this).index()+1)).show().siblings().hide();
	 });

	 // 弹框 Know More
	 $(".saiba-mais-psc").colorbox({inline: true, width: "556", scrolling: false,overlayClose:false});
	 $(".login_icon").colorbox({inline: true, width: "556",scrolling: false, 'closeButton': false,overlayClose:false});
	 $(".knowmore_a").colorbox({inline: true, width: "556", scrolling: false,overlayClose:false});
     $(".box_small").colorbox({inline: true, width: "468", scrolling: false,overlayClose:false});
	 // 关闭弹框
	  $('.close').click(function () {
        $.colorbox.close();
    });

    // 登陆
    $("#login_in").click(function(e) {
         e.preventDefault();
         $(".modal #message").css({
            "margin-top":"30px",
            "text-align":"left",
            "padding-left":"78px"
        });
        alerte('1. Insert your cellphone number:','To login, follow the steps','3');
        $("#code").show();
        $("#input1").hide();
        $("#input2").hide();
        $(".phnoe_erro").hide();
    });
    // 输入号码判断
    $("#code_btn").click(function(event) {
         
        if($("#code_num").val()=="123"){
            $("#phone .title").html('To login, follow the steps');
            $("#message").html('2.Was sent to your cellphone a SMS with password:');
            $(".modal #message").css({
            "text-align":"center",
            "padding-left":"0px"
            });
            $("#phone_a").trigger('click');
            i=10;
            clearInterval(count);
            countdown();
        }else if($("#code_num").val()=="123456"){
            $("#dinggou_num").val($("#code_num").val());
            $("#alerte .cont .tips").show();
            $("#subscribe").trigger("click");
        }else{
            $("#alerte").css({
                height: '316px'
            });
            $("#login_in").trigger('click');
            $(".phnoe_erro").show();
            
        }
        
    });

    // 输入随机码判断
    $("#code_text_btn").click(function(event) {
        
        if(i==0){
            i=10;
            countdown();
            return;
        }
        if($("#code_text").val()=="123")
        {
            $.colorbox.close();
            window.location.href="after_index.html"
        }else{
            $("#random .title").html('To login, follow the steps');
            $("#random #message").html('2.Was sent to your cellphone a SMS with password:'); 
            // $("#random .phone_tips").addClass('phone_tips2');
            // $("#re-obtain").text('Re-obtain');
            $("#random_a").trigger('click');
            $(".tips_re").show();
            $("#random .countdown").css({"padding-top":"0px"})
        }
    });
    $("#input_fo").focus(function(event) {
        // $("#random .phone_tips").removeClass('phone_tips2');
        // $("#re-obtain").text('OK');
        $(".tips_re").hide()
        $("#random .countdown").css({"padding-top":"10px"})
    })
    $("#re-obtain").click(function(event) {
        if(i==0){
            i=10;
            countdown();
            $("#random .phone_tips").removeClass('phone_tips2');
            $("#re-obtain").text('OK');
            return;
        }
        if($("#input_fo").val()=="123")
        {
           $.colorbox.close();
           window.location.href="after_index.html";
        }else{
            $(".tips_re").show();
            $("#random .countdown").css({"padding-top":"0px"})
        }
    });


    $("#subscribe2").click(function(event) {
        $('#subscribe').trigger('click');
    });
    // Subscribe Now
	$('#subscribe').click(function (e) {
        e.preventDefault();
        $(".phnoe_erro").hide();
         $(".modal #message").css({
        	"margin-top":"30px",
            "text-align":"left",
            "padding-left":"78px"
        });
        alerte('1. Insert your cellphone number:','To ativate Vivo Call Shine follow the steps','3');
        $("#input1").show();
        $("#input2").hide();
        $("#code").hide();
    });
    $('#close_ok1').click(function (e) {
        e.preventDefault();
        $("#alerte .cont .tips").hide();
        $(".modal #message").css({
            "text-align":"center",
            "padding-left":"0px"
        });
        $("#input1").hide();
        $("#input2").show();
        alerte('2.Was sent to your cellphone a SMS with password:','To ativate Vivo Call Shine follow the steps','3');
    });
     $('#close_ok2').click(function (e) {
           e.preventDefault();
        $("#input1").hide();
        $("#input2").hide();
        $("#code").hide();
        $(".modal #message").css({
            "margin-top":"50px"
        });
        if(($("#dinggou_num").val()=="123"||$("#dinggou_num").val()=="123456") && $("#dinggou").val()=="123")
        {
           alerte('In up to 24 hours you will receive a SMS<br>with confirmation of purchase.','Thank You!','');
        }else{
         alerte("Subscription can't make it, please try again.",'Sorry!','');
        }
        
    });
     // 保存
     $("#save_btn").click(function (e) {
     	e.preventDefault();
     	var txt = "Your message was successfully created!";
     	$("#alertsave .text_left").html(txt);
     	$("#save_btn_a").trigger('click');
     	
     });
     // 取消
     $("#input_cancel").click(function (e) {
     	e.preventDefault();
     	$("#cancel_btn_a").trigger('click');
     });
     $("#yes_btn").click(function (e) {
     	e.preventDefault();
     	var txt = "The service was canceled successfully! ";
     	$("#alertsave .text_left").html(txt);
     	$("#save_btn_a").trigger('click');
     });

     $(".add_group_btn").click(function(event) {
         $("#add_group_a").trigger('click');
     });
     $(".input_btn").click(function(event) {
         $("#fast_men_a").trigger('click');
     });
     $("#specific_a").click(function(event) {
         var txt = "Insert the number of the Contact";
         $("#specific .title").html(txt);
         $(".specific_a").trigger('click');
     });
     $(".add_other_contact").click(function(event) {
        var txt = "Insert the number to the group";
        
         $(".specific_a").trigger('click');
         $("#specific .title").html(txt);
     });
     $("#add_contacts").click(function(event) {
         var txt = "Insert the number of the Contact";
         $("#specific .title").html(txt);
         $(".specific_a").trigger('click');
     });
})
var i=10;
// 弹框方法
function alerte(text, title, show_ok) {
    title = (title) ? title : 'Erro';
    show_ok = (show_ok === undefined) ? true : show_ok;
    $('#alerte .title').html(title);
    $('#alerte #message').html(text);
    $('#modal_alert').trigger('click');
    if (show_ok) {
        $('#alerte #close').show();
    } else {
        $('#alerte #close').hide();
    }
}

// 手机系统
function showphone(){
	var n = $("#frames_container1 .frame").length;
	var w = $("#frames_container1 .frame").width();
	var leftW=0;
	$(".left_arrow").click(function(event) {
		leftW+=w;
		if(leftW>w*(n-1)){
			leftW=w*(n-1);
		}
		$("#frames_container1").stop().animate({
			"margin-left": -leftW},
			500);
	});
	$(".right_arrow").click(function(event) {
		leftW-=w;
		if(leftW<0){
			leftW=0;
		}
		$("#frames_container1").stop().animate({
			"margin-left": leftW},
			500);
	});
}

// 选取元素，改变样式
function changestyle(){
	// The receiver
	$(".receiver ul li a").click(function(event) {
		$(this).addClass('sel');
		$(this).parents().siblings().find("a").removeClass('sel')
	});

    // tab
    $("#all_a").click(function(){
        if ($(this).hasClass('sel')) {
            $(this).removeClass('sel');
            $(".tab table td").find('a').removeClass('sel at');
        }else{
            $(this).addClass('sel');
            $(".tab table td").find('a').addClass('sel at');
        }
    })
    $(".tab table td a.tips").click(function(event) {
        if ($(this).hasClass('sel')) {
            $(this).removeClass('sel at');
        }else{
            $(this).addClass('sel at');
        }
    });
    $("#delt_data").click(function(event) {
        if($(".tab table td a.tips").hasClass('at')){
            $(".tab table td a.at").parents("tr").remove();
        }
    });
    $(".tab table tr td a.write").click(function(event) {
        if($(this).hasClass('have')){
            $(this).removeClass('have');
            $(this).parents("tr").find('td input').removeClass('sel').attr({'disabled':'disabled'});
            $(this).find('img').attr({"src":"images/edit_a.png"});
        }else{
            $(this).addClass('have');
            $(this).parents("tr").find('td input').removeAttr('disabled').addClass('sel');
            $(this).find('img').attr({"src":"images/edit_b.png"});
        }
    });
    $(".tab table tr:gt(0)").mouseover(function() {
            if($(".tab table tr td a.write").hasClass('have')){
                $(".tab table tr td a.write").hide();
                $(".tab table tr td a.have").show();
                return;
            }else{
                $(this).find('td a.write').show();
            }
    })
     $(".tab table tr:gt(0)").mouseout(function() {
        if($(this).find('td a.write').hasClass('have')){
            return;
            }else{
                $(this).find('td a.write').hide();
            }
     });

     $("#move_group").click(function(event) {
        event.stopPropagation();
        if($(".alertmove").is(":visible")==true){
            $(".alertmove").hide();
            $(this).removeClass('at');
        }else{
            var top = $(this).position().top;
            var left = $(this).position().left;
            $(this).addClass('at');
            $(".alertmove").css({
                top:top+$(this).height(),
                left:left
            }).show();
            $(".alertmove").click(function(event) {
                event.stopPropagation();
            });
            $(document).click(function(event) {
                event.stopPropagation();
                $(".alertmove").hide();
                $("#move_group").removeClass('at');
            });
        }
     });

     // 选择日期
     $(".time p span").click(function(event) {
        if($(this).find('img').hasClass('have'))
        {
            $(this).find('img').attr({
            "src":"images/check_off.png"
            }).removeClass('have');
        }else{
            $(this).find('img').attr({
            "src":"images/check_on.png"
            }).addClass('have');
        }
         
     });
     // Message State
     $(".state ul li a").click(function(event) {
         if($(this).hasClass('sel')){
            $(this).removeClass('sel');
         }else{
            $(this).addClass('sel');
         }
     });
     // Contents radio
     $(".radio ul li").find('a').click(function(event) {
         if($(this).hasClass('no')){
            $(this).removeClass('no');
         }else{
            $(this).addClass('no');
         }
     });
     // Blacklist
     $(".data ul li").find('a').click(function(event) {
        var name = $(this).parents("li").find('em').html();
        $("#delete_black").find('.black em').html(name);
        $("#delete_black_a").trigger('click');
        lin = $(this).parents("li").index();

     });
     $("#btn_yes").click(function(event) {
            $(".data ul li").eq(lin).remove();
        });
    // 通讯录选择联系人
    $(".table_group td span").click(function(event) {
        if($(this).hasClass('sel')){
            $(this).removeClass('sel');
        }else{
            $(this).addClass('sel');
        }
    });

}
var count=null;
function countdown(){
     // 验证码倒计时
     $(".countdown em").html(i);
     clearInterval(count);
        count = setInterval(function(){
            i--;
            if(i==0){
                $("#random .phone_tips").addClass('phone_tips2');
                $("#re-obtain").text('Re-obtain');
                
                $("#phone .phone_tips").addClass('phone_tips2');
                $("#code_text_btn").text('Re-obtain');
                clearInterval(count);
                
            }else{
                $("#phone .phone_tips").removeClass('phone_tips2');
                $("#code_text_btn").text('OK');
            }
            $(".countdown em").html(i);
        },1000)
        
}

