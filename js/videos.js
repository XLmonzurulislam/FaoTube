const product = [
  {
    id: "07LSS",
    title: "Dag Lagaiya Ontore - Rap Song",
    length: 2.56,
    categorie: "Song",
    symbol: "&#9996",
    // views: "1.8M",
    time: "27 July 2024"
  },
  {
    id: "07LST",
    title: "Half Pant Poira Kala Chosma Lagaiya",
    length: 2.10,
    categorie: "Song",
    symbol: "&#9996",
    // views: "1.8M",
    time: "27 July 2024"
  },
];


const categories = [...new Set(product.map((item) => { return item }))]


const displayItem = (items) => {
document.getElementById('tag').innerHTML = items.map((item) => {
    var { id, length, title, categorie,symbol, views, time} = item;
    return (
`                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="video-card">
                           <div class="video-card-image">
                              <a class="play-icon" href="/watch/${id}.html"><i class="fas fa-play-circle"></i></a>
                              <a href="/watch/${id}.html"><img class="img-fluid" src="/source/poster/${id}.jpg" alt=""></a>
                              <div class="time">${length}</div>
                           </div>
                           <div class="video-card-body">
                              <div class="video-title">
                                 <a href="/watch/${id}.html">${title}</a>
                              </div>
                              <div class="video-page text-success">
                                 ${categorie}  <a title="" data-placement="top" data-toggle="tooltip" href="/watch/${id}.html" data-original-title="Verified"><i class="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div class="video-view">
                                 ${views} views ${symbol};<i class="fas fa-calendar-alt"></i> ${time}
                              </div>
                           </div>
                        </div>
                     </div>`
    )
}).join('')






document.getElementById('video').innerHTML = items.map((item) => {
  var { id, length, title, categorie,symbol, views, time} = item;
  return (
`
                     <div class="single-video">
                        <iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/8LWZSGNjuF0?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                     </div>
                     <div class="single-video-title box mb-3">
                        <h2><a href="#">Contrary to popular belief, Lorem Ipsum (2019) is not.</a></h2>
                        <p class="mb-0"><i class="fas fa-eye"></i> 2,729,347 views</p>
                     </div>
                     <div class="single-video-author box mb-3">
                        <div class="float-right"><button class="btn btn-danger" type="button">Subscribe <strong>1.4M</strong></button> <button class="btn btn btn-outline-danger" type="button"><i class="fas fa-bell"></i></button></div>
                        <img class="img-fluid" src="img/s4.png" alt="">
                        <p><a href="#"><strong>Osahan Channel</strong></a> <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i class="fas fa-check-circle text-success"></i></span></p>
                        <small>Published on Aug 10, 2018</small>
                     </div>
                     <div class="single-video-info-content box mb-3">
                        <h6>Cast:</h6>
                        <p>Nathan Drake , Victor Sullivan , Sam Drake , Elena Fisher</p>
                        <h6>Category :</h6>
                        <p>Gaming , PS4 Exclusive , Gameplay , 1080p</p>
                        <h6>About :</h6>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved overVarious versions have evolved over the years, sometimes </p>
                        <h6>Tags :</h6>
                        <p class="tags mb-0">
                           <span><a href="#">Uncharted 4</a></span>
                           <span><a href="#">Playstation 4</a></span>
                           <span><a href="#">Gameplay</a></span>
                           <span><a href="#">1080P</a></span>
                           <span><a href="#">ps4Share</a></span>
                           <span><a href="#">+ 6</a></span>
                        </p>
                     </div>
                  `
  )
}).join('')









};
displayItem(categories);