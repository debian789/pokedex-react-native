export default {
    environment: {
        URL_SERVICES:'http://pokeapi.co/api/v2/',
        PAGINATION: {
            limit: 20,
            offset: 0
        }
    },
    endpoinds: {
        LIST_POKEMON: (offset) => `pokemon/?limit=40&offset=${offset}`
    },
    action: {
        GET_LIST_POKEMON: 'GET_LIST_POKEMON',
        GET_LIST_SUCCESS_POKEMON: 'GET_LIST_SUCCESS_POKEMON',
        GET_LIST_FAIL_POKEMON: 'GET_LIST_FAIL_POKEMON',
        GET_NEXT_OFFSET: 'GET_NEXT_OFFSET',
        UPDATE_LIST_SUCCESS_POKEMON: 'UPDATE_LIST_SUCCESS_POKEMON',        
        navegation: {
            GET_CONTEXT_NAVIGATION:'GET_CONTEXT_NAVIGATION'
        },
        tab_bar: {
            SELECT_ALL_TAB: 'SELECT_ALL_TAB',
            SELECT_CAUGHT_TAB: 'SELECT_CAUGHT_TAB'
        }
    },
}