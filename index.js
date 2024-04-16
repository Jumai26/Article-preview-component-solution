const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const avatar = document.getElementById("avatar");
const socialMedia = document.getElementById("social-media")

addBtn.addEventListener('click', () => {
    avatar.classList.add("hidden");
    socialMedia.classList.remove("hidden");
})

removeBtn.addEventListener('click', () => {
    avatar.classList.remove("hidden");
    socialMedia.classList.add("hidden");
})
