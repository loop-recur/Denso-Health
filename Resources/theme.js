Theme = function(name) {
	
	var themes = {
		blue_steel: {
			button: {
				backgroundColor: "black",
				color: "white"
			},
			label: {
				color: "#c5ab7d"
			},
			win: {
				backgroundImage: "/images/main_bg.png"
			}
		},

		cadillac: {
			button: {
				backgroundColor: "brown",
				color: "white"
			},
			label: {
				color: "white"
			},
			win: {
				backgroundImage: "/images/main_bg.png"
			}
		}
	}
	
	return themes[name];
};