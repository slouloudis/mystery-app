'use client'
import { useState } from "react"
import Image from "next/image"

export default function Page() {
  const foods = [
    { name: 'Pizza', image:'https://uk.ooni.com/cdn/shop/articles/20220211142645-margherita-9920_e41233d5-dcec-461c-b07e-03245f031dfe.jpg?v=1737105431&width=1080', isSoup: false},
    { name: 'Ramen', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIepz2ae9Apf9z8L0LpzrLNFT0Wcv5_nHiQ&s', isSoup: true},
    { name: 'Cereal', image: 'https://www.verywellhealth.com/thmb/HEl_K0SAzH5F81RHXCvSvGhroq0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/30D7A016-ABA5-48DD-BE39-3E7A223A03BF-96f2ba9e6c724dc9b2ba638b0c0f44a2.jpeg', isSoup: true},
    { name: 'Burger', image: 'https://www.thespruceeats.com/thmb/UpVWAcHnFEe_KvQpYsR1a7U-WY0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-your-best-grilled-burger-recipe-7511041-hero-C-c5080fa5f97c4c2b908968527f8a851b.jpg', isSoup: false},
    { name: 'Tomato Soup', image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/01/tomato-soup-recipe.jpg', isSoup: true},
    {name: "Mystery food", image: "https://scrandle.com/scran_img/FLLYGFKXoAA7KNo.webp", isSoup: false},
    { name: 'Ice Cream', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4F2gZidrNWH_iPuypbfzcDFKGRuy-6CaTw&s', isSoup: true},
    {name: "Rice Pudding", image: "https://tastefullygrace.com/wp-content/uploads/2024/12/Rice-Pudding-Recipe-1-scaled.jpg", isSoup: true}, {
      name: 'Non-Alchoholic Cocktail', image: 'https://www.performancefoodservice.com/-/media/PFS/DISH-Recipes/Hero---Full-Width/performancefoodservice-DISHRecipes-Smores_Blended_Martini-herofull.jpg?la=en&h=966&w=2302&hash=59B7DE220684375BBE0FA7ECB3BDB9A6', isSoup: true
    }, {
      name: 'Pesto with too much oil it', image: 'https://www.theclevercarrot.com/wp-content/uploads/2022/05/Pesto-alla-Genovese.jpg', isSoup: false
    }, {
      name: 'Baked beans', image: 'https://www.recipetineats.com/tachyon/2014/05/Homemade-Heinz-Baked-Beans_0-SQ.jpg?resize=500%2C500', isSoup: true
    }, {
      name: "Smoothie bowl", image: "https://i0.wp.com/daniliciousdishes.com/wp-content/uploads/2018/07/summer-smoothie-bowl-3.jpg?fit=720%2C1080&ssl=1", isSoup: true
    },
    {
      name: "Lava", image: "https://media.istockphoto.com/id/492798423/photo/liquid-molten-steel-industry.jpg?s=612x612&w=0&k=20&c=YitiHgqTY6W1hjPGb9ToAgIf6o_82MviiTgL8dpSVmo=", isSoup: true
    }
  ]
  const [food, setFood] = useState(foods[1])

  function selectSoup() {
    return foods[Math.floor(Math.random() * foods.length)]
  }
  return (
    <section>
      <h1>is this soup?</h1>
      <Image height={400} width={600} alt='random food' src={food.image} />
      <h2 className={`text-xl mt-4 ${food.isSoup ? 'text-green-400': 'text-red-400'}`}>
        {food.isSoup ? 'Yes this is soup!' : 'NO, this is NOT soup!'}
      </h2>
      <button onClick={() => setFood(selectSoup())}>new soup</button>
    </section>
  )
}