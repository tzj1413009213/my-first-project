<?php
    /*
        功能：判断用户名是否被占用
        isset():用于判断是否传递参数

     */
    $phone = isset($_GET['phone']) ? $_GET['phone'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $email = isset($_GET['email']) ? $_GET['email'] : '';

    $sql = "insert into reg (phone,password,username,email) values ('$phone','$password','$username','$email')";

    //利用sql语句查询数据库
    //查询结果集
    // $result = $conn->query($sql);

    //使用查询结果集
    // $row = $result->fetch_all(MYSQLI_ASSOC);

    // $res = array_slice($row,($page-1)*$qty,$qty);
    // echo $res;
    // echo json_encode($row,JSON_UNESCAPED_UNICODE);


    // 判断用户名是否已经存在
    // if(in_array($username, $data)){
        // 如果已经存在,则不能注册,向前端返回no
        // echo "no";
    // }else{
        // echo "yes";
    // }

    // echo "$username";

    // echo json_encode($data,JSON_UNESCAPED_UNICODE);



    //引入其他文件
    include 'connect.php';


    $phone = isset($_GET['phone']) ? $_GET['phone'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $email = isset($_GET['email']) ? $_GET['email'] : '';

    if($phone != ''){
        $sql = "insert into reg (phone,password,username,email) values ('$phone','$password','$username','$email')";
    }else{
        $sql = "select * from reg";
    }
    


    // $id = isset($_GET['id']) ? $_GET['id'] : '3';

    

    //利用sql语句查询数据库
    //查询结果集
    // echo $num;
    $result = $conn->query($sql);

    //使用查询结果集
    $row = $result->fetch_all(MYSQLI_ASSOC);

    // $res = array_slice($row,($page-1)*$qty,$qty);
    // echo $res;
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>