////////////////// Product 2 /////////////////////

export interface Product2 {
  id: number
  brand: string
  name: string
  image: string
  description: string
  stockQuantity: number
  originalPrice: number
  discountRate: number
  currentPrice: number
  averageRating: number
  ratingCount: number
  category: number
}





////////////////// Product 1 /////////////////////

export interface Product {
  id: string              // Number
  brand: string
  name: string
  image: string
  originalPrice?: string  // Number
  currentPrice: string    // Number
  discountRate?: string   // Number
  adTag: boolean
  averageRating: string   // Number
  ratingCount: string     // Number
}

export const products: Product[] = [
  {
    id: "prod-001",
    brand: "브랜드명",
    name: "Tempore 제품",
    image: "https://picsum.photos/seed/prod1/300/300",
    originalPrice: "36556",
    currentPrice: "18278",
    discountRate: "50%",
    adTag: true,
    averageRating: "3.19",
    ratingCount: "233"
  },
  {
    id: "prod-002",
    brand: "브랜드명",
    name: "Corporis 제품",
    image: "https://picsum.photos/seed/prod2/300/300",
    originalPrice: "56868",
    currentPrice: "28434",
    discountRate: "50%",
    adTag: true,
    averageRating: "4.35",
    ratingCount: "563"
  },
  {
    id: "prod-003",
    brand: "브랜드명",
    name: "Sed 제품",
    image: "https://picsum.photos/seed/prod3/300/300",
    originalPrice: "184794",
    currentPrice: "129355",
    discountRate: "30%",
    adTag: true,
    averageRating: "2.58",
    ratingCount: "100"
  },
  {
    id: "prod-004",
    brand: "브랜드명",
    name: "Occaecati 제품",
    image: "https://picsum.photos/seed/prod4/300/300",
    originalPrice: "90990",
    currentPrice: "54594",
    discountRate: "40%",
    adTag: true,
    averageRating: "4.01",
    ratingCount: "579"
  },
  {
    id: "prod-005",
    brand: "브랜드명",
    name: "Dolore 제품",
    image: "https://picsum.photos/seed/prod5/300/300",
    originalPrice: "172853",
    currentPrice: "120997",
    discountRate: "30%",
    adTag: true,
    averageRating: "3.05",
    ratingCount: "608"
  },
  {
    id: "prod-006",
    brand: "브랜드명",
    name: "Labore 제품",
    image: "https://picsum.photos/seed/prod6/300/300",
    originalPrice: "31703",
    currentPrice: "28532",
    discountRate: "10%",
    adTag: true,
    averageRating: "4.25",
    ratingCount: "353"
  },
  {
    id: "prod-007",
    brand: "브랜드명",
    name: "Fuga 제품",
    image: "https://picsum.photos/seed/prod7/300/300",
    originalPrice: "70758",
    currentPrice: "63682",
    discountRate: "10%",
    adTag: true,
    averageRating: "4.89",
    ratingCount: "349"
  },
  {
    id: "prod-008",
    brand: "브랜드명",
    name: "Quod 제품",
    image: "https://picsum.photos/seed/prod8/300/300",
    originalPrice: "54312",
    currentPrice: "38018",
    discountRate: "30%",
    adTag: true,
    averageRating: "2.74",
    ratingCount: "872"
  },
  {
    id: "prod-009",
    brand: "브랜드명",
    name: "Magni 제품",
    image: "https://picsum.photos/seed/prod9/300/300",
    originalPrice: "188263",
    currentPrice: "150610",
    discountRate: "20%",
    adTag: true,
    averageRating: "4.52",
    ratingCount: "752"
  },
  {
    id: "prod-010",
    brand: "브랜드명",
    name: "Eum 제품",
    image: "https://picsum.photos/seed/prod10/300/300",
    currentPrice: "170568",
    adTag: true,
    averageRating: "4.93",
    ratingCount: "392"
  },
  {
    id: "prod-011",
    brand: "브랜드명",
    name: "Consequuntur 제품",
    image: "https://picsum.photos/seed/prod11/300/300",
    originalPrice: "174714",
    currentPrice: "139771",
    discountRate: "20%",
    adTag: true,
    averageRating: "4.57",
    ratingCount: "638"
  },
  {
    id: "prod-012",
    brand: "브랜드명",
    name: "Maxime 제품",
    image: "https://picsum.photos/seed/prod12/300/300",
    originalPrice: "181349",
    currentPrice: "163214",
    discountRate: "10%",
    adTag: true,
    averageRating: "4.26",
    ratingCount: "51"
  },
  {
    id: "prod-013",
    brand: "브랜드명",
    name: "Vero 제품",
    image: "https://picsum.photos/seed/prod13/300/300",
    currentPrice: "105861",
    adTag: true,
    averageRating: "4.64",
    ratingCount: "892"
  },
  {
    id: "prod-014",
    brand: "브랜드명",
    name: "Fugit 제품",
    image: "https://picsum.photos/seed/prod14/300/300",
    originalPrice: "129647",
    currentPrice: "103717",
    discountRate: "20%",
    adTag: true,
    averageRating: "3.63",
    ratingCount: "859"
  },
  {
    id: "prod-015",
    brand: "브랜드명",
    name: "Aspernatur 제품",
    image: "https://picsum.photos/seed/prod15/300/300",
    originalPrice: "72638",
    currentPrice: "58110",
    discountRate: "20%",
    adTag: true,
    averageRating: "3.39",
    ratingCount: "691"
  },
  {
    id: "prod-016",
    brand: "브랜드명",
    name: "Natus 제품",
    image: "https://picsum.photos/seed/prod16/300/300",
    currentPrice: "199878",
    adTag: true,
    averageRating: "4.02",
    ratingCount: "180"
  },
  {
    id: "prod-017",
    brand: "브랜드명",
    name: "Reiciendis 제품",
    image: "https://picsum.photos/seed/prod17/300/300",
    originalPrice: "94175",
    currentPrice: "84757",
    discountRate: "10%",
    adTag: false,
    averageRating: "3.66",
    ratingCount: "281"
  },
  {
    id: "prod-018",
    brand: "브랜드명",
    name: "Temporibus 제품",
    image: "https://picsum.photos/seed/prod18/300/300",
    originalPrice: "87570",
    currentPrice: "43785",
    discountRate: "50%",
    adTag: false,
    averageRating: "3.31",
    ratingCount: "791"
  },
  {
    id: "prod-019",
    brand: "브랜드명",
    name: "Quidem 제품",
    image: "https://picsum.photos/seed/prod19/300/300",
    currentPrice: "90043",
    adTag: true,
    averageRating: "4.51",
    ratingCount: "415"
  },
  {
    id: "prod-020",
    brand: "브랜드명",
    name: "Reprehenderit 제품",
    image: "https://picsum.photos/seed/prod20/300/300",
    originalPrice: "47350",
    currentPrice: "42615",
    discountRate: "10%",
    adTag: true,
    averageRating: "4.78",
    ratingCount: "585"
  },
  {
    id: "prod-021",
    brand: "브랜드명",
    name: "Possimus 제품",
    image: "https://picsum.photos/seed/prod21/300/300",
    originalPrice: "85738",
    currentPrice: "42869",
    discountRate: "50%",
    adTag: true,
    averageRating: "3.75",
    ratingCount: "910"
  },
  {
    id: "prod-022",
    brand: "브랜드명",
    name: "Vero 제품",
    image: "https://picsum.photos/seed/prod22/300/300",
    originalPrice: "67452",
    currentPrice: "53961",
    discountRate: "20%",
    adTag: true,
    averageRating: "2.85",
    ratingCount: "767"
  },
  {
    id: "prod-023",
    brand: "브랜드명",
    name: "Omnis 제품",
    image: "https://picsum.photos/seed/prod23/300/300",
    originalPrice: "171289",
    currentPrice: "137031",
    discountRate: "20%",
    adTag: false,
    averageRating: "4.37",
    ratingCount: "443"
  },
  {
    id: "prod-024",
    brand: "브랜드명",
    name: "Accusamus 제품",
    image: "https://picsum.photos/seed/prod24/300/300",
    originalPrice: "134700",
    currentPrice: "107760",
    discountRate: "20%",
    adTag: false,
    averageRating: "3.05",
    ratingCount: "146"
  },
  {
    id: "prod-025",
    brand: "브랜드명",
    name: "Dolore 제품",
    image: "https://picsum.photos/seed/prod25/300/300",
    currentPrice: "159372",
    adTag: false,
    averageRating: "4.39",
    ratingCount: "886"
  },
  {
    id: "prod-026",
    brand: "브랜드명",
    name: "Provident 제품",
    image: "https://picsum.photos/seed/prod26/300/300",
    originalPrice: "70066",
    currentPrice: "35033",
    discountRate: "50%",
    adTag: true,
    averageRating: "2.90",
    ratingCount: "701"
  },
  {
    id: "prod-027",
    brand: "브랜드명",
    name: "In 제품",
    image: "https://picsum.photos/seed/prod27/300/300",
    currentPrice: "186345",
    adTag: true,
    averageRating: "3.46",
    ratingCount: "615"
  },
  {
    id: "prod-028",
    brand: "브랜드명",
    name: "Dolorem 제품",
    image: "https://picsum.photos/seed/prod28/300/300",
    originalPrice: "168704",
    currentPrice: "134963",
    discountRate: "20%",
    adTag: true,
    averageRating: "4.93",
    ratingCount: "886"
  },
  {
    id: "prod-029",
    brand: "브랜드명",
    name: "Inventore 제품",
    image: "https://picsum.photos/seed/prod29/300/300",
    originalPrice: "60029",
    currentPrice: "30014",
    discountRate: "50%",
    adTag: true,
    averageRating: "4.71",
    ratingCount: "773"
  },
  {
    id: "prod-030",
    brand: "브랜드명",
    name: "Reiciendis 제품",
    image: "https://picsum.photos/seed/prod30/300/300",
    originalPrice: "198024",
    currentPrice: "158419",
    discountRate: "20%",
    adTag: true,
    averageRating: "2.78",
    ratingCount: "450"
  },
  {
    id: "prod-031",
    brand: "브랜드명",
    name: "Quibusdam 제품",
    image: "https://picsum.photos/seed/prod31/300/300",
    currentPrice: "148940",
    adTag: true,
    averageRating: "4.88",
    ratingCount: "901"
  },
  {
    id: "prod-032",
    brand: "브랜드명",
    name: "Quo 제품",
    image: "https://picsum.photos/seed/prod32/300/300",
    originalPrice: "161225",
    currentPrice: "145102",
    discountRate: "10%",
    adTag: true,
    averageRating: "3.77",
    ratingCount: "113"
  },
  {
    id: "prod-033",
    brand: "브랜드명",
    name: "Sequi 제품",
    image: "https://picsum.photos/seed/prod33/300/300",
    originalPrice: "197496",
    currentPrice: "118497",
    discountRate: "40%",
    adTag: true,
    averageRating: "4.02",
    ratingCount: "161"
  },
  {
    id: "prod-034",
    brand: "브랜드명",
    name: "Voluptas 제품",
    image: "https://picsum.photos/seed/prod34/300/300",
    originalPrice: "72349",
    currentPrice: "43409",
    discountRate: "40%",
    adTag: true,
    averageRating: "4.88",
    ratingCount: "949"
  },
  {
    id: "prod-035",
    brand: "브랜드명",
    name: "Velit 제품",
    image: "https://picsum.photos/seed/prod35/300/300",
    originalPrice: "30149",
    currentPrice: "18089",
    discountRate: "40%",
    adTag: false,
    averageRating: "3.31",
    ratingCount: "24"
  },
  {
    id: "prod-036",
    brand: "브랜드명",
    name: "Cumque 제품",
    image: "https://picsum.photos/seed/prod36/300/300",
    originalPrice: "125153",
    currentPrice: "100122",
    discountRate: "20%",
    adTag: true,
    averageRating: "3.10",
    ratingCount: "251"
  },
  {
    id: "prod-037",
    brand: "브랜드명",
    name: "Adipisci 제품",
    image: "https://picsum.photos/seed/prod37/300/300",
    currentPrice: "50645",
    adTag: false,
    averageRating: "4.33",
    ratingCount: "840"
  },
  {
    id: "prod-038",
    brand: "브랜드명",
    name: "Voluptatum 제품",
    image: "https://picsum.photos/seed/prod38/300/300",
    originalPrice: "169645",
    currentPrice: "152680",
    discountRate: "10%",
    adTag: true,
    averageRating: "2.82",
    ratingCount: "491"
  },
  {
    id: "prod-039",
    brand: "브랜드명",
    name: "Quam 제품",
    image: "https://picsum.photos/seed/prod39/300/300",
    originalPrice: "73287",
    currentPrice: "58629",
    discountRate: "20%",
    adTag: false,
    averageRating: "3.82",
    ratingCount: "626"
  },
  {
    id: "prod-040",
    brand: "브랜드명",
    name: "Error 제품",
    image: "https://picsum.photos/seed/prod40/300/300",
    originalPrice: "85521",
    currentPrice: "51312",
    discountRate: "40%",
    adTag: true,
    averageRating: "4.39",
    ratingCount: "711"
  },
  {
    id: "prod-041",
    brand: "브랜드명",
    name: "Pariatur 제품",
    image: "https://picsum.photos/seed/prod41/300/300",
    originalPrice: "111714",
    currentPrice: "78199",
    discountRate: "30%",
    adTag: true,
    averageRating: "4.99",
    ratingCount: "670"
  },
  {
    id: "prod-042",
    brand: "브랜드명",
    name: "Nisi 제품",
    image: "https://picsum.photos/seed/prod42/300/300",
    originalPrice: "144845",
    currentPrice: "86907",
    discountRate: "40%",
    adTag: true,
    averageRating: "3.63",
    ratingCount: "258"
  },
  {
    id: "prod-043",
    brand: "브랜드명",
    name: "Tenetur 제품",
    image: "https://picsum.photos/seed/prod43/300/300",
    originalPrice: "46784",
    currentPrice: "37427",
    discountRate: "20%",
    adTag: true,
    averageRating: "2.55",
    ratingCount: "572"
  },
  {
    id: "prod-044",
    brand: "브랜드명",
    name: "Expedita 제품",
    image: "https://picsum.photos/seed/prod44/300/300",
    originalPrice: "184256",
    currentPrice: "165830",
    discountRate: "10%",
    adTag: true,
    averageRating: "2.52",
    ratingCount: "729"
  },
  {
    id: "prod-045",
    brand: "브랜드명",
    name: "Deserunt 제품",
    image: "https://picsum.photos/seed/prod45/300/300",
    currentPrice: "90015",
    adTag: true,
    averageRating: "4.76",
    ratingCount: "885"
  },
  {
    id: "prod-046",
    brand: "브랜드명",
    name: "Autem 제품",
    image: "https://picsum.photos/seed/prod46/300/300",
    originalPrice: "48574",
    currentPrice: "29144",
    discountRate: "40%",
    adTag: true,
    averageRating: "3.10",
    ratingCount: "690"
  },
  {
    id: "prod-047",
    brand: "브랜드명",
    name: "Totam 제품",
    image: "https://picsum.photos/seed/prod47/300/300",
    originalPrice: "86160",
    currentPrice: "51696",
    discountRate: "40%",
    adTag: true,
    averageRating: "2.83",
    ratingCount: "962"
  },
  {
    id: "prod-048",
    brand: "브랜드명",
    name: "Placeat 제품",
    image: "https://picsum.photos/seed/prod48/300/300",
    originalPrice: "181050",
    currentPrice: "126735",
    discountRate: "30%",
    adTag: false,
    averageRating: "3.11",
    ratingCount: "489"
  },
  {
    id: "prod-049",
    brand: "브랜드명",
    name: "Modi 제품",
    image: "https://picsum.photos/seed/prod49/300/300",
    currentPrice: "79914",
    adTag: true,
    averageRating: "2.74",
    ratingCount: "446"
  },
  {
    id: "prod-050",
    brand: "브랜드명",
    name: "Nisi 제품",
    image: "https://picsum.photos/seed/prod50/300/300",
    originalPrice: "141038",
    currentPrice: "98726",
    discountRate: "30%",
    adTag: true,
    averageRating: "3.67",
    ratingCount: "751"
  },
  {
    id: "prod-051",
    brand: "브랜드명",
    name: "Repellendus 제품",
    image: "https://picsum.photos/seed/prod51/300/300",
    currentPrice: "199392",
    adTag: true,
    averageRating: "2.65",
    ratingCount: "750"
  },
  {
    id: "prod-052",
    brand: "브랜드명",
    name: "Quia 제품",
    image: "https://picsum.photos/seed/prod52/300/300",
    originalPrice: "58644",
    currentPrice: "52779",
    discountRate: "10%",
    adTag: true,
    averageRating: "2.98",
    ratingCount: "554"
  },
  {
    id: "prod-053",
    brand: "브랜드명",
    name: "Beatae 제품",
    image: "https://picsum.photos/seed/prod53/300/300",
    originalPrice: "66747",
    currentPrice: "46722",
    discountRate: "30%",
    adTag: true,
    averageRating: "2.96",
    ratingCount: "478"
  },
  {
    id: "prod-054",
    brand: "브랜드명",
    name: "Veniam 제품",
    image: "https://picsum.photos/seed/prod54/300/300",
    originalPrice: "49761",
    currentPrice: "34832",
    discountRate: "30%",
    adTag: true,
    averageRating: "4.52",
    ratingCount: "881"
  },
  {
    id: "prod-055",
    brand: "브랜드명",
    name: "Reiciendis 제품",
    image: "https://picsum.photos/seed/prod55/300/300",
    currentPrice: "55666",
    adTag: false,
    averageRating: "4.13",
    ratingCount: "558"
  },
  {
    id: "prod-056",
    brand: "브랜드명",
    name: "Nihil 제품",
    image: "https://picsum.photos/seed/prod56/300/300",
    originalPrice: "54448",
    currentPrice: "49003",
    discountRate: "10%",
    adTag: true,
    averageRating: "2.92",
    ratingCount: "502"
  },
  {
    id: "prod-057",
    brand: "브랜드명",
    name: "Ipsam 제품",
    image: "https://picsum.photos/seed/prod57/300/300",
    originalPrice: "86032",
    currentPrice: "60222",
    discountRate: "30%",
    adTag: true,
    averageRating: "4.76",
    ratingCount: "173"
  },
  {
    id: "prod-058",
    brand: "브랜드명",
    name: "Velit 제품",
    image: "https://picsum.photos/seed/prod58/300/300",
    originalPrice: "30565",
    currentPrice: "21395",
    discountRate: "30%",
    adTag: true,
    averageRating: "3.16",
    ratingCount: "807"
  },
  {
    id: "prod-059",
    brand: "브랜드명",
    name: "Aut 제품",
    image: "https://picsum.photos/seed/prod59/300/300",
    originalPrice: "104776",
    currentPrice: "73343",
    discountRate: "30%",
    adTag: true,
    averageRating: "4.24",
    ratingCount: "753"
  },
  {
    id: "prod-060",
    brand: "브랜드명",
    name: "Quidem 제품",
    image: "https://picsum.photos/seed/prod60/300/300",
    originalPrice: "157577",
    currentPrice: "141819",
    discountRate: "10%",
    adTag: false,
    averageRating: "2.97",
    ratingCount: "227"
  },
  {
    id: "prod-061",
    brand: "브랜드명",
    name: "Laudantium 제품",
    image: "https://picsum.photos/seed/prod61/300/300",
    originalPrice: "181828",
    currentPrice: "90914",
    discountRate: "50%",
    adTag: true,
    averageRating: "3.86",
    ratingCount: "770"
  },
  {
    id: "prod-062",
    brand: "브랜드명",
    name: "Voluptatibus 제품",
    image: "https://picsum.photos/seed/prod62/300/300",
    currentPrice: "44985",
    adTag: true,
    averageRating: "3.96",
    ratingCount: "519"
  },
  {
    id: "prod-063",
    brand: "브랜드명",
    name: "Ullam 제품",
    image: "https://picsum.photos/seed/prod63/300/300",
    currentPrice: "71270",
    adTag: false,
    averageRating: "4.90",
    ratingCount: "87"
  },
  {
    id: "prod-064",
    brand: "브랜드명",
    name: "Fuga 제품",
    image: "https://picsum.photos/seed/prod64/300/300",
    originalPrice: "47962",
    currentPrice: "28777",
    discountRate: "40%",
    adTag: true,
    averageRating: "2.67",
    ratingCount: "887"
  },
  {
    id: "prod-065",
    brand: "브랜드명",
    name: "Eos 제품",
    image: "https://picsum.photos/seed/prod65/300/300",
    currentPrice: "135847",
    adTag: true,
    averageRating: "4.85",
    ratingCount: "588"
  },
  {
    id: "prod-066",
    brand: "브랜드명",
    name: "Fuga 제품",
    image: "https://picsum.photos/seed/prod66/300/300",
    originalPrice: "181760",
    currentPrice: "109056",
    discountRate: "40%",
    adTag: true,
    averageRating: "2.60",
    ratingCount: "88"
  },
  {
    id: "prod-067",
    brand: "브랜드명",
    name: "Tempora 제품",
    image: "https://picsum.photos/seed/prod67/300/300",
    originalPrice: "183006",
    currentPrice: "109803",
    discountRate: "40%",
    adTag: true,
    averageRating: "3.81",
    ratingCount: "962"
  },
  {
    id: "prod-068",
    brand: "브랜드명",
    name: "Delectus 제품",
    image: "https://picsum.photos/seed/prod68/300/300",
    originalPrice: "83545",
    currentPrice: "41772",
    discountRate: "50%",
    adTag: true,
    averageRating: "4.29",
    ratingCount: "249"
  },
  {
    id: "prod-069",
    brand: "브랜드명",
    name: "Voluptatibus 제품",
    image: "https://picsum.photos/seed/prod69/300/300",
    originalPrice: "133752",
    currentPrice: "120376",
    discountRate: "10%",
    adTag: true,
    averageRating: "4.18",
    ratingCount: "312"
  },
  {
    id: "prod-070",
    brand: "브랜드명",
    name: "Voluptas 제품",
    image: "https://picsum.photos/seed/prod70/300/300",
    currentPrice: "112883",
    adTag: true,
    averageRating: "2.52",
    ratingCount: "641"
  },
  {
    id: "prod-071",
    brand: "브랜드명",
    name: "Reprehenderit 제품",
    image: "https://picsum.photos/seed/prod71/300/300",
    currentPrice: "56209",
    adTag: false,
    averageRating: "3.84",
    ratingCount: "523"
  },
  {
    id: "prod-072",
    brand: "브랜드명",
    name: "Inventore 제품",
    image: "https://picsum.photos/seed/prod72/300/300",
    originalPrice: "64722",
    currentPrice: "51777",
    discountRate: "20%",
    adTag: true,
    averageRating: "4.70",
    ratingCount: "905"
  },
  {
    id: "prod-073",
    brand: "브랜드명",
    name: "Animi 제품",
    image: "https://picsum.photos/seed/prod73/300/300",
    originalPrice: "126869",
    currentPrice: "101495",
    discountRate: "20%",
    adTag: true,
    averageRating: "2.89",
    ratingCount: "858"
  },
  {
    id: "prod-074",
    brand: "브랜드명",
    name: "Corporis 제품",
    image: "https://picsum.photos/seed/prod74/300/300",
    originalPrice: "109303",
    currentPrice: "65581",
    discountRate: "40%",
    adTag: false,
    averageRating: "4.96",
    ratingCount: "831"
  },
  {
    id: "prod-075",
    brand: "브랜드명",
    name: "Nemo 제품",
    image: "https://picsum.photos/seed/prod75/300/300",
    originalPrice: "32050",
    currentPrice: "16025",
    discountRate: "50%",
    adTag: false,
    averageRating: "4.54",
    ratingCount: "311"
  },
  {
    id: "prod-076",
    brand: "브랜드명",
    name: "Dolorum 제품",
    image: "https://picsum.photos/seed/prod76/300/300",
    originalPrice: "65203",
    currentPrice: "52162",
    discountRate: "20%",
    adTag: true,
    averageRating: "2.79",
    ratingCount: "114"
  },
  {
    id: "prod-077",
    brand: "브랜드명",
    name: "Neque 제품",
    image: "https://picsum.photos/seed/prod77/300/300",
    originalPrice: "70749",
    currentPrice: "56599",
    discountRate: "20%",
    adTag: false,
    averageRating: "3.20",
    ratingCount: "220"
  },
  {
    id: "prod-078",
    brand: "브랜드명",
    name: "Voluptates 제품",
    image: "https://picsum.photos/seed/prod78/300/300",
    originalPrice: "83371",
    currentPrice: "41685",
    discountRate: "50%",
    adTag: true,
    averageRating: "4.09",
    ratingCount: "275"
  },
  {
    id: "prod-079",
    brand: "브랜드명",
    name: "Officia 제품",
    image: "https://picsum.photos/seed/prod79/300/300",
    originalPrice: "158065",
    currentPrice: "126452",
    discountRate: "20%",
    adTag: false,
    averageRating: "4.76",
    ratingCount: "871"
  },
  {
    id: "prod-080",
    brand: "브랜드명",
    name: "Eum 제품",
    image: "https://picsum.photos/seed/prod80/300/300",
    originalPrice: "54195",
    currentPrice: "27097",
    discountRate: "50%",
    adTag: true,
    averageRating: "3.56",
    ratingCount: "288"
  },
  {
    id: "prod-081",
    brand: "브랜드명",
    name: "Natus 제품",
    image: "https://picsum.photos/seed/prod81/300/300",
    originalPrice: "30929",
    currentPrice: "24743",
    discountRate: "20%",
    adTag: true,
    averageRating: "4.43",
    ratingCount: "657"
  },
  {
    id: "prod-082",
    brand: "브랜드명",
    name: "Hic 제품",
    image: "https://picsum.photos/seed/prod82/300/300",
    originalPrice: "72357",
    currentPrice: "36178",
    discountRate: "50%",
    adTag: true,
    averageRating: "3.60",
    ratingCount: "727"
  },
  {
    id: "prod-083",
    brand: "브랜드명",
    name: "Quidem 제품",
    image: "https://picsum.photos/seed/prod83/300/300",
    currentPrice: "177038",
    adTag: true,
    averageRating: "2.78",
    ratingCount: "972"
  },
  {
    id: "prod-084",
    brand: "브랜드명",
    name: "Facilis 제품",
    image: "https://picsum.photos/seed/prod84/300/300",
    currentPrice: "173023",
    adTag: true,
    averageRating: "4.59",
    ratingCount: "601"
  },
  {
    id: "prod-085",
    brand: "브랜드명",
    name: "Saepe 제품",
    image: "https://picsum.photos/seed/prod85/300/300",
    originalPrice: "68821",
    currentPrice: "48174",
    discountRate: "30%",
    adTag: false,
    averageRating: "2.82",
    ratingCount: "320"
  },
  {
    id: "prod-086",
    brand: "브랜드명",
    name: "Quaerat 제품",
    image: "https://picsum.photos/seed/prod86/300/300",
    originalPrice: "40458",
    currentPrice: "32366",
    discountRate: "20%",
    adTag: true,
    averageRating: "3.03",
    ratingCount: "260"
  },
  {
    id: "prod-087",
    brand: "브랜드명",
    name: "Nostrum 제품",
    image: "https://picsum.photos/seed/prod87/300/300",
    originalPrice: "122714",
    currentPrice: "73628",
    discountRate: "40%",
    adTag: true,
    averageRating: "4.71",
    ratingCount: "421"
  },
  {
    id: "prod-088",
    brand: "브랜드명",
    name: "Iure 제품",
    image: "https://picsum.photos/seed/prod88/300/300",
    originalPrice: "70515",
    currentPrice: "63463",
    discountRate: "10%",
    adTag: false,
    averageRating: "4.66",
    ratingCount: "824"
  },
  {
    id: "prod-089",
    brand: "브랜드명",
    name: "In 제품",
    image: "https://picsum.photos/seed/prod89/300/300",
    currentPrice: "138080",
    adTag: true,
    averageRating: "2.95",
    ratingCount: "951"
  },
  {
    id: "prod-090",
    brand: "브랜드명",
    name: "Voluptatem 제품",
    image: "https://picsum.photos/seed/prod90/300/300",
    originalPrice: "137928",
    currentPrice: "68964",
    discountRate: "50%",
    adTag: true,
    averageRating: "4.66",
    ratingCount: "835"
  },
  {
    id: "prod-091",
    brand: "브랜드명",
    name: "Vel 제품",
    image: "https://picsum.photos/seed/prod91/300/300",
    originalPrice: "99941",
    currentPrice: "89946",
    discountRate: "10%",
    adTag: true,
    averageRating: "4.47",
    ratingCount: "115"
  },
  {
    id: "prod-092",
    brand: "브랜드명",
    name: "Incidunt 제품",
    image: "https://picsum.photos/seed/prod92/300/300",
    originalPrice: "40151",
    currentPrice: "28105",
    discountRate: "30%",
    adTag: true,
    averageRating: "3.06",
    ratingCount: "841"
  },
  {
    id: "prod-093",
    brand: "브랜드명",
    name: "Non 제품",
    image: "https://picsum.photos/seed/prod93/300/300",
    originalPrice: "121660",
    currentPrice: "97328",
    discountRate: "20%",
    adTag: true,
    averageRating: "4.55",
    ratingCount: "897"
  },
  {
    id: "prod-094",
    brand: "브랜드명",
    name: "Error 제품",
    image: "https://picsum.photos/seed/prod94/300/300",
    currentPrice: "88438",
    adTag: true,
    averageRating: "4.15",
    ratingCount: "413"
  },
  {
    id: "prod-095",
    brand: "브랜드명",
    name: "Unde 제품",
    image: "https://picsum.photos/seed/prod95/300/300",
    currentPrice: "103034",
    adTag: true,
    averageRating: "4.92",
    ratingCount: "290"
  },
  {
    id: "prod-096",
    brand: "브랜드명",
    name: "Ex 제품",
    image: "https://picsum.photos/seed/prod96/300/300",
    originalPrice: "198160",
    currentPrice: "118896",
    discountRate: "40%",
    adTag: true,
    averageRating: "3.50",
    ratingCount: "868"
  },
  {
    id: "prod-097",
    brand: "브랜드명",
    name: "Alias 제품",
    image: "https://picsum.photos/seed/prod97/300/300",
    currentPrice: "116808",
    adTag: false,
    averageRating: "2.79",
    ratingCount: "998"
  },
  {
    id: "prod-098",
    brand: "브랜드명",
    name: "Odit 제품",
    image: "https://picsum.photos/seed/prod98/300/300",
    originalPrice: "76810",
    currentPrice: "46086",
    discountRate: "40%",
    adTag: true,
    averageRating: "4.91",
    ratingCount: "276"
  },
  {
    id: "prod-099",
    brand: "브랜드명",
    name: "Molestiae 제품",
    image: "https://picsum.photos/seed/prod99/300/300",
    originalPrice: "58417",
    currentPrice: "35050",
    discountRate: "40%",
    adTag: true,
    averageRating: "3.59",
    ratingCount: "751"
  },
  {
    id: "prod-100",
    brand: "브랜드명",
    name: "Corrupti 제품",
    image: "https://picsum.photos/seed/prod100/300/300",
    originalPrice: "144398",
    currentPrice: "86638",
    discountRate: "40%",
    adTag: true,
    averageRating: "4.96",
    ratingCount: "123"
  }
];
