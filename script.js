/*
--------------------------------------------------
APEC Progress Widget
--------------------------------------------------
*/

const config = {

    totalPages: 8,      // Temporary
    currentPage: 1,     // Temporary

    accentColor: "#005DAA"

};

/*
--------------------------------------------------
Build Progress Indicator
--------------------------------------------------
*/

function buildProgress() {

    const progress =
        document.getElementById("progressLine");

    progress.innerHTML = "";

    for (let i = 1; i <= config.totalPages; i++) {

        const dot =
            document.createElement("div");

        dot.className = "dot";

        if (i < config.currentPage) {

            dot.classList.add("completed");

        }

        else if (i === config.currentPage) {

            dot.classList.add("current");

        }

        progress.appendChild(dot);

        if (i < config.totalPages) {

            const line =
                document.createElement("div");

            line.className = "line";

            if (i < config.currentPage) {

                line.classList.add("completed");

            }

            progress.appendChild(line);

        }

    }

}

/*
--------------------------------------------------
Update Percentage
--------------------------------------------------
*/

function updateProgress() {

    let percent = 0;

    if (config.totalPages > 1) {

        percent = Math.round(

            ((config.currentPage - 1) /

            (config.totalPages - 1))

            * 100

        );

    }

    document
        .getElementById("percent")
        .textContent = percent + "%";

}

/*
--------------------------------------------------
Render
--------------------------------------------------
*/

function render() {

    buildProgress();

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

        if (isNaN(page)) return;

        if (page < 1) page = 1;

        if (page > config.totalPages)
            page = config.totalPages;

        config.currentPage = page;

        render();

    },

    setTotalPages(total) {

        total = Number(total);

        if (isNaN(total)) return;

        if (total < 1)
            total = 1;

        config.totalPages = total;

        if (config.currentPage > total)
            config.currentPage = total;

        render();

    },

    setProgress(page, total) {

        total = Number(total);
        page = Number(page);

        if (isNaN(total) || total < 1)
            return;

        if (isNaN(page) || page < 1)
            page = 1;

        if (page > total)
            page = total;

        config.totalPages = total;
        config.currentPage = page;

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
Keyboard Demo
(Removing later when Jotform controls it)
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
