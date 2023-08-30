/*++++++++++++++++ News Data Controll :)+++++++++++++*/
// Example news data
const newsData = [
    {
        title: "სკოლა დაიწყო!!!!  ",
        date: "სექტემბერი 15, 2023",
        content: "ესე ამბავი სპარსული, ქართულად ნათარგმანები, ვით მარგალიტი ობოლი, ხელის-ხელ საგოგმანები, ვპოვე და ლექსად გარდავთქვი, საქმე ვქმენ საჭოჭმანები, ჩემმან ხელ-მქმნელმან დამმართოს ლაღმან და ლამაზმან ნები.",
        title2: "ვეფხისტყაოსანი!!!!  ",
        date2: "სექტემბერი 31, 2023",
        content2: "იყო არაბეთს როსტევან, მეფე ღმრთისაგან სვიანი, მაღალი, უხვი, მდაბალი, ლაშქარ-მრავალი, ყმიანი, მოსამართლე და მოწყალე, მორჭმული, განგებიანი, თვით მეომარი უებრო, კვლა მოუბარი წყლიანი.",
        title3: "ლუკა",
        date3: "აგვისტო 25, 2023",
        content3: "სხვა ძე არ ესვა მეფესა, მართ ოდენ მარტო ასული, სოფლისა მნათი მნათობი, მზისაცა დასთა დასული; მან მისთა მჭვრეტთა წაუღის გული, გონება და სული, ბრძენი ხამს მისად მაქებრად და ენა ბევრად ასული.",
        url: "Images/img-test-2.png",
        url2: "Images/img-test.jpg",
        url3: "Images/Test-1.jpeg"
    }
];

function generateNewsArticles1() {
    const newsContainer = document.querySelector(".news-container");

    newsData.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("article");

        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.date}</p>
            <p>${article.content}</p>
            <img src="${article.url}" alt="news images">
        `;

        newsContainer.appendChild(articleElement);
    });
}
function generateNewsArticles2() {
    const newsContainer = document.querySelector(".news-container-2");

    newsData.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("article");

        articleElement.innerHTML = `
            <h2>${article.title2}</h2>
            <p>${article.date2}</p>
            <p>${article.content2}</p>
            <img src="${article.url2}" alt="news images">
        `;

        newsContainer.appendChild(articleElement);
    });
}
function generateNewsArticles3() {
    const newsContainer = document.querySelector(".news-container-3");

    newsData.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("article");

        articleElement.innerHTML = `
            <h2>${article.title3}</h2>
            <p>${article.date3}</p>
            <p>${article.content3}</p>
            <img src="${article.url3}" alt="news images">
        `;

        newsContainer.appendChild(articleElement);
    });
}
window.addEventListener("load", generateNewsArticles3)
window.addEventListener("load", generateNewsArticles1);
window.addEventListener("load", generateNewsArticles2);
/*=============== SCROLL REVEAL ANIMATION ===============*/