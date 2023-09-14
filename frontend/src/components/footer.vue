<template>
    <div class="container py-4 py-md-5 px-4 px-md-3 text-body-white">
        <div class="row">
          <div class="col-lg-3 mb-3" id="cont">
            <h3 class="h3">Subscribe</h3>
            <input type="text" name="Subscribe" id="Subscribe" placeholder="email address">
            <button><i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i></button>
            <p>We are thrilled to share with you very valuable vehicle related information for free. Sign up to our newsletter to get yourself in the exclusive list.</p>
          </div>
          <div class="col-6 col-lg-2 offset-lg-1 mb-3">
            <h5 class="header">Links</h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="/">Home</a></li>
              <li class="mb-2"><a href="/Products">Showroom</a></li>
              <li class="mb-2"><a href="/docs/5.3/examples/">Service Center</a></li>
              <li class="mb-2"><a href="/Contact">Contact Us</a></li>
              <li class="mb-2"><a href="https://themes.getbootstrap.com/">forum</a></li>
            </ul>
          </div>
          <div class="col-6 col-lg-2 mb-3">
            <h5 class="header">Guides</h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="/docs/5.3/getting-started/">Getting started</a></li>
              <li class="mb-2"><a href="/docs/5.3/examples/starter-template/">Starter template</a></li>
              <li class="mb-2"><a href="/docs/5.3/getting-started/webpack/">Webpack</a></li>
              <li class="mb-2"><a href="/docs/5.3/getting-started/parcel/">Parcel</a></li>
              <li class="mb-2"><a href="/docs/5.3/getting-started/vite/">Vite</a></li>
            </ul>
          </div>
          <div class="col-6 col-lg-2 mb-3">
            <h5 class="header">Projects</h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="https://github.com/twbs/bootstrap" target="_blank" rel="noopener">Bootstrap 5</a></li>
              <li class="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev" target="_blank" rel="noopener">Bootstrap 4</a></li>
              <li class="mb-2"><a href="https://github.com/twbs/icons" target="_blank" rel="noopener">Icons</a></li>
              <li class="mb-2"><a href="https://github.com/twbs/rfs" target="_blank" rel="noopener">RFS</a></li>
              <li class="mb-2"><a href="https://github.com/twbs/examples/" target="_blank" rel="noopener">Examples repo</a></li>
            </ul>
          </div>
          <div class="col-6 col-lg-2 mb-3">
            <h5 class="header">Community</h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="https://github.com/twbs/bootstrap/issues" target="_blank" rel="noopener">Issues</a></li>
              <li class="mb-2"><a href="https://github.com/twbs/bootstrap/discussions" target="_blank" rel="noopener">Discussions</a></li>
              <li class="mb-2"><a href="https://github.com/sponsors/twbs" target="_blank" rel="noopener">Corporate sponsors</a></li>
              <li class="mb-2"><a href="https://opencollective.com/bootstrap" target="_blank" rel="noopener">Open Collective</a></li>
              <li class="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5" target="_blank" rel="noopener">Stack Overflow</a></li>
            </ul>
          </div>
          </div>
          </div>
        </template>
    
        <style scoped>
        button{
            background-color: maroon;
            padding-inline: 13px;
            height: 35px;
        }
        .h3{
            color: maroon;
            font-weight: bolder;
        }
        p{
            color: white;
        }
        button:hover{
            background-color: gold;
        }
        .container{
            background-color: black;
        }
        li a{
            text-decoration: none;
            color: white;
        }
        li a:hover{
           color: gold;
            transform: scale(1.1);
        }
        #Subscribe{
          height: 35px;
        }
        #cont{
    background-color: grey;
    height: 200px;
        }
        .header{
            color: maroon;
            font-weight: bolder;
            margin: auto;
        }
        </style>