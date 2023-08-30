document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");
    generateButton.addEventListener("click", generateHTML);
});

function generateHTML() {
    const inputJSON = document.getElementById("inputJSON").value;
    const outputHTML = document.getElementById("outputHTML");
    
    try {
        const jsonData = JSON.parse(inputJSON);
        const idSet = new Set();
        let htmlOutput = "";

        for (const item of jsonData) {
            if (idSet.has(item.id)) {
                alert("Error: ID duplicated");
                return;
            }
            idSet.add(item.id);

            const htmlItem = `
                <div class="root" data-id="${item.id}">
                    <span class="username">${item.username}</span>
                    <span class="video_name">${item.video_name}</span>
                    <span class="additional_details">
                        <span class="type">${item.action}</span>
                    </span>
                </div>
            `;
            htmlOutput += htmlItem;
        }

        outputHTML.value = htmlOutput;
    } catch (error) {
        alert("Error: Invalid JSON data");
    }
}
