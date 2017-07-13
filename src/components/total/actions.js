export const SALE_CHECKED = 'SALE_CHECKED';

export function saleChecked(checked) {
    return {
        type: SALE_CHECKED,
        checked
    }
}
