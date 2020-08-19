interface Score {
    player1Score: number,
    player2Score: number
}

function updateGameScore(player1Score:number, player2Score:number): Score {
    let score:Score = {
        "player1Score": player1Score,
        "player2Score": player2Score
    }
    return score
}

function decideGameWinner(score: Score): string {
    // No winner, if both player have score less than 4
    if (score.player1Score < 4 && score.player2Score < 4)
        return null
    
    // Advantage, if some player have score more than 4, but have 1 point lead
    if (score.player1Score - score.player2Score == 1)
        return 'Advantage Player 1'
    else if (score.player2Score - score.player1Score == 1)
        return 'Advantage Player 2'

    if (score.player2Score > score.player1Score)
        return 'Player 2'
    else if (score.player2Score < score.player1Score)
        return 'Player 1'
    else 
        return 'Deuce'
}

function printScore(playerScore:number[]) {
    let score = updateGameScore(playerScore[0], playerScore[1]);

    let scoreDesc = ['love', 'fifteen', 'thirty', 'forty']
    if (score.player1Score < 4 && score.player2Score < 4) {
        if (score.player1Score == 3 && score.player2Score == 3)
            return 'deuce'
        else
            return '' + scoreDesc[score.player1Score] + ' - ' + scoreDesc[score.player2Score]
    }
        
    if (score.player1Score - score.player2Score == 1)
        return 'advantage player 1'
    else if (score.player2Score - score.player1Score == 1)
        return 'advantage player 2'
    else if (score.player2Score == score.player1Score)
        return 'deuce'
    else // invalid game points 
        return null
}
