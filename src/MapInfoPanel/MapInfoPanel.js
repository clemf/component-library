import React from 'react';
import RechartsPie from '../RechartsPie/RechartsPie';

const data = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
];

// This base can be adjusted to scale up or down the chart and legend
const proportionBase = 200;

// These multipliers can be adjusted to modify the individual
const chartProportions = {
  chartWidth: proportionBase * 2,
  chartHeight: proportionBase * 1,
  iconSize: proportionBase * 0.075,
  pieInnerRadius: proportionBase * 0.2,
  pieOuterRadius: proportionBase * 0.4,
};

// Styles here based on src/Pie/Pie.css
const styles = {
  fontFamily: 'Roboto Condensed',
  fontSize: proportionBase * 0.08,
  fontWeight: 400,
  color: '#706371',
  fill: '#706371',
};

const colors = ['#a6cee3', '#1f78b4'];

const MapInfoPanel = ({ title }) => (
  <div>
    <h3>{ title }</h3>
    <div>
      <RechartsPie
        data={data}
        chartProportions={chartProportions}
        colors={colors}
        styles={styles}
      />
    </div>
  </div>
);

export default MapInfoPanel;
