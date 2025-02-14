document.querySelector('head').innerHTML = `
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="Askbootstrap">
<meta name="author" content="Askbootstrap">
<title>FaoTube - free video</title>
<!-- Favicon Icon -->
<link rel="icon" type="/image/png" href="/img/favicon.png">
<!-- Bootstrap core CSS-->
<link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<!-- Custom fonts for this template-->
<link href="/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
<!-- Custom styles for this template-->
<link href="/css/osahan.css" rel="stylesheet">
<!-- Owl Carousel -->
<link rel="stylesheet" href="/vendor/owl-carousel/owl.carousel.css">
<link rel="stylesheet" href="/vendor/owl-carousel/owl.theme.css">`


document.querySelector('#mobile-menu').innerHTML = `
<ul class="bottom-navbar-nav">
<li class="bottom-nav-item active">
<a href="index.html" class="bottom-nav-link">
<i class="fas fa-fw fa-home"></i>
<span>Home</span>
</a>
</li>
<li class="bottom-nav-item">
<a href="channels.html" class="bottom-nav-link">
<i class="fas fa-fw fa-users"></i>
<span>Hot</span>
</a>
</li>
<li class="bottom-nav-item">
<a href="single-channel.html" class="bottom-nav-link">
<i class="fas fa-fw fa-user-alt"></i>
<span>Channel</span>
</a>
</li>
<li class="bottom-nav-item">
<a href="video-page.html" class="bottom-nav-link">
<i class="fas fa-fw fa-video"></i>
<span>Video</span>
</a>
</li>
<li class="bottom-nav-item">
<a href="upload-video.html" class="bottom-nav-link">
<i class="fas fa-fw fa-cloud-upload-alt"></i>
<span>Upload</span>
</a>
</li>
</ul>`


document.querySelector('#navbar').innerHTML = `
      &nbsp;&nbsp; 
      <button class="btn btn-link btn-sm text-secondary order-1 order-sm-0" id="sidebarToggle">
      <i class="fas fa-bars"></i>
      </button> &nbsp;&nbsp;
      <a class="navbar-brand mr-1" href="/index.html"><img class="img-fluid logo" alt="" src="/img/logo.png"></a>
      <!-- Navbar Search -->
      <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search">
         <div class="input-group">
            <input type="text" class="form-control" placeholder="Search for...">
            <div class="input-group-append">
               <button class="btn btn-light" type="button">
               <i class="fas fa-search"></i> 
               </button>
            </div>
         </div>
      </form>
      <!-- Navbar -->
      <ul class="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
         <li class="nav-item mx-1">
            <a class="nav-link" href="upload.html">
            <i class="fas fa-plus-circle fa-fw"></i>
            Upload Video
            </a>
         </li>
         <li class="nav-item dropdown no-arrow mx-1">
            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-bell fa-fw"></i>
            <span class="badge badge-danger">9+</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
               <a class="dropdown-item" href="#"><i class="fas fa-fw fa-edit "></i> &nbsp; Action</a>
               <a class="dropdown-item" href="#"><i class="fas fa-fw fa-headphones-alt "></i> &nbsp; Another action</a>
               <div class="dropdown-divider"></div>
               <a class="dropdown-item" href="#"><i class="fas fa-fw fa-star "></i> &nbsp; Something else here</a>
            </div>
         </li>
         <li class="nav-item dropdown no-arrow mx-1">
            <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-envelope fa-fw"></i>
            <span class="badge badge-success">7</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
               <a class="dropdown-item" href="#"><i class="fas fa-fw fa-edit "></i> &nbsp; Action</a>
               <a class="dropdown-item" href="#"><i class="fas fa-fw fa-headphones-alt "></i> &nbsp; Another action</a>
               <div class="dropdown-divider"></div>
               <a class="dropdown-item" href="#"><i class="fas fa-fw fa-star "></i> &nbsp; Something else here</a>
            </div>
         </li>
         <li class="nav-item dropdown no-arrow osahan-right-navbar-user">
            <a class="nav-link dropdown-toggle user-dropdown-link" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img alt="Avatar" src="/img/sihab.jpg">
            user 
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
               <a class="dropdown-item" href="account.html"><i class="fas fa-fw fa-user-circle"></i> &nbsp; My Account</a>
               <a class="dropdown-item" href="subscriptions.html"><i class="fas fa-fw fa-video"></i> &nbsp; Subscriptions</a>
               <a class="dropdown-item" href="settings.html"><i class="fas fa-fw fa-cog"></i> &nbsp; Settings</a>
               <div class="dropdown-divider"></div>
               <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal"><i class="fas fa-fw fa-sign-out-alt"></i> &nbsp; Logout</a>
            </div>
         </li>
      </ul>`


document.querySelector('#slidebar').innerHTML = `
         <li class="nav-item active">
            <a class="nav-link" href="/index.html">
            <i class="fas fa-fw fa-home"></i>
            <span>Home</span>
            </a>
         </li>
         <li class="nav-item">
            <a class="nav-link" href="/channels.html">
            <i class="fas fa-fw fa-users"></i>
            <span>Channels</span>
            </a>
         </li>
         <li class="nav-item">
            <a class="nav-link" href="/single-channel.html">
            <i class="fas fa-fw fa-user-alt"></i>
            <span>Single Channel</span>
            </a>
         </li>
         <li class="nav-item">
            <a class="nav-link" href="/live.html">
            <i class="fas fa-fw fa-video"></i>
            <span>Live</span>
            </a>
         </li>
         <li class="nav-item">
            <a class="nav-link" href="/upload-video.html">
            <i class="fas fa-fw fa-cloud-upload-alt"></i>
            <span>Upload Video</span>
            </a>
         </li>
         <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-fw fa-folder"></i>
            <span>Balance</span>
            </a>
            <div class="dropdown-menu">
               <h6 class="dropdown-header">Banance :</h6>
               <a class="dropdown-item" href="/wallet.html">wallet</a>
               <a class="dropdown-item" href="/retail.html">retail</a>
               <a class="dropdown-item" href="/converter.html">byte converter</a>
            </div>
         </li>
         <li class="nav-item">
            <a class="nav-link" href="/history-page.html">
            <i class="fas fa-fw fa-history"></i>
            <span>History Page</span>
            </a>
         </li>
         <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="categories.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-fw fa-list-alt"></i>
            <span>Wish</span>
            </a>
            <div class="dropdown-menu">
               <a class="dropdown-item" href="/categories.html">Movie</a>
               <a class="dropdown-item" href="/categories.html">Music</a>
               <a class="dropdown-item" href="/categories.html">Television</a>
            </div>
         </li>
         <li class="nav-item channel-sidebar-list">
            <h6>SUBSCRIPTIONS</h6>
            <ul>
               <li>
                  <a href="subscriptions.html">
                  <img class="img-fluid" alt="" src="/img/sihab.jpg"> Gaming
                  </a>
               </li>
               <li>
                  <a href="subscriptions.html">
                  <img class="img-fluid" alt="" src="/img/sihab.jpg"> Technology  <span class="badge badge-warning">2</span>
                  </a>
               </li>
               <li>
                  <a href="subscriptions.html">
                  <img class="img-fluid" alt="" src="/img/sihab.jpg"> Product / Service  
                  </a>
               </li>
            </ul>
         </li>`