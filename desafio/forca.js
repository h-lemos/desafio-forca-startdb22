class Forca {
	constructor(palavraSecreta) {
		this.letrasChutadas = [];
		this.vidas = 6;
		this.palavraSecreta = palavraSecreta;
		this.palavra = [];
		for (let i = 0; i < this.palavraSecreta.length; i++) {
			this.palavra.push('_');
		}
	}

	chutar(letra) {
		if (this.letrasChutadas.includes(letra)) {
			return console.log('Você já tentou essa letra!')
		}
		if (letra.length > 1) {
			return console.log('Insira apenas uma letra por vez, por favor.')
		}
		if (this.palavraSecreta.includes(letra)) {
			for (let i in this.palavraSecreta) {
				if (this.palavraSecreta[i] === letra) {
					this.palavra[i] = letra;
				}
			}
		} else {
			this.vidas--
		}
		this.letrasChutadas.push(letra);
	}

	buscarEstado() {
		if (this.vidas < 1) {
			return 'perdeu'
		}
		if (!this.palavra.includes('_')) {
			return 'ganhou'
		} else {
			return 'aguardando chute'
		}
	}

	buscarDadosDoJogo() {
		return {
			letrasChutadas: this.letrasChutadas, // Contem todas as letras chutadas
			vidas: this.vidas, // Quantidade de vidas restantes
			palavra: this.palavra // Um array com as letras que já foram acertadas ou o valor '_' para as letras não identificadas
		}
	}
}

module.exports = Forca