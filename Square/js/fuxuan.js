<script type="text/javascript">
$(document).ready(function(){
	var tab = new $.fn.tab({
		tabList:"#demo1 .ui-tab-container .ui-tab-list li",
		contentList:"#demo1 .ui-tab-container .ui-tab-content"
	});
	var tab = new $.fn.tab({
		tabList:"#demo1 .ui-tab-container .ui-tab-list2 li",
		contentList:"#demo1 .ui-tab-container .ui-tab-content2"
	});		
});	
</script>
<script type="text/javascript">
$(function (){
	$("input.mh_date").datejs({					       
		Event : "click",//可选				       
		Left : 0,//弹出时间停靠的左边位置
		Top : -16,//弹出时间停靠的顶部边位置
		fuhao : "-",//日期连接符默认为-
		isTime : false,//是否开启时间值默认为false
		beginY : 2010,//年份的开始默认为1949
		endY :2015//年份的结束默认为2049
	});
	
});
</script>
<script type="text/javascript">
               		$(document).ready(function(e) {
                        $("#selectList").find(".more").toggle(function(){
							$(this).addClass("more_bg");
							$(".more-none").show()
                    },function(){
						$(this).removeClass("more_bg");
						$(".more-none").hide()
						});
					});
               </script>
<script type="text/javascript">
    	$(document).ready(function(){
			var taboy_box=$(".lefttable-list");
			taboy_box.children("tbody").find("tr:gt(2)").hide(); 
			$(".leftbox-morea").toggle(function(){
				$(this).parent().prev().find("tr").show();
				$(this).addClass("more-i")
			},function(){
				$(this).removeClass("more-i");
				$(this).parent().prev().children("tbody").find("tr:gt(2)").hide(); 
			}
			);
		});
    </script>