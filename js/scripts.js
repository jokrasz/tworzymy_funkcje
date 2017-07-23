function getTriangleArea(a, h) {
	if  ( (a <= 0) || (h <= 0) ){
		console.log("Nieprawidłowe dane");
	} else {
		return a*h/2;
	}
}
console.log( "Pierwsze pole trojkata:" + getTriangleArea(10,6) );
var triangle1Area = getTriangleArea(10, 6);
console.log( "Drugie pole trojkata:" + getTriangleArea(10,15) );
var triangle2Area = getTriangleArea(10, 15);
console.log( "Trzecie pole trojkata:" + getTriangleArea(13,8) );
var triangle3Area = getTriangleArea(13, 8);


