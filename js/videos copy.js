const product = [
  {
    id: 20,
    title: "Hello",
    length: 3.5,
    categorie: "Study",
    symbol: "&nbsp",
    // views: "1.8M",
    time: "27 July 2024"
  },
  {
    id: 21,
    title: "Hello",
    length: 3.5,
    categorie: "Study",
    symbol: "&nbsp",
    // views: "1.8M",
    time: "27 July 2024"
  },
  {
    id: 22,
    title: "Hello",
    length: 3.5,
    categorie: "Study",
    symbol: "&nbsp",
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
                              <a href="/watch/${id}.html"><img class="img-fluid" src="source/poster/${id}.png" alt=""></a>
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
};
displayItem(categories);