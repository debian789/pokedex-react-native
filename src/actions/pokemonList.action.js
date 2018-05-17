import constants from '../commons/constants'

export const selected_tab = (id) => {
    debugger
    return {type: constants.action.tab_bar.SELECT_ALL_TAB, index: id}
}
