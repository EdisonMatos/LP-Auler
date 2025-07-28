export default function CardNews({
  title = "Título do Card",
  description = "Descrição do conteúdo do card.",
  href = "#",
  buttonText = "Acessar",
  className = "",
  textColor = "text-black",
  bgColor = "bg-white",
  borderColor = "border-gray-200",
  shadow = "shadow-xl",
  rounded = "rounded-2xl",
  buttonClass = "bg-primary text-white hover:bg-primary/90 transition desktop1:hover:scale-110",
}) {
  return (
    <div
      className={`p-6 border transition-all ${rounded} ${shadow} ${bgColor} ${borderColor} ${textColor} ${className}`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4 text-sm opacity-80">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block px-5 py-2 rounded-full font-medium transition ${buttonClass}`}
      >
        {buttonText}
      </a>
    </div>
  );
}
