const contexto = document.getElementById('meu-grafico');

const grafico = new Chart(contexto, {
    type: 'bar',
    data: {
      labels: ['Vermelho', 'Azul', 'Amarelo', 'Verde', 'Roxo', 'Laranja'],
      datasets: [{
        label: 'Número de Votos',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });