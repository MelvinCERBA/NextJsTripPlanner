const COMSelect = ({ children, onChange = (event) => {}, values = [] }) => {

  function createSelectItems() {
    let items = [];
    let i = 1;

    items.push(<option className="font-h3 text-center" key={0} value="">Please choose a stream</option>)

    for (const v of values) {
      items.push(<option className="font-h3 text-center" key={i} value={v}>{v}</option>);
      i++;
    }
    return items;
  }  

  return (
    <>
      <div className="text-2xl text-center font-h2 text-black-light dark:text-slate-dark">
        <label htmlFor="com-select" className="mx-2">{children} :</label>
        <select className="p-2 rounded-xl text-center text-red-light dark:text-red-dark" onChange={onChange} name="caca" id="com-select">
          {createSelectItems()}
          {/* {values.map((v, id) => {
            <option value={v} key={id}>{v}</option>
          })} */}
        </select>
      </div>
    </>
  )
}

export default COMSelect;