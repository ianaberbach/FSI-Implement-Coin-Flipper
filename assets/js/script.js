// Code for tracking head rolls and tails rolls
let headsRolls = 0
let tailsRolls = 0

// Listen for DOMContentLoaded to ensure that all HTML and resources
//  have been loaded before attempting to run code
document.addEventListener('DOMContentLoaded', function () {
    // Make buttons clickable using event listners
    document.getElementById('flip').addEventListener('click', () => {
        // Collect data using Math.random with numbers between 0 an 1
        let flippedHeads = Math.random() < 0.5

        // Have different images showing depending on if heads or tails
        if (flippedHeads) {
            // Picture and message if heads
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'

            // Function to add number to heads
            headsRolls += 1
        }
        else {
            // Picture and messsage if tails
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'

            // Funtion to add number to tails
            tailsRolls += 1
        }

        // Make it so scoreboard changes for each flip

        // Function for finding total number of flips between heads and tails
        let total = headsRolls + tailsRolls

        // Make variables to take in percent of both heads and tails flips
        let percentHeads = 0
        let percentTails = 0

        if (total > 0) {
            percentHeads = Math.round((headsRolls / total) * 100)
            percentTails = Math.round((tailsRolls / total) * 100)
        }

        // Let these values and variables display on the scoreboard
        document.getElementById('heads').textContent = headsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })

    document.getElementById('clear').addEventListener('click', function () {
        // Code for when you hit clear it resets values
        headsRolls = 0
        tailsRolls = 0

        // Message update
        document.getElementById('message').textContent = 'Let\'s Get Rolling!'
 
        let total = headsRolls + tailsRolls

        let percentHeads = 0
        let percentTails = 0

        if (total > 0) {
            percentHeads = Math.round((headsRolls / total) * 100)
            percentTails = Math.round((tailsRolls / total) * 100)
        }

        document.getElementById('heads').textContent = headsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
})