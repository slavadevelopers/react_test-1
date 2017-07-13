export const CHOISE_ELEMENT = 'CHOISE_ELEMENT';
export const CHANGE_INPUT_LIST = 'CHANGE_INPUT_LIST';

export function choiceElement(item, event) {
    const textElement = event.target.innerHTML;
    const id = item.filter((item) => item.text === textElement)[0].id - 1;
    return {
        type: CHOISE_ELEMENT,
        item, id, textElement
    };
}

export function changeInputList(checked) {

    return {
        type: CHANGE_INPUT_LIST,
        checked
    }
}
