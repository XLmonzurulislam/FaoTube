const product = [
  ];
  for(var i=1; i<100; i++){
    product.push({ id: i })
  }
  

const categories = [...new Set(product.map((item) => { return item }))]


const displayItem = (items) => {
  document.getElementById('tag').innerHTML = items.map((item) => {
      var { id, title, price } = item;
      return (
          `<div class="col-xl-3 col-sm-6 mb-3">
<div class="video-card">
   <div class="video-card-image">
      <a class="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
      <a href="#"><img class="img-fluid" src="img/v6.png" alt=""></a>
      <div class="time">3:50</div>
   </div>
   <div class="video-card-body">
      <div class="video-title">
         <a href="#">There are many variations of passages of Lorem</a>
      </div>
      <div class="video-page text-danger">
         Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i class="fas fa-frown text-danger"></i></a>
      </div>
      <div class="video-view">
         1.8M views &nbsp;<i class="fas fa-calendar-alt"></i> 11 Months ago
      </div>
   </div>
</div>
</div>`
      )
  }).join('')
};
displayItem(categories);






var V1 = ``


for(var i=1; i<100; i++){
var math = Math.random()*100;
var n = math.toPrecision(2)
console.log(n);
    var a = `#T${i}`
    document.querySelector(a).innerHTML = V1;
  }