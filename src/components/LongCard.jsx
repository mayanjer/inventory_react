function CardInfo() {
  return (
    <div className="card p-2">
      <div className="card-body">
        <form
          id="close-day-form"
          className="row row-gap-2 align-items-end mb-3"
          method="post"
        >
          <div className="col-md-3">
            <label className="form-label">Store</label>
            <select name="store_id" className="form-select" required>
              <option value="">Select Store</option>

              <option value="">store Name</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              name="date"
              className="form-control"
              value="{{ selected_end_date}}"
              required
            />
          </div>
          <div className="col-md-3">
            <button className="btn btn-warning" type="submit">
              Generate Daily Summary
            </button>
          </div>
        </form>
        <div id="close-day-result"></div>
      </div>
    </div>
  );
}

export default CardInfo;
