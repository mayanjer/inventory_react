

export default function InvoiceCard() {
    return (
      
        <div className="card revenue-widget flex-fill p-0">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
              <div>
                <h4 className="mb-1">UGX 0</h4>
                <p>Invoice Due</p>
              </div>
              <span className="revenue-icon bg-teal-transparent text-teal">
                <i className="ti ti-chart-pie fs-16"></i>
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-0">
                <span className="fs-13 fw-bold text-success">+35%</span> vs Last
                Month
              </p>
              <a href="#" className="text-decoration-underline fs-13 fw-medium">
                View All
              </a>
          
          </div>
        </div>
      </div>
    );
}