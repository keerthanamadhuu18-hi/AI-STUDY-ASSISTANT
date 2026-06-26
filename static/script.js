async function askAI() {

    const question = document.getElementById("question").value;

    if (question.trim() === "") {
        alert("Please enter a question.");
        return;
    }

    document.getElementById("answer").innerHTML = "Thinking...";

    const formData = new FormData();
    formData.append("question", question);

    try {

        const response = await fetch("/ask", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        document.getElementById("answer").innerHTML = data.answer;

    } catch (error) {

        document.getElementById("answer").innerHTML =
            "Something went wrong. Please try again.";

    }
}