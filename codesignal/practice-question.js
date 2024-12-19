function solution(numbers) {
    const result = [];
    
    for (let i = 0; i < numbers.length - 2; i++) {
        const a = numbers[i];
        const b = numbers[i + 1];
        const c = numbers[i + 2];
        
        // Check if it's a zigzag: either a < b > c or a > b < c
        if ((a < b && b > c) || (a > b && b < c)) {
            result.push(1);
        } else {
            result.push(0);
        }
    }
    
    return result;
}
