require(['config'],function(){
    require(['jquery','xcarousel'],function($,z){
        $('.hed_box').load('../html/h&f.html #header');
        $('.fot_box').load('../html/h&f.html #footer');
        var page = 1;
        var qty = 20;
        page = qty*(page-1);
        var total;
        $.get('../api/goods.php?page='+page+'&qty='+qty,function(data,b,hr){
            // console.log(data);
            var obj = JSON.parse(data.slice(0,21))[0];
            for(var attr in obj){
                total = Math.ceil(obj[attr]/qty);
            }
            var dada = JSON.parse(data.slice(21));
                   
            var ul = $('<ul/>')[0];
            // dada.map(function(item){
            //     console.log(item)
            // })
            ul.innerHTML = dada.map(function(item){
                    return `<li>
                    <div><a href="gdetalis.html?id=${item.id}"><img src="../img/${item.imgurl}.jpg"></a></div>
                    <p><a href="gdetalis.html?id=${item.id}">${item.description}</a></p>
                    <p><a href="###">${item.name}</a><a href="###">已售<span>${item.qty}</span>件</a></p>
                    <p><a href="###">￥${item.price}</a><a href="gdetalis.html?id=${item.id}">立即上架</a></p>
               </li> `
            }).join('');            
            $('.mmp').append(ul);
            //分页
        for(var i=1;i<=total;i++){
            var li = $(`<li><a href="###">${i}</a></li>`);
            $('.pagnum').append(li);
        }

        $('.pagnum li').click(function(){
            $('.pagnum li').css({backgroundColor:''});
            $(this).css({backgroundColor:'#EFEFEF'});
            page = $(this).text();
            page = qty*(page-1);
            ul.innerHTML = '';
            $.get('../api/goods.php?page='+page+'&qty='+qty,function(data,b,hr){
                var dada = JSON.parse(data.slice(21));
                   
            ul = $('<ul/>')[0];
            ul.innerHTML = dada.map(function(item){
                    return `<li>
                    <div><a href="gdetalis.html?id=${item.id}"><img src="../img/${item.imgurl}.jpg"></a></div>
                    <p><a href="gdetalis.html?id=${item.id}">${item.description}</a></p>
                    <p><a href="###">${item.name}</a><a href="###">已售<span>${item.qty}</span>件</a></p>
                    <p><a href="###">￥${item.price}</a><a href="gdetalis.html?id=${item.id}">立即上架</a></p>
               </li> `
            }).join('');            
            $('.mmp').append(ul);
            });
            
        })

        });
        
    });
});
