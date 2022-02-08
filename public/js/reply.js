const addReply = async (event) => {
    let id = event.target.className;
    // document.location.replace(`/forum/${id}`)
}

document.querySelector('.forumholder').addEventListener("click", addReply);