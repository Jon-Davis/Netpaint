<?php
class DatabaseAdaptor {
	private $DB;
	public function __construct() {
		$db = 'mysql:dbname=netpaint;host=127.0.0.1';
		$user = 'root';
		$password = '';
			
		try {
			$this->DB = new PDO ( $db, $user, $password );
			$this->DB->setAttribute ( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
		} catch ( PDOException $e ) {
			echo ('Error establishing Connection');
			exit ();
		}
	}
	
	//returns true if the user Exists, false otherwise
	public function userExists($username){
		$stmt = $this->DB->prepare ( "SELECT Username FROM users WHERE Username ='".$username."'" );
		$stmt->execute ();
		return count($stmt->fetchAll ( PDO::FETCH_ASSOC )) == 1;
	}

	//returns userID if the username and password match, false otherwise
	public function testUsernamePassword($username, $password){
		$stmt = $this->DB->prepare ( "SELECT * FROM users WHERE Username='".$username."'" );
		$stmt->execute ();
		$userInfo = $stmt->fetchAll ( PDO::FETCH_ASSOC );
		if(count($userInfo) == 1 && $password == $userInfo[0]["Password"])
			return $userInfo[0]["ID"];
		else
			return false;
	}
} // End class DatabaseAdaptor
$DBinstance = new DatabaseAdaptor();
?>