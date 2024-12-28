# Define the URL for the POST request
$url = "https://api.indexnow.org/IndexNow"

# Define the headers for the request
$headers = @{
    "Content-Type" = "application/json; charset=utf-8"
}

# Define the body of the request
$body = @{
    host = "xn--0ci5768mq9c.ws"
    key = "8f5c6fbb5a984c45affa85a4f9b79561"
    keyLocation = "https://xn--0ci5768mq9c.ws/8f5c6fbb5a984c45affa85a4f9b79561.txt"
    urlList = @(
        "https://xn--0ci5768mq9c.ws/",
        "https://xn--0ci5768mq9c.ws/about",
        "https://xn--0ci5768mq9c.ws/contact",
        "https://xn--0ci5768mq9c.ws/funzone"
    )
}

# Convert the body to JSON format
$jsonBody = $body | ConvertTo-Json -Depth 10 -Compress

# Make the HTTP POST request
$response = Invoke-RestMethod -Uri $url -Method POST -Headers $headers -Body $jsonBody

# Output the response
$response
