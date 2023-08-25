const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const search = document.querySelector("#search");
const moviebox = document.querySelector("#movie-box");

const getMovies = async (api) => {
  const responce = await fetch(api);
  const data = await responce.json();
  showMovies(data.results);
};
getMovies(APIURL);

const showMovies = (data) => {
     moviebox.innerHTML=""

  data.forEach((item) => {
    const show = document.createElement("div");
    show.classList.add("box");
    show.innerHTML = `
    
        <img src="${IMGPATH + item.poster_path}" alt="" />
                     <div class="overlay">
                      <div class="title">
                       <h2> ${item.original_title}  </h2>
                        <span> ${item.vote_average} <span>
                    </div>
                     <h3>Overview:</h3>
                        <p>
                            ${item.overview}
                        </p>
                     </div>
        `;
      
        moviebox.appendChild(show)
  });
 
};


search.addEventListener('keyup',function(e){
    if(e.target.value !=""){
        getMovies(SEARCHAPI+e.target.value)
        
       
    }else{
       getMovies(APIURL)
    }
})





















//     const movieBox=document.querySelector("#movie-box")
//     const getMovies=async(api)=>{

// const responce=await fetch(api)
// const data=await responce.json()
// showMovies(data.results)
//     }
//     const showMovies=(data)=>{
//         movieBox.innerHTML=""
//         data.forEach((item)=>{

//         console.log(IMGPATH+ item.poster_path)
//             const box=document.createElement("div")
//             box.classList.add("box")
//             box.innerHTML=`
//             <img src="${IMGPATH + item.poster_path}" alt="" />
//             <div class="overlay">
//                 <div class="title">
//                     <h2> ${item.original_title}  </h2>
//                     <span> ${item.vote_average} <span>
//                 </div>
//                 <h3>Overview:</h3>
//                 <p>
//                     ${item.overview}
//                 </p>
//              </div>

//             `;
//             movieBox.appendChild(box)
//         })
//     }
//     document.querySelector("#search").addEventListener("keyup",
//     function(e){
// if(e.target.value !=""){
//     getMovies(SEARCHAPI + e.target.value)
// }else{
//     getMovies(APIURL)

// }
//     })
//     getMovies(APIURL)

// // )  <img src="${IMGPATH+result}" alt="" />
// <div class="overlay">
// <h2>Overview:</h2>
// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis iste doloribus quam voluptatum, illum unde nostrum dignissimos, mollitia, sapiente porro natus neque cupiditate distinctio quod possimus aliquid reiciendis vel. Soluta?
// </div>
// </div>
