export default function OverallInfoCard() {
  return (
    <div class="card flex-fill">
      <div class="card-header">
        <div class="d-inline-flex align-items-center">
          <span class="title-icon bg-soft-info fs-16 me-2">
            <i class="ti ti-info-circle"></i>
          </span>
          <h5 class="card-title mb-0">Overall Information</h5>
        </div>
      </div>
      <div class="card-body">
        <div class="row g-3">
          <div class="col-md-4">
            <div class="info-item border bg-light p-3 text-center d-inline-flex align-items-center">
              <div class="mb-2 text-info fs-24">
                <i class="ti ti-user-check"></i>
              </div>
              <p class="mb-1">Suppliers</p>
              <h5>5</h5>
            </div>
          </div>
          <div class="col-md-4">
            <div class="info-item border bg-light p-3 text-center d-inline-flex align-items-center">
              <div class="mb-2 text-orange fs-24">
                <i class="ti ti-users"></i>
              </div>
              <p class="mb-1">Customer</p>
              <h5>7</h5>
            </div>
          </div>
          <div class="col-md-4">
            <div class="info-item border bg-light p-3 text-center d-inline-flex align-items-center">
              <div class="mb-2 text-teal fs-24">
                <i class="ti ti-shopping-cart"></i>
              </div>
              <p class="mb-1">Orders</p>
              <h5>9</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer pb-sm-0">
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
          <h5>Customers Overview</h5>
          <div class="dropdown dropdown-wraper">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn btn-sm btn-white"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="ti ti-calendar me-1"></i>Today
            </a>
            <ul class="dropdown-menu p-3">
              <li>
                <a href="javascript:void(0);" class="dropdown-item d-inline-flex align-items-center">
                  Today
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item">
                  Weekly
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item">
                  Monthly
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-sm-5">
            <div id="customer-chart"></div>
          </div>
          <div class="col-sm-7">
            <div class="row gx-0">
              <div class="col-sm-6">
                <div class="text-center border-end">
                  <h2 class="mb-1">5.5K</h2>
                  <p class="text-orange mb-2">First Time</p>
                  <span class="badge badge-success badge-xs d-inline-flex align-items-center">
                    <i class="ti ti-arrow-up-left me-1"></i>25%
                  </span>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="text-center">
                  <h2 class="mb-1">3.5K</h2>
                  <p class="text-teal mb-2">Return</p>
                  <span class="badge badge-success badge-xs d-inline-flex align-items-center">
                    <i class="ti ti-arrow-up-left me-1"></i>21%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
