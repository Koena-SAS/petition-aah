export function senateResponse(number) {
  return {
    data: `<div id="initiative-416-votes-count" class="progress__bar progress__bar--vertical">
  <div class="progress__bar__title">

          <span class="progress__bar__number">${number}</span>/100000      <span class="progress__bar__text">SIGNATURES</span>
      </div>
      <div class="progress progress__bar__bar" role="progressbar" tabindex="0" aria-valuenow="39.421" aria-valuemin="0" aria-valuetext="39.421 percent" aria-valuemax="100">
      <div class="progress-meter progress__bar__bar--complete" style="width: 39.421%"></div>
      <div class="progress__bar__bar--incomplete" style="width:calc(100% - 39.421%);"></div>
    </div>

          <div class="progress__bar__subtitle">
        Besoin de plus de signatures      </div>
      </div>`,
  };
}
