
// 알림창
//alert("알림창")
// 모달창을 대신 이용하기도 함.

const movieTitle = "스티치"
const movieGenre = "애니메이션"
const movieRating = "9.2"

if(movieRating >= 9){
    console.log("명작")
}
else if(movieRating >= 7){
    console.log("볼만함")
}
else {
    console.log("비추")
}

const ratingBadge = movieRating ? `⭐${movieRating}` : "";
console.log(`오늘의 영화:: ${movieTitle} ⭐${movieRating}`)


