(
    function () {
        const totalTiles = 9;
        const tilesContainer = document.getElementById("tiles-container");
        const shufflebtn = document.getElementById("shuffle");
        const sortBtn = document.getElementById("sortBtn");

        const tilesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        // creating the tiles on DOMContentLoaded
        const onDomContentLoading = function () {
            document.addEventListener("DOMContentLoaded", () => {
                for (let i = 1; i <= totalTiles; i++) {
                    const div = document.createElement("DIV");
                    div.classList.add('tile');
                    div.classList.add('tile' + tilesArray[i]);
                    div.id = 'tile' + tilesArray[i];
                    div.innerHTML = tilesArray[i];
                    tilesContainer.appendChild(div);
                }
            })
        }
        // for tiles shuffling
        const shuffleArray = function (array, isShuffle) {
            if (isShuffle) {
                array.sort(() => Math.random() - 0.5);
            } else {
                array.sort();
            }
            // console.log(array);
            for (let i = 1; i <= totalTiles; i++) {
                let tileId = "tile" + i;
                document.getElementById(tileId).style.order = array[i];
            }

        }

        onDomContentLoading();

        // adding event on shufflebtn
        shufflebtn.addEventListener("click", () => {
            shuffleArray(tilesArray, true);
        });

        // adding event on sort button
        sortBtn.addEventListener("click", () => {
            shuffleArray(tilesArray, false);
        });
    }
)();
