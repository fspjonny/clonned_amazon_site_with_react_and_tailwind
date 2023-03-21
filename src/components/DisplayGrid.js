export default function DisplayGrid(props) {
    return (
        <div className="flex flex-col items-center mt-4
        md:grid md:gap-4 md:grid-cols-4 md:auto-rows-auto md:p-4">
            {props.children}
        </div>
    )
}