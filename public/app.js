var apikey = "39fcb5b65b26414d916b3adbd052db1c";

var endpoint = "http://congress.api.sunlightfoundation.com/bills/search";

var params = {
  apikey: apikey,
  query: "immigration",
  history: {
    enacted: true
  }
};

var callback = function(data,text,jq){
  console.log(data);
};

$.get(endpoint, params, callback, "json");