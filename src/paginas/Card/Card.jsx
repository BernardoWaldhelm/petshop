import './estilo.css'

const Card = (props) => {
    return (

        <div className="col">
            <table className="tabela">
                <thead>
                    <tr className='lista'>
                        <th>Produtos:</th>
                        <th>Preço:</th>
                    </tr>
                </thead>

                <tbody id="itens">


                    {props.children}
                </tbody>

            </table>
        </div>

    )

}

export default Card;