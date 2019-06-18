/*
* Programmer : Dr.-Ing. Bader Juma
* Date       : June 17, 2019
* File       : mainFunctionScript.js
* Purpose    : Create GUI and rotation function
*/

 // declare global variables
 var matrixDimension;
 var cL = ["ba", "ri","fr","le","to","bo"]; // cell id
 var fL = ["back", "rightside","front","leftside", "top", "bottom"]; // table id
 var colorFace = ["Green", "Tan", "RoyalBlue", "DarkRed", "Yellow", "White"]; // color
 //var colorFace = ["#08960A", "#CD9834", "#3364FB", "#BC0B00", "#FFFB03", "#FFFDFF"];
 var backArr =[], rightsideArr =[], frontArr =[], leftsideArr =[], topArr =[], bottomArr =[]; 
 var colorCode=["0", "1", "2", "3", "4", "5"]; 

//initialization disable run button   
$("#btnRun").attr("disabled", true);
// Create GUI for face
function dataVaidateFunction(){
  
     // Get the value of the input field with id="numb"
      matrixDimension = parseInt(document.getElementById("numb").value); 
      document.getElementById("demo").innerHTML = checkInputFunction(matrixDimension);
	  if(checkInputFunction(matrixDimension)=="Input OK")
	       $("#btnRun").attr("disabled", false);
       else 
		   $("#btnRun").attr("disabled", true);
}

function guiFunction() { 
 
  // put row and columns to table choose by id save in fL
  createFaceFunction(matrixDimension, cL, fL);
  // color the cells
  colorCellsFunction(matrixDimension, cL, colorFace);
} 

//initialize matrix code color function for faces
function initializeFunction() {
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
	 document.getElementById("demo1").innerHTML = "Successful matrix initilization";
                               }

  // rotation around Axis X, Y, Z
function rotationFunction() { 
 //Read data
 var axisVar = $( "#axisRotation" ).val();       //name of axis
 var directionRot = $( "#typeRotation" ).val(); // direction of rotation
 var numStepRot = parseInt($( "#stepRotation" ).val());    // number step of rotation
 var cellLocation = parseInt($( "#cellRotation" ).val());  // location to rotate

   // rotation around X-axis
if ( axisVar == "x" ) {
	matrixXaxisRotationFunction(cellLocation, numStepRot, matrixDimension,  rightsideArr, bottomArr, leftsideArr, topArr);
	cellColorXaxisRotationFunction(cL, cellLocation, matrixDimension, rightsideArr, bottomArr, leftsideArr, topArr, colorFace);	
	/////////////////
		// rotate front matrix edges 
   if (cellLocation == 1) {
	frontMatrixXaxisRotationFunction(numStepRot, matrixDimension, frontArr);	
	frontCellColorXaxisRotationFunction(cL, cellLocation, matrixDimension, frontArr, colorFace);
	}
   if (cellLocation == matrixDimension) {
    backMatrixXaxisRotationFunction(numStepRot, matrixDimension, backArr);
	backCellColorXaxisRotationFunction(cL, cellLocation, matrixDimension, backArr, colorFace);
	} 
	/////////////////
}
   // rotation around Y-axis
if ( axisVar == "y" ) { 
  // rotate matrix around Z axis for selected cell in the middle not edge
    matrixYaxisRotationFunction(cellLocation, numStepRot, matrixDimension, topArr, frontArr, bottomArr, backArr);
	//////////////////////////////
	// rotate rightside matrix edges 
   if (cellLocation == 1) {
	rightsideMatrixYaxisRotationFunction(numStepRot, matrixDimension, rightsideArr);	
	rightsideCellColorYaxisRotationFunction(cL, cellLocation, matrixDimension, rightsideArr, colorFace);
	}
	// rotate leftside matrix edges 
   if (cellLocation == matrixDimension) {
    leftsideMatrixYaxisRotationFunction(numStepRot, matrixDimension, leftsideArr);
	leftsideCellColorYaxisRotationFunction(cL, cellLocation, matrixDimension, leftsideArr, colorFace);
	} 

	//////////////////////////////
    cellColorYaxisRotationFunction(cL, cellLocation, matrixDimension, topArr, frontArr, bottomArr, backArr, colorFace);	

} 

    // rotation around Z-axis
if ( axisVar == "z" ) {
   // rotate matrix around Z axis for selected cell in the middle not edge
   matrixZaxisRotationFunction(cellLocation, numStepRot, matrixDimension, backArr, rightsideArr, frontArr, leftsideArr);
   // rotate top matrix edges 
   if (cellLocation == 1) {
	topMatrixZaxisRotationFunction(numStepRot, matrixDimension, topArr);
	topCellColorZaxisRotationFunction(cL, cellLocation, matrixDimension, topArr, colorFace);} 
	if (cellLocation == matrixDimension) {
	bottomMatrixZaxisRotationFunction(numStepRot, matrixDimension, bottomArr);	
	bottomCellColorZaxisRotationFunction(cL, cellLocation, matrixDimension, bottomArr, colorFace);
	}
   // rotate cell color around Z axis for selected cell in the middle not edge
   cellColorZaxisRotationFunction(cL, cellLocation, matrixDimension, backArr, rightsideArr,frontArr, leftsideArr, colorFace);
  
                    }
                             }


