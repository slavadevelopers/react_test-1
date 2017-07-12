export const A_T = 'A_T';

export function aT(list) {
    console.log(list);
    return {
        type: A_T,
        list
    };
}
