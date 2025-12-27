export default function SalesPurchaseCard() {
  return (
    <div class="card flex-fill">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div className="d-inline-flex align-items-center">
          <span className="title-icon bg-soft-primary fs-16 me-2">
            <i className="ti ti-shopping-cart"></i>
          </span>
          <h5 className="card-title mb-0">Sales & Purchase</h5>
        </div>
        <ul className="nav btn-group custom-btn-group">
          <a className="btn btn-outline-light" href="javascript:void(0);">
            1D
          </a>
          <a className="btn btn-outline-light" href="javascript:void(0);">
            1W
          </a>
          <a className="btn btn-outline-light" href="javascript:void(0);">
            1M
          </a>
          <a className="btn btn-outline-light" href="javascript:void(0);">
            3M
          </a>
          <a className="btn btn-outline-light" href="javascript:void(0);">
            6M
          </a>
          <a className="btn btn-outline-light active" href="javascript:void(0);">
            1Y
          </a>
        </ul>
      </div>
      <div className="card-body pb-0">
        <div>
          <div className="d-flex align-items-center gap-2">
            <div className={"border p-2 br-8"}>
              <p className="d-inline-flex align-items-center mb-1">
                <i className="ti ti-circle-filled fs-8 text-primary-300 me-1"></i>
                Total Purchase
              </p>
              <h4>3K</h4>
            </div>
            <div className="border p-2 br-8">
              <p class="d-inline-flex align-items-center mb-1">
                <i className="ti ti-circle-filled fs-8 text-primary me-1"></i>Total
                Sales
              </p>
              <h4>1K</h4>
            </div>
          </div>
          <div id="sales-daychart"></div>
        </div>
      </div>
    </div>
  );
}
