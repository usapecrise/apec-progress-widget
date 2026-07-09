/*
-----------------------------------------
APEC Progress Widget
-----------------------------------------
*/

let currentPage = 1;
let totalPages = 8;

function buildProgress() {

    const progress =
        document.getElementById("progressLine");

    progress.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {

        const node =
            document.createElement("div");

        node.className = "node";

        const circle =
            document.createElement("div");

        circle.className = "circle";

        if (i < currentPage) {

            circle.classList.add("completed");
            circle.innerHTML = "✔";

        }

        else if (i === currentPage) {

            circle.classList.add("current");
            circle.innerHTML = i;

        }

        else {

            circle.innerHTML = i;

        }

        node.appendChild(circle);

        if (i < totalPages) {

            const line =
                document.createElement("div");

            line.className = "line";

            if (i < currentPage) {

                line.classList.add("completed");

            }

            node.appendChild(line);

        }

        progress.appendChild(node);

    }

}

function setCurrentPage(page){

    currentPage = page;

    render();

}

function setTotalPages(total){

    totalPages = total;

    render();

}

function updateProgress() {

    const percent = Math.round(
        ((currentPage - 1) / (totalPages - 1)) * 100
    );

    document.getElementById("percent").innerHTML =
        percent + "%";

}

let percent = 0;

if (totalPages > 1) {
    percent = Math.round(
        ((currentPage - 1) / (totalPages - 1)) * 100
    );
}

document.getElementById("percent").textContent = `${percent}%`;

function render() {

    buildProgress();

    updateProgress();

}

render();

//
// Demo controls
// Remove these once connected to Jotform
//
document.addEventListener("keydown", function (e) {

    if (e.key === "ArrowRight") {

        if (currentPage < totalPages) {

            currentPage++;

            render();

        }

    }

    if (e.key === "ArrowLeft") {

        if (currentPage > 1) {

            currentPage--;

            render();

        }

    }

});
