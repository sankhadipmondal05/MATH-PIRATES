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
      <span className="symbol sym-sigma">σ</span>
      {/* Even more symbols */}
      <span className="symbol sym-partial">∂</span>
      <span className="symbol sym-grad">∇</span>
      <span className="symbol sym-prod">∏</span>
      <span className="symbol sym-prop">∝</span>
      <span className="symbol sym-belongs">∈</span>
      <span className="symbol sym-forall">∀</span>
      <span className="symbol sym-exists">∃</span>
      <span className="symbol sym-angle">∠</span>
      <span className="symbol sym-mu">μ</span>
      <span className="symbol sym-rho">ρ</span>
      <span className="symbol sym-tau">τ</span>
      <span className="symbol sym-phi">φ</span>
      <span className="symbol sym-double-int">∬</span>
    </div>
  )
}

export default FloatingSymbols
