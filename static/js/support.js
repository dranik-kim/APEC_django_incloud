
    // Function to handle question clicks
    function handleQuestionClick(question) {
        console.log("Clicked on question:", question);
        // In a real application, this would expand an answer or navigate to a details page.
        // For this replica, we just log the action.
        const messageBox = document.getElementById('messageBox');
        messageBox.textContent = `Открыт раздел: ${question}`;
        messageBox.classList.remove('hidden');
        messageBox.classList.add('text-incloud-blue', 'text-sm');
        setTimeout(() => {
            messageBox.classList.add('hidden');
        }, 3000);
    }

    // Function to copy technical info
    function copyTechInfo() {
        // Placeholder text for technical information
        const techInfo = "User-Agent: Mozilla/5.0 (...); IP: 192.168.1.1; Session ID: ABC-123; App Version: 1.0.0";

        // Use execCommand('copy') for better compatibility in isolated environments (like canvas)
        const el = document.createElement('textarea');
        el.value = techInfo;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        const messageBox = document.getElementById('messageBox');
        messageBox.textContent = 'Тех. информация скопирована в буфер обмена!';
        messageBox.classList.remove('hidden');
        messageBox.classList.remove('text-incloud-blue');
        messageBox.classList.add('text-green-600', 'text-sm');

        setTimeout(() => {
            messageBox.classList.add('hidden');
        }, 3000);
    }
