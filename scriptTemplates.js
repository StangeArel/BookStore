function getBookTemplate(i) {
    return /* HTML */ `
<div class="aboutThisBook">
    <h1>${books[i].name}</h1>
    <div class="separator"></div>
    <img class="imgBook" src="./imgs/book.png" alt="img.Buch ">
    <div class="separator"></div>
    <div class="likesPriceAuthor">
        <div class="priceAndlikesContainer">
            <div class="priceObject">${books[i].price.toFixed(2)} €</div>
            <div class="likesHeart">${books[i].likes} ${getLikeImg(i)}
            </div>
        </div>
    </div>
    <div class="autorObject">
        <table class="responsiveTable">
            <tr>
                <td>Author</td>
                <td><b>: ${books[i].author}</b></td>
            </tr>
            <tr>
                <td>Erscheinungsjahr</td>
                <td><b>: ${books[i].publishedYear}</b></td>
            </tr>
            <tr>
                <td>Genre</td>
                <td><b>: ${books[i].genre}</b></td>
            </tr>
        </table>
    </div>
    <div class="separator"></div>
    <div class="visibleScrollbar">
        ${getComments(i)}
    </div>
    <div class="submitComment">
        <input class="commentSubmit" id="commentSubmit${i}" type="text" placeholder="Schreibe dein Kommentar...">
        <img onclick="addComment(${i})" class="iconCommentSubmit" src="./imgs/paper_planer_icon.png"
            alt="icon.paper_planer_submit">
    </div>
</div>`
}