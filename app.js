function get_axios() {
    axios.request({
    url: "https://inshortsapi.vercel.app/news?category=science",
    method: "GET"
  }).then(function_success).catch(function_failed)
}

function function_success(response) {
    var success = document.createElement("p");
    success.innerText = response["data"]["data"][0]["author"];

    document.getElementById("meme").appendChild(success);
}

function function_failed(error) {
    var not_success = document.getElementById("meme");
    not_success.innerText = "Failed please refresh the page!";

    document.getElementById("meme").appendChild(not_success);
}

document.getElementById("get_api").addEventListener("click", get_axios)