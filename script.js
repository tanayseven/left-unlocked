document.getElementById("copy-command").addEventListener("click", function() {
    const scriptCommand = document.getElementById("command-text").innerText;
    navigator.clipboard.writeText(scriptCommand).then(() => {
        const message = document.getElementById("copied-message");
        const button = document.getElementById("copy-command");

        message.style.display = "block";
        button.style.display = "none";

        setTimeout(() => {
            message.style.display = "none";
            button.style.display = "inline-flex";
        }, 2000);
    }).catch(err => console.error("Failed to copy: ", err));
});

const onDocumentLoad = ()=> {
    const urlPrefix = window.location.origin;
    const command = `curl -s ${urlPrefix}/lock-screen-reminder.sh | bash`;
    const commandElement = document.getElementById('command-text');
    commandElement.innerText = command;
}
