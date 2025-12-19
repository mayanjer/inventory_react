

function ShortCard({ variant, cardHeader }) {
  return (
    
      <div className={`card bg-${variant} sale-widget flex-fill p-0`} >
        <div className="card-body d-flex align-items-center">
          <span className="sale-icon bg-white text-primary">
            <i className="ti ti-file-text fs-24"></i>
          </span>
          <div className="ms-2">
            <p className="text-white mb-1">{cardHeader}</p>
            <div className="d-inline-flex align-items-center flex-wrap gap-0">
              <h4 className="text-white">UGX total Sales</h4>
              <span className="badge badge-soft-primary">
                <i className="ti ti-arrow-up me-1"></i>+22%
              </span>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default ShortCard;
