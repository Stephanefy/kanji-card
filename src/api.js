import axios from 'axios'
export default {
    getKanjiDetails: () =>
    axios({
        'method':'GET',
        'url':'https://kanjialive-api.p.rapidapi.com/api/public/kanji/親',
        'headers': {
            'x-rapidapi-host':'kanjialive-api.p.rapidapi.com',
            'x-rapidapi-key': "d3c7b49780msh33ff29e567e4cd6p172716jsnf81db91020dd"
        }
    }),

    getKanjiDetailsAll: () => 
    axios({
        'method':'GET',
        'url':'https://kanjialive-api.p.rapidapi.com/api/public/search/advanced?list=mac%253Ac12',
        'headers': {
            'x-rapidapi-host':'kanjialive-api.p.rapidapi.com',
            'x-rapidapi-key': "d3c7b49780msh33ff29e567e4cd6p172716jsnf81db91020dd"
        }
    })
}