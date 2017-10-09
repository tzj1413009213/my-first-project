<?php
//引入其他文件
    include 'connect.php';

    $id = isset($_GET['id']) ? $_GET['id'] : '';

    $sql = "select * from goods where id = $id";

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