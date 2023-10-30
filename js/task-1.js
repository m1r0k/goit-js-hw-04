function slugify(title) {
    let lowerTitle=title.toLowerCase();
    let newList = lowerTitle.split(" ");
    let newTitle = newList.join("-");
    return newTitle;
}
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));