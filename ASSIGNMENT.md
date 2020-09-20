# Implement an API endpoint and deploy it.

Your task is to implement an API endpoint, deploy it somewhere and provide us an URL for testing. Once all the tests are successfully passed, you will get a secret key that you can attach to your application.

You should implement an endpoint to analyze text. Curl command to call your API might look like this:
```bash
curl --header "Content-Type: application/json" \
     --request POST \
     --data '{"text":"hello 2 times  "}' \
     https://mysuperawesomeapi.com/analyze
```

And the response should be:
```json
{
    "textLength":{"withSpaces":15,"withoutSpaces":11},
    "wordCount":3,
    "characterCount":[{"e":2},{"h":1},{"i":1},{"l":2},{"m":1},{"o":1},{"s":1},{"t":1}]
}
```

Please pay attention that the characters array should contain only English letters and they should be alphabetically ordered.

