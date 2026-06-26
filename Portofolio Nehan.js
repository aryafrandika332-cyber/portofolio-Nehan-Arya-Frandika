function welcome(){
    alert("Selamat datang di Portofolio Arya!");
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(
            this.getAttribute('href')
        ).scrollIntoView({
            behavior:'smooth'
        });
    });
});


const commentForm = document.getElementById("commentForm");
const commentList = document.getElementById("commentList");

commentForm.addEventListener("submit", function(e){

    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const pesan = document.getElementById("pesan").value;

    const komentar = document.createElement("div");

    komentar.classList.add("comment-box");

    komentar.innerHTML = `
        <h4>${nama}</h4>
        <p>${pesan}</p>
    `;

    commentList.prepend(komentar);

    commentForm.reset();
});
const eduTitle = document.querySelectorAll(".edu-title");

eduTitle.forEach(item => {

    item.addEventListener("click", () => {

        const content = item.nextElementSibling;

        content.classList.toggle("active");

    });

});