const div = document.createElement('div');
let idInterval = 0;

const timer = () => {
	const date = new Date();
	const newDate = new Date(date.getFullYear() + 1, 0, 1);

	function greeting() {
		const hours = date.getHours();

		if (hours < 6) {
			return 'Добрый день.';
		} else if (hours < 12) {
			return 'Доброе утро.';
		} else if (hours < 19) {
			return 'Добрый день.';
		} else {
			return 'Добрый вечер.';
		}
	}

	function weekDay() {
		return date.toLocaleDateString('ru-RU', { weekday: 'long' })
		.replaceAll(/([а-яё])([а-яё]*)/gi, (word, first, rest) => (`${first.toUpperCase()}${rest.toLowerCase()}`));
	}

	const timeDay = () => {
		const timeOfDay = date.toLocaleTimeString('en-Us');
		return `${timeOfDay}`;
	};

	const days = (num, words) => {
		let num10 = num % 10;
		let num100 = num % 100;
		switch (true) {
			case num100 >= 10 && num100 <= 20: return `${num} ${words[2]}`;
			case num10 === 1: return `${num} ${words[0]}`;
			case num && num10 < 5: return `${num} ${words[1]}`;
			default: return `${num} ${words[2]}`;
		}
	};

	return `${greeting()} Сегодня: ${weekDay()}
  Текущее время: ${timeDay()}
  До нового года осталось ${days(Math.ceil((newDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24),
		[' день', ' дня', ' дней'])}`;
};
div.innerText = timer();
idInterval = setInterval(() => {
	div.innerText = timer();
}, 1000);

div.style.cssText = 'text-align: center;font-size: 30px;margin-top: 10%;';
document.body.append(div);
