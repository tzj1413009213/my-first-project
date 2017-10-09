require(['config'],function(){
    require(['jquery','xcarousel','common'],function($,z,n){
        //load加载
        $('.lo_hea').load('../html/h&f.html #header');
        $('.fter').load('../html/h&f.html #footer');

        //验证码
        $('.vercode').text(yanzhengma()).css({color:randomColor()});
        var content = $('.vercode').text();
        $('.vode_btn').click(function(){
            $('.vercode').text(yanzhengma()).css({color:randomColor()});
            content = $('.vercode').text();
        });
        
        // 失去焦点判断手机号码是否已注册
        $('.phone input').blur(function(){
            var phone;
            $.get('../api/reg.php?',function(data,b,hr){
                phone = $('.phone input')[0].value;
                console.log(JSON.parse(data));
                var data = JSON.parse(data);
                $(data).each(function(idx,item){
                        if(item.phone == phone){
                            console.log($('.phcon'))
                            $('.phcon').css({display:'block'});
                            $('.py').css({display:'none'});
                            $('.pass').css({display:'none'});
                        }
                        if(item.phone != phone){
                            $('.phcon').css({display:'none'});
                            $('.py').css({display:'none'});
                            $('.pass').css({display:'block'})
                        }
                    })
                if(!/^1[34578]\d{9}$/.test(phone)){
                $('.phcon').css({display:'none'});
                $('.pass').css({display:'none'});
                $('.py').css({display:'block'});
                return false;
            }
            });
            
        })
        //失去焦点判断秘密是否合格
        $('.password input').blur(function(){
            var password = $('.password input')[0].value;
            if(!/^\S{6,20}$/.test(password)){
                $('.patrue').css({display:'none'});
                $('.paflase').css({display:'block'});
            }else{
                $('.paflase').css({display:'none'});
                $('.patrue').css({display:'block'});
            }
        });

        //失去焦点判断验证码输入是否正确
        $('.seccode input').blur(function(){
            
            if($('.seccode input')[0].value==content){
               $('.verflase').css({display:'none'});
               $('.vertrue').css({display:'block'});
            }else if($('.seccode input')[0].value!=content){
               $('.verflase').css({display:'block'});
               $('.vertrue').css({display:'none'});
            }
        })
        //点击跳转到设计用户信息
        $('.logbtn').click(function(){
            if($('.vertrue')[0].style.display=='block' & $('.patrue')[0].style.display=='block' & $('.pass')[0].style.display=='block' & $('.agree input')[0].checked==true){
                $('.her li').css({border:'none'})
                $($('.her li')[1]).css({borderBottom:'2px solid #C40000'})
                $('.regone').css({display:'none'});
                $('.regtwo').css({display:'block'});
            }
        })

        //失去焦点判断用户名是否被占用
        $('.username input').blur(function(){
            var username;
            $.get('../api/reg.php?',function(data,b,hr){
                username = $('.username input')[0].value;
                console.log(JSON.parse(data));
                var data = JSON.parse(data);
                $(data).each(function(idx,item){
                        if(item.username == username){
                            console.log($('.phcon'))
                            $('.usefalse').css({display:'block'});
                            $('.usetrue').css({display:'none'});
                            $('.useplase').css({display:'none'});
                        }
                        if(item.username != username){
                            $('.useplase').css({display:'none'});
                            $('.usefalse').css({display:'none'});
                            $('.usetrue').css({display:'block'})
                        }
                    })

                /*
                    验证账号 ：  
                        不能为空，
                        不能使用特殊字符（数字、字母、下划线、横杠），
                        必须以字母开头
                        长度6-20
                */
                if(!/^[a-zA-Z][\w\-]{5,19}$/.test(username)){
                    $('.usefalse').css({display:'none'});
                    $('.usetrue').css({display:'none'});
                    $('.useplase').css({display:'block'});
                    return false;
                }
            });
            
        });
        
        //失去焦点判断邮箱是否被占用
        $('.email input').blur(function(){
            var email;
            $.get('../api/reg.php?',function(data,b,hr){
                email = $('.email input')[0].value;
                console.log(JSON.parse(data));
                var data = JSON.parse(data);
                $(data).each(function(idx,item){
                        if(item.email == email){
                            console.log(666)
                            $('.emfalse').css({display:'block'});
                            $('.emtrue').css({display:'none'});
                            $('.emplase').css({display:'none'});
                        }
                        if(item.email != email){
                            $('.emplase').css({display:'none'});
                            $('.emfalse').css({display:'none'});
                            $('.emtrue').css({display:'block'})
                        }
                    })

                if(!/[\w\-\.]{3,17}@[\da-z\-]{1,67}(\.[a-z]{2,5})+$/.test(email)){
                    $('.emplase').css({display:'block'});
                    $('.emfalse').css({display:'none'});
                    $('.emtrue').css({display:'none'})
                }
                
            });
            
        })
        //点击注册完成，数据上传数据库
        $('.complete').click(function(){
            if($('.usetrue')[0].style.display=='block' & $('.emtrue')[0].style.display=='block'){
                var phone = $('.phone input')[0].value;
                var password = $('.password input')[0].value;
                var username = $('.username input')[0].value;
                var email = $('.email input')[0].value
                $.get('../api/reg.php?phone='+phone+'&password='+password+'&username='+username+'&email='+email,function(data,b,hr){

                });
                $('.her li').css({border:'none'})

                $($('.her li')[2]).css({borderBottom:'2px solid #C40000'})
                $('.regone').css({display:'none'});
                $('.regtwo').css({display:'none'});
                $('.regthree').css({display:'block'})
            }
        })
    });
});