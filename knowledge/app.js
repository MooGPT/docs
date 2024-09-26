async function searchHTMLKnowledge() {
    const input = document.getElementById('userInput').value;
    const response = await fetch('API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({prompt: input, maxTokens: 150})
    });

    const data = await response.json();
    const content = _.get(data, 'choices[0].text', 'Sorry, I couldn’t find an answer.');

    document.getElementById('result').innerText = content;
}
