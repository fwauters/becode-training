// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", getP);

    async function getP() {
        let promise = await window.lib.getPersons();

        promise.forEach(
            (persons) => {
                console.log(persons);
            }
            , (error) => {
                console.error(error);
            });
    }

})();
