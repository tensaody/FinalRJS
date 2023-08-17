import React from 'react'

export default function Loading() {
  return (
    <div class="card" aria-hidden="true">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4KK-Q2mcxD1oB5e3SPK-Sa0_eqpXkUaFe7t2gEuvYqA&s" class="card-img-top" alt="placholder image"/>
    <div class="card-body">
        <h5 class="card-title placeholder-glow">
        <span class="placeholder col-6"></span>
        </h5>
        <p class="card-text placeholder-glow">
        <span class="placeholder col-7"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-6"></span>
        <span class="placeholder col-8"></span>
        </p>
        <a class="btn btn-primary disabled placeholder col-6"></a>
    </div>
    </div>
  )
}
