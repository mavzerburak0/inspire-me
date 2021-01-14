var url = 'https://quotes.rest/qod.json?category=inspire';
var quoteDiv = document.getElementById('quote'); 
fetch(url)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                var quote = '<h1>'+data.contents.quotes[0].quote+'</h1>';
                var author = '<p> by '+data.contents.quotes[0].author+'</p>';
                quoteDiv.innerHTML += quote;
                quoteDiv.innerHTML += author;
            });
        } else {
            quoteDiv.innerHTML += "<h3>Slow down.<h3>"
            quoteDiv.innerHTML += "<p>Too many requests are being made. Only 10 requests are allowed per hour.</p>"
            console.log("API call failed due to too many requests.");
        }
});

