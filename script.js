const h1 = document.getElementById('code')
const p = document.getElementById('des')
const main = document.querySelector('main')
const intro = document.querySelector('.intro')
const btn = document.getElementById('btn')
// promo code data
const data = [
	{
		"code": "VELO10",
		"description": "10% off your first ride"
	},
	{
		"code": "RIDE50",
		"description": "Get 50 minutes free rental"
	},
	{
		"code": "BIKE2025",
		"description": "Enjoy 25% off in 2025"
	},
	{
		"code": "FREEDAY",
		"description": "First rental day is free"
	},
	{
		"code": "ECO15",
		"description": "15% off for choosing eco transport"
	},
	{
		"code": "WEEKEND20",
		"description": "20% discount on weekend rides"
	},
	{
		"code": "RIDE2X1",
		"description": "Pay for 1 hour, ride for 2"
	},
	{
		"code": "SPRINT30",
		"description": "30% off short rides"
	},
	{
		"code": "CITYPASS",
		"description": "1 free hour for new users"
	},
	{
		"code": "PEDAL25",
		"description": "25% loyalty discount"
	},
	{
		"code": "URBANRIDE",
		"description": "15% off city rides"
	},
	{
		"code": "NIGHT10",
		"description": "10% off evening & night rides"
	},
	{
		"code": "BIKELIFE",
		"description": "20 free minutes with first rental"
	},
	{
		"code": "GREEN30",
		"description": "30% weekday discount"
	},
	{
		"code": "TOUR2025",
		"description": "20% off guided bike tours"
	}
]


console.log(data);

main.addEventListener('click', () => {
    const res = Math.floor(Math.random()*14)
    
    const win = data[res];
    intro.innerText = win.description;
    btn.style.display = 'block'
    h1.innerText = win.code;
    p.innerText = win.description
})
