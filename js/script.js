const ctx = document.getElementById('first-chart').getContext("2d")
const bars = document.getElementById('bars')
const nut = document.getElementById('nut')


const gradient = ctx.createLinearGradient(0,0,0, 400)
gradient.addColorStop(0, '#5cffca')
gradient.addColorStop(1, '#66ff')


let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [ 'Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        datasets: [{
            data: [15,13,16,14,13,17,19,20,19,17,20,20],
            label: "Faturamento",
            fill: true,
            backgroundColor: gradient,
         
        }]
    },
    options: {
        responsive: true,
        radius: 5,
        hoverRadius: 10
    }
})

let secondChart = new Chart(bars, {
    type: 'bar',
    data: {
        labels: [ 'Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        datasets: [{
            data: [10,12,16,14,13,17,19,22,20,19,21,21],
            label: "Número de vendas",
            fill: true,
            backgroundColor: [
                'rgba(46, 128, 138, 1)',
            ],

        }]
    },
    options: {
        responsive: true,
        radius: 5,
        hoverRadius: 10
    }
})

let thirdChart = new Chart(nut, {
    type: 'pie',
    data: {
        labels: [
            'Fecharam',
            'Não Fecharam',
            'Desistiram'
          ],
        datasets: [{
            data: [5000,2200,4000],
            label: "Conversão",
            backgroundColor: [
                'rgba(46, 128, 38, 1)',
                'darkred',
                'rgba(46, 228, 138, 1)'
            ],
            hoverOffset: 1,
            borderColor: 'gray',
            borderWidth: 1
        }]
    }  
})
