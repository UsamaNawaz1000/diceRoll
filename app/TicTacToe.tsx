import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icons from '../components/ui/icons';

export default function TicTacToe(): React.JSX.Element {
    const [isCross, setIsCross] = React.useState<boolean>(false);
    const [winner, setWinner] = React.useState<string>("");
    const [gameState, setGameState] = React.useState(new Array(9).fill("empty", 0, 9));

    const reloadGame = () => {
        setIsCross(false);
        setWinner("");
        setGameState(new Array(9).fill("empty", 0, 9));
    }

    
    const checkIsWinner = (currentGameState: string[]) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]              // Diagonals
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            
            if (currentGameState[a] !== "empty" && 
                currentGameState[a] === currentGameState[b] && 
                currentGameState[b] === currentGameState[c]) {
                return currentGameState[a];
            }
        }
        
        // Check for draw
        if (!currentGameState.includes("empty")) {
            return "draw";
        }
        
        return null; 
    }

    const onCellPress = (index: number) => {
        if (winner !== "" || gameState[index] !== "empty") {
            return;
        }

        // Update game state with new move
        const newGameState = [...gameState];
        newGameState[index] = isCross ? "cross" : "circle";
        const gameResult = checkIsWinner(newGameState);
        
        if (gameResult) {
            // Game ended - set winner and don't switch turns
            setWinner(gameResult);
            setGameState(newGameState);
        } else {
            // Game continues - update state and switch turns
            setGameState(newGameState);
            setIsCross(!isCross);
        }
    }

    // Get status message
    const getStatusMessage = () => {
        if (winner === "cross") {
            return <Text style={styles.winnerText}>❌ Cross Wins!</Text>;
        } else if (winner === "circle") {
            return <Text style={styles.winnerText}>⭕ Circle Wins!</Text>;
        } else if (winner === "draw") {
            return <Text style={styles.drawText}>It's a Draw! 🤝</Text>;
        } else {
            return (
                <Text style={styles.turnText}>
                    Current Turn: {isCross ? "❌ Cross" : "⭕ Circle"}
                </Text>
            );
        }
    }
    const renderCell = (cellState: string) => {
        switch(cellState) {
            case "cross":
                return <Icons name="cross" />;
            case "circle":
                return <Icons name="circle" />;
            default:
                return <Icons name="empty" />;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tic Tac Toe</Text>
            
            {/* Game Status */}
            <View style={styles.statusContainer}>
                {getStatusMessage()}
            </View>

            {/* Game Board */}
            <View style={styles.board}>
                {gameState.map((cell, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.cell}
                        onPress={() => onCellPress(index)}
                        disabled={winner !== ""}
                    >
                        {renderCell(cell)}
                    </TouchableOpacity>
                ))}
            </View>

            {/* Reload Button */}
            <TouchableOpacity style={styles.reloadButton} onPress={reloadGame}>
                <Text style={styles.reloadButtonText}>New Game</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    statusContainer: {
        marginBottom: 30,
        height: 50,
    },
    turnText: {
        fontSize: 24,
        color: '#666',
    },
    winnerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    drawText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FF9800',
    },
    board: {
        width: 300,
        height: 300,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cell: {
        width: '33.33%',
        height: '33.33%',
        borderWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
    },
    reloadButton: {
        marginTop: 30,
        backgroundColor: '#007AFF',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 25,
    },
    reloadButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});