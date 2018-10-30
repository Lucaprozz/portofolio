<?

class UserModel {
    // DB Stuff
    private $conn;

    // Post Properties
    public $user_id;
    public $user_username;
    public $user_password;

    // Constructor with DB
    public function __construct($db) {
        $this->conn = $db;
    }

    // Get Posts
    public function read(){
        // Create query
        $query = 'SELECT * FROM users';
        // Prepare statement
        $stmt = $this->conn->prepare($query);
        // Execute query
        $stmt->execute();

        return $stmt;
    }
}