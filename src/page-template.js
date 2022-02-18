//create the tests section
const generateTests = testsText => {
    if(!testsText) {
        return "";
    }

    return `
    <p>${testsText}</p>
    `
}

module.exports = templateData => {
    // console.log(templateData)

    const {title, description, ...body} = templateData;

    return `
        <!DOCTYPE html> 
        <html lang="en"> 
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>README Generator</title>
        </head>
    
        <body>
            <header>
                <h1 class="text-center">${title}</h1>
                <h2>Description:</h2>
                <p>${description}</p>

                <h2>Table of Content</h2>
                <ul>
                    <li><a href="#install">Installation</a></li>
                    <li><a href="#usage">Usage</a></li>
                    <li><a href="#license">License</a></li>
                    <li><a href="#contributing">Contributing</a></li>
                    <li><a href="#tests">Tests</a></li>
                    <li><a href="#questions">Questions</a></li>
                </ul>
            </header>

            <main>
                <h3 id="install">Install</h3>
                <p>${body.installation}</p>
                <h3 id="usage">Usage</h3>
                <p>${body.usage}</p>
                <h3 id="license">License</h3>
                <p>${body.license}</p>
                <h3 id="contributing">Contributing</h3>
                <p>${body.contributing}</p>
                <h3 id="tests">Tests</h3>
                ${generateTests(body.tests)}
                <h3 id="questions">Questions</h3>
                <p>GitHub Username: ${body.github}</p>
                <p><a href="https://github.com/${body.github}">GitHub Link</a> </p>
                <p>If you have additional questions, please email me at: <a href="mailto:${body.email}">${body.email}</a></p>
        </body>
        </html>
    `;
};