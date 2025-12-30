const Button = ({ title, icon, color = '#FAD71B', className = '' }) => {
    const textColor = color === '#0D333D' ? 'text-white' : 'text-black';

    return (
        <button
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-['Poppins'] font-medium shadow-lg transition-transform hover:scale-105 ${textColor} ${className}`}
            style={{ backgroundColor: color }}
        >
            <span>{title}</span>
            {icon && <span className="text-xl">{icon}</span>}
        </button>
    )
}

export default Button