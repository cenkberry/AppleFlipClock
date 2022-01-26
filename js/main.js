let   box1     = document.querySelector('.box1');
let   box2     = document.querySelector('.box2');
let   box3     = document.querySelector('.box3');
let   box4     = document.querySelector('.box4');
const boxrow   = document.querySelector('.boxrow');
const sleft    = document.querySelector('#sleft');
const sright   = document.querySelector('#sright');
const bdelete  = document.querySelector('#bdelete');


box1.addEventListener("click" , () =>{

   if(box1.style.opacity === "1")
   {
      box2.style.border = "5px solid #000000";
      box2.style.opacity = "1";
      box3.style.border = "5px solid #000000";
      box3.style.opacity = "1";
      box4.style.border = "5px solid #000000";
      box4.style.opacity = "1";
      box1.style.border = "5px solid red";
      box1.style.opacity = "0.6";


      sleft.addEventListener("click", () =>
      {
         if(box1.style.opacity === "0.6"){

          boxrow.prepend(box1);
         }
      });

      sright.addEventListener("click", () =>
      {
         if(box1.style.opacity === "0.6"){
          boxrow.appendChild(box1);
         }
      });
      bdelete.addEventListener("click", () =>
      {
         if(box1.style.opacity === "0.6")
         {
          boxrow.removeChild(box1);
         }
      });

   }

   else
   {
      box1.style.border = "5px solid #000000";
      box1.style.opacity = "1";
   }

});

box2.addEventListener("click" , () =>{

   if(box2.style.opacity === "1")
   {
      box1.style.border = "5px solid #000000";
      box1.style.opacity = "1";
      box3.style.border = "5px solid #000000";
      box3.style.opacity = "1";
      box4.style.border = "5px solid #000000";
      box4.style.opacity = "1";
      box2.style.border = "5px solid red";
      box2.style.opacity = "0.6";


         sleft.addEventListener("click", () =>
      {
         if(box2.style.opacity === "0.6"){

          boxrow.prepend(box2);
         }
      });

      sright.addEventListener("click", () =>
      {
         if(box2.style.opacity === "0.6"){
          boxrow.appendChild(box2);
         }
      });
      bdelete.addEventListener("click", () =>
      {
         if(box2.style.opacity === "0.6"){
          boxrow.removeChild(box2);
         }
      });

   }

   else
   {
      box2.style.border = "5px solid #000000";
      box2.style.opacity = "1";
   }

});

box3.addEventListener("click" , () =>{

   if(box3.style.opacity === "1")
   {
      box1.style.border = "5px solid #000000";
      box1.style.opacity = "1";
      box2.style.border = "5px solid #000000";
      box2.style.opacity = "1";
      box4.style.border = "5px solid #000000";
      box4.style.opacity = "1";
      box3.style.border = "5px solid red";
      box3.style.opacity = "0.6";


         sleft.addEventListener("click", () =>
      {
         if(box3.style.opacity === "0.6"){

          boxrow.prepend(box3);
         }
      });

      sright.addEventListener("click", () =>
      {
         if(box3.style.opacity === "0.6"){
          boxrow.appendChild(box3);
         }
      });
      bdelete.addEventListener("click", () =>
      {
         if(box3.style.opacity === "0.6"){
          boxrow.removeChild(box3);
         }
      });

   }

   else
   {
      box3.style.border = "5px solid #000000";
      box3.style.opacity = "1";
   }

});

box4.addEventListener("click" , () =>{

   if(box4.style.opacity === "1")
   {
      box1.style.border = "5px solid #000000";
      box1.style.opacity = "1";
      box2.style.border = "5px solid #000000";
      box2.style.opacity = "1";
      box3.style.border = "5px solid #000000";
      box3.style.opacity = "1";
      box4.style.border = "5px solid red";
      box4.style.opacity = "0.6";


         sleft.addEventListener("click", () =>
      {
         if(box4.style.opacity === "0.6"){

          boxrow.prepend(box4);
         }
      });

      sright.addEventListener("click", () =>
      {
         if(box4.style.opacity === "0.6"){
          boxrow.appendChild(box4);
         }
      });
      bdelete.addEventListener("click", () =>
      {
         if(box4.style.opacity === "0.6"){
          boxrow.removeChild(box4);
         }
      });

   }

   else
   {
      box4.style.border = "5px solid #000000";
      box4.style.opacity = "1";
   }

});