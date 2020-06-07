import React, { PureComponent } from 'react'
import { CanvasOverlay } from 'react-map-gl'

export default class PolylineOverlay extends PureComponent {
  _redraw ({ width, height, ctx, isDragging, project, unproject }) {
    const { point, color = 'red', lineWidth = 2} = this.props;
    ctx.clearRect(0, 0, width, height)
    ctx.globalCompositeOperation = 'lighter'

    if (!isDragging && point) {
      fetch('https://api.mapbox.com/optimized-trips/v1/mapbox/cycling/' + point[0] + ',' + point[1] + ';' + '-87.654406,41.954245?source=first&destination=last&geometries=geojson&access_token=pk.eyJ1IjoiY2hyaXNsYmFycmVyYSIsImEiOiJja2FrMWRmMTEwMG40MnVzOWZsa28ycm0wIn0.QTbSR-OZi0rfrS8ZFvJQnA&overview=full&roundtrip=false')     
        .then(res => res.json())
        .then((result) => {
          ctx.lineWidth = lineWidth
          ctx.strokeStyle = color
          ctx.beginPath()
          result.trips[0].geometry.coordinates.forEach(point => {
            const pixel = project([point[0], point[1]])
            ctx.lineTo(pixel[0], pixel[1])
          })
          ctx.stroke()
        });
      // ctx.lineWidth = lineWidth
      // ctx.strokeStyle = color
      // ctx.beginPath()
      // coordniates.forEach(point => {
      //   const pixel = project([point[0], point[1]])
      //   ctx.lineTo(pixel[0], pixel[1])
      // })
      // ctx.stroke()
    }
  }

  render () {
    return <CanvasOverlay redraw={this._redraw.bind(this)} />
  }
}