export function getFormattedKeyName(key) {
    return key
        .replace(/_/g, ' ')
        .replace(/^./, char => char.toUpperCase());
}
