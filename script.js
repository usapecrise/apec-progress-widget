/*
--------------------------------------------------
APEC Progress Widget
Version 2
--------------------------------------------------
*/

const config = {

    totalPages: 8,      // Temporary until Jotform provides it
    currentPage: 1

};

/*
--------------------------------------------------
Build Dots
--------------------------------------------------
*/

function buildDots() {

    const dots =
        document.getElementById("dots");

    dots.innerHTML = "";

    for (let i = 1; i <= config.totalPages; i++) {

        const dot =
            document.createElement("div");

        dot.classList.add("dot");

        if (i < config.currentPage) {

            dot.classList.add("completed");

        }

        else if (i === config.currentPage) {

            dot.classList.add("current");

        }

        dots.appendChild(dot);

    }

}

/*
--------------------------------------------------
Update Progress Bar
--------------------------------------------------
*/

function updateProgress() {

    let percent = 0;

    if (config.totalPages > 1) {

        percent = Math.round(
            ((config.currentPage - 1) /
            (config.totalPages - 1)) * 100
        );

    }

    document.getElementById("percent").textContent =
        percent + "%";

    document.getElementById("fill").style.width =
        percent + "%";

}

/*
--------------------------------------------------
Render Widget
--------------------------------------------------
*/

function render() {

    buildDots();

    updateProgress();

}

/*
--------------------------------------------------
Public API
--------------------------------------------------
*/

window.ProgressWidget = {

    setPage(page) {

        page = Number(page);

        if (isNaN(page))
            return;

        page = Math.max(
            1,
            Math.min(page, config.totalPages)
        );

        config.currentPage = page;

        render();

    },

    setTotalPages(total) {

        total = Number(total);

        if (isNaN(total))
            return;

        total = Math.max(1, total);

        config.totalPages = total;

        if (config.currentPage > total) {

            config.currentPage = total;

        }

        render();

    },

    setProgress(page, total) {

        page = Number(page);
        total = Number(total);

        if (isNaN(page) || isNaN(total))
            return;

        total = Math.max(1, total);

        page = Math.max(
            1,
            Math.min(page, total)
        );

        config.currentPage = page;
        config.totalPages = total;

        render();

    }

};

/*
--------------------------------------------------
Initial Render
--------------------------------------------------
*/

render();

/*
--------------------------------------------------
Demo Keyboard Controls
(Remove after Jotform integration)
--------------------------------------------------
*/

document.addEventListener("keydown", function (e) {

    if (e.key === "ArrowRight") {

        ProgressWidget.setPage(
            config.currentPage + 1
        );

    }

    if (e.key === "ArrowLeft") {

        ProgressWidget.setPage(
            config.currentPage - 1
        );

    }

});
