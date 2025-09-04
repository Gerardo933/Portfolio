export function extractInteger(value: string): number {
    if (typeof value !== 'string') {
        return 0;
    }

    const baseFontSize = 16; // Tamaño base en píxeles para 1rem
    const regex = /^(\d+)(px|%|rem)?$/;
    const match = value.match(regex);

    if (!match) {
        return 0;
    }

    const numericValue = parseInt(match[1], 10);
    const unit = match[2];

    switch (unit) {
        case 'px':
            return numericValue;
        case 'rem':
            return numericValue * baseFontSize;
        case '%':
            return numericValue;
        default:
            return numericValue;
    }
}