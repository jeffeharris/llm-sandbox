# llm-sandbox

This is a basic HTML site with CSS and JavaScript used.

The site takes a model, system message, prompt, and temperature as inputs and triggers a call to a local API proxy server which submits
the request to OpenAI API using the API key in the environment variable.

You'll need an OPENAI_API_KEY environment variable set in the .env file

You'll also need to start the proxy server manually by opening a terminal window and typing `python3 openai-api-proxy.py`

Then you can navigate to the /index.html file in a browser window to see the local webpage.
