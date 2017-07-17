const Loading = () => (
  <div className="limits">
    <div className="loading">
      <img className="loading-icon" src="/static/img/spinner.gif" width="60" title="Carregando..." alt="Carregando..."/>
      <style jsx>{`
        .loading {
          text-align: center;
          min-height: 600px;
          padding-top: 20px;
        }  
      `}</style>
    </div>
  </div>
)

export default Loading