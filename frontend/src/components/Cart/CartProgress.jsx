const CartProgress = () => {
  return (
    <div className="free-progress-bar">
      <p className="progress-bar-title">
        <strong>
          You have reached the minimum amount for the free shipping!
        </strong>
      </p>
      <div className="progress-bar">
        <span className="progress"></span>
      </div>
    </div>
  )
}

export default CartProgress
