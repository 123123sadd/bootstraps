//品牌点击颜色
			$(".rightp").click(function() {
				$(this).parent().find("p").removeClass("clickcolor");
				$(this).addClass("clickcolor");
			})
			$(".pagleft p").click(function() {
				$(this).parent().parent().find("p").removeClass("clickcolor");
				$(this).addClass("clickcolor");
			})
			//选项卡
			$(function() {
				$(".season").eq(0).show();
				$(".d_table").eq(0).addClass("bordbackg");
				$(".d_table").click(function() {
					$(this).addClass("bordbackg").siblings().removeClass("bordbackg");
					$(".season").hide();
					var index = $(this).index() - 1;
					$(".season").eq(index).show()
				})
			})
			//点击颜色
			$(".left2 p").click(function() {
				$(".left2 p").removeClass("addcolor");
				$(this).addClass("addcolor");
			})
			$(".dingwei").click(function() {
					
				$(".huix").attr("src", "img/huixia_05.png");
				$(this).find("img").attr("src", "img/huishang.png")

			})
			//分页
			$(function() {
				$(".pagefy").eq(2).addClass("adcol");
				$(".pagefy").click(function() {
					$(this).addClass("adcol").siblings().removeClass("adcol")
				})
			})
			//收藏夹图标						
			$(".shouc").hover(
				function() {
					$(".shouc img").attr("src", "img/shoucangh.png")
				},
				function() {
					$(".shouc img").attr("src", "img/shoucang.png")
				}
			);
			$(".wraptop_sp1,.wrap,.h_con").mouseover(function() {
			
				$(".wrap").show()
			})
			$(".wraptop_sp1,.wrap,.h_con").mouseout(function() {
				$(".wrap").hide()
			})
			$(function() {
				//默认地址
				$(".default").hide();
				$(".ibackgroud").eq(0).find("img").show();
				$(".ibackgroud").click(function() {
					$(this).children().find("input").css({
						background: "rgba(52, 52, 52, 0.5)",
						color: "white"
					});
					$(this).siblings().children().find("input").css({
						background: "white",
						color: "#4C4C4C"
					});
					$(".default").hide();
					$(this).find("img").show();
				})
				//支付边框
				$(".triangle").hide();
				$(".triangle").eq(0).show();
				$(".pay").eq(0).addClass("redob");
				$(".payment").children().click(function() {
					$(".triangle").hide();
					$(this).addClass("redob").siblings().removeClass("redob");
					$(this).children("img:last-child").show();

				})
			})
			//订单数量加减
			$(function() {
				var i = 1;
				$(".jia").click(function() {
					i++;
					$(".num").val(i)
				})
				$(".jian").click(function() {
					i--;
					if(i > 0) {
						$(".num").val(i);
					} else {
						i = 1
					}
				})
			})
			//收藏夹图标						
			$(".shouc").hover(
				function() {
				$(".shouc img").attr("src", "img/shoucangh.png")
				}, 
			function() {
				$(".shouc img").attr("src", "img/shoucang.png")
				}
			);
			//二级菜单
				$(".d_caidanul li a").click(function() {
				$(this).parent().siblings().children("ul").slideUp();
				$(this).parent("li").children("ul").slideToggle();
				$(this).addClass("addcolor").parent().siblings().children().removeClass("addcolor")
			})
			$(".d_caidanul li ul li a").click(function() {
				$(this).parent().parent().parent().siblings().children("ul").children().children().removeClass("addcolor")
				$(this).addClass("addcolor")
			})
			//导航更改颜色
			$(".left1 p").click(function() {
				$(".left1 p").removeClass("addcolor");
				$(this).addClass("addcolor");
			$(".huisd").click(function(){
				$(".huisd").attr("src","img/huishang.png");
				$(".huixd").attr("src","img/huixia_05.png");
				$(this).attr("src","img/hongshang.png")

			})
			$(".huixd").click(function(){
				$(".huisd").attr("src","img/huishang.png");
				$(".huixd").attr("src","img/huixia_05.png");
				$(this).attr("src","img/hongxia_03.png")		

			})
			})
			//分页
			$(function(){
				$(".pagefy").eq(2).addClass("adcol");
					$(".pagefy").click(function(){
					$(this).addClass("adcol").siblings().removeClass("adcol")
				})
			})
			//收藏夹图标						
			$(".shouc").hover(
				function() {
				$(".shouc img").attr("src", "img/shoucangh.png")
				}, 
			function() {
				$(".shouc img").attr("src", "img/shoucang.png")
				}
			);
			
			