const ItemNotFound = () => (
  <div className="limits">
    <div className="not-found">
      <div className="not-found-text">
        Não conseguimos encontrar o item buscado :(
        <div>
          Você pode tentar realizar uma nova busca por favor!
        </div>
      </div>
      <style jsx>{`
        .not-found {
          font-size: 14px;
          text-align: center;
          min-height: 600px;
          padding-top: 20px;
        }  
      `}</style>
    </div>
  </div>
)

export default ItemNotFound