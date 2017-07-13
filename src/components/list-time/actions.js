export const CHOISE_ELEMENT_TIME = 'CHOISE_ELEMENT_TIME';
export const CHANGE_LIST_TIME = 'CHANGE_LIST_TIME';

export function choiceElementTime(itemTime, eventTime) {
    const textElement = eventTime.target.innerHTML;
    const id = itemTime.filter((item) => item.text === textElement)[0].id - 1;
    return {
        type: CHOISE_ELEMENT_TIME,
        itemTime, id, textElement
    };
}

export function changeListTime(checked) {
    return {
        type: CHANGE_LIST_TIME,
        checked
    }
}
