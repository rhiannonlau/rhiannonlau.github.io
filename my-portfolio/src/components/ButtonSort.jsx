import '../styles/SearchAndFilter.css'

const FilterButton = () => {
    function sortAlphabetically(array) {
        return array.slice().sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            return titleA.localeCompare(titleB);
        });
    }

    function sortReverseAlphabetically(array) {
        return array.slice().sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            return titleA.localeCompare(titleB) * -1;
        });
    }

    function sortMostRecent(array) {
        return array.slice().sort((a, b) => {
            const idA = a.id;
            const idB = b.id;
            if (idA < idB) {
                return 1;
            }
            else {
                return -1;
            }
        })
    }

    function sortLeastRecent(array) {
        return array.slice().sort((a, b) => {
            const idA = a.id;
            const idB = b.id;
            if (idA < idB) {
                return -1;
            }
            else {
                return 1;
            }
        })
    }

    function sortFinished(array) {
        return array.slice().sort((a, b) => {
            if (a.status == "Finished" && b.status == "In Progress") {
                return -1;
            }

            else if (a.status == "In Progress" && b.status == "Finished") {
                return 1;
            }
        })
    }

    function sortInProgress(array) {
        return array.slice().sort((a, b) => {
            if (a.status == "In Progress" && b.status == "Finished") {
                return -1;
            }

            else if (a.status == "Finished" && b.status == "In Progress") {
                return 1;
            }
        })
    }

    return (
        <button className='btn-sort'>Filter</button>
    )
}

export default FilterButton