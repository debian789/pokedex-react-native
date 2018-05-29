export default {
    environment: {
        URL_SERVICES:'http://pokeapi.co/api/v2/',
        URL_IMAGE: item => (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item}.png`),
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
        
        GET_DETAIL_MOVESET_POKEMON: 'GET_DETAIL_MOVESET_POKEMON',
        GET_DETAIL_MOVESET_SUCCESS_POKEMON: 'GET_DETAIL_MOVESET_SUCCESS_POKEMON',
        GET_DETAIL_MOVESET_FAIL_POKEMON: 'GET_DETAIL_MOVESET_FAIL_POKEMON',

        CLEAR_DETAIL_EVOLUTION_POKEMON: 'CLEAR_DETAIL_EVOLUTION_POKEMON',
        GET_DETAIL_EVOLUTION_POKEMON: 'GET_DETAIL_EVOLUTION_POKEMON',
        GET_DETAIL_EVOLUTION_SUCCESS_POKEMON: 'GET_DETAIL_EVOLUTION_SUCCESS_POKEMON',
        GET_DETAIL_EVOLUTION_FAIL_POKEMON: 'GET_DETAIL_EVOLUTION_FAIL_POKEMON',

        GET_DETAIL_POKEMON: 'GET_DETAIL_POKEMON',
        GET_DETAIL_SUCCESS_POKEMON: 'GET_DETAIL_SUCCESS_POKEMON',
        GET_DETAIL_FAIL_POKEMON: 'GET_DETAIL_FAIL_POKEMON',

        UPDATE_LIST_SUCCESS_POKEMON: 'UPDATE_LIST_SUCCESS_POKEMON',        
        navegation: {
            GET_CONTEXT_NAVIGATION:'GET_CONTEXT_NAVIGATION',
            DETAIL_POKEMON:'DETAIL_POKEMON',
        }
    },
    colors: {
        dark_colors: ['#0071B8','#7E72AC','#BCC1C6','#BF9569','#C33766','#F78019','#645B75','#9E00AD','#BE9A6A'],
        light_colors: ['#BFEBDB','#C2DEDE','#92CFCC','#B2E3B3','#D2F4BF','#D0C2E3','#F9C4BF','#ECCFC6','#EFB0A6',
                        '#FDFB78','#E1E7F4','#FFF597','#F4E5C7','#F6E9D4','#EEFBF9','#CCD2E3','#6F86A5','#E1E7F4','#DCECE4','#CCD2E3','#DCDDAA','#BF9569','#C33766','#7E72AC']
    }
}