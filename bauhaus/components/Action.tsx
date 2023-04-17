export default (
    {
        label,
        style
    }:{
        label:string,
        style?: 'primary' | 'secondary'
    }) => {
    return(
        <button className={`border-2 border-bauhaus-primary-500 px-12 py-3 font-futura-pt font-bold
        text-sm text-bauhaus-primary-500 hover:text-white hover:bg-bauhaus-primary-500
        ${style == 'secondary'
        ? 'bg-bauhaus-neutral-300 hover:bg-bauhaus-neutral-500 text-black border-bauhaus-neutral-300 hover:border-bauhaus-neutral-500'
        : 'border-bauhaus-primary-500 hover:text-white hover:bg-bauhaus-primary-500'
        }`}>
            {label}
        </button>
    )
}