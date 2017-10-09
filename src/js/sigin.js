require(['config'],function(){
    require(['jquery','xcarousel','common'],function($,z,n){
        //load加载
        $('.hed_box').load('../html/h&f.html #header');
        $('.fot_box').load('../html/h&f.html #footer');    

        $('.siginbtn a').click(function(){
            var username = $('.name input')[0].value;
            var password = $('.password input')[0].value;
            $.get('../api/sigin.php?username='+username+'&password='+password,function(data,b,hr){
                if(data == 'ok'){
                    console.log(666)
                    location.href = '../index.html';
                }
            });
        })
    });
});
