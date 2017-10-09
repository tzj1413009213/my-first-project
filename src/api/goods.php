<?php


    //引入其他文件
    include 'connect.php';

    $page = isset($_GET['page']) ? $_GET['page'] : '';
    $qty = isset($_GET['qty']) ? $_GET['qty'] : '';
    $id = isset($_GET['id']) ? $_GET['id'] : '';
    echo $id;
    //编写查询sql语句
    // $qty = $qty*($page-1);
    // $page = $qty*$page;

    $sql = "select * from goods order by id limit $page,$qty";
    $num = 'select count(id) from goods';
    $num = $conn->query($num)->fetch_all(MYSQLI_ASSOC);
    echo json_encode($num,JSON_UNESCAPED_UNICODE);

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