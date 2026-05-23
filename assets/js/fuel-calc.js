// assets/js/fuel-calc.js

const FUEL_EFFICIENCY = {
    "Лавовое ведро": 100,
    "Угольный блок": 80,
    "Блок ламинарии": 20,
    "Блок сушёной ламинарии": 20,
    "Уголь / Древесный уголь": 8,
    "Стержень ифрита": 12,
    "Блок бамбука": 20,
    "Древесина / Брёвна": 1.5,
    "Доски": 1.5,
    "Саженицы": 0.5
};

const FURNACE_TIMES = {
    "Обычная печь": 10,
    "Доменная печь / Коптильня": 5
};

function calculateFuel() {
    const neededInput = document.getElementById('fuelNeeded');
    const fuelSelect = document.getElementById('fuelType');
    const furnaceSelect = document.getElementById('furnaceType');
    const resultDiv = document.getElementById('fuelResult');

    const needed = parseInt(neededInput.value);
    if (isNaN(needed) || needed <= 0) {
        resultDiv.textContent = "Ошибка! Введите целое число предметов.";
        resultDiv.style.color = "#ff4444";
        return;
    }

    const fuelType = fuelSelect.value;
    const efficiency = FUEL_EFFICIENCY[fuelType];
    const furnaceType = furnaceSelect.value;
    const timePerItem = FURNACE_TIMES[furnaceType];

    const fuelNeeded = Math.ceil(needed / efficiency);
    const totalCanSmelt = fuelNeeded * efficiency;
    const remainder = totalCanSmelt - needed;
    const totalTimeSec = needed * timePerItem;
    const totalTimeMin = totalTimeSec / 60;

    resultDiv.textContent =
        `Нужно переплавить:          ${needed} шт.\n` +
        `Вид топлива:                ${fuelType}\n` +
        `Эффективность:              ${efficiency} предметов на ед.\n` +
        `───────────────────────────────\n` +
        `Итого нужно топлива:        ${fuelNeeded} шт.\n` +
        `Переплавит всего:           ${totalCanSmelt} предметов\n` +
        `Останется в запасе:         ${remainder} предметов\n` +
        `Время работы печи:          ≈ ${totalTimeSec.toFixed(0)} сек ` +
        `(${totalTimeMin.toFixed(1)} мин) в ${furnaceType.toLowerCase()}`;

    resultDiv.style.color = "#e0bbff";
}