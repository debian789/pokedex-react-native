export default {
    environment: {
        URL_SERVICES:'http://pokeapi.co/api/v2/'
    },
    endpoinds: {
        list_pokemon: 'pokemon/?limit=120&offset=0'
    },
    action: {
        GET_LIST_POKEMON: 'GET_LIST_POKEMON',
        GET_LIST_SUCCESS_POKEMON: 'GET_LIST_SUCCESS_POKEMON',
        GET_LIST_FAIL_POKEMON: 'GET_LIST_FAIL_POKEMON',
    },
}