item=document.getElementsByClassName('team')
for(i=0;i<item.length;i++) {
    item[i].addEventListener('mouseenter', listener);
}

function listener(e){
    preview=document.getElementById('preview');
    document.getElementById("frame").src="peoples/preview/"+
        e.toElement.getAttribute("href").substring(8);
    preview.style.display = 'block';
    console.log(document.getElementById("frame").src);
    document.getElementById('team').style="transform:translateX(-10em);";
    for(j=0;j<1;j+=0.1){
        setTimeout(function(){preview.style="opacity:"+j+";"},10);
    }
}

function closePreview(){
    preview=document.getElementById('preview')
    document.getElementById('team').style="transform:translateX(0);"
    for(j=1;j>=0;j-=0.1){
        setTimeout(function(){preview.style="opacity:"+j+";"},5)
    }
    setTimeout(function(){preview.style.display = 'none';},2000)
}


function showDetail(url){
    
}

// item=document.getElementsByClassName('team')
// for(i=0;i<item.length;i++) {
//     item[i].addEventListener('mouseleave', function() {
//         setTimeout(function(){document.getElementById('preview').style.display = 'none';
//         document.getElementById('team').style="transform:translateX(0);"}, 30)
//     });
// }