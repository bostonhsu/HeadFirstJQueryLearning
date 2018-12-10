<?php
	$query = "SELECT first_name, last_name, gender, finish_time from runners order by finish_time ASC ";
	$result = db_connection($query);
	$runners = array();

	while ($row = mysqli_fetch_array($result, MYSQL_ASSOC)) {
		array_push($runners, array('fname' => $row['first_name'], 'lname' => $row['last_name'], 'gender' => $row['gender'], 'time' => $row['finish_time']));
	}
	echo json_encode(array("runners" => $runners));
	exit;

	function db_connection($query) {
		$conn = mysqli_connect('localhost', 'runner_db_user', 'runner_db_password') OR die ('Could not connect to database.');
		mysqli_select_db($conn, 'hfjq_race_info');
		return mysqli_query($conn, $query);
	}

	function fail($message) {
		die(json_encode(array('status' => 'fail', 'message' => $message)));
	}

	function success($message) {
		die(json_encode(array('status' => 'success', 'message' => $message)));
	}
?>