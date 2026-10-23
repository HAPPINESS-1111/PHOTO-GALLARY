const btnElem = document.getElementById("loadBtn"); //grab the thml load gallary
const gallarySection = document.getElementById("gallary-box"); //grab the html section


//create a function to fetch the data from the api endpoint

async function loadPhotos() {
    gallarySection.innerHTML = "<p class='desc'>Loading...</p>";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        console.log(response);

        if (!response.ok) {
            throw new Error("server error:" + response.status);
        }
        const photos = await response.json();
        console.log(photos);

        const gallaryCard = photos.map((photo) => {
            return `
            <div class="card">
                <h3 class="photo-title"> ${photo.id}. ${photo.title}</h3>
                <img src="${photo.url}" alt="" class="photo-img">
            </div>
        ` 
        }).join("");
        gallarySection.innerHTML = gallaryCard;
    } catch (error) {
        gallarySection.innerHTML = `<p>somthing went wrong: ${error.message}</p>`
    }
}

btnElem.addEventListener("click", loadPhotos);