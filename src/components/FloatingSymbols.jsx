import React from 'react'

const FloatingSymbols = ({ isFixed = false }) => {
  return (
    <div className={isFixed ? 'fixed-symbols' : 'floating-symbols'}>
      <span className="symbol sym-pi">π</span>
      <span className="symbol sym-sum">∑</span>
      <span className="symbol sym-root">√</span>
      <span className="symbol sym-theta">θ</span>
      <span className="symbol sym-inf">∞</span>
      <span className="symbol sym-delta">Δ</span>
      <span className="symbol sym-int">∫</span>
      <span className="symbol sym-plus">+</span>
      <span className="symbol sym-minus">−</span>
      <span className="symbol sym-percent">%</span>
      <span className="symbol sym-div">÷</span>
      <span className="symbol sym-mult">×</span>
      {/* New symbols */}
      <span className="symbol sym-alpha">α</span>
      <span className="symbol sym-beta">β</span>
      <span className="symbol sym-lambda">λ</span>
      <span className="symbol sym-omega">Ω</span>
      <span className="symbol sym-fx">f(x)</span>
      <span className="symbol sym-limit">lim</span>
      <span className="symbol sym-log">log</span>
      <span className="symbol sym-approx">≈</span>
      <span className="symbol sym-noteq">≠</span>
      <span className="symbol sym-brace">{"{ }"}</span>
      <span className="symbol sym-dy dx">dy/dx</span>
      <span className="symbol sym-sigma">σ</span>
    </div>
  )
}

export default FloatingSymbols
