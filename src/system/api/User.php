<?
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../config/Database.php';
include_once '../models/UserModel.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate
$post = new UserModel($db);

// query
$result = $post->read();
// Get row count
$num = $result->rowCount();

// Check if there are any
if($num > 0) {
    // Post array
    $posts_arr = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $post_item = array(
            'id'       => $user_id,
            'username' => $user_username,
            'password' => $user_password
        );

        // Push to 'data'
        array_push($posts_arr, $post_item);
    }

    //Turn to JSON & output
    echo json_encode($posts_arr);

} else {
    // No posts
    echo json_encode(
        array('Message' => 'No Users Found')
    );
}