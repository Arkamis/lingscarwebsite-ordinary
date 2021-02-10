const makes = [
	{
		make: 'abart',
		imageUrl: '/img/makes/abarthMake.jpg',
		cars: [
			{
				name: '595 Convertible',
				carUrl: '/img/makes/abarth/595-convertible.jpg',
				details: {
					link:
            'https://www.lingscars.com/business-car-leasing/abarth/595-convertible/3611568-1.4-T-Jet-16v-(145bhp)-(4-seats)-Convertible-2dr-1368cc-Petrol-Manual-(5-Speed)',
					selected: '1.4 T-Jet 16v (145bhp) (4 seats) Convertible 2dr 1368cc Petrol Manual (5 Speed) (Brand New)',
				},
				fuel: 'petrol',
				paint: 'non-metallic',
				gearbox: 'manual',
			},
			{
				name: '595 HatchBack',
				carUrl: '/img/makes/abarth/595-hatchback.jpg',
				details: {
					link:
            'https://www.lingscars.com/business-car-leasing/abarth/595-convertible/3611568-1.4-T-Jet-16v-(145bhp)-(4-seats)-Convertible-2dr-1368cc-Petrol-Manual-(5-Speed)',
					selected: '1.4 T-Jet 16v (145bhp) (4 seats) Convertible 2dr 1368cc Petrol Manual (5 Speed) (Brand New)',
				},
				fuel: 'petrol',
				paint: 'non-metallic',
				gearbox: 'manual',
			},
		],
		trims: [
			'70th Anniversary 1.4 T-Jet 16v (1368cc)',
			'1.4 T-Jet 16v (1368cc)',
			'Competizione 1.4 T-Jet 16v (1368cc)',
			'Competizione 70th Anniversary 1.4 T-Jet 16v (1368cc)',
			'Pista 70th Anniversary 1.4 T-Jet 16v (1368cc)',
			'Essesse 70th Anniversary 1.4 T-Jet 16v (1368cc)',
		],
		terms: {
			upfrontPayments: 9,
			monthlyPayments: 47,
		},
	},
	{
		make: 'Alfa romeo',
		imageUrl: '/img/makes/AlfaRomeoMake.png',
		cars: [
			{
				name: 'Giulia Saloon',
				carUrl: '/img/makes/alfa_romeo/giulia-saloon.jpg',
			},
			{
				name: 'Giulietta',
				carUrl: '/img/makes/alfa_romeo/giulietta.jpg',
			},
		],
	},
	{
		make: 'Audi',
		imageUrl: '/img/makes/audiMake.png',
		cars: [
			{
				name: 'A1 Sportback',
				carUrl: '/img/makes/audi/a1-sportback.jpg',
			},
			{
				name: 'E-TRON Estate',
				carUrl: '/img/makes/audi/e-tron-estate.jpg',
			},
		],
	},
	{
		make: 'BMW',
		imageUrl: '/img/makes/bmwMake.png',
		cars: [
			{
				name: '1 Series',
				carUrl: '/img/makes/bmw/1-series.jpg',
			},
			{
				name: '2 Series Gran Tourer',
				carUrl: '/img/makes/bmw/2-series-gran-tourer.jpg',
			},
		],
	},
	{
		make: 'Ford',
		imageUrl: '/img/makes/fordMake.png',
		cars: [
			{
				name: 'Ecosport',
				carUrl: '/img/makes/ford/ecosport.jpg',
			},
			{
				name: 'Fiesta',
				carUrl: '/img/makes/ford/fiesta.jpg',
			},
		],
	},
	{
		make: 'Honda',
		imageUrl: '/img/makes/hondaMake.png',
		cars: [
			{
				name: 'Civic',
				carUrl: '/img/makes/honda/civic.jpg',
			},
			{
				name: 'HR-V',
				carUrl: '/img/makes/honda/hr-v.jpg',
			},
		],
	},
	{
		make: 'Hyundai',
		imageUrl: '/img/makes/hyundaiMake.png',
		cars: [
			{
				name: 'i10',
				carUrl: '/img/makes/hyundai/i10.jpg',
			},
			{
				name: 'i30 Estate',
				carUrl: '/img/makes/hyundai/i30-estate.jpg',
			},
		],
	},
	{
		make: 'jeep',
		imageUrl: '/img/makes/jeepMake.png',
		cars: [
			{
				name: 'Compass Station',
				carUrl: '/img/makes/jeep/compass-station.jpg',
			},
			{
				name: 'Renegade',
				carUrl: '/img/makes/jeep/renegade.jpg',
			},
		],
	},
	{
		make: 'KIA',
		imageUrl: '/img/makes/kiaMake.png',
		cars: [
			{
				name: 'Stonic Estate',
				carUrl: '/img/makes/kia/stonic-state.jpg',
			},
			{
				name: 'Ceed',
				carUrl: '/img/makes/kia/ceed.jpg',
			},
			{
				name: 'Sportage Estate',
				carUrl: '/img/makes/kia/sportage-state.jpg',
			},
		],
	},
	{
		make: 'MITSUBISHI',
		imageUrl: '/img/makes/mitsubishiMake.png',
		cars: [
			{
				name: 'ASX Estate',
				carUrl: '/img/makes/mitsubishi/asx-estate.jpg',
			},
			{
				name: 'Eclipse Cross',
				carUrl: '/img/makes/mitsubishi/eclipse-cross.jpg',
			},
			{
				name: 'Mirage',
				carUrl: '/img/makes/mitsubishi/mirage.jpg',
			},
		],
	},
	{
		make: 'Mercedes',
		imageUrl: '/img/makes/mercedesMake.png',
		cars: [
			{
				name: 'A Class',
				carUrl: '/img/makes/mercedes/a-class.jpg',
			},
			{
				name: 'GLA Class',
				carUrl: '/img/makes/mercedes/gla-class.jpg',
			},
			{
				name: 'SL Class Convertible',
				carUrl: '/img/makes/mercedes/sl-class-convertible.jpg',
			},
		],
	},
	{
		make: 'SEAT',
		imageUrl: '/img/makes/seatMake.png',
		cars: [
			{
				name: 'Aurora',
				carUrl: '/img/makes/seat/aurora.jpg',
			},
			{
				name: 'Ibiza',
				carUrl: '/img/makes/seat/ibiza.jpg',
			},
		],
	},
	{
		make: 'Volvo',
		imageUrl: '/img/makes/volvoMake.png',
		cars: [
			{
				name: 'S60 Saloon',
				carUrl: '/img/makes/volvo/s60-saloon.jpg',
			},
			{
				name: 'V60 Estate',
				carUrl: '/img/makes/volvo/v60-estate.jpg',
			},
			{
				name: 'XC40 Estate',
				carUrl: '/img/makes/volvo/xc40-estate.jpg',
			},
		],
	},
	{
		make: 'NISSAN',
		imageUrl: '/img/makes/nissanMake.png',
		cars: [
			{
				name: 'Leaf',
				carUrl: '/img/makes/nissan/leaf.jpg',
			},
			{
				name: 'Micra',
				carUrl: '/img/makes/nissan/micra.jpg',
			},
			{
				name: 'X-Trail Station Wagon',
				carUrl: '/img/makes/nissan/xtrail.jpg',
			},
		],
	},
	{
		make: 'Mazda',
		imageUrl: '/img/makes/mazdaMake.png',
		cars: [
			{
				name: 'MX-5 Rf Convertible',
				carUrl: '/img/makes/mazda/mx-5-rf-convertible.jpg',
			},
		],
	},
]

export default makes