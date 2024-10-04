<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <style>
    body{

        background-image: url("public/bg.jpg");

    }    
        button
             { margin: auto; 
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            overflow: auto; 
            background: linear-gradient(315deg, rgb(184, 130, 180) 3%,
                 rgb(129, 150, 172) 38%, 
                 rgb(116, 143, 141) 68%, 
                 rgb(158, 127, 127) 98%); 
            animation: gradient 15s ease infinite; 
            background-size: 200% 400%; 
            background-attachment: fixed; 
        }
    @keyframes gradient 
    { 
        0% { background-position: 0% 0%; } 
        50% { background-position: 100% 100%; } 
        100% { background-position: 0% 0%; } } 
    .wave { background: rgba(190, 140, 140, 0.25); 
        border-radius: 1000% 1000% 0 0; 
        position: fixed; 
        width: 200%; 
        height: 12em; 
        animation: wave 10s -3s linear infinite; 
        transform: translate3d(0, 0, 0); 
        opacity: 0.8; 
        bottom: 0; 
        left: 0; 
        z-index: -1; } 
    .wave:nth-of-type(2) { 
        bottom: -1.25em; 
        animation: wave 18s linear reverse infinite; 
        opacity: 0.8; } 
    .wave:nth-of-type(3) { 
        bottom: -2.5em; 
        animation: wave 20s -1s reverse infinite;

        
        }
    
            .bodycontainer li{
            
            list-style: none;1
            background-size: 10%;
            padding-left: 10%;
            padding-bottom: 4%;
        }
        @keyframes effect {
            from{
                opacity: 0.1;
            }
            to{
                opacity: 0.95;
                
            }
        }
        @keyframes slide {
            from{
                width: 20em;
                position: relative;
                right:0;
            }
            to{
                right: 180%;
            }
        }    
        .slide{
            animation: slide 12s linear 0s infinite;
        }
        span{
            color: green;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            text-indent: 4%;
            text-shadow:2px 2px gray;
            font-size: large;
            
        }
        .info {
            max-width: 20%;
            max-height :20%;
            color: yellow;
            animation: effect 1.8s linear ;
            display: inline-flex;
            flex-direction:row;
            flex-wrap: nowrap;
        }
        
        
        h1{font-size: large;
            text-align: center;
            text-shadow:2px 2px gray;
            color: darkblue;
            font-family: cursive;
        }
        .expand{
            background-color: rgba(0,0,0,0.4);
            border: none;
            display: flex;
            flex-direction: column;
            border-radius: 4%;
            color: #fff;
            text-indent: 0%;
            margin: 5%;
            font-size: 1.2em;
        
        }
       .ty{
         background-color :aliceblue;
         
         border-radius:10%;
         font-size: medium;
       }
        a{
            text-decoration: none;
        
        }
       .tr{
            min-width: 250%;
            
            }
        .expand:active{
            transform: translateY(-4%);
        }
        #hand{
            transform: rotate(240deg);
            
        }
        
        #hand, #dol{
            max-width: 80%;
            max-height: 80%;
        }
        #logo{
            border-radius: 50%;
            margin: 2% 2%;
            max-height: 4em;
            max-width: 4em;
            justify-content: center;
            box-shadow: 5px 5px 5px 0.5px rgb(130, 134, 136) ;
        }
        .header{
            text-align: right;
            background-image: url(/public/bg.jpg);
            background-color: rgba(255, 255, 255, 0.2);
            background-blend-mode: lighten;
            border-bottom:2px solid black ;
            max-height: 15em;
                    }
        .top{
            padding:1%;
            margin:0 auto;
            border-radius: 20%;
            display: inline-block;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            background-color: aliceblue;
            border: 0.5px solid black;
            
            width:fit-content;
            overflow-x:hidden;
            
        
        }
        .top:active {
                            background-color:aliceblue;
                            border-radius:10%;
            animation: effect 1.8s linear ;
        }
        
       
        footer{
            text-align: center;
            color: gray;
            background-color: bisque;
            position: sticky;
        }
    </style>
  </head>
  <body>

    <header>
        <img id="logo" src="public/weblogo.jpg"/>
        <div class="header">
            <span class="slide">Shop your skills, One time payment</span>
            
            <div id ="reviewcont" class="top" onclick="openn()"> Reviews
               <div id= "review" style ="display:none" >This is the reviews page</div>
        </div>
                    <div id="aboutcont" class="top" onclick ="opeen()">About
               <div id= "abt" style ="display:none" >This is the about info</div>
            </div>
    </header>
    <div class="bodycontainer">
        <h1> WELCOME TO <span>GD</span> WHERE WE MENTOR <span>YOUR SKILLS</span> AND PROVIDE BASIC &amp; ADVANCED TUTORSHIP</h1>
        <ul>
            <li>
                <button class="expand" onclick="link(0)">AUTOMATED INCOME MACHINE </button>
                <h4> A strategy on how to make passive income at the comfort of your home </h4>
            </li>
            <li>
                <button class="expand" onclick="link(1)">Affiliate Marketing Startup Blueprint</button>
                <h4> Step by step guide to start and earn weekly from affiliate marketing</h4>
            </li>
            <li>
                <button class="expand" onclick="link(2)">Tiktok Monetisation and Growth Bueprint (T.M.O.B)</button>
                <h4> Learn how to make money on TikTok with these effective strategies and tips. Unlock your earning potential and monetize your TikTok presence. </h4>
            </li>
            <li>
                <button class="expand" onclick="link(3)">The Whatsapp Cashout Formula</button>
                <h4> This is the secret step to turning your whatsapp to a daily alert machine even if you don't know anything about  </h4>
            </li>
            <li>
                <button class="expand" onclick="link(4)">Ultimate Secrets of Making 6 Figures Monthly as a Freelancer on Fiverr( for beginners and expert )</button>
                <h4> A detailed STEP-BY-STEP Freelance journey which i call the Blueprint to 6 FIGURES where I explain how you can start making gains on Fiverr </h4>
            </li>
            <li>
                <button class="expand" onclick="link(5)">CRYPTO AND GIFTCARD EXCHANGE MASTERY (C.G.E.M)</button>
                <h4> Learn how to trade cryptocurrencies like Bitcoin, Ethereum & Altcoins, learn technical analysis & advanced terminology. </h4>
            </li>
           
            <li>
                <button class="expand" onclick="link(6)">Video Editing Program for Smartphones</button>
                <h4> Bonus program on knowing the top video editing apps and howto use them effectively </h4>
            </li>
            <li>
                <button class="expand" onclick="link(7)">How to Start a Laundry Business Without the Necessary Equipment</button>
                <h4> The equipment and materials you need: You need to buy or lease washing machines, dryers, irons, hangers, detergents, starch, and other cleaning </h4>
            </li>
            <li>
                <button class="expand" onclick="link(8)">Content Creation Toolbox</button>
                <h4> Everyone who creates content needs a tool box; and that's what this eBook/videos aims to achieve. </h4>
            </li>
           
            <li>
                <button class="expand" onclick="link(9)">Mini Importation Goldmine</button>
                <h4> The Step by Step Process For Importing Hot Selling, Quality Products at Discount Prices From Genuine Stores Outside Nigeria </h4>
            </li>
           
                <button class="expand" onclick="link(10)">Amazon KDP Hybrid Book Cash Secrets</button>
                <h4> Amazon KDP without having to publish 50+ books before earning your first $1000. </h4>
            </li>
            <li>
                <button class="expand" onclick="link(11)">Profitable Leads Generation Secret Training</button>
                <h4> Learn how to generate leads with top sales lead generation strategies and actionable techniques.  </h4>
            </li>
            <li>
                <button class="expand" onclick="link(12)">Oil and Gas Money Blueprint</button>
                <h4> Are you passionate about helping people save money on fuel expenses? Here's the solution </h4>
            </li>
            
        </ul>
            
                <h3 style="visibility: hidden;" class="info"><img id="dol" src="/public/dollars.svg"/><div class="tr" > Join this live group Now...   Click the link below</div><img id="hand" src="public/hnd.svg"/>
                <a href="https://chat.whatsapp.com/Fy2pOTMbs7tFYcTw9VKRXm">Whatsapp link</a></h3>
            
        <footer>
                copyright &copy; Graphix_ng 2024
        </footer>
    </div>
    <script>
        var holder = []
        function link(i) {

            const btns=document.querySelectorAll('button')

            const info=document.querySelector('.info')
            btns.forEach(el=>{
                if(el.childNodes.length>1){

                   el.removeChild(info)
                  // el.removeChild(nope)
                    console.log(el.childNodes)
            }
            })
            
            holder.push(i)
            //console.log(holder)
        /*let hold  add an array to check the list if it has been entered twice=i*/
        if(!(holder[holder.length-1]==holder[holder.length -2])){
        btns[i].appendChild(info);
        console.log(holder);
      btns[i].lastChild.style.display="block"; btns[i].lastChild.style.visibility="visible";
       }
       else{
        btns[i].appendChild(info);
        btns[i].lastChild.style.display="none";
        holder=[];
       } 
        }
        
    function opeen(){
   					 let review = document.querySelector("#review");
          let about = document.querySelector("#abt");
          review.style.display ="none";
          if(about.style.display==="none"){
          //about.appendChild(inf);
          about.style.display ="inline"}
          else{
              about.style.display="none"
          }
          
        }
        function openn(){
          let about = document.querySelector("#abt");
          let review = document.querySelector("#review");
          about.style.display ="none";
          if(review.style.display==="none"){
          review.style.display ="block"}
          else{
              review.style.display="none"
          }
        }
    </script>
  </body>
</html>