var utils = {
    handlePlayerMovement: (player, app) => {
        const playerIsWithinCanvas = player.y > 0 && player.y < app.height - player.height;
        const playerIsAtTop =  player.y === 0;
        const playerIsGoingDown = player.direction != -1;
        const playerIsAtBottom = player.y === app.height - player.height;
        const playerIsGoingUp = player.direction != 1;


        const playerIsAboveTop = player.y < 0;
        const playerIsBelowBottom = player.y > app.height - player.height;

        if (playerIsWithinCanvas ||
            playerIsAtTop && playerIsGoingDown ||
            playerIsAtBottom && playerIsGoingUp) {

            player.y += player.direction * player.speed;
        }
        else if (playerIsAboveTop) {
            player.y = 0;
        }
        else if (playerIsBelowBottom) {
            player.y = app.height - player.height;
        }
    },

    ballIsHittingPlayerPaddle: (ballNode, playerNode) => {
        const playerIsOnLeft = playerNode.position === "left";

        const ballTop = ballNode.y;
        const ballBottom = ballNode.y + ballNode.height;
        const ballRight = ballNode.x + ballNode.width;
        const ballLeft = ballNode.x;

        const playerPaddleTop = playerNode.y;
        const playerPaddleBottom = playerNode.y + playerNode.height;
        const playerPaddleRight = playerNode.x + playerNode.width;
        const playerPaddleLeft = playerNode.x;

        let ballIsHitting = true;

        if (ballBottom < playerPaddleTop)  {
            ballIsHitting = false;
        }

        if (ballTop > playerPaddleBottom) {
            ballIsHitting = false;
        }
        
        if (playerIsOnLeft) {
            if (ballLeft > playerPaddleRight || ballLeft < playerPaddleLeft) {
                ballIsHitting = false;
            }
        } else {
            if (ballRight < playerPaddleLeft || ballRight > playerPaddleRight) {
                ballIsHitting = false;
            }
        }

        return ballIsHitting;
    },

    bounceBallOffPlayerPaddle: (ball, player) => {

        ball.dx *= -1.1;

        const locationOnPaddle = player.y - ball.y;

        if (locationOnPaddle > -(player.height / 2)) {
            ball.dy = -(Math.random() * 5) - Math.abs(ball.dy)

        } else {
            ball.dy = (Math.random() * 5) + Math.abs(ball.dy);

        }
    }

}