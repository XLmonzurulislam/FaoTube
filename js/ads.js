document.querySelector('#ads-1').innerHTML = `
<a target="_blank" href="https://grabify.link/UR1R9P" ><img src="/source/ads/ads.jpg" alt="" style="width:100%"; height:auto></a>`
// advertise visitor tracking https://grabify.link/track/O7S5RU

document.querySelector('#ads-2').innerHTML = `
<a target="_blank" href="https://grabify.link/UR1R9P" ><img src="/source/ads/ads.jpg" alt="" style="width:100%"; height:auto></a>`

document.querySelector('#ads-3').innerHTML = `
<a target="_blank" href="https://grabify.link/UR1R9P" ><img src="/source/ads/ads.jpg" alt="" style="width:100%"; height:auto></a>`
// document.querySelector('#ads-2').innerHTML = `
// <div class="img">
//   Google AdSense<br>
//   336 x 280
// </div>`









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
  {
    id: 20,
    title: "Hello",
    length: 3.5,
    categorie: "Study",
    symbol: "&nbsp;",
    // views: "1.8M",
    time: "27 July 2024"
  },
  {
    id: 20,
    title: "Hello",
    length: 3.5,
    categorie: "Study",
    symbol: "&nbsp;",
    // views: "1.8M",
    time: "27 July 2024"
  },
  {
    id: 20,
    title: "Hello",
    length: 3.5,
    categorie: "Study",
    symbol: "&nbsp;",
    // views: "1.8M",
    time: "27 July 2024"
  },
  {
    id: 20,
    title: "Hello",
    length: 3.5,
    categorie: "Study",
    symbol: "&nbsp;",
    // views: "1.8M",
    time: "27 July 2024"
  },
  {
    id: 20,
    title: "Hello",
    length: 3.5,
    categorie: "Study",
    symbol: "&nbsp;",
    // views: "1.8M",
    time: "27 July 2024"
  },
  {
    id: 20,
    title: "Hello",
    length: 3.5,
    categorie: "Study",
    symbol: "&nbsp;",
    // views: "1.8M",
    time: "27 July 2024"
  },
  {
    id: 20,
    title: "Hello",
    length: 3.5,
    categorie: "Study",
    symbol: "&nbsp;",
    // views: "1.8M",
    time: "27 July 2024"
  },
  {
    id: 20,
    title: "Hello",
    length: 3.5,
    categorie: "Study",
    symbol: "&nbsp;",
    // views: "1.8M",
    time: "27 July 2024"
  },
];


const categories = [...new Set(product.map((item) => { return item }))]


const displayItem = (items) => {
document.getElementById('sugest').innerHTML = items.map((item) => {
    var { id, length, title, categorie,symbol, views, time} = item;
    return (`
       <div class="video-card video-card-list">
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
                ${views} views ${symbol}<i class="fas fa-calendar-alt"></i> ${time}
             </div>
          </div>
       </div>`
    )
}).join('')




};
displayItem(categories);