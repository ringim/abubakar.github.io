// Select color input


function addColor(){
    let col = $("td");
    col.click(function (){
         const color = $("#colorPicker").val();
 if($(this).attr("style")){
   $(this).removeAttr("style");
 }
      else{
        $(this).attr("style", "background-Color:" +color);
      }  
    })
    
 }
 // Select size input
 $("#sizePicker").submit(function(event){
   event.preventDefault();
   
   let height = $("#inputHeight").val();
   let width = $("#inputWeight").val();
   makeGrid(height, width);
   addColor();
   
 });
 // When size is submitted by the user, call makeGrid()
 
 function makeGrid(row, col){
 
  $("tr").remove();
   
   let i= 1;
   while(i <= row){
     $("#pixelCanvas").append("<tr></tr>");
     i++;    
   }
   let j = 1;
   while(j <= col){
     $("tr").append("<td></td>");
     j++;
   }
   
 }
 