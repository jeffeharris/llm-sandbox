document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
    event.preventDefault();

    // Show the loading icon
    document.getElementById('loading-icon').style.display = 'block';

    const model = document.getElementById('model').value;
    const systemDescription = document.getElementById('systemDescription').value;
    const prompt = document.getElementById('prompt').value;
    const temperature = parseFloat(document.getElementById('temperature').value);

    const data = {
        model: model,
        messages: [
            {
                role: 'system',
                content: systemDescription
            },
            {
                role: 'user',
                content: prompt
            }
        ],
        temperature: temperature,
        //TODO: Add streaming
        //stream: true
    };

    try {
        const response = await fetch('http://localhost:3000/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();

        if (!result.choices || !result.choices[0] || !result.choices[0].message) {
            throw new Error('Unexpected response format');
        }

        // Hide the loading icon
        document.getElementById('loading-icon').style.display = 'none';

        const message_content = result.choices[0].message.content;

        // Update the response element with the returned result
        const responseElement = document.getElementById('response-container');
        responseElement.innerHTML = marked(message_content);

        const jsonElement = document.getElementById('json-container');
        jsonElement.textContent = JSON.stringify(result, null, 2);
    } catch (error) {
        // Hide the loading icon
        document.getElementById('loading-icon').style.display = 'none';

        // Display error message
        const responseElement = document.getElementById('response-container');
        responseElement.textContent = 'An error occurred: ' + error.message;

        const jsonElement = document.getElementById('json-container');
        jsonElement.textContent = '';
    }
});