/**
* @description a function for addding selected color from color picker on click event.
*/
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
 
 
 /**
* @description This function will get number of rows and colums from user and make a grid 
         from the input made upon clicking submit button. Example: 2 height means 2 rows, 2 width means 2 columns. 
* @param {string} height - number of rows
* @param {string} width - number of columns
*/

 $("#sizePicker").submit(function(event){
   event.preventDefault();
   
   let height = $("#inputHeight").val();
   let width = $("#inputWeight").val();
   makeGrid(height, width);
   addColor();
   
 });
 
 
  /**
* @description So after size of the grid is being submitted by the user this function will make the
                required grid based on the inputs submitted.
* @param {string} row - number of rows
* @param {string} col - number of columns
*/

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
 
