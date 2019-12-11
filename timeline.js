let months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
];

let startDate = new Date(2019, 0, 1);
let endDate = new Date(2021, 11, 31);
let rowCount = 0;

(function () {
    let timeline = document.getElementById("timeline-el-crazyshit");
    let columnStyle = "auto";
    // Add all our months.
    timeline.appendChild(document.createElement("DIV"));
    for (let y = startDate.getFullYear(); y <= endDate.getFullYear(); y++) {
        for (let m = startDate.getMonth(); m <= endDate.getMonth(); m++) {
            // Add a column for each Year + Month
            let dateColumn = document.createElement("DIV");
            dateColumn.className = "dateheader label";
            dateColumn.innerHTML = months[m] + " " + y;
            timeline.appendChild(dateColumn);
            columnStyle += " auto";
            rowCount++;
        }
    }

    timeline.style.gridTemplateColumns = columnStyle;

    timelineArr.forEach(function (item) {
        // Add our label
        let labelColumn = document.createElement("DIV");
        labelColumn.className = "label";
        labelColumn.innerHTML = item.item;
        timeline.appendChild(labelColumn);

        // Add a column for each year + month
        for (let y = startDate.getFullYear(); y <= endDate.getFullYear(); y++) {
            for (let m = startDate.getMonth(); m <= endDate.getMonth(); m++) {
                let column = document.createElement("DIV");
                column.className = "monthrange";
                if (y === startDate.getFullYear() && m === startDate.getMonth()) {
                    column.className += " firstcolumn";
                }

                if (item == timelineArr[0]) {
                    column.className += " firstrow";
                }

                if (item == timelineArr[timelineArr.length - 1]) {
                    column.className += " lastrow";
                }
                let columnDateStart = new Date(y, m, 1);
                let columnDateEnd = new Date(y, m + 1, 0);
                item.dates.forEach(function (date) {
                    if (
                        date.start.getFullYear() <= y &&
                        date.end.getFullYear() >= y &&
                        date.start.getMonth() <= m &&
                        date.end.getMonth() >= m
                    ) {
                        let shading = document.createElement("DIV");
                        shading.style.backgroundColor = item.color;
                        shading.className = "shading";
                        if (date.start.getMonth() === m && date.start.getDate() === 15) {
                            shading.className += " start half";
                        }
                        if (date.end.getMonth() === m && date.end.getDate() === 15) {
                            shading.className += " end half";
                        }
                        column.appendChild(shading);
                    }
                });

                timeline.appendChild(column);
            }
        }
    });
})();