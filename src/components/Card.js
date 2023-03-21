export default function Card(props) {
    return (
    <div className="bg-white flex flex-wrap justify-center w-72 my-2 md:w-full md:my-0">
        <div className="p-4 font-bold text-left md:h-28 lg:h-20 text-xl">
            {props.titulo}
        </div>

        <div className="flex flex-auto justify-center cursor-pointer object-scale-down">
            <img src={props.image} alt={props.nomeImagem} />
        </div>
        
        <div className="flex flex-auto text-sm my-2 ml-3 text-gray-500 hover:underline cursor-pointer">
            {props.link}
        </div>
    </div>        
    )
}