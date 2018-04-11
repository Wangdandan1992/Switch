window.onload = function(){
	//获取元素
	var imgbo = document.querySelectorAll('.img-box div'); 
	var srcs = [
		['img/3.jpg.jpg','img/4.jpg.jpg','img/5.jpg.jpg','img/6.jpg.jpg','img/7.jpg.jpg'],
		['img/yi.jpg.jpg','img/er.jpg.jpg','img/san.jpg.jpg','img/si.jpg.jpg']
	]
	var texts = [
		['第一组第一张','第一组第二张','第一组第三张','第一组第四张','第一组第五张'],
		['第二组第一张','第二组第二张','第二组第三张','第二组第四张']
	];
	for(var i=0;i<imgbo.length;i++){
		imgbo[i].img = imgbo[i].querySelector('img');
		imgbo[i].img.p = imgbo[i].querySelectorAll('p');
		imgbo[i].img.imgSrc = srcs[i];
		imgbo[i].img.imgText = texts[i];
		imgbo[i].img.index =0;
		imgbo[i].img.onclick = function(){
			this.index++;
			//设置图片的边界
			if(this.index>this.imgSrc.length-1){
				this.index = 0;
			}
			this.src = this.imgSrc[this.index];
			this.p[0].innerHTML = this.imgText[this.index];
			this.p[1].innerHTML = this.index+1+'/'+this.imgSrc.length;
		}
	}
	var bnt = document.querySelector('#bnt1');
	var bnts = document.querySelector('#bnt2');
	bnts.onclick = function(){
		for(var i=0;i<imgbo.length;i++){
			var img = imgbo[i].querySelector('img');
			var p = imgbo[i].querySelectorAll('p');
			img.index++;
			if(img.index>srcs[i].length-1){
				img.index = 0;
			}
			img.src = srcs[i][img.index];
			p[0].innerHTML = texts[i][img.index];
			p[1].innerHTML = img.index+1+'/'+srcs[i].length;
		}
	};
	bnt.onclick = function(){
		for(var i=0;i<imgbo.length;i++){
			var img = imgbo[i].querySelector('img');
			var p = imgbo[i].querySelectorAll('p');
			img.index--;
			if(img.index<0){
				img.index = srcs[i].length-1;
			}
			img.src = srcs[i][img.index];
			p[0].innerHTML = texts[i][img.index];
			p[1].innerHTML = img.index+1+'/'+srcs[i].length;
		}
	}
}
