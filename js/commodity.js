window.addEventListener('load',function(){
    var left_hd =document.querySelector('.left_hd');
    var mask=left_hd.querySelector('.mask');
    var big=left_hd.querySelector('.big');
    left_hd.addEventListener('mouseover',function(){
        mask.style.display='block';
        big.style.display='block';
    })
    left_hd.addEventListener('mouseout',function(){
        mask.style.display='none';
        big.style.display='none';
    })
    left_hd.addEventListener('mousemove',function(e){
        //先计算出鼠标在盒子内的坐标
        var x=e.pageX-this.offsetLeft;
        var y=e.pageY-this.offsetTop;
        // console.log(x);
        // console.log(y);
        var maskX=x-mask.offsetWidth/2;
        var maskY=y-mask.offsetHeight/2;
        var maskMAX=left_hd.offsetWidth-mask.offsetWidth;
        
        if (maskX<=0){
            maskX=0;
        }else if(maskX>=maskMAX){
            maskX=maskMAX;
        }
        if (maskY<=0){
            maskY=0;
        }else if(maskY>=maskMAX){
            maskY=maskMAX;
        }
        mask.style.left=maskX+'px';
        mask.style.top=maskY+'px';

        //大图片的最大移动距离=遮挡层移动距离*大图片
        var bigIMG=document.querySelector('.bigIMG');
        var bigMAX=bigIMG.offsetWidth-big.offsetWidth;
        //大图片的移动距离
        var bigX=maskX*bigMAX/maskMAX;
        var bigY=maskY*bigMAX/maskMAX;
        bigIMG.style.left=-bigX+'px';
        bigIMG.style.top=-bigY+'px';
    })
})