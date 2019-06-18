/*
* Programmer : Dr.-Ing. Bader Juma
* Date       : June 17, 2019
* File       : branchFunctionScript.js
* Purpose    : contain all functions that used by main function
*/

function checkInputFunction(matrixDimension){
	//declare variables
	var text;
	  // If matrixDimension is Not a Number or less than one or greater than 10
  if (isNaN(matrixDimension) || matrixDimension < 1 || matrixDimension > 10) 
      {
    text = "Input not valid";
       } else {
    text = "Input OK";
               }
			   return text;
			   
}

function createFaceFunction(matrixDimension, cL, fL) {
	  
 //Define variables and array
  var i, j, k, text;
  var arr =[];
  
  for (k=0; k< 6; k++) {
  // put class and id arribute for each faces cell
  for (j = 0; j < matrixDimension; j++) {
   text = "<tr>";
   for (i = 0; i < matrixDimension; i++) {
	 text += "<td class="+"back"+" id="+cL[k]+((j+1)*10+(i+1))+">"+" "+"</td>";
	 }
     text  += "</tr>";
     arr[j] = text;}
    
	// create cells in face (table) choose by id attributes
	document.getElementById(fL[k]).innerHTML = arr[0];
    for (j = 1; j < matrixDimension; j++){
     $("#"+fL[k]).append(arr[j]);        }
                        }	
}

//color each cells separatelly
function colorCellsFunction(matrixDimension, cL, colorFace) {
	
 //Define variables and array
  var i, j, k, temp;
  
for (k=0; k< 6; k++) {	
    // put color for each cell j is row and i is cols of matrix first cell is 0,0
   for (j = 0; j < matrixDimension; j++) {
      for (i = 0; i < matrixDimension; i++) {
        temp = (j+1)*10+(i+1);
					 $("#"+cL[k]+temp).css("background-color", colorFace[k]); 
                                            } 
                                        }									
                         }	
}

// give code for each color create virtual matrix that keep track to 
// the color on each cells because the color cells are not readable
function initializeMatrixFunction(backArr, rightsideArr, frontArr, leftsideArr, topArr, bottomArr, matrixDimension, colorCode){
	// declare variable
	var i;
	// initialize matrix face with color code
    for (i = 0; i < matrixDimension*matrixDimension; i++) {
         backArr[i]= colorCode[0];
         rightsideArr[i] = colorCode[1];
         frontArr[i] = colorCode[2];
         leftsideArr[i] = colorCode[3];
         topArr[i] = colorCode[4];
         bottomArr[i] = colorCode[5];
                                                          }
                                                                                                                               }
//rotate matrix around X-axis for cell in middle not edge give color
 // k repsent step rotation in middle in clock wise dircetion
 // axisVar = X, numStepRot = 1, cellLocation = middle;
function matrixXaxisRotationFunction(cellLocation, numStepRot, matrixDimension, rightsideArr, bottomArr, leftsideArr, topArr) {
 // define variables
   var j, i, k, ii, jj, temp;
   var squDimension = matrixDimension*matrixDimension-1;
  for(k=0; k < numStepRot; k++){
	j = 0;  	  
   for (i=matrixDimension-cellLocation; i < matrixDimension*matrixDimension; i=i+matrixDimension) {	
    
    ii = j+matrixDimension*(cellLocation-1);	
	temp=rightsideArr[i];
	rightsideArr[i]=bottomArr[ii];
	bottomArr[ii] = leftsideArr[matrixDimension*(matrixDimension-1)-j*matrixDimension+(cellLocation-1)];
	leftsideArr[matrixDimension*(matrixDimension-1)-j*matrixDimension+(cellLocation-1)] = topArr[squDimension-ii];
	topArr[squDimension-ii] = temp;
	j++;
	 
                                                                     }
                             }						             
			   }
			   //////////////////////////
//rotate matrix around x-axis for celllocation = 1 move edges leftside matrix  -ClockWise
function frontMatrixXaxisRotationFunction(numStepRot, matrixDimension, frontArr) {    
	// define variables
    var i, j, jj, jj1, jj2, jj3, ii, ij, k;	
	var arr = [];
	for(k=0; k < numStepRot; k++){	
	// create temperory matrix to save data for swaping edges
	for (i = 0; i < matrixDimension*matrixDimension; i++) { 
	    arr[i] = frontArr[i];}
		
	jj  = 0;
	jj1 = 0;
	jj2 = 0;
	jj3 = 0;
	
	for (i = 0; i < matrixDimension; i++) {
		for ( j = 0; j < matrixDimension ; j++ ) {	
		
			if (i == 0) {
               ij = matrixDimension*(matrixDimension-1)+j;	
			   frontArr[jj] = arr[ij];
			   jj = jj + matrixDimension;}
			
			
			if (j == (matrixDimension-1)){
			   ii = matrixDimension*(matrixDimension-1)+i;	
			   ii1 = matrixDimension*matrixDimension-1-jj1;
			   frontArr[ii] = arr[ii1];
               jj1 = jj1 + matrixDimension;}
			   
			if (i == (matrixDimension-1)){
			   frontArr[matrixDimension*matrixDimension-1-jj2] = arr[matrixDimension-1-j];
			   jj2 = jj2 + matrixDimension;}
			
			if(j == 0) {
			   frontArr[(matrixDimension-1)-i] = arr[jj3];
			   jj3 = jj3 + matrixDimension;}
			
		}
	}
			
	}
}

///////////////////////////
//////////////////////////
//rotate matrix around y-axis for celllocation = 1 move edges leftside matrix  -ClockWise
function leftsideMatrixYaxisRotationFunction(numStepRot, matrixDimension, leftsideArr) {    
	// define variables
    var i, j, jj, jj1, jj2, jj3, ii, ij, k;	
	var arr = [];
	for(k=0; k < numStepRot; k++){	
	// create temperory matrix to save data for swaping edges
	for (i = 0; i < matrixDimension*matrixDimension; i++) { 
	    arr[i] = leftsideArr[i];}
		
	jj  = 0;
	jj1 = 0;
	jj2 = 0;
	jj3 = 0;
	
	for (i = 0; i < matrixDimension; i++) {
		for ( j = 0; j < matrixDimension ; j++ ) {	
		
			if (i == 0) {
               ij = matrixDimension*(matrixDimension-1)+j;	
			   leftsideArr[jj] = arr[ij];
			   jj = jj + matrixDimension;}
			
			
			if (j == (matrixDimension-1)){
			   ii = matrixDimension*(matrixDimension-1)+i;	
			   ii1 = matrixDimension*matrixDimension-1-jj1;
			   leftsideArr[ii] = arr[ii1];
               jj1 = jj1 + matrixDimension;}
			   
			if (i == (matrixDimension-1)){
			   leftsideArr[matrixDimension*matrixDimension-1-jj2] = arr[matrixDimension-1-j];
			   jj2 = jj2 + matrixDimension;}
			
			if(j == 0) {
				leftsideArr[(matrixDimension-1)-i] = arr[jj3];
				jj3 = jj3 + matrixDimension;}
			
		}
	}
			
	}
}

///////////////////////////
//rotate matrix around Z-axis for celllocation= 1 move edges top matrix  -ClockWise
function topMatrixZaxisRotationFunction(numStepRot, matrixDimension, topArr) {    
	// define variables
    var i, j, jj, jj1, jj2, jj3, ii, ij, k;	
	var arr = [];
	for(k=0; k < numStepRot; k++){	
	// create temperory matrix to save data for swaping edges
	for (i = 0; i < matrixDimension*matrixDimension; i++) { 
	    arr[i] = topArr[i];}
		
	jj  = 0;
	jj1 = 0;
	jj2 = 0;
	jj3 = 0;
	
	for (i = 0; i < matrixDimension; i++) {
		for ( j = 0; j < matrixDimension ; j++ ) {	
		
			if (i == 0) {
               ij = matrixDimension*(matrixDimension-1)+j;	
			   topArr[jj] = arr[ij];
			   jj = jj + matrixDimension;}
			
			
			if (j == (matrixDimension-1)){
			   ii = matrixDimension*(matrixDimension-1)+i;	
			   ii1 = matrixDimension*matrixDimension-1-jj1;
			   topArr[ii] = arr[ii1];
               jj1 = jj1 + matrixDimension;}
			   
			if (i == (matrixDimension-1)){
			   topArr[matrixDimension*matrixDimension-1-jj2] = arr[matrixDimension-1-j];
			   jj2 = jj2 + matrixDimension;}
			
			if(j == 0) {
				topArr[(matrixDimension-1)-i] = arr[jj3];
				jj3 = jj3 + matrixDimension;}
			
		}
	}
			
	}
}
//////////////////////
//rotate matrix around x-axis for celllocation= matrix dimension move edges back matrix -AntiClockWise
function backMatrixXaxisRotationFunction(numStepRot, matrixDimension, backArr) {
	// define variables
    //var i, j, jj, jj1, jj2, jj3, ii, ij, k;
      var i, j, k, jj, jj1, jj2, jj3;	
	var arr = [];
	for(k=0; k < numStepRot; k++){	
	// create temperory matrix to save data for swaping edges
	for (i = 0; i < matrixDimension*matrixDimension; i++) { 
	    arr[i] = backArr[i];}
		
	jj  = 0; //
	jj1 = 0; //
	jj2 = 0; //
	jj3 = 0; //
	
	for (i = 0; i < matrixDimension; i++) {
		for ( j = 0; j < matrixDimension ; j++ ) {	
		
			if (i == 0) {
			   backArr[matrixDimension*matrixDimension-1-j] = arr[matrixDimension*(matrixDimension-1)-jj];
			   jj = jj + matrixDimension;}
			
			if (j == (matrixDimension-1)){
			   backArr[matrixDimension-1+jj1] = arr[matrixDimension*matrixDimension-1-i];
               jj1 = jj1 + matrixDimension;}
			   
			if (i == (matrixDimension-1)){
			   backArr[j] = arr[matrixDimension-1+jj2];
			   jj2 = jj2 + matrixDimension;}
			
			if(j == 0) {
				backArr[matrixDimension*(matrixDimension-1)-jj3] = arr[i];
				jj3 = jj3 + matrixDimension;}
			
		}
	}
			
	}
}
//////////////////////
//rotate matrix around y-axis for celllocation= matrix dimension move edges rightside matrix -AntiClockWise
function rightsideMatrixYaxisRotationFunction(numStepRot, matrixDimension, rightsideArr) {
	// define variables
    //var i, j, jj, jj1, jj2, jj3, ii, ij, k;
      var i, j, k, jj, jj1, jj2, jj3;	
	var arr = [];
	for(k=0; k < numStepRot; k++){	
	// create temperory matrix to save data for swaping edges
	for (i = 0; i < matrixDimension*matrixDimension; i++) { 
	    arr[i] = rightsideArr[i];}
		
	jj  = 0; //
	jj1 = 0; //
	jj2 = 0; //
	jj3 = 0; //
	
	for (i = 0; i < matrixDimension; i++) {
		for ( j = 0; j < matrixDimension ; j++ ) {	
		
			if (i == 0) {
			   rightsideArr[matrixDimension*matrixDimension-1-j] = arr[matrixDimension*(matrixDimension-1)-jj];
			   jj = jj + matrixDimension;}
			
			if (j == (matrixDimension-1)){
			   rightsideArr[matrixDimension-1+jj1] = arr[matrixDimension*matrixDimension-1-i];
               jj1 = jj1 + matrixDimension;}
			   
			if (i == (matrixDimension-1)){
			   rightsideArr[j] = arr[matrixDimension-1+jj2];
			   jj2 = jj2 + matrixDimension;}
			
			if(j == 0) {
				rightsideArr[matrixDimension*(matrixDimension-1)-jj3] = arr[i];
				jj3 = jj3 + matrixDimension;}
			
		}
	}
			
	}
}
//rotate matrix around Z-axis for celllocation= matrix dimension move edges bottom matrix -AntiClockWise
function bottomMatrixZaxisRotationFunction(numStepRot, matrixDimension, bottomArr) {
	// define variables
    //var i, j, jj, jj1, jj2, jj3, ii, ij, k;
      var i, j, k, jj, jj1, jj2, jj3;	
	var arr = [];
	for(k=0; k < numStepRot; k++){	
	// create temperory matrix to save data for swaping edges
	for (i = 0; i < matrixDimension*matrixDimension; i++) { 
	    arr[i] = bottomArr[i];}
		
	jj  = 0; //
	jj1 = 0; //
	jj2 = 0; //
	jj3 = 0; //
	
	for (i = 0; i < matrixDimension; i++) {
		for ( j = 0; j < matrixDimension ; j++ ) {	
		
			if (i == 0) {
			   bottomArr[matrixDimension*matrixDimension-1-j] = arr[matrixDimension*(matrixDimension-1)-jj];
			   jj = jj + matrixDimension;}
			
			if (j == (matrixDimension-1)){
			   bottomArr[matrixDimension-1+jj1] = arr[matrixDimension*matrixDimension-1-i];
               jj1 = jj1 + matrixDimension;}
			   
			if (i == (matrixDimension-1)){
			   //bottomArr[matrixDimension*matrixDimension-1-jj2] = arr[matrixDimension-1-j];
			   bottomArr[j] = arr[matrixDimension-1+jj2];
			   jj2 = jj2 + matrixDimension;}
			
			if(j == 0) {
				//bottomArr[(matrixDimension-1)-i] = arr[jj3];
				bottomArr[matrixDimension*(matrixDimension-1)-jj3] = arr[i];
				jj3 = jj3 + matrixDimension;}
			
		}
	}
			
	}
}
////////////////////////////////////////


//rotate matrix around Z-axis for cell in middle not edge give color
 // k repsent step rotation in middle in clock wise dircetion
 // axisVar = Z, numStepRot = 1, cellLocation = middle;
function matrixZaxisRotationFunction(cellLocation, numStepRot, matrixDimension, backArr, rightsideArr, frontArr, leftsideArr) {
 // define variables
 var i, k, temp; 
 for(k=0; k < numStepRot; k++){	 
   for (i = (cellLocation-1)*matrixDimension; i<(matrixDimension+matrixDimension*(cellLocation-1)); i++) {	
	 temp=backArr[i];
	 backArr[i] = rightsideArr[i];
	 rightsideArr[i] = frontArr[i];
	 frontArr[i] = leftsideArr[i];
	 leftsideArr[i] = temp;	 
                                                                                                          }
                             }
			   }
  //rotate matrix around Y-axis for cell in middle not edge give color
  // k repsent step rotation in middle in clock wise dircetion
  // axisVar = Y, numStepRot = 1, cellLocation = middle; 
 function matrixYaxisRotationFunction(cellLocation, numStepRot, matrixDimension, topArr, frontArr, bottomArr, backArr) {
   // define variables
   var i, k, temp;
   //console.log(topArr);
  for(k=0; k < numStepRot; k++){
	  	  
   for (i =(cellLocation-1); i< (matrixDimension*matrixDimension); i=i+matrixDimension) {	 
	 temp=topArr[i];
	 topArr[i] = frontArr[i];
	 frontArr[i] = bottomArr[i];
	 bottomArr[i] = backArr[matrixDimension*matrixDimension-1-i];
	 backArr[matrixDimension*matrixDimension-1-i] = temp;	 
                                                                     }
                             }						 
}
// color cell for rotation aroun x - axis
function cellColorXaxisRotationFunction(cL, cellLocation, matrixDimension, rightsideArr, bottomArr, leftsideArr, topArr, colorFace) {
 	 //Define variables and array
  var i, j, k, temp, tempVar;
  
for (k=0; k< 6; k++) {	
    // put color for each cell j is row and i is cols of matrix first cell is 0,0
	tempVar = -1;
   for (j = 0; j < matrixDimension; j++) {
      for (i = 0; i < matrixDimension; i++) {
        temp = (j+1)*10+(i+1);

					 tempVar = tempVar + 1;					
					     if(k==0) continue;
						 else if(k==1) tempColor= rightsideArr[tempVar];
						  else if(k==2) continue;
						   else if(k==3) tempColor = leftsideArr[tempVar];
						    else if(k==4) tempColor= topArr[tempVar];
							 else tempColor =  bottomArr[tempVar];
							 
					 $("#"+cL[k]+temp).css("background-color", colorFace[tempColor]); 
                                            } 
                                        }									
                         }
                                           
										   } 
// color cell for rotation aroun y - axis
function cellColorYaxisRotationFunction(cL, cellLocation, matrixDimension, topArr, frontArr, bottomArr, backArr, colorFace) {
 	 //Define variables and array
  var i, j, k, temp, tempVar;
 
for (k=0; k< 6; k++) {	
    // put color for each cell j is row and i is cols of matrix first cell is 0,0
	tempVar = -1;
   for (j = 0; j < matrixDimension; j++) {
      for (i = 0; i < matrixDimension; i++) {
        temp = (j+1)*10+(i+1);
		  
					 tempVar = tempVar + 1;					
					     if(k==0) tempColor= backArr[tempVar];
						 else
						 if(k==1) continue;
						  else if(k==2) tempColor= frontArr[tempVar];
						   else if(k==3) continue;
						    else if(k==4) tempColor= topArr[tempVar];
							 else tempColor =  bottomArr[tempVar];
							 
					 $("#"+cL[k]+temp).css("background-color", colorFace[tempColor]); 
                                            } 
                                        }									
                         }
                                           
										   }   
									
// color cell for rotation aroun z - axis
function cellColorZaxisRotationFunction(cL, cellLocation, matrixDimension, backArr, rightsideArr,frontArr, leftsideArr, colorFace){
 // k represent the face
 var k, j, i, temp, tempVar,tempColor;
 for (k=0; k< 4; k++) {	
    // put color for each cell j is row and i is cols of matrix first cell is 0,0
   j = cellLocation-1;
      for (i = 0; i < matrixDimension; i++) {
        temp = (j+1)*10+(i+1);

					 tempVar = i + j*matrixDimension;
					 //tempVar = i;
					 if(k==0) tempColor= backArr[tempVar];
						else if(k==1) tempColor= rightsideArr[tempVar];
						  else if(k==2) tempColor= frontArr[tempVar];
							else tempColor =  leftsideArr[tempVar];
		
					 $("#"+cL[k]+temp).css("background-color", colorFace[tempColor]);				 
                                            }              										
                         }
						         }

// color cell for rotation aroun z - axis for edges celllocation = 1
function topCellColorZaxisRotationFunction(cL, cellLocation, matrixDimension, topArr, colorFace){
 	 //Define variables and array
  var i, j, k, temp, tempVar;
  k = 4;
//for (k=0; k< 6; k++) {	

    // put color for each cell j is row and i is cols of matrix first cell is 0,0
	tempVar = -1;
   for (j = 0; j < matrixDimension; j++) {
      for (i = 0; i < matrixDimension; i++) {
        temp = (j+1)*10+(i+1);
		  
					 tempVar++;					
					 tempColor =  topArr[tempVar];						 
					 $("#"+cL[k]+temp).css("background-color", colorFace[tempColor]); 
                                            } 
                                        }									
                         //}
             										
						         }
// color cell for rotation aroun z - axis for edges celllocation = matrixDimension
function bottomCellColorZaxisRotationFunction(cL, cellLocation, matrixDimension, bottomArr, colorFace){
 	 //Define variables and array
  var i, j, k, temp, tempVar;
  k = 5;
//for (k=0; k< 6; k++) {	

    // put color for each cell j is row and i is cols of matrix first cell is 0,0
	tempVar = -1;
   for (j = 0; j < matrixDimension; j++) {
      for (i = 0; i < matrixDimension; i++) {
        temp = (j+1)*10+(i+1);
		  
					 tempVar++;					
					 tempColor =  bottomArr[tempVar];						 
					 $("#"+cL[k]+temp).css("background-color", colorFace[tempColor]); 
                                            } 
                                        }									
                         //}
             										
						         }

// color cell for rotation aroun z - axis for edges celllocation = matrixDimension
function leftsideCellColorYaxisRotationFunction(cL, cellLocation, matrixDimension, leftsideArr, colorFace){
 	 //Define variables and array
  var i, j, k, temp, tempVar;
  k = 3;
//for (k=0; k< 6; k++) {	

    // put color for each cell j is row and i is cols of matrix first cell is 0,0
	tempVar = -1;
   for (j = 0; j < matrixDimension; j++) {
      for (i = 0; i < matrixDimension; i++) {
        temp = (j+1)*10+(i+1);
		  
					 tempVar++;					
					 tempColor =  leftsideArr[tempVar];						 
					 $("#"+cL[k]+temp).css("background-color", colorFace[tempColor]); 
                                            } 
                                        }									
                         //}
             										
						         }
////////////////////////////////////////
// color cell for rotation aroun y - axis for edges celllocation = matrixDimension
function rightsideCellColorYaxisRotationFunction(cL, cellLocation, matrixDimension, rightsideArr, colorFace){
 	 //Define variables and array
  var i, j, k, temp, tempVar;
  k = 1;
//for (k=0; k< 6; k++) {	

    // put color for each cell j is row and i is cols of matrix first cell is 0,0
	tempVar = -1;
   for (j = 0; j < matrixDimension; j++) {
      for (i = 0; i < matrixDimension; i++) {
        temp = (j+1)*10+(i+1);
		  
					 tempVar++;					
					 tempColor =  rightsideArr[tempVar];						 
					 $("#"+cL[k]+temp).css("background-color", colorFace[tempColor]); 
                                            } 
                                        }									
                         //}
             										
						         }
////////////////////////////////////////
////////////////////////////////////////
// color cell for rotation aroun X - axis for edges celllocation = 1
function frontCellColorXaxisRotationFunction(cL, cellLocation, matrixDimension, frontArr, colorFace){
 	 //Define variables and array
  var i, j, k, temp, tempVar;
  k = 2;
//for (k=0; k< 6; k++) {	

    // put color for each cell j is row and i is cols of matrix first cell is 0,0
	tempVar = -1;
   for (j = 0; j < matrixDimension; j++) {
      for (i = 0; i < matrixDimension; i++) {
        temp = (j+1)*10+(i+1);
		  
					 tempVar++;					
					 tempColor = frontArr[tempVar];						 
					 $("#"+cL[k]+temp).css("background-color", colorFace[tempColor]); 
                                            } 
                                        }									
                         //}
             										
						         }
////////////////////////////////////////
////////////////////////////////////////
// color cell for rotation aroun X - axis for edges celllocation = matrixDimension
function backCellColorXaxisRotationFunction(cL, cellLocation, matrixDimension, backArr, colorFace){
 	 //Define variables and array
  var i, j, k, temp, tempVar;
  k = 0;
//for (k=0; k< 6; k++) {	

    // put color for each cell j is row and i is cols of matrix first cell is 0,0
	tempVar = -1;
   for (j = 0; j < matrixDimension; j++) {
      for (i = 0; i < matrixDimension; i++) {
        temp = (j+1)*10+(i+1);
		  
					 tempVar++;					
					 tempColor = backArr[tempVar];						 
					 $("#"+cL[k]+temp).css("background-color", colorFace[tempColor]); 
                                            } 
                                        }									
                         //}
             										
						         }
////////////////////////////////////////

							 
								 


								 

								 
								 
						

