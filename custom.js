let normalFontSize = 1000;

function saveNormalFontSize(size) {
	normalFontSize = normalFontSize < size ? normalFontSize : size;
}

(function () {
	function patch() {
		const currentLineDiv = document.querySelector(".current-line");
		document.querySelectorAll(".view-line").forEach(n => {
			saveNormalFontSize(n.style["font-size"]);
			if (n.style.top === currentLineDiv.parentNode.style.top) {
				n.style["font-size"] = "30px";
			} else {
				n.style["font-size"] = normalFontSize;
			}
		});
	}
	setInterval(patch, 50);
})();
