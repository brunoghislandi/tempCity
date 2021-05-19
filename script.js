async function getClima(){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+cities[i]+'&units=metric&appid=867ac26db76a30c4095f2641314d82b2')
    const data = await response.json()
    const city = data.name
    const temperatura = data.main.temp
    const umidade = data.main.humidity
    const pressao = data.main.pressure
    const vento = [data.wind.deg, data.wind.speed]

    document.getElementById('local').textContent = `City: ${city}.`
    document.getElementById('temp').textContent = `Current Temperature: ${temperatura} ºC.`
    document.getElementById('hum').textContent = `Relative Humidity: ${umidade} %.`
    document.getElementById('press').textContent = `Atmospheric Pressure: ${pressao} hpa.`
    document.getElementById('wind').textContent = `Wind: ${vento[0]}º com ${vento[1]} m/s. `       
}

var cities = ['nova veneza', 'criciuma', 'rincao', 'turvo'] // Cities in the state of Santa Catarina/Brazil

var i = 0

setInterval(()=>{
i++

if(i>3){
    i = 0
}
getClima()

},5000)  

getClima()