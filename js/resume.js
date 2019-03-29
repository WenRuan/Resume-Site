function draw() {
	var canvas = document.getElementById('whiteboard');
	if(canvas.getContext){
		var ctx = canvas.getContext('2d');

		ctx.fillStyle = 'rgba(0,0,200,0.8)';
		ctx.fillRect(30,30,50,50);
		ctx.fillStyle = 'rgba(0,0,200,0.6)';
		ctx.fillRect(50,50,45,45);
		ctx.fillStyle = 'rgba(0,0,200,0.4)';
		ctx.fillRect(70,70,40,40);
		ctx.fillStyle = 'rgba(0,0,200,0.2)';
		ctx.fillRect(90,90,35,35);
	}
}


function createchart(){

	let myChart = document.getElementById('myChart').getContext('2d');

	let barChart = new Chart(myChart, {
		type:'horizontalBar',
		data: {
			labels:['Java', 'Python', 'Javascript', 'HTML/CSS', 'C++', 'SQL'],
			datasets:[{
				label: 'Proficiency',
				data: [20, 15, 10, 13, 15, 10],
				responsive: true,
				backgroundColor: [

	                'rgba(255, 99, 132, 0.5)',
	                'rgba(54, 162, 235, 0.5)',
	                'rgba(255, 206, 86, 0.5)',
	                'rgba(75, 192, 192, 0.5)',
	                'rgba(153, 102, 255, 0.5)',
	                'rgba(255, 159, 64, 0.5)'
				],
				
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
			}]
		}, 
		options: {
			label: {
			fontSize: '18px'
			},
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}

		}

	});
	
}