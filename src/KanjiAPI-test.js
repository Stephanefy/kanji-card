// let [responseData, setResponseData] = React.useState('')
// let [kanji, setKanji] = React.useState('')     
// // fetches data
// React.useEffect(() => {
//    const fetchData = () => {
//          api.getKanjiDetails()
//        .then((response )=>{
//            setResponseData(response.data) 
//        })
//        .catch((error) => {
//            console.log(error)
//        })
//    }
//    fetchData()
// }, [kanji])

// console.log(kanji)

// let meaning;
// let kunYomi;
// let onYomi;

// if(kanji){ 
//    let tmpMeaning = kanji["meaning"];
//    if(tmpMeaning){
//        meaning = tmpMeaning["english"];
//    }
//    let tmpKunYomi = kanji["kunyomi"];
//    if(tmpKunYomi){
//        kunYomi = tmpKunYomi["hiragana"]
//    }
//    let tmpOnYomi = kanji["onyomi"];
//    if(tmpOnYomi){
//        onYomi = tmpOnYomi["katakana"]
//    }
// }