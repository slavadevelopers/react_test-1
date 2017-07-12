export const CHOISE_ELEMENT = 'CHOISE_ELEMENT';

export function choiceElement(item, event) {
    const textElement = event.target.innerHTML;
    const id = item.filter((item) => item.text === textElement)[0].id - 1;

    return {
        type: CHOISE_ELEMENT,
        item, id
    };
}
