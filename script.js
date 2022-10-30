let idInterval = 0;
const timer = () => {
	const date = new Date();
	const newDate = new Date(new Date().getFullYear() + 1, 0, 1);
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

	function weekDay(date) {
		const dayOfTheWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
		return dayOfTheWeek[date.getDay()];
	}

	function timeDay() {
		const timeOfDay = new Date().toLocaleTimeString('en-Us');
		return `${timeOfDay}`;
	}

	const days = (number) => {
		const deys = [' день', ' дня', ' дней'];
		const deyOne = number % 100,
			deyTwo = number % 10;
		return deyOne > 4 && deyOne < 21 ? number + deys[2] :
			deyTwo === 1 ? number + deys[0] :
				deyTwo > 1 && deyTwo < 5 ? number + deys[1] :
					number + deys[2];
	};

	return `${greeting()} Сегодня: ${weekDay(date)}
  Текущее время: ${timeDay()}
  До нового года осталось ${days(Math.ceil((newDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24))}`;

};
timer();
idInterval = setInterval(() => {
	div.innerText = timer();
}, 1000);

const div = document.createElement('div');
div.style.cssText = 'text-align: center;font-size: 30px;margin-top: 10%;';
document.body.append(div);