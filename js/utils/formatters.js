/**
 * Formats a Date object or date string into a human-readable string (e.g., "Nov 3, 2022").
 * @param {Date|string} dateInput - The date to format.
 * @returns {string} The formatted date string.
 */
export function formatDate(dateInput) {
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) return 'Unknown Date';
    
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(date);
}

/**
 * Creates a comma-separated string from an array of strings.
 * @param {string[]} list - The list of strings.
 * @returns {string} The comma-separated string.
 */
export function formatList(list) {
    return list.join(', ');
}
