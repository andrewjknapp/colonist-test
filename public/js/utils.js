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

        const ballIsAbovePaddle = ballNode.y + ballNode.height < playerNode.y;
        const ballIsBelowPaddle = ballNode.y > playerNode.y + playerNode.height;

        let ballIsInfrontOfPaddle;
        let ballIsBehindPaddle;

        if (playerIsOnLeft) {
            ballIsInfrontOfPaddle = ballNode.x > playerNode.x + playerNode.width;
            ballIsBehindPaddle = ballNode.x < playerNode.x;
        }  else {
            ballIsInfrontOfPaddle = ballNode.x + ballNode.width < playerNode.x;
            ballIsBehindPaddle = ballNode.x + ballNode.width > playerNode.x + playerNode.width;
        }

        let ballIsHitting = true;

        if (ballIsAbovePaddle ||
            ballIsBelowPaddle ||
            ballIsInfrontOfPaddle ||
            ballIsBehindPaddle)  {

            ballIsHitting = false;
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
    },
    handleBallHittingCeilingAndFloor(ball) {
        const ballIsHittingCeiling = ball.y <= 0;
        const ballIsHittingFloor = ball.y >= (app.height - ball.height);
        
        if (ballIsHittingCeiling || ballIsHittingFloor) {
            ball.dy *= -1;
        }
    }

}