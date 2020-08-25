function isElementInViewport (el) {

	//special bonus for those using jQuery
	if (typeof jQuery === "function" && el instanceof jQuery) {
		el = el[0];
	}

	if(!el){
		return false;
	}

	var rect = el.getBoundingClientRect();

	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
		rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
	);
}

let happenedAlready = false;

const isInViewport = () => (
	isElementInViewport(
		$("#bar-chart:first")
	)
);

const addMarkers = () => {
	if(isInViewport() && !happenedAlready){
		happenedAlready = true
		const map = $("#bar-chart");

		for(let i = 0; i < 3; i++){
			const marker = $("<div class=\"bar-container\"><div class=\"bar\"></div></div>");
			console.log(marker);
			map.append(marker);
			console.log({map, marker});
		}
	}
}

$(function() {
	$(window).scroll(addMarkers);
	addMarkers();
});
