<template>
    <!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Untitled</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
    <div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                  <div>      </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>BOOK A TABLE</h3>
                            <ul><li><a href="http://www.manoir-aulnay.com/" target="_blank">CONTACT US</a></li></ul>
                    </div>
                    <div class="vl"></div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>ADDRESS</h3>
                        <ul>
                          <li><a href="https://goo.gl/maps/DQiVGYANeTZEQa1T8" target="_blank">LOCATION ON GOOGLE MAPS</a></li>
                        </ul>
                    </div>
                    <div class="vl"></div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>NEW CONCEPT</h3>
                            <ul><li><a><router-link to="/about">LEARN MORE ABOUT US</router-link></a></li></ul>
                    </div>
                    <div></div>                 
                    <!-- <div class="col-lg-3 item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a> -->
                    <div id="bottom-img"> <p class="copyright" id="txt">Le Manoir Salé</p>
                        <img src="@/assets/manoir_logo.png" alt="lo" id="img">
                    </div>
                </div>
            </div>
        </footer>
    </div>
   
</body>

</html>

</template>

<script>
   export default{
        name: 'MyFooter'
    }
</script>

<style scoped>
.vl {
  border-left: 6px solid rgba(14, 18, 14, 0.3);
  height: 50px;
}

.footer-clean {
  text-align:center;
  padding:50px 0;
  background-color:#dbb172;
  color: #1E3551;
}

.footer-clean h3 {
  margin-top:0;
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
}

.footer-clean ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

.footer-clean ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.6;
}

.footer-clean ul a:hover {
  color: white;
}

.footer-clean .item.social {
  text-align:right;
}

@media (max-width:767px) {
  .footer-clean .item {
    text-align:center;
    padding-bottom:20px;
  }
}

@media (max-width: 768px) {
  .footer-clean .item.social {
    text-align:center;
  }
}

.footer-clean .item.social > a {
  font-size:24px;
  width:40px;
  height:40px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  border:1px solid #ccc;
  margin-left:10px;
  margin-top:22px;
  color: white;
  opacity:0.75;
}

.footer-clean .item.social > a:hover {
  color: #ccc;
}

@media (max-width:991px) {
  .footer-clean .item.social > a {
    margin-top:40px;
  }
}

@media (max-width:767px) {
  .footer-clean .item.social > a {
    margin-top:10px;
  }
}

.footer-clean .copyright {
  margin-top:14px;
  margin-bottom:0;
  font-size:13px;
  opacity:0.6;
}

#bottom-img{
  border: 5px solid;
  border-color: #dbb172;
  text-align: center;
}

#txt{
  font-size: 30px;
  color: #1E3551;
  line-height: 52px;
  font-weight: 100;
  font-family: 'Great Vibes', cursive;
}

#img{
  width: 7%;
  margin-left: 20px;
}

</style>