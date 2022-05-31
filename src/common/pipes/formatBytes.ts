export function formatBytes(value: string | number): string {
    const mb = Math.pow(2, 20);
    const kb = Math.pow(2, 10);
    const gb = Math.pow(2, 30);
    const tb = Math.pow(2, 40);
    let numberValue = 0;

    if (typeof value === "string") {
        numberValue = parseInt(value as string);
    } else {
        numberValue = value;
    }

    if (numberValue < kb) {
        return `${value}B`;
    } else if (numberValue < mb) {
        return `${Math.floor(numberValue / kb)}KB`;
    } else if (numberValue < gb) {
        return `${Math.floor(numberValue / mb)}MB`;
    } else if (numberValue < tb) {
        return `${Math.floor(numberValue / gb)}GB`;
    } else {
        return `${Math.floor(numberValue / tb)}TB`;
    }
}
