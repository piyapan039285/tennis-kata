/**
 * Score interface containing player tennis scores.
 */
export interface Score {
    player1Score: number,
    player2Score: number
}

/**
 * Create Score object from player score.
 * 
 * @param player1Score  score of first player.
 * @param player2Score  score of second player.
 * @returns      Score object
 */
export function updateGameScore(player1Score:number, player2Score:number): Score {
    let score:Score = {
        "player1Score": player1Score,
        "player2Score": player2Score
    }
    return score
}

/**
 * Return winner player based on Score object.
 * 
 * @param score  score object.
 * @returns      winner player name ('Player 1', 'Player 2'). Return 'Deuce' if score is equal. Return 'Advantage Player 1', 'Advantage Player 2' if score difference is equal to 1 and one of player get score more than 4.
 */
export function decideGameWinner(score: Score): string | null{
    // No winner, if both player have score less than 4
    if (score.player1Score < 4 && score.player2Score < 4)
        return null
    
    // Advantage, if some player have score more than 4, but have 1 point lead
    if (score.player1Score - score.player2Score == 1)
        return 'Advantage Player 1'
    else if (score.player2Score - score.player1Score == 1)
        return 'Advantage Player 2'

    // Return winner player or deuce if score is equal.
    if (score.player2Score > score.player1Score)
        return 'Player 2'
    else if (score.player2Score < score.player1Score)
        return 'Player 1'
    else 
        return 'Deuce'
}

/**
 * Return score string based on player score.
 * 
 * @param score  int score array (Ex. [1, 3]).
 * @returns      score string (Ex. 'thirty-love') Return 'deuce' if both player get score=3. Return 'advantage player 1', 'advantage player 2' if score difference is equal to 1 and one of player get score more than 4.
 */
export function printScore(playerScore:number[]): string | null {
    // create score object.
    let score = updateGameScore(playerScore[0], playerScore[1]);

    // case 1: return score string if both player have score less than 4
    let scoreDesc = ['love', 'fifteen', 'thirty', 'forty']
    if (score.player1Score < 4 && score.player2Score < 4) {
        if (score.player1Score == 3 && score.player2Score == 3)
            return 'deuce'
        else
            return '' + scoreDesc[score.player1Score] + ' - ' + scoreDesc[score.player2Score]
    }
    
    // case 2: return advantage string if some player have score >= 4
    if (score.player1Score - score.player2Score == 1)
        return 'advantage player 1'
    else if (score.player2Score - score.player1Score == 1)
        return 'advantage player 2'
    else if (score.player2Score == score.player1Score)
        return 'deuce'
    else // invalid game points 
        return null
}
