export const CHOISE_ELEMENT_TIME = 'CHOISE_ELEMENT_TIME';

export function choiceElementTime(itemTime, eventTime) {
    const textElement = eventTime.target.innerHTML;
    const id = itemTime.filter((item) => item.text === textElement)[0].id - 1;

    return {
        type: CHOISE_ELEMENT_TIME,
        itemTime, id
    };
}
