
Page({
  data:{
   markers:[
     {
       iconPath: "../../resources/face.png",
       id:10,
       latitude:23.099994,
       longitude:113.324520,
       width:50,
       height:50
     }
   ],
   controls:[
     {
       id:20,
       iconPath:'../../resources/sprite.png',
       position:{
         left:0,
         top:260,
         width:80,
         height:80
       },
       clickable:true
     }
   ],
   polyline:[  
     {
       points:[
         {
           longitude:113.3245211,
           latitude:23.10229
         },
         {
           longitude:113.324520,
           latitude:23.21229
         }
       ],
       color:"#FF00FF",
       width:2,
       dottedLine:false
     }
   ]

  } ,
  regionchange(e)
  {
    consoe.log(e.type)
  },
  markertap(e)
  {
    console.log(e.markerId)
  },
  controltap(e)
  {
    console.log(e.controlId)
  }


})  