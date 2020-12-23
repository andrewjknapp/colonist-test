var utils = {
    handlePlayerMovement: (player, app) => {
        // If the player is within the canvas allow to move *OR*
    if (player.y > 0 && player.y < app.height - player.height ||
        // If player is at top boundary, prevent from going upward *OR*
        player.y === 0 && player.direction != -1 ||
        // If player is at bottom boundary, prevent from going downward
        player.y === app.height - player.height && player.direction != 1) {

        player.y += player.direction * player.speed;
    }
    // If the player is above the top, set y to top.
    else if (player.y < 0) {
        player.y = 0;
    }
    // If the player is below the bottom, set y to bottom.
    else if (player.y > app.height - player.height) {
        player.y = app.height - player.height;
    }
}
}