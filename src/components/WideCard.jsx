function WideCard() {
    return (
        <>
            
            <div className="card  mt-5">
  <div class="card-body">
    <form
      id="close-day-form"
      class="row row-gap-2 align-items-end mb-3"
      method="post"
      action="{% url 'close_day' %}"
    >
      <div class="col-md-3">
        <label class="form-label">Store</label>
        <select name="store_id" class="form-select" required>
          <option value="">Select Store</option>
          
          <option value="store-id">Store Name</option>
       
        </select>
      </div>
      <div class="col-md-3">
        <label class="form-label">Date</label>
        <input
          type="date"
          name="date"
          class="form-control"
          value="{{ selected_end_date}}"
          required
        />
      </div>
      <div class="col-md-3 mt-2">
        <button class="btn btn-warning" type="submit">
          Close Day (Generate Daily Summary)
        </button>
      </div>
    </form>
    <div id="close-day-result"></div>
  </div>
</div>
        
        </>
    )
}

export default WideCard;