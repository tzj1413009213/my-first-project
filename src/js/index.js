/*//首页
jQuery(function($){
    console.log('home');
});*/

// 重点：管理模块之间的依赖性，便于代码的编写和维护

// @配置


/*
    @引入入模块
        * require.js把每个js文件当作一个模块
    require()
        * 第一个参数（Array）：依赖的模块（这里的模块加载顺序不确定）
            * 引入的模块如果有js后缀名，则忽略baseUrl
        * 第二个参数（Function）：回调函数，当第一个参数内所有的模块加载完成后执行
    基础路径baseUrl：
        js/

 */
require(['config'],function(){
    require(['jquery','xcarousel','common'],function($,z){
    //jquery加载完成后，执行这里的代码
    // console.log(yanzhengma());
        //轮播图
        $('.car_one').xCarousel({
            imgs:['img/car1_1.jpg','img/car1_2.jpg','img/car1_3.jpg','img/car1_4.jpg','img/car1_5.jpg','img/car1_6.jpg','img/car1_7.jpg','img/car1_8.jpg'],
            index:0,
            type:'horizontal',
            width:529,
            height:267,
            showPage:true
        })
        $('.car_two').xCarousel({
            imgs:['img/car1_1.jpg','img/car1_2.jpg','img/car1_3.jpg','img/car1_4.jpg','img/car1_5.jpg','img/car1_6.jpg','img/car1_7.jpg'],
            index:0,
            type:'horizontal',
            width:529,
            height:204,
            showPage:true
        })
        //轮播图
        $('.left_car').xCarousel({
            imgs:['img/ml1.jpg','img/ml2.png','img/ml3.jpg','img/ml4.jpg','img/ml5.jpg'],
            index:0,
            type:'horizontal',
            showPage:true,
            width:370,
            height:245
        })


        //tab
        var tab = $('.aside_bod');
        var content = tab.children('.fadeOut');
        var items = tab.find('.aside_nav li');

        // 隐藏除第一个以外的.content
            content.slice(1).hide();
            // 高亮显示第一个tab
            items.first().css({
                backgroundColor:'#fff',
                borderTop:'1px solid #D61E00'
            })
            tab.on('mouseover','.aside_nav li',function(){
                var idx = $(this).index();
                // 高亮
                $(this).css({
                    backgroundColor:'#fff',
                    borderTop:'1px solid #D61E00'
                }).siblings('li').css({
                    backgroundColor:'#F5F5F5',
                    borderTop:'1px solid #E7E7E7'
                });
                // 显示对应的内容
                content.eq(idx).fadeIn().siblings('.fadeOut').fadeOut(0);
            })


        //文字缩放 
        var btn = $('.Tzoom');
        let con_zoom = $('.link_content');
        var num = 0;
        btn.click(function(){
            num++;
            if(num==1){
                con_zoom.animate({height:0},1000);
                btn.text('展开友情链接︿');
            }else if(num===2){
                con_zoom.animate({height:101},1000);
                num = 0;
                btn.text('收起友情链接﹀');
            }
        });

        var move_btn = $('.btn_move');
        var Service = $('#Service');
        var bck = $('.btn_move a');
        var step = 0;
        move_btn.click(function(){
            step++;
            if(step==1){
                Service.animate({width:180},1000);
                bck.css({backgroundPosition:'0 -160px'})
            }else if(step==2){
                Service.animate({width:0},1000);
                bck.css({backgroundPosition:'-46px -160px'})
                step = 0;
            }
        });





    });
})
