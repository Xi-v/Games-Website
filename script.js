document.addEventListener("DOMContentLoaded", function () {
    // Get DOM elements
    const searchInput = document.getElementById("game");
    const gameLinks = document.querySelectorAll(".list a");
    const parentElement = document.querySelector('.list');

    // Save the initial HTML structure for restoration
    const initialListHTML = parentElement.innerHTML;

    // Add event listener for search input
    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        // If search bar is empty, restore the original list
        if (searchText === "") {
            parentElement.innerHTML = initialListHTML;
            gameLinks.forEach(link => {
                link.classList.remove('fade');
                link.style.display = '';
            });
            return;
        }

        // Clear the list to repopulate
        parentElement.innerHTML = '';

        // Filter and display matching games
        gameLinks.forEach((link, index) => {
            const gameName = link.textContent.toLowerCase();

            if (gameName.startsWith(searchText)) {
                // Show matching games
                link.style.display = '';
                link.classList.remove('fade');
                
                // Add the link
                parentElement.appendChild(link);
                
                // Add a line break after each link
                const br = document.createElement('br');
                parentElement.appendChild(br);
            } else {
                // Hide non-matching games
                link.style.display = 'none';
                link.classList.add('fade');
            }
        });
    });
});