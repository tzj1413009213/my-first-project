require(['config'],function(){
    require(['jquery','xcarousel','xzoom','common'],function($,z,a,b){
        $('.hed_box').load('../html/h&f.html #header');
        $('.fot_box').load('../html/h&f.html #footer');
        
        var id = window.location.search.slice(4);
        var img;
        $.get('../api/detalis.php?id='+id,function(data,b,hr){
            var data = JSON.parse(data)[0];
            console.log(data);
            //商品信息
            $($('.nav_gdt a')[3]).text(data.description);
            //商品详情
            $('.slae_price').text(data.qty);
            $('.buy_dd span').text(data.price);
            $('.sale').text(data.sale_price);
            //图片路径
            var mimg = data.mimg.split(',');
            img = $('.maxglass ul li a img');
            img.each(function(idx,item){
                item.src = `../img/${mimg[idx]}.jpg`;
            })


            //放大镜
            var glImg = $('.gl_img img')[0];
            let list = $('.maxglass ul li a');
            $(list[0]).css({border:'1px solid #C30008'})
            glImg.src = `../img/${mimg[0]}.jpg`;
            glImg.dataset.big = glImg.src;
            new XZoom({
                        ele:'.gl_img',
                        width:420,
                        height:420,
                        position:'right'
                    })
            for(let i=0;i<list.length;i++){
                $(list[i]).mouseover(function(){
                    list.each(function(){
                        $(this).css({
                            border:'1px solid #999999'
                        })
                    });
                    $(this).css({
                        border:'1px solid #C30008'
                    });
                    glImg.src = '';
                    let img = this.children[0].src;
                    glImg.src = img;
                    glImg.dataset.big = img;
                    new XZoom({
                        ele:'.gl_img',
                        width:420,
                        height:420,
                        position:'right'
                    })
                })
            }



            //商品数量
            var leter = $('.sale_pri').text();
            console.log(leter);
            var num = 0;
            var qt = 0;
            var qtn = 0;
            $('.add1').click(function(){
                num++;
                $(this).prev()[0].value = num;
                $('.leter').text(num+qt+qtn);
                $('.total').text(leter*(num+qt+qtn));
            });
            $('.reduce1').click(function(){
                num--;
                if(num < 1){
                    num = 0;
                }
                $(this).next()[0].value = num;
                $('.leter').text(num+qt+qtn);
                $('.total').text(leter*(num+qt+qtn));
            });
            
            $('.add2').click(function(){
                qt++;
                $(this).prev()[0].value = qt;
                $('.leter').text(num+qt+qtn);
                $('.total').text(leter*(num+qt+qtn));
            });
            $('.reduce2').click(function(){
                qt--;
                if(qt < 1){
                    qt = 0;
                }
                $(this).next()[0].value = qt;
                $('.leter').text(num+qt+qtn);
                $('.total').text(leter*(num+qt+qtn));
            });
            
            $('.add3').click(function(){
                qtn++;
                $(this).prev()[0].value = qtn;
                $('.leter').text(num+qt+qtn);
                $('.total').text(leter*(num+qt+qtn));
            });
            $('.reduce3').click(function(){
                qtn--;
                if(qtn < 1){
                    qtn = 0;
                }
                $(this).next()[0].value = qtn;
                $('.leter').text(num+qt+qtn);
                $('.total').text(leter*(num+qt+qtn));
            });


            // 把cookie中的carlist赋值给一个数组
            // 进入页面先获取之前的cookie值
            var carlist = [];
            var cookies = document.cookie;
            if(cookies.length>0){
                cookies = cookies.split('; ');
                cookies.forEach(function(cookie){
                    var temp = cookie.split('=');
                    if(temp[0] === 'carlist'){
                        carlist = JSON.parse(temp[1]);
                    }
                })
            }
            $('.btncar').click(function(){
                var Spiece = $('.sale_b1 input')[0].value;
                var Mpiece = $('.sale_b2 input')[0].value;
                var Lpiece = $('.sale_b3 input')[0].value;
                var total = $('.total').text();
                console.log(total,Spiece,Mpiece,Lpiece)
                // var obj = {
                //     piece:piece,
                //     Spiece:Spiece,
                //     Mpiece:Mpiece,
                //     Lpiece:Lpiece,
                //     total:total,
                //     id:id
                // }
                // console.log(obj)
                // var date = new Date();
                // date.setDate(date.getDate()+7)
                // Cookie.set('password',1111,{expires:date.toString()});

                // 判断当前guid是否已经存在于carlist中
                    // 如果存在，找到这个商品，并且数量+1
                    // 如果不存，则添加一个商品到carlist中（默认数量为1）

                    var has = false;
                    for(var i=0;i<carlist.length;i++){
                        // 已经存在
                        if(carlist[i].id === id){
                            carlist[i].Spiece = carlist[i].Spiece*1 + Spiece*1;
                            carlist[i].Mpiece = carlist[i].Mpiece*1 + Mpiece*1;
                            carlist[i].Lpiece = carlist[i].Lpiece*1 + Lpiece*1;
                            carlist[i].total = carlist[i].total*1 + total*1;
                            has=true;
                            break;
                        }
                    }
                    console.log(data.sale_price)
                    // 不存在
                    if(!has){
                        var goods = {
                            Spiece:Spiece,
                            Mpiece:Mpiece,
                            Lpiece:Lpiece,
                            total:total,
                            imgurl:data.imgurl,
                            price:data.sale_price,
                            description:data.description,
                            shoproom:data.name,
                            id:id
                        }

                        carlist.push(goods)
                    }

                    // 写入cookie
                    var date = new Date();
                    date.setDate(date.getDate()+15);
                    document.cookie = 'carlist=' + JSON.stringify(carlist) + ';expires=' + date.toUTCString();





                })
        });

        

        
        
    });
});
