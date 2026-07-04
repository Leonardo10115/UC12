
// assim criamos um componente reutilizavel
function Botao({texto, variante="primario", href}) {
    // em JSX, nao existe 'class' e sim 'className'

    const estilos ={
        primario: "bg-terracota text-creme-claro hover:bg-terracota-escuro",
        secundario: "bg-transparent text-cafe-900 hover:bg-cafe-900 hover:text-creme-claro"
    }
}

export default Botao

