function WordCard({hanzi,pinyin,meaning}){

return(

<div
className="
bg-white
rounded-[30px]
p-8
shadow-sm
hover:shadow-xl
duration-300
"
>

<h1 className="text-5xl font-bold">

{hanzi}

</h1>

<p className="mt-4 text-blue-600">

{pinyin}

</p>

<p className="mt-4 text-xl">

{meaning}

</p>

</div>

)

}

export default WordCard;