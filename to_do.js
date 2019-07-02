function adding(x)
{
	var u=document.getElementById('list');
	var temp=document.createElement('li');
	var chb=document.createElement('input');
	chb.type="button";
	chb.setAttribute("class","btn btn-danger");
	chb.setAttribute("value","Remove");
	chb.onclick=function(){
		// alert("hey");
		u.removeChild(temp);
	}
	var p=document.createElement('p');
	p.appendChild(document.createTextNode(x.value));
	temp.appendChild(p);
	temp.appendChild(chb);
	u.appendChild(temp);
	// window.alert("new task added");
}
