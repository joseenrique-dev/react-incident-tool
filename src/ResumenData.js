const ResumenData = (props) => {
  return (
    <div className="resumen-data">
      <div className="resumen-data__item">
        <div className="resumen-data__item__title">
          <span>{props.title}</span>
        </div>
        <div className="resumen-data__item__value">
          <span>{props.value}</span>
        </div>
      </div>
    </div>
  );
}