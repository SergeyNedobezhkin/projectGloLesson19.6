"use strict";
let idInterval = 0;
const timer = deadline => {
    const date = new Date();
    const dateStop = new Date(deadline);
    const timeRemaining = (dateStop.getTime() - date.getTime()) / 1000;

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
    const dayOfTheWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

    function addZero(time) {
        if (time < 10) {
            return `0${time}`;
        } else {
            return time;
        }
    }

    function timeDay() {
        let hours = date.getHours();
        const timeOfDay = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;

        return `${addZero(hours)}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())} ${timeOfDay}`;
    }

    function days() {

        if (timeRemaining > 0) {
            let dayRemaining = Math.floor(timeRemaining / 60 / 60 / 24);
            let count = 'дней';
            if (dayRemaining.toString().split('').pop() === 1) {
                count = 'день';
            } if (dayRemaining.toString().split('').pop() < 5 && dayRemaining.toString().split('').pop() > 1) {
                count = 'дня';
            }
            return `${dayRemaining} ${count}`;
        }

        if (timeRemaining < 0) {
            const dayRemaining = Math.floor(timeRemaining / 60 / 60 / 24) + 365;
            const dateStop = new Date(deadline);
            dateStop.setDate(dateStop.getDate());

            let count = 'дней';
            if (dayRemaining.toString().split('').pop() === 1) {
                count = 'день';
            } if (dayRemaining.toString().split('').pop() < 5 && dayRemaining.toString().split('').pop() > 1) {
                count = 'дня';
            }
            return `${dayRemaining} ${count}`;
        }
    }

    return `${greeting()} Сегодня: ${dayOfTheWeek[date.getDay() - 1]}
  Текущее время: ${timeDay()}
  До нового года осталось ${days()}`;

};

idInterval = setInterval(() => {
    div.innerText = timer('31 dec 2022');
}, 1000);

const div = document.createElement('div');
div.style.cssText = 'text-align: center;font-size: 30px;margin-top: 10%;';

document.body.append(div);
