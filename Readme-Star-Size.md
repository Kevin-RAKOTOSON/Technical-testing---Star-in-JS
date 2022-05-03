function printStar(size) {
	if (size == 0) {
		console.log('*')
		return
	}
	else if (size < 0) {
		console.error ('Veuillez saisir une taille >= 0')
		return
	}
	const sx = 7 + (size - 1) * 4,
		  sy = 5 + (size - 1) * 4

	let graph = ''
	for (y = 0; y < sy; y++) {
		for (x= 0; x < sx; x++) {
			if(y < size) {
				if (Math.abs(x - (sx / 2 ))) {
				if(x === Math.floor(sx / 2 - y) || x === Math.floor (sx / 2 + y))
					graph += '*'
				else graph += ' '
			}
		}
		else if(y === size || (sy - y - 1) === size) {
				if(Math.floor(sy / 2 - size) + 1 < x && x < Math.floor (sx / 2 + size))
					graph += ' '
				else graph += '*'
		}
		else if (y > size && (sy - y - 1) > size ) {
			if((y === size + x && y <= sy / 2) || (sy - y - 1 === size + x && y > sy / 2))
				graph += '*'
			else if((y === size + sx - x - 1 && y <= sy / 2) || (sy - y === size + sx - x && y > sy / 2))
				graph += '*'
				else graph += ' '
		}
		else if ((sy - y - 1) < size) {
			if(Math.abs(x - (sx / 2))) {
				if(x === Math.floor(sx / 2 - sy + y + 1) || x === Math.floor(sx / 2 + sy - y - 1))
					graph += '*'
				else graph += ' '
			}
		}
	}
	graph += '\n'
}
console.log(graph)
}
printStar(5)