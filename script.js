const form = document.getElementById("joinForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbyCtJzlVzZPhwI168RsGWj5eyMIcc6flMcfJn94UerRZROkGc_-eBD33g_smxH4pQAW/exec", {
        method: "POST",
        body: data
    })
    .then(response => response.text())
    .then(result => {
        alert("🎉 Registration Successful!");
        form.reset();
    })
    .catch(error => {
        alert("Something went wrong.");
        console.error(error);
    });
});
