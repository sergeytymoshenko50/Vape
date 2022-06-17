//slider
var slider = {
	slides: ['img/main_img.png'/*,'img/slider2.png', 'img/slider3.png'*/],
	frame: 0, // текущий кадр для отбражения - индекс картинки из массива
	
	set: function(image) { // установка нужного фона слайдеру
		document.getElementById("main-wrapp").style.backgroundImage = "url(" + image + ")";
		
	},
	setMarker: function () {
		let headerMarker = document.querySelectorAll(".header-marker");
		headerMarker.forEach(marker => marker.classList.remove("active"));
		headerMarker[this.frame].classList.add("active");
				
	},
	init: function() { // запуск слайдера с картинкой с нулевым индексом
		this.set(this.slides[this.frame]);
		this.setMarker();
	},
	left: function() { // крутим на один кадр влево
		this.frame--;
		if(this.frame < 0) this.frame = this.slides.length-1;
		this.set(this.slides[this.frame]);
	},
	right: function() { // крутим на один кадр вправо
		this.frame++;
		if(this.frame == this.slides.length) this.frame = 0;
		this.set(this.slides[this.frame]);		
	}
};
window.onload = function() { // запуск слайдера после загрузки документа
	slider.init();
	setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок
		slider.right();
		slider.setMarker();
	},5000);
};

//accsesory move
let accssesoryMove = {
	currentWidth: 0,
	markerCount: 0,
	move () {
		let move = getComputedStyle(document.body.querySelectorAll("#move")[0]);
		let width = parseFloat(move.width);	
		return width;
	},
	moveRight () {
		this.currentWidth += this.move();
		if (this.currentWidth > 1200) this.currentWidth = this.move() * 2;
		
		document.querySelectorAll(".accessories-wrap")[0].style.right = this.currentWidth + "px";
		this.markerCount++;
		console.log(this.markerCount)
		this.accssesoryMarker();		
	},
	moveLeft () {
		this.currentWidth -= this.move();
		if (this.currentWidth <= 0) this.currentWidth = 0;
		document.querySelectorAll(".accessories-wrap")[0].style.right = this.currentWidth + "px";
		
		this.markerCount--;
		this.accssesoryMarker();
		
	},
	moveMobile () {
		
	},
	accssesoryMarker () {
		let accsMarker = document.querySelectorAll(".accessories__marker");
		accsMarker.forEach(marker => {
			marker.classList.remove("active");
		});
		if (this.markerCount < 0) this.markerCount = 0;
		if (this.markerCount > accsMarker.length - 1) this.markerCount = accsMarker.length-1;
		accsMarker[this.markerCount].classList.add("active");
		
	}
};


//menu
let showMenu = () => {
	document.body.querySelector(".menu").classList.toggle("show");

};
let showMenuFooter = () => {
	document.body.querySelector(".menu").classList.toggle("show");
	document.body.querySelector(".menu__container").style.justifyContent = "flex-end";
};

// servives move arrowes
const servicesMove = {
	servCount: 0,
	servicesList() {
		let services = document.querySelectorAll(".service");
		return services;
	},
	setDisNone() {
		for (let i = 0; i < this.servicesList().length; i++){
			this.servicesList()[i].style.display = "none";
		};
	},
	servrigth () {
		this.setDisNone();
		this.servCount++
		if (this.servCount > this.servicesList().length - 1) this.servCount = 0;
		this.servicesList()[this.servCount].style.display = "flex";
	},
	servLeft () {
		this.setDisNone();
		this.servCount--
		if (this.servCount < 0) this.servCount = this.servicesList().length - 1;
		this.servicesList()[this.servCount].style.display = "flex";
	}
};
