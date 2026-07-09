/*
-----------------------------------------
APEC Progress Widget
-----------------------------------------
*/

let currentPage = 1;
let totalPages = 8;

function buildProgress() {

    const progress = document.getElementById("progressLine");

    progress.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {

        const dot = document.createElement("div");

        dot.className = "dot";

        if (i < currentPage) {

            dot.classList.add("completed");

        }

        else if (i === currentPage) {

            dot.classList.add("current");

        }

        progress.appendChild(dot);

        if (i < totalPages) {

            const line = document.createElement("div");

            line.className = "line";

            if (i < currentPage) {

                line.classList.add("completed");

            }

            progress.appendChild(line);

        }

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

    let percent = 0;

    if (totalPages > 1) {

        percent = Math.round(
            ((currentPage - 1) / (totalPages - 1)) * 100
        );

    }

    document.getElementById("percent").textContent =
        percent + "%";

}

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
