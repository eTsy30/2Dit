google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
const btn = document.querySelector('task4--button');
function serializeForm(formNode) {
    console.log(formNode.elements)
}
function handleFormSubmit(event) {
    event.preventDefault()
    getDataForm(applicantForm)
}
function getDataForm(formNode) {
    const { elements } = formNode

    Array.from(elements)
        .forEach((element) => {
            const { name, value } = element
            alert('name=' + element.name + '   ' + 'value=' + element.value)
            console.log({ name, value })
        })
}
const applicantForm = document.getElementById('submitFormTask4')
applicantForm.addEventListener('submit', handleFormSubmit)

function drawChart() {
    const CountryCount = google.visualization.arrayToDataTable([['Task', 'Hours per Day'], ['-  Россия', 50], ['-  Казахстан', 10], ['-  Узбекистан', 40]]);
    const CityryCount = google.visualization.arrayToDataTable([['Task', 'Hours per Day'], ['- Тюмень', 30], ['-  Нур-Султан', 12], ['-  Ташкент', 18], ['-  Алма-Аты', 25], ['-  Ташкент', 25]]);
    const CountryPay = google.visualization.arrayToDataTable([['Task', 'Hours per Day'], ['-  Россия', 50], ['-  Казахстан', 10], ['-  Узбекистан', 40]]);
    const CityPay = google.visualization.arrayToDataTable([['Task', 'Hours per Day'], ['- Тюмень', 30], ['-  Нур-Султан', 12], ['-  Ташкент', 18], ['-  Алма-Аты', 25], ['-  Ташкент', 25]]);

    const options = {
        title: '',
        pieSliceText: 'none',
        pieHole: 0.72,
        // width: 240,
        height: 300,
        chartArea: {
            left: 0, top: 0,
            bottom: 100, width: '100%', height: '100%'
        },
        colors: ['#9D121A', '#e6693e', '#474444'],
        legend: {
            position: 'bottom',

        }
    };
    const options2 = {
        title: '',
        pieSliceText: 'none',
        height: 300,
        chartArea: {
            left: 0, top: 0,
            bottom: 100, width: '100%', height: '100%'
        },
        pieHole: 0.72,
        colors: ['#9D121A', '#e6693e', '#005FA7', '#808080', '#474444'],
        legend: {
            position: 'bottom',

        }
    };

    const chartCountryCount = new google.visualization.PieChart(document.getElementById('countryCount'));
    const chartCityryCount = new google.visualization.PieChart(document.getElementById('cityryCount'));
    const chartCountryPay = new google.visualization.PieChart(document.getElementById('countryPay'));
    const chartCityPay = new google.visualization.PieChart(document.getElementById('cityPay'));
    chartCountryCount.draw(CountryCount, options);
    chartCityryCount.draw(CityryCount, options2);
    chartCountryPay.draw(CountryPay, options);
    chartCityPay.draw(CityPay, options2);
}

var input = document.querySelector("#phone");
var iti = window.intlTelInput(input, {
    separateDialCode: true,
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.3/build/js/utils.js",
});
console.log(window.iti.getNumber());
window.iti = iti;



const accordion = document.getElementById('accordion');
accordion.addEventListener('click', change);
function change(event) {
    const targ = event.target;
    if (targ.tagName !== 'H3') return;
    if (targ.classList.contains('select')) {
        hideAll();
    } else {
        hideAll();
        targ.classList.add('select');
        showText(targ.nextElementSibling);
    }
}
function hideAll() {
    const h3El = accordion.querySelectorAll('h3');
    const divEl = accordion.querySelectorAll('div');
    for (let i = 0; i < h3El.length; i++) {
        h3El[i].classList.remove('select');
    }
    for (let i = 0; i < divEl.length; i++) {
        divEl[i].style.height = '0';
    }
}
function showText(textEl) {
    textEl.style.height = textEl.scrollHeight + 'px';
}
