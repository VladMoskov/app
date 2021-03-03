

export const requiredField  = value => {
    if (value) return undefined;
    return console.log('field is required');
}

export const maxLengthCreator = (max) => (value) => {
    if (value && value.length > max) return 'max lenght is ' + max;
    return undefined;
}