require(['config'],function(){
    require(['jquery','xcarousel','common'],function($,z,n){
        //load加载
        $('.hed').load('../html/h&f.html #header');
        $('.fot').load('../html/h&f.html #footer');
         var cookies = document.cookie;
         console.log(JSON.parse(cookies.slice(8)));
         var data = JSON.parse(cookies.slice(8));
         var total = 0;
         $(data).each(function(idx,item){
                console.log(item.description);
                total += item.total;
                $('.rmb').text('￥'+total);
                if(item.Spiece!=''){
                    var ulA = $(`<ul>
                        <li>
                            <img src="../img/${item.imgurl}">
                            <a href="###">${item.description}</a>
                            <span>码数：S</span>
                        </li>
                        <li>￥${item.price}</li>
                        <li>
                            <button>-</button>
                            <input type="text" value="${item.Spiece}">
                            <button>+</button>
                        </li>
                        <li>￥${item.price*item.Spiece}</li>
                        <li class="remove"><i></i>删除</li>
                    </ul>`)
                    $('.god').append(ulA);
                }
                if(item.Mpiece!=''){
                    var ulB = $(`<ul>
                        <li>
                            <img src="../img/${item.imgurl}">
                            <a href="###">${item.description}</a>
                            <span>码数：M</span>
                        </li>
                        <li>￥${item.price}</li>
                        <li>
                            <button>-</button>
                            <input type="text" value="${item.Mpiece}">
                            <button>+</button>
                        </li>
                        <li>￥${item.price*item.Mpiece}</li>
                        <li class="remove"><i></i>删除</li>
                    </ul>`)
                    $('.god').append(ulB);
                }
                if(item.Lpiece!=''){
                    var ulC = $(`<ul>
                        <li>
                            <img src="../img/${item.imgurl}">
                            <a href="###">${item.description}</a>
                            <span>码数：L</span>
                        </li>
                        <li>￥${item.price}</li>
                        <li>
                            <button>-</button>
                            <input type="text" value="${item.Lpiece}">
                            <button>+</button>
                        </li>
                        <li>￥${item.price*item.Lpiece}</li>
                        <li class="remove"><i></i>删除</li>
                    </ul>`)
                    $('.god').append(ulC);
                }
         })

        $('.remove').click(function(){
            $(this).parent().remove();
            //获取、清除、修改cookie
        })
        
    });
});