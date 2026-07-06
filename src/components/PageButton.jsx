function PageButton({text,active}){

return(

<button
className={`
px-5
py-3
rounded-xl
font-semibold

${active
?"bg-blue-600 text-white"
:"bg-white hover:bg-gray-100"}

`}
>

{text}

</button>

)

}

export default PageButton;