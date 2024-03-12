console.log("Let's get this party started!");

const $showGif = $("#showGIF");
const $search = $("#search");
const $delete = $("#remove");


const addGif = function(response){
    let numResults = response.data.length;
    if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newGif = $("<img>", {
            src: response.data[randomIdx].images.original.url,
            class: "img-fluid col-md-6" 
        });
        $showGif.append($newGif);
    }
};



$("form").on("submit", async function(e) {
    e.preventDefault();
  
    let searchTerm = $search.val();
    $search.val("");
  
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
      }
    });
    addGif(response.data);
  });
  


// delete gifs

$delete.on('click', function(){
    $showGif.empty();
});