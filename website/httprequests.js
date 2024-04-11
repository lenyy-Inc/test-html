
function search_db()
{

	const searchrequest = new XMLHttpRequest();

	var username_search = document.getElementById("username_search").textContent;
	var elo_search = document.getElementById("elo_search").textContent;
	
	searchrequest.onload = () => 
	{

		let response = JSON.parse(searchrequest.response);
		console.log(response)

	};
	
	searchrequest.open("GET", "./db/handler.php?request_type=search&username=" + username_search + "&elo=" + elo_search);
	searchrequest.send()

}

export {search_db}