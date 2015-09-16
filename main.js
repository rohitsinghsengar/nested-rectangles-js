var colors = ["red","green","blue","pink","yellow"]; //color array

function addRect(n,i){ // i is for color index, for continous color selection
    var elem = document.createElement('div');
    if(!n) //Base condition
        return elem;
     
    if(i && i<(colors.length)) 
        var cIndex = i;
    else 
        var cIndex=0;
    elem.style.backgroundColor = colors[cIndex];
    elem.style.position = "relative";
    elem.style.top = "10px";
    elem.style.left = "10px";
    elem.style.width = "calc(100% - 20px)";
    elem.style.height = "calc(620px - "+(600-(20*(n-1)))+"px)"; // 600 arbitry number, choose higher no. for higher n
    elem.appendChild(addRect(n-1,cIndex+1)); // recursive call
    return elem;
}
